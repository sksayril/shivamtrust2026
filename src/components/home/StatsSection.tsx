import React from 'react';
import { trustStats } from '@/data/trustData';
import { Users, Building2, TrendingUp, Target, Calendar } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const icons = [
    <Users key="users" className="w-6 h-6 text-orange-400" />,
    <Building2 key="bld" className="w-6 h-6 text-amber-400" />,
    <TrendingUp key="trend" className="w-6 h-6 text-emerald-400" />,
    <Target key="target" className="w-6 h-6 text-rose-400" />,
    <Calendar key="cal" className="w-6 h-6 text-sky-400" />
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-[#050811]/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {trustStats.map((stat, idx) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl neu-flat hover:neu-convex transition-all group flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Subtle top indicator line */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent group-hover:via-orange-500 transition-all"></div>

              <div className="w-12 h-12 rounded-xl neu-inset flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {icons[idx]}
              </div>

              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1 text-gradient-brand">
                {stat.value}
              </span>

              <span className="text-xs sm:text-sm font-bold text-slate-200 mb-0.5">
                {stat.label}
              </span>

              <span className="text-[11px] text-slate-400">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

