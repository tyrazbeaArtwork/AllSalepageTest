import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const MarketingBeforeAfterComparison = () => {
  return (
    <>
      {/* Header Image Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-green-200/50 text-green-700 mb-6">
              <span className="text-sm font-medium">🌿 Natural • Organic • Authentic</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6 leading-tight">
              Master the Art of
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Copywriting
              </span>
            </h1>
            
            <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your marketing with proven frameworks that convert. Learn AIDA, PASTA, STAR, and BAB techniques used by top marketers worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 backdrop-blur-md text-green-700 font-semibold rounded-2xl border border-white/50 shadow-lg hover:bg-white/90 transition-all flex items-center group"
              >
                Start Learning Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <button className="px-8 py-4 bg-transparent text-green-700 font-medium rounded-2xl border-2 border-green-200/70 hover:bg-green-50/50 transition-all">
                View Free Preview
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before/After Comparison Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            See the Difference Proven Copywriting Makes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before Example */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Before: Generic Ad Copy</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-gray-600">
                  "Our product is great. It helps you solve problems. Buy it now!"
                </p>
                <div className="mt-4 flex justify-end space-x-2">
                  <span className="inline-flex items-center text-red-500">
                    <XCircle className="w-4 h-4 mr-1" />
                    <span>Low Engagement</span>
                  </span>
                </div>
              </div>
            </div>

            {/* After Example */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">After: Compelling, Benefit-Driven Copy</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700">
                  "Struggling with [Problem]? Our product helps you achieve [Desired Outcome] in just [Timeframe]. Get started today and see real results!"
                </p>
                <div className="mt-4 flex justify-end space-x-2">
                  <span className="inline-flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span>High Conversion</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-gray-500">
            Unlock the power of persuasive copywriting and transform your marketing results.
          </p>
        </div>
      </section>
    </>
  );
};

export default MarketingBeforeAfterComparison;
