"use client";

import { ArrowUpRight } from "lucide-react";

import { mySkills } from "@/config/skills";

import { Container } from "../common/Container";
import { Heading } from "../common/Heading";

const SkillsCarousel = () => {
  const skills = [...mySkills, ...mySkills];

  return (
    <Container>
      <Heading as="h2">Tech Stack</Heading>

      <div className="group relative w-full overflow-hidden py-6">
        <div className="animate-marquee flex w-max items-center gap-3">
          {skills.map(({ name, icon: Icon, url }, index) => (
            <a
              key={`${name}-${index}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit official ${name} website`}
              title={`Visit official ${name} website`}
              data-cursor="interactive"
              className="group/pill relative flex h-10 w-fit shrink-0 items-center gap-2 rounded-full border border-neutral-300/80 bg-neutral-100/90 px-4 text-sm font-medium whitespace-nowrap text-neutral-600 shadow-sm transition-all duration-300 ease-out select-none hover:z-30 hover:-translate-y-1 hover:scale-110 hover:border-neutral-400 hover:bg-white hover:text-neutral-950 hover:shadow-xl hover:shadow-neutral-400/20 active:scale-95 dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-white dark:hover:shadow-black/60"
            >
              <span className="flex size-5 shrink-0 items-center justify-center transition-transform duration-300 ease-out group-hover/pill:scale-110 [&>svg]:size-full">
                <Icon />
              </span>
              <span>{name}</span>
              <ArrowUpRight className="size-3.5 -translate-x-1 text-neutral-400 opacity-0 transition-all duration-300 ease-out group-hover/pill:translate-x-0 group-hover/pill:opacity-100 dark:text-neutral-400" />
            </a>
          ))}
        </div>

        {/* Left fade */}
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-linear-to-r to-transparent sm:w-24" />

        {/* Right fade */}
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-linear-to-l to-transparent sm:w-24" />
      </div>
    </Container>
  );
};

export { SkillsCarousel };
