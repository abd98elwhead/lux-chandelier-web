
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(true); // Set to true by default
  const { t, isRTL } = useLanguage();
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('services'), path: '/services' },
    { name: t('gallery'), path: '/gallery' },
    { name: t('testimonials'), path: '/testimonials' },
    { name: t('contact'), path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        // Only remove the background when not at the top of the home page
        setIsScrolled(location.pathname === '/' ? true : false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom mx-auto flex justify-between items-center">
        <Link to="/" className="text-charcoal hover:text-gold transition-colors duration-300 flex items-center gap-2">
          <img 
            src="/lovable-uploads/777e2494-28cc-4648-9bb5-cba7d8613829.png" 
            alt={isRTL ? 'هبات أيست' : 'Hebat East'} 
            className="w-10 h-10 object-contain"
          />
          <h1 className={`text-2xl font-bold ${isRTL ? 'font-tajawal' : 'font-playfair'}`}>
            {isRTL ? 'هبات أيست' : 'Hebat East'}
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-6`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${location.pathname === item.path ? 'text-gold' : 'text-charcoal'} hover:text-gold transition-colors duration-300`}
            >
              {item.name}
            </Link>
          ))}
          <div className="ml-6">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Navigation with Shadcn Sheet Component */}
        <div className={`lg:hidden flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={`${isRTL ? 'mr-4' : 'ml-4'} text-charcoal hover:text-gold transition-colors duration-300`}
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side={isRTL ? "right" : "left"} className="p-0 pt-10 w-64">
              <div className="p-4">
                <div className="flex items-center gap-2 mb-6">
                  <img 
                    src="/lovable-uploads/777e2494-28cc-4648-9bb5-cba7d8613829.png" 
                    alt={isRTL ? 'هبات أيست' : 'Hebat East'} 
                    className="w-8 h-8 object-contain"
                  />
                  <h2 className={`text-xl font-bold ${isRTL ? 'font-tajawal' : 'font-playfair'}`}>
                    {isRTL ? 'هبات أيست' : 'Hebat East'}
                  </h2>
                </div>
                <div className={`flex flex-col space-y-2 ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block w-full px-4 py-3 rounded-md ${
                        location.pathname === item.path 
                        ? 'bg-gold text-white' 
                        : 'text-charcoal hover:bg-gold-light hover:text-gold'
                      } transition-colors duration-300`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
