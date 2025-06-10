import React from 'react';
import { Container } from '../ui';

export const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '8+', label: 'Years Experience' },
    { number: '100+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
  ];

  const values = [
    'Excellence in everything we do',
    'Innovation that drives progress',
    'Integrity in all our relationships',
    'Collaboration for mutual success',
    'Customer-centric approach',
  ];

  return (
    <section id="about" className="bg-gray-50 section-padding">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-2 mb-6">About CFO Pro</h2>
            <p className="text-large mb-6">
              We are a leading provider of comprehensive business solutions, helping companies of all sizes achieve their goals through strategic planning, innovative technology, and expert guidance.
            </p>
            <p className="text-gray-600 mb-8">
              Founded in 2015, our mission is to empower businesses with the tools, knowledge, and strategies they need to thrive in an ever-evolving marketplace. We believe that success comes from understanding each client's unique challenges and delivering tailored solutions that drive real results.
            </p>

            {/* Values */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-2">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image and Stats */}
          <div>
            <div className="relative mb-8">
              <img
                src="/src/assets/images/team-collaboration.jpg"
                alt="Team collaboration"
                className="w-full h-64 lg:h-80 object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}; 