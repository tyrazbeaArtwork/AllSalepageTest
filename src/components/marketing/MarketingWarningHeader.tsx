
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const MarketingWarningHeader = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 text-center font-medium">
      <div className="flex items-center justify-center space-x-2">
        <AlertTriangle className="w-5 h-5" />
        <span>Get 25% Off This Weekend With Code: EURL1</span>
      </div>
    </div>
  );
};

export default MarketingWarningHeader;
