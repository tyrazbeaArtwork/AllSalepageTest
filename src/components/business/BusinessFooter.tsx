
import React from 'react';

const BusinessFooter = () => {
  return (
    <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-slate-400 text-sm mb-4">
          © 2024 DesignPro. Transforming businesses through professional design.
        </div>
        <div className="flex justify-center space-x-6 text-slate-500 text-sm">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Portfolio</a>
        </div>
      </div>
    </footer>
  );
};

export default BusinessFooter;
