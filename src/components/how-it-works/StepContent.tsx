
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
    <div className={`relative bg-gray-100 rounded-lg p-8 transition-all duration-500 ${
      isActive ? 'border-2 border-convrt-purple' : 'border border-gray-200'
    }`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-convrt-purple text-white flex items-center justify-center font-bold text-xl">
            {stepNumber}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-convrt-purple/10 text-convrt-purple mb-4">
            {icon}
          </div>
          
          <h3 className="text-xl font-bold text-convrt-dark-blue mb-3">
            {title}
          </h3>
          
          <p className="text-convrt-dark-blue/80 mb-4">
            {description}
          </p>
          
          <div className="bg-white rounded-lg p-3 text-sm text-convrt-dark-blue/90 border border-gray-200">
            <span className="font-medium text-convrt-dark-blue">{highlightText}</span> {highlightDetails}
          </div>
          
          {gifUrl && (
            <div className={`mt-4 overflow-hidden rounded-lg transition-all duration-500 ${
              isActive ? 'opacity-100 max-h-60' : 'opacity-0 max-h-0'
            }`}>
              <img 
                src={gifUrl} 
                alt={`Step ${stepNumber} demonstration`} 
                className="w-full h-auto rounded-lg border border-gray-200" 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepContent;
