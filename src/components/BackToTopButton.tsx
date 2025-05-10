
import React, { useEffect, useState } from 'react';
import { ArrowUp, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isRTL, language } = useLanguage();
  const isMobile = useIsMobile();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Different styles for Arabic and English
  if (language === 'ar') {
    return (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-40 bg-gold hover:bg-gold-dark text-white p-2 sm:p-3 rounded-full shadow-lg transform transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
        aria-label="العودة إلى الأعلى"
        title="العودة إلى الأعلى"
      >
        <ArrowUp size={isMobile ? 18 : 20} />
      </button>
    );
  } else {
    return (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-40 p-2 sm:p-3 rounded-full shadow-lg transform transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        } bg-gradient-to-r from-gold to-amber-500 text-white`}
        aria-label="Back to top"
        title="Back to top"
      >
        <ChevronUp size={isMobile ? 18 : 20} className="animate-bounce" />
      </button>
    );
  }
};

export default BackToTopButton;
