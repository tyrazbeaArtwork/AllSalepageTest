
import React from 'react';

const BusinessFooter = () => {
  return (
    <footer className="py-8 px-6 bg-amber-900 border-t border-amber-800 mb-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-amber-200 text-sm mb-4">
          © 2024 DesignPro. Transforming businesses through professional design.
        </div>
        <div className="flex justify-center space-x-6 text-amber-300 text-sm">
          <a href="#" className="hover:text-amber-100 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-amber-100 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-amber-100 transition-colors">Portfolio</a>
        </div>
      </div>
    </footer>
  );
};

export default BusinessFooter;
