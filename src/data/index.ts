import type {
  Company,
  ContactInfo,
  FAQ,
  Hero,
  NavigationItem,
  Service,
  ShowcaseImage
} from '../core/types';

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'process', label: 'Process', href: '#process' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const heroData: Hero = {
  title: 'Strategic Financial Leadership—When You Need It Most',
  subtitle: 'Outsourced Controller & CFO Services for Startups, Small, and Mid-Size Businesses',
  description: 'CFOPro, LLC specializes in outsourced Accounting, Controller and CFO services, delivering the financial expertise that growing companies need to scale with confidence and increase profitability.',
  primaryButton: {
    text: 'Schedule Consultation',
    href: 'https://calendly.com/solutions-cfopro/30min',
  },
  secondaryButton: {
    text: 'Learn More',
    href: '#about',
  },
};

export const services: Service[] = [
  {
    id: 'accounting',
    title: 'Outsourced Accounting Services',
    description: 'Essential day-to-day financial support to keep your business compliant, organized, and financially transparent while uncovering opportunities to improve margins and profitability.',
    icon: '💻',
    features: [
      'End-to-end bookkeeping and transaction management',
      'Payroll processing and vendor payments',
      'Accounts receivable and collections',
      'Financial reporting and month-end close support',
      'Tax filing coordination and compliance',
      'Integration with QuickBooks, Xero, and NetSuite'
    ],
  },
  {
    id: 'controller',
    title: 'Outsourced Controller Services',
    description: 'Experienced controllers providing financial discipline your business needs to scale effectively and become more profitable, acting as a hands-on extension of your leadership team.',
    icon: '🧾',
    features: [
      'Accurate, GAAP-compliant financial reporting',
      'Budgeting, forecasting, and variance analysis',
      'Internal controls and audit readiness',
      'Monthly close and executive reporting packages',
      'Staff training and accounting team development',
      'Policy creation and workflow standardization'
    ],
  },
  {
    id: 'cfo',
    title: 'Fractional CFO Services',
    description: 'Strategic financial direction for startups and growth-stage businesses, focused on sustainable profitability and long-term value creation.',
    icon: '📈',
    features: [
      'Long-term financial strategy and modeling',
      'Fundraising support and investor communications',
      'Scenario planning and performance benchmarking',
      'Board-level reporting and advisory',
      'KPI design, tracking, and interpretation',
      'Exit planning and succession guidance'
    ],
  },
  {
    id: 'supporting',
    title: 'Supporting Accounting Services',
    description: 'Foundational accounting support ensuring financial systems run smoothly with cloud-based solutions for real-time visibility and seamless integration.',
    icon: '💼',
    features: [
      'Bookkeeping and transaction management',
      'Payroll and vendor payment processing',
      'Accounts receivable and collections support',
      'Tax reporting coordination',
      'System implementation and software optimization',
      'Real-time financial dashboard setup'
    ],
  },
];

export const processSteps = [
  {
    id: 'assess',
    title: 'Assess',
    description: 'We begin with a strategic discovery session to evaluate your financial operations, identify risks, and uncover opportunities. This includes a review of your accounting systems, reporting practices, and financial performance.',
    icon: '🔍',
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Based on our findings, we create a tailored engagement plan that aligns with your business goals. This plan outlines the scope of services, priorities, timeline, and measurable outcomes.',
    icon: '📋',
  },
  {
    id: 'implement',
    title: 'Implement',
    description: 'Our team works seamlessly with your internal team members to execute the plan. We integrate modern financial systems, refine reporting workflows, and provide ongoing leadership to drive accountability and results.',
    icon: '🚀',
  },
];

export const whoWeServe = [
  {
    id: 'startups',
    title: 'Startup Founders',
    description: 'Get financial clarity and investor-ready reporting from the ground up.',
    icon: '🚀',
  },
  {
    id: 'small-business',
    title: 'Small Business Owners,and Mid-Size Businesses',
    description: 'Build structure and discipline into your finances as you grow.',
    icon: '🏢',
  },
  {
    id: 'investors',
    title: 'Investors & Portfolio Companies',
    description: 'Strengthen financial oversight across your investments.',
    icon: '📊',
  },
];

