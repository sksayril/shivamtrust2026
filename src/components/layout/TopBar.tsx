import React from 'react';
import { Phone, Mail, MapPin, Heart, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#050811] border-b border-white/5 text-xs text-slate-400 py-2 px-4 sm:px-8 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-slate-300 font-medium">Govt. Registered Public Charitable Trust (Est. 2006)</span>
          </div>
          <div className="flex items-center gap-2 hover:text-orange-400 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-orange-400" />
            <span>Aurangabad, Murshidabad & Park St., Kolkata</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="tel:+917001908806"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>+91 70019 08806</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:info@shibhamtrust.in"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>info@shibhamtrust.in</span>
            </a>
          </div>

          <Link
            href="/donate"
            className="inline-flex items-center gap-1 text-orange-400 font-semibold hover:text-orange-300 transition-colors group"
          >
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 group-hover:scale-125 transition-transform" />
            <span>Support a Student</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

