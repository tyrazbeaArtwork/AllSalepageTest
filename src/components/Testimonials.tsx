
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Alice allowed us to scale outbound efforts without sacrificing personalization. It's been a crucial multiplier for our team.",
    name: "Matthew Lenhart",
    title: "Senior Manager, Sales Ops & Strategy at Otter.ai",
    company: "Otter.ai",
    logo: "otter",
    bgColor: "bg-[#efeaf5]",
  },
  {
    id: 2,
    quote: "Mike allows us to retarget hundreds of thousands of old leads. It's like unlocking a new opportunity we never thought was possible.",
    name: "Sales Team",
    title: "Connecteam",
    company: "Connecteam",
    logo: "connecteam",
    bgColor: "bg-[#fde7dc]",
  },
  {
    id: 3,
    quote: "With Mike, we could reach customers in languages we couldn't otherwise support.",
    name: "Growth Marketing",
    title: "Spectinga",
    company: "Spectinga",
    logo: "spectinga",
    bgColor: "bg-[#e9e9e9]",
  }
];

const stats = [
  {
    id: 1,
    value: "$500k",
    description: "on hiring costs saved",
    company: "Otter.ai",
    bgColor: "bg-[#efeaf5]",
  },
  {
    id: 2,
    value: "Handshake",
    description: "",
    company: "Handshake",
    bgColor: "bg-white",
  },
  {
    id: 3,
    value: "Sumup",
    description: "",
    company: "Sumup",
    bgColor: "bg-white",
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-white" id="testimonials">
      <div className="container-section max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold">Trusted by industry leaders</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* First testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden"
          >
            <div className={`h-full ${testimonials[0].bgColor} p-6 flex flex-col`}>
              <div className="text-lg font-medium mb-6">
                "{testimonials[0].quote}"
              </div>
              <div className="mt-auto">
                <div className="font-medium">{testimonials[0].name}</div>
                <div className="text-gray-600 text-sm">{testimonials[0].title}</div>
              </div>
            </div>
          </motion.div>

          {/* Second testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden"
          >
            <div className={`h-full ${testimonials[1].bgColor} p-6 flex flex-col`}>
              <div className="text-lg font-medium mb-6">
                "{testimonials[1].quote}"
              </div>
              <div className="mt-auto">
                <div className="font-bold">connecteam</div>
              </div>
            </div>
          </motion.div>

          {/* Third testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden"
          >
            <div className={`h-full ${testimonials[2].bgColor} p-6 flex flex-col`}>
              <div className="text-lg font-medium mb-6">
                "{testimonials[2].quote}"
              </div>
              <div className="mt-auto">
                <div className="font-bold flex items-center">
                  <span className="inline-block mr-1">⊙</span> spectinga
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
