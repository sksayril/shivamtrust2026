import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Heart, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#04060c] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Trust Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 p-1 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                <Image
                  src="/images/logos.png"
                  alt="Shibham Trust"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-tight">
                  SHIBHAM <span className="text-gradient-brand">TRUST</span>
                </h3>
                <p className="text-xs text-slate-400 font-medium">Est. 2006 • West Bengal</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Shibham Education & Social Welfare Trust is a registered charitable trust dedicated to vocational training, medical & professional education, healthcare outreach, and skilling 2 million youth across India.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Govt. Recognized NGO</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-orange-500 pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500/70 group-hover:translate-x-1 transition-transform" />
                  <span>Home Overview</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500/70 group-hover:translate-x-1 transition-transform" />
                  <span>About & Leadership</span>
                </Link>
              </li>
              <li>
                <Link href="/institutions" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500/70 group-hover:translate-x-1 transition-transform" />
                  <span>Our 9 Institutions</span>
                </Link>
              </li>
              <li>
                <Link href="/skill-development" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500/70 group-hover:translate-x-1 transition-transform" />
                  <span>Skill Development (PMKVY/NSDC)</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500/70 group-hover:translate-x-1 transition-transform" />
                  <span>Photo Gallery & Events</span>
                </Link>
              </li>
              <li>
                <Link href="/enroll" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500/70 group-hover:translate-x-1 transition-transform" />
                  <span>Student Online Enrollment</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Institutions & Programs */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Affiliated Institutions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href="https://jhmcri.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span className="truncate pr-2">Jakir Hossain Medical College</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 flex-shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.jhip.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span className="truncate pr-2">Jakir Hossain Pharmacy Institute</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 flex-shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://aurangabadptti.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span className="truncate pr-2">Aurangabad B.Ed & PTTI</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 flex-shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.schoolaps.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span className="truncate pr-2">Aurangabad Public School</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 flex-shrink-0" />
                </a>
              </li>
              <li>
                <Link
                  href="/institutions"
                  className="text-xs text-amber-400 font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                >
                  View All 9 Institutions &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-rose-500 pl-3">
              Offices & Help Desk
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">Registered Office:</strong>
                  <span>Vill & P.O- Aurangabad, P.S- Suti, Dist- Murshidabad, WB - 742201</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">Corporate Office:</strong>
                  <span>30 Jawaharlal Nehru Rd, Chowranghee Mansion, 3rd Fl, Rm 303, Kolkata - 700016</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+917001908806" className="hover:text-white transition-colors">
                  +91 70019 08806 / +91 78658 44944
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:info@shibhamtrust.in" className="hover:text-white transition-colors">
                  info@shibhamtrust.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Shibham Education & Social Welfare Trust. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Support Center
            </Link>
            <Link href="/donate" className="hover:text-slate-300 transition-colors flex items-center gap-1 text-orange-400">
              <Heart className="w-3 h-3 fill-orange-400" />
              <span>Donate Online</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
