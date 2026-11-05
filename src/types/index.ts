export interface Institution {
  id: string;
  name: string;
  category: 'Medical & Healthcare' | 'Pharmacy' | 'Engineering & Technical' | 'Teacher Training' | 'School Education';
  image: string;
  address: string;
  pin: string;
  website: string;
  courses: string[];
  description: string;
}

export interface SkillProgram {
  id: string;
  title: string;
  partner: string;
  studentsTrained: string;
  description: string;
  image: string;
  features: string[];
  externalUrl?: string;
  isGovernment: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Skill Training' | 'Medical Camps' | 'Campus Life' | 'Community Welfare';
  image: string;
  date?: string;
}

export interface Leader {
  name: string;
  role: string;
  title: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  name: string;
  course: string;
  institution: string;
  quote: string;
  year: string;
}

