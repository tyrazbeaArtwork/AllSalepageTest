
import React from 'react';

const FloatingNavbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/20 shadow-lg">
      <div className="flex items-center space-x-6">
        <img 
          src="/lovable-uploads/ce207080-f6c2-430d-9621-79d32ab08655.png" 
          alt="Convrt.ai Logo" 
          className="h-8"
        />
        <div className="hidden md:flex items-center space-x-4 text-sm font-medium text-convrt-dark-blue/80">
          <a href="#" className="hover:text-convrt-purple transition-colors">About</a>
          <a href="#" className="hover:text-convrt-purple transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
