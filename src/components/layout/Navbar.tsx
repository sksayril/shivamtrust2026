'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, Sparkles } from 'lucide-react';
import { NeumorphicButton } from '../ui/NeumorphicButton';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Institutions', href: '/institutions' },
    { name: 'Skill Development', href: '/skill-development' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-[#070b14]/90 backdrop-blur-md py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 p-1.5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md shadow-inner flex items-center justify-center group-hover:border-orange-500/50 transition-all">
              <Image
                src="/images/logos.png"
                alt="Shibham Trust Logo"
                width={52}
                height={52}
                className="object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-tight">
                SHIBHAM <span className="text-gradient-brand">TRUST</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-wide uppercase">
                Education & Social Welfare
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-all relative ${
                    isActive
                      ? 'text-orange-400 bg-white/5 shadow-inner border border-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-500"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <NeumorphicButton
              href="/enroll"
              variant="ghost"
              size="sm"
              icon={<Sparkles className="w-4 h-4 text-amber-400" />}
            >
              Enroll Online
            </NeumorphicButton>

            <NeumorphicButton
              href="/donate"
              variant="primary"
              size="sm"
              icon={<Heart className="w-4 h-4 text-white fill-white/80" />}
            >
              Donate Now
            </NeumorphicButton>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/donate"
              className="p-2.5 rounded-xl neu-btn text-white text-xs font-bold flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donate</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-orange-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-[#070b14]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-orange-500/15 text-orange-400 border border-orange-500/30 font-bold'
                      : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-orange-500"></span>}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <NeumorphicButton
                href="/enroll"
                variant="ghost"
                size="md"
                className="w-full justify-center"
                onClick={() => setIsOpen(false)}
                icon={<Sparkles className="w-4 h-4 text-amber-400" />}
              >
                Enroll In A Course
              </NeumorphicButton>

              <NeumorphicButton
                href="/donate"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setIsOpen(false)}
                icon={<Heart className="w-4 h-4 fill-white" />}
              >
                Donate & Support
              </NeumorphicButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
