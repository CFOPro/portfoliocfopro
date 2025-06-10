import React from 'react';
import { Container } from '../ui';
import { services } from '../../data';

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white section-padding">
      <Container>
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Services</h2>
          <p className="text-large max-w-2xl mx-auto">
            We offer comprehensive business solutions designed to help your company thrive in today's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-lg p-8 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="heading-3 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              {service.features && (
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}; 