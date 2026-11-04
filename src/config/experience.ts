import { NextJs } from "@/svgs/technologies/NextJs";
import { Prisma } from "@/svgs/technologies/Prisma";
import { PostgreSQL } from "@/svgs/technologies/PSQL";
import { Python } from "@/svgs/technologies/Python";
import { ReactIcon } from "@/svgs/technologies/ReactIcon";
import { TailwindCss } from "@/svgs/technologies/TailwindCss";
import { TypeScript } from "@/svgs/technologies/TypeScript";

export const experience = [
  {
    id: 1,
    company: "CosmoDeX",
    post: "Full Stack Intern",
    description:
      "Architected 3D WebGL features and real-time multiplayer coding engines for a gamified platform.",
    duration: "Aug 2026 - Oct 2026",
    place: "Remote",
    points: [
      "Architected 3D WebGL planet features and cyberpunk UI using Next.js, Three.js, and Monaco Editor for a gamified coding platform.",
      "Engineered real-time 1v1 battle engine with Socket.io matchmaking, synchronized leaderboards, and serverless API endpoints.",
      "Designed PostgreSQL schemas and data models using Prisma ORM for progress tracking and contest analytics.",
      "Integrated NextAuth.js authentication and secure execution validation for live multiplayer battles.",
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
  {
    id: 2,
    company: "Foretyx AI",
    post: "Co-founder & CTO",
    description:
      "Co-founded and led technical architecture for an enterprise AI security platform delivering real-time LLM guardrails.",
    duration: "Jan 2026 - Aug 2026",
    place: "Hybrid",
    points: [
      "Co-founded & led technical strategy for an enterprise AI security platform delivering real-time LLM guardrails across a 4-person team.",
      "Built the frontend dashboard in React, Vite, and TypeScript, featuring a Palantir-inspired dark UI.",
      "Integrated backend control plane using JWT auth, real-time WebSocket updates, and role-based access controls (RBAC).",
      "Managed full-stack DevOps, CI/CD pipelines, and infrastructure setup.",
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
    id: 3,
    company: "Agnio",
    post: "Founder",
    description:
      "Founded creative digital agency developing high-end interactive websites and scalable digital products.",
    duration: "2026 - Present",
    place: "Remote",
    points: [
      "Designed and delivered interactive digital experiences with smooth momentum scrolling and micro-animations.",
      "Partnered with creators and businesses to architect and ship custom web applications.",
    ],
    technologies: [
      { name: "Next.js", icon: NextJs },
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScript },
      { name: "Tailwind CSS", icon: TailwindCss },
    ],
  },
];
