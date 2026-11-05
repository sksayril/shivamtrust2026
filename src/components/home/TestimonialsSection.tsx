import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { testimonials } from '@/data/trustData';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Voices of Success"
          title="Inspiring Stories From Our"
          highlight="Students & Alumni"
          description="Hear from real graduates whose lives and careers took flight through Shibham Trust's educational institutions and vocational training programs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <GlassCard
              key={t.name}
              variant="glass"
              className="p-8 border-white/10 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl neu-convex flex items-center justify-center text-orange-400">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col">
                <h4 className="text-base font-bold text-white">{t.name}</h4>
                <p className="text-xs text-orange-400 font-medium">{t.course}</p>
                <p className="text-[11px] text-slate-400">{t.institution} • {t.year}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

