import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { NeumorphicButton } from '../ui/NeumorphicButton';
import { leadership } from '@/data/trustData';
import { HeartPulse, GraduationCap, Sparkles, Shield, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <GraduationCap className="w-5 h-5 text-orange-400" />,
      title: "Quality Education for All",
      desc: "Establishing world-class schools, degree colleges, and teacher training academies accessible to all social strata."
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-rose-400" />,
      title: "Improving Healthcare Access",
      desc: "Operating a premier medical college, rural health camps, free medicine distribution, and emergency ambulance support."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      title: "Industry Skill & Employment",
      desc: "Government-certified training under PMKVY, NSDC, and PBSSD with direct job placement assistance across India."
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      title: "Women & Rural Upliftment",
      desc: "Empowering young women through vocational tailoring labs, scholarships, self-help groups, and computer literacy."
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="A Legacy Of Hope & Service"
          title="Shaping Careers, Transforming Lives Since"
          highlight="2006"
          description="Shibham Education & Social Welfare Trust was formed with a special focus on enhancing youth employability beyond conventional mainstream education."
        />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar) => (
            <GlassCard
              key={pillar.title}
              variant="glass"
              className="p-6 border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl neu-convex flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-300/80 leading-relaxed">{pillar.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Leadership Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl neu-flat relative overflow-hidden">
          {/* Ambient light inside */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-wider font-bold text-orange-400">
                Pioneering Leadership
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Guided by Compassion & Industrial Excellence
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Founded under the leadership of visionary industrialist <strong className="text-white">Jakir Hossain</strong> and dedicated social worker <strong className="text-white">Dipak Kumar Das</strong>, the Trust strives to make every youth self-reliant and productive.
              </p>
              <div className="pt-2">
                <NeumorphicButton
                  href="/about"
                  variant="outline"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Read Full Trust History
                </NeumorphicButton>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {leadership.map((leader) => (
                <GlassCard
                  key={leader.name}
                  variant="glass"
                  className="p-5 border-white/10 flex flex-col items-center text-center group"
                >
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden mb-4 neu-inset p-1 border border-white/15">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-0.5">{leader.name}</h4>
                  <span className="text-xs font-semibold text-orange-400 mb-1">{leader.role}</span>
                  <p className="text-[11px] text-slate-400 font-medium mb-3">{leader.title}</p>
                  <p className="text-xs text-slate-300/80 leading-relaxed text-justify line-clamp-4">
                    {leader.bio}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
