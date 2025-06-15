
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Shield, Clock, Users } from 'lucide-react';
import ProblemStatement from '@/components/ProblemStatement';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';

const SalePageFinalLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header Banner */}
      <div className="bg-green-600 text-white py-3 px-6 text-center">
        <span className="text-sm font-medium">Get 25% Off This Weekend With Code: EURL1</span>
      </div>

      {/* Main Content Container */}
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Product Hero Image */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop" 
            alt="Design Service Mockup" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Save up to 30%
          </div>
        </div>

        {/* Product Badge Row */}
        <div className="bg-blue-500 text-white py-2 px-6 text-center">
          <span className="text-sm font-medium">Save up to 30% with today's Subscribe & Save Deal!</span>
        </div>

        {/* Social Proof */}
        <div className="p-6 text-center">
          <div className="flex justify-center items-center mb-2">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-600 font-inter">Loved by 500+ Business Owners</span>
          </div>
        </div>

        {/* Product Title */}
        <div className="px-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 font-satoshi leading-tight">
            Professional Design Service for Converting Websites
          </h1>
          <div className="flex items-center mb-3">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-600 font-inter">Excellent 5.0 Trusted by 500+</span>
          </div>
          <p className="text-sm text-gray-600 font-inter leading-relaxed">
            Psychology-driven design that converts visitors into customers - boosts conversions, eliminates guesswork naturally.
          </p>
        </div>

        {/* Urgency Banner */}
        <div className="mx-6 mb-6 bg-red-100 border border-red-200 rounded-lg p-3 flex items-center">
          <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
            !
          </div>
          <span className="text-sm text-red-700 font-medium font-inter">Order by today get FREE consultation call</span>
        </div>

        {/* Package Selection */}
        <div className="px-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
            <span className="font-medium text-gray-900 font-satoshi">Select your package: $2,997</span>
          </div>
          <p className="text-sm text-gray-600 mb-4 font-inter">One Time Purchase</p>
          
          {/* Package Options */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <input type="radio" name="package" className="mr-3" />
                <div>
                  <div className="font-medium font-satoshi">Premium Package</div>
                  <div className="text-sm text-gray-500 font-inter">$2,997/each</div>
                </div>
              </div>
              <div className="font-bold font-satoshi">$2,997</div>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <input type="radio" name="package" className="mr-3" />
                <div>
                  <div className="font-medium font-satoshi">Standard Package</div>
                  <div className="text-sm text-gray-500 font-inter">$1,997/each</div>
                </div>
              </div>
              <div className="font-bold font-satoshi">$1,997</div>
              <div className="text-xs text-green-600 font-medium ml-2 font-inter">Save 15%</div>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <input type="radio" name="package" className="mr-3" />
                <div>
                  <div className="font-medium font-satoshi">Basic Package</div>
                  <div className="text-sm text-gray-500 font-inter">$997/each</div>
                </div>
              </div>
              <div className="font-bold font-satoshi">$997</div>
              <div className="text-xs text-green-600 font-medium ml-2 font-inter">Save 25%</div>
            </div>
            
            <div className="flex items-center justify-between p-3 border-2 border-green-500 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <input type="radio" name="package" className="mr-3" defaultChecked />
                <div>
                  <div className="font-medium font-satoshi">Complete Package</div>
                  <div className="text-sm text-gray-500 font-inter">$597/each</div>
                </div>
              </div>
              <div className="font-bold font-satoshi">$597</div>
              <div className="text-xs text-green-600 font-medium ml-2 font-inter">Save 30%</div>
            </div>
          </div>
        </div>

        {/* Subscribe & Save Section */}
        <div className="mx-6 mb-6 border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="flex items-center mb-3">
            <input type="checkbox" className="mr-3" />
            <div>
              <div className="font-medium text-green-600 font-satoshi">Subscribe & Save</div>
              <div className="text-sm text-gray-600 font-inter">Was: $597</div>
            </div>
            <div className="ml-auto font-bold text-green-600 text-lg font-satoshi">$297</div>
          </div>
          <div className="space-y-2 text-sm text-gray-600 font-inter">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span>Save 25% today and every time!</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span>Delivered every 2 months</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span>Free, Fast Shipping</span>
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="px-6 mb-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-bold text-lg flex items-center justify-center font-satoshi"
          >
            🛒 Add to Cart - $297
          </motion.button>
          <div className="text-center text-sm text-blue-600 mt-2 underline font-inter">
            Payment Options
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center items-center space-x-8 px-6 mb-8">
          <div className="text-center">
            <Shield className="w-8 h-8 mx-auto mb-1 text-green-600" />
            <div className="text-xs text-gray-600 font-inter">Secure Payment</div>
          </div>
          <div className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-1 text-green-600" />
            <div className="text-xs text-gray-600 font-inter">Free Shipping</div>
          </div>
          <div className="text-center">
            <Users className="w-8 h-8 mx-auto mb-1 text-green-600" />
            <div className="text-xs text-gray-600 font-inter">500+ Happy</div>
          </div>
        </div>
      </div>

      {/* Official Landing Page Content - Starting from Problem Statement */}
      <div className="max-w-full bg-white">
        <ProblemStatement />
        <HowItWorks />
        <Testimonials />
        
        {/* CTA Section from Official Landing */}
        <section className="py-16 px-6" id="cta">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-2xl overflow-hidden relative bg-convrt-dark-blue">
              {/* Background Image with Overlay */}
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
    </div>
  );
};

export default SalePageFinalLanding;
