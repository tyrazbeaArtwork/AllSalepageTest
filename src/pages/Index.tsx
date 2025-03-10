
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import HowItWorks from '@/components/HowItWorks';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import { motion } from 'framer-motion';

const Index = () => {
  // Intersection Observer for scroll animations
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

    // Target all sections for animation
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
        {/* Main Hero Section */}
        <Hero />
        
        {/* Problem Statement Section - with blended transition */}
        <div className="relative">
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-convrt-light-gray/0 z-10"></div>
          <ProblemStatement />
        </div>
        
        {/* How It Works Section - with blended transition */}
        <div className="relative">
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-convrt-light-gray/50 to-white/0 z-10"></div>
          <HowItWorks />
        </div>
        
        {/* Product Showcase Section - with blended transition */}
        <div className="relative">
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-convrt-purple/5 z-10"></div>
          <ProductShowcase />
        </div>
        
        {/* Testimonials Section - with blended transition */}
        <div className="relative">
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-convrt-purple/5 to-white/0 z-10"></div>
          <Testimonials />
        </div>
        
        {/* Pricing Section - with blended transition */}
        <div className="relative">
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-convrt-light-gray/30 z-10"></div>
          <Pricing />
        </div>
        
        {/* Final CTA Section */}
        <section className="relative py-32 overflow-hidden" id="cta">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-convrt-light-gray/30 to-white"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[400px] -left-[300px] w-[800px] h-[800px] rounded-full bg-[#6936F5]/5 blur-3xl"></div>
            <div className="absolute -bottom-[400px] -right-[300px] w-[800px] h-[800px] rounded-full bg-[#6936F5]/5 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="heading-lg mb-6 text-convrt-dark-blue">
                Ready to Move from 
                <span className="text-[#6936F5] font-extrabold mx-2">Ignored</span> 
                to 
                <span className="text-[#6936F5] font-extrabold mx-2">Influential</span>?
              </h2>
              
              <motion.button 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="button-primary text-lg px-8 py-4 shadow-xl shadow-convrt-purple/10 hover:shadow-2xl hover:shadow-convrt-purple/20"
              >
                Start Free – No Credit Card Needed
              </motion.button>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, staggerChildren: 0.1, delayChildren: 0.6 }}
                viewport={{ once: true }}
                className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
              >
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-full bg-[#6936F5]/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#6936F5]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-medium text-convrt-dark-blue">GDPR Compliant</span>
                </motion.div>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-full bg-[#6936F5]/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#6936F5]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-medium text-convrt-dark-blue">Secure & Encrypted</span>
                </motion.div>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-full bg-[#6936F5]/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#6936F5]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 14L15 8M10 8H15V13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-medium text-convrt-dark-blue">24/7 Support</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <footer className="relative overflow-hidden bg-gradient-to-b from-white to-convrt-light-gray/30 py-16">
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
              <a href="#" className="text-gray-600 hover:text-[#6936F5] transition-colors">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-[#6936F5] transition-colors">Terms</a>
              <a href="#" className="text-gray-600 hover:text-[#6936F5] transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
