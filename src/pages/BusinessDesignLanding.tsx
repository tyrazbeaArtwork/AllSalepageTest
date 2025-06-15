
import React from 'react';
import BusinessWarningHeader from '../components/business/BusinessWarningHeader';
import BusinessFloatingNavigation from '../components/business/BusinessFloatingNavigation';
import BusinessBeforeAfterComparison from '../components/business/BusinessBeforeAfterComparison';
import BusinessProblemSection from '../components/business/BusinessProblemSection';
import BusinessSolutionSection from '../components/business/BusinessSolutionSection';
import BusinessTestimonialsSection from '../components/business/BusinessTestimonialsSection';
import BusinessActionSection from '../components/business/BusinessActionSection';
import BusinessFooter from '../components/business/BusinessFooter';

const BusinessDesignLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <BusinessWarningHeader />
      <BusinessFloatingNavigation />
      <BusinessBeforeAfterComparison />
      <BusinessProblemSection />
      <BusinessSolutionSection />
      <BusinessTestimonialsSection />
      <BusinessActionSection />
      <BusinessFooter />
    </div>
  );
};

export default BusinessDesignLanding;
