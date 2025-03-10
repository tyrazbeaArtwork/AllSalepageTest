
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
            AI-Powered <span className="gradient-text">Social Selling</span> Platform
          </h2>
          <p className="text-convrt-dark-blue/70 text-lg mb-16 max-w-2xl mx-auto">
            Our suite of AI tools automates social engagement, builds trust, and delivers warm leads ready for conversion.
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
            
            <div className="grid md:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="bg-white/5 backdrop-blur rounded-xl overflow-hidden border border-white/10 md:col-span-1">
                <div className="p-4 border-b border-white/10">
                  <h4 className="text-white font-medium">Dashboard</h4>
                </div>
                <div className="p-2">
                  <div className="space-y-1">
                    {['Targets', 'Engagement', 'Analytics', 'Campaigns', 'Settings'].map((item, i) => (
                      <div 
                        key={i} 
                        className={`px-3 py-2 rounded-lg text-sm ${i === 1 ? 'bg-convrt-cyan/20 text-convrt-cyan' : 'text-white/70 hover:bg-white/5'}`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="bg-white/5 backdrop-blur rounded-xl overflow-hidden border border-white/10 md:col-span-3">
                <div className="p-4 border-b border-white/10 flex justify-between items-center">
                  <h4 className="text-white font-medium">Engagement Dashboard</h4>
                  <div className="px-3 py-1 rounded-lg bg-convrt-cyan/20 text-convrt-cyan text-xs font-medium">
                    AI Active
                  </div>
                </div>
                <div className="p-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'Leads Engaged', value: '134', icon: Users },
                      { label: 'Auto Comments', value: '246', icon: MessageSquare },
                      { label: 'Conversion Rate', value: '15.7%', icon: LineChart }
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/5">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-xs text-white/60">{stat.label}</div>
                          <stat.icon className="w-4 h-4 text-convrt-cyan/70" />
                        </div>
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Graph Section */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/5 mb-6">
                    <div className="mb-3 flex justify-between items-center">
                      <div className="text-sm font-medium text-white">Engagement Growth</div>
                      <div className="flex space-x-2">
                        {['Daily', 'Weekly', 'Monthly'].map((period, i) => (
                          <div 
                            key={i}
                            className={`px-2 py-1 rounded text-xs ${i === 1 ? 'bg-convrt-cyan/20 text-convrt-cyan' : 'text-white/60'}`}
                          >
                            {period}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Simple Graph Mockup */}
                    <div className="h-40 relative">
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10"></div>
                      <div className="absolute top-0 bottom-0 left-0 w-px bg-white/10"></div>
                      
                      {/* Simulated Graph Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-full">
                        <svg className="w-full h-full" viewBox="0 0 100 40">
                          <path 
                            d="M0,35 C10,30 20,32 30,25 C40,18 50,15 60,10 C70,5 80,5 90,2 L100,0" 
                            stroke="rgba(0, 194, 255, 0.7)" 
                            strokeWidth="2" 
                            fill="none"
                          />
                          <path 
                            d="M0,35 C10,30 20,32 30,25 C40,18 50,15 60,10 C70,5 80,5 90,2 L100,0 L100,40 L0,40 Z" 
                            fill="url(#gradient)" 
                            fillOpacity="0.2" 
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="rgba(0, 194, 255, 0.5)" />
                              <stop offset="100%" stopColor="rgba(0, 194, 255, 0)" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recent Activities */}
                  <div>
                    <div className="text-sm font-medium text-white mb-3">Recent Activities</div>
                    <div className="space-y-2">
                      {[
                        { activity: 'AI commented on Sarah M\'s post', time: '5 min ago' },
                        { activity: 'John B. replied to your comment', time: '27 min ago' },
                        { activity: 'New lead identified: Michael T.', time: '2 hours ago' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5">
                          <div className="text-sm text-white/90">{item.activity}</div>
                          <div className="text-xs text-white/50">{item.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
              title: "AI Engagement",
              description: "Automated, natural interactions with your prospects' content.",
            },
            {
              icon: Users,
              title: "Trust Building",
              description: "Establish credibility before your first direct outreach.",
            },
            {
              icon: MessageSquare,
              title: "Auto Comments",
              description: "Smart, relevant comments that drive meaningful conversations.",
            },
            {
              icon: BarChart3,
              title: "Performance Analytics",
              description: "Track engagement, trust scores, and conversion rates.",
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
                  { feature: "Pre-warms leads before outreach", convrt: true, traditional: false },
                  { feature: "Builds social trust and credibility", convrt: true, traditional: false },
                  { feature: "Engagement Intelligence", convrt: true, traditional: false },
                  { feature: "Automated social interactions", convrt: true, traditional: false },
                  { feature: "Cold email capabilities", convrt: true, traditional: true },
                  { feature: "Response rates", convrt: "15%+", traditional: "1-2%" },
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
