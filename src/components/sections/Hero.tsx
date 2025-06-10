import React from 'react';
import { Button, Container } from '../ui';
import { TailwindTest } from '../ui/TailwindTest';
import { heroData } from '../../data';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-gray-100 section-padding">
      <Container>
        {/* Temporary Tailwind Test */}
        <TailwindTest />
        <div className="text-center max-w-4xl mx-auto mt-8">
          <h2 className="text-blue-600 font-semibold text-lg mb-4">
            {heroData.subtitle}
          </h2>
          <h1 className="heading-1 mb-6">
            {heroData.title}
          </h1>
          <p className="text-large mb-8 max-w-2xl mx-auto">
            {heroData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href={heroData.primaryButton.href}
            >
              {heroData.primaryButton.text}
            </Button>
            {heroData.secondaryButton && (
              <Button
                variant="outline"
                size="lg"
                href={heroData.secondaryButton.href}
              >
                {heroData.secondaryButton.text}
              </Button>
            )}
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-16">
          <div className="relative max-w-4xl mx-auto">
            <img
              src="/src/assets/images/hero-business.jpg"
              alt="Business professionals collaborating"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-xl"
              onError={(e) => {
                // Fallback to a placeholder if local image doesn't exist
                e.currentTarget.src = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}; 