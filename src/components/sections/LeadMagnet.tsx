import React from 'react';
import { leadMagnetData } from '../../data/lead-magnet';
import { useLeadMagnet } from '../../hooks/use-lead-magnet';
import { Button, Container } from '../ui';
import { Modal } from '../ui/Modal';
import { LeadMagnetModal } from './LeadMagnetModal';

export const LeadMagnet: React.FC = () => {
  const [state, actions] = useLeadMagnet();

  const handleGetStarted = () => {
    // Pre-select featured documents
    const featuredDocs = leadMagnetData.documents.filter((doc) => doc.featured);
    if (featuredDocs.length > 0) {
      actions.selectAllDocuments(featuredDocs);
    }
    actions.openModal();
  };

  return (
    <>
      <section className='bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding relative overflow-hidden'>
        {/* Background decorative elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-30 blur-3xl'></div>
          <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-100 rounded-full opacity-30 blur-3xl'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-full opacity-20 blur-3xl'></div>
        </div>

        <Container>
          <div className='relative z-10'>
            {/* Header */}
            <div className='text-center mb-12 lg:mb-16 px-4 sm:px-0'>
              <div className='inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-xs sm:text-sm font-semibold border border-primary-200 shadow-soft mb-4 lg:mb-6'>
                <svg
                  className='w-3 h-3 sm:w-4 sm:h-4 mr-2'
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
                {leadMagnetData.subtitle}
              </div>

              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 text-neutral-900 leading-tight'>
                {leadMagnetData.title}
              </h2>

              <p className='text-lg sm:text-xl max-w-4xl mx-auto text-neutral-600 leading-relaxed mb-8 lg:mb-10'>
                {leadMagnetData.description}
              </p>
            </div>

            {/* Main Content Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
              {/* Benefits List */}
              <div className='px-4 sm:px-0'>
                <h3 className='text-xl sm:text-2xl font-bold mb-6 lg:mb-8 text-neutral-900'>
                  What You'll Get:
                </h3>

                <ul className='space-y-4 lg:space-y-5 mb-8 lg:mb-10'>
                  {leadMagnetData.benefits.map((benefit, index) => (
                    <li key={index} className='flex items-start'>
                      <div className='w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0'>
                        <svg
                          className='w-3.5 h-3.5 text-primary-600'
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
                      </div>
                      <span className='text-neutral-700 leading-relaxed text-base sm:text-lg'>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Trust Indicators */}
                <div className='bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-primary-100 shadow-soft'>
                  <div className='flex items-center mb-3'>
                    <div className='w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-3'>
                      <svg
                        className='w-4 h-4 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                    <span className='font-semibold text-neutral-900'>
                      Trusted by 500+ Growing Businesses
                    </span>
                  </div>
                  <p className='text-sm text-neutral-600 leading-relaxed'>
                    Join successful companies that have used our resources to
                    optimize their financial operations and accelerate growth.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className='px-4 sm:px-0'>
                <div className='bg-gradient-to-br from-white to-primary-50 p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-primary-100 shadow-card relative overflow-hidden'>
                  {/* Background decoration */}
                  <div className='absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-50 -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12'></div>

                  <div className='relative z-10'>
                    {/* Document Preview */}
                    <div className='flex items-center space-x-3 mb-6 lg:mb-8'>
                      {leadMagnetData.documents
                        .filter((doc) => doc.featured)
                        .slice(0, 3)
                        .map((doc) => (
                          <div key={doc.id} className='flex-shrink-0'>
                            <div className='w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center text-white text-lg sm:text-xl shadow-card'>
                              {doc.icon}
                            </div>
                          </div>
                        ))}
                      <div className='text-sm text-neutral-600'>
                        +{leadMagnetData.documents.length} Resources Available
                      </div>
                    </div>

                    <h3 className='text-xl sm:text-2xl font-bold mb-4 lg:mb-6 text-neutral-900'>
                      Get Instant Access
                    </h3>

                    <p className='text-neutral-600 mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base'>
                      Enter your email below to unlock our complete library of
                      financial resources. No commitment required – immediate
                      download starts after email confirmation.
                    </p>

                    {/* CTA Button */}
                    <Button
                      variant='primary'
                      size='lg'
                      onClick={handleGetStarted}
                      className='bg-primary-600 hover:bg-primary-700 text-white w-full shadow-strong hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 py-4'
                    >
                      <svg
                        className='w-4 h-4 sm:w-5 sm:h-5 mr-2'
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
                      Download Free Resources
                    </Button>

                    {/* Privacy Note */}
                    <p className='text-xs text-neutral-500 mt-4 text-center leading-relaxed'>
                      We respect your privacy. No spam, just valuable financial
                      insights.
                      <br />
                      Unsubscribe at any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            {/*
            <div className='text-center mt-12 lg:mt-16 px-4 sm:px-0'>
              <p className='text-neutral-500 text-xs sm:text-sm mb-4 lg:mb-6 font-medium'>
                Downloaded by Finance Leaders at
              </p>
              <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60'>
                <div className='text-neutral-400 font-semibold text-sm sm:text-base lg:text-lg'>
                  TechFlow
                </div>
                <div className='text-neutral-400 font-semibold text-sm sm:text-base lg:text-lg'>
                  Growth Ventures
                </div>
                <div className='text-neutral-400 font-semibold text-sm sm:text-base lg:text-lg'>
                  Scale Dynamics
                </div>
                <div className='text-neutral-400 font-semibold text-sm sm:text-base lg:text-lg'>
                  StartupCorp
                </div>
                <div className='text-neutral-400 font-semibold text-sm sm:text-base lg:text-lg'>
                  InnovateCo
                </div>
              </div>
            </div>
            */}
          </div>
        </Container>
      </section>

      {/* Modal */}
      <Modal
        isOpen={state.isModalOpen}
        onClose={actions.closeModal}
        title='Download Your Free Financial Resources'
        size='lg'
      >
        <LeadMagnetModal
          leadMagnetData={leadMagnetData}
          state={state}
          actions={actions}
        />
      </Modal>
    </>
  );
};
