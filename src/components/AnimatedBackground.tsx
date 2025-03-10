
import React from 'react';

type AnimatedBackgroundProps = {
  className?: string;
};

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.03]"></div>
      
      {/* Hero Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      {/* Floating Elements */}
      <div className="absolute w-72 h-72 bg-convrt-cyan/10 rounded-full blur-[100px] top-1/4 left-1/4 animate-float"></div>
      <div className="absolute w-96 h-96 bg-convrt-cyan/5 rounded-full blur-[120px] bottom-0 right-1/4 animate-float animate-delay-400"></div>
      
      {/* Decorative Elements */}
      <div className="grid grid-cols-3 grid-rows-3 gap-8 absolute inset-0">
        {Array.from({ length: 9 }).map((_, i) => (
          <div 
            key={i} 
            className="relative"
            style={{ 
              opacity: Math.random() * 0.05 + 0.02,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <div 
              className="absolute bg-convrt-cyan w-2 h-2 rounded-full animate-pulse-light"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%` 
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
