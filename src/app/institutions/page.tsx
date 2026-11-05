'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { institutions } from '@/data/trustData';
import { Search, MapPin, ExternalLink, GraduationCap, ArrowRight } from 'lucide-react';

export default function InstitutionsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Medical & Healthcare', 'Pharmacy', 'Engineering & Technical', 'Teacher Training', 'School Education'];

  const filtered = institutions.filter(inst => {
    const matchesCat = selectedCategory === 'All' || inst.category === selectedCategory;
    const matchesSearch = inst.name.toLowerCase().includes(search.toLowerCase()) ||
                          inst.courses.some(c => c.toLowerCase().includes(search.toLowerCase())) ||
                          inst.address.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Banner */}
        <div className="relative p-8 sm:p-14 rounded-3xl neu-convex border border-white/10 overflow-hidden text-center">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[130px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 border border-orange-500/30 text-orange-400">
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Network
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our 9 Renowned{' '}
              <span className="text-gradient-brand">Institutions</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Equipping thousands of students each year with degrees, diplomas, and state-of-the-art laboratory training across Murshidabad, West Bengal.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 rounded-2xl neu-flat">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by college, course, or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-orange-500/60"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'neu-btn text-white'
                    : 'neu-btn-ghost text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((inst) => (
            <GlassCard
              key={inst.id}
              variant="glass"
              className="p-5 border-white/10 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-5 border border-white/10 neu-inset">
                  <Image
                    src={inst.image}
                    alt={inst.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent"></div>

                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-orange-400 border border-white/10">
                    {inst.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {inst.name}
                </h3>

                <p className="text-xs text-slate-400 flex items-start gap-1.5 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>{inst.address} (PIN - {inst.pin})</span>
                </p>

                <p className="text-xs text-slate-300/80 leading-relaxed mb-4">
                  {inst.description}
                </p>

                <div className="space-y-1.5 mb-5">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                    Offered Programs:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
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
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={inst.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span>Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href={`/enroll?institution=${encodeURIComponent(inst.name)}`}
                  className="px-3.5 py-1.5 rounded-xl neu-btn text-white text-xs font-bold flex items-center gap-1"
                >
                  <span>Apply</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl neu-flat text-slate-400">
            <p className="text-lg font-bold text-white mb-2">No institutions found matching your criteria</p>
            <p className="text-sm">Try resetting your search query or selecting &quot;All&quot; categories.</p>
          </div>
        )}
      </div>
    </div>
  );
}
