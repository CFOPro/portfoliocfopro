import React from 'react';
import { companyInfo } from '../../data';
import { Container } from '../ui';

export const About: React.FC = () => {
  const stats = [
    { number: '2020', label: 'Founded' },
    { number: '500K+', label: 'Revenue Range Served' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '30 Days', label: 'Avg. Implementation' },
  ];

  return (
    <section id="about" className="bg-neutral-50 section-padding">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-neutral-900">About {companyInfo.name}</h2>
            <p className="text-lg sm:text-xl mb-6 lg:mb-8 text-neutral-600 leading-relaxed">
              {companyInfo.description}
            </p>

            {/* Mission & Vision */}
            <div className="mb-6 lg:mb-8">
              <div className="mb-4 lg:mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 lg:mb-3 text-neutral-900">Our Mission</h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{companyInfo.mission}</p>
              </div>
              <div className="mb-4 lg:mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 lg:mb-3 text-neutral-900">Our Vision</h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{companyInfo.vision}</p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-6 lg:mb-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 lg:mb-4 text-neutral-900">Our Core Values</h3>
              <ul className="space-y-2 lg:space-y-3">
                {companyInfo.values.map((value, index) => (
                  <li key={index} className="flex items-start text-neutral-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed text-sm sm:text-base">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="px-4 sm:px-0">
            <div className="relative mb-6 lg:mb-8">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="CFOPro team providing strategic financial leadership"
                className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-xl lg:rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent rounded-xl lg:rounded-2xl"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white p-4 sm:p-5 lg:p-6 rounded-lg lg:rounded-xl shadow-soft">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-600 mb-1 lg:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-neutral-600 font-medium text-xs sm:text-sm leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specialties Section */}
        <div className="mt-16 lg:mt-20 text-center px-4 sm:px-0">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8 text-neutral-900">Our Specialties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {companyInfo.specialties?.map((specialty, index) => (
              <div key={index} className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg lg:rounded-xl shadow-soft hover:shadow-card transition-shadow duration-300">
                <div className="text-primary-600 font-semibold text-sm sm:text-base">{specialty}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
