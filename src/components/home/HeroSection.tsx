import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Heart, Award, Users, BookOpen, GraduationCap } from 'lucide-react';
import { NeumorphicButton } from '../ui/NeumorphicButton';
import { GlassCard } from '../ui/GlassCard';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic ambient background orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-600/15 via-rose-600/15 to-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse duration-1000"></div>
      <div className="absolute top-12 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-700/15 rounded-full blur-[110px] pointer-events-none -z-10"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-inner">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 animate-ping"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
              Est. 2006 • Skilling <span className="text-orange-400 font-bold">2 Million</span> Indian Youth
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.1]">
            Empowering Minds,{' '}
            <span className="text-gradient-brand">
              Transforming
            </span>{' '}
            Rural India.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Under the vision of industrialist <span className="text-white font-medium">Jakir Hossain</span> & social worker <span className="text-white font-medium">Dipak Kumar Das</span>, Shibham Trust bridges the gap between conventional education and modern employment with 9 institutions & nationwide skill programs.
          </p>

          {/* Key Quick Points */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              <GraduationCap className="w-4 h-4 text-orange-400" />
              <span>Medical, Pharmacy & Polytechnic</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              <Award className="w-4 h-4 text-amber-400" />
              <span>PMKVY & NSDC Training Partner</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              <Heart className="w-4 h-4 text-rose-400" />
              <span>100% Free Coaching Available</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <NeumorphicButton
              href="/institutions"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore 9 Institutions
            </NeumorphicButton>

            <NeumorphicButton
              href="/enroll"
              variant="ghost"
              size="lg"
              icon={<Sparkles className="w-5 h-5 text-amber-400" />}
            >
              Enroll In Courses
            </NeumorphicButton>

            <NeumorphicButton
              href="/donate"
              variant="outline"
              size="lg"
              icon={<Heart className="w-5 h-5 text-rose-500 fill-rose-500" />}
            >
              Donate
            </NeumorphicButton>
          </div>
        </div>

        {/* Right Column: Glassmorphic Interactive Visual */}
        <div className="lg:col-span-5 relative flex justify-center">
          {/* Main Visual Card */}
          <div className="relative w-full max-w-md lg:max-w-none">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-500 to-rose-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>

            <GlassCard
              variant="glass"
              hoverEffect={false}
              className="p-3 sm:p-4 rounded-3xl overflow-hidden border-white/15 bg-slate-900/80 shadow-2xl"
            >
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/11.png"
                  alt="Jakir Hossain Medical College & Research Institute"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070b14]/85 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                    Flagship Institute
                  </span>
                  <h3 className="text-sm font-bold text-white truncate">
                    Jakir Hossain Medical College & Research Institute
                  </h3>
                  <p className="text-[11px] text-slate-300">Raghunathganj, Murshidabad • MBBS & Healthcare</p>
                </div>
              </div>

              {/* Floating Stat Badges */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="p-3 rounded-xl neu-convex">
                  <div className="flex items-center gap-2 text-orange-400 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-bold">32,000+</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-medium">Students Skilled & Trained</p>
                </div>

                <div className="p-3 rounded-xl neu-convex">
                  <div className="flex items-center gap-2 text-amber-400 mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-xs font-bold">9 Campuses</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-medium">Professional Institutions</p>
                </div>
              </div>
            </GlassCard>

            {/* Overlapping Glass Pill */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 p-3 rounded-2xl glass-panel border border-white/15 shadow-xl flex items-center gap-3 backdrop-blur-2xl">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 font-black shadow-md">
                19+
              </div>
              <div>
                <p className="text-xs font-bold text-white">Years of Social Service</p>
                <p className="text-[10px] text-slate-400">Committed to Rural West Bengal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
