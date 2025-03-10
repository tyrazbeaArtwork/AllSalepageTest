
import React, { useEffect, useRef } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { ArrowRight, Zap, Users, BarChart3 } from 'lucide-react';

const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 overflow-hidden">
      <AnimatedBackground />
      
      <div className="container-section relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-cyan/10 text-convrt-cyan mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">The First AI Organic Outbound Platform</span>
          </div>
          
          <h1 className="heading-xl max-w-4xl mx-auto text-convrt-dark-blue mb-6">
            From <span className="gradient-text">Ignored</span> to <span className="gradient-text">Influential</span>
          </h1>
          
          <p className="text-xl text-convrt-dark-blue/70 max-w-3xl mx-auto mb-8">
            AI that makes buyers trust you, so you win more deals
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <a href="#cta" className="button-primary flex items-center group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#how-it-works" className="button-outline">
              See How It Works
            </a>
          </div>
          
          {/* Glass Card - Product Screenshot */}
          <div className="relative max-w-5xl mx-auto glass p-1 mb-12">
            <div className="w-full aspect-[16/9] bg-convrt-dark-blue rounded-xl overflow-hidden relative">
              <img 
                src="/lovable-uploads/8324ce9d-a25b-4480-beb0-990b38071d97.png" 
                alt="Convrt AI Platform" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Stats */}
          <div 
            ref={statsRef} 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 opacity-0 translate-y-4"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-convrt-light-gray/30">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-convrt-cyan/10 text-convrt-cyan mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-convrt-dark-blue">15x</div>
              <div className="text-convrt-dark-blue/70 mt-1">Higher Conversion Rates</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-convrt-light-gray/30">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-convrt-cyan/10 text-convrt-cyan mb-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-convrt-dark-blue">80%</div>
              <div className="text-convrt-dark-blue/70 mt-1">Less Prospecting Time</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-convrt-light-gray/30">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-convrt-cyan/10 text-convrt-cyan mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-convrt-dark-blue">78%</div>
              <div className="text-convrt-dark-blue/70 mt-1">Sales Outperformance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
