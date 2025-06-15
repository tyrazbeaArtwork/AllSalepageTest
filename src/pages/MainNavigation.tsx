
import React from 'react';
import { motion } from 'framer-motion';
import FloatingNavbar from '../components/navigation/FloatingNavbar';
import NavigationCard from '../components/navigation/NavigationCard';
import MainFooter from '../components/navigation/MainFooter';
import { navigationCards } from '../constants/navigationData';

const MainNavigation = () => {
  return (
    <div className="min-h-screen bg-[#F9F6F3] relative overflow-hidden">
      {/* Floating Glass Navbar */}
      <FloatingNavbar />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      {/* Hero Section */}
      <div className="container-section pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="font-inter font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-convrt-dark-blue leading-[1.1]">
            Choose Your <span className="text-convrt-purple">Journey</span>
          </h1>
          <p className="font-inter text-xl text-convrt-dark-blue/80 max-w-2xl mx-auto leading-relaxed">
            Experience our AI-powered platform through different pathways designed for your success
          </p>
        </motion.div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {navigationCards.map((card, index) => (
            <NavigationCard
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
              path={card.path}
              gradient={card.gradient}
              shadowColor={card.shadowColor}
              delay={card.delay}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <MainFooter />
    </div>
  );
};

export default MainNavigation;
