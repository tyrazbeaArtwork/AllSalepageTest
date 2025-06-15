
import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const EbookBeforeAfterComparison = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Master Digital Marketing with Our Comprehensive Ebook
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your business with proven strategies that have helped 10,000+ entrepreneurs scale their online presence
          </p>
        </div>

        {/* Ebook Showcase */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 text-center font-bold">
              DIGITAL MARKETING MASTERY - TRUSTED BY 10,000+ ENTREPRENEURS
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-2 text-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm">
                ⭐ 4.8/5 Rating | Free Preview Available
              </span>
            </div>
            <div className="p-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm inline-block mb-3">
                  Get 70% Off This Week With Code: DIGITAL70
                </div>
                
                <h3 className="font-bold text-xl mb-2">Scale Your Business 10x</h3>
                <p className="text-sm text-gray-600 mb-4">Complete Digital Marketing Strategy That Actually Works</p>
                
                <div className="h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded mb-4 flex items-center justify-center relative">
                  <span className="text-purple-700 font-medium">300+ Pages of Actionable Content</span>
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs">
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
                    <span className="ml-2 text-sm text-gray-600">Outstanding 4.8 | Loved by 10,000+ Readers</span>
                  </div>
                  <p className="text-sm font-medium">Featured in Marketing Weekly</p>
                </div>

                <h4 className="font-bold mb-2">Complete Digital Marketing System That Delivers Results</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Stop wasting money on ads that don't convert. Our proven system shows you exactly how to scale your business online.
                </p>

                <div className="bg-stone-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Download today get FREE bonus templates</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium mb-2">○ Select your package $97</h5>
                  <div className="text-sm text-gray-600 mb-2">Complete Digital Marketing Ebook</div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="border-2 border-purple-500 p-2 text-center text-sm rounded bg-gradient-to-br from-purple-50 to-pink-50">
                      <div className="font-medium">Premium Package</div>
                      <div className="text-xs">Ebook + Bonuses</div>
                    </div>
                    <div className="border p-2 text-center text-sm rounded">
                      <div>Basic Package</div>
                      <div className="text-xs">Ebook Only</div>
                    </div>
                  </div>

                  <div className="bg-slate-100 p-3 rounded-lg mb-4">
                    <h5 className="font-medium mb-2">○ What's Included</h5>
                    <div className="flex items-center text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>300+ page comprehensive guide</span>
                    </div>
                    <div className="flex items-center text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Bonus templates & checklists</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Lifetime updates included</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-medium flex items-center justify-center">
                  📚 DOWNLOAD NOW - $97 (Save 70%)
                </button>
                <div className="text-center text-xs text-gray-500 mt-2">Instant Download • 30-Day Money Back Guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">10,000+</div>
            <div className="text-sm text-gray-600">Happy Readers</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-500 mb-2">300+</div>
            <div className="text-sm text-gray-600">Pages of Content</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-500 mb-2">4.8★</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookBeforeAfterComparison;
