export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description: string;
  logo: string;
}

export const educationData: EducationItem[] = [
  {
    id: 1,
    institution: "Netaji Subhash Engineering College",
    degree: "B.Tech in Computer Science ( Cyber Security )",
    duration: "Sep 2025 - june 2029",
    description:
      "Pursuing B.Tech in Computer Science with a specialization in Cyber Security. Exploring AI, cybersecurity, full-stack development, and emerging technologies through hands-on projects and continuous learning.",
    logo: "/education/nsec.png",
  },
  {
    id: 2,
    institution: "Rose Bud School",
    degree: "Primary/Secondary Education",
    duration: "2019 - 2022",
    description:
      "Built a strong academic foundation while developing independence, confidence, and an early interest in technology. My time at Rose Bud School helped shape my curiosity and approach to learning.",
    logo: "/education/rose-bud.png",
  },
  {
    id: 3,
    institution: "DAV",
    degree: "Higher Secondary",
    duration: "2012 - 2019",
    description:
      "Some of the most memorable years of my early life. From making lifelong friends and performing on stage to participating in competitions and annual events, DAV helped me grow in confidence, creativity, and resilience.",
    logo: "/education/dav.png",
  },
];

