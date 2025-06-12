import type {
  EmailSubmissionResponse,
  LeadMagnetFormData,
} from '../core/types';

/**
 * Submits lead data to Google Sheets via Google Apps Script Web App
 * This requires setting up a Google Apps Script with a doPost function
 */
export const submitLeadToGoogleSheets = async (
  leadData: LeadMagnetFormData,
): Promise<EmailSubmissionResponse> => {
  try {
    // Validate required environment variables
    const webAppUrl = process.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;

    if (!webAppUrl) {
      console.error('Google Sheets Web App URL not configured');
      return {
        success: false,
        message: 'Configuration error. Please contact support.',
        error: 'Missing Web App URL',
      };
    }

    // Prepare data for Google Sheets
    const submissionData = {
      timestamp: new Date().toISOString(),
      email: leadData.email,
      firstName: leadData.firstName || '',
      lastName: leadData.lastName || '',
      company: leadData.company || '',
      documents: leadData.documentIds.join(', '),
      source: 'CFOPro Website Lead Magnet',
    };

    // Submit to Google Sheets via Web App
    const response = await fetch(webAppUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: 'Thank you! Your information has been submitted successfully.',
      };
    } else {
      throw new Error(result.error || 'Submission failed');
    }
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);

    return {
      success: false,
      message:
        'Unable to submit your information at this time. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Validates email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates form data before submission
 */
export const validateLeadForm = (
  formData: Partial<LeadMagnetFormData>,
  requiredFields: string[],
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Check required fields
  if (requiredFields.includes('email')) {
    if (!formData.email) {
      errors.push('Email is required');
    } else if (!validateEmail(formData.email)) {
      errors.push('Please enter a valid email address');
    }
  }

  if (requiredFields.includes('firstName') && !formData.firstName?.trim()) {
    errors.push('First name is required');
  }

  if (requiredFields.includes('lastName') && !formData.lastName?.trim()) {
    errors.push('Last name is required');
  }

  if (requiredFields.includes('company') && !formData.company?.trim()) {
    errors.push('Company name is required');
  }

  // Check if at least one document is selected
  if (!formData.documentIds || formData.documentIds.length === 0) {
    errors.push('Please select at least one document to download');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Downloads a file by creating a temporary link
 */
export const downloadFile = (filePath: string, fileName: string): void => {
  try {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading file:', error);
    // Fallback: open in new tab
    window.open(filePath, '_blank', 'noopener,noreferrer');
  }
};

/**
 * Batch download multiple files with delay to prevent browser blocking
 */
export const downloadMultipleFiles = (
  documents: Array<{ filePath: string; fileName: string }>,
): void => {
  documents.forEach((doc, index) => {
    setTimeout(() => {
      downloadFile(doc.filePath, doc.fileName);
    }, index * 500); // 500ms delay between downloads
  });
};
