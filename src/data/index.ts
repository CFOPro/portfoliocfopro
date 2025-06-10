import type {
  NavigationItem,
  Hero,
  Service,
  Product,
  TeamMember,
  Company,
  ContactInfo,
  Testimonial,
  FAQ,
} from '../core/types';

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'products', label: 'Products', href: '#products' },
  { id: 'team', label: 'Team', href: '#team' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const heroData: Hero = {
  title: 'Transform Your Business',
  subtitle: 'Professional Solutions',
  description: 'We provide comprehensive business solutions that help companies streamline operations, increase efficiency, and drive sustainable growth.',
  primaryButton: {
    text: 'Get Started',
    href: '#contact',
  },
  secondaryButton: {
    text: 'Learn More',
    href: '#about',
  },
};

export const services: Service[] = [
  {
    id: 'consulting',
    title: 'Business Consulting',
    description: 'Strategic guidance to optimize your business operations and drive growth.',
    icon: '📊',
    features: ['Strategic Planning', 'Process Optimization', 'Market Analysis', 'Growth Strategies'],
  },
  {
    id: 'financial',
    title: 'Financial Services',
    description: 'Comprehensive financial management and planning for your business.',
    icon: '💰',
    features: ['Financial Planning', 'Budget Management', 'Investment Advice', 'Risk Assessment'],
  },
  {
    id: 'technology',
    title: 'Technology Solutions',
    description: 'Modern technology implementations to enhance your business efficiency.',
    icon: '💻',
    features: ['Digital Transformation', 'Software Integration', 'Cloud Solutions', 'IT Support'],
  },
  {
    id: 'marketing',
    title: 'Marketing & Sales',
    description: 'Comprehensive marketing strategies to expand your market reach.',
    icon: '📈',
    features: ['Digital Marketing', 'Brand Development', 'Sales Strategy', 'Customer Acquisition'],
  },
];

export const products: Product[] = [
  {
    id: 'business-suite',
    name: 'Business Management Suite',
    description: 'Complete business management platform with integrated tools for operations, finance, and customer management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Customer Relationship Management',
      'Financial Tracking & Reporting',
      'Project Management Tools',
      'Team Collaboration Features',
      'Real-time Analytics Dashboard',
    ],
    price: 'Starting at $99/month',
    category: 'Software',
  },
  {
    id: 'analytics-pro',
    name: 'Analytics Pro',
    description: 'Advanced analytics platform providing deep insights into your business performance and market trends.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Real-time Data Visualization',
      'Predictive Analytics',
      'Custom Reporting',
      'Integration with Multiple Data Sources',
      'AI-powered Insights',
    ],
    price: 'Starting at $149/month',
    category: 'Analytics',
  },
  {
    id: 'consulting-package',
    name: 'Strategic Consulting Package',
    description: 'Comprehensive consulting service to transform your business strategy and operations.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Business Strategy Development',
      'Market Research & Analysis',
      'Operational Efficiency Review',
      'Growth Planning',
      'Implementation Support',
    ],
    price: 'Custom pricing',
    category: 'Consulting',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    position: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'John brings over 15 years of experience in business strategy and operations management.',
    social: {
      linkedin: 'https://linkedin.com/in/johndoe',
      email: 'john@cfopro.com',
    },
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    position: 'Chief Financial Officer',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Jane is a certified CPA with extensive experience in financial planning and risk management.',
    social: {
      linkedin: 'https://linkedin.com/in/janesmith',
      email: 'jane@cfopro.com',
    },
  },
  {
    id: 'mike-johnson',
    name: 'Mike Johnson',
    position: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Mike leads our technology initiatives with expertise in digital transformation and software development.',
    social: {
      linkedin: 'https://linkedin.com/in/mikejohnson',
      email: 'mike@cfopro.com',
    },
  },
];

export const companyInfo: Company = {
  name: 'CFO Pro Business Solutions',
  description: 'We are a leading provider of comprehensive business solutions, helping companies of all sizes achieve their goals through strategic planning, innovative technology, and expert guidance.',
  mission: 'To empower businesses with the tools, knowledge, and strategies they need to thrive in an ever-evolving marketplace.',
  vision: 'To be the trusted partner that transforms how businesses operate, making success accessible to organizations worldwide.',
  values: [
    'Excellence in everything we do',
    'Innovation that drives progress',
    'Integrity in all our relationships',
    'Collaboration for mutual success',
    'Customer-centric approach',
  ],
  founded: '2015',
  employees: '50+',
  location: 'New York, USA',
};

export const contactInfo: ContactInfo = {
  email: 'contact@cfopro.com',
  phone: '(555) 123-4567',
  address: {
    street: '123 Business Ave',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA',
  },
  social: {
    facebook: 'https://facebook.com/cfopro',
    twitter: 'https://twitter.com/cfopro',
    linkedin: 'https://linkedin.com/company/cfopro',
    instagram: 'https://instagram.com/cfopro',
  },
};

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    content: 'CFO Pro transformed our business operations completely. Their strategic guidance helped us increase efficiency by 40% and reduce costs significantly.',
    author: {
      name: 'Sarah Wilson',
      position: 'CEO',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    rating: 5,
  },
  {
    id: 'testimonial-2',
    content: 'The team at CFO Pro provided exceptional financial consulting that helped us secure funding and optimize our financial strategy.',
    author: {
      name: 'David Chen',
      position: 'Founder',
      company: 'GrowthCorp',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    rating: 5,
  },
  {
    id: 'testimonial-3',
    content: 'Working with CFO Pro was a game-changer. Their technology solutions streamlined our processes and improved our customer satisfaction.',
    author: {
      name: 'Emily Rodriguez',
      position: 'Operations Manager',
      company: 'ServicePro LLC',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What types of businesses do you work with?',
    answer: 'We work with businesses of all sizes, from startups to enterprise companies, across various industries including technology, healthcare, finance, retail, and manufacturing.',
  },
  {
    id: 'faq-2',
    question: 'How long does a typical consulting engagement take?',
    answer: 'The duration varies depending on the scope and complexity of your needs. Most engagements range from 3-6 months, but we can accommodate shorter strategic sessions or longer transformation projects.',
  },
  {
    id: 'faq-3',
    question: 'Do you offer ongoing support after implementation?',
    answer: 'Yes, we provide comprehensive ongoing support including training, maintenance, and continuous optimization to ensure your continued success.',
  },
  {
    id: 'faq-4',
    question: 'Can you customize solutions for our specific industry?',
    answer: 'Absolutely. All our solutions are tailored to meet the specific needs and requirements of your industry and business model.',
  },
]; 