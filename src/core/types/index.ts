// Core types for the business landing page
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

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  price?: string;
  category?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface Company {
  name: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  founded: string;
  employees?: string;
  location: string;
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
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
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