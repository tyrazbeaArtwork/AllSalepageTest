
import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const HousewifeBeforeAfterComparison = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Time-Saving Kitchen Solutions for Busy Moms
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your daily cooking routine with this revolutionary kitchen organizer that saves 2+ hours every day
          </p>
        </div>

        {/* Product Showcase */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-500 text-white py-2 px-4 text-center font-bold">
              BESTSELLER - TRUSTED BY 10,000+ MOMS
            </div>
            <div className="bg-blue-100 p-2 text-center">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                ⭐ 4.8/5 Rating | Free Shipping Today Only
              </span>
            </div>
            <div className="p-6">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 border">
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm inline-block mb-3">
                  Get 20% Off Today With Code: MOM20
                </div>
                
                <h3 className="font-bold text-xl mb-2">Save 2+ Hours Daily</h3>
                <p className="text-sm text-gray-600 mb-4">With the Ultimate Kitchen Organization System</p>
                
                <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded mb-4 flex items-center justify-center relative">
                  <span className="text-blue-600 font-medium">Smart Kitchen Organizer Set</span>
                  <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                    Mom's Choice
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Excellent 4.8 | Loved by 10,000+ Busy Moms</span>
                  </div>
                  <p className="text-sm font-medium">Featured in Mom's Daily Magazine</p>
                </div>

                <h4 className="font-bold mb-2">Complete Kitchen Organization System That Actually Works</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Stop wasting time searching for ingredients. This proven system organizes everything perfectly - saves hours and reduces kitchen stress.
                </p>

                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Order today get FREE recipe organization guide</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium mb-2">○ Select your package $89.99</h5>
                  <div className="text-sm text-gray-600 mb-2">Complete Organization System</div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="border-2 border-blue-500 p-2 text-center text-sm rounded bg-blue-50">
                      <div className="font-medium">Complete Set</div>
                      <div className="text-xs">Everything Included</div>
                    </div>
                    <div className="border p-2 text-center text-sm rounded">
                      <div>Starter Set</div>
                      <div className="text-xs">Basic Organization</div>
                    </div>
                  </div>

                  <div className="bg-slate-100 p-3 rounded-lg mb-4">
                    <h5 className="font-medium mb-2">○ What's Included</h5>
                    <div className="flex items-center text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>10-piece organizer set</span>
                    </div>
                    <div className="flex items-center text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Quick setup guide</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Bonus recipe organizer</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center">
                  🛒 ORDER NOW - $89.99 (Save 20%)
                </button>
                <div className="text-center text-xs text-gray-500 mt-2">Secure Payment • 30-Day Money Back Guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-500 mb-2">2+</div>
            <div className="text-sm text-gray-600">Hours Saved Daily</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-500 mb-2">10K+</div>
            <div className="text-sm text-gray-600">Happy Moms</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-orange-500 mb-2">4.8★</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HousewifeBeforeAfterComparison;
