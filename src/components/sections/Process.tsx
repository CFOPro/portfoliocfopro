import React from 'react';
import { processSteps, whoWeServe, whyChooseUs } from '../../data';
import { Container } from '../ui';

export const Process: React.FC = () => {
  return (
    <section id="process" className="bg-white section-padding">
      <Container>
        {/* Process Steps */}
        <div className="text-center mb-16 lg:mb-20 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-neutral-900">
            Our Process
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-neutral-600 mb-12 lg:mb-16 leading-relaxed">
            We follow a proven three-phase approach to ensure financial clarity, control, and growth
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary-100 text-primary-600 rounded-full text-2xl sm:text-3xl mb-4 lg:mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 lg:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 sm:top-8 left-full w-8 transform -translate-x-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-16 lg:mb-20 px-4 sm:px-0">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-neutral-900">
              Who We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whoWeServe.map((segment) => (
              <div key={segment.id} className="bg-neutral-50 p-6 sm:p-8 rounded-xl lg:rounded-2xl hover:shadow-card transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl mb-3 lg:mb-4">{segment.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 lg:mb-4">
                  {segment.title}
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {segment.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 mx-4 sm:mx-0">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-neutral-900">
              Why Choose CFOPro, LLC?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyChooseUs.map((reason) => (
              <div key={reason.id} className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    {reason.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
