
import React from 'react';

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
      className={`relative px-3 py-2.5 cursor-pointer transition-all duration-300 w-full flex flex-col ${
        isActive 
          ? 'bg-white border-2 border-convrt-purple rounded-lg shadow-md' 
          : 'bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-50/80'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start gap-2">
        <div className="flex-shrink-0">
          <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-sm ${
            isActive 
              ? 'bg-convrt-purple text-white' 
              : 'bg-gray-200 text-convrt-dark-blue'
          }`}>
            {stepNumber}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-convrt-purple/10 text-convrt-purple mb-1">
            {icon}
          </div>
          
          <h3 className="text-sm font-bold text-convrt-dark-blue mb-1 line-clamp-1">
            {title}
          </h3>
          
          <p className="text-xs text-convrt-dark-blue/80 mb-1 line-clamp-2">
            {description}
          </p>
          
          {isActive && (
            <div className="bg-white rounded-md p-2 text-xs text-convrt-dark-blue/90 border border-gray-200 mt-1">
              <span className="font-medium text-convrt-dark-blue">{highlightText}</span> {highlightDetails}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepContent;
