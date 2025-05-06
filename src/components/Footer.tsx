
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className={`col-span-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-xl font-bold mb-4 text-gold">
              {isRTL ? 'الثريات الفاخرة' : 'Luxury Chandeliers'}
            </h3>
            <p className="text-gray-300 mb-4">
              {isRTL 
                ? 'نقدم أرقى أنواع الثريات والإضاءة الفاخرة لتحويل مساحتك إلى تحفة فنية.' 
                : 'Providing the finest chandeliers and luxury lighting to transform your space into a work of art.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className={`col-span-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-xl font-bold mb-4 text-gold">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  {t('gallery')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`col-span-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-xl font-bold mb-4 text-gold">
              {isRTL ? 'معلومات التواصل' : 'Contact Info'}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`w-5 h-5 text-gold ${isRTL ? 'order-2' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
                <span className="text-gray-300">
                  {isRTL ? 'شارع الملك فهد، الرياض، المملكة العربية السعودية' : 'King Fahd Rd, Riyadh, Saudi Arabia'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`w-5 h-5 text-gold ${isRTL ? 'order-2' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
                <span className="text-gray-300">info@luxurychandeliers.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`w-5 h-5 text-gold ${isRTL ? 'order-2' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" 
                  />
                </svg>
                <span className="text-gray-300">+966 50 000 0000</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className={`col-span-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-xl font-bold mb-4 text-gold">
              {isRTL ? 'تابعنا' : 'Follow Us'}
            </h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 3.181 2.586 5.767 5.767 5.767 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm0 9.5c-2.056 0-3.733-1.677-3.733-3.733s1.677-3.733 3.733-3.733c2.056 0 3.733 1.677 3.733 3.733s-1.677 3.733-3.733 3.733zm7.302-9.734c0 .744-.6 1.344-1.343 1.344-.744 0-1.345-.6-1.345-1.344 0-.744.601-1.344 1.345-1.344.743 0 1.343.6 1.343 1.344zm3.787 1.364c-.084-1.779-.494-3.354-1.806-4.666-1.312-1.312-2.887-1.722-4.665-1.806-1.837-.084-7.349-.084-9.186 0-1.779.084-3.354.494-4.666 1.806-1.312 1.312-1.722 2.887-1.806 4.666-.084 1.837-.084 7.349 0 9.186.084 1.779.494 3.354 1.806 4.666 1.312 1.312 2.887 1.721 4.666 1.806 1.836.084 7.348.084 9.186 0 1.778-.085 3.353-.494 4.665-1.806 1.312-1.312 1.722-2.887 1.806-4.666.084-1.836.084-7.348 0-9.186zm-2.376 11.161c-.386.86-1.134 1.608-1.994 1.994-1.382.519-4.661.399-6.186.399-1.525 0-4.804.12-6.186-.399-.86-.386-1.608-1.134-1.994-1.994-.519-1.382-.399-4.661-.399-6.186 0-1.525-.12-4.804.399-6.186.386-.86 1.134-1.608 1.994-1.994 1.382-.519 4.661-.399 6.186-.399 1.525 0 4.804-.12 6.186.399.86.386 1.608 1.134 1.994 1.994.519 1.382.399 4.661.399 6.186 0 1.525.12 4.804-.399 6.186z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 text-center">
          <p className="text-gray-400">
            {t('copyright')} | {t('footer-rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
