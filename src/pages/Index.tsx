
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Index = () => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Service icons
  const serviceIcons = {
    installation: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 6L11 7.5M11 7.5L9.5 9M11 7.5H6M14.5 13L13 11.5M13 11.5L14.5 10M13 11.5H18M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    consultation: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10H16M8 14H12M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    maintenance: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 14L13.5 9M10.5 14L9 9M14 17H10M16 5H8C6.89543 5 6 5.89543 6 7V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V7C18 5.89543 17.1046 5 16 5Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V5.5H10V5Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className={`text-center mb-16 ${isRTL ? 'rtl' : ''}`}>
            <h2 className={`text-3xl md:text-4xl font-bold text-charcoal mb-4 animate-fade-in`}>
              {t('section-services-title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t('section-services-subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <ServiceCard
                title={t('service-chandelier-title')}
                description={t('service-chandelier-desc')}
                icon={serviceIcons.installation}
                isRTL={isRTL}
              />
            </div>

            {/* Service Card 2 */}
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <ServiceCard
                title={t('service-consultation-title')}
                description={t('service-consultation-desc')}
                icon={serviceIcons.consultation}
                isRTL={isRTL}
              />
            </div>

            {/* Service Card 3 */}
            <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
              <ServiceCard
                title={t('service-maintenance-title')}
                description={t('service-maintenance-desc')}
                icon={serviceIcons.maintenance}
                isRTL={isRTL}
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="inline-block bg-transparent border-2 border-gold text-gold px-6 py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
            >
              {isRTL ? 'عرض جميع الخدمات' : 'View All Services'}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRTL ? 'order-2 text-right' : 'order-1 text-left'} animate-fade-in`}>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                {t('section-about-title')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('about-paragraph-1')}
              </p>
              <p className="text-gray-600 mb-8">
                {t('about-paragraph-2')}
              </p>
              <Link 
                to="/about"
                className="inline-block bg-gold text-white px-6 py-3 rounded-md hover:bg-gold-dark transition-colors duration-300"
              >
                {isRTL ? 'اقرأ المزيد عنا' : 'Read More About Us'}
              </Link>
            </div>
            <div className={`${isRTL ? 'order-1' : 'order-2'} animate-fade-in`} style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Luxury Chandelier" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-5 -right-5 w-24 h-24 gold-gradient rounded-lg z-10"></div>
                <div className="absolute -top-5 -left-5 w-24 h-24 border-4 border-gold rounded-lg z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className={`text-center mb-16 ${isRTL ? 'rtl' : ''}`}>
            <h2 className={`text-3xl md:text-4xl font-bold text-charcoal mb-4 animate-fade-in`}>
              {t('section-gallery-title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t('section-gallery-subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
            {/* Gallery Image 1 */}
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Luxury Chandelier 1" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            {/* Gallery Image 2 */}
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1687&q=80" 
                alt="Luxury Chandelier 2" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            {/* Gallery Image 3 */}
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Luxury Chandelier 3" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/gallery"
              className="inline-block bg-transparent border-2 border-gold text-gold px-6 py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
            >
              {isRTL ? 'استكشاف المعرض' : 'Explore Gallery'}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className={`text-center mb-16 ${isRTL ? 'rtl' : ''}`}>
            <h2 className={`text-3xl md:text-4xl font-bold text-charcoal mb-4 animate-fade-in`}>
              {t('section-testimonials-title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t('section-testimonials-subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <TestimonialCard
                name={isRTL ? "محمد العمري" : "Mohammed Al-Amri"}
                role={isRTL ? "مالك فندق" : "Hotel Owner"}
                text={isRTL 
                  ? "تم تركيب أكثر من 15 ثريا في فندقنا. كانت الجودة استثنائية والخدمة احترافية للغاية. أوصي بشدة بخدماتهم."
                  : "They installed more than 15 chandeliers in our hotel. The quality was exceptional and the service was highly professional. I strongly recommend their services."}
                isRTL={isRTL}
              />
            </div>

            {/* Testimonial 2 */}
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <TestimonialCard
                name={isRTL ? "سارة الفيصل" : "Sarah Al-Faisal"}
                role={isRTL ? "مصممة داخلية" : "Interior Designer"}
                text={isRTL 
                  ? "أتعامل معهم في كل مشاريعي. يقدمون ثريات فاخرة بتصاميم فريدة وخدمة تركيب محترفة. شريك موثوق للمشاريع الراقية."
                  : "I work with them on all my projects. They provide luxury chandeliers with unique designs and professional installation service. A trusted partner for upscale projects."}
                isRTL={isRTL}
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/testimonials"
              className="inline-block bg-transparent border-2 border-gold text-gold px-6 py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
            >
              {isRTL ? 'المزيد من آراء العملاء' : 'More Testimonials'}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 animate-fade-in`}>
            {isRTL ? 'جاهز لتحويل مساحتك؟' : 'Ready to Transform Your Space?'}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {isRTL 
              ? 'تواصل معنا اليوم للحصول على استشارة مجانية ولنبدأ رحلتك نحو إضاءة فاخرة تليق بمساحتك.'
              : 'Contact us today for a free consultation and let\'s start your journey towards luxury lighting that your space deserves.'}
          </p>
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Link 
              to="/contact"
              className="inline-block bg-gold text-white px-8 py-4 rounded-md hover:bg-gold-dark transition-colors duration-300"
            >
              {isRTL ? 'تواصل معنا الآن' : 'Contact Us Now'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
