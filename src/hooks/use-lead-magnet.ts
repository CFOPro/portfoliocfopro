import { useCallback, useState } from 'react';
import type { DownloadableDocument, LeadMagnetFormData } from '../core/types';
import {
  downloadMultipleFiles,
  submitLeadToMicrosoft,
  validateLeadForm,
} from '../lib/microsoft-excel';

export interface UseLeadMagnetState {
  formData: Partial<LeadMagnetFormData>;
  selectedDocuments: DownloadableDocument[];
  isSubmitting: boolean;
  isSuccess: boolean;
  errors: string[];
  isModalOpen: boolean;
}

interface UseLeadMagnetActions {
  updateFormData: (data: Partial<LeadMagnetFormData>) => void;
  toggleDocumentSelection: (document: DownloadableDocument) => void;
  selectAllDocuments: (documents: DownloadableDocument[]) => void;
  clearDocumentSelection: () => void;
  openModal: () => void;
  closeModal: () => void;
  submitForm: (requiredFields: string[]) => Promise<void>;
  resetForm: () => void;
}

export const useLeadMagnet = (): [UseLeadMagnetState, UseLeadMagnetActions] => {
  const [state, setState] = useState<UseLeadMagnetState>({
    formData: {
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      documentIds: [],
      timestamp: '',
    },
    selectedDocuments: [],
    isSubmitting: false,
    isSuccess: false,
    errors: [],
    isModalOpen: false,
  });

  const updateFormData = useCallback((data: Partial<LeadMagnetFormData>) => {
    setState((prev) => ({
      ...prev,
      formData: { ...prev.formData, ...data },
      errors: [], // Clear errors when user starts typing
    }));
  }, []);

  const toggleDocumentSelection = useCallback(
    (document: DownloadableDocument) => {
      setState((prev) => {
        const isSelected = prev.selectedDocuments.some(
          (doc) => doc.id === document.id,
        );
        const newSelectedDocuments = isSelected
          ? prev.selectedDocuments.filter((doc) => doc.id !== document.id)
          : [...prev.selectedDocuments, document];

        return {
          ...prev,
          selectedDocuments: newSelectedDocuments,
          formData: {
            ...prev.formData,
            documentIds: newSelectedDocuments.map((doc) => doc.id),
          },
          errors: [], // Clear errors when selection changes
        };
      });
    },
    [],
  );

  const selectAllDocuments = useCallback(
    (documents: DownloadableDocument[]) => {
      setState((prev) => ({
        ...prev,
        selectedDocuments: documents,
        formData: {
          ...prev.formData,
          documentIds: documents.map((doc) => doc.id),
        },
        errors: [],
      }));
    },
    [],
  );

  const clearDocumentSelection = useCallback(() => {
    setState((prev) => ({
      ...prev,
      selectedDocuments: [],
      formData: {
        ...prev.formData,
        documentIds: [],
      },
    }));
  }, []);

  const openModal = useCallback(() => {
    setState((prev) => ({ ...prev, isModalOpen: true }));
  }, []);

  const closeModal = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isModalOpen: false,
      isSuccess: false,
      errors: [],
    }));
  }, []);

  const submitForm = useCallback(
    async (requiredFields: string[]) => {
      setState((prev) => ({
        ...prev,
        isSubmitting: true,
        errors: [],
        isSuccess: false,
      }));

      try {
        // Validate form data
        const validation = validateLeadForm(state.formData, requiredFields);

        if (!validation.isValid) {
          setState((prev) => ({
            ...prev,
            isSubmitting: false,
            errors: validation.errors,
          }));
          return;
        }

        // Prepare submission data
        const submissionData: LeadMagnetFormData = {
          email: state.formData.email!,
          firstName: state.formData.firstName,
          lastName: state.formData.lastName,
          company: state.formData.company,
          documentIds: state.formData.documentIds!,
          timestamp: new Date().toISOString(),
        };

        // Submit to Microsoft Excel
        const result = await submitLeadToMicrosoft(submissionData);

        if (result.success) {
          // Success - trigger downloads and show success state
          setState((prev) => ({
            ...prev,
            isSubmitting: false,
            isSuccess: true,
            errors: [],
          }));

          // Start downloads after a brief delay to ensure modal shows success state
          setTimeout(() => {
            const documentsToDownload = state.selectedDocuments.map((doc) => ({
              filePath: doc.filePath,
              fileName: doc.fileName,
            }));
            downloadMultipleFiles(documentsToDownload);
          }, 1000);
        } else {
          setState((prev) => ({
            ...prev,
            isSubmitting: false,
            errors: [result.message],
          }));
        }
      } catch (error) {
        console.error('Form submission error:', error);
        setState((prev) => ({
          ...prev,
          isSubmitting: false,
          errors: ['An unexpected error occurred. Please try again.'],
        }));
      }
    },
    [state.formData, state.selectedDocuments],
  );

  const resetForm = useCallback(() => {
    setState({
      formData: {
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        documentIds: [],
        timestamp: '',
      },
      selectedDocuments: [],
      isSubmitting: false,
      isSuccess: false,
      errors: [],
      isModalOpen: false,
    });
  }, []);

  return [
    state,
    {
      updateFormData,
      toggleDocumentSelection,
      selectAllDocuments,
      clearDocumentSelection,
      openModal,
      closeModal,
      submitForm,
      resetForm,
    },
  ];
};
