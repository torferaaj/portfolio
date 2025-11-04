export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  whatsapp?: string;
  heroTagline: string;
  aboutMe: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface WorkExperience {
  company: string;
  location: string;
  positions: {
    title: string;
    period: string;
    achievements: string[];
  }[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  gpa: string;
  achievements: string[];
}
