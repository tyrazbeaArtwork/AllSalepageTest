
import React, { useEffect, useRef } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { ArrowRight, Zap, Users, BarChart3, TrendingUp, Award, Target, Linkedin, Twitter, BarChart2 } from 'lucide-react';
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
            From <span className="text-[#6936F5] font-extrabold">Ignored</span> to <span className="text-[#6936F5] font-extrabold">Influential</span>
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
            <div className="absolute inset-0 -m-10 bg-gradient-to-br from-convrt-purple/20 via-convrt-purple/20 to-convrt-purple/20 rounded-3xl blur-3xl opacity-40"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
              {/* Platform UI Header */}
              <div className="bg-convrt-dark-blue/95 py-4 px-6 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-convrt-purple to-convrt-purple flex items-center justify-center text-white">
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
              
              {/* Platform Content */}
              <div className="bg-gradient-to-br from-[#151520] to-[#1e1e30] text-white p-6">
                <div className="grid grid-cols-12 gap-6">
                  {/* Left Sidebar */}
                  <div className="col-span-2 space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/5">
                      <h3 className="text-white/80 text-sm font-medium mb-3">Navigation</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center space-x-2 text-convrt-purple p-2 bg-convrt-purple/10 rounded-lg">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="7" height="9" x="3" y="3" rx="1" stroke="currentColor" strokeWidth="2" />
                            <rect width="7" height="5" x="14" y="3" rx="1" stroke="currentColor" strokeWidth="2" />
                            <rect width="7" height="9" x="14" y="12" rx="1" stroke="currentColor" strokeWidth="2" />
                            <rect width="7" height="5" x="3" y="16" rx="1" stroke="currentColor" strokeWidth="2" />
                          </svg>
                          <span className="text-sm">Dashboard</span>
                        </li>
                        <li className="flex items-center space-x-2 text-white/70 p-2 hover:bg-white/5 rounded-lg transition-colors">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
                            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" />
                          </svg>
                          <span className="text-sm">Contacts</span>
                        </li>
                        <li className="flex items-center space-x-2 text-white/70 p-2 hover:bg-white/5 rounded-lg transition-colors">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" stroke="currentColor" strokeWidth="2" />
                            <path d="M10 2v20" stroke="currentColor" strokeWidth="2" />
                          </svg>
                          <span className="text-sm">Campaigns</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/5">
                      <h3 className="text-white/80 text-sm font-medium mb-3">Analytics</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-white/70">Responses</span>
                          <span className="text-xs font-medium text-convrt-purple">+24%</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-convrt-purple rounded-full animate-pulse" style={{width: '76%'}}></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-white/70">Meetings</span>
                          <span className="text-xs font-medium text-convrt-purple">+12%</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-convrt-purple rounded-full animate-pulse" style={{width: '54%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Main Content Area - AI Relationship Analysis */}
                  <div className="col-span-7">
                    <div className="bg-white/5 rounded-xl p-5 backdrop-blur-sm border border-white/5 mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-medium text-white">AI Relationship Management</h2>
                        <div className="flex space-x-1">
                          <span className="inline-block w-2 h-2 rounded-full bg-white/20"></span>
                          <span className="inline-block w-2 h-2 rounded-full bg-white/40"></span>
                          <span className="inline-block w-2 h-2 rounded-full bg-white/60"></span>
                        </div>
                      </div>
                      
                      <p className="text-white/70 text-sm mb-4">
                        Creating authentic, direct relevance with <span className="text-[#6936F5]">Karen Johnson</span> requires focusing on shared values around innovation and sustainability.
                      </p>
                      
                      <div className="bg-convrt-dark-blue/50 p-4 rounded-lg mb-5">
                        <div className="flex items-start">
                          <div className="text-[#6936F5] bg-[#6936F5]/20 p-1.5 rounded-lg mr-3">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.5 2a4.61 4.61 0 0 1 2.44 6.47A4.25 4.25 0 0 1 15.45 12h.05c2.5.1 4.25 1 4.5 2.73V15a3 3 0 0 1-2.3 2.92l-2.53.42a3.52 3.52 0 0 1-3.77-1.65L10.5 15.5" stroke="currentColor" strokeWidth="2" />
                              <path d="M15 9.5a4.61 4.61 0 0 0-2.44-6.47A4.25 4.25 0 0 0 9.55 0H9.5c-2.5.1-4.25 1-4.5 2.73V3a3 3 0 0 0 2.3 2.92l2.53.42a3.52 3.52 0 0 0 3.77-1.65L14.5 3.5" stroke="currentColor" strokeWidth="2" />
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
                      
                      <h3 className="text-white/90 text-sm font-medium mb-2">Recent Touchpoints</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between bg-white/5 p-3 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-lg bg-[#6936F5]/20 text-[#6936F5] flex items-center justify-center mr-3">
                              <Linkedin className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-white/90 text-sm">LinkedIn Comment</span>
                              <span className="block text-white/60 text-xs">Mentioned industry report</span>
                            </div>
                          </div>
                          <span className="text-white/50 text-xs">2 days ago</span>
                        </div>
                        
                        <div className="flex justify-between bg-white/5 p-3 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-lg bg-[#6936F5]/20 text-[#6936F5] flex items-center justify-center mr-3">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <circle cx="12" cy="12" r="6" />
                                <circle cx="12" cy="12" r="2" />
                              </svg>
                            </div>
                            <div>
                              <span className="text-white/90 text-sm">Reddit Discussion</span>
                              <span className="block text-white/60 text-xs">Shared thought leadership</span>
                            </div>
                          </div>
                          <span className="text-white/50 text-xs">3 days ago</span>
                        </div>

                        <div className="flex justify-between bg-white/5 p-3 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-lg bg-[#6936F5]/20 text-[#6936F5] flex items-center justify-center mr-3">
                              <Twitter className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-white/90 text-sm">Twitter Engagement</span>
                              <span className="block text-white/60 text-xs">Liked your market analysis</span>
                            </div>
                          </div>
                          <span className="text-white/50 text-xs">5 days ago</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-5 backdrop-blur-sm border border-white/5">
                      <h3 className="text-white font-medium mb-4">Recommended Conversation Starters</h3>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-[#6936F5]/10 to-[#6936F5]/5 p-3 rounded-lg border border-[#6936F5]/20">
                          <p className="text-white/90 text-sm">
                            "I noticed your comment about balancing scale and quality. We've developed a framework that might address those challenges effectively."
                          </p>
                          <div className="flex justify-end mt-2">
                            <button className="px-3 py-1 bg-[#6936F5]/20 text-[#6936F5] text-xs rounded-lg flex items-center">
                              <span>Use</span>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-[#6936F5]/10 to-[#6936F5]/5 p-3 rounded-lg border border-[#6936F5]/20">
                          <p className="text-white/90 text-sm">
                            "Your recent post about sustainability goals resonated with me. I'd love to share how we've helped similar companies achieve their ESG targets."
                          </p>
                          <div className="flex justify-end mt-2">
                            <button className="px-3 py-1 bg-[#6936F5]/20 text-[#6936F5] text-xs rounded-lg flex items-center">
                              <span>Use</span>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6936F5] to-[#6936F5] flex items-center justify-center text-white mr-3">
                          KJ
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Karen Johnson</h4>
                          <p className="text-white/60 text-xs">VP of Operations, TechScale Inc.</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2.5 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white/70 text-xs">Engagement Score</span>
                          <span className="text-[#6936F5] text-xs font-medium">87%</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#6936F5] to-[#6936F5] rounded-full" style={{width: '87%'}}></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-white/70 text-xs">Buying Intent</span>
                          <span className="text-[#6936F5] text-xs font-medium">73%</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#6936F5] rounded-full" style={{width: '73%'}}></div>
                        </div>
                      </div>
                      
                      <div className="bg-convrt-dark-blue/50 rounded-lg p-3">
                        <h4 className="text-white/90 text-xs font-medium mb-2">Social Channels</h4>
                        <div className="flex flex-wrap gap-2">
                          <div className="px-2 py-1 bg-[#6936F5]/10 text-[#6936F5] text-xs rounded-md flex items-center">
                            <Linkedin className="w-3 h-3 mr-1" />
                            LinkedIn
                          </div>
                          <div className="px-2 py-1 bg-[#6936F5]/10 text-[#6936F5] text-xs rounded-md flex items-center">
                            <Twitter className="w-3 h-3 mr-1" />
                            Twitter
                          </div>
                          <div className="px-2 py-1 bg-[#6936F5]/10 text-[#6936F5] text-xs rounded-md flex items-center">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
                              <circle cx="12" cy="12" r="10" />
                              <circle cx="12" cy="12" r="6" />
                              <circle cx="12" cy="12" r="2" />
                            </svg>
                            Reddit
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/5">
                      <h3 className="text-white/80 text-sm font-medium mb-3">Next Steps</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center text-white/90 bg-white/5 p-2 rounded-lg">
                          <div className="w-5 h-5 rounded-full border border-[#6936F5]/50 flex items-center justify-center mr-2 text-[#6936F5]">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span className="text-xs">Engage with recent article</span>
                        </li>
                        <li className="flex items-center text-white/90 bg-white/5 p-2 rounded-lg">
                          <div className="w-5 h-5 rounded-full border border-white/20 mr-2"></div>
                          <span className="text-xs">Send personalized outreach</span>
                        </li>
                        <li className="flex items-center text-white/90 bg-white/5 p-2 rounded-lg">
                          <div className="w-5 h-5 rounded-full border border-white/20 mr-2"></div>
                          <span className="text-xs">Schedule follow-up reminder</span>
                        </li>
                      </ul>
                      
                      <button className="w-full mt-4 py-2 bg-gradient-to-r from-[#6936F5] to-[#6936F5] rounded-lg text-white text-sm font-medium">
                        Start Sequence
                      </button>
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
                <div className="bg-[#6936F5]/20 rounded-lg p-2 mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#6936F5]">
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
                <div className="bg-[#6936F5]/20 rounded-lg p-2 mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#6936F5]">
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
          
          {/* Stats Section - Enhanced with better styling and icons */}
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
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-white/50 hover:shadow-2xl hover:shadow-[#6936F5]/10 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6936F5]/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6936F5]/10 text-[#6936F5] mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="flex items-baseline gap-1">
                  <div className="text-5xl font-bold text-[#6936F5] font-inter relative z-10">15x</div>
                </div>
                <div className="text-convrt-dark-blue/80 mt-2 font-inter text-xl font-semibold relative z-10">
                  Higher Conversion Rates
                </div>
                <div className="text-convrt-dark-blue/60 text-sm mt-2 relative z-10 leading-relaxed">
                  Turn cold prospects into warm leads through AI-driven social touchpoints
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-white/50 hover:shadow-2xl hover:shadow-[#6936F5]/10 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6936F5]/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6936F5]/10 text-[#6936F5] mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <BarChart2 className="w-8 h-8" />
                </div>
                <div className="flex items-baseline gap-1">
                  <div className="text-5xl font-bold text-[#6936F5] font-inter relative z-10">80%</div>
                </div>
                <div className="text-convrt-dark-blue/80 mt-2 font-inter text-xl font-semibold relative z-10">
                  Less Prospecting Time
                </div>
                <div className="text-convrt-dark-blue/60 text-sm mt-2 relative z-10 leading-relaxed">
                  AI-driven relationship management that handles prospect warming automatically
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-white/50 hover:shadow-2xl hover:shadow-[#6936F5]/10 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6936F5]/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6936F5]/10 text-[#6936F5] mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8" />
                </div>
                <div className="flex items-baseline gap-1">
                  <div className="text-5xl font-bold text-[#6936F5] font-inter relative z-10">78%</div>
                </div>
                <div className="text-convrt-dark-blue/80 mt-2 font-inter text-xl font-semibold relative z-10">
                  Sales Outperformance
                </div>
                <div className="text-convrt-dark-blue/60 text-sm mt-2 relative z-10 leading-relaxed">
                  Consistently outperform traditional outbound methods with authentic connections
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
