import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { NeumorphicButton } from '@/components/ui/NeumorphicButton';
import { skillPrograms } from '@/data/trustData';
import { Award, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "Skill Development & Employment | Shibham Education & Social Welfare Trust",
  description: "Official vocational skill training programs under NSDC, PMKVY, PBSSD, WBSCL, and Jakir Hossain Free Coaching Center."
};

export default function SkillDevelopmentPage() {
  const stats = [
    { num: "32,000+", label: "Total Candidates Skilled" },
    { num: "85%+", label: "Job Placement Support" },
    { num: "100%", label: "Govt. Approved Certifications" },
    { num: "0 Fee", label: "Under Free Coaching Scheme" }
  ];

  return (
    <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Banner */}
        <div className="relative p-8 sm:p-14 rounded-3xl neu-convex border border-white/10 overflow-hidden text-center">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[130px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 border border-orange-500/30 text-orange-400">
              <Award className="w-3.5 h-3.5" />
              National & State Skill Missions
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Skill Development &{' '}
              <span className="text-gradient-brand">Career Excellence</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide formal vocational training, industry certifications, soft skills, and placement assistance to empower youth for direct corporate and self-employment opportunities.
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="p-6 rounded-2xl neu-flat text-center">
              <span className="text-3xl sm:text-4xl font-black text-gradient-brand block mb-1">
                {s.num}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-300">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Programs Detail Cards */}
        <div className="space-y-8">
          <SectionHeading
            badge="Vocational Pathways"
            title="Explore Government & Trust"
            highlight="Skill Programs"
            description="Select a program to review syllabus modules, eligibility criteria, and certification benefits."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillPrograms.map((prog) => (
              <GlassCard
                key={prog.id}
                variant="glass"
                className="p-8 border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden neu-inset p-1 border border-white/10 flex-shrink-0">
                      <div className="relative w-full h-full rounded-xl overflow-hidden bg-white/5">
                        <Image
                          src={prog.image}
                          alt={prog.title}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-orange-500/15 border border-orange-500/30 text-orange-400 mb-1">
                        {prog.partner}
                      </span>
                      <p className="text-xs font-semibold text-emerald-400">
                        {prog.studentsTrained}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  <div className="space-y-2.5 mb-8 p-4 rounded-xl neu-inset border border-white/5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Highlights:
                    </span>
                    {prog.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={`/enroll?program=${encodeURIComponent(prog.title)}`}
                    className="w-full sm:flex-1 py-3 px-6 rounded-xl neu-btn text-white text-xs font-bold text-center flex items-center justify-center gap-2"
                  >
                    <span>Apply For This Course</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {prog.externalUrl && (
                    <a
                      href={prog.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3 px-4 rounded-xl neu-btn-ghost text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5"
                    >
                      <span>Govt. Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Placement Cell Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl neu-convex border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Corporate Placements
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Nationwide Placement Support by Shibham Trust
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Shibham Education & Social Welfare Trust provides nationwide placement assistance for students across India. With strong industry ties, we connect candidates to top recruiters in IT, healthcare, hospitality, banking, logistics, and engineering industries.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <NeumorphicButton
                href="/enroll"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Register For Placement
              </NeumorphicButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
