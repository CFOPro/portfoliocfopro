import React from 'react';
import { APP_CONFIG } from '../../core/constants';
import { additionalPhone, contactInfo } from '../../data';
import { Container } from '../ui';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Outsourced Accounting', href: '#services' },
        { label: 'Controller Services', href: '#services' },
        { label: 'Fractional CFO', href: '#services' },
        { label: 'Supporting Services', href: '#services' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Process', href: '#process' },
        { label: 'Showcase', href: '#showcase' },
        { label: 'Contact', href: '#contact' },
      ]
    }
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-white">{APP_CONFIG.name}</h3>
              <p className="text-neutral-300 mb-6 max-w-md leading-relaxed">
                {APP_CONFIG.tagline}
              </p>
              <p className="text-neutral-400 mb-6 max-w-md text-sm leading-relaxed">
                Strategic financial leadership for startups and small businesses.
                We turn financial complexity into strategic opportunity.
              </p>
              <div className="flex space-x-6">
                <a
                  href={contactInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-secondary-300 transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href={contactInfo.social.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-secondary-300 transition-colors duration-200"
                >
                  Schedule Call
                </a>
              </div>
            </div>

            {/* Services and Company Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
              <ul className="space-y-3 text-neutral-300 text-sm">
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${additionalPhone}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {additionalPhone}
                  </a>
                </li>
                <li className="text-neutral-400 pt-2">
                  <div>{contactInfo.address.street}</div>
                  <div>{contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zipCode}</div>
                </li>
              </ul>

              {/* CTA */}
              <div className="mt-6 p-4 bg-primary-600 rounded-lg">
                <p className="text-sm text-primary-100 mb-2">Ready to get started?</p>
                <a
                  href={APP_CONFIG.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-primary-700 px-4 py-2 rounded text-sm font-semibold hover:bg-primary-50 transition-colors duration-200"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-neutral-400 text-sm">
              <p>&copy; {currentYear} {APP_CONFIG.name}. All rights reserved.</p>
              <p className="mt-2 md:mt-0">
                Reliable. Strategic. Insightful.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
