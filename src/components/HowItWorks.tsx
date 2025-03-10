import React, { useEffect, useRef, useState } from 'react';
import { Target, Users, LineChart, ArrowRight } from 'lucide-react';
import StepContent from './how-it-works/StepContent';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  // Steps data
  const steps = [
    {
      id: 1,
      icon: <Target className="w-6 h-6" />,
      title: "AI Identifies Where Your Buyers Engage",
      description: "Our AI scans social media to find where your target audience is most active, identifying the exact channels, topics, and content they engage with.",
      highlightText: "AI identifies:",
      highlightDetails: "Relevant conversations, active communities, and engagement opportunities",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fsearch-searching-google-l46CwEYnbFtFfjZNS&embed=true&screenshot=true&meta=false"
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6" />,
      title: "AI Auto-Warms & Builds Trust",
      description: "Convrt creates meaningful touchpoints that position you as a trusted advisor by engaging with prospects' content and contributing value.",
      highlightText: "AI automates:",
      highlightDetails: "Targeted comments, relevant reactions, and personalized interactions",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Frevolutioncomedy-handshake-revolutioncomedy-icommitcombustion-kFHbqSdogIS0qtX6Pf&embed=true&screenshot=true&meta=false"
    },
    {
      id: 3,
      icon: <LineChart className="w-6 h-6" />,
      title: "AI Converts Warm Leads Into Pipeline",
      description: "With pre-established trust, your outreach achieves 15x higher conversion rates, turning social connections into qualified leads and deals.",
      highlightText: "AI delivers:",
      highlightDetails: "Warmed leads, engagement analytics, and conversion opportunities",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fchart-jtECu4TAPnhbGv2iwx&embed=true&screenshot=true&meta=false"
    }
  ];

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

  // Handle scroll events to update the active step
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Calculate where each step should trigger
      if (stepsRef.current) {
        const stepsElement = stepsRef.current;
        const stepsPosition = stepsElement.getBoundingClientRect().top + window.scrollY;
        const stepsHeight = stepsElement.offsetHeight;
        
        // Divide the steps section into equal parts for each step
        const stepHeight = stepsHeight / steps.length;
        
        steps.forEach(step => {
          const stepTriggerPosition = stepsPosition + (step.id - 1) * stepHeight;
          const nextStepTriggerPosition = stepsPosition + step.id * stepHeight;
          
          if (scrollPosition >= stepTriggerPosition && scrollPosition < nextStepTriggerPosition) {
            setActiveStep(step.id);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-20 bg-white" id="how-it-works">
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
        
        {/* Sticky Progress Indicator */}
        <div className="hidden md:flex justify-center mb-8 sticky top-24 z-20">
          <div className="flex items-center p-4 bg-white rounded-full border border-gray-100 shadow-md">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`w-4 h-4 rounded-full mx-2 transition-all duration-300 ${
                  activeStep >= step.id ? 'bg-convrt-purple scale-110' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Steps container with increased spacing for scroll behavior */}
        <div 
          ref={stepsRef}
          className="grid md:grid-cols-1 gap-32 opacity-0 translate-y-8 transition-all duration-700 delay-300 mb-16"
        >
          {steps.map((step) => (
            <StepContent
              key={step.id}
              stepNumber={step.id}
              title={step.title}
              description={step.description}
              highlightText={step.highlightText}
              highlightDetails={step.highlightDetails}
              icon={step.icon}
              gifUrl={step.gifUrl}
              isActive={activeStep === step.id}
            />
          ))}
        </div>
        
        {/* UI Demo */}
        <div 
          ref={screenRef}
          className="opacity-0 scale-95 transition-all duration-700 delay-500"
        >
          <div className="bg-[#F9F6F3] p-6 rounded-2xl border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-white border border-gray-100 text-convrt-dark-blue/80 text-xs">
                convrt.ai/engagement-dashboard
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <div className="p-4 border-b border-gray-100">
                  <h4 className="text-convrt-dark-blue font-medium">Prospect Identification</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center p-2 rounded-lg bg-[#F9F6F3] border border-gray-100">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-convrt-purple/60 to-convrt-purple-light/40 flex items-center justify-center text-white mr-3">
                          {i}
                        </div>
                        <div>
                          <div className="text-convrt-dark-blue text-sm font-medium">Prospect {i}</div>
                          <div className="text-convrt-dark-blue/70 text-xs">High-value target</div>
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
              
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <div className="p-4 border-b border-gray-100">
                  <h4 className="text-convrt-dark-blue font-medium">AI Engagement</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-2 rounded-lg bg-[#F9F6F3] border border-gray-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-convrt-purple/60 to-convrt-purple-light/40 flex items-center justify-center text-white mr-3">
                            {i}
                          </div>
                          <div>
                            <div className="text-convrt-dark-blue text-sm font-medium">Touchpoint {i}</div>
                            <div className="text-convrt-dark-blue/70 text-xs">Auto engagement</div>
                          </div>
                          <div className="ml-auto text-convrt-purple-light text-xs font-medium">
                            +Trust
                          </div>
                        </div>
                        <div className="mt-2 text-xs text-convrt-dark-blue/80 bg-white rounded-lg p-2 border border-gray-100">
                          "Great insights on your recent post about {i === 1 ? "AI adoption" : i === 2 ? "revenue growth" : "lead conversion"}."
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <div className="p-4 border-b border-gray-100">
                  <h4 className="text-convrt-dark-blue font-medium">Conversion Analytics</h4>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-convrt-dark-blue text-sm">Trust Score</div>
                    <div className="text-convrt-purple-light font-medium">87%</div>
                  </div>
                  <div className="w-full h-2 bg-[#F9F6F3] rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-convrt-purple/80 to-convrt-purple-light rounded-full" style={{ width: "87%" }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-convrt-dark-blue text-sm">Engagement Rate</div>
                    <div className="text-convrt-purple-light font-medium">92%</div>
                  </div>
                  <div className="w-full h-2 bg-[#F9F6F3] rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-convrt-purple/80 to-convrt-purple-light rounded-full" style={{ width: "92%" }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-convrt-dark-blue text-sm">Response Rate</div>
                    <div className="text-convrt-purple-light font-medium">76%</div>
                  </div>
                  <div className="w-full h-2 bg-[#F9F6F3] rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-convrt-purple/80 to-convrt-purple-light rounded-full" style={{ width: "76%" }}></div>
                  </div>
                  
                  <div className="bg-[#F9F6F3] p-3 rounded-lg text-center">
                    <div className="text-convrt-purple-light font-medium">15x Higher Conversion</div>
                    <div className="text-convrt-dark-blue/80 text-xs mt-1">Compared to cold outreach</div>
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
