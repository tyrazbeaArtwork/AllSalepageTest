
import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const BusinessBeforeAfterComparison = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-r from-amber-100 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Professional Design Services That Drive Results
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your business image with designs that convert visitors into customers and boost your revenue by 300%
          </p>
        </div>

        {/* Service Showcase */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-orange-500 text-white py-2 px-4 text-center font-bold">
              PREMIUM DESIGN SERVICES - TRUSTED BY 500+ BUSINESSES
            </div>
            <div className="bg-orange-100 p-2 text-center">
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                ⭐ 4.9/5 Rating | Portfolio Review Available
              </span>
            </div>
            <div className="p-6">
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 border">
                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm inline-block mb-3">
                  Get 50% Off This Week With Code: DESIGN50
                </div>
                
                <h3 className="font-bold text-xl mb-2">Boost Sales by 300%</h3>
                <p className="text-sm text-gray-600 mb-4">With Professional Design That Converts</p>
                
                <div className="h-32 bg-gradient-to-br from-orange-100 to-amber-50 rounded mb-4 flex items-center justify-center relative">
                  <span className="text-orange-600 font-medium">Complete Design Package</span>
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
                    Pro Choice
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Outstanding 4.9 | Loved by 500+ Business Owners</span>
                  </div>
                  <p className="text-sm font-medium">Featured in Business Design Weekly</p>
                </div>

                <h4 className="font-bold mb-2">Complete Brand & Design System That Actually Converts</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Stop losing customers to poor design. Our proven system creates professional branding that builds trust and drives sales.
                </p>

                <div className="bg-orange-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Order today get FREE brand strategy consultation</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium mb-2">○ Select your package $2,997</h5>
                  <div className="text-sm text-gray-600 mb-2">Complete Design System</div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="border-2 border-orange-500 p-2 text-center text-sm rounded bg-orange-50">
                      <div className="font-medium">Premium Package</div>
                      <div className="text-xs">Everything Included</div>
                    </div>
                    <div className="border p-2 text-center text-sm rounded">
                      <div>Basic Package</div>
                      <div className="text-xs">Logo + Website Only</div>
                    </div>
                  </div>

                  <div className="bg-slate-100 p-3 rounded-lg mb-4">
                    <h5 className="font-medium mb-2">○ What's Included</h5>
                    <div className="flex items-center text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Complete brand identity design</span>
                    </div>
                    <div className="flex items-center text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Professional website design</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Marketing materials package</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium flex items-center justify-center">
                  🎨 START PROJECT - $2,997 (Save 50%)
                </button>
                <div className="text-center text-xs text-gray-500 mt-2">Secure Payment • 100% Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-orange-500 mb-2">300%</div>
            <div className="text-sm text-gray-600">Sales Increase</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-500 mb-2">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-500 mb-2">4.9★</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBeforeAfterComparison;
