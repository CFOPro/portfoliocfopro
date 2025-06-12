import React, { useState } from 'react';
import { APP_CONFIG } from '../../core/constants';
import { scrollToElement } from '../../core/utils';
import { navigationItems } from '../../data';
import { Button, Container } from '../ui';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Map gallery to showcase for navigation
      const targetHref = href === '#gallery' ? '#showcase' : href;
      scrollToElement(targetHref);
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50 border-b border-neutral-100">
      <Container>
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Logo Icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-neutral-500 rounded-lg flex items-center justify-center shadow-soft">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Three greater-than symbols of increasing size */}
                  <path d="M6 8L10 12L6 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 6L17 12L11 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 4L26 12L18 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Company Name */}
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-600">
                <span>{APP_CONFIG.name.split(',')[0]}</span>
                <span>, LLC</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className="text-neutral-600 hover:text-primary-600 font-medium transition-colors duration-200 relative group text-sm xl:text-base"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </button>
            ))}
            <Button
              variant="primary"
              size="sm"
              href={APP_CONFIG.calendlyUrl}
              className="shadow-soft hover:shadow-card bg-primary-600 hover:bg-primary-700 text-sm xl:text-base px-4 xl:px-6 py-2 xl:py-3"
            >
              Schedule Consultation
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-5 sm:w-6 bg-neutral-600 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`} />
              <span className={`block h-0.5 w-5 sm:w-6 bg-neutral-600 transition-all duration-300 mt-1 ${
                isMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block h-0.5 w-5 sm:w-6 bg-neutral-600 transition-all duration-300 mt-1 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-neutral-200 bg-white">
            <nav className="py-3 sm:py-4 space-y-1 sm:space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-neutral-600 hover:text-primary-600 font-medium py-2 sm:py-3 px-2 rounded-lg hover:bg-neutral-50 transition-colors duration-200 text-sm sm:text-base"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 sm:pt-4 px-2">
                <Button
                  variant="primary"
                  size="sm"
                  href={APP_CONFIG.calendlyUrl}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-sm sm:text-base py-2 sm:py-3"
                >
                  Schedule Consultation
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};
