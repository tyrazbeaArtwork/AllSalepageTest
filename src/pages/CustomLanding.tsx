
import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Zap } from 'lucide-react';

const CustomLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-convrt-dark-blue to-[#4A5FBF] overflow-hidden">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main className="pt-16">
        <section className="relative min-h-screen pt-20 pb-32 overflow-hidden">
          <div className="container-section relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl mx-auto text-center text-white"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium font-inter tracking-wide">Custom Experience</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="font-inter font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight max-w-4xl mx-auto mb-6 leading-[1.1]"
              >
                Personalized <span className="text-[#EA384C] font-extrabold">AI Solutions</span> for Your Business
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="font-inter text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Experience tailored AI-driven outbound strategies designed specifically for your industry and target audience
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
              >
                <button className="bg-white text-convrt-dark-blue font-semibold py-4 px-8 rounded-lg transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center group">
                  Start Custom Journey
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="border border-white/30 bg-white/10 backdrop-blur-sm text-white font-medium py-4 px-8 rounded-lg transition-all hover:bg-white/20">
                  Learn More
                </button>
              </motion.div>

              {/* Feature Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              >
                {[
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: "Industry-Specific",
                    description: "Tailored strategies for your specific market and audience"
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Team Integration",
                    description: "Seamless integration with your existing sales workflows"
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Advanced Analytics",
                    description: "Deep insights and performance tracking for optimization"
                  }
                ].map((feature, index) => (
                  <div key={feature.title} className="glass-dark p-6 text-center">
                    <div className="inline-flex p-3 rounded-xl bg-white/10 text-white mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CustomLanding;
