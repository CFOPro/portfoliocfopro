import React from 'react';
import { APP_CONFIG } from '../../core/constants';
import { showcaseImages } from '../../data';
import { Button, Container } from '../ui';

export const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="bg-gradient-to-br from-neutral-50 to-white section-padding">
      <Container>
        <div className="text-center mb-20">
          <h2 className="heading-2 mb-6 text-neutral-900">
            Financial Excellence in Action
          </h2>
          <p className="text-large max-w-4xl mx-auto text-neutral-600 mb-12">
            See how we transform financial operations for growing businesses. Our expertise
            delivers measurable results that drive sustainable growth and profitability across
            every stage of your business journey.
          </p>
        </div>

        {/* Image Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {showcaseImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl shadow-card hover:shadow-strong transition-all duration-500 ${
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
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">
                  {image.title}
                </h3>
                <div className="w-12 h-1 bg-primary-400 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-card mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500K+</div>
              <div className="text-neutral-600 font-medium">Revenue Range Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">30</div>
              <div className="text-neutral-600 font-medium">Days Avg Implementation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-neutral-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">2020</div>
              <div className="text-neutral-600 font-medium">Founded</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Future?
          </h3>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Join the growing number of successful businesses that trust CFOPro for their
            strategic financial leadership. Schedule your consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              href={APP_CONFIG.calendlyUrl}
              className="bg-white text-primary-700 hover:bg-primary-50 border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Schedule Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#contact"
              className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
