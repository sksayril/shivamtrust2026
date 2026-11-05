'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { NeumorphicButton } from '../ui/NeumorphicButton';
import { institutions } from '@/data/trustData';
import { MapPin, ExternalLink, ArrowRight } from 'lucide-react';

export const InstitutionsCarousel: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Medical & Healthcare', 'Pharmacy', 'Engineering & Technical', 'Teacher Training', 'School Education'];

  const filteredInstitutions = selectedCategory === 'All'
    ? institutions
    : institutions.filter(inst => inst.category === selectedCategory);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Educational Ecosystem"
          title="Our Network Of"
          highlight="9 Prestigious Institutions"
          description="From modern medical campuses and pharmaceutical labs to diploma engineering institutes and elementary schools."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'neu-btn text-white'
                  : 'neu-btn-ghost text-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInstitutions.map((inst) => (
            <GlassCard
              key={inst.id}
              variant="glass"
              className="p-5 border-white/10 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 w-full rounded-2xl overflow-hidden mb-5 border border-white/10 neu-inset">
                  <Image
                    src={inst.image}
                    alt={inst.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent"></div>

                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-orange-400 border border-white/10">
                    {inst.category}
                  </span>
                </div>

                {/* Details */}
                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-orange-400 transition-colors">
                  {inst.name}
                </h3>

                <p className="text-xs text-slate-400 flex items-start gap-1.5 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>{inst.address} (PIN - {inst.pin})</span>
                </p>

                <p className="text-xs text-slate-300/80 leading-relaxed mb-4 line-clamp-2">
                  {inst.description}
                </p>

                {/* Courses pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {inst.courses.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 border border-white/10 text-slate-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={inst.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Visit Official Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/enroll"
                  className="px-3 py-1.5 rounded-xl neu-btn-ghost text-xs font-semibold text-slate-200 hover:text-white"
                >
                  Enroll
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <NeumorphicButton
            href="/institutions"
            variant="ghost"
            size="md"
            icon={<ArrowRight className="w-4 h-4 text-orange-400" />}
          >
            Explore Complete Institution Directory
          </NeumorphicButton>
        </div>
      </div>
    </section>
  );
};
