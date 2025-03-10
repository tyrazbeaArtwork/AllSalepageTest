
import React, { useEffect, useRef } from 'react';
import { Check, X, Zap, Users, MessageSquare, Brain, LineChart, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden" id="product">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-convrt-purple/5 via-white to-white pointer-events-none"></div>
      
      <div className="container-section relative z-10">
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
        
        {/* Modern Product UI Showcase */}
        <div 
          ref={screenshotRef}
          className="mb-20 opacity-0 translate-y-8 transition-all duration-700 delay-300 relative max-w-5xl mx-auto"
        >
          {/* Gradient background for the product showcase */}
          <div className="absolute inset-0 -m-10 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 rounded-3xl blur-xl opacity-30"></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Product UI Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                convrt.ai/dashboard
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="grid grid-cols-12 gap-4 p-4">
              {/* Left Sidebar */}
              <div className="col-span-1 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-convrt-purple flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </div>
              </div>
              
              {/* Content Segment */}
              <div className="col-span-7 bg-white rounded-xl border border-gray-200 p-4 overflow-hidden">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-convrt-purple flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain"><path d="M9.5 2a4.61 4.61 0 0 1 2.44 6.47A4.25 4.25 0 0 1 15.45 12h.05c2.5.1 4.25 1 4.5 2.73V15a3 3 0 0 1-2.3 2.92l-2.53.42a3.52 3.52 0 0 1-3.77-1.65L10.5 15.5"></path><path d="M15 9.5a4.61 4.61 0 0 0-2.44-6.47A4.25 4.25 0 0 0 9.55 0H9.5c-2.5.1-4.25 1-4.5 2.73V3a3 3 0 0 0 2.3 2.92l2.53.42a3.52 3.52 0 0 0 3.77-1.65L14.5 3.5"></path><path d="M4 8h2.5a1.5 1.5 0 0 1 1.5 1.5V12"></path><path d="M4 16h2.5a1.5 1.5 0 0 0 1.5-1.5V12"></path><path d="M13 16a3 3 0 1 0 0-6"></path></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-convrt-dark-blue">Candidate Scorecard</h3>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Looking at the data provided, Frank B. has great numbers. Based on my analysis, they have a well-rounded skillset.
                </p>
                
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    If LinkedIn is good and their location works, they would have a few key positive traits that would make this candidate stand out.
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-800 mb-2">
                    <span className="font-medium">Their social media shows:</span>
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-sm text-gray-700">3+ years experience in similar roles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-sm text-gray-700">Good command of required tech stack</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-sm text-gray-700">Shows problem-solving abilities in past work</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mt-8 border-t pt-4 border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-convrt-purple text-white flex items-center justify-center">JD</div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">TS</div>
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">BK</div>
                  </div>
                  <button className="text-sm text-convrt-purple flex items-center">
                    View Recommendation <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
              
              {/* Right Stats Panel */}
              <div className="col-span-4">
                <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
                  <h4 className="text-sm font-medium text-gray-800 mb-3">Top Results</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Sales Leaders</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">93%</span>
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-convrt-purple h-full rounded-full" style={{ width: '93%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Growth Leaders</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">85%</span>
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-convrt-purple h-full rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">ROI</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">78%</span>
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-convrt-purple h-full rounded-full" style={{ width: '78%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
                  <h4 className="text-sm font-medium text-gray-800 mb-3">Sentiment Analysis</h4>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center bg-gray-50 rounded-lg p-2">
                      <div className="text-xl font-medium text-convrt-dark-blue">84</div>
                      <div className="text-xs text-gray-500">Positive</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-2">
                      <div className="text-xl font-medium text-convrt-dark-blue">12</div>
                      <div className="text-xs text-gray-500">Neutral</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-2">
                      <div className="text-xl font-medium text-convrt-dark-blue">4</div>
                      <div className="text-xs text-gray-500">Negative</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <h4 className="text-sm font-medium text-gray-800 mb-3">Prospect Quality Score</h4>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <svg viewBox="0 0 36 36" className="w-14 h-14">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#E5E7EB"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#6936F5"
                            strokeWidth="3"
                            strokeDasharray="85, 100"
                            className="animate-pulse"
                          />
                          <text x="18" y="21" textAnchor="middle" fontSize="10" fill="#6936F5" fontWeight="bold">85%</text>
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-500">Overall Rating</div>
                        <div className="text-sm font-medium text-convrt-dark-blue">Excellent Fit</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="inline-block w-2 h-2 rounded-full bg-gray-200"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t border-gray-100 flex justify-between">
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium">Discard</button>
              <button className="px-4 py-2 rounded-lg bg-convrt-purple text-white text-sm font-medium flex items-center">
                <span>Continue</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><circle cx="12" cy="12" r="10"></circle><path d="m16 12-4 4-4-4"></path><path d="M12 8v8"></path></svg>
              </button>
            </div>
          </div>
          
          {/* Floating UI Elements */}
          <div className="absolute -left-4 top-1/3 transform -translate-y-1/2">
            <div className="animate-floating bg-white p-4 rounded-xl shadow-lg border border-gray-200 flex items-center">
              <div className="bg-purple-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-convrt-purple"><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="m4.93 4.93 2.83 2.83"></path><path d="m16.24 16.24 2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="m4.93 19.07 2.83-2.83"></path><path d="m16.24 7.76 2.83-2.83"></path></svg>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-800">Quick AI</div>
                <div className="text-xs text-gray-500">Summary</div>
              </div>
            </div>
          </div>
          
          <div className="absolute -right-4 top-1/3 transform -translate-y-1/2">
            <div className="animate-floating delay-500 bg-white p-4 rounded-xl shadow-lg border border-gray-200 flex items-center">
              <div className="bg-purple-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-convrt-purple"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-800">Smart</div>
                <div className="text-xs text-gray-500">Insights</div>
              </div>
            </div>
          </div>
          
          <div className="absolute right-8 bottom-2">
            <button className="animate-pulse bg-convrt-purple w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </button>
          </div>
        </div>
        
        {/* Features */}
        <motion.div 
          ref={featuresRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 opacity-0 translate-y-8 transition-all duration-700 delay-500"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
              icon: LineChart,
              title: "15x Conversion Rates",
              description: "Fully automated, enterprise-grade growth hacking.",
            }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              className="feature-card group"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-convrt-purple/10 text-convrt-purple mb-4 group-hover:bg-convrt-purple group-hover:text-white transition-all duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-convrt-dark-blue mb-2">{feature.title}</h3>
              <p className="text-convrt-dark-blue/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
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
                  <th className="p-4 text-center bg-convrt-purple/10 text-convrt-dark-blue font-bold">
                    <div className="flex justify-center items-center">
                      <span>Convrt.ai</span>
                      <div className="ml-2 px-2 py-0.5 text-xs bg-convrt-purple/20 text-convrt-purple rounded-full">AI-Powered</div>
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
                    <td className="p-4 text-center bg-convrt-purple/5">
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
