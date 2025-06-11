import React from 'react';
import { APP_CONFIG } from '../../core/constants';
import { additionalPhone, contactInfo, faqs } from '../../data';
import { Button, Container } from '../ui';

export const Contact: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = React.useState<string | null>(null);

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  return (
    <>
      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-white section-padding">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-semibold border border-primary-200 shadow-soft mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-neutral-900">
              Everything You Need to Know
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-neutral-600 leading-relaxed">
              Get comprehensive answers to common questions about our strategic financial services,
              implementation process, and how we can transform your business operations.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="mb-6 bg-white rounded-2xl shadow-soft border border-neutral-200 overflow-hidden hover:shadow-card transition-shadow duration-300">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-8 text-left flex items-center justify-between group hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div className={`w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center transition-all duration-300 ${
                      expandedFaq === faq.id ? 'bg-primary-600 rotate-180' : 'group-hover:bg-primary-200'
                    }`}>
                      <svg
                        className={`w-5 h-5 transition-colors duration-300 ${
                          expandedFaq === faq.id ? 'text-white' : 'text-primary-600'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-8 pb-8">
                    <div className="pl-12 border-l-4 border-primary-200">
                      <p className="text-lg text-neutral-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional CTA after FAQ */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-400 rounded-3xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation to discuss your specific needs and get personalized answers.
              </p>
              <Button
                variant="secondary"
                size="lg"
                href={APP_CONFIG.calendlyUrl}
                className="bg-white text-primary-700 hover:bg-primary-50 border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact & Scheduling Section */}
      <section id="contact" className="bg-gradient-to-br from-primary-600 via-primary-700 to-neutral-800 text-white section-padding relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary-300 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-300 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <Container>
          <div className="relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30 shadow-soft mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Ready to Get Started?
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">
                Transform Your Financial Future
              </h2>
              <p className="text-xl max-w-4xl mx-auto text-secondary-100 leading-relaxed">
                Take the first step towards strategic financial leadership. Schedule your consultation
                today and discover how CFOPro can transform your business's financial operations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Scheduling CTA */}
              <div className="bg-gradient-to-br from-secondary-300 to-secondary-400 rounded-3xl p-8 lg:p-10 text-center text-neutral-900 shadow-strong">
                <div className="text-6xl mb-6">🗓️</div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900">
                  Schedule Your Strategic Assessment
                </h3>
                <p className="text-neutral-700 mb-8 leading-relaxed">
                  Book a complimentary 30-minute consultation to discuss your financial challenges
                  and explore how our expertise can drive your business forward.
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  href={APP_CONFIG.calendlyUrl}
                  className="bg-primary-600 text-white hover:bg-primary-700 border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full"
                >
                  Schedule Free Consultation
                </Button>
                <p className="text-neutral-600 text-sm mt-4">
                  No commitment required • Immediate availability
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/20">
                <h3 className="text-2xl font-bold mb-8 text-white">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-secondary-100 hover:text-white transition-colors duration-200"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <div className="space-y-1">
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="block text-secondary-100 hover:text-white transition-colors duration-200"
                        >
                          {contactInfo.phone}
                        </a>
                        <a
                          href={`tel:${additionalPhone}`}
                          className="block text-secondary-100 hover:text-white transition-colors duration-200"
                        >
                          {additionalPhone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Office</h4>
                      <div className="text-secondary-100">
                        <p>{contactInfo.address.street}</p>
                        <p>{contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zipCode}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Connect</h4>
                      <div className="flex space-x-4">
                        <a
                          href={contactInfo.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary-100 hover:text-white transition-colors duration-200"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
