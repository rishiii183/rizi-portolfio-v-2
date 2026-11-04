import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const token = process.env.VERCEL_TOKEN_ID;
  const projectId = process.env.VERCEL_PROJECT_ID;

  if (!token || !projectId) {
    return NextResponse.json({ pageviews: 0 });
  }

  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path");

  const url = new URL(
    "https://api.vercel.com/v1/query/web-analytics/visits/count"
  );

  url.searchParams.set("projectId", projectId);

  if (path) {
    url.searchParams.set(
      "filter",
      `requestPath eq '${path.replace(/'/g, "''")}'`
    );
  }

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return NextResponse.json({ pageviews: 0 });
    }

    const result = await response.json();

    return NextResponse.json(result.data ?? { pageviews: 0 });
  } catch {
    return NextResponse.json({ pageviews: 0 });
  }
}
