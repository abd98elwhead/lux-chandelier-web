
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  image?: string;
  isRTL?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  text, 
  image,
  isRTL = false 
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-white p-5 md:p-8 rounded-lg shadow-lg elegant-shadow h-full">
      <div className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="mb-3 md:mb-4">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.667 13.3334H5.33366C5.33366 13.3334 5.33366 8.00004 10.667 8.00004M10.667 8.00004C10.667 8.00004 10.667 5.33337 8.00033 6.66671C5.33366 8.00004 5.33366 13.3334 5.33366 13.3334C5.33366 17.3334 10.667 17.3334 10.667 13.3334V8.00004ZM26.667 13.3334H21.3337C21.3337 13.3334 21.3337 8.00004 26.667 8.00004M26.667 8.00004C26.667 8.00004 26.667 5.33337 24.0003 6.66671C21.3337 8.00004 21.3337 13.3334 21.3337 13.3334C21.3337 17.3334 26.667 17.3334 26.667 13.3334V8.00004Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">{text}</p>
        <div className={`flex items-center ${isRTL ? 'justify-end' : ''} mt-auto`}>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-gold">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gold-light text-gold font-bold">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div className={`${isRTL ? 'mr-2 md:mr-3 ml-0' : 'ml-2 md:ml-3'}`}>
            <h4 className="text-charcoal font-semibold text-sm md:text-base">{name}</h4>
            <p className="text-gray-500 text-xs md:text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
