
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const WarningHeader = () => {
  return (
    <div className="bg-red-600 text-white py-3 px-6 text-center font-medium">
      <div className="flex items-center justify-center space-x-2">
        <AlertTriangle className="w-5 h-5" />
        <span>WARNING: Your website is leaking money!... See more</span>
      </div>
    </div>
  );
};

export default WarningHeader;
