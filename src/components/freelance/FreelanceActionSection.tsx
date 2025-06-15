
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock } from 'lucide-react';

const FreelanceActionSection = () => {
  return (
    <>
      <section className="py-20 px-6 bg-gradient-to-r from-stone-900 to-stone-800">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 text-red-400 mb-8 border border-red-500/30">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stop Competing on Price Today
            </h2>
            
            <p className="text-xl text-stone-100 mb-8">
              Every day with a basic portfolio is income lost to freelancers who command premium rates. Transform your professional image and charge what you're worth.
            </p>

            {/* Pricing */}
            <div className="bg-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-stone-200 line-through text-lg mb-2">Regular: $3,994</div>
                <div className="text-4xl font-bold text-white mb-2">$1,997</div>
                <div className="text-green-400 font-medium">This Week Only: 50% OFF</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-stone-500 hover:bg-stone-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors flex items-center justify-center group"
              >
                START PROJECT - Save $1,997 Today
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <button className="w-full border border-white/30 text-white hover:bg-white/10 font-medium py-4 px-8 rounded-xl transition-colors">
                View Portfolio Examples
              </button>
            </div>

            {/* Urgency Elements */}
            <div className="flex justify-center items-center mt-8 space-x-6 text-sm text-stone-200">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>Offer expires this Friday</span>
              </div>
              <div>•</div>
              <div>Only 5 spots available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Floating CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-stone-600 to-stone-700 shadow-lg">
        <div className="max-w-md mx-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white text-stone-700 font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
          >
            Get Premium Portfolio Now!
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default FreelanceActionSection;
