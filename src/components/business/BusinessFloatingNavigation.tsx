
import React from 'react';

const BusinessFloatingNavigation = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-2xl glass border shadow-lg mt-12">
      <div className="flex items-center space-x-6">
        <div className="text-xl font-bold text-amber-800">DesignPro</div>
        <div className="hidden md:flex items-center space-x-4 text-sm font-medium text-amber-600">
          <a href="#problem" className="hover:text-amber-900 transition-colors">Challenge</a>
          <a href="#solution" className="hover:text-amber-900 transition-colors">Solution</a>
          <a href="#testimonials" className="hover:text-amber-900 transition-colors">Results</a>
        </div>
      </div>
    </nav>
  );
};

export default BusinessFloatingNavigation;
