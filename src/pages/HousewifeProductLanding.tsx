
import React from 'react';
import HousewifeWarningHeader from '../components/housewife/HousewifeWarningHeader';
import HousewifeFloatingNavigation from '../components/housewife/HousewifeFloatingNavigation';
import HousewifeBeforeAfterComparison from '../components/housewife/HousewifeBeforeAfterComparison';
import HousewifeProblemSection from '../components/housewife/HousewifeProblemSection';
import HousewifeSolutionSection from '../components/housewife/HousewifeSolutionSection';
import HousewifeTestimonialsSection from '../components/housewife/HousewifeTestimonialsSection';
import HousewifeActionSection from '../components/housewife/HousewifeActionSection';
import HousewifeFooter from '../components/housewife/HousewifeFooter';

const HousewifeProductLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <HousewifeWarningHeader />
      <HousewifeFloatingNavigation />
      <HousewifeBeforeAfterComparison />
      <HousewifeProblemSection />
      <HousewifeSolutionSection />
      <HousewifeTestimonialsSection />
      <HousewifeActionSection />
      <HousewifeFooter />
    </div>
  );
};

export default HousewifeProductLanding;
