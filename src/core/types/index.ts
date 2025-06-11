// Core types for the CFOPro business landing page
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Hero {
  title: string;
  subtitle: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface Company {
  name: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  founded: string;
  employees?: string;
  location?: string;
  specialties?: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  social: {
    linkedin?: string;
    calendly?: string;
  };
}

export interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    position: string;
    company: string;
    image?: string;
  };
  rating?: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// CFOPro specific types
export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ClientSegment {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ShowcaseImage {
  id: string;
  src: string;
  alt: string;
  title: string;
}
