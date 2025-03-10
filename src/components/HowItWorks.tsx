
import React, { useEffect, useRef } from 'react';
import { Target, Users, LineChart, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0');
            } else if (entry.target === stepsRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            } else if (entry.target === screenRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0', 'scale-95');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (stepsRef.current) observer.observe(stepsRef.current);
    if (screenRef.current) observer.observe(screenRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (stepsRef.current) observer.unobserve(stepsRef.current);
      if (screenRef.current) observer.unobserve(screenRef.current);
    };
  }, []);

  return (
    <section className="relative py-20" id="how-it-works">
      <div className="container-section">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center opacity-0 transition-opacity duration-700"
        >
          <div className="section-tag">
            From Ignored to Trusted
          </div>
          <h2 className="heading-lg text-convrt-dark-blue mb-6">
            How <span className="gradient-text">Convrt.ai</span> Works in 3 Steps
          </h2>
          <p className="text-convrt-dark-blue/80 text-lg mb-16 max-w-2xl mx-auto">
            Our AI-driven platform automates social engagement for your sales and GTM teams, transforming cold outreach into warm connections.
          </p>
        </div>
        
        <div 
          ref={stepsRef}
          className="grid md:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-700 delay-300 mb-16"
        >
          {/* Step 1 */}
          <div className="relative feature-card group">
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-convrt-dark-blue text-white flex items-center justify-center font-bold text-xl shadow-lg">
              1
            </div>
            <div className="pt-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-convrt-purple/10 text-convrt-purple mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-convrt-dark-blue mb-3">
                AI Identifies Where Your Buyers Engage
              </h3>
              <p className="text-convrt-dark-blue/80">
                Our AI scans social media to find where your target audience is most active, identifying the exact channels, topics, and content they engage with.
              </p>
              
              <div className="mt-4 py-2 px-3 bg-convrt-light-gray/80 rounded-lg text-sm text-convrt-dark-blue/90">
                <span className="font-medium text-convrt-dark-blue">AI identifies:</span> Relevant conversations, active communities, and engagement opportunities
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative feature-card group">
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-convrt-dark-blue text-white flex items-center justify-center font-bold text-xl shadow-lg">
              2
            </div>
            <div className="pt-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-convrt-purple/10 text-convrt-purple mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-convrt-dark-blue mb-3">
                AI Auto-Warms & Builds Trust
              </h3>
              <p className="text-convrt-dark-blue/80">
                Convrt creates meaningful touchpoints that position you as a trusted advisor by engaging with prospects' content and contributing value.
              </p>
              
              <div className="mt-4 py-2 px-3 bg-convrt-light-gray/80 rounded-lg text-sm text-convrt-dark-blue/90">
                <span className="font-medium text-convrt-dark-blue">AI automates:</span> Targeted comments, relevant reactions, and personalized interactions
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative feature-card group">
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-convrt-dark-blue text-white flex items-center justify-center font-bold text-xl shadow-lg">
              3
            </div>
            <div className="pt-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-convrt-purple/10 text-convrt-purple mb-4">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-convrt-dark-blue mb-3">
                AI Converts Warm Leads Into Pipeline
              </h3>
              <p className="text-convrt-dark-blue/80">
                With pre-established trust, your outreach achieves 15x higher conversion rates, turning social connections into qualified leads and deals.
              </p>
              
              <div className="mt-4 py-2 px-3 bg-convrt-light-gray/80 rounded-lg text-sm text-convrt-dark-blue/90">
                <span className="font-medium text-convrt-dark-blue">AI delivers:</span> Warmed leads, engagement analytics, and conversion opportunities
              </div>
            </div>
          </div>
        </div>
        
        {/* UI Demo */}
        <div 
          ref={screenRef}
          className="opacity-0 scale-95 transition-all duration-700 delay-500"
        >
          <div className="bg-convrt-dark-blue p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-convrt-dark-blue/50 border border-white/10 text-white/80 text-xs">
                convrt.ai/engagement-dashboard
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur rounded-xl overflow-hidden border border-white/10">
                <div className="p-4 border-b border-white/10">
                  <h4 className="text-white font-medium">Prospect Identification</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center p-2 rounded-lg bg-white/5 border border-white/5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-convrt-purple/60 to-convrt-purple-light/40 flex items-center justify-center text-white mr-3">
                          {i}
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">Prospect {i}</div>
                          <div className="text-white/70 text-xs">High-value target</div>
                        </div>
                        <div className="ml-auto">
                          <div className="w-8 h-8 rounded-full bg-convrt-purple/20 text-convrt-purple-light flex items-center justify-center">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur rounded-xl overflow-hidden border border-white/10">
                <div className="p-4 border-b border-white/10">
                  <h4 className="text-white font-medium">AI Engagement</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-2 rounded-lg bg-white/5 border border-white/5">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-convrt-purple/60 to-convrt-purple-light/40 flex items-center justify-center text-white mr-3">
                            {i}
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">Touchpoint {i}</div>
                            <div className="text-white/70 text-xs">Auto engagement</div>
                          </div>
                          <div className="ml-auto text-convrt-purple-light text-xs font-medium">
                            +Trust
                          </div>
                        </div>
                        <div className="mt-2 text-xs text-white/80 bg-white/5 rounded-lg p-2 border border-white/5">
                          "Great insights on your recent post about {i === 1 ? "AI adoption" : i === 2 ? "revenue growth" : "lead conversion"}."
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur rounded-xl overflow-hidden border border-white/10">
                <div className="p-4 border-b border-white/10">
                  <h4 className="text-white font-medium">Conversion Analytics</h4>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-white text-sm">Trust Score</div>
                    <div className="text-convrt-purple-light font-medium">87%</div>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-convrt-purple/80 to-convrt-purple-light rounded-full" style={{ width: "87%" }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-white text-sm">Engagement Rate</div>
                    <div className="text-convrt-purple-light font-medium">92%</div>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-convrt-purple/80 to-convrt-purple-light rounded-full" style={{ width: "92%" }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-white text-sm">Response Rate</div>
                    <div className="text-convrt-purple-light font-medium">76%</div>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-convrt-purple/80 to-convrt-purple-light rounded-full" style={{ width: "76%" }}></div>
                  </div>
                  
                  <div className="bg-convrt-purple/20 p-3 rounded-lg text-center">
                    <div className="text-convrt-purple-light font-medium">15x Higher Conversion</div>
                    <div className="text-white/80 text-xs mt-1">Compared to cold outreach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
