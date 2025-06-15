
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface NavigationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  gradient: string;
  shadowColor: string;
  delay: number;
}

const NavigationCard: React.FC<NavigationCardProps> = ({
  title,
  description,
  icon: Icon,
  path,
  gradient,
  shadowColor,
  delay
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      <Link to={path} className="block group">
        <motion.div 
          className="relative p-8 rounded-3xl bg-white/30 backdrop-blur-xl border border-white/40 transition-all duration-500 group-hover:-translate-y-3 group-hover:bg-white/50"
          whileHover={{ 
            boxShadow: `0 25px 50px -12px rgba(var(--${shadowColor}), 0.25)`,
            scale: 1.02
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 rounded-3xl group-hover:opacity-10 transition-opacity duration-500`}></div>
          
          {/* Icon with Glass Effect */}
          <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-8 h-8" />
          </div>
          
          {/* Content */}
          <h3 className="text-2xl font-bold text-convrt-dark-blue mb-3 group-hover:text-convrt-purple transition-colors duration-300">
            {title}
          </h3>
          <p className="text-convrt-dark-blue/70 mb-6 leading-relaxed">
            {description}
          </p>
          
          {/* Explore Button with Glass Effect */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/60 group-hover:bg-white/60 transition-all duration-300">
            <span className="text-convrt-purple font-medium group-hover:text-convrt-purple-hover transition-colors mr-2">
              Explore
            </span>
            <ArrowRight className="w-4 h-4 text-convrt-purple transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default NavigationCard;
