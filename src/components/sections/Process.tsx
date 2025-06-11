import React from 'react';
import { processSteps, whoWeServe, whyChooseUs } from '../../data';
import { Container } from '../ui';

export const Process: React.FC = () => {
  return (
    <section id="process" className="bg-white section-padding">
      <Container>
        {/* Process Steps */}
        <div className="text-center mb-20">
          <h2 className="heading-2 mb-6 text-neutral-900">
            Our Process
          </h2>
          <p className="text-large max-w-3xl mx-auto text-neutral-600 mb-16">
            We follow a proven three-phase approach to ensure financial clarity, control, and growth
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-3xl mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 transform -translate-x-4">
                    <svg className="w-8 h-8 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 text-neutral-900">
              Who We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whoWeServe.map((segment) => (
              <div key={segment.id} className="bg-neutral-50 p-8 rounded-xl hover:shadow-card transition-shadow duration-300">
                <div className="text-4xl mb-4">{segment.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {segment.title}
                </h3>
                <p className="text-neutral-600">
                  {segment.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-neutral-900">
              Why Choose CFOPro, LLC?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason) => (
              <div key={reason.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-sm text-neutral-600">
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
