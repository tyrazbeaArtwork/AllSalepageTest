
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageCircle } from 'lucide-react';

const BusinessProblemSection = () => {
  return (
    <section id="problem" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 mb-8 border border-red-200">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Business Growth Challenge</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Losing Customers to 
            <span className="text-red-500 block">Unprofessional Design?</span>
          </h2>
          
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every day your business looks unprofessional is money lost to competitors with better design and stronger brand presence.
          </p>

          {/* Problem Dialog */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border max-w-2xl mx-auto mb-12">
            <div className="flex items-start space-x-4">
              <MessageCircle className="w-6 h-6 text-orange-500 mt-1" />
              <div className="text-left">
                <p className="text-slate-700 mb-4 italic">
                  "Customers visit my website but don't trust us enough to buy. My competitors with better design are stealing my sales..."
                </p>
                <p className="text-sm text-slate-500">- Every business owner's struggle</p>
              </div>
            </div>
          </div>

          {/* Priority Stakes */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "💸", title: "Lost Revenue", desc: "Poor design costs sales daily" },
              { icon: "😰", title: "No Trust", desc: "Customers doubt your credibility" },
              { icon: "📉", title: "Behind Competitors", desc: "Others are winning your customers" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i, duration: 0.6 }}
                className="bg-red-50 p-6 rounded-xl border border-red-200"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessProblemSection;
