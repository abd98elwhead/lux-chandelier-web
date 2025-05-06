
import React, { useEffect, useRef, useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isRTL?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, isRTL = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white p-6 md:p-7 rounded-lg shadow-lg elegant-shadow hover:shadow-xl transition-all duration-500 h-full transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: '100ms' }}
      itemScope 
      itemType="https://schema.org/Service"
    >
      <div className={`flex flex-col ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
        <div className="mb-4 text-gold transform transition-transform duration-300 hover:scale-110">
          {icon}
        </div>
        <h3 
          className="text-xl font-semibold text-charcoal mb-2"
          itemProp="name"
        >
          {title}
        </h3>
        <p 
          className="text-gray-600"
          itemProp="description"
        >
          {description}
        </p>
        <meta itemProp="provider" content="هبات ايست | Hibat East" />
        <meta itemProp="areaServed" content="المملكة العربية السعودية | Saudi Arabia" />
      </div>
    </div>
  );
};

export default ServiceCard;
