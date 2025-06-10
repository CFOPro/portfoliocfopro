// Application constants
export const APP_CONFIG = {
  name: 'CFO Pro Business Solutions',
  tagline: 'Professional Business Services',
  description: 'We provide comprehensive business solutions to help your company grow and succeed.',
  version: '1.0.0',
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '#about',
  SERVICES: '#services',
  PRODUCTS: '#products',
  TEAM: '#team',
  TESTIMONIALS: '#testimonials',
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

export const COLORS = {
  PRIMARY: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  SECONDARY: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
} as const; 