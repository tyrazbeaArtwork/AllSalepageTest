
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock } from 'lucide-react';

const ActionSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
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
            Stop Losing Money Today
          </h2>
          
          <p className="text-xl text-slate-300 mb-8">
            Every day you wait is money left on the table. Get a high-converting landing page that actually sells.
          </p>

          {/* Pricing */}
          <div className="bg-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-slate-400 line-through text-lg mb-2">Regular: $5,000</div>
              <div className="text-4xl font-bold text-white mb-2">$2,997</div>
              <div className="text-green-400 font-medium">Limited Time: 40% OFF</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors flex items-center justify-center group"
            >
              ORDER NOW - Save $2,000
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
            
            <button className="w-full border border-white/30 text-white hover:bg-white/10 font-medium py-4 px-8 rounded-xl transition-colors">
              Get Free Consultation First
            </button>
          </div>

          {/* Urgency Elements */}
          <div className="flex justify-center items-center mt-8 space-x-6 text-sm text-slate-400">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>Offer expires in 48 hours</span>
            </div>
            <div>•</div>
            <div>Only 3 spots left this month</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActionSection;
