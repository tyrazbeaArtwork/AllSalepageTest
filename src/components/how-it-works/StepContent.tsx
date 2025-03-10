
import React from 'react';
import { Target, Users, LineChart } from 'lucide-react';

export interface StepContentProps {
  stepNumber: number;
  title: string;
  description: string;
  highlightText: string;
  highlightDetails: string;
  icon: React.ReactNode;
  gifUrl?: string;
  isActive: boolean;
}

const StepContent: React.FC<StepContentProps> = ({
  stepNumber,
  title,
  description,
  highlightText,
  highlightDetails,
  icon,
  gifUrl,
  isActive,
}) => {
  return (
    <div className={`relative feature-card group bg-gray-100 transition-all duration-500 ${
      isActive ? 'scale-105 shadow-lg border-convrt-purple/20' : 'scale-100'
    }`}>
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-convrt-dark-blue text-white flex items-center justify-center font-bold text-xl shadow-lg">
        {stepNumber}
      </div>
      <div className="pt-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-convrt-purple/10 text-convrt-purple mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-convrt-dark-blue mb-3">
          {title}
        </h3>
        <p className="text-convrt-dark-blue/80">
          {description}
        </p>
        
        <div className="mt-4 py-2 px-3 bg-white rounded-lg text-sm text-convrt-dark-blue/90">
          <span className="font-medium text-convrt-dark-blue">{highlightText}</span> {highlightDetails}
        </div>
        
        {gifUrl && (
          <div className={`mt-4 overflow-hidden rounded-lg transition-all duration-500 ${isActive ? 'opacity-100 max-h-60' : 'opacity-0 max-h-0'}`}>
            <img src={gifUrl} alt={`Step ${stepNumber} demonstration`} className="w-full h-auto rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default StepContent;
