
import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const BeforeAfterComparison = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-r from-orange-100 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Before vs After: The Power of PASTA Design
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how our psychology-driven design system transforms failing websites into conversion machines
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* BEFORE */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-red-500 text-white py-2 px-4 text-center font-bold">
              BEFORE
            </div>
            <div className="bg-red-100 p-2 text-center">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                Conversion rate: ● 0.7%
              </span>
            </div>
            <div className="p-6">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <h3 className="font-bold text-lg mb-2">Generic Product Page</h3>
                <div className="h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Basic Product Image</span>
                </div>
                <div className="text-2xl font-bold mb-2">$44.99</div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="border p-2 text-center text-sm">1 Bottle</div>
                  <div className="border p-2 text-center text-sm">2 Bottles</div>
                  <div className="border p-2 text-center text-sm">3 Bottles</div>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded">
                  SHOP NOW
                </button>
                <button className="w-full bg-gray-300 text-gray-700 py-2 rounded mt-2">
                  ADD TO CART
                </button>
              </div>
              <div className="text-sm text-gray-600">
                <p>Basic product description with no emotional connection or urgency...</p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <div className="text-4xl text-orange-500">
              <ArrowRight className="w-12 h-12" />
            </div>
          </div>

          {/* AFTER */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden md:col-span-1">
            <div className="bg-green-500 text-white py-2 px-4 text-center font-bold">
              AFTER
            </div>
            <div className="bg-green-100 p-2 text-center">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                Conversion rate: ● 4.2%
              </span>
            </div>
            <div className="p-6">
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 border">
                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm inline-block mb-3">
                  Get 30% Off This Weekend With Code: EDR1
                </div>
                
                <h3 className="font-bold text-xl mb-2">Save up to 30%</h3>
                <p className="text-sm text-gray-600 mb-4">With today's Subscribe & Save offer</p>
                
                <div className="h-32 bg-gradient-to-br from-orange-100 to-orange-50 rounded mb-4 flex items-center justify-center relative">
                  <span className="text-orange-600 font-medium">Optimized Product Display</span>
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
                    100% Natural
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Excellent 5.0 | Trusted by 10,000+</span>
                  </div>
                  <p className="text-sm font-medium">Loved by 10,000+ Dog Families</p>
                </div>

                <h4 className="font-bold mb-2">Organic Dog Shampoo for Healthier, Happier Coats</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Nourishing blend of aloe vera, Coco & coconut - soothes skin, restores shine, and eliminates odors naturally.
                </p>

                <div className="bg-orange-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Order by May 25 get FREE Grooming Glove</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium mb-2">○ Select your package $54.99</h5>
                  <div className="text-sm text-gray-600 mb-2">One Time Purchase</div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="border-2 border-orange-500 p-2 text-center text-sm rounded bg-orange-50">
                      <div className="font-medium">4 Bottles</div>
                      <div className="text-xs">$13.75/each</div>
                    </div>
                    <div className="border p-2 text-center text-sm rounded">
                      <div>3 Bottles</div>
                      <div className="text-xs">$18.00/each</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="border p-2 text-center text-sm rounded">
                      <div>2 Bottles</div>
                      <div className="text-xs">$22.50/each</div>
                    </div>
                    <div className="border p-2 text-center text-sm rounded">
                      <div>1 Bottle</div>
                      <div className="text-xs">$27.00/each</div>
                    </div>
                  </div>

                  <div className="bg-slate-100 p-3 rounded-lg mb-4">
                    <h5 className="font-medium mb-2">○ Subscribe & Save</h5>
                    <div className="text-sm">Value $49.99</div>
                    <div className="flex items-center text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Save 25% today and every time!</span>
                    </div>
                    <div className="flex items-center text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Delivered every 2 months</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>Free, Fast Shipping</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium flex items-center justify-center">
                  🛒 Add to Cart - $49.99
                </button>
                <div className="text-center text-xs text-gray-500 mt-2">Payment Options</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterComparison;
