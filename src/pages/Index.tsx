
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import HowItWorks from '@/components/HowItWorks';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';
import { HandHelping, ArrowRight } from 'lucide-react';

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
        <ProductShowcase />
        <Testimonials />
        
        <section className="py-16 overflow-hidden bg-gradient-to-b from-white to-gray-50" id="cta">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-md border border-gray-100 overflow-hidden">
                {/* Background image with overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20" 
                  style={{ 
                    backgroundImage: "url('/lovable-uploads/52c24ea1-70c6-454b-b141-c120be9178da.png')",
                    backgroundSize: "cover"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-convrt-dark-blue/90 to-convrt-purple/80 mix-blend-multiply"></div>
                </div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="flex-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-convrt-purple/10 text-convrt-purple mb-4">
                      <HandHelping className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Get Started Today</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-convrt-dark-blue leading-tight">
                      Ready to Move from 
                      <span className="text-convrt-purple font-extrabold mx-2">Ignored</span> 
                      to 
                      <span className="text-convrt-purple font-extrabold mx-2">Influential</span>?
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-6">
                      Join hundreds of sales teams who have transformed their outbound with AI-driven social selling.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <motion.a 
                        href="#" 
                        className="button-primary text-md px-6 py-3 flex items-center group"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Start Free Trial
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.a>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-5 h-5 text-convrt-purple mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        No credit card required
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/3 flex justify-center">
                    <motion.div 
                      className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-4">
                        <div className="text-convrt-dark-blue font-bold">Key Benefits</div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {[
                          "Personalized AI outreach",
                          "Increased response rates",
                          "Relationship intelligence",
                          "Time-saving automation"
                        ].map((benefit, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-convrt-purple/10 flex items-center justify-center mr-3">
                              <svg className="w-3 h-3 text-convrt-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-sm text-convrt-dark-blue">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0"
            >
              <h3 className="text-xl font-bold text-convrt-dark-blue">Convrt.ai</h3>
              <p className="text-sm text-gray-600 mt-1">© {new Date().getFullYear()} Convrt.ai. All rights reserved.</p>
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
