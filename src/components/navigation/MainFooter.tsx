
import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const MainFooter = () => {
  return (
    <footer className="relative mt-20 py-16 px-6 bg-gradient-to-br from-[#1a1f36] via-[#1f2541] to-[#151a2e] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Logo & Social Media */}
          <div className="space-y-6">
            <img 
              src="/lovable-uploads/ce207080-f6c2-430d-9621-79d32ab08655.png" 
              alt="Convrt.ai Logo" 
              className="h-12 filter brightness-0 invert"
            />
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Center Column - Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Transform Your Journey</h3>
            <p className="text-white/80 leading-relaxed">
              Experience the power of AI-driven solutions designed to elevate your business. From social selling to copywriting mastery, we provide the tools and strategies you need to succeed in today's digital landscape.
            </p>
            <p className="text-white/60 text-sm">
              Join thousands of professionals who have transformed their approach to marketing and sales with our proven methodologies.
            </p>
          </div>

          {/* Right Column - Facebook Embed */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-center text-white/80">
                <Facebook className="w-12 h-12 mx-auto mb-4 opacity-60" />
                <p className="text-sm">Follow us on Facebook for the latest updates, tips, and success stories.</p>
                <button className="mt-4 px-6 py-2 bg-white/30 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/40 transition-all duration-300">
                  Visit Our Page
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Convrt.ai. All rights reserved. Transforming businesses through AI-powered solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
