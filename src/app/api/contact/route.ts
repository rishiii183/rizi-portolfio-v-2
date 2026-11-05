import { NextResponse } from "next/server";

import { Resend } from "resend";

import { contactFormSchema } from "@/lib/contact-schema";

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_PAYLOAD_SIZE = 32_768; // 32 KB max body

function getClientIP(request: Request) {
  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

function cleanupRateLimitStore() {
  const now = Date.now();
  // Evict expired entries when store grows to prevent memory exhaustion
  if (rateLimitStore.size > 200) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (now >= value.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  cleanupRateLimitStore();

  const entry = rateLimitStore.get(ip);

  if (!entry || now >= entry.resetTime) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - entry.count,
  };
}

export async function POST(request: Request) {
  try {
    // 1. Guard against payload flood
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_SIZE) {
      return NextResponse.json(
        { error: "Payload too large." },
        { status: 413 }
      );
    }

    const ip = getClientIP(request);
    const limit = checkRateLimit(ip);

    if (!limit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        {
          status: 429,
          headers: {
            "Retry-After": String(RATE_LIMIT_WINDOW / 1000),
          },
        }
      );
    }

    const body: unknown = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Please check your details and try again.",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, message, website } = parsed.data;

    // 2. Honeypot check: If the hidden website field is populated, a bot submitted the form.
    // Silently return success without dispatching email or consuming API credits.
    if (website && website.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully!",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL;
    const sender = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      console.error("Contact email configuration is incomplete.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Sanitize subject to prevent header injection
    const sanitizedSubject = `Portfolio contact: ${name.replace(/[\r\n]+/g, " ").trim().slice(0, 100)}`;

    const { data, error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: sanitizedSubject,
      text: [
        "New message received through your portfolio.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend delivery failed:", error.message);

      return NextResponse.json(
        { error: "Unable to send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      id: data?.id,
    });
  } catch {
    console.error("Contact API error occurred");

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
