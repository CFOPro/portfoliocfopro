import React from 'react';
import { APP_CONFIG } from '../../core/constants';
import { showcaseImages } from '../../data';
import { Button, Container } from '../ui';

export const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="bg-gradient-to-br from-neutral-50 to-white section-padding">
      <Container>
        <div className="text-center mb-16 lg:mb-20 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-neutral-900">
            Financial Excellence in Action
          </h2>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto text-neutral-600 mb-8 lg:mb-12 leading-relaxed">
            See how we transform financial operations for growing businesses. Our expertise
            delivers measurable results that drive sustainable growth and profitability across
            every stage of your business journey.
          </p>
        </div>

        {/* Image Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20 px-4 sm:px-0">
          {showcaseImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-xl lg:rounded-2xl shadow-card hover:shadow-strong transition-all duration-500 ${
                index === 1 ? 'lg:scale-105' : ''
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2 drop-shadow-lg">
                  {image.title}
                </h3>
                <div className="w-10 sm:w-12 h-1 bg-primary-400 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-soft mb-16 lg:mb-20 mx-4 sm:mx-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">500K+</div>
              <div className="text-neutral-600 font-medium text-sm sm:text-base">Revenue Range Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">30</div>
              <div className="text-neutral-600 font-medium text-sm sm:text-base">Days Avg Implementation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-neutral-600 font-medium text-sm sm:text-base">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">2020</div>
              <div className="text-neutral-600 font-medium text-sm sm:text-base">Founded</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl lg:rounded-3xl p-6 sm:p-8 lg:p-16 text-center text-white overflow-hidden mx-4 sm:mx-0">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              Ready to Transform Your Financial Future?
            </h3>
            <p className="text-lg sm:text-xl mb-6 lg:mb-8 text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Join the growing number of successful businesses that trust CFOPro for their
              strategic financial leadership. Schedule your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button
                variant="secondary"
                size="lg"
                href={APP_CONFIG.calendlyUrl}
                className="bg-white text-primary-700 hover:bg-primary-50 border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#contact"
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                Learn More About Our Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
