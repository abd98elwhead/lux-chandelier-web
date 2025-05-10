
import React, { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PartnerSlider: React.FC = () => {
  const isMobile = useIsMobile();
  const { isRTL } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const partners = [
    { 
      name: "Alrajhi Bank", 
      image: "/lovable-uploads/f194580f-23f0-4724-9e30-b6c8fb02bffd.png"
    },
    { 
      name: "Hilton Hotels & Resorts",
      image: "/lovable-uploads/3016a5b5-cfc2-4c0c-b1d1-6a45abd34e26.png"
    },
    { 
      name: "Sheraton Hotels & Resorts",
      image: "/lovable-uploads/98a56810-84e7-494c-be94-a309d239af22.png"
    },
    { 
      name: "Four Seasons",
      image: "/lovable-uploads/868a8435-6fbe-4e97-bd7c-4a4df1efa90d.png"
    },
    { 
      name: "Drascom",
      image: "/lovable-uploads/8f983c9b-fbdc-4cfc-b4be-f34d706c6116.png"
    },
    { 
      name: "Worth Hotels",
      image: "/lovable-uploads/90aaddb3-a181-46d4-835c-ef462fad074e.png"
    },
    { 
      name: "الحرمين",
      image: "/lovable-uploads/be4811a0-9af4-4bf1-941a-edb484702eb4.png"
    },
    { 
      name: "Ministry of Culture",
      image: "/lovable-uploads/d4c78668-c00b-4950-a350-1abe4a8af2f9.png"
    }
  ];
  
  const itemsPerPage = isMobile ? 2 : 4;
  const totalPages = Math.ceil(partners.length / itemsPerPage);
  
  // Handle touch events for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    setIsTouching(false);
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      goToNextPage();
    }
    
    if (isRightSwipe) {
      goToPrevPage();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };
  
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  // Auto scroll logic with improved handling
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
      
      autoScrollTimerRef.current = setInterval(() => {
        if (!isHovered && !isTouching) {
          goToNextPage();
        }
      }, 4000);
    };
    
    startAutoScroll();
    
    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [isHovered, isTouching, totalPages]);
  
  // Get current partners to display
  const getCurrentPartners = () => {
    const startIndex = currentPage * itemsPerPage;
    return partners.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div 
      className="w-full overflow-hidden py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Desktop version: Partners in a row */}
      <div className="hidden md:flex justify-center items-center gap-10 flex-wrap">
        {partners.map((partner, index) => (
          <div 
            key={`partner-desktop-${index}`}
            className="w-32 h-20 transition-all duration-500 hover:scale-110 filter grayscale hover:grayscale-0 flex items-center justify-center"
          >
            <img 
              src={partner.image} 
              alt={partner.name} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
      
      {/* Mobile version: Enhanced slider */}
      <div className="md:hidden">
        <div 
          className="relative overflow-hidden px-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Partner logos with better transitions */}
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${isRTL ? currentPage * 100 : -currentPage * 100}%)` }}
          >
            {partners.map((partner, index) => (
              <div 
                key={`partner-mobile-${index}`}
                className="flex-shrink-0 w-1/2 px-3 flex justify-center transform transition-transform duration-300"
                style={{
                  transform: index === currentPage * itemsPerPage || index === currentPage * itemsPerPage + 1
                    ? 'scale(1)' 
                    : 'scale(0.9)',
                  opacity: index === currentPage * itemsPerPage || index === currentPage * itemsPerPage + 1
                    ? 1
                    : 0.7
                }}
              >
                <div className="w-full h-20 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300 bg-white p-2 rounded-md shadow-sm">
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile navigation controls */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button 
              onClick={goToPrevPage}
              className="w-8 h-8 bg-white/80 rounded-full shadow flex items-center justify-center text-gray-700 hover:bg-gold hover:text-white transition-colors"
              aria-label={isRTL ? "التالي" : "Previous"}
            >
              {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button 
              onClick={goToNextPage}
              className="w-8 h-8 bg-white/80 rounded-full shadow flex items-center justify-center text-gray-700 hover:bg-gold hover:text-white transition-colors"
              aria-label={isRTL ? "السابق" : "Next"}
            >
              {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </button>
          </div>
        </div>
        
        {/* Improved indicators */}
        <div className="flex justify-center mt-4 gap-1.5">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={`indicator-${index}`}
              className={`transition-all duration-300 rounded-full ${
                index === currentPage 
                ? 'w-6 h-2 bg-gold' // Elongated active indicator
                : 'w-2 h-2 bg-gray-300'
              }`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSlider;
