
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 px-6 bg-slate-900">
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
            The PASTA Design System
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our psychology-driven design framework that turns visitors into customers using proven conversion principles.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Problem-Focused", desc: "Address pain points directly", icon: "🎯" },
            { title: "Agitation Mastery", desc: "Emotional triggers that convert", icon: "⚡" },
            { title: "Solution Clarity", desc: "Clear value propositions", icon: "💡" },
            { title: "Trust Building", desc: "Social proof & testimonials", icon: "🛡️" }
          ].map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-dark p-6 text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-400 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Advantages */}
        <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Our Approach Works</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "300% average conversion increase",
              "Psychology-based design decisions",
              "A/B tested landing page elements",
              "Mobile-first responsive design",
              "Fast loading & SEO optimized",
              "Continuous optimization support"
            ].map((advantage, i) => (
              <div key={i} className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span>{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
