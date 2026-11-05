import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { educationData } from "@/config/education";
import { generateContentMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return generateContentMetadata({
    title: "Education - Academic Journey & Background",
    description:
      "Explore my academic journey, degrees, and educational institutions.",
    image: "/meta/resume.png",
    path: "/education",
    type: "website",
  });
}

export default function EducationPage() {
  return (
    <Container className="mt-5 px-4 md:px-6 lg:px-0">
      <Reveal>
        <div className="flex items-center justify-start">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-100/60 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-black dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
          >
            <ArrowLeft className="size-3.5" />
            Back
          </Link>
        </div>

        <div className="my-8 text-center sm:my-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
            Education
          </h1>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            My academic journey and educational background.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-base font-bold text-neutral-900 sm:text-lg dark:text-neutral-100">
            All Education{" "}
            <span className="text-xs font-normal text-neutral-500 sm:text-sm">
              ({educationData.length} institutions)
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-8 pb-12">
          {educationData.map((item, id) => (
            <Reveal key={item.id} delay={0.1 + id * 0.08}>
              <article className="group relative">
                <div className="flex items-start gap-4">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-xl bg-white p-1 shadow-sm ring-1 ring-black/5 dark:ring-white/10 sm:size-14">
                    <Image
                      src={item.logo}
                      alt={item.institution}
                      fill
                      sizes="(max-width: 640px) 48px, 56px"
                      className="rounded-lg object-contain p-0.5"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                      <h3 className="text-sm font-bold text-neutral-900 sm:text-base dark:text-neutral-100">
                        {item.institution}
                      </h3>
                      <span className="text-xs text-neutral-500 sm:text-sm sm:text-right">
                        {item.duration}
                      </span>
                    </div>

                    <p className="mt-0.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                      {item.degree}
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </Container>
  );
}

