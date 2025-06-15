
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const EbookWarningHeader = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 text-center font-medium">
      <div className="flex items-center justify-center space-x-2">
        <AlertTriangle className="w-5 h-5" />
        <span>LIMITED: Digital Marketing Ebook - 70% OFF This Week Only!</span>
      </div>
    </div>
  );
};

export default EbookWarningHeader;
