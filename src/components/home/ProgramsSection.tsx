'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { skillPrograms } from '@/data/trustData';
import { CheckCircle2, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

export const ProgramsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'gov' | 'free'>('all');

  const filteredPrograms = skillPrograms.filter(prog => {
    if (filter === 'gov') return prog.isGovernment;
    if (filter === 'free') return !prog.isGovernment;
    return true;
  });

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050811]/70 border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Skill Development & Employment"
          title="Government & Trust Sponsored"
          highlight="Vocational Initiatives"
          description="Providing industry-aligned certifications, hands-on toolkits, and direct recruitment pathways for students across West Bengal and India."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'all'
                ? 'neu-btn text-white'
                : 'neu-btn-ghost text-slate-300 hover:text-white'
            }`}
          >
            All Programs ({skillPrograms.length})
          </button>
          <button
            onClick={() => setFilter('gov')}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'gov'
                ? 'neu-btn text-white'
                : 'neu-btn-ghost text-slate-300 hover:text-white'
            }`}
          >
            Govt. Recognized (PMKVY / NSDC / PBSSD)
          </button>
          <button
            onClick={() => setFilter('free')}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'free'
                ? 'neu-btn text-white'
                : 'neu-btn-ghost text-slate-300 hover:text-white'
            }`}
          >
            100% Free Coaching
          </button>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <GlassCard
              key={prog.id}
              variant="glass"
              glow="orange"
              className="p-6 border-white/10 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Header with Logo */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden neu-inset p-1 border border-white/10 flex-shrink-0">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-white/5">
                      <Image
                        src={prog.image}
                        alt={prog.title}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400">
                      {prog.partner}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 mt-1.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {prog.studentsTrained}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {prog.title}
                </h3>

                <p className="text-sm text-slate-300/80 mb-5 leading-relaxed">
                  {prog.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6 pt-3 border-t border-white/5">
                  {prog.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <Link
                  href={`/enroll?program=${encodeURIComponent(prog.title)}`}
                  className="flex-1 py-2.5 px-4 rounded-xl neu-btn text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {prog.externalUrl && (
                  <a
                    href={prog.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl neu-btn-ghost text-slate-300 hover:text-white"
                    title="Official Portal"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
