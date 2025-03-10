
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#F9F6F3]">
      {/* Stretched rounded square in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[80vh] bg-white/50 rounded-[100px] rotate-12 opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[70vh] bg-white/70 rounded-[80px] -rotate-6 opacity-40" />
    </div>
  );
};

export default AnimatedBackground;
