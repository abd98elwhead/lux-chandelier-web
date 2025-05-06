
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const buttonText = language === 'en' ? 'العربية' : 'English';
  const ariaLabel = language === 'en' ? 'Switch to Arabic language' : 'التبديل إلى اللغة الإنجليزية';

  return (
    <Button 
      onClick={toggleLanguage} 
      variant="outline" 
      size="sm"
      className="bg-transparent border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300 transform hover:scale-105"
      aria-label={ariaLabel}
      title={language === 'en' ? 'تغيير اللغة إلى العربية' : 'Change language to English'}
    >
      {buttonText}
    </Button>
  );
};

export default LanguageSwitcher;
