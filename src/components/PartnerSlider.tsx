
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const PartnerSlider: React.FC = () => {
  const isMobile = useIsMobile();
  const [currentItem, setCurrentItem] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
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
  
  // Auto scroll logic
  useEffect(() => {
    let autoScrollInterval: NodeJS.Timeout;
    
    if (!isHovered) {
      autoScrollInterval = setInterval(() => {
        setCurrentItem((prev) => (prev + 1) % partners.length);
      }, 3000);
    }
    
    return () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };
  }, [isHovered, partners.length]);
  
  const itemsPerSlide = isMobile ? 2 : 4;
  
  // Calculate visible partners (always show a continuous loop)
  const visiblePartners = [...partners, ...partners].slice(currentItem, currentItem + itemsPerSlide);
  
  // Ensure we always have enough partners to display
  if (visiblePartners.length < itemsPerSlide) {
    const additionalPartners = partners.slice(0, itemsPerSlide - visiblePartners.length);
    visiblePartners.push(...additionalPartners);
  }

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
      
      {/* Mobile version: Sliding carousel */}
      <div className="md:hidden">
        <div className="flex overflow-x-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ 
              transform: `translateX(${isMobile ? '-20%' : '0%'})`,
              width: `${partners.length * 100}%`
            }}
          >
            {visiblePartners.map((partner, index) => (
              <div 
                key={`partner-mobile-${index}`} 
                className="flex-shrink-0 w-1/2 px-4 flex justify-center"
              >
                <div className="w-full h-16 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all">
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Indicators for mobile */}
        <div className="flex justify-center mt-4 gap-1">
          {Array.from({ length: Math.ceil(partners.length / 2) }).map((_, index) => (
            <button
              key={`indicator-${index}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentItem / 2) === index ? 'bg-gold' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentItem(index * 2)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSlider;
