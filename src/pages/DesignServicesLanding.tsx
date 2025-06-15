
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle, MessageCircle, Clock, TrendingUp } from 'lucide-react';

const DesignServicesLanding = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "/lovable-uploads/50d7bc89-98fd-49a5-b67f-94230c5d3ca5.png",
      rating: 5,
      text: "Their design transformed our conversion rate by 300%. The PASTA technique they used was brilliant!"
    },
    {
      name: "Mike Chen",
      role: "Marketing Director",
      image: "/lovable-uploads/8324ce9d-a25b-4480-beb0-990b38071d97.png",
      rating: 5,
      text: "Finally found designers who understand psychology. Our landing page now converts like crazy."
    },
    {
      name: "Emma Davis",
      role: "Founder, EcoStore",
      image: "/lovable-uploads/ceb0d5d2-2d83-407f-bb1e-8f6959b93eb9.png",
      rating: 5,
      text: "ROI increased 250% within 30 days. Best investment we've made for our business."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-2xl glass border shadow-lg">
        <div className="flex items-center space-x-6">
          <div className="text-xl font-bold text-slate-800">DesignLab</div>
          <div className="hidden md:flex items-center space-x-4 text-sm font-medium text-slate-600">
            <a href="#problem" className="hover:text-slate-900 transition-colors">Problem</a>
            <a href="#solution" className="hover:text-slate-900 transition-colors">Solution</a>
            <a href="#testimonials" className="hover:text-slate-900 transition-colors">Results</a>
          </div>
        </div>
      </nav>

      {/* PROBLEM Section */}
      <section id="problem" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 mb-8 border border-red-200">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Critical Business Issue</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Your Website is 
              <span className="text-red-500 block">Bleeding Money</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every second your landing page fails to convert, you're losing potential customers to competitors who understand design psychology.
            </p>

            {/* Problem Dialog */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border max-w-2xl mx-auto mb-12">
              <div className="flex items-start space-x-4">
                <MessageCircle className="w-6 h-6 text-blue-500 mt-1" />
                <div className="text-left">
                  <p className="text-slate-700 mb-4 italic">
                    "We're getting traffic, but no one's buying. Our bounce rate is 85% and we're burning through our marketing budget..."
                  </p>
                  <p className="text-sm text-slate-500">- Sound familiar?</p>
                </div>
              </div>
            </div>

            {/* Priority Stakes */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: "💸", title: "Lost Revenue", desc: "$10K+ monthly potential" },
                { icon: "⏰", title: "Wasted Time", desc: "Months of poor performance" },
                { icon: "😰", title: "Stress & Anxiety", desc: "Watching competitors win" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * i, duration: 0.6 }}
                  className="bg-red-50 p-6 rounded-xl border border-red-200"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION Section */}
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

      {/* TESTIMONIALS Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-50 text-yellow-600 mb-8 border border-yellow-200">
              <Star className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Real Results</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Client Success Stories
            </h2>
          </motion.div>

          {/* Featured Testimonial */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border mb-8">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-slate-700 mb-6 leading-relaxed">
              "{testimonials[selectedTestimonial].text}"
            </blockquote>
            <div className="flex items-center">
              <img
                src={testimonials[selectedTestimonial].image}
                alt={testimonials[selectedTestimonial].name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <div className="font-bold text-slate-900">{testimonials[selectedTestimonial].name}</div>
                <div className="text-slate-600 text-sm">{testimonials[selectedTestimonial].role}</div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === selectedTestimonial ? 'bg-slate-900' : 'bg-slate-300'
                }`}
                onClick={() => setSelectedTestimonial(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ACTION Section */}
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

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-slate-400 text-sm mb-4">
            © 2024 DesignLab. Transform your business with psychology-driven design.
          </div>
          <div className="flex justify-center space-x-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesignServicesLanding;
