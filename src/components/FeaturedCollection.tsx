
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';
import LazyImage from './LazyImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample featured collection data
const collectionItems = [
  {
    id: 1,
    titleAr: "ثريا كريستال فاخرة",
    titleEn: "Luxury Crystal Chandelier",
    price: "12,500 SAR",
    image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    titleAr: "ثريا كلاسيكية",
    titleEn: "Classic Chandelier",
    price: "8,750 SAR",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1687&q=80"
  },
  {
    id: 3,
    titleAr: "ثريا مودرن",
    titleEn: "Modern Chandelier",
    price: "9,200 SAR",
    image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 4,
    titleAr: "ثريا ذهبية فاخرة",
    titleEn: "Luxury Gold Chandelier",
    price: "15,800 SAR",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  }
];

const FeaturedCollection: React.FC = () => {
  const { isRTL, language } = useLanguage();
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Mobile slide functionality
  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % collectionItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + collectionItems.length) % collectionItems.length);
  };

  // Auto slide for mobile
  React.useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
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

        {isMobile ? (
          <div className="relative px-4 pb-10">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <LazyImage 
                src={collectionItems[activeIndex].image} 
                alt={language === 'ar' ? collectionItems[activeIndex].titleAr : collectionItems[activeIndex].titleEn} 
                className="w-full h-64 object-cover"
              />
              
              <div className="bg-white p-4">
                <h3 className={`font-bold text-lg mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {language === 'ar' ? collectionItems[activeIndex].titleAr : collectionItems[activeIndex].titleEn}
                </h3>
                <p className={`text-gold font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>
                  {collectionItems[activeIndex].price}
                </p>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <div className="absolute inset-x-0 bottom-20 flex justify-between px-2">
              <button 
                onClick={prevSlide} 
                className="w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-md text-gray-800 hover:bg-gold hover:text-white transition-colors"
              >
                {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </button>
              <button 
                onClick={nextSlide} 
                className="w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-md text-gray-800 hover:bg-gold hover:text-white transition-colors"
              >
                {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </button>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {collectionItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-gold' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {collectionItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <LazyImage 
                    src={item.image} 
                    alt={language === 'ar' ? item.titleAr : item.titleEn} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className={`p-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="font-bold text-lg mb-1">
                    {language === 'ar' ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-gold font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link 
            to="/gallery"
            className="inline-block bg-transparent border-2 border-gold text-gold px-5 py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
          >
            {isRTL ? 'عرض كافة التشكيلات' : 'View All Collections'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
