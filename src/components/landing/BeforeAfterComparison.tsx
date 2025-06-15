
import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const BeforeAfterComparison = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-r from-orange-100 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Psychology-Driven Design That Converts
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how our PASTA design system transforms your business with proven conversion strategies
          </p>
        </div>

        {/* Optimized Design Example */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-green-500 text-white py-2 px-4 text-center font-bold">
              HIGH-CONVERTING DESIGN
            </div>
            <div className="bg-green-100 p-2 text-center">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                Conversion rate: ● 4.2% (6x improvement)
              </span>
            </div>
            <div className="p-6">
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 border">
                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm inline-block mb-3">
                  Get 30% Off This Weekend With Code: DESIGN30
                </div>
                
                <h3 className="font-bold text-xl mb-2">Save up to 30%</h3>
                <p className="text-sm text-gray-600 mb-4">With today's Design Package offer</p>
                
                <div className="h-32 bg-gradient-to-br from-orange-100 to-orange-50 rounded mb-4 flex items-center justify-center relative">
                  <span className="text-orange-600 font-medium">Professional Design Mockup</span>
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
                    100% Custom
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Excellent 5.0 | Trusted by 500+ Businesses</span>
                  </div>
                  <p className="text-sm font-medium">Loved by 500+ Business Owners</p>
                </div>

                <h4 className="font-bold mb-2">Professional Landing Page Design That Actually Converts</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Psychology-driven design with proven PASTA framework - increases conversions, builds trust, and drives sales naturally.
                </p>

                <div className="bg-orange-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Order by today get FREE consultation call</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium mb-2">○ Select your package $2,997</h5>
                  <div className="text-sm text-gray-600 mb-2">Professional Design Service</div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="border-2 border-orange-500 p-2 text-center text-sm rounded bg-orange-50">
                      <div className="font-medium">Premium Package</div>
                      <div className="text-xs">Complete Solution</div>
                    </div>
                    <div className="border p-2 text-center text-sm rounded">
                      <div>Standard Package</div>
                      <div className="text-xs">Basic Design</div>
                    </div>
                  </div>

                  <div className="bg-slate-100 p-3 rounded-lg mb-4">
                    <h5 className="font-medium mb-2">○ What's Included</h5>
                    <div className="flex items-center text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Psychology-driven design</span>
                    </div>
                    <div className="flex items-center text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Mobile-optimized layout</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Conversion optimization</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium flex items-center justify-center">
                  🚀 ORDER NOW - $2,997
                </button>
                <div className="text-center text-xs text-gray-500 mt-2">Secure Payment • 30-Day Guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-500 mb-2">6x</div>
            <div className="text-sm text-gray-600">Higher Conversion Rate</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-500 mb-2">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-orange-500 mb-2">30%</div>
            <div className="text-sm text-gray-600">Average Revenue Increase</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterComparison;
