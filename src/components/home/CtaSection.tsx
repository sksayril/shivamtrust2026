import React from 'react';
import { NeumorphicButton } from '../ui/NeumorphicButton';
import { Heart, Sparkles, PhoneCall, ArrowRight } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0d1527] to-[#070b14] border border-white/15 shadow-[0_25px_60px_-15px_rgba(255,87,51,0.25)] text-center overflow-hidden">
          {/* Ambient lighting inside CTA */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-orange-500/20 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 border border-orange-500/30 text-orange-400">
              <Sparkles className="w-3.5 h-3.5" />
              Join Our Mission
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl mx-auto">
              Ready To Build A{' '}
              <span className="text-gradient-brand">Brighter Future</span>{' '}
              Together?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Whether you are an aspiring student seeking industry-ready skill certifications or a supporter eager to sponsor a rural student&apos;s education, we welcome you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <NeumorphicButton
                href="/enroll"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Enroll In Courses
              </NeumorphicButton>

              <NeumorphicButton
                href="/donate"
                variant="amber"
                size="lg"
                icon={<Heart className="w-5 h-5 text-slate-950 fill-slate-950" />}
              >
                Make A Donation
              </NeumorphicButton>

              <NeumorphicButton
                href="/contact"
                variant="ghost"
                size="lg"
                icon={<PhoneCall className="w-4 h-4 text-orange-400" />}
              >
                Contact Helpdesk
              </NeumorphicButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
