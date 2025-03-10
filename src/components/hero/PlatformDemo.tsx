
import React from 'react';
import { motion } from 'framer-motion';
import PlatformDemoHeader from './PlatformDemoHeader';
import RelationshipInsight from './RelationshipInsight';
import RecentTouchpoints from './RecentTouchpoints';
import ConversationStarters from './ConversationStarters';
import ContactProfile from './ContactProfile';
import NextSteps from './NextSteps';

const PlatformDemo = () => {
  return (
    <div className="relative max-w-5xl mx-auto mb-20">
      {/* Gradient background for the platform demo */}
      <div className="absolute inset-0 -m-10 bg-gradient-to-br from-convrt-purple/20 via-convrt-purple/20 to-convrt-purple/20 rounded-3xl blur-3xl opacity-40"></div>
      
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
        {/* Platform UI Header */}
        <PlatformDemoHeader />
        
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
                
                <RelationshipInsight />
                <RecentTouchpoints />
              </div>
              
              <ConversationStarters />
            </div>
            
            {/* Right Sidebar - Contact Profile */}
            <div className="col-span-3 space-y-6">
              <ContactProfile />
              <NextSteps />
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
    </div>
  );
};

export default PlatformDemo;
