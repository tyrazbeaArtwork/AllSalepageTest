
import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const FreelanceBeforeAfterComparison = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Premium Design Services for Creative Professionals
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Elevate your freelance career with designs that attract premium clients and boost your rates by 400%
          </p>
        </div>

        {/* Service Showcase */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-4 text-center font-bold">
              PREMIUM DESIGN SERVICES - TRUSTED BY 300+ FREELANCERS
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-2 text-center">
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm">
                ⭐ 4.9/5 Rating | Portfolio Review Available
              </span>
            </div>
            <div className="p-6">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-4 border">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm inline-block mb-3">
                  Get 50% Off This Week With Code: FREELANCE50
                </div>
                
                <h3 className="font-bold text-xl mb-2">Boost Rates by 400%</h3>
                <p className="text-sm text-gray-600 mb-4">With Premium Portfolio That Attracts High-Paying Clients</p>
                
                <div className="h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded mb-4 flex items-center justify-center relative">
                  <span className="text-teal-700 font-medium">Complete Portfolio Package</span>
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs">
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
                    <span className="ml-2 text-sm text-gray-600">Outstanding 4.9 | Loved by 300+ Freelancers</span>
                  </div>
                  <p className="text-sm font-medium">Featured in Freelancer Design Weekly</p>
                </div>

                <h4 className="font-bold mb-2">Complete Portfolio & Brand System That Actually Converts</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Stop competing on price. Our proven system creates premium portfolios that attract high-paying clients and command premium rates.
                </p>

                <div className="bg-stone-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Order today get FREE portfolio strategy consultation</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium mb-2">○ Select your package $1,997</h5>
                  <div className="text-sm text-gray-600 mb-2">Complete Portfolio System</div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="border-2 border-teal-500 p-2 text-center text-sm rounded bg-gradient-to-br from-teal-50 to-cyan-50">
                      <div className="font-medium">Premium Package</div>
                      <div className="text-xs">Everything Included</div>
                    </div>
                    <div className="border p-2 text-center text-sm rounded">
                      <div>Basic Package</div>
                      <div className="text-xs">Portfolio + Website Only</div>
                    </div>
                  </div>

                  <div className="bg-slate-100 p-3 rounded-lg mb-4">
                    <h5 className="font-medium mb-2">○ What's Included</h5>
                    <div className="flex items-center text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Premium portfolio design</span>
                    </div>
                    <div className="flex items-center text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Professional brand identity</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Client acquisition materials</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-3 rounded-lg font-medium flex items-center justify-center">
                  🎨 START PROJECT - $1,997 (Save 50%)
                </button>
                <div className="text-center text-xs text-gray-500 mt-2">Secure Payment • 100% Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent mb-2">400%</div>
            <div className="text-sm text-gray-600">Rate Increase</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-500 mb-2">300+</div>
            <div className="text-sm text-gray-600">Happy Freelancers</div>
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

export default FreelanceBeforeAfterComparison;
