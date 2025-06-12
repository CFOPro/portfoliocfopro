import type { DownloadableDocument, LeadMagnetData } from '../core/types';

export const downloadableDocuments: DownloadableDocument[] = [
  {
    id: 'financial-health-checklist',
    title: 'Financial Health Checklist',
    description:
      'Comprehensive assessment tool to evaluate your business financial health and identify improvement opportunities.',
    fileName: 'Financial Health Checklist - CFOPro.pdf',
    filePath: '/assets/documents/financial-health-checklist.pdf',
    fileSize: '2.1 MB',
    documentType: 'pdf',
    icon: '📋',
    featured: true,
    downloadCount: 1247,
  },
  {
    id: 'cfo-guide-growing-businesses',
    title: 'Strategic CFO Guide for Growing Businesses',
    description:
      'Essential financial leadership strategies for scaling your business from startup to enterprise level.',
    fileName: 'CFO Guide for Growing Businesses - CFOPro.pdf',
    filePath: '/assets/documents/cfo-guide-growing-businesses.pdf',
    fileSize: '3.5 MB',
    documentType: 'pdf',
    icon: '📚',
    featured: true,
    downloadCount: 892,
  },
  {
    id: 'roi-calculator-template',
    title: 'ROI Calculator Template',
    description:
      'Professional template to analyze investment returns and make data-driven financial decisions.',
    fileName: 'ROI Calculator Template - CFOPro.pdf',
    filePath: '/assets/documents/roi-calculator-template.pdf',
    fileSize: '1.8 MB',
    documentType: 'template',
    icon: '📊',
    featured: false,
    downloadCount: 634,
  },
];

export const leadMagnetData: LeadMagnetData = {
  title: 'Free Financial Resources for Growing Businesses',
  subtitle: 'Strategic Tools & Insights',
  description:
    'Access our exclusive collection of financial tools, templates, and guides designed specifically for growing businesses. Get immediate access to proven strategies that have helped hundreds of companies optimize their financial operations.',
  benefits: [
    'Comprehensive financial health assessment tools',
    'Strategic planning templates from experienced CFOs',
    'Industry-proven ROI calculation methodologies',
    'Best practices from successful business transformations',
    'Exclusive insights on financial optimization strategies',
    'Expert guidance on scaling financial operations',
  ],
  documents: downloadableDocuments,
  formConfig: {
    requiredFields: ['email', 'firstName', 'company'],
    privacyPolicyUrl: '/privacy-policy',
    termsOfServiceUrl: '/terms-of-service',
  },
};
