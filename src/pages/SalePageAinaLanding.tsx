
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Shield, Clock, Users } from 'lucide-react';

const SalePageAinaLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
          <span className="text-sm font-medium">Conversion rate: ● 4.20%</span>
        </div>
      </div>

      {/* Top Offer Banner */}
      <div className="bg-blue-700 text-white py-2 px-6 text-center">
        <span className="text-sm font-bold">Get 30% Off This Week Only With Code: DESIGN30</span>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">DesignPro</div>
          <div className="flex items-center space-x-4">
            <span className="w-6 h-6 border border-gray-300"></span>
            <span className="w-6 h-6 border border-gray-300"></span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Problem Section - Urgency Banner */}
        <div className="bg-blue-100 text-blue-800 py-4 px-6 text-center border-b">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg font-bold mb-2"
          >
            Save up to 30%
          </motion.h1>
          <p className="text-sm">With today's Design Service offer</p>
        </div>

        {/* Product Hero */}
        <div className="p-6">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8 mb-6 text-center relative">
            <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              100% Custom
            </div>
            <div className="text-blue-600 font-bold text-lg mb-2">Professional Design Service</div>
            <div className="w-24 h-24 bg-blue-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="text-blue-600 text-sm font-medium">Design Mockup</div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">Excellent 5.0 | Trusted by 500+ Businesses</span>
            </div>
            <p className="text-sm font-medium text-gray-800">Loved by 500+ Business Owners</p>
          </div>

          {/* Problem Statement */}
          <div className="mb-6">
            <h2 className="font-bold text-xl mb-3 text-gray-900">
              Is Your Website Losing Money Every Day?
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Poor design kills conversions. Every visitor who leaves without buying is lost revenue. Don't let bad design cost you thousands in sales.
            </p>
          </div>

          {/* Solution Benefits */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex items-center mb-3">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm font-medium">Order by today get FREE consultation call</span>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">○ Select your package $2,997</h3>
            <div className="text-sm text-gray-600 mb-3">Professional Design Service</div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="border-2 border-blue-500 bg-blue-50 p-3 text-center text-sm rounded">
                <div className="font-medium text-blue-600">Premium Package</div>
                <div className="text-xs text-blue-500">Complete Solution</div>
              </div>
              <div className="border border-gray-300 p-3 text-center text-sm rounded">
                <div className="text-gray-700">Standard Package</div>
                <div className="text-xs text-gray-500">Basic Design</div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h4 className="font-medium mb-3">○ What's Included</h4>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Psychology-driven design</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Mobile-optimized layout</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Conversion optimization</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>A/B testing setup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-8">
            <div className="flex space-x-3 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
              ))}
            </div>
            <h3 className="font-bold text-lg mb-3">Design Services for High-Converting Websites</h3>
            <p className="text-sm text-gray-600 mb-4">
              "Increased our conversion rate by 340% in just 30 days. The PASTA design framework they used was incredible - every element was strategically placed to guide visitors to purchase."
            </p>
            <div className="text-sm font-medium text-gray-800">- Sarah Chen, E-commerce Owner</div>
          </div>

          {/* Action Section - CTA */}
          <div className="space-y-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-bold text-lg flex items-center justify-center group"
            >
              🚀 ORDER NOW - $2,997
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
            
            <div className="text-center text-xs text-gray-500">
              Secure Payment • 30-Day Money-Back Guarantee
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-6 text-xs text-gray-500 mb-8">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-1" />
              <span>Secure Checkout</span>
            </div>
            <div>•</div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>48h Delivery</span>
            </div>
            <div>•</div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>500+ Happy Clients</span>
            </div>
          </div>

          {/* Alternative Action */}
          <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-medium transition-colors mb-6">
            Get Free Consultation First
          </button>

          {/* Subscribe & Save Option */}
          <div className="border border-gray-200 rounded-lg p-4 mb-6">
            <h4 className="font-bold mb-3">○ Subscribe & Save</h4>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Save 25% today and every time!</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Priority support included</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Free updates & maintenance</span>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-bold flex items-center justify-center group"
          >
            Add to Cart - $2,997
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
          
          <div className="text-center text-xs text-gray-500 mt-2">
            Payment options available at checkout
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalePageAinaLanding;
