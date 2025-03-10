
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  value: string;
  description: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ value, description, icon }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-white/50 hover:shadow-2xl hover:shadow-[#6936F5]/10 transition-all duration-500 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#6936F5]/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
      <div className="p-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6936F5]/10 text-[#6936F5] mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex items-baseline gap-1">
          <div className="text-5xl font-bold text-[#6936F5] font-inter relative z-10">{value}</div>
        </div>
        <div className="text-convrt-dark-blue/80 mt-2 font-inter text-xl font-semibold relative z-10">
          {description}
        </div>
        <div className="text-convrt-dark-blue/60 text-sm mt-2 relative z-10 leading-relaxed">
          Turn cold prospects into warm leads through AI-driven social touchpoints
        </div>
      </div>
    </div>
  );
};

export default StatCard;
