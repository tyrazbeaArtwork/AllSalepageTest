
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const MarketingSolutionSection = () => {
  return (
    <section id="solution" className="py-20 px-6 bg-gradient-to-br from-slate-900 to-green-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-400 mb-8 border border-green-500/30">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Proven Solution</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete Copywriting Framework That Converts
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Master the exact frameworks (AIDA, PASTA, STAR) used by successful marketers to create high-converting copy that drives sales and builds businesses.
          </p>
        </motion.div>

        {/* Copywriting Frameworks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: "AIDA Framework", desc: "Attention, Interest, Desire, Action", icon: "🎯" },
            { title: "PASTA Method", desc: "Problem-Solution-Action sequence", icon: "🍝" },
            { title: "STAR Formula", desc: "Situation-Task-Action-Result", icon: "⭐" },
            { title: "BAB Structure", desc: "Before-After-Bridge storytelling", icon: "🌉" }
          ].map((framework, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">{framework.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{framework.title}</h3>
              <p className="text-slate-400 text-sm">{framework.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Niche Applications */}
        <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Proven for Every Niche</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Kursus Marketing Online: Blueprint Jualan RM100K",
              "Skincare Remaja: 24 jam hancurkan jerawat formula",
              "Property Investment: Beli 2 unit rumah dalam 1 tahun",
              "Program Diet: Transform your body in 30 days",
              "Public Speaking: Confident presentations framework",
              "Excel Training: Master advanced formulas quickly"
            ].map((example, i) => (
              <div key={i} className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span>{example}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSolutionSection;
