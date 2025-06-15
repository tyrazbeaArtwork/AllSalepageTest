import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, TrendingUp, Heart, Briefcase, Palette, BookOpen } from 'lucide-react';

const MainNavigation = () => {
  const navigationCards = [
    {
      title: "Official Landing",
      description: "Experience our proven AI-driven social selling platform",
      icon: <Sparkles className="w-8 h-8" />,
      path: "/official",
      gradient: "from-convrt-purple to-convrt-purple-light",
      delay: 0.1
    },
    {
      title: "Custom Experience", 
      description: "Discover personalized outbound solutions",
      icon: <Target className="w-8 h-8" />,
      path: "/custom",
      gradient: "from-[#EA384C] to-[#FF6B82]",
      delay: 0.2
    },
    {
      title: "Analytics Dashboard",
      description: "Track your conversion performance",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/analytics",
      gradient: "from-convrt-dark-blue to-[#4A5FBF]",
      delay: 0.3
    },
    {
      title: "Housewife Products",
      description: "Kitchen organization solutions for busy moms",
      icon: <Heart className="w-8 h-8" />,
      path: "/housewife",
      gradient: "from-blue-500 to-blue-600",
      delay: 0.4
    },
    {
      title: "Business Design",
      description: "Professional design services for growing businesses",
      icon: <Briefcase className="w-8 h-8" />,
      path: "/business-design",
      gradient: "from-amber-600 to-amber-700",
      delay: 0.5
    },
    {
      title: "Freelance Design",
      description: "Premium design services for creative professionals",
      icon: <Palette className="w-8 h-8" />,
      path: "/freelance-design",
      gradient: "from-teal-600 to-cyan-600",
      delay: 0.6
    },
    {
      title: "Digital Marketing Ebook",
      description: "Master proven strategies to scale your business online",
      icon: <BookOpen className="w-8 h-8" />,
      path: "/ebook",
      gradient: "from-purple-600 to-pink-600",
      delay: 0.7
    },
    {
      title: "Marketing Copywriting",
      description: "Master high-converting copy with proven frameworks",
      icon: <BookOpen className="w-8 h-8" />,
      path: "/marketing-copywriting",
      gradient: "from-green-600 to-emerald-600",
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
                <div className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-convrt-purple/10 hover:-translate-y-2 hover:bg-white/80">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.gradient} text-white mb-6`}>
                    {card.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-convrt-dark-blue mb-3 group-hover:text-convrt-purple transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-convrt-dark-blue/70 mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className="flex items-center text-convrt-purple font-medium">
                    <span className="mr-2">Explore</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
