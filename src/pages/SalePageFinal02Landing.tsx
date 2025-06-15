import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Shield, Clock, Users } from 'lucide-react';
import ProblemStatement from '@/components/ProblemStatement';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';

const SalePageFinal02Landing = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header Banner - Full Width */}
      <div className="bg-green-600 text-white py-4 px-6 text-center w-full">
        <span className="text-base md:text-lg font-medium font-inter">Get 25% Off This Weekend With Code: EURL1</span>
      </div>

      {/* Mobile-First Hero Section */}
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Main Hero Content */}
        <div className="px-6 py-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4 font-satoshi leading-tight">
              Why Traditional Outbound Is Dead
            </h1>
            <p className="text-xl text-red-600 font-bold mb-2 font-satoshi">
              Cold Outreach Doesn't Work Anymore.
            </p>
            <p className="text-xl text-green-600 font-bold mb-6 font-satoshi">
              AI Organic Outbound Does
            </p>
          </motion.div>

          {/* Social Proof */}
          <div className="flex justify-center items-center mb-6">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-600 font-inter">Loved by 500+ Business Owners</span>
          </div>

          {/* Product Image */}
          <div className="relative mb-6">
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop" 
              alt="AI Outbound Service" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Save up to 50%
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-6 mb-6 text-white">
            <div className="text-center">
              <div className="text-gray-300 line-through text-lg mb-2 font-inter">Regular: $3,994</div>
              <div className="text-4xl font-bold mb-2 font-satoshi">$1,997</div>
              <div className="text-green-400 font-medium font-inter">This Week Only: 50% OFF</div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center font-satoshi mb-4"
          >
            START PROJECT - Save $1,997 Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>

          {/* Secondary CTA */}
          <button className="w-full border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium py-3 px-6 rounded-xl transition-colors font-inter mb-6">
            View Portfolio Examples
          </button>

          {/* Urgency Elements */}
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="font-inter">Offer expires this Friday</span>
            </div>
            <div>•</div>
            <div className="font-inter">Only 5 spots available</div>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-1 text-green-600" />
              <div className="text-xs text-gray-600 font-inter">Secure Payment</div>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-1 text-green-600" />
              <div className="text-xs text-gray-600 font-inter">Money Back</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-1 text-green-600" />
              <div className="text-xs text-gray-600 font-inter">500+ Happy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Landing Page Content */}
      <div className="max-w-full bg-white">
        <ProblemStatement />
        <HowItWorks />
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-16 px-6" id="cta">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-2xl overflow-hidden relative bg-convrt-dark-blue">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/lovable-uploads/eada8c8b-332c-4ac7-813d-42884f942368.png" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover object-center opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-convrt-dark-blue via-convrt-dark-blue/90 to-convrt-dark-blue/80"></div>
              </div>
              
              <div className="relative z-10 p-12 md:p-16 text-white">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="max-w-lg"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight font-satoshi">
                    Ready to Move from 
                    <span className="text-[#EA384C] font-extrabold"> Ignored </span> 
                    to 
                    <span className="text-convrt-purple font-extrabold"> Influential</span>?
                  </h2>
                  
                  <p className="text-lg text-gray-100 mb-8 font-inter">
                    Join hundreds of sales teams who have transformed their outbound with AI-driven social selling.
                  </p>
                  
                  <motion.button 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-convrt-purple hover:bg-convrt-purple/90 text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center text-lg font-satoshi"
                  >
                    Start Free – No Credit Card Needed
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-700 to-slate-800 text-white p-4 shadow-lg">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-3">
            <div className="text-gray-300 line-through text-sm font-inter">Regular: $3,994</div>
            <div className="text-2xl font-bold font-satoshi">$1,997</div>
            <div className="text-green-400 text-sm font-medium font-inter">This Week Only: 50% OFF</div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-xl text-lg flex items-center justify-center font-satoshi mb-2"
          >
            START PROJECT - Save $1,997 Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
          
          <button className="w-full border border-white/30 text-white hover:bg-white/10 font-medium py-2 px-6 rounded-xl transition-colors text-sm font-inter">
            View Portfolio Examples
          </button>
          
          <div className="flex justify-center items-center mt-2 space-x-4 text-xs text-gray-300">
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              <span className="font-inter">Offer expires this Friday</span>
            </div>
            <div>•</div>
            <div className="font-inter">Only 5 spots available</div>
          </div>
        </div>
      </div>

      {/* Add bottom padding to account for sticky footer */}
      <div className="h-32"></div>
    </div>
  );
};

export default SalePageFinal02Landing;
