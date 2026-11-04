import { Suspense } from "react";

import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

import { UmamiAnalytics } from "@/components/analytics/UmamiAnalytics";
import { CustomCursor } from "@/components/common/CustomCursor";
import { Footer } from "@/components/common/Footer";
import { HydrationFix } from "@/components/common/HydrationFix";
import { Navbar } from "@/components/common/Navbar";
import { NavigationProgress } from "@/components/common/NavigationProgress";
import { OnekoCat } from "@/components/common/OnekoCat";
import { Quote } from "@/components/common/Quote";
import { Reveal } from "@/components/common/Reveal";
import { poppins } from "@/config/font";
import { AppProviders } from "@/providers/AppProviders";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://rizzii.me"),
  alternates: {
    canonical: "https://rizzii.me",
  },
  title: {
    default: "Rishi Ghosh - Open Source & Developer",
    template: "%s",
  },

  description:
    "I build products that ship and help solopreneurs grow their presence through code, design, and content.",

  openGraph: {
    type: "website",
    url: "https://rizzii.me/",
    title: "Rishi Ghosh - Open Source & Developer",
    description:
      "I build products that ship and help solopreneurs grow their presence through code, design, and content.",
    siteName: "Rishi Ghosh",
    images: [
      {
        url: "https://rizzii.me/assets/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Rishi Ghosh Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rishi Ghosh - Open Source & Developer",
    description:
      "I build products that ship and help solopreneurs grow their presence through code, design, and content.",
    images: ["https://rizzii.me/assets/hero.jpeg"],
    creator: "@wasRizzii",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/assets/portfolio-favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/assets/portfolio-favicon.png",
    apple: "/assets/portfolio-favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
      suppressContentEditableWarning
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <HydrationFix />
        <Suspense fallback={null}>
          <AppProviders>
            <NavigationProgress />
            <Toaster richColors position="top-right" />
            <CustomCursor />
            <Navbar />
            <OnekoCat />
            {children}
            <Reveal delay={0.2}>
              <Quote />
            </Reveal>
            <Footer />
            <Analytics />
            <UmamiAnalytics />
            <SpeedInsights />
          </AppProviders>
        </Suspense>
      </body>
    </html>
  );
}
