import type { Metadata } from "next";
import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Reveal } from "@/components/common/Reveal";
import { SubHeading } from "@/components/common/SubHeading";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { generateContentMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return generateContentMetadata({
    title: "Resume - Rishi Ghosh",
    description:
      "View and download Rishi Ghosh's resume, technical skills, projects, and educational background.",
    image: "/meta/resume.png",
    path: "/resume",
    type: "website",
  });
}

export default function ResumePage() {
  return (
    <Container className="mt-5 px-4 md:px-6 lg:px-0">
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Heading as="h1">Resume</Heading>
            <SubHeading>View and download my professional resume.</SubHeading>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/RIshi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "gap-2 rounded-xl"
              )}
            >
              <ExternalLink className="size-4" />
              Open PDF
            </a>
            <a
              href="/RIshi_Resume.pdf"
              download="Rishi_Ghosh_Resume.pdf"
              className={cn(buttonVariants(), "gap-2 rounded-xl")}
            >
              <Download className="size-4" />
              Download
            </a>
          </div>
        </div>

        <Separator className="my-5 mt-8" />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="border-border bg-muted/20 relative my-6 overflow-hidden rounded-2xl border shadow-lg">
          <Image
            src="/resume-preview.png"
            alt="Rishi Ghosh Resume Preview"
            width={1200}
            height={1600}
            className="w-full object-contain"
            priority
          />
        </div>
      </Reveal>
    </Container>
  );
}
