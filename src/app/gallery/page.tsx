'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GlassCard } from '@/components/ui/GlassCard';
import { galleryItems } from '@/data/trustData';
import { Camera, X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const categories = ['All', 'Skill Training', 'Medical Camps', 'Campus Life', 'Community Welfare'];

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Banner */}
        <div className="relative p-8 sm:p-14 rounded-3xl neu-convex border border-white/10 overflow-hidden text-center">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[130px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 border border-orange-500/30 text-orange-400">
              <Camera className="w-3.5 h-3.5" />
              Moments of Action
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Events & Photo{' '}
              <span className="text-gradient-brand">Gallery</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Real glimpses of our vocational training centers, healthcare relief drives, student convocations, and grassroots community empowerment initiatives.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'neu-btn text-white'
                  : 'neu-btn-ghost text-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <GlassCard
              key={item.id}
              variant="glass"
              className="p-3 border-white/10 group cursor-pointer overflow-hidden"
              onClick={() => setActiveImage(item.image)}
            >
              <div className="relative h-60 w-full rounded-xl overflow-hidden neu-inset">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="text-[10px] uppercase font-bold text-orange-400 mb-1">
                    {item.category}
                  </span>
                  <p className="text-xs font-bold text-white line-clamp-2">
                    {item.title}
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-[11px] text-amber-400">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View Larger</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[85vh] w-full h-[75vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage}
                alt="Enlarged view"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-orange-500 transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
