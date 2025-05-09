
import React, { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LazyImage from '../components/LazyImage';
import { useIsMobile } from '../hooks/use-mobile';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProductCard from '../components/ProductCard';
import PartnerSlider from '../components/PartnerSlider';

const Index = () => {
  const { t, isRTL, language } = useLanguage();
  const isMobile = useIsMobile();
  
  // Refs for scroll animations
  const galleryRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Intersection Observer for scroll animations - with smoother transitions
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a slower, smoother animation class
          entry.target.classList.add('animate-reveal-smooth');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all section refs
    [galleryRef, partnersRef, aboutRef, servicesRef, testimonialsRef, contactRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => observer.disconnect();
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

      {/* Gallery Preview Section (Now positioned right after Hero) */}
      <section className="py-16 md:py-20 bg-gray-50" ref={galleryRef}>
        <div className="container-custom mx-auto">
          <div className={`text-center mb-10 md:mb-16 ${isRTL ? 'rtl' : ''}`}>
            <h2 className={`text-2xl md:text-3xl font-bold text-charcoal mb-3 md:mb-4`}>
              {isRTL ? 'تشكيلة أعمالنا' : 'Our Collection'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL 
                ? 'تصفح مجموعتنا المميزة من الثريات والإضاءات الفاخرة المناسبة لكل الأذواق والديكورات'
                : 'Browse our distinguished collection of chandeliers and luxury lighting suitable for all tastes and decorations'}
            </p>
          </div>

          {/* Show static cards on desktop, carousel only on mobile */}
          {isMobile ? (
            <Carousel
              opts={{ loop: true, align: "start" }}
              className="w-full max-w-5xl mx-auto px-4"
              autoPlay={true}
              interval={5000}
            >
              <CarouselContent>
                <CarouselItem className="basis-full">
                  <ProductCard 
                    title={isRTL ? "ثريا كريستال فاخرة" : "Luxury Crystal Chandelier"}
                    price="12,500 SAR"
                    images={[
                      "https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1687&q=80"
                    ]}
                    isRTL={isRTL}
                  />
                </CarouselItem>
                
                <CarouselItem className="basis-full">
                  <ProductCard 
                    title={isRTL ? "ثريا كلاسيكية" : "Classic Chandelier"}
                    price="8,750 SAR"
                    images={[
                      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1687&q=80",
                      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    ]}
                    isRTL={isRTL}
                  />
                </CarouselItem>
                
                <CarouselItem className="basis-full">
                  <ProductCard 
                    title={isRTL ? "ثريا مودرن" : "Modern Chandelier"}
                    price="9,200 SAR"
                    images={[
                      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                      "https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    ]}
                    isRTL={isRTL}
                  />
                </CarouselItem>
              </CarouselContent>
              
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="mx-1 bg-white/80 hover:bg-gold hover:text-white border-none" />
                <CarouselNext className="mx-1 bg-white/80 hover:bg-gold hover:text-white border-none" />
              </div>
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto">
              <ProductCard 
                title={isRTL ? "ثريا كريستال فاخرة" : "Luxury Crystal Chandelier"}
                price="12,500 SAR"
                images={[
                  "https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1687&q=80"
                ]}
                isRTL={isRTL}
              />
              
              <ProductCard 
                title={isRTL ? "ثريا كلاسيكية" : "Classic Chandelier"}
                price="8,750 SAR"
                images={[
                  "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1687&q=80",
                  "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                ]}
                isRTL={isRTL}
              />
              
              <ProductCard 
                title={isRTL ? "ثريا مودرن" : "Modern Chandelier"}
                price="9,200 SAR"
                images={[
                  "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                  "https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                ]}
                isRTL={isRTL}
              />
            </div>
          )}

          <div className="text-center mt-10">
            <Link 
              to="/gallery"
              className="inline-block bg-transparent border-2 border-gold text-gold px-5 py-2 md:px-6 md:py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
            >
              {isRTL ? 'عرض كافة التشكيلات' : 'View All Collections'}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Our Partners Section */}
      <section className="py-12 md:py-16 bg-white" ref={partnersRef}>
        <div className="container-custom mx-auto px-4">
          <div className={`text-center mb-8 md:mb-12 ${isRTL ? 'rtl' : ''}`}>
            <h2 className={`text-2xl md:text-3xl font-bold text-charcoal mb-3 transition-opacity duration-700`}>
              {isRTL ? 'شركاؤنا واعتماداتنا' : 'Our Partners & Certifications'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL 
                ? 'نفتخر بالعمل مع أفضل الشركات العالمية لتقديم أرقى المنتجات لعملائنا.'
                : 'We proudly work with the world\'s best companies to deliver the finest products to our customers.'}
            </p>
          </div>
          
          <PartnerSlider />
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 md:py-20" ref={aboutRef}>
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`${isRTL ? 'order-2 text-right' : 'order-1 text-left'} transition-transform duration-700 translate-x-0`}>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 md:mb-6">
                {isRTL ? 'هبات أيست' : 'Hebat East'}
              </h2>
              <p className="text-gray-600 mb-4 md:mb-6">
                {t('about-paragraph-1')}
              </p>
              <p className="text-gray-600 mb-4 md:mb-8">
                {t('about-paragraph-2')}
              </p>
              <Link 
                to="/about"
                className="inline-block bg-gold text-white px-5 py-2 md:px-6 md:py-3 rounded-md hover:bg-gold-dark transition-colors duration-300"
              >
                {isRTL ? 'اقرأ المزيد عنا' : 'Read More About Us'}
              </Link>
            </div>
            <div className={`${isRTL ? 'order-1' : 'order-2'} transition-transform duration-700 translate-x-0`}>
              <div className="relative">
                <LazyImage 
                  src="https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Luxury Chandelier" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-5 -right-5 w-16 h-16 md:w-24 md:h-24 gold-gradient rounded-lg z-10"></div>
                <div className="absolute -top-5 -left-5 w-16 h-16 md:w-24 md:h-24 border-4 border-gold rounded-lg z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white" ref={servicesRef}>
        <div className="container-custom mx-auto">
          <div className={`text-center mb-10 md:mb-16 ${isRTL ? 'rtl' : ''}`}>
            <h2 className={`text-2xl md:text-3xl font-bold text-charcoal mb-3 md:mb-4`}>
              {t('section-services-title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('section-services-subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service Cards */}
            <div>
              <ServiceCard
                title={t('service-chandelier-title')}
                description={t('service-chandelier-desc')}
                icon={serviceIcons.installation}
                isRTL={isRTL}
              />
            </div>

            <div>
              <ServiceCard
                title={t('service-consultation-title')}
                description={t('service-consultation-desc')}
                icon={serviceIcons.consultation}
                isRTL={isRTL}
              />
            </div>

            <div>
              <ServiceCard
                title={t('service-maintenance-title')}
                description={t('service-maintenance-desc')}
                icon={serviceIcons.maintenance}
                isRTL={isRTL}
              />
            </div>
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/services"
              className="inline-block bg-transparent border-2 border-gold text-gold px-5 py-2 md:px-6 md:py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
            >
              {isRTL ? 'عرض جميع الخدمات' : 'View All Services'}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gray-50" ref={testimonialsRef}>
        <div className="container-custom mx-auto">
          <div className={`text-center mb-10 md:mb-16 ${isRTL ? 'rtl' : ''}`}>
            <h2 className={`text-2xl md:text-3xl font-bold text-charcoal mb-3 md:mb-4`}>
              {t('section-testimonials-title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('section-testimonials-subtitle')}
            </p>
          </div>

          <Carousel 
            className="w-full max-w-4xl mx-auto px-4" 
            opts={{ loop: true, align: "start", dragFree: true, containScroll: "trimSnaps" }}
            autoPlay={isMobile}
            interval={5000}
          >
            <CarouselContent>
              {/* Testimonial 1 */}
              <CarouselItem className="md:basis-1/2">
                <TestimonialCard
                  name={isRTL ? "محمد العمري" : "Mohammed Al-Amri"}
                  role={isRTL ? "مالك فندق" : "Hotel Owner"}
                  text={isRTL 
                    ? "تم تركيب أكثر من 15 ثريا في فندقنا. كانت الجودة استثنائية والخدمة احترافية للغاية. أوصي بشدة بخدماتهم."
                    : "They installed more than 15 chandeliers in our hotel. The quality was exceptional and the service was highly professional. I strongly recommend their services."}
                  image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  isRTL={isRTL}
                />
              </CarouselItem>

              {/* Testimonial 2 */}
              <CarouselItem className="md:basis-1/2">
                <TestimonialCard
                  name={isRTL ? "سارة الفيصل" : "Sarah Al-Faisal"}
                  role={isRTL ? "مصممة داخلية" : "Interior Designer"}
                  text={isRTL 
                    ? "أتعامل معهم في كل مشاريعي. يقدمون ثريات فاخرة بتصاميم فريدة وخدمة تركيب محترفة. شريك موثوق للمشاريع الراقية."
                    : "I work with them on all my projects. They provide luxury chandeliers with unique designs and professional installation service. A trusted partner for upscale projects."}
                  image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  isRTL={isRTL}
                />
              </CarouselItem>
              
              {/* Testimonial 3 */}
              <CarouselItem className="md:basis-1/2">
                <TestimonialCard
                  name={isRTL ? "خالد العتيبي" : "Khalid Al-Otaibi"}
                  role={isRTL ? "صاحب قصر" : "Palace Owner"}
                  text={isRTL 
                    ? "ثريات استثنائية وخدمة لا مثيل لها. قاموا بتصميم وتركيب الثريات في جميع أنحاء القصر بدقة واحترافية عالية."
                    : "Exceptional chandeliers and unmatched service. They designed and installed chandeliers throughout the palace with precision and high professionalism."}
                  image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  isRTL={isRTL}
                />
              </CarouselItem>
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="left-0 bg-white/80 hover:bg-gold hover:text-white border-none" />
              <CarouselNext className="right-0 bg-white/80 hover:bg-gold hover:text-white border-none" />
            </div>
          </Carousel>

          <div className="text-center mt-10">
            <Link 
              to="/testimonials"
              className="inline-block bg-transparent border-2 border-gold text-gold px-5 py-2 md:px-6 md:py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
            >
              {isRTL ? 'المزيد من آراء العملاء' : 'More Testimonials'}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section with updated map location */}
      <section className="py-16 md:py-20" ref={contactRef}>
        <div className="container-custom mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Map - Updated to Jeddah location */}
            <div className="h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.727960801672!2d39.18417487554701!3d21.584524972944244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3da620ae118db%3A0x728c9ddbe8a1d62e!2sKing%20Faisal%20Rd%2C%20Al%20Andalus%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1706071232031!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Hebat East Location"
              ></iframe>
            </div>
            
            {/* Contact Info */}
            <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                {isRTL ? 'تواصل معنا' : 'Contact Us'}
              </h2>
              <p className="text-gray-600 mb-6">
                {isRTL 
                  ? 'نسعد بتواصلكم معنا للاستفسار عن منتجاتنا أو خدماتنا. فريقنا جاهز للرد على استفساراتكم.'
                  : 'We would be happy to hear from you regarding our products or services. Our team is ready to answer your inquiries.'}
              </p>
              
              <div className="space-y-4 mb-6">
                <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="text-gold bg-gold/10 p-2 rounded-full mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.7086 9.16531 10.3001 9.45574L8.8627 10.4592C8.56809 10.6611 8.43786 11.0218 8.55611 11.3452C9.24922 13.231 10.7822 14.7639 12.668 15.457C12.9914 15.5753 13.352 15.445 13.5539 15.1504L14.5574 13.713C14.8478 13.3045 15.3638 13.1301 15.8359 13.2874L20.3294 14.7852C20.7377 14.9213 21.0132 15.3034 21.0132 15.7338V19C21.0132 20.1046 20.1177 21 19.0132 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">
                      {isRTL ? 'رقم الهاتف' : 'Phone Number'}
                    </p>
                    <p className="text-gray-600">+966 50 000 0000</p>
                  </div>
                </div>
                
                <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="text-gold bg-gold/10 p-2 rounded-full mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">
                      {isRTL ? 'البريد الإلكتروني' : 'Email Address'}
                    </p>
                    <p className="text-gray-600">info@hebateast.com</p>
                  </div>
                </div>
                
                <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="text-gold bg-gold/10 p-2 rounded-full mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">
                      {isRTL ? 'العنوان' : 'Address'}
                    </p>
                    <p className="text-gray-600">
                      {isRTL 
                        ? 'شارع الملك فيصل، جدة، المملكة العربية السعودية'
                        : 'King Faisal Road, Jeddah, Saudi Arabia'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/contact"
                  className="inline-block bg-gold text-white px-5 py-2 md:px-6 md:py-3 rounded-md hover:bg-gold-dark transition-colors duration-300"
                >
                  {isRTL ? 'اتصل بنا الآن' : 'Contact Us Now'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-charcoal text-white">
        <div className="container-custom mx-auto text-center px-4">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4`}>
            {isRTL ? 'جاهز لتحويل مساحتك؟' : 'Ready to Transform Your Space?'}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            {isRTL 
              ? 'تواصل معنا اليوم للحصول على استشارة مجانية ولنبدأ رحلتك نحو إضاءة فاخرة تليق بمساحتك.'
              : 'Contact us today for a free consultation and let\'s start your journey towards luxury lighting that your space deserves.'}
          </p>
          <div>
            <Link 
              to="/contact"
              className="inline-block bg-gold text-white px-6 py-3 md:px-8 md:py-4 rounded-md hover:bg-gold-dark transition-colors duration-300"
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
