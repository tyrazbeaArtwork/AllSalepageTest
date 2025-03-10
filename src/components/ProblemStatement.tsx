
import React, { useEffect, useRef } from 'react';
import { X, Check, PhoneCall, Mail, MessageSquare, Users, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemStatement = () => {
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
    <section className="relative py-32 overflow-hidden" id="problem">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-convrt-light-gray/20 to-white"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[400px] right-[20%] w-[600px] h-[600px] rounded-full bg-convrt-purple-light/10 blur-3xl"></div>
        <div className="absolute -bottom-[300px] left-[10%] w-[500px] h-[500px] rounded-full bg-convrt-purple/10 blur-3xl"></div>
      </div>
      
      <div className="container-section relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div variants={itemVariants} className="section-tag mb-4 px-4 py-2 inline-block rounded-full text-sm font-medium bg-convrt-purple/10 text-convrt-purple">
            Why Traditional Outbound Is Dead
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="heading-lg text-convrt-dark-blue mb-6"
          >
            Cold Outreach Doesn't Work Anymore. <br />
            <span className="text-convrt-purple font-extrabold">AI Organic Outbound</span> Does.
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-convrt-dark-blue/80 text-lg mb-8 max-w-2xl mx-auto"
          >
            The days of cold calls and emails are over. Today's buyers expect personalized engagement from people they trust. Convrt.ai puts you exactly where your buyers make decisions.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Traditional Cold Outbound */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 border border-convrt-purple-light/20 relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute top-0 right-0 bg-convrt-ignored/10 px-4 py-2 rounded-bl-2xl">
              <X className="w-5 h-5 text-convrt-ignored" />
            </div>
            
            <h3 className="heading-sm text-convrt-dark-blue mb-8 flex items-center">
              Traditional Cold Outbound
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-convrt-ignored/10 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-convrt-ignored" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">1% cold email response rates</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Millions of emails sent, almost all ignored</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-convrt-ignored/10 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-convrt-ignored" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">80% of calls screened out</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Decision makers don't take cold calls</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-convrt-ignored/10 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-convrt-ignored" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">No relationship before outreach</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Cold outreach feels impersonal and salesy</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-ignored/5 rounded-xl p-3 shadow-md">
                <PhoneCall className="w-8 h-8 text-convrt-ignored mb-2" />
                <div className="text-sm text-center text-convrt-ignored font-medium">Cold Calls</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-ignored/5 rounded-xl p-3 shadow-md">
                <Mail className="w-8 h-8 text-convrt-ignored mb-2" />
                <div className="text-sm text-center text-convrt-ignored font-medium">Mass Emails</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-ignored/5 rounded-xl p-3 shadow-md">
                <MessageSquare className="w-8 h-8 text-convrt-ignored mb-2" />
                <div className="text-sm text-center text-convrt-ignored font-medium">Generic Messages</div>
              </div>
            </div>
            
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-convrt-ignored/30 via-convrt-ignored to-convrt-ignored/30"></div>
          </motion.div>
          
          {/* AI Organic Outbound */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 border border-convrt-purple/20 relative overflow-hidden group shadow-lg hover:shadow-xl hover:shadow-convrt-purple/10 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 bg-convrt-influential/10 px-4 py-2 rounded-bl-2xl">
              <Check className="w-5 h-5 text-convrt-influential" />
            </div>
            
            <h3 className="heading-sm text-convrt-dark-blue mb-8 flex items-center">
              AI Organic Outbound
              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-convrt-purple/10 text-convrt-purple rounded-full">Convrt.ai</span>
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-convrt-influential/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-convrt-influential" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">15x higher conversion rates</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Build trust before you reach out</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-convrt-influential/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-convrt-influential" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Key touchpoints and discussions</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Tracks the entire buyer's journey</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-convrt-influential/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-convrt-influential" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Fully automated growth hacking</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Enterprise-grade AI engagement</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-influential/5 rounded-xl p-3 shadow-md">
                <Users className="w-8 h-8 text-convrt-influential mb-2" />
                <div className="text-sm text-center text-convrt-influential font-medium">Engagement</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-influential/5 rounded-xl p-3 shadow-md">
                <Zap className="w-8 h-8 text-convrt-influential mb-2" />
                <div className="text-sm text-center text-convrt-influential font-medium">Trust Building</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-influential/5 rounded-xl p-3 shadow-md">
                <BarChart3 className="w-8 h-8 text-convrt-influential mb-2" />
                <div className="text-sm text-center text-convrt-influential font-medium">Win More Deals</div>
              </div>
            </div>
            
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-convrt-influential/30 via-convrt-influential to-convrt-influential/30"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
