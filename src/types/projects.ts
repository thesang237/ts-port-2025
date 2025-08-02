export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'application' | 'landing' | 'branding' | 'coding' | 'motion';
  image?: string;
  link?: string;
  technologies?: string[];
  year?: number;
}

export type ProjectFilter = 'all' | 'application' | 'landing' | 'branding' | 'coding' | 'motion'; 