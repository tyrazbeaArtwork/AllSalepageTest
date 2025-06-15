
import React from 'react';
import MarketingWarningHeader from '../components/marketing/MarketingWarningHeader';
import MarketingFloatingNavigation from '../components/marketing/MarketingFloatingNavigation';
import MarketingBeforeAfterComparison from '../components/marketing/MarketingBeforeAfterComparison';
import MarketingProblemSection from '../components/marketing/MarketingProblemSection';
import MarketingSolutionSection from '../components/marketing/MarketingSolutionSection';
import MarketingTestimonialsSection from '../components/marketing/MarketingTestimonialsSection';
import MarketingActionSection from '../components/marketing/MarketingActionSection';
import MarketingFooter from '../components/marketing/MarketingFooter';

const MarketingCopywritingLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <MarketingWarningHeader />
      <MarketingFloatingNavigation />
      <MarketingBeforeAfterComparison />
      <MarketingProblemSection />
      <MarketingSolutionSection />
      <MarketingTestimonialsSection />
      <MarketingActionSection />
      <MarketingFooter />
    </div>
  );
};

export default MarketingCopywritingLanding;
