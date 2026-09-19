import type { Dictionary } from "@/types/content";

export const en: Dictionary = {
  profile: {
    name: "Konstantin Bykadorov",
    shortName: "KB",
    role: "Frontend Engineer",
    valueProposition:
      "Frontend Engineer with ~3 years of commercial experience building web applications with React and TypeScript.",
    availability: "Open to opportunities",
    seeking: [
      "Frontend Engineer",
      "Middle Frontend Developer",
      "React Developer",
    ],
    heroStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Redux Toolkit",
      "RTK Query",
    ],
    about: [
      "I build and maintain production frontend applications: architecture, reusable UI, data-heavy interfaces, and complex forms. I work closely with design and backend, and care about code that stays readable after the first version.",
      "Currently at Garpix, I work on commercial React + TypeScript applications — from UI Kit and API integration to tests and legacy modernization. I am looking for a Frontend Engineer / Middle Frontend Developer role in a product team, preferably remote and international.",
    ],
  },
  header: {
    skipToContent: "Skip to content",
    primaryNav: "Primary navigation",
    email: "Email",
    resume: "Resume",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    viewExperience: "View Experience",
    contactMe: "Contact Me",
    linkedin: "LinkedIn",
    email: "Email",
    resume: "Resume",
  },
  about: {
    eyebrow: "01 / about",
    title: "About",
  },
  experience: {
    eyebrow: "02 / experience",
    title: "Commercial experience",
    description:
      "Commercial React and TypeScript work in product teams: architecture, UI systems, forms, data, and tests.",
    current: "Current",
    education: "Master's degree, Engineering, Southern Federal University",
    roles: [
      {
        company: "Garpix",
        role: "Frontend Developer",
        period: "October 2024 — Present",
        current: true,
        stack: [
          "React",
          "TypeScript",
          "Redux Toolkit",
          "RTK Query",
          "React Hook Form",
          "Zod",
          "Jest",
          "React Testing Library",
          "Styled Components",
          "SCSS",
        ],
        responsibilities: [
          "Frontend architecture for commercial React + TypeScript web applications",
          "Reusable UI components and internal UI Kit development",
          "REST API integration, including data fetching, caching, filtering, sorting, and pagination",
          "Complex multi-step forms with React Hook Form and Zod",
          "State management with Redux Toolkit and RTK Query",
          "Unit tests with Jest and React Testing Library",
          "Legacy React/TypeScript modernization",
          "Collaboration with designers and backend developers, code review, Agile/Scrum",
        ],
        results: [
          "Reduced boilerplate in complex forms by about 30% with React Hook Form + Zod",
          "Worked on a scalable frontend architecture",
          "Helped develop and optimize the UI Kit",
          "Modernized legacy React/TypeScript code",
        ],
      },
      {
        company: "Softailed",
        role: "Junior Frontend Developer",
        period: "August 2024 — October 2024",
        location: "Germany / Remote",
        stack: ["Next.js", "SSR", "Strapi"],
        responsibilities: [
          "Client-side development with Next.js, including server-side rendering",
          "Frontend integration with Strapi",
          "Reusable UI components with consistent, responsive layout",
        ],
      },
      {
        company: "T1 Group",
        role: "Frontend Developer Intern",
        period: "June 2024 — August 2024",
        stack: ["React", "TypeScript", "Redux Toolkit", "SPA"],
        responsibilities: [
          "Built the frontend of a single-page application with React, TypeScript, and Redux Toolkit",
          "Worked on a fintech-related project in a cross-functional team",
        ],
      },
      {
        company: "Fusion Tech",
        role: "Trainee Frontend Developer",
        period: "October 2023 — May 2024",
        stack: [
          "React",
          "TypeScript",
          "Redux Toolkit",
          "Node.js",
          "Express",
          "TypeORM",
          "PostgreSQL",
          "REST API",
        ],
        responsibilities: [
          "Web interfaces with React and TypeScript",
          "Foundational server-side work with Node.js, Express, TypeORM, and PostgreSQL",
          "REST API integration and global state with Redux Toolkit",
        ],
      },
    ],
  },
  focus: {
    eyebrow: "03 / focus",
    title: "Engineering focus",
    description: "The work I actually do — not a list of buzzwords.",
    areas: [
      {
        title: "Frontend Architecture",
        body: "Structuring React + TypeScript applications so they stay maintainable as they grow. That includes reusable patterns, clear data flow, and modernizing legacy code without a rewrite for its own sake.",
      },
      {
        title: "UI Systems",
        body: "Reusable components and UI Kit work in production: consistent interfaces, predictable component APIs, and close collaboration with design in Figma.",
      },
      {
        title: "Forms & Data",
        body: "Multi-step forms, typed validation, and data-heavy screens — fetching, caching, filtering, sorting, and pagination — with React Hook Form, Zod, and RTK Query.",
      },
      {
        title: "Testing & Quality",
        body: "Jest and React Testing Library on critical UI and business logic. Code review is part of the regular workflow, not an afterthought.",
      },
      {
        title: "AI-assisted Engineering",
        body: "Cursor and GitHub Copilot for code generation, refactoring, boilerplate reduction, test generation, debugging, and exploring implementation approaches. AI-generated code is reviewed before it ships — the engineering judgment stays with the developer.",
      },
    ],
  },
  stack: {
    eyebrow: "04 / stack",
    title: "Tech stack",
    description:
      "Tools I use in commercial work. No proficiency bars — the experience section is the signal.",
    groups: [
      {
        title: "Core",
        items: ["React", "TypeScript", "Next.js"],
      },
      {
        title: "State & Data",
        items: ["Redux Toolkit", "RTK Query", "REST API"],
      },
      {
        title: "Forms",
        items: ["React Hook Form", "Zod"],
      },
      {
        title: "Testing",
        items: ["Jest", "React Testing Library"],
      },
      {
        title: "Styling & Tooling",
        items: ["Styled Components", "SCSS", "Vite", "Webpack", "Figma"],
      },
      {
        title: "Additional",
        items: [
          "Node.js",
          "Express",
          "PostgreSQL",
          "Git",
          "Agile / Scrum",
          "Cursor",
          "GitHub Copilot",
        ],
      },
    ],
  },
  work: {
    eyebrow: "05 / work",
    title: "Engineering work",
    description:
      "Types of commercial frontend work rather than a public GitHub showcase.",
    disclaimer:
      "These examples are based on commercial projects and cannot be publicly disclosed.",
    samples: [
      {
        category: "UI / Component Architecture",
        body: "Reusable component layers and UI Kit work in commercial React applications — consistent interfaces, less duplication, and a clearer path for new features.",
      },
      {
        category: "Complex Forms & Validation",
        body: "Multi-step forms with React Hook Form and Zod: typed validation, fewer re-renders, and less boilerplate on large form flows.",
      },
      {
        category: "Data-driven Interfaces",
        body: "REST-backed screens with fetching, caching, filtering, sorting, and pagination using Redux Toolkit and RTK Query.",
      },
    ],
  },
  contact: {
    eyebrow: "06 / contact",
    title: "Open to Frontend Engineer opportunities",
    body: "Remote and international product teams. React / TypeScript. Middle Frontend Developer and React Developer roles.",
    linkedin: "LinkedIn",
    downloadCv: "Download CV",
  },
  footer: {
    navLabel: "Footer navigation",
  },
  metadata: {
    title: "Konstantin Bykadorov — Frontend Engineer",
    description:
      "Frontend Engineer with ~3 years of commercial experience building web applications with React and TypeScript.",
    ogLocale: "en_US",
    keywords: [
      "Frontend Engineer",
      "Frontend Developer",
      "Middle Frontend Developer",
      "React",
      "TypeScript",
      "Next.js",
      "Konstantin Bykadorov",
    ],
  },
};
