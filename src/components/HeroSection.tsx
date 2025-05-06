
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container-custom mx-auto relative z-10 pt-24 md:pt-32 px-4 md:px-6">
        <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('hero-title')}
          </h1>
          <p 
            className={`text-xl md:text-2xl text-gray-200 mb-8 transition-all duration-1000 ease-out delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('hero-subtitle')}
          </p>
          <div 
            className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : 'justify-start'} transition-all duration-1000 ease-out delay-500 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link 
              to="/gallery" 
              className="bg-gold text-white px-6 py-3 rounded-md hover:bg-gold-dark transition-all duration-300 inline-block transform hover:scale-105"
            >
              {t('cta-view')}
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-charcoal transition-all duration-300 inline-block transform hover:scale-105"
            >
              {t('cta-consultation')}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Gold Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 gold-gradient"></div>
    </section>
  );
};

export default HeroSection;
