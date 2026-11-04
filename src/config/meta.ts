import { heroConfig as item } from "./hero";

const siteUrl = (process.env.SITE_URL || "https://rizzii.me").replace(
  /\/+$/,
  ""
);

export const siteConfig = {
  name: item.name,
  title: "Rishi Ghosh - Open Source & Developer",
  desc: "Portfolio of Rishi Ghosh (Rizzi) - Full-Stack Developer & AI Security Builder.",
  url: siteUrl,
  ogImage: "/meta/og-img.png",

  author: {
    name: item.name,
    twitter: "@wasRizzii",
    github: "rishiii183",
    linkedin: "rishighoshofficial",
    email: "coderrishi183@gmail.com",
  },

  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    "AI Security",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "web development",
    "Rishi Ghosh",
    "Rizzi",
    item.name.toLowerCase(),
  ],
};

type PageMeta = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  canonical?: string;
};

export const pageMetaData: Record<string, PageMeta> = {
  "/": {
    title: `${item.name} - Open Source & Developer`,
    description:
      "Full-Stack Developer & AI Security Builder. I build products that ship and help solopreneurs grow their presence.",
    ogImage: "/meta/og-img.png",
  },
  "/projects": {
    title: "Projects - Featured Work & Case Studies",
    description:
      "Explore my open-source projects, AI security tools, and interactive digital experiences.",
    ogImage: "/meta/projects.png",
  },
  "/blog": {
    title: "Blog - Engineering Thoughts & AI Security Insights",
    description:
      "Deep dives into AI agent security, prompt injection defenses, TypeScript patterns, and modern web development.",
    ogImage: "/meta/blogs.png",
  },
  "/resume": {
    title: "Resume - Experience & Education",
    description:
      "View and download Rishi Ghosh's resume, technical skills, projects, and educational background.",
    ogImage: "/meta/resume.png",
  },
  "/contact": {
    title: "Contact - Let's Connect",
    description:
      "Have a project, security audit, or engineering role in mind? Reach out to Rishi Ghosh.",
    ogImage: "/meta/contact.png",
  },
  "/gears": {
    title: "Gears - Hardware & Tech Setup",
    description:
      "A curated collection of devices, workstations, and hardware tools I use daily.",
    ogImage: "/meta/gears.png",
  },
  "/setup": {
    title: "Setup - IDE, Tools & Developer Environment",
    description:
      "A complete walkthrough of my Cursor, VS Code, terminal, and development workflow.",
    ogImage: "/meta/setup.png",
  },
  "/books": {
    title: "Books - Reading List & Recommendations",
    description:
      "Books on software architecture, psychology, startups, and philosophy that influenced my work.",
    ogImage: "/meta/books.png",
  },
  "/movies": {
    title: "Movies & Cinema - Stories That Inspire",
    description:
      "Favorite films, sci-fi works, and cinema that spark creativity and focus.",
    ogImage: "/meta/movies.png",
  },
};
