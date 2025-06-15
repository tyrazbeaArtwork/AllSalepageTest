
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const FreelanceWarningHeader = () => {
  return (
    <div className="bg-stone-600 text-white py-3 px-6 text-center font-medium">
      <div className="flex items-center justify-center space-x-2">
        <AlertTriangle className="w-5 h-5" />
        <span>LIMITED: Premium Design Package - 50% OFF This Week Only!</span>
      </div>
    </div>
  );
};

export default FreelanceWarningHeader;
