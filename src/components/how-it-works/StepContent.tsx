
import React from 'react';
import { Target, Users, LineChart } from 'lucide-react';

export interface StepContentProps {
  stepNumber: number;
  title: string;
  description: string;
  highlightText: string;
  highlightDetails: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const StepContent: React.FC<StepContentProps> = ({
  stepNumber,
  title,
  description,
  highlightText,
  highlightDetails,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md ${
        isActive ? 'border-2 border-convrt-purple' : 'border border-gray-200'
      } overflow-hidden cursor-pointer hover:border-convrt-purple transition-all duration-300`}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-8 h-8 flex items-center justify-center font-medium ${
            isActive ? 'bg-convrt-purple text-white' : 'bg-gray-100 text-convrt-dark-blue'
          }`}>
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
          
          <div className="bg-gray-50 rounded-md p-3 text-sm text-convrt-dark-blue/90 border border-gray-200">
            <span className="font-medium text-convrt-dark-blue">{highlightText}</span> {highlightDetails}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepContent;
