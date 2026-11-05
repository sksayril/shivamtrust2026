import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { leadership } from '@/data/trustData';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: "About Us & History | Shibham Education & Social Welfare Trust",
  description: "Learn about the history, vision, leadership, and philanthropic journey of Shibham Trust since 2006 under Jakir Hossain and Dipak Kumar Das."
};

export default function AboutPage() {
  const milestones = [
    { year: "2006", title: "Foundation in Aurangabad", desc: "Started under the leadership of industrialist Jakir Hossain & social worker Dipak Kumar Das to empower rural youth." },
    { year: "2010", title: "Expansion into Teacher Training", desc: "Established B.Ed and D.El.Ed teacher education institutions to supply trained teachers to Bengal schools." },
    { year: "2015", title: "Technical & Polytechnic Labs", desc: "Inaugurated AICTE approved Jakir Hossain Polytechnic and English Oriental Academy." },
    { year: "2018", title: "National Skill Missions", desc: "Became official training partners for NSDC, PMKVY, PBSSD (Utkarsh Bangla) and WBSCL." },
    { year: "2023", title: "Medical College & Super Specialty Hospital", desc: "Launched Jakir Hossain Medical College & Research Institute, bringing tertiary healthcare to Murshidabad." },
    { year: "Future", title: "2 Million Skill Mission", desc: "Executing nationwide vocational training centers to skill 2 million youth over the next decade." }
  ];

  return (
    <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Hero Banner */}
        <div className="relative p-8 sm:p-14 rounded-3xl neu-convex border border-white/10 overflow-hidden text-center">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[130px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 border border-orange-500/30 text-orange-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Serving Society Since 2006
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              A Legacy of Hope, Education &{' '}
              <span className="text-gradient-brand">Empowerment</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Shibham Education & Social Welfare Trust has been a beacon of transformation for over 19 years, delivering premier education, super-specialty healthcare, and job-oriented vocational skills in rural West Bengal.
            </p>
          </div>
        </div>

        {/* History & Genesis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="Our Genesis"
              title="Formed To Solve The"
              highlight="Employability Divide"
              align="left"
            />
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Shibham Education and Social Welfare Trust started its numerous activities under the leadership of visionary industrialist <strong className="text-white">Jakir Hossain</strong> and dedicated social worker <strong className="text-white">Dipak Kumar Das</strong> in 2006. With its registered office at Aurangabad, Murshidabad, the trust was formed with a special focus on the enhancement of employability of the young generation beyond conventional mainstream education.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Today, conventional degrees alone are often insufficient for modern corporate and technical demands. Shibham Trust addresses this disconnect through comprehensive vocational partnerships with <strong className="text-white">NSDC, PMKVY, PBSSD, DVET, and Skill India</strong>, alongside establishing modern institutions in Medicine, Pharmacy, Engineering, and Teacher Training.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl neu-inset border border-white/5">
                <span className="text-xs font-bold text-orange-400 uppercase block mb-1">Our Mission</span>
                <p className="text-xs text-slate-300">Empowering underprivileged communities with equal access to healthcare, digital schooling, and job-oriented training.</p>
              </div>
              <div className="p-4 rounded-xl neu-inset border border-white/5">
                <span className="text-xs font-bold text-amber-400 uppercase block mb-1">Our 2M Vision</span>
                <p className="text-xs text-slate-300">Skilling 2 million young men and women in the next 10 years to build a self-reliant and productive society.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <GlassCard variant="glass" className="p-4 border-white/10 shadow-2xl">
              <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/11.png"
                  alt="Jakir Hossain Medical College"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-bold text-white">Healthcare & Educational Transformation</p>
                  <p className="text-[11px] text-slate-400">Jakir Hossain Medical College & Research Institute</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Leadership Section */}
        <div>
          <SectionHeading
            badge="Guiding Forces"
            title="Visionary"
            highlight="Leadership"
            description="The dedicated leaders who laid the foundation and continue to steer Shibham Trust towards new milestones."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader) => (
              <GlassCard
                key={leader.name}
                variant="neu-flat"
                className="p-8 border-white/10 flex flex-col sm:flex-row gap-6 items-center sm:items-start group"
              >
                <div className="relative w-36 h-36 rounded-2xl overflow-hidden neu-inset p-1 border border-white/15 flex-shrink-0">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                    {leader.role}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                  <p className="text-xs font-medium text-slate-400">{leader.title}</p>
                  <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed pt-2">
                    {leader.bio}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Timeline Journey */}
        <div>
          <SectionHeading
            badge="Historical Milestones"
            title="Our Journey of"
            highlight="19+ Years"
            description="From a single rural welfare initiative in Murshidabad to a multi-campus educational hub."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <GlassCard
                key={m.year}
                variant="glass"
                className="p-6 border-white/10 relative overflow-hidden"
              >
                <div className="text-3xl font-black text-gradient-brand mb-2">{m.year}</div>
                <h4 className="text-lg font-bold text-white mb-2">{m.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">{m.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
