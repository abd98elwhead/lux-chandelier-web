
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import TestimonialCard from './TestimonialCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from '../hooks/use-mobile';

const FeaturedTestimonials: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const isMobile = useIsMobile();
  
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

        <Carousel 
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
              <CarouselItem key={testimonial.id} className={`${isMobile ? 'basis-full' : 'md:basis-1/2 lg:basis-1/3'} pl-4`}>
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
          
          <div className="flex justify-center mt-4 md:hidden">
            <CarouselPrevious className="mx-1 bg-white/80 hover:bg-gold hover:text-white border-none" />
            <CarouselNext className="mx-1 bg-white/80 hover:bg-gold hover:text-white border-none" />
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
  );
};

export default FeaturedTestimonials;
