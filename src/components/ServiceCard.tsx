
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isRTL?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, isRTL = false }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg elegant-shadow hover:shadow-xl transition-shadow duration-300 h-full">
      <div className={`flex flex-col ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
        <div className="mb-4 text-gold">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-charcoal mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
