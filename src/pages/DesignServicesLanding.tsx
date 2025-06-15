
import React from 'react';
import WarningHeader from '../components/landing/WarningHeader';
import FloatingNavigation from '../components/landing/FloatingNavigation';
import BeforeAfterComparison from '../components/landing/BeforeAfterComparison';
import ProblemSection from '../components/landing/ProblemSection';
import SolutionSection from '../components/landing/SolutionSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import ActionSection from '../components/landing/ActionSection';
import Footer from '../components/landing/Footer';

const DesignServicesLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <WarningHeader />
      <FloatingNavigation />
      <BeforeAfterComparison />
      <ProblemSection />
      <SolutionSection />
      <TestimonialsSection />
      <ActionSection />
      <Footer />
    </div>
  );
};

export default DesignServicesLanding;
