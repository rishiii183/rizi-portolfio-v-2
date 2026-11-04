import { ExpressJs } from "@/svgs/technologies/ExpressJs";
import { Figma } from "@/svgs/technologies/Figma";
import { Java } from "@/svgs/technologies/Java";
import { JavaScript } from "@/svgs/technologies/JavaScript";
import { NextJs } from "@/svgs/technologies/NextJs";
import { NodeJs } from "@/svgs/technologies/NodeJs";
import { Postman } from "@/svgs/technologies/PostMan";
import { Prisma } from "@/svgs/technologies/Prisma";
import { PostgreSQL } from "@/svgs/technologies/PSQL";
import { Python } from "@/svgs/technologies/Python";
import { ReactIcon } from "@/svgs/technologies/ReactIcon";
import { TailwindCss } from "@/svgs/technologies/TailwindCss";
import { TypeScript } from "@/svgs/technologies/TypeScript";
import type { Skill } from "@/types/common";

export const mySkills: Skill[] = [
  { name: "React", icon: ReactIcon, url: "https://react.dev" },
  { name: "Next.js", icon: NextJs, url: "https://nextjs.org" },
  { name: "Tailwind CSS", icon: TailwindCss, url: "https://tailwindcss.com" },
  { name: "Figma", icon: Figma, url: "https://www.figma.com" },
  { name: "TypeScript", icon: TypeScript, url: "https://www.typescriptlang.org" },
  {
    name: "JavaScript",
    icon: JavaScript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "Node.js", icon: NodeJs, url: "https://nodejs.org" },
  { name: "Express.js", icon: ExpressJs, url: "https://expressjs.com" },
  { name: "PostgreSQL", icon: PostgreSQL, url: "https://www.postgresql.org" },
  { name: "Prisma", icon: Prisma, url: "https://www.prisma.io" },
  { name: "Postman", icon: Postman, url: "https://www.postman.com" },
  { name: "Python", icon: Python, url: "https://www.python.org" },
  { name: "Java", icon: Java, url: "https://www.java.com" },
];
