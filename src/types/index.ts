export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  metrics: string[];
  technologies: string[];
  category: 'Full Stack' | 'Java & Spring Boot' | 'Angular' | 'AI/ML' | 'Security';
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  architecture: string[];
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  technologies: string[];
  responsibilities: string[];
  achievements: string[];
  metrics: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level?: 'Advanced' | 'Proficient' | 'Familiar';
  icon?: string;
  tag?: string;
  relatedProjects?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  code?: string;
  year: string;
  badgeUrl?: string;
  verifyUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  highlights?: string[];
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
  updatedAt?: string;
}

export interface ProfileData {
  name: string;
  titles: string[];
  email: string;
  phone: string;
  location: string;
  about: string;
  objective: string;
  stats: { label: string; value: string; detail: string }[];
  social: {
    github: string;
    linkedin: string;
    leetcode: string;
    email: string;
  };
  education: Education[];
  certifications: Certification[];
  extraCurricular: string[];
}
