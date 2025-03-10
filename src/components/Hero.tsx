import React, { useEffect, useRef } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { ArrowRight, Zap, Users, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-32 overflow-hidden">
      <AnimatedBackground />
      
      <div className="container-section relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 text-convrt-purple mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium font-inter tracking-wide">The First AI Organic Outbound Platform</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="font-inter font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight max-w-4xl mx-auto mb-6 text-convrt-dark-blue leading-[1.1]"
          >
            From <span className="text-convrt-ignored font-extrabold">Ignored</span> to <span className="text-convrt-influential font-extrabold">Influential</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="font-inter text-xl text-convrt-dark-blue/80 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            AI that makes buyers trust you, so you win more deals
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
          >
            <a href="#cta" className="button-primary flex items-center group font-inter font-medium">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#how-it-works" className="button-outline font-inter">
              See How It Works
            </a>
          </motion.div>
          
          {/* Modern Platform Showcase */}
          <motion.div 
            ref={demoRef}
            variants={itemVariants}
            className="relative max-w-5xl mx-auto mb-20"
          >
            {/* Gradient background for the platform demo */}
            <div className="absolute inset-0 -m-10 bg-gradient-to-br from-convrt-influential/20 via-convrt-purple/20 to-convrt-ignored/20 rounded-3xl blur-3xl opacity-40"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
              {/* Platform UI Header */}
              <div className="bg-convrt-dark-blue/95 py-4 px-6 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-convrt-purple to-convrt-influential flex items-center justify-center text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L17 7H14V13H10V7H7L12 2Z" fill="currentColor" />
                      <path d="M22 12L17 17V14H11V10H17V7L22 12Z" fill="currentColor" />
                      <path d="M2 12L7 7V10H13V14H7V17L2 12Z" fill="currentColor" />
                      <path d="M12 22L7 17H10V11H14V17H17L12 22Z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-lg">Convrt.ai Platform</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-white/60 text-sm">Ryan Miller</span>
                  <div className="w-8 h-8 rounded-full bg-convrt-purple/30 flex items-center justify-center text-white">
                    RM
                  </div>
                </div>
              </div>
              
              {/* Platform Content - Updated with relationship management focus */}
              <div className="bg-gradient-to-br from-[#151520] to-[#1e1e30] text-white p-6">
                <div className="grid grid-cols-12 gap-6">
                  {/* Left Sidebar */}
                  <div className="col-span-2 space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/5">
                      <h3 className="text-white/80 text-sm font-medium mb-3">AI Agent Tools</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center space-x-2 text-convrt-purple p-2 bg-convrt-purple/10 rounded-lg">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 2a4.61 4.61 0 0 1 2.44 6.47A4.25 4.25 0 0 1 15.45 12h.05c2.5.1 4.25 1 4.5 2.73V15a3 3 0 0 1-2.3 2.92l-2.53.42a3.52 3.52 0 0 1-3.77-1.65L10.5 15.5" stroke="currentColor" strokeWidth="2"/>
                            <path d="M15 9.5a4.61 4.61 0 0 0-2.44-6.47A4.25 4.25 0 0 0 9.55 0H9.5c-2.5.1-4.25 1-4.5 2.73V3a3 3 0 0 0 2.3 2.92l2.53.42a3.52 3.52 0 0 0 3.77-1.65L14.5 3.5" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span className="text-sm">Relations</span>
                        </li>
                        <li className="flex items-center space-x-2 text-white/70 p-2 hover:bg-white/5 rounded-lg transition-colors">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span className="text-sm">Contacts</span>
                        </li>
                        <li className="flex items-center space-x-2 text-white/70 p-2 hover:bg-white/5 rounded-lg transition-colors">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 0 0 1-2.5-2.5Z" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span className="text-sm">Insights</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Main Content Area - Updated with relationship insights */}
                  <div className="col-span-7">
                    <div className="bg-white/5 rounded-xl p-5 backdrop-blur-sm border border-white/5 mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-medium text-white">AI Relationship Analysis</h2>
                        <div className="flex space-x-1">
                          <span className="inline-block w-2 h-2 rounded-full bg-convrt-purple"></span>
                          <span className="inline-block w-2 h-2 rounded-full bg-white/40"></span>
                          <span className="inline-block w-2 h-2 rounded-full bg-white/20"></span>
                        </div>
                      </div>
                      
                      <p className="text-white/70 text-sm mb-4">
                        Creating authentic, direct relevance with <span className="text-convrt-purple">Karen Johnson</span> requires focusing on shared values around innovation and sustainability.
                      </p>
                      
                      <div className="bg-convrt-dark-blue/50 p-4 rounded-lg mb-5">
                        <div className="flex items-start">
                          <div className="text-convrt-purple bg-convrt-purple/20 p-1.5 rounded-lg mr-3">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.5 2a4.61 4.61 0 0 1 2.44 6.47A4.25 4.25 0 0 1 15.45 12h.05c2.5.1 4.25 1 4.5 2.73V15a3 3 0 0 1-2.3 2.92l-2.53.42a3.52 3.52 0 0 1-3.77-1.65L10.5 15.5" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white/90 font-medium text-sm">AI Relationship Insight</h4>
                            <p className="text-white/70 text-xs mt-1 leading-relaxed">
                              Based on recent social media activity, Karen is currently focused on scaling operations while maintaining quality. Your experience with similar challenges would be a valuable connection point.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Recommended Actions */}
                    <div className="bg-white/5 rounded-xl p-5 backdrop-blur-sm border border-white/5">
                      <h3 className="text-white font-medium mb-4">Recommended Actions</h3>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-convrt-purple/10 to-transparent p-3 rounded-lg border border-convrt-purple/20">
                          <p className="text-white/90 text-sm">
                            "Share insights about operational efficiency improvements through AI-driven solutions."
                          </p>
                          <div className="flex justify-end mt-2">
                            <button className="px-3 py-1 bg-convrt-purple/20 text-convrt-purple text-xs rounded-lg flex items-center">
                              <span>Use</span>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Sidebar - Contact Profile */}
                  <div className="col-span-3 space-y-6">
                    <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/5">
                      <h3 className="text-white/80 text-sm font-medium mb-3">Contact Profile</h3>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-convrt-purple to-convrt-purple/60 flex items-center justify-center text-white mr-3">
                          KJ
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Karen Johnson</h4>
                          <p className="text-white/60 text-xs">VP of Operations, TechScale Inc.</p>
                        </div>
                      </div>
                      
                      {/* Engagement Metrics */}
                      <div className="space-y-2.5 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white/70 text-xs">Trust Score</span>
                          <span className="text-convrt-purple text-xs font-medium">87%</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-convrt-purple rounded-full" style={{width: '87%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating UI Elements */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-8 top-1/3 z-10"
            >
              <div className="animate-float bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 flex items-center">
                <div className="bg-convrt-influential/20 rounded-lg p-2 mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-convrt-influential">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-xs font-medium">New insight</div>
                  <div className="text-white/60 text-xs">4 shared connections</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-8 top-2/3 z-10"
            >
              <div className="animate-float animation-delay-300 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 flex items-center">
                <div className="bg-convrt-purple/20 rounded-lg p-2 mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-convrt-purple">
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-xs font-medium">AI Message</div>
                  <div className="text-white/60 text-xs">Personalized outreach</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Stats Section */}
          <motion.div 
            ref={statsRef} 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:shadow-convrt-purple/5 transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-convrt-purple/10 text-convrt-purple mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <div className="text-4xl font-bold text-convrt-dark-blue font-inter">15x</div>
              <div className="text-convrt-dark-blue/80 mt-2 font-inter text-lg">Higher Conversion Rates</div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:shadow-convrt-purple/5 transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-convrt-purple/10 text-convrt-purple mb-6">
                <Users className="w-7 h-7" />
              </div>
              <div className="text-4xl font-bold text-convrt-dark-blue font-inter">80%</div>
              <div className="text-convrt-dark-blue/80 mt-2 font-inter text-lg">Less Prospecting Time</div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:shadow-convrt-purple/5 transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-convrt-purple/10 text-convrt-purple mb-6">
                <BarChart3 className="w-7 h-7" />
              </div>
              <div className="text-4xl font-bold text-convrt-dark-blue font-inter">78%</div>
              <div className="text-convrt-dark-blue/80 mt-2 font-inter text-lg">Sales Outperformance</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
