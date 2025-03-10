
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import HowItWorks from '@/components/HowItWorks';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-convrt-dark-blue">
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <HowItWorks />
        <ProductShowcase />
        <Testimonials />
        <Pricing />
        
        {/* Final CTA Section */}
        <section className="container-section text-center" id="cta">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">Ready to Move from Ignored to Influential?</h2>
            <button className="button-primary text-lg px-8 py-4">
              Start Free – No Credit Card Needed
            </button>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 rounded-full bg-convrt-cyan/10 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-convrt-cyan" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-medium">GDPR Compliant</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 rounded-full bg-convrt-cyan/10 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-convrt-cyan" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-medium">Secure & Encrypted</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 rounded-full bg-convrt-cyan/10 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-convrt-cyan" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 14L15 8M10 8H15V13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-convrt-dark-blue/5 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-convrt-dark-blue">Convrt.ai</h3>
              <p className="text-sm text-gray-600 mt-2">© {new Date().getFullYear()} Convrt.ai. All rights reserved.</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-convrt-cyan transition-colors">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-convrt-cyan transition-colors">Terms</a>
              <a href="#" className="text-gray-600 hover:text-convrt-cyan transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
