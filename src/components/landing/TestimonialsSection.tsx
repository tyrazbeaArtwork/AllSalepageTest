
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
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
  );
};

export default TestimonialsSection;
