
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    
    // Add a smooth transition for the whole page
    document.documentElement.style.transition = 'opacity 0.5s ease';
    document.documentElement.style.opacity = '0.8';
    
    setTimeout(() => {
      document.documentElement.style.opacity = '1';
    }, 500);
  };

  const buttonText = language === 'en' ? 'العربية' : 'English';
  const ariaLabel = language === 'en' ? 'Switch to Arabic language' : 'التبديل إلى اللغة الإنجليزية';

  return (
    <Button 
      onClick={toggleLanguage} 
      variant="outline" 
      size="sm"
      className="bg-transparent border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300 transform hover:scale-105 shadow-sm text-sm md:text-base py-1.5 px-3 md:px-4 rounded-md"
      aria-label={ariaLabel}
      title={language === 'en' ? 'تغيير اللغة إلى العربية' : 'Change language to English'}
    >
      {buttonText}
    </Button>
  );
};

export default LanguageSwitcher;
