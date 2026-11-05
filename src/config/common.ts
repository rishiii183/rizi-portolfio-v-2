import { CircleUserRound, ScrollText } from "lucide-react";

import { Blog } from "@/svgs/essentials/Blog";
import { Home } from "@/svgs/essentials/Home";
import { Project } from "@/svgs/essentials/Project";
import { Github } from "@/svgs/socials/Github";
import { X } from "@/svgs/socials/X";

export const navItems = [
  { id: 1, name: "Home", icon: Home, value: "/" },
  { id: 2, name: "Projects", icon: Project, value: "/projects" },
  { id: 3, name: "Blog", icon: Blog, value: "/blog" },
  { id: 4, name: "Resume", icon: ScrollText, value: "/resume" },
  { id: 5, name: "Contact", icon: CircleUserRound, value: "/contact" },
];

export const navSocialLinks = [
  { id: 1, name: "Github", icon: Github, value: "https://github.com/rishiii183" },
  { id: 2, name: "X", icon: X, value: "https://x.com/wasRizzii" },
];

export const setupConfig = [];


export const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Education", href: "/education" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];
