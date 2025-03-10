
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
      title: "Identify",
      description: "Our AI scans social media to find where your target audience is most active, identifying the exact channels, topics, and content they engage with.",
      highlightText: "AI identifies:",
      highlightDetails: "Relevant conversations, active communities, and engagement opportunities",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fsearch-searching-google-l46CwEYnbFtFfjZNS&embed=true&screenshot=true&meta=false"
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6" />,
      title: "Research",
      description: "Convrt creates meaningful touchpoints that position you as a trusted advisor by engaging with prospects' content and contributing value.",
      highlightText: "AI automates:",
      highlightDetails: "Targeted comments, relevant reactions, and personalized interactions",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Frevolutioncomedy-handshake-revolutioncomedy-icommitcombustion-kFHbqSdogIS0qtX6Pf&embed=true&screenshot=true&meta=false"
    },
    {
      id: 3,
      icon: <LineChart className="w-6 h-6" />,
      title: "Personalize",
      description: "With pre-established trust, your outreach achieves 15x higher conversion rates, turning social connections into qualified leads and deals.",
      highlightText: "AI delivers:",
      highlightDetails: "Warmed leads, engagement analytics, and conversion opportunities",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fchart-jtECu4TAPnhbGv2iwx&embed=true&screenshot=true&meta=false"
    },
    {
      id: 4,
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Engage",
      description: "Convert opportunities through multi-channel engagement, executing follow-through from interaction to outcomes.",
      highlightText: "AI engages:",
      highlightDetails: "Personalized outreach, consistent follow-ups, and timely responses",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fshaking-hands-handshake-2xPJgmjMrILKbBVd1h5&embed=true&screenshot=true&meta=false"
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
    if (screenRef.current) observer.unobserve(screenRef.current);

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
    <section className="relative py-20 bg-gray-50" id="how-it-works">
      <div className="container-section">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center opacity-0 transition-opacity duration-700"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-gray-100 rounded-full text-convrt-dark-blue text-sm font-medium mb-4">
            How It Works
          </div>
          <h2 className="heading-lg text-convrt-dark-blue mb-6">
            From prospecting to closing: <span className="gradient-text">All-in-one</span>
          </h2>
          <p className="text-convrt-dark-blue/80 text-lg mb-16 max-w-2xl mx-auto">
            Turn your prospects from cold outreach to closed deals
          </p>
        </div>
        
        {/* Progress Indicator */}
        <div className="flex justify-center mb-8 sticky top-24 z-20">
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`w-8 h-8 rounded-md flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
                  activeStep >= step.id 
                    ? 'bg-convrt-purple text-white' 
                    : 'bg-gray-100 text-convrt-dark-blue/70 border border-gray-200'
                }`}
              >
                {step.id}
              </div>
            ))}
          </div>
        </div>
        
        {/* Steps Container */}
        <div 
          ref={stepsRef}
          className="grid gap-8 opacity-0 translate-y-8 transition-all duration-700 delay-300 mb-16 max-w-4xl mx-auto"
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
        
        {/* Platform Preview Box - Simplified */}
        <div 
          ref={screenRef}
          className="opacity-0 scale-95 transition-all duration-700 delay-500 bg-white rounded-lg border border-gray-200 shadow-sm max-w-5xl mx-auto overflow-hidden"
        >
          <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm text-gray-500">convrt.ai/dashboard</div>
            <div className="w-5"></div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-4 gap-6">
              <div className="col-span-1">
                <div className="text-lg font-medium text-convrt-dark-blue mb-4">Identify</div>
                <p className="text-sm text-convrt-dark-blue/70">
                  Identify perfect-fit prospects at scale, filtering millions of signals to surface your ideal opportunities across every channel.
                </p>
              </div>
              
              <div className="col-span-1">
                <div className="text-lg font-medium text-convrt-dark-blue mb-4">Research</div>
                <p className="text-sm text-convrt-dark-blue/70">
                  Research prospect signals across social, public, and engagement data to craft winning strategies.
                </p>
              </div>
              
              <div className="col-span-1">
                <div className="text-lg font-medium text-convrt-dark-blue mb-4">Personalize</div>
                <p className="text-sm text-convrt-dark-blue/70">
                  Calibrate conversations with precision, dynamically adapting tone and messaging to match each prospect's unique style.
                </p>
              </div>
              
              <div className="col-span-1">
                <div className="text-lg font-medium text-convrt-dark-blue mb-4">Engage</div>
                <p className="text-sm text-convrt-dark-blue/70">
                  Convert opportunities through multi-channel engagement, executing follow-through from interaction to outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
