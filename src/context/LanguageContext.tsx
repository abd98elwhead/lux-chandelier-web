
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

interface LanguageProviderProps {
  children: ReactNode;
}

// Translation dictionary
const translations: Record<string, Record<Language, string>> = {
  'home': {
    en: 'Home',
    ar: 'الرئيسية'
  },
  'about': {
    en: 'About Us',
    ar: 'من نحن'
  },
  'services': {
    en: 'Our Services',
    ar: 'خدماتنا'
  },
  'gallery': {
    en: 'Gallery',
    ar: 'معرض الصور'
  },
  'testimonials': {
    en: 'Testimonials',
    ar: 'آراء العملاء'
  },
  'contact': {
    en: 'Contact Us',
    ar: 'تواصل معنا'
  },
  'hero-title': {
    en: 'Luxury Chandeliers & Lighting Solutions',
    ar: 'حلول الإضاءة والثريات الفاخرة'
  },
  'hero-subtitle': {
    en: 'Elevate your space with our exquisite chandelier collection',
    ar: 'ارتقِ بمساحتك مع مجموعتنا الفاخرة من الثريات'
  },
  'cta-view': {
    en: 'View Our Collection',
    ar: 'شاهد تشكيلتنا الفاخرة'
  },
  'cta-consultation': {
    en: 'Free Consultation',
    ar: 'احصل على استشارة مجانية'
  },
  'section-services-title': {
    en: 'Our Premium Services',
    ar: 'خدماتنا المميزة'
  },
  'section-services-subtitle': {
    en: 'Experience excellence in every detail',
    ar: 'تجربة التميز في كل التفاصيل'
  },
  'service-chandelier-title': {
    en: 'Luxury Chandelier Installation',
    ar: 'تركيب الثريات الفاخرة'
  },
  'service-chandelier-desc': {
    en: 'Professional installation by certified experts',
    ar: 'تركيب احترافي بواسطة خبراء معتمدين'
  },
  'service-consultation-title': {
    en: 'Lighting Consultation',
    ar: 'استشارات الإضاءة'
  },
  'service-consultation-desc': {
    en: 'Get expert advice for your space',
    ar: 'احصل على نصائح الخبراء لمساحتك'
  },
  'service-maintenance-title': {
    en: 'Maintenance & Cleaning',
    ar: 'الصيانة والتنظيف'
  },
  'service-maintenance-desc': {
    en: 'Keep your chandeliers looking pristine',
    ar: 'حافظ على مظهر الثريات الخاصة بك'
  },
  'section-about-title': {
    en: 'About Us',
    ar: 'من نحن'
  },
  'section-about-subtitle': {
    en: 'Dedicated to brilliance and elegance',
    ar: 'ملتزمون بالتألق والأناقة'
  },
  'about-paragraph-1': {
    en: 'We specialize in providing and installing luxury chandeliers that transform spaces into magnificent works of art.',
    ar: 'نحن متخصصون في توفير وتركيب الثريات الفاخرة التي تحول المساحات إلى أعمال فنية رائعة.'
  },
  'about-paragraph-2': {
    en: 'With years of experience and a passion for excellence, our team brings the perfect blend of artistry and functionality to every project.',
    ar: 'مع سنوات من الخبرة والشغف بالتميز، يقدم فريقنا المزيج المثالي من الفن والوظائف العملية لكل مشروع.'
  },
  'section-gallery-title': {
    en: 'Our Gallery',
    ar: 'معرض أعمالنا'
  },
  'section-gallery-subtitle': {
    en: 'Explore our finest installations',
    ar: 'استكشف أفضل التركيبات لدينا'
  },
  'section-testimonials-title': {
    en: 'What Our Clients Say',
    ar: 'ماذا يقول عملاؤنا'
  },
  'section-testimonials-subtitle': {
    en: 'Real feedback from satisfied customers',
    ar: 'آراء حقيقية من عملاء راضين'
  },
  'section-contact-title': {
    en: 'Get In Touch',
    ar: 'تواصل معنا'
  },
  'section-contact-subtitle': {
    en: 'We\'re here to help with your lighting needs',
    ar: 'نحن هنا للمساعدة في احتياجات الإضاءة الخاصة بك'
  },
  'form-name': {
    en: 'Full Name',
    ar: 'الاسم الكامل'
  },
  'form-email': {
    en: 'Email Address',
    ar: 'البريد الإلكتروني'
  },
  'form-phone': {
    en: 'Phone Number',
    ar: 'رقم الهاتف'
  },
  'form-message': {
    en: 'Your Message',
    ar: 'رسالتك'
  },
  'form-submit': {
    en: 'Send Message',
    ar: 'إرسال الرسالة'
  },
  'whatsapp-text': {
    en: 'Contact us via WhatsApp',
    ar: 'تواصل معنا عبر واتساب'
  },
  'footer-rights': {
    en: 'All Rights Reserved',
    ar: 'جميع الحقوق محفوظة'
  },
  'copyright': {
    en: '© 2025 Luxury Chandeliers',
    ar: '© 2025 الثريات الفاخرة'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('ar'); // Default to Arabic

  const isRTL = language === 'ar';

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'ar' : 'en'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
