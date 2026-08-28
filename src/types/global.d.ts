// Global type definitions for external animation and canvas libraries

declare global {
  interface Window {
    gsap?: typeof import('gsap').default;
    ScrollTrigger?: typeof import('gsap/ScrollTrigger').ScrollTrigger;
    Lenis?: typeof import('lenis').default;
    THREE?: typeof import('three');
  }
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  metrics: string[];
  techStack: string[];
  link?: string;
  accentColor?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'creative';
  level: number; // 0-100
  experienceYears: number;
  description: string;
  highlightProjects: string[];
  iconName: string;
}

export interface ProjectSpotlight {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  deliverables: string[];
  liveUrl?: string;
  githubUrl?: string;
  stats: { label: string; value: string }[];
  tags: string[];
}
