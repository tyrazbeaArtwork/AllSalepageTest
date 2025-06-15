
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const FreelanceTestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Alex Morgan",
      role: "Graphic Designer",
      image: "/lovable-uploads/50d7bc89-98fd-49a5-b67f-94230c5d3ca5.png",
      rating: 5,
      text: "My new portfolio helped me land $5K+ projects! Clients now see me as a premium designer, not just another freelancer."
    },
    {
      name: "Jessica Chen",
      role: "UX/UI Designer",
      image: "/lovable-uploads/8324ce9d-a25b-4480-beb0-990b38071d97.png",
      rating: 5,
      text: "I increased my hourly rate from $25 to $100! The premium portfolio positioning made all the difference."
    },
    {
      name: "Marcus Thompson",
      role: "Brand Designer",
      image: "/lovable-uploads/ceb0d5d2-2d83-407f-bb1e-8f6959b93eb9.png",
      rating: 5,
      text: "Went from struggling to find clients to having a 3-month waiting list. The portfolio transformation was incredible!"
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
            <span className="text-sm font-medium">Freelancer Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Freelancers Are Saying
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

export default FreelanceTestimonialsSection;