export const whyChooseUs = [
  {
    id: 'expertise',
    title: 'Dedicated Expertise',
    description: 'Specialized in Outsourced Controller and CFO services to strengthen financial operations and drive strategy.',
    icon: '✅',
  },
  {
    id: 'access',
    title: 'On-Demand Access',
    description: 'Senior-level financial leadership without the cost of a full-time hire.',
    icon: '✅',
  },
  {
    id: 'systems',
    title: 'Proven Systems',
    description: 'Established tools and processes that support accountability and scale.',
    icon: '✅',
  },
  {
    id: 'solutions',
    title: 'Tailored Solutions',
    description: 'Services that evolve with your company\'s growth and complexity.',
    icon: '✅',
  },
  {
    id: 'trust',
    title: 'Trusted Partner',
    description: 'Reliable partner to founders, investors, and accelerator programs nationwide.',
    icon: '✅',
  },
];

export const companyInfo: Company = {
  name: 'CFOPro, LLC',
  description: 'At CFOPro, we prioritize your success. With a dedicated team of financial experts, we offer personalized solutions to optimize your financial performance and drive your business forward. Together, we navigate complexities, seize opportunities, and achieve new heights of success.',
  mission: 'Let CFOPro provide exceptional financial expertise and tailored accounting solutions that empower our clients to thrive in a developing, growing and evolving business environment. We are committed to be your strategic partner in your entrepreneurial journey, providing guidance and invaluable assistance to ensure your ongoing success.',
  vision: 'To be the trusted partner of choice for enterprises seeking strategic financial and accounting services. We aim to contribute meaningful value to the financial growth and sustainability of our clients across diverse industries, ensuring their business success.',
  values: [
    'Integrity - We uphold the highest ethical standards ensuring trustworthiness, reliability, and accountability in all of our interactions and business practices.',
    'Excellence - We continuously invest in the development of our team and stay abreast of industry best practices to deliver superior accounting services.',
    'Client-Centric Focus - We listen, understand, and tailor our services to meet each of our clients\' unique needs and goals.',
    'Innovation - We embrace innovation to enhance efficiency and effectiveness. We proactively seek new technologies and methodologies to improve our processes.',
    'Client Process Optimization - We are committed to enhancing and streamlining our clients\' processes to ensure efficiency, accuracy, and effectiveness.',
    'Collaboration - We value teamwork and believe that the collective expertise of our team members is essential for delivering exceptional results.',
    'Continuous Learning - We promote a culture of continuous learning and professional development.'
  ],
  founded: '2020',
  employees: '2-10',
  specialties: ['Outsourced Accounting', 'Controller Services', 'Fractional CFO', 'Financial Strategy'],
};

export const contactInfo: ContactInfo = {
  email: 'solutions@cfopro.io',
  phone: '(407) 705-3498',
  address: {
    street: '20 N Orange Ave, Suite 1100',
    city: 'Orlando',
    state: 'FL',
    zipCode: '32801',
    country: 'USA',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/cfopro/?viewAsMember=true',
    calendly: 'https://calendly.com/solutions-cfopro/30min',
  },
};

// Additional phone number for contact
export const additionalPhone = '(407) 716-7988';

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What makes CFOPro different from other accounting firms?',
    answer: 'We specialize exclusively in Controller and CFO-level services for growing businesses. Our focus is on strategic financial leadership, not just bookkeeping. We bring senior-level expertise to help you scale profitably.',
  },
  {
    id: 'faq-2',
    question: 'How quickly can you help improve our financial operations?',
    answer: 'Most clients see immediate improvements in financial clarity within 30 days. Our proven assessment and implementation process is designed to deliver quick wins while building long-term financial strength.',
  },
  {
    id: 'faq-3',
    question: 'Do you work with companies outside the US?',
    answer: 'Yes, we work with clients nationwide and can adapt our services for companies with international operations. Our cloud-based approach enables seamless collaboration regardless of location.',
  },
  {
    id: 'faq-4',
    question: 'What size companies do you typically work with?',
    answer: 'We primarily serve startups and small businesses with revenues between $500K and $50M. Our services are designed to scale with your growth from early-stage through exit preparation.',
  },
];

// Business showcase images
export const showcaseImages: ShowcaseImage[] = [
  {
    id: 'showcase-1',
    src: '/portfoliocfopro/images/showcase-image-1.jpg',
    alt: 'Business professionals collaborating on financial strategy',
    title: 'Strategic Financial Planning',
  },
  {
    id: 'showcase-2',
    src: '/portfoliocfopro/images/showcase-image-2.jpg',
    alt: 'Modern financial dashboard and analytics',
    title: 'Real-time Financial Analytics',
  },
  {
    id: 'showcase-3',
    src: '/portfoliocfopro/images/showcase-image-3.jpg',
    alt: 'CFO presenting to board of directors',
    title: 'Board-Level Financial Leadership',
  },
];
