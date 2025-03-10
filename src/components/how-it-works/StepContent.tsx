
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
    <div className={`bg-white rounded-lg shadow-sm border ${
      isActive ? 'border-convrt-purple' : 'border-gray-200'
    } overflow-hidden`}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-md bg-convrt-purple text-white flex items-center justify-center font-medium">
            {stepNumber}
          </div>
          <h3 className="text-xl font-bold text-convrt-dark-blue">
            {title}
          </h3>
        </div>
        
        <div className="mb-4 pl-11">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-convrt-purple/10 text-convrt-purple mb-4">
            {icon}
          </div>
          
          <p className="text-convrt-dark-blue/80 mb-5">
            {description}
          </p>
          
          <div className="bg-gray-100 rounded-md p-3 text-sm text-convrt-dark-blue/90 border border-gray-200">
            <span className="font-medium text-convrt-dark-blue">{highlightText}</span> {highlightDetails}
          </div>
        </div>
      </div>
      
      {gifUrl && (
        <div className={`transition-all duration-500 ${
          isActive ? 'max-h-60' : 'max-h-0'
        } overflow-hidden`}>
          <img 
            src={gifUrl} 
            alt={`Step ${stepNumber} demonstration`} 
            className="w-full h-auto border-t border-gray-200" 
          />
        </div>
      )}
    </div>
  );
};

export default StepContent;
