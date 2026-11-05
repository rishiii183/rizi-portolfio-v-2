import { NextJs } from "@/svgs/technologies/NextJs";
import { PostgreSQL } from "@/svgs/technologies/PSQL";
import { Prisma } from "@/svgs/technologies/Prisma";
import { Python } from "@/svgs/technologies/Python";
import { ReactIcon } from "@/svgs/technologies/ReactIcon";
import { TailwindCss } from "@/svgs/technologies/TailwindCss";
import { TypeScript } from "@/svgs/technologies/TypeScript";

export const experience = [
  {
    id: 1,
    company: "Foretyx AI",
    post: "Co-Founder, COO & CTO",
    description:
      "Enterprise LLM Security Platform: Architected production React admin panel, real-time request monitoring, and PII tracking.",
    duration: "Dec 2025 – Aug 2026",
    place: "Remote",
    points: [
      "Architected a production React, Vite, and TypeScript admin panel for an AI security gateway, enabling real-time LLM request monitoring, personally identifiable information (PII) tracking, and policy enforcement with a sub-200ms SLA.",
      "Developed audit-log, incident management, and security policy modules using Zustand state management; owned JWT authentication flows and frontend-backend REST API integration.",
      "Implemented Docker-based deployment and GitHub Actions CI/CD workflows; contributed to technical leadership, engineering collaboration, and ML researcher onboarding within the founding team.",
    ],
    technologies: [
      { name: "Python", icon: Python },
      { name: "TypeScript", icon: TypeScript },
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextJs },
      { name: "PostgreSQL", icon: PostgreSQL },
    ],
  },
  {
    id: 2,
    company: "Agnio",
    post: "Founder & Full Stack Developer",
    description:
      "Web Development Agency: Delivering custom web applications and responsive websites with React, Next.js, and TypeScript.",
    duration: "June 2026 – Present",
    place: "Remote",
    points: [
      "Founded and operate a web development agency delivering custom web applications and responsive websites using React, Next.js, TypeScript, and modern frontend technologies.",
      "Manage end-to-end development workflows, including UI/UX implementation, frontend architecture, API integration, deployment, client communication, and project delivery.",
      "Build production-oriented web experiences using Tailwind CSS, reusable components, Git-based version control, and Vercel deployment pipelines.",
    ],
    technologies: [
      { name: "Next.js", icon: NextJs },
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScript },
      { name: "Tailwind CSS", icon: TailwindCss },
    ],
  },
  {
    id: 3,
    company: "Cosmodex",
    post: "Full Stack Developer",
    description:
      "Developed interactive learning platform features, UI enhancements, and Python Galaxy educational station with Monaco Editor.",
    duration: "Aug 2026 – Oct 2026",
    place: "Remote",
    points: [
      "Improved an interactive learning platform through frontend development, UI enhancements, navigation improvements, mascot interactions, and reusable component development.",
      "Developed Python Galaxy, an interactive educational experience featuring eight learning stations and Monaco Editor integration.",
      "Resolved frontend bugs, improved TypeScript type safety, and collaborated on software development workflows using Git and GitHub.",
    ],
    technologies: [
      { name: "Next.js", icon: NextJs },
      { name: "TypeScript", icon: TypeScript },
      { name: "React", icon: ReactIcon },
      { name: "Tailwind CSS", icon: TailwindCss },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "Prisma", icon: Prisma },
    ],
  },
];
