
import React, { useRef } from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-[#F9F6F3]" id="product">
      <div className="container-section max-w-6xl mx-auto">
        <motion.div 
          ref={sectionRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-semibold text-convrt-dark-blue mb-6 tracking-tight"
          >
            The First AI Organic Outbound Platform
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-0 max-w-2xl mx-auto leading-relaxed"
          >
            Our AI platform tracks key touchpoints, discussions, and content across the buyer's journey, letting you engage, warm up, and build trust—before you reach out.
          </motion.p>
        </motion.div>
        
        {/* Clean Product UI Showcase with simplified rectangles */}
        <motion.div 
          ref={contentRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div 
            variants={itemVariants}
            className="relative bg-white rounded-[20px] overflow-hidden border border-gray-200"
          >
            <div className="px-8 py-6 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-500">convrt.ai/dashboard</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-convrt-dark-blue mb-4">
                  Intelligent AI Analysis
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our AI analyzes your prospect's digital footprint, uncovering opportunities for meaningful connection. Build trust with personalized touchpoints that resonate with your buyers.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automated social listening",
                    "Personalized touchpoint tracking",
                    "Engagement analytics",
                    "Conversation starters based on shared interests"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-[#6936F5] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-[20px] border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-[#6936F5] flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.5 2a4.61 4.61 0 0 1 2.44 6.47A4.25 4.25 0 0 1 15.45 12h.05c2.5.1 4.25 1 4.5 2.73V15a3 3 0 0 1-2.3 2.92l-2.53.42a3.52 3.52 0 0 1-3.77-1.65L10.5 15.5"></path>
                      <path d="M15 9.5a4.61 4.61 0 0 0-2.44-6.47A4.25 4.25 0 0 0 9.55 0H9.5c-2.5.1-4.25 1-4.5 2.73V3a3 3 0 0 0 2.3 2.92l2.53.42a3.52 3.52 0 0 0 3.77-1.65L14.5 3.5"></path>
                      <path d="M4 8h2.5a1.5 1.5 0 0 1 1.5 1.5V12"></path>
                      <path d="M4 16h2.5a1.5 1.5 0 0 0 1.5-1.5V12"></path>
                      <path d="M13 16a3 3 0 1 0 0-6"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-convrt-dark-blue">Insights Report</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-gray-100">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Based on social media activity, your prospect shows interest in sustainability initiatives and has recently shared content about AI implementation in their industry.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Recommended Talking Points:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#6936F5] mr-2">•</span>
                        <span className="text-sm text-gray-700">Their recent post about renewable energy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6936F5] mr-2">•</span>
                        <span className="text-sm text-gray-700">Shared connections at Techstars</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6936F5] mr-2">•</span>
                        <span className="text-sm text-gray-700">Recent company announcement about new market entry</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Features with simplified rectangles */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {[
            {
              title: "AI Organic Outbound",
              description: "Puts you exactly where your buyers make decisions.",
            },
            {
              title: "Build Trust First",
              description: "Establish credibility before your first direct outreach.",
            },
            {
              title: "Key Touchpoints",
              description: "Track discussions and content across buyer's journey.",
            },
            {
              title: "15x Conversion Rates",
              description: "Fully automated, enterprise-grade growth hacking.",
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="bg-white p-8 rounded-[20px] border border-gray-100 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-convrt-dark-blue mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Comparison Table */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold text-convrt-dark-blue mb-6 text-center"
          >
            Convrt vs. Traditional Outreach Tools
          </motion.h3>
          
          <motion.div 
            variants={itemVariants}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-white rounded-tl-lg"></th>
                  <th className="p-4 text-center bg-white text-convrt-dark-blue font-semibold">Convrt.ai</th>
                  <th className="p-4 text-center bg-white text-gray-500 font-medium rounded-tr-lg">Traditional Tools</th>
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
                  <tr key={i} className="border-b border-gray-100">
                    <td className="p-4 text-left font-medium text-gray-700">{row.feature}</td>
                    <td className="p-4 text-center bg-white">
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
                        <div className="font-medium text-gray-600">{row.traditional}</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
