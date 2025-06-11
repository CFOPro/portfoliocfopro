import React from 'react';
import { heroData } from '../../data';
import { Button, Container } from '../ui';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <Container>
        <div className="relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Badge */}
            <div className="mb-8 animate-fade-in">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-300 text-white rounded-full text-sm font-semibold shadow-card">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {heroData.subtitle}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-slide-up text-neutral-900 leading-tight">
              Strategic Financial Leadership—
              <span className="block text-primary-600 mt-2">When You Need It Most</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-neutral-600 animate-slide-up leading-relaxed">
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-slide-up">
              <Button
                variant="primary"
                size="lg"
                href={heroData.primaryButton.href}
                className="bg-primary-600 hover:bg-primary-700 shadow-strong hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {heroData.primaryButton.text}
              </Button>
              {heroData.secondaryButton && (
                <Button
                  variant="outline"
                  size="lg"
                  href={heroData.secondaryButton.href}
                  className="text-lg px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                >
                  {heroData.secondaryButton.text}
                </Button>
              )}
            </div>
          </div>

          {/* Hero Visual Section */}
          <div className="max-w-7xl mx-auto animate-scale-in">
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="CFOPro team providing strategic financial leadership to growing businesses"
                  className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating Achievement Cards */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-6 rounded-2xl shadow-strong max-w-xs border-l-4 border-primary-600">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-primary-600 rounded-full mr-2"></div>
                  <span className="text-sm text-neutral-600 font-medium">Cost Reduction</span>
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-1">40%</div>
                <div className="text-sm text-neutral-600">Average savings achieved</div>
              </div>

              <div className="absolute -top-6 -right-4 sm:-right-8 bg-white p-6 rounded-2xl shadow-strong max-w-xs border-l-4 border-secondary-300">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-secondary-300 rounded-full mr-2"></div>
                  <span className="text-sm text-neutral-600 font-medium">Client Success</span>
                </div>
                <div className="text-3xl font-bold text-secondary-400 mb-1">95%</div>
                <div className="text-sm text-neutral-600">Satisfaction rate</div>
              </div>

              <div className="absolute bottom-8 right-8 bg-gradient-to-r from-primary-600 to-secondary-300 p-4 rounded-xl shadow-card text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Trusted by 100+ businesses</div>
                    <div className="text-xs text-white/80">From startups to scale-ups</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 text-center">
            <p className="text-neutral-500 text-sm mb-8 font-medium">TRUSTED BY GROWING BUSINESSES</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-neutral-400 font-semibold text-lg">TechFlow</div>
              <div className="text-neutral-400 font-semibold text-lg">Growth Ventures</div>
              <div className="text-neutral-400 font-semibold text-lg">Scale Dynamics</div>
              <div className="text-neutral-400 font-semibold text-lg">StartupCorp</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
