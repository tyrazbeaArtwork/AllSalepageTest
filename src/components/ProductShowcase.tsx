
import React, { useEffect, useRef } from 'react';
import { Check, X, Zap, Users, MessageSquare, BarChart3, Brain, LineChart } from 'lucide-react';

const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const screenshotRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0');
            } else if (entry.target === screenshotRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            } else if (entry.target === featuresRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            } else if (entry.target === comparisonRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (screenshotRef.current) observer.observe(screenshotRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (comparisonRef.current) observer.observe(comparisonRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (screenshotRef.current) observer.unobserve(screenshotRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (comparisonRef.current) observer.unobserve(comparisonRef.current);
    };
  }, []);

  return (
    <section className="relative py-20" id="product">
      <div className="container-section">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center opacity-0 transition-opacity duration-700"
        >
          <div className="section-tag">
            Product Overview
          </div>
          <h2 className="heading-lg text-convrt-dark-blue mb-6">
            The First <span className="gradient-text">AI Organic Outbound</span> Platform
          </h2>
          <p className="text-convrt-dark-blue/70 text-lg mb-16 max-w-2xl mx-auto">
            Our AI platform tracks key touchpoints, discussions, and content across the buyer's journey, letting you engage, warm up, and build trust—before you reach out.
          </p>
        </div>
        
        {/* Platform Screenshot */}
        <div 
          ref={screenshotRef}
          className="mb-20 opacity-0 translate-y-8 transition-all duration-700 delay-300"
        >
          <div className="bg-convrt-dark-blue rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-convrt-dark-blue/50 border border-white/10 text-white/80 text-xs">
                convrt.ai/dashboard
              </div>
            </div>
            
            <div className="relative w-full overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/ceb0d5d2-2d83-407f-bb1e-8f6959b93eb9.png" 
                alt="Convrt AI Platform Dashboard" 
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div 
          ref={featuresRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 opacity-0 translate-y-8 transition-all duration-700 delay-500"
        >
          {[
            {
              icon: Brain,
              title: "AI Organic Outbound",
              description: "Puts you exactly where your buyers make decisions.",
            },
            {
              icon: Users,
              title: "Build Trust First",
              description: "Establish credibility before your first direct outreach.",
            },
            {
              icon: MessageSquare,
              title: "Key Touchpoints",
              description: "Track discussions and content across buyer's journey.",
            },
            {
              icon: BarChart3,
              title: "15x Conversion Rates",
              description: "Fully automated, enterprise-grade growth hacking.",
            }
          ].map((feature, i) => (
            <div 
              key={i} 
              className="feature-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-convrt-cyan/10 text-convrt-cyan mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-convrt-dark-blue mb-2">{feature.title}</h3>
              <p className="text-convrt-dark-blue/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Comparison Table */}
        <div 
          ref={comparisonRef}
          className="opacity-0 translate-y-8 transition-all duration-700 delay-700"
        >
          <h3 className="text-2xl font-bold text-convrt-dark-blue mb-6 text-center">Convrt vs. Traditional Outreach Tools</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-convrt-light-gray/50 rounded-tl-lg"></th>
                  <th className="p-4 text-center bg-convrt-cyan/10 text-convrt-dark-blue font-bold">
                    <div className="flex justify-center items-center">
                      <span>Convrt.ai</span>
                      <div className="ml-2 px-2 py-0.5 text-xs bg-convrt-cyan/20 text-convrt-cyan rounded-full">AI-Powered</div>
                    </div>
                  </th>
                  <th className="p-4 text-center bg-convrt-light-gray/50 text-convrt-dark-blue/70 font-medium rounded-tr-lg">Traditional Tools</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Puts you where buyers make decisions", convrt: true, traditional: false },
                  { feature: "Tracks key touchpoints and discussions", convrt: true, traditional: false },
                  { feature: "Builds trust before outreach", convrt: true, traditional: false },
                  { feature: "Automated engagement", convrt: true, traditional: false },
                  { feature: "Cold email capabilities", convrt: true, traditional: true },
                  { feature: "Conversion rates", convrt: "15x+", traditional: "1-2%" },
                  { feature: "Time spent prospecting", convrt: "80% less", traditional: "5+ hours/day" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-convrt-light-gray/30">
                    <td className="p-4 text-left font-medium text-convrt-dark-blue">{row.feature}</td>
                    <td className="p-4 text-center bg-convrt-cyan/5">
                      {typeof row.convrt === "boolean" ? (
                        row.convrt ? (
                          <div className="flex justify-center">
                            <Check className="w-5 h-5 text-green-500" />
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <X className="w-5 h-5 text-red-500" />
                          </div>
                        )
                      ) : (
                        <div className="font-medium text-convrt-dark-blue">{row.convrt}</div>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.traditional === "boolean" ? (
                        row.traditional ? (
                          <div className="flex justify-center">
                            <Check className="w-5 h-5 text-green-500" />
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <X className="w-5 h-5 text-red-500" />
                          </div>
                        )
                      ) : (
                        <div className="font-medium text-convrt-dark-blue/70">{row.traditional}</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
