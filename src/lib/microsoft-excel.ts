import type {
  EmailSubmissionResponse,
  LeadMagnetFormData,
} from '../core/types';

/**
 * Microsoft Excel Integration for Lead Magnet
 * Two approaches available:
 * 1. Microsoft Graph API (requires app registration)
 * 2. Power Automate (Microsoft Flow) - simpler setup
 */

/**
 * Submits lead data to Microsoft Excel via Power Automate HTTP trigger
 * This is the recommended approach for most scenarios
 */
export const submitLeadToPowerAutomate = async (
  leadData: LeadMagnetFormData,
): Promise<EmailSubmissionResponse> => {
  try {
    // Validate required environment variables
    const powerAutomateUrl = import.meta.env.VITE_POWER_AUTOMATE_URL;

    if (!powerAutomateUrl) {
      console.error('Power Automate URL not configured');
      return {
        success: false,
        message: 'Configuration error. Please contact support.',
        error: 'Missing Power Automate URL',
      };
    }

    // Prepare data for Excel
    const submissionData = {
      timestamp: new Date().toISOString(),
      email: leadData.email,
      firstName: leadData.firstName || '',
      lastName: leadData.lastName || '',
      company: leadData.company || '',
      documents: leadData.documentIds.join(', '),
      source: 'CFOPro Website Lead Magnet',
      // Additional fields for better tracking
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'Direct',
      pageUrl: window.location.href,
    };

    // Submit to Power Automate
    const response = await fetch(powerAutomateUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Power Automate typically returns a 200 OK with the response
    await response.json();

    return {
      success: true,
      message: 'Thank you! Your information has been submitted successfully.',
    };
  } catch (error) {
    console.error('Error submitting to Power Automate:', error);

    return {
      success: false,
      message:
        'Unable to submit your information at this time. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Alternative: Submit to Microsoft Graph API directly
 * This requires more complex setup but provides more control
 */
export const submitLeadToMicrosoftGraph = async (
  leadData: LeadMagnetFormData,
): Promise<EmailSubmissionResponse> => {
  try {
    // Validate required environment variables
    const graphEndpoint = import.meta.env.VITE_MICROSOFT_GRAPH_ENDPOINT;
    const accessToken = import.meta.env.VITE_MICROSOFT_ACCESS_TOKEN;

    if (!graphEndpoint || !accessToken) {
      console.error('Microsoft Graph configuration not complete');
      return {
        success: false,
        message: 'Configuration error. Please contact support.',
        error: 'Missing Graph API configuration',
      };
    }

    // Prepare data for Excel table
    const rowData = {
      values: [
        [
          new Date().toISOString(),
          leadData.email,
          leadData.firstName || '',
          leadData.lastName || '',
          leadData.company || '',
          leadData.documentIds.join(', '),
          'CFOPro Website Lead Magnet',
        ],
      ],
    };

    // Submit to Microsoft Graph API
    const response = await fetch(graphEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rowData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    await response.json();

    return {
      success: true,
      message: 'Thank you! Your information has been submitted successfully.',
    };
  } catch (error) {
    console.error('Error submitting to Microsoft Graph:', error);

    return {
      success: false,
      message:
        'Unable to submit your information at this time. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Main submission function - uses Power Automate by default
 * Can be switched to Graph API by changing the implementation
 */
export const submitLeadToMicrosoft = async (
  leadData: LeadMagnetFormData,
): Promise<EmailSubmissionResponse> => {
  // Use Power Automate by default (simpler setup)
  return submitLeadToPowerAutomate(leadData);

  // Uncomment this line to use Microsoft Graph API instead:
  // return submitLeadToMicrosoftGraph(leadData);
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
