
import React from 'react';
import FreelanceWarningHeader from '../components/freelance/FreelanceWarningHeader';
import FreelanceFloatingNavigation from '../components/freelance/FreelanceFloatingNavigation';
import FreelanceBeforeAfterComparison from '../components/freelance/FreelanceBeforeAfterComparison';
import FreelanceProblemSection from '../components/freelance/FreelanceProblemSection';
import FreelanceSolutionSection from '../components/freelance/FreelanceSolutionSection';
import FreelanceTestimonialsSection from '../components/freelance/FreelanceTestimonialsSection';
import FreelanceActionSection from '../components/freelance/FreelanceActionSection';
import FreelanceFooter from '../components/freelance/FreelanceFooter';

const FreelanceDesignLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <FreelanceWarningHeader />
      <FreelanceFloatingNavigation />
      <FreelanceBeforeAfterComparison />
      <FreelanceProblemSection />
      <FreelanceSolutionSection />
      <FreelanceTestimonialsSection />
      <FreelanceActionSection />
      <FreelanceFooter />
    </div>
  );
};

export default FreelanceDesignLanding;
