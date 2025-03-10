
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-convrt-dark-blue overflow-hidden">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main className="pt-16">
        <Hero />
        <ProblemStatement />
        <HowItWorks />
        <Testimonials />
        
        <section className="relative py-24 overflow-hidden bg-gray-100" id="cta">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="flex flex-col lg:flex-row">
                  {/* Content Side */}
                  <div className="lg:w-7/12 p-8 lg:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-convrt-dark-blue leading-tight">
                      Ready to Move from 
                      <span className="text-convrt-purple font-extrabold"> Ignored </span> 
                      to 
                      <span className="text-convrt-purple font-extrabold"> Influential</span>?
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                      Join hundreds of sales teams who have transformed their outbound with AI-driven social selling.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {[
                        "15x higher response rates than cold outreach",
                        "Build trust before your first message",
                        "AI-driven personalization at scale"
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-center">
                          <Check className="w-5 h-5 text-convrt-purple mr-3 flex-shrink-0" />
                          <span className="text-convrt-dark-blue/80">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <motion.button 
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="button-primary flex items-center text-lg px-6 py-3 shadow-lg shadow-convrt-purple/10 hover:shadow-xl hover:shadow-convrt-purple/20 rounded-full group"
                    >
                      Start Free – No Credit Card Needed
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                  
                  {/* Image Side with Gradient Overlay */}
                  <div className="lg:w-5/12 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-convrt-purple/30 to-convrt-purple/10 mix-blend-multiply z-10"></div>
                    <div 
                      className="h-full min-h-[300px] lg:min-h-0 w-full bg-cover bg-center" 
                      style={{ 
                        backgroundImage: `url('/lovable-uploads/ce207080-f6c2-430d-9621-79d32ab08655.png')`
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-0"
            >
              <h3 className="text-2xl font-bold text-convrt-dark-blue">Convrt.ai</h3>
              <p className="text-sm text-gray-600 mt-2">© {new Date().getFullYear()} Convrt.ai. All rights reserved.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-8"
            >
              <a href="#" className="text-gray-600 hover:text-convrt-purple transition-colors">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-convrt-purple transition-colors">Terms</a>
              <a href="#" className="text-gray-600 hover:text-convrt-purple transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
