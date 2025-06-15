import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, TrendingUp, Heart, Briefcase, Palette, BookOpen, Facebook, Instagram, Linkedin } from 'lucide-react';

const MainNavigation = () => {
  const navigationCards = [
    {
      title: "Official Landing",
      description: "Experience our proven AI-driven social selling platform",
      icon: <Sparkles className="w-8 h-8" />,
      path: "/official",
      gradient: "from-convrt-purple to-convrt-purple-light",
      shadowColor: "convrt-purple",
      delay: 0.1
    },
    {
      title: "Custom Experience", 
      description: "Discover personalized outbound solutions",
      icon: <Target className="w-8 h-8" />,
      path: "/custom",
      gradient: "from-[#EA384C] to-[#FF6B82]",
      shadowColor: "[#EA384C]",
      delay: 0.2
    },
    {
      title: "Analytics Dashboard",
      description: "Track your conversion performance",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/analytics",
      gradient: "from-convrt-dark-blue to-[#4A5FBF]",
      shadowColor: "convrt-dark-blue",
      delay: 0.3
    },
    {
      title: "Housewife Products",
      description: "Kitchen organization solutions for busy moms",
      icon: <Heart className="w-8 h-8" />,
      path: "/housewife",
      gradient: "from-blue-500 to-blue-600",
      shadowColor: "blue-500",
      delay: 0.4
    },
    {
      title: "Business Design",
      description: "Professional design services for growing businesses",
      icon: <Briefcase className="w-8 h-8" />,
      path: "/business-design",
      gradient: "from-amber-600 to-amber-700",
      shadowColor: "amber-600",
      delay: 0.5
    },
    {
      title: "Freelance Design",
      description: "Premium design services for creative professionals",
      icon: <Palette className="w-8 h-8" />,
      path: "/freelance-design",
      gradient: "from-teal-600 to-cyan-600",
      shadowColor: "teal-600",
      delay: 0.6
    },
    {
      title: "Digital Marketing Ebook",
      description: "Master proven strategies to scale your business online",
      icon: <BookOpen className="w-8 h-8" />,
      path: "/ebook",
      gradient: "from-purple-600 to-pink-600",
      shadowColor: "purple-600",
      delay: 0.7
    },
    {
      title: "Marketing Copywriting",
      description: "Master high-converting copy with proven frameworks",
      icon: <BookOpen className="w-8 h-8" />,
      path: "/marketing-copywriting",
      gradient: "from-green-600 to-emerald-600",
      shadowColor: "green-600",
      delay: 0.8
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F3] relative overflow-hidden">
      {/* Floating Glass Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/20 shadow-lg">
        <div className="flex items-center space-x-6">
          <img 
            src="/lovable-uploads/ce207080-f6c2-430d-9621-79d32ab08655.png" 
            alt="Convrt.ai Logo" 
            className="h-8"
          />
          <div className="hidden md:flex items-center space-x-4 text-sm font-medium text-convrt-dark-blue/80">
            <a href="#" className="hover:text-convrt-purple transition-colors">About</a>
            <a href="#" className="hover:text-convrt-purple transition-colors">Contact</a>
          </div>
        </div>
      </nav>

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
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: card.delay,
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <Link to={card.path} className="block group">
                <motion.div 
                  className="relative p-8 rounded-3xl bg-white/30 backdrop-blur-xl border border-white/40 transition-all duration-500 group-hover:-translate-y-3 group-hover:bg-white/50"
                  whileHover={{ 
                    boxShadow: `0 25px 50px -12px rgba(var(--${card.shadowColor}), 0.25)`,
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-5 rounded-3xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon with Glass Effect */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${card.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-convrt-dark-blue mb-3 group-hover:text-convrt-purple transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-convrt-dark-blue/70 mb-6 leading-relaxed">
                    {card.description}
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
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-20 py-16 px-6 bg-gradient-to-br from-convrt-purple/90 via-convrt-purple-light/80 to-convrt-dark-blue/90 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Column - Logo & Social Media */}
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/ce207080-f6c2-430d-9621-79d32ab08655.png" 
                alt="Convrt.ai Logo" 
                className="h-12 filter brightness-0 invert"
              />
              <div className="flex space-x-4">
                <a href="#" className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Center Column - Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Transform Your Journey</h3>
              <p className="text-white/80 leading-relaxed">
                Experience the power of AI-driven solutions designed to elevate your business. From social selling to copywriting mastery, we provide the tools and strategies you need to succeed in today's digital landscape.
              </p>
              <p className="text-white/60 text-sm">
                Join thousands of professionals who have transformed their approach to marketing and sales with our proven methodologies.
              </p>
            </div>

            {/* Right Column - Facebook Embed */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-center text-white/80">
                  <Facebook className="w-12 h-12 mx-auto mb-4 opacity-60" />
                  <p className="text-sm">Follow us on Facebook for the latest updates, tips, and success stories.</p>
                  <button className="mt-4 px-6 py-2 bg-white/30 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/40 transition-all duration-300">
                    Visit Our Page
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-white/60 text-sm">
              © 2024 Convrt.ai. All rights reserved. Transforming businesses through AI-powered solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainNavigation;
