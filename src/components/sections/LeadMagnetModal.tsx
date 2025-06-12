import { clsx } from 'clsx';
import React from 'react';
import type { DownloadableDocument, LeadMagnetData } from '../../core/types';
import type { UseLeadMagnetState } from '../../hooks/use-lead-magnet';
import { Button } from '../ui';

interface LeadMagnetModalProps {
  leadMagnetData: LeadMagnetData;
  state: UseLeadMagnetState;
  actions: {
    updateFormData: (data: Partial<{ [key: string]: string }>) => void;
    toggleDocumentSelection: (document: DownloadableDocument) => void;
    selectAllDocuments: (documents: DownloadableDocument[]) => void;
    clearDocumentSelection: () => void;
    submitForm: (requiredFields: string[]) => Promise<void>;
  };
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({
  leadMagnetData,
  state,
  actions,
}) => {
  const handleInputChange = (field: string, value: string) => {
    actions.updateFormData({ [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await actions.submitForm(leadMagnetData.formConfig.requiredFields);
  };

  const getDocumentTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return '📄';
      case 'excel':
        return '📊';
      case 'word':
        return '📝';
      case 'template':
        return '📋';
      default:
        return '📄';
    }
  };

  if (state.isSuccess) {
    return (
      <div className='p-6 sm:p-8 text-center'>
        <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
          <svg
            className='w-8 h-8 text-green-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 13l4 4L19 7'
            />
          </svg>
        </div>

        <h3 className='text-2xl font-bold text-neutral-900 mb-4'>
          Download Started Successfully!
        </h3>

        <p className='text-neutral-600 mb-6 leading-relaxed'>
          Thank you! Your downloads should begin automatically. Check your
          downloads folder for the files. We've also sent you an email with
          direct download links.
        </p>

        <div className='bg-green-50 border border-green-200 rounded-lg p-4 mb-6'>
          <p className='text-sm text-green-800'>
            <strong>Selected Documents:</strong>
            <br />
            {state.selectedDocuments
              .map((doc: DownloadableDocument) => doc.title)
              .join(', ')}
          </p>
        </div>

        <p className='text-xs text-neutral-500'>
          If downloads don't start automatically, please check your browser's
          download settings or try again.
        </p>
      </div>
    );
  }

  return (
    <div className='p-6 sm:p-8'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Error Messages */}
        {state.errors.length > 0 && (
          <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
            <div className='flex items-start'>
              <svg
                className='w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <div>
                <h4 className='text-sm font-semibold text-red-800 mb-1'>
                  Please fix the following:
                </h4>
                <ul className='text-sm text-red-700 space-y-1'>
                  {state.errors.map((error: string, index: number) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Document Selection */}
        <div>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-lg font-semibold text-neutral-900'>
              Select Resources to Download:
            </h3>
            <div className='flex gap-2'>
              <button
                type='button'
                onClick={() =>
                  actions.selectAllDocuments(leadMagnetData.documents)
                }
                className='text-sm text-primary-600 hover:text-primary-700 font-medium'
              >
                Select All
              </button>
              <span className='text-neutral-400'>|</span>
              <button
                type='button'
                onClick={actions.clearDocumentSelection}
                className='text-sm text-neutral-500 hover:text-neutral-600 font-medium'
              >
                Clear All
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-3'>
            {leadMagnetData.documents.map((document: DownloadableDocument) => {
              const isSelected = state.selectedDocuments.some(
                (doc: DownloadableDocument) => doc.id === document.id,
              );

              return (
                <div
                  key={document.id}
                  className={clsx(
                    'border rounded-lg p-4 cursor-pointer transition-all duration-200',
                    isSelected
                      ? 'border-primary-300 bg-primary-50 shadow-soft'
                      : 'border-neutral-200 bg-white hover:border-primary-200 hover:bg-primary-25',
                  )}
                  onClick={() => actions.toggleDocumentSelection(document)}
                >
                  <div className='flex items-start'>
                    <div className='flex-shrink-0 mr-4'>
                      <div
                        className={clsx(
                          'w-12 h-12 rounded-lg flex items-center justify-center text-lg',
                          isSelected
                            ? 'bg-primary-600 text-white'
                            : 'bg-neutral-100 text-neutral-600',
                        )}
                      >
                        {document.icon}
                      </div>
                    </div>

                    <div className='flex-1 min-w-0'>
                      <div className='flex items-center justify-between mb-2'>
                        <h4 className='font-semibold text-neutral-900 text-sm truncate pr-2'>
                          {document.title}
                        </h4>
                        {document.featured && (
                          <span className='bg-primary-100 text-primary-700 text-xs font-medium px-2 py-1 rounded-full flex-shrink-0'>
                            Featured
                          </span>
                        )}
                      </div>

                      <p className='text-sm text-neutral-600 leading-relaxed mb-2'>
                        {document.description}
                      </p>

                      <div className='flex items-center text-xs text-neutral-500 space-x-4'>
                        <span className='flex items-center'>
                          {getDocumentTypeIcon(document.documentType)}
                          <span className='ml-1 uppercase'>
                            {document.documentType}
                          </span>
                        </span>
                        <span>{document.fileSize}</span>
                        {document.downloadCount && (
                          <span>
                            {document.downloadCount.toLocaleString()} downloads
                          </span>
                        )}
                      </div>
                    </div>

                    <div
                      className={clsx(
                        'flex-shrink-0 w-5 h-5 rounded border-2 ml-3 mt-1',
                        isSelected
                          ? 'bg-primary-600 border-primary-600'
                          : 'border-neutral-300',
                      )}
                    >
                      {isSelected && (
                        <svg
                          className='w-3 h-3 text-white m-0.5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={3}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Fields */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {/* Email */}
          <div
            className={
              leadMagnetData.formConfig.requiredFields.includes('email')
                ? 'sm:col-span-2'
                : 'sm:col-span-1'
            }
          >
            <label
              htmlFor='email'
              className='block text-sm font-semibold text-neutral-900 mb-2'
            >
              Email Address *
            </label>
            <input
              type='email'
              id='email'
              value={state.formData.email || ''}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className='w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors'
              placeholder='Enter your email address'
              required={leadMagnetData.formConfig.requiredFields.includes(
                'email',
              )}
            />
          </div>

          {/* First Name */}
          {leadMagnetData.formConfig.requiredFields.includes('firstName') && (
            <div>
              <label
                htmlFor='firstName'
                className='block text-sm font-semibold text-neutral-900 mb-2'
              >
                First Name *
              </label>
              <input
                type='text'
                id='firstName'
                value={state.formData.firstName || ''}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className='w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors'
                placeholder='Enter your first name'
                required
              />
            </div>
          )}

          {/* Last Name */}
          {leadMagnetData.formConfig.requiredFields.includes('lastName') && (
            <div>
              <label
                htmlFor='lastName'
                className='block text-sm font-semibold text-neutral-900 mb-2'
              >
                Last Name *
              </label>
              <input
                type='text'
                id='lastName'
                value={state.formData.lastName || ''}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className='w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors'
                placeholder='Enter your last name'
                required
              />
            </div>
          )}

          {/* Company */}
          {leadMagnetData.formConfig.requiredFields.includes('company') && (
            <div className='sm:col-span-2'>
              <label
                htmlFor='company'
                className='block text-sm font-semibold text-neutral-900 mb-2'
              >
                Company Name *
              </label>
              <input
                type='text'
                id='company'
                value={state.formData.company || ''}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className='w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors'
                placeholder='Enter your company name'
                required
              />
            </div>
          )}
        </div>

        {/* Privacy Notice */}
        <div className='bg-neutral-50 rounded-lg p-4'>
          <p className='text-xs text-neutral-600 leading-relaxed'>
            By submitting this form, you agree to receive marketing
            communications from CFOPro. We respect your privacy and will never
            share your information with third parties. You can unsubscribe at
            any time.
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type='submit'
          variant='primary'
          size='lg'
          disabled={state.isSubmitting || state.selectedDocuments.length === 0}
          className='w-full bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white shadow-strong hover:shadow-xl transform hover:scale-105 transition-all duration-300'
        >
          {state.isSubmitting ? (
            <>
              <svg
                className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
              Preparing Downloads...
            </>
          ) : (
            <>
              <svg
                className='w-5 h-5 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
              Download Selected Resources ({state.selectedDocuments.length})
            </>
          )}
        </Button>
      </form>
    </div>
  );
};
