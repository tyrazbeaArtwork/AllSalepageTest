
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
    if (screenRef.current) observer.observe(screenRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (stepsRef.current) observer.unobserve(stepsRef.current);
      if (screenRef.current) observer.unobserve(screenRef.current);
    };
  }, []);

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  // Get the current active step data
  const activeStepData = steps.find(step => step.id === activeStep) || steps[0];

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
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div 
            ref={stepsRef}
            className="md:col-span-1 grid gap-4 opacity-0 translate-y-8 transition-all duration-700 delay-300"
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
                isActive={activeStep === step.id}
                onClick={() => handleStepClick(step.id)}
              />
            ))}
          </div>
          
          {/* Platform Preview Box - Shows currently active step */}
          <div 
            ref={screenRef}
            className="md:col-span-2 opacity-0 scale-95 transition-all duration-700 delay-500 bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden h-[500px]"
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
            
            <div className="p-0 h-full">
              {/* Display the current active step's GIF */}
              <img 
                src={activeStepData.gifUrl} 
                alt={`${activeStepData.title} demonstration`} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
