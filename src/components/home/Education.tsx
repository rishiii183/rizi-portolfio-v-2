import Image from "next/image";
import Link from "next/link";
import { GraduationCap, ArrowUpRight } from "lucide-react";

import { educationData } from "@/config/education";
import { Container } from "../common/Container";
import { Heading } from "../common/Heading";
import { Reveal } from "../common/Reveal";

export const Education = () => {
  return (
    <Reveal delay={0.2}>
      <Container className="mt-10">
        <div className="flex items-center justify-between">
          <Heading
            as="h2"
            className="-ml-1.5 flex items-center gap-2"
            Icon={<GraduationCap className="size-6" />}
          >
            Education
          </Heading>

          <Link
            href="/education"
            className="text-muted-foreground hover:text-foreground mt-7 inline-flex items-center gap-1 text-sm font-medium transition-colors"
          >
            <span>View All</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          {educationData.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <article className="group relative rounded-2xl border border-neutral-200/60 bg-neutral-100/40 p-4 transition-all hover:border-neutral-300 sm:p-5 dark:border-neutral-800/80 dark:bg-neutral-900/30 dark:hover:border-neutral-700">
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
      </Container>
    </Reveal>
  );
};

