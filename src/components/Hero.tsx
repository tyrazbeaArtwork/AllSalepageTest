
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-cyan/10 text-convrt-cyan mb-6 animate-fade-in">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">AI-Driven Social Selling Platform</span>
          </div>
          
          <h1 className="heading-xl max-w-4xl mx-auto text-convrt-dark-blue mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="gradient-text">AI-Driven Social Selling</span> That Wins More Deals
          </h1>
          
          <p className="text-xl text-convrt-dark-blue/70 max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Stop being ignored. Convrt puts you where your buyers are, making you trusted before you even reach out.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <a href="#cta" className="button-primary flex items-center group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#how-it-works" className="button-outline">
              See How It Works
            </a>
          </div>
          
          {/* Glass Card */}
          <div className="relative max-w-5xl mx-auto glass p-1 mb-12 opacity-0 animate-scale-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="w-full aspect-[16/9] bg-convrt-dark-blue rounded-xl overflow-hidden relative">
              {/* Mockup UI with Abstract Data Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute top-0 left-0 right-0 h-14 bg-convrt-dark-blue/90 backdrop-blur-sm flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="ml-4 px-3 py-1 rounded bg-convrt-dark-blue/80 text-convrt-cyan text-xs font-mono">
                    convrt.ai/dashboard
                  </div>
                </div>
                
                <div className="w-full h-full flex items-center justify-center pt-14">
                  <div className="w-full p-6 grid grid-cols-3 gap-4">
                    {/* Visualization Placeholder */}
                    <div className="col-span-2 aspect-video rounded-lg bg-gradient-to-br from-convrt-dark-blue to-convrt-dark-blue/80 p-3 flex items-center justify-center">
                      <div className="w-full h-full bg-grid-pattern bg-grid opacity-25 rounded">
                        <div className="w-3/4 h-3/4 mx-auto mt-6 relative">
                          <div className="absolute bottom-0 left-0 w-2 h-[15%] bg-convrt-cyan/50 rounded-t animate-pulse-light"></div>
                          <div className="absolute bottom-0 left-[15%] w-2 h-[45%] bg-convrt-cyan/60 rounded-t animate-pulse-light" style={{ animationDelay: '0.2s' }}></div>
                          <div className="absolute bottom-0 left-[30%] w-2 h-[20%] bg-convrt-cyan/70 rounded-t animate-pulse-light" style={{ animationDelay: '0.4s' }}></div>
                          <div className="absolute bottom-0 left-[45%] w-2 h-[65%] bg-convrt-cyan/80 rounded-t animate-pulse-light" style={{ animationDelay: '0.6s' }}></div>
                          <div className="absolute bottom-0 left-[60%] w-2 h-[35%] bg-convrt-cyan/90 rounded-t animate-pulse-light" style={{ animationDelay: '0.8s' }}></div>
                          <div className="absolute bottom-0 left-[75%] w-2 h-[80%] bg-convrt-cyan rounded-t animate-pulse-light" style={{ animationDelay: '1s' }}></div>
                          <div className="absolute bottom-0 left-[90%] w-2 h-[60%] bg-convrt-cyan/70 rounded-t animate-pulse-light" style={{ animationDelay: '1.2s' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Side Panel */}
                    <div className="flex flex-col space-y-4">
                      <div className="rounded-lg bg-white/5 p-3">
                        <div className="text-xs text-white/60 mb-1">Engagement Rate</div>
                        <div className="text-lg font-bold text-convrt-cyan">15.7%</div>
                        <div className="w-full h-1 bg-white/10 rounded-full mt-2">
                          <div className="w-[85%] h-1 bg-convrt-cyan rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg bg-white/5 p-3">
                        <div className="text-xs text-white/60 mb-1">Trust Score</div>
                        <div className="text-lg font-bold text-convrt-cyan">87.3%</div>
                        <div className="w-full h-1 bg-white/10 rounded-full mt-2">
                          <div className="w-[87%] h-1 bg-convrt-cyan rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg bg-white/5 p-3">
                        <div className="text-xs text-white/60 mb-1">Leads Generated</div>
                        <div className="text-lg font-bold text-convrt-cyan">124</div>
                        <div className="w-full h-1 bg-white/10 rounded-full mt-2">
                          <div className="w-[70%] h-1 bg-convrt-cyan rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="text-convrt-dark-blue/70 mt-1">Higher Conversion</div>
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
