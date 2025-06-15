
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const HousewifeWarningHeader = () => {
  return (
    <div className="bg-blue-600 text-white py-3 px-6 text-center font-medium">
      <div className="flex items-center justify-center space-x-2">
        <AlertTriangle className="w-5 h-5" />
        <span>SPECIAL: Save 20% Today Only - Helping Busy Moms Everywhere!</span>
      </div>
    </div>
  );
};

export default HousewifeWarningHeader;
