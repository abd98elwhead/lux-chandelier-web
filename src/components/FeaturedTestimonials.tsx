
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import TestimonialCard from './TestimonialCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from '../hooks/use-mobile';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedTestimonials: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragging, setDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      id: 1,
      nameAr: "محمد العمري",
      nameEn: "Mohammed Al-Amri",
      roleAr: "مالك فندق",
      roleEn: "Hotel Owner",
      textAr: "تم تركيب أكثر من 15 ثريا في فندقنا. كانت الجودة استثنائية والخدمة احترافية للغاية. أوصي بشدة بخدماتهم.",
      textEn: "They installed more than 15 chandeliers in our hotel. The quality was exceptional and the service was highly professional. I strongly recommend their services.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 2,
      nameAr: "سارة الفيصل",
      nameEn: "Sarah Al-Faisal",
      roleAr: "مصممة داخلية",
      roleEn: "Interior Designer",
      textAr: "أتعامل معهم في كل مشاريعي. يقدمون ثريات فاخرة بتصاميم فريدة وخدمة تركيب محترفة. شريك موثوق للمشاريع الراقية.",
      textEn: "I work with them on all my projects. They provide luxury chandeliers with unique designs and professional installation service. A trusted partner for upscale projects.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 3,
      nameAr: "خالد العتيبي",
      nameEn: "Khalid Al-Otaibi",
      roleAr: "صاحب قصر",
      roleEn: "Palace Owner",
      textAr: "ثريات استثنائية وخدمة لا مثيل لها. قاموا بتصميم وتركيب الثريات في جميع أنحاء القصر بدقة واحترافية عالية.",
      textEn: "Exceptional chandeliers and unmatched service. They designed and installed chandeliers throughout the palace with precision and high professionalism.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      nameAr: "نورة الشمري",
      nameEn: "Noura Al-Shammari",
      roleAr: "مديرة مركز تجاري",
      roleEn: "Mall Manager",
      textAr: "كان التعاون مع هبات أيست تجربة رائعة. قدموا لنا حلولاً مبتكرة لإضاءة المركز التجاري بأكمله، ونالت إعجاب جميع الزوار.",
      textEn: "Collaborating with Hebat East was a wonderful experience. They provided innovative lighting solutions for our entire mall that impressed all visitors.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 5,
      nameAr: "فهد القحطاني",
      nameEn: "Fahad Al-Qahtani",
      roleAr: "مطور عقاري",
      roleEn: "Real Estate Developer",
      textAr: "نقدر الاحترافية التي أظهرها فريق هبات أيست في تنفيذ مشروعنا. تم تسليم الثريات في الموعد المحدد وبمستوى جودة يفوق التوقعات.",
      textEn: "We appreciate the professionalism shown by the Hebat East team in executing our project. The chandeliers were delivered on time and with quality exceeding expectations.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    }
  ];

  // For mobile, let's create a specialized testimonial slider
  const MobileTestimonialSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchStart(e.targetTouches[0].clientX);
    };
    
    const handleTouchMove = (e: React.TouchEvent) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };
    
    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;
      
      if (!isTransitioning) {
        if (isLeftSwipe) {
          goToNextSlide();
        }
        if (isRightSwipe) {
          goToPrevSlide();
        }
      }
      
      setTouchStart(0);
      setTouchEnd(0);
    };
    
    const goToNextSlide = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex((current) => (current + 1) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 500);
    };

    const goToPrevSlide = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 500);
    };
    
    return (
      <div className="px-4 relative">
        <div 
          className="overflow-hidden rounded-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${isRTL ? activeIndex * 100 : -activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-1">
                <TestimonialCard
                  name={language === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                  role={language === 'ar' ? testimonial.roleAr : testimonial.roleEn}
                  text={language === 'ar' ? testimonial.textAr : testimonial.textEn}
                  image={testimonial.image}
                  isRTL={isRTL}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Controls - Nicer mobile controls */}
        <div className="flex justify-between mt-6 mb-2 px-2">
          <button
            onClick={goToPrevSlide}
            className={`w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center ${isRTL ? 'ml-auto' : 'mr-auto'}`}
            disabled={isTransitioning}
            aria-label={isRTL ? "التالي" : "Previous"}
          >
            {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
          <button
            onClick={goToNextSlide}
            className={`w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center ${isRTL ? 'mr-auto' : 'ml-auto'}`}
            disabled={isTransitioning}
            aria-label={isRTL ? "السابق" : "Next"}
          >
            {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
        
        {/* Improved Indicators */}
        <div className="flex justify-center mt-2 gap-1.5">
          {testimonials.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex 
                  ? 'w-6 h-2 bg-gold' // Elongated active indicator
                  : 'w-2 h-2 bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom mx-auto">
        <div className={`text-center mb-10 md:mb-16 ${isRTL ? 'rtl' : ''}`}>
          <h2 className={`text-2xl md:text-3xl font-bold text-charcoal mb-3 md:mb-4`}>
            {t('section-testimonials-title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('section-testimonials-subtitle')}
          </p>
        </div>

        {isMobile ? (
          <MobileTestimonialSlider />
        ) : (
          <Carousel 
            ref={carouselRef}
            className="w-full max-w-5xl mx-auto px-4" 
            opts={{ 
              loop: true, 
              align: "start", 
              dragFree: true,
              containScroll: "trimSnaps" 
            }}
            autoPlay={true}
            interval={5000}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <TestimonialCard
                    name={language === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                    role={language === 'ar' ? testimonial.roleAr : testimonial.roleEn}
                    text={language === 'ar' ? testimonial.textAr : testimonial.textEn}
                    image={testimonial.image}
                    isRTL={isRTL}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:flex md:justify-between md:w-full md:absolute md:top-1/2 md:-translate-y-1/2 md:px-4">
              <CarouselPrevious className="relative -translate-y-1/2 left-0 bg-white/80 hover:bg-gold hover:text-white border-none" />
              <CarouselNext className="relative -translate-y-1/2 right-0 bg-white/80 hover:bg-gold hover:text-white border-none" />
            </div>
          </Carousel>
        )}

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
  );
};

export default FeaturedTestimonials;
