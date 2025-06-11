// Application constants
export const APP_CONFIG = {
  name: 'CFOPro, LLC',
  tagline: 'Outsourced Controller & CFO Services for Startups and Small Businesses',
  headline: 'Strategic Financial Leadership—When You Need It Most',
  description: 'CFOPro, LLC specializes in outsourced Accounting, Controller and CFO services, delivering the financial expertise that growing companies need to scale with confidence and increase profitability.',
  version: '1.0.0',
  calendlyUrl: 'https://calendly.com/solutions-cfopro/30min',
  linkedinUrl: 'https://www.linkedin.com/company/cfopro/?viewAsMember=true',
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '#about',
  SERVICES: '#services',
  PROCESS: '#process',
  GALLERY: '#gallery',
  CONTACT: '#contact',
} as const;

export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

export const CORPORATE_COLORS = {
  PRIMARY_BLUE: '#1976BB',
  LIGHT_BLUE: '#77D4FC',
  NEUTRAL_GRAY: '#677889',
  WHITE: '#FFFFFF',
} as const;

export const COLORS = {
  PRIMARY: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#1976BB', // Main corporate blue
    600: '#1565c0',
    700: '#0d47a1',
    800: '#0a3d91',
    900: '#063781',
    950: '#042a61',
  },
  SECONDARY: {
    50: '#f0faff',
    100: '#e0f4fe',
    200: '#bae9fd',
    300: '#77D4FC', // Corporate light blue
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  NEUTRAL: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#677889', // Corporate gray
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
} as const;

export const SERVICE_CATEGORIES = {
  ACCOUNTING: 'accounting',
  CONTROLLER: 'controller',
  CFO: 'cfo',
  SUPPORTING: 'supporting',
} as const;

// Common CSS classes for consistency
export const CSS_CLASSES = {
  // Typography
  HEADING_1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
  HEADING_2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
  HEADING_3: 'text-2xl md:text-3xl font-bold',
  TEXT_LARGE: 'text-lg md:text-xl',
  TEXT_BASE: 'text-base',

  // Layout
  SECTION_PADDING: 'py-16 lg:py-24',
  CARD_SHADOW: 'shadow-soft hover:shadow-card transition-shadow duration-300',
  CARD_SHADOW_STRONG: 'shadow-card hover:shadow-strong transition-shadow duration-300',

  // Animations
  FADE_IN: 'animate-fade-in',
  SLIDE_UP: 'animate-slide-up',
  SCALE_IN: 'animate-scale-in',

  // Buttons and interactions
  TRANSITION_ALL: 'transition-all duration-200',
  HOVER_SCALE: 'hover:scale-105 transition-transform duration-200',
} as const;
