
import React from 'react';

const EbookFooter = () => {
  return (
    <footer className="py-8 px-6 bg-gradient-to-r from-slate-900 to-purple-900 border-t border-slate-800 mb-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-slate-200 text-sm mb-4">
          © 2024 EbookHub. Empowering entrepreneurs through proven digital strategies.
        </div>
        <div className="flex justify-center space-x-6 text-slate-300 text-sm">
          <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default EbookFooter;
