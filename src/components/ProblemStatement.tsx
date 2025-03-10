
import React, { useEffect, useRef } from 'react';
import { X, Check, PhoneCall, Mail, MessageSquare, Users, Zap, BarChart3 } from 'lucide-react';

const ProblemStatement = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0');
            } else if (entry.target === comparisonRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (comparisonRef.current) observer.observe(comparisonRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (comparisonRef.current) observer.unobserve(comparisonRef.current);
    };
  }, []);

  return (
    <section className="relative py-20 bg-convrt-light-gray/30" id="problem">
      <div className="container-section">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center opacity-0 transition-opacity duration-700"
        >
          <div className="section-tag">
            Why Traditional Outbound Is Dead
          </div>
          <h2 className="heading-lg text-convrt-dark-blue mb-6">
            Cold Outreach Doesn't Work Anymore. <br />
            <span className="gradient-text">AI Organic Outbound</span> Does.
          </h2>
          <p className="text-convrt-dark-blue/70 text-lg mb-16 max-w-2xl mx-auto">
            The days of cold calls and emails are over. Today's buyers expect personalized engagement from people they trust. Convrt.ai puts you exactly where your buyers make decisions.
          </p>
        </div>
        
        <div 
          ref={comparisonRef}
          className="grid md:grid-cols-2 gap-8 opacity-0 translate-y-8 transition-all duration-700 delay-300"
        >
          {/* Traditional Cold Outbound */}
          <div className="bg-white rounded-2xl p-8 border border-red-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-red-50 px-4 py-2 rounded-bl-2xl">
              <X className="w-5 h-5 text-red-500" />
            </div>
            
            <h3 className="heading-sm text-convrt-dark-blue mb-6 flex items-center">
              Traditional Cold Outbound
            </h3>
            
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3">
                  <X className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div>
                  <p className="font-medium text-convrt-dark-blue">1% cold email response rates</p>
                  <p className="text-sm text-convrt-dark-blue/60 mt-1">Millions of emails sent, almost all ignored</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3">
                  <X className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div>
                  <p className="font-medium text-convrt-dark-blue">80% of calls screened out</p>
                  <p className="text-sm text-convrt-dark-blue/60 mt-1">Decision makers don't take cold calls</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3">
                  <X className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div>
                  <p className="font-medium text-convrt-dark-blue">No relationship before outreach</p>
                  <p className="text-sm text-convrt-dark-blue/60 mt-1">Cold outreach feels impersonal and salesy</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-lg p-3">
                <PhoneCall className="w-6 h-6 text-red-400 mb-2" />
                <div className="text-xs text-center text-red-600 font-medium">Cold Calls</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-lg p-3">
                <Mail className="w-6 h-6 text-red-400 mb-2" />
                <div className="text-xs text-center text-red-600 font-medium">Mass Emails</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-lg p-3">
                <MessageSquare className="w-6 h-6 text-red-400 mb-2" />
                <div className="text-xs text-center text-red-600 font-medium">Generic Messages</div>
              </div>
            </div>
            
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-red-200"></div>
          </div>
          
          {/* AI Organic Outbound */}
          <div className="bg-white rounded-2xl p-8 border border-convrt-cyan/30 relative overflow-hidden group shadow-xl shadow-convrt-cyan/5">
            <div className="absolute top-0 right-0 bg-convrt-cyan/10 px-4 py-2 rounded-bl-2xl">
              <Check className="w-5 h-5 text-convrt-cyan" />
            </div>
            
            <h3 className="heading-sm text-convrt-dark-blue mb-6 flex items-center">
              AI Organic Outbound
              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-convrt-cyan/10 text-convrt-cyan rounded-full">Convrt.ai</span>
            </h3>
            
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-convrt-cyan/10 flex items-center justify-center mt-0.5 mr-3">
                  <Check className="w-3.5 h-3.5 text-convrt-cyan" />
                </div>
                <div>
                  <p className="font-medium text-convrt-dark-blue">15x higher conversion rates</p>
                  <p className="text-sm text-convrt-dark-blue/60 mt-1">Build trust before you reach out</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-convrt-cyan/10 flex items-center justify-center mt-0.5 mr-3">
                  <Check className="w-3.5 h-3.5 text-convrt-cyan" />
                </div>
                <div>
                  <p className="font-medium text-convrt-dark-blue">Key touchpoints and discussions</p>
                  <p className="text-sm text-convrt-dark-blue/60 mt-1">Tracks the entire buyer's journey</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-convrt-cyan/10 flex items-center justify-center mt-0.5 mr-3">
                  <Check className="w-3.5 h-3.5 text-convrt-cyan" />
                </div>
                <div>
                  <p className="font-medium text-convrt-dark-blue">Fully automated growth hacking</p>
                  <p className="text-sm text-convrt-dark-blue/60 mt-1">Enterprise-grade AI engagement</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-cyan/5 rounded-lg p-3">
                <Users className="w-6 h-6 text-convrt-cyan mb-2" />
                <div className="text-xs text-center text-convrt-cyan font-medium">Engagement</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-cyan/5 rounded-lg p-3">
                <Zap className="w-6 h-6 text-convrt-cyan mb-2" />
                <div className="text-xs text-center text-convrt-cyan font-medium">Trust Building</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-cyan/5 rounded-lg p-3">
                <BarChart3 className="w-6 h-6 text-convrt-cyan mb-2" />
                <div className="text-xs text-center text-convrt-cyan font-medium">Win More Deals</div>
              </div>
            </div>
            
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-convrt-cyan/30 via-convrt-cyan to-convrt-cyan/30 animate-gradient-shift"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
