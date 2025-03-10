
import React from 'react';
import { motion } from 'framer-motion';

// Customer logos data
const customerLogos = [
  { id: 1, name: "Acme Inc.", imageClass: "bg-gradient-to-br from-blue-400 to-blue-600" },
  { id: 2, name: "Global Tech", imageClass: "bg-gradient-to-br from-green-400 to-green-600" },
  { id: 3, name: "Innovate AI", imageClass: "bg-gradient-to-br from-purple-400 to-purple-600" },
  { id: 4, name: "FutureCorp", imageClass: "bg-gradient-to-br from-red-400 to-red-600" },
  { id: 5, name: "DataFlow", imageClass: "bg-gradient-to-br from-yellow-400 to-yellow-600" },
  { id: 6, name: "TechNova", imageClass: "bg-gradient-to-br from-indigo-400 to-indigo-600" },
];

interface CustomerLogosProps {
  className?: string;
}

const CustomerLogos: React.FC<CustomerLogosProps> = ({ className = "" }) => {
  return (
    <div className={`mt-16 ${className}`}>
      <div className="text-center mb-6">
        <p className="text-convrt-dark-blue/70 text-sm font-medium">TRUSTED BY INNOVATIVE COMPANIES</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {customerLogos.map((logo, index) => (
          <motion.div 
            key={logo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.5 + (index * 0.1),
              ease: [0.22, 1, 0.36, 1]
            }}
            className="bg-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 p-4 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${logo.imageClass} flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110`}>
              {logo.name.charAt(0)}
            </div>
            <span className="ml-3 text-convrt-dark-blue/80 text-sm md:text-base font-medium">{logo.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CustomerLogos;
