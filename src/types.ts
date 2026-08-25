export interface Project {
  id: string;
  title: string;
  category: string;
  subcategory: 'E-commerce' | 'Personal Brand' | 'Business' | 'Web Application';
  url: string;
  description: string;
  tags: string[];
  featured?: boolean;
  imageBg: string; // Gradient or styling motif
  accentColor: string;
  metrics?: string;
}

export interface ServiceCategory {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface ApproachPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}
