
import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const MarketingBeforeAfterComparison = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Master High-Converting Copywriting with Our Complete Course
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your marketing with proven copywriting frameworks that have generated millions in sales for 5,000+ marketers
          </p>
        </div>

        {/* Product Showcase with Dog Shampoo Style */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 px-4 text-center font-bold">
              MARKETING COPYWRITING MASTERY - TRUSTED BY 5,000+ MARKETERS
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-2 text-center">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full text-sm">
                ⭐ 4.9/5 Rating | Save up to 30%
              </span>
            </div>
            <div className="p-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm inline-block mb-3">
                  Save up to 30%
                </div>
                
                <h3 className="font-bold text-xl mb-2">High-Converting Copywriting for Marketers, Entrepreneurs & Agencies</h3>
                <p className="text-sm text-gray-600 mb-4">Complete Copywriting Framework That Actually Converts</p>
                
                <div className="h-32 bg-gradient-to-br from-blue-100 to-green-100 rounded mb-4 flex items-center justify-center relative">
                  <span className="text-green-700 font-medium">100% Natural | Organic | pH Balanced</span>
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs">
                    Bestseller
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Excellent 4.9 | Loved by 5,000+ Marketers</span>
                  </div>
                  <p className="text-sm font-medium">Nourishing blend of AIDA, PASTA & STAR frameworks - soothes conversion rates, restores sales, and eliminates poor performance naturally.</p>
                </div>

                <div className="bg-red-50 border border-red-200 p-3 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-2 flex items-center justify-center">
                      <span className="text-white text-xs">!</span>
                    </div>
                    <span className="text-sm">Order by May 25 get FREE Marketing Templates</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium mb-2">🎯 Select your package: $39.99</h5>
                  <div className="text-sm text-gray-600 mb-2">Complete Copywriting Course</div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="border-2 border-green-500 p-2 text-center text-sm rounded bg-gradient-to-br from-green-50 to-emerald-50">
                      <div className="font-medium">4 Courses</div>
                      <div className="text-xs text-green-600">Save 30%</div>
                      <div className="text-xs">$159.96</div>
                    </div>
                    <div className="border p-2 text-center text-sm rounded">
                      <div>3 Courses</div>
                      <div className="text-xs">Save 25%</div>
                      <div className="text-xs">$134.97</div>
                    </div>
                  </div>

                  <div className="bg-slate-100 p-3 rounded-lg mb-4">
                    <h5 className="font-medium mb-2">📋 What's Included</h5>
                    <div className="flex items-center text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Complete AIDA, PASTA & STAR frameworks</span>
                    </div>
                    <div className="flex items-center text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>50+ proven copy templates</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Lifetime access & updates</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                    <h6 className="font-medium text-green-800 mb-2">Subscribe & Save</h6>
                    <div className="text-sm text-green-700">Was: $39.99</div>
                    <div className="text-lg font-bold text-green-800">$29.99</div>
                    <div className="text-xs text-green-600 mb-2">
                      ✓ Save 25% today and every time!
                      <br />
                      ✓ Delivered every 2 months
                      <br />
                      ✓ Free, Fast Shipping
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-lg font-medium flex items-center justify-center">
                  🛒 Add to Cart - $29.99
                </button>
                <div className="text-center text-xs text-gray-500 mt-2">Secure Payment • 30-Day Money Back Guarantee</div>
              </div>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8 flex justify-center space-x-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-600">Secure Payment</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-600">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-600">5,000+ Happy</span>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">5,000+</div>
            <div className="text-sm text-gray-600">Success Stories</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-500 mb-2">50+</div>
            <div className="text-sm text-gray-600">Copy Templates</div>
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

export default MarketingBeforeAfterComparison;
