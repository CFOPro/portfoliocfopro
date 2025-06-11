import React from 'react';
import { APP_CONFIG } from '../../core/constants';
import { services } from '../../data';
import { Button, Container } from '../ui';

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white section-padding">
      <Container>
        <div className="text-center mb-16 lg:mb-20 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-neutral-900">Our Core Services</h2>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto text-neutral-600 leading-relaxed">
            Comprehensive financial solutions designed to strengthen your operations,
            improve profitability, and accelerate growth at every stage of your business journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20 px-4 sm:px-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 hover:shadow-strong transition-all duration-500 group ${
                index % 2 === 0 ? 'lg:hover:-translate-y-2' : 'lg:hover:translate-y-2'
              }`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-full opacity-50 -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 lg:mb-6">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-0 sm:mr-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                    <div className="w-12 h-1 bg-primary-600 rounded-full"></div>
                  </div>
                </div>

                <p className="text-neutral-600 mb-6 lg:mb-8 leading-relaxed text-base sm:text-lg">{service.description}</p>

                {service.features && (
                  <ul className="space-y-3 lg:space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-neutral-700">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="leading-relaxed text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-16 text-center text-white overflow-hidden mx-4 sm:mx-0">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full mb-6 lg:mb-8">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              Ready to Transform Your Financial Operations?
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 lg:mb-10 text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Schedule your strategic financial assessment today and discover how we can help
              you build sustainable profitability and long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button
                variant="secondary"
                size="lg"
                href={APP_CONFIG.calendlyUrl}
                className="bg-white text-primary-700 hover:bg-primary-50 border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#contact"
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
