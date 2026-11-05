import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Stethoscope, Briefcase, GraduationCap, Users2, ShieldCheck } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const initiatives = [
    {
      icon: <Stethoscope className="w-6 h-6 text-rose-400" />,
      title: "Rural Health & Medical Camps",
      stats: "50,000+ Beneficiaries",
      desc: "Free specialist checkups, cardiac screenings, medicine distribution, and eye health camps in remote villages of Murshidabad and neighboring districts."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-amber-400" />,
      title: "Pan-India Placement Cell",
      stats: "85%+ Placement Record",
      desc: "Connecting students to recognized recruiters across IT, healthcare facilities, polytechnic industries, schools, and pharmaceutical laboratories."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-orange-400" />,
      title: "Free Coaching Initiative",
      stats: "12,000+ Trained Free",
      desc: "Completely funded coaching for competitive exams, WBCS, teacher eligibility tests (TET), computer literacy, and communicative English."
    },
    {
      icon: <Users2 className="w-6 h-6 text-emerald-400" />,
      title: "Women Empowerment Centers",
      stats: "Self-Help Groups Supported",
      desc: "Stitching units, tailoring skill training, and micro-loan counseling to foster financial self-reliance among underprivileged rural women."
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#04070e] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Measurable Impact"
          title="Transforming Grassroots"
          highlight="Communities"
          description="Every initiative by Shibham Trust is grounded in direct social empowerment, healthcare delivery, and long-term economic independence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {initiatives.map((item) => (
            <GlassCard
              key={item.title}
              variant="neu-flat"
              className="p-6 border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl neu-inset flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-orange-400 tracking-wider uppercase mb-1 block">
                  {item.stats}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-300/80 leading-relaxed">{item.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="p-8 sm:p-12 rounded-3xl neu-convex relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-600/15 via-rose-600/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Registered Under Indian Trusts Act 1882</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Our Vision: Building a Self-Reliant & Literate Nation
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We envision a future where geographical location or economic standing does not dictate a youth&apos;s destiny. Through modern medical infra, technological skill development, and compassionate social welfare, Shibham Trust continues to illuminate lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
