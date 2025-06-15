
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Shield, Clock, Users } from 'lucide-react';

const SalePageAinaLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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
            <span className="text-sm text-gray-600">Loved by 500+ Business Owners</span>
          </div>
        </div>

        {/* Product Title */}
        <div className="px-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Professional Design Service for Converting Websites
          </h1>
          <div className="flex items-center mb-3">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-600">Excellent 5.0 Trusted by 500+</span>
          </div>
          <p className="text-sm text-gray-600">
            Psychology-driven design that converts visitors into customers - boosts conversions, eliminates guesswork naturally.
          </p>
        </div>

        {/* Urgency Banner */}
        <div className="mx-6 mb-6 bg-red-100 border border-red-200 rounded-lg p-3 flex items-center">
          <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
            !
          </div>
          <span className="text-sm text-red-700 font-medium">Order by today get FREE consultation call</span>
        </div>

        {/* Package Selection */}
        <div className="px-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
            <span className="font-medium text-gray-900">Select your package: $2,997</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">One Time Purchase</p>
          
          {/* Package Options */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <input type="radio" name="package" className="mr-3" />
                <div>
                  <div className="font-medium">Premium Package</div>
                  <div className="text-sm text-gray-500">$2,997/each</div>
                </div>
              </div>
              <div className="font-bold">$2,997</div>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <input type="radio" name="package" className="mr-3" />
                <div>
                  <div className="font-medium">Standard Package</div>
                  <div className="text-sm text-gray-500">$1,997/each</div>
                </div>
              </div>
              <div className="font-bold">$1,997</div>
              <div className="text-xs text-green-600 font-medium ml-2">Save 15%</div>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <input type="radio" name="package" className="mr-3" />
                <div>
                  <div className="font-medium">Basic Package</div>
                  <div className="text-sm text-gray-500">$997/each</div>
                </div>
              </div>
              <div className="font-bold">$997</div>
              <div className="text-xs text-green-600 font-medium ml-2">Save 25%</div>
            </div>
            
            <div className="flex items-center justify-between p-3 border-2 border-green-500 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <input type="radio" name="package" className="mr-3" defaultChecked />
                <div>
                  <div className="font-medium">Complete Package</div>
                  <div className="text-sm text-gray-500">$597/each</div>
                </div>
              </div>
              <div className="font-bold">$597</div>
              <div className="text-xs text-green-600 font-medium ml-2">Save 30%</div>
            </div>
          </div>
        </div>

        {/* Subscribe & Save Section */}
        <div className="mx-6 mb-6 border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="flex items-center mb-3">
            <input type="checkbox" className="mr-3" />
            <div>
              <div className="font-medium text-green-600">Subscribe & Save</div>
              <div className="text-sm text-gray-600">Was: $597</div>
            </div>
            <div className="ml-auto font-bold text-green-600 text-lg">$297</div>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
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
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-bold text-lg flex items-center justify-center"
          >
            🛒 Add to Cart - $297
          </motion.button>
          <div className="text-center text-sm text-blue-600 mt-2 underline">
            Payment Options
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center items-center space-x-8 px-6 mb-8">
          <div className="text-center">
            <Shield className="w-8 h-8 mx-auto mb-1 text-green-600" />
            <div className="text-xs text-gray-600">Secure Payment</div>
          </div>
          <div className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-1 text-green-600" />
            <div className="text-xs text-gray-600">Free Shipping</div>
          </div>
          <div className="text-center">
            <Users className="w-8 h-8 mx-auto mb-1 text-green-600" />
            <div className="text-xs text-gray-600">500+ Happy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalePageAinaLanding;
