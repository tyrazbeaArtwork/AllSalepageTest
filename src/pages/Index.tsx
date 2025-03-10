
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import HowItWorks from '@/components/HowItWorks';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';

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
        
        <section className="relative py-24 overflow-hidden bg-convrt-purple/5" id="cta">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-convrt-dark-blue leading-tight">
                  Ready to Move from 
                  <span className="text-convrt-purple font-extrabold mx-2">Ignored</span> 
                  to 
                  <span className="text-convrt-purple font-extrabold mx-2">Influential</span>?
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join hundreds of sales teams who have transformed their outbound with AI-driven social selling.
                </p>
                
                <motion.button 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="button-primary text-lg px-8 py-4 shadow-xl shadow-convrt-purple/10 hover:shadow-2xl hover:shadow-convrt-purple/20 rounded-full"
                >
                  Start Free – No Credit Card Needed
                </motion.button>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
                >
                  {[
                    {
                      icon: (
                        <svg className="w-6 h-6 text-convrt-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 14L15 8M10 8H15V13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ),
                      label: "GDPR Compliant"
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6 text-convrt-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ),
                      label: "Secure & Encrypted"
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6 text-convrt-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 14L15 8M10 8H15V13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ),
                      label: "24/7 Support"
                    }
                  ].map((item, i) => (
                    <div 
                      key={i}
                      className="flex flex-col items-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-convrt-purple/10 flex items-center justify-center mb-3">
                        {item.icon}
                      </div>
                      <span className="font-medium text-convrt-dark-blue">{item.label}</span>
                    </div>
                  ))}
                </motion.div>
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
