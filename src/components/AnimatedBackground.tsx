
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#F9F6F3]">
      {/* Single rectangular shape with rounded corners */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[80vh] bg-white rounded-[80px]" />
    </div>
  );
};

export default AnimatedBackground;

