export type NavItem = {
  href: string;
  label: string;
};

export type ExperienceRole = {
  company: string;
  role: string;
  period: string;
  location?: string;
  current?: boolean;
  stack: string[];
  responsibilities: string[];
  results?: string[];
};

export type FocusArea = {
  title: string;
  body: string;
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type WorkSample = {
  category: string;
  body: string;
};

export type Dictionary = {
  profile: {
    name: string;
    shortName: string;
    role: string;
    valueProposition: string;
    availability: string;
    seeking: string[];
    heroStack: string[];
    snippetStack: string[];
    about: string[];
  };
  header: {
    skipToContent: string;
    primaryNav: string;
    email: string;
    resume: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  nav: NavItem[];
  hero: {
    viewExperience: string;
    contactMe: string;
    linkedin: string;
    email: string;
    resume: string;
  };
  about: {
    eyebrow: string;
    title: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    current: string;
    education: string;
    roles: ExperienceRole[];
  };
  focus: {
    eyebrow: string;
    title: string;
    description: string;
    areas: FocusArea[];
  };
  stack: {
    eyebrow: string;
    title: string;
    description: string;
    groups: StackGroup[];
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    disclaimer: string;
    samples: WorkSample[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    linkedin: string;
    downloadCv: string;
  };
  footer: {
    navLabel: string;
  };
  metadata: {
    title: string;
    description: string;
    ogLocale: string;
    keywords: string[];
  };
};
