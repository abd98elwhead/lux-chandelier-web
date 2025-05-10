
import React, { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import LazyImage from './LazyImage';

const PartnerSlider: React.FC = () => {
  const isMobile = useIsMobile();
  const { isRTL } = useLanguage();
  
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

  return (
    <div className="w-full overflow-hidden py-4">
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
      
      {/* Mobile version: Enhanced carousel with shadcn/ui */}
      <div className="md:hidden">
        <Carousel 
          className="w-full" 
          opts={{
            align: "center",
            loop: true,
          }}
          autoPlay={true}
          interval={4000}
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={`partner-mobile-${index}`} className="flex items-center justify-center">
                <div className="h-28 w-full p-4 flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-lg transition-all duration-500">
                  <LazyImage
                    src={partner.image}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transform transition-all duration-700 hover:scale-105 filter hover:grayscale-0"
                    placeholderSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZWVlZWUiLz48L3N2Zz4="
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className={`flex justify-between absolute inset-x-0 top-1/2 -translate-y-1/2 px-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <CarouselPrevious 
              className={`h-8 w-8 rounded-full opacity-70 hover:opacity-100 transition-opacity ${isRTL ? '-scale-x-100' : ''}`} 
            />
            <CarouselNext 
              className={`h-8 w-8 rounded-full opacity-70 hover:opacity-100 transition-opacity ${isRTL ? '-scale-x-100' : ''}`}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PartnerSlider;
