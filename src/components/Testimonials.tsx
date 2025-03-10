
import React, { useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Convrt changed the way we do outbound. Our response rates are 10x better than traditional methods.",
    name: "Marcel Müller",
    title: "VP Sales, Scaling Sales",
    logo: "scaling-sales",
  },
  {
    id: 2,
    quote: "We closed a deal in just 4 days using Convrt.ai. The lead was pre-warmed and ready to talk before we even reached out.",
    name: "Brendan",
    title: "XDR Team Lead",
    logo: "company-x",
  },
  {
    id: 3,
    quote: "Our sales team used to spend 80% of their time on prospecting. With Convrt, they now focus on closing while AI handles the warm-up.",
    name: "Sarah Johnson",
    title: "CRO, Enterprise Solutions",
    logo: "enterprise-solutions",
  },
];

// Customer logos data
const customerLogos = [
  { id: 1, name: "Acme Inc.", imageClass: "bg-gradient-to-br from-blue-400 to-blue-600" },
  { id: 2, name: "Global Tech", imageClass: "bg-gradient-to-br from-green-400 to-green-600" },
  { id: 3, name: "Innovate AI", imageClass: "bg-gradient-to-br from-purple-400 to-purple-600" },
  { id: 4, name: "FutureCorp", imageClass: "bg-gradient-to-br from-red-400 to-red-600" },
  { id: 5, name: "DataFlow", imageClass: "bg-gradient-to-br from-yellow-400 to-yellow-600" },
  { id: 6, name: "TechNova", imageClass: "bg-gradient-to-br from-indigo-400 to-indigo-600" },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0');
            } else if (entry.target === testimonialsRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            } else if (entry.target === logosRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            } else if (entry.target === metricsRef.current) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (logosRef.current) observer.observe(logosRef.current);
    if (metricsRef.current) observer.observe(metricsRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
      if (logosRef.current) observer.unobserve(logosRef.current);
      if (metricsRef.current) observer.unobserve(metricsRef.current);
    };
  }, []);

  return (
    <section className="relative py-20 bg-[#F9F6F3]" id="testimonials">
      <div className="container-section">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center opacity-0 transition-opacity duration-700"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-convrt-dark-blue text-sm font-medium mb-4">
            Success Stories
          </div>
          <h2 className="heading-lg text-convrt-dark-blue mb-6">
            Loved by Sales Teams <span className="text-[#6936F5]">Worldwide</span>
          </h2>
          <p className="text-convrt-dark-blue/70 text-lg mb-16 max-w-2xl mx-auto">
            Join hundreds of sales teams who've transformed their outbound with AI-driven social selling.
          </p>
        </div>
        
        <div 
          ref={testimonialsRef}
          className="grid md:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-700 delay-300 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-[20px] p-6 border border-gray-100 relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#6936F5]/10 flex items-center justify-center">
                <Quote className="w-4 h-4 text-[#6936F5]" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-convrt-dark-blue mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#6936F5]/30 flex items-center justify-center text-convrt-dark-blue/80 mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-convrt-dark-blue font-medium">{testimonial.name}</div>
                  <div className="text-convrt-dark-blue/60 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Logos Section with simplified rectangles */}
        <div 
          ref={logosRef}
          className="opacity-0 translate-y-8 transition-all duration-700 delay-400 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-convrt-dark-blue text-xl font-medium">Trusted by innovative companies</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {customerLogos.map((logo) => (
              <div 
                key={logo.id}
                className="bg-white rounded-[20px] aspect-[3/2] flex items-center justify-center border border-gray-100 p-4 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg ${logo.imageClass} flex items-center justify-center text-white font-bold text-xl`}>
                  {logo.name.charAt(0)}
                </div>
                <span className="ml-3 text-convrt-dark-blue font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div 
          ref={metricsRef}
          className="grid md:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-700 delay-500"
        >
          <div className="bg-white rounded-[20px] p-6 border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-[#6936F5] mb-2">$600K+</div>
            <div className="text-convrt-dark-blue/80">ARR Generated</div>
          </div>
          
          <div className="bg-white rounded-[20px] p-6 border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-[#6936F5] mb-2">10X</div>
            <div className="text-convrt-dark-blue/80">YoY Growth</div>
          </div>
          
          <div className="bg-white rounded-[20px] p-6 border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-[#6936F5] mb-2">80%</div>
            <div className="text-convrt-dark-blue/80">Less Prospecting Time</div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <a href="#cta" className="button-primary">
            See How It Works For You
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
