
import React from 'react';
import EbookWarningHeader from '../components/ebook/EbookWarningHeader';
import EbookFloatingNavigation from '../components/ebook/EbookFloatingNavigation';
import EbookBeforeAfterComparison from '../components/ebook/EbookBeforeAfterComparison';
import EbookProblemSection from '../components/ebook/EbookProblemSection';
import EbookSolutionSection from '../components/ebook/EbookSolutionSection';
import EbookTestimonialsSection from '../components/ebook/EbookTestimonialsSection';
import EbookActionSection from '../components/ebook/EbookActionSection';
import EbookFooter from '../components/ebook/EbookFooter';

const EbookLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <EbookWarningHeader />
      <EbookFloatingNavigation />
      <EbookBeforeAfterComparison />
      <EbookProblemSection />
      <EbookSolutionSection />
      <EbookTestimonialsSection />
      <EbookActionSection />
      <EbookFooter />
    </div>
  );
};

export default EbookLanding;
