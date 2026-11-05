'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { NeumorphicButton } from '@/components/ui/NeumorphicButton';
import { trustInfo } from '@/data/trustData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Banner */}
        <div className="relative p-8 sm:p-14 rounded-3xl neu-convex border border-white/10 overflow-hidden text-center">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[130px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 border border-orange-500/30 text-orange-400">
              <MessageSquare className="w-3.5 h-3.5" />
              We Are Here To Assist You
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Get In Touch With{' '}
              <span className="text-gradient-brand">Our Helpdesk</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Have questions regarding admissions, PMKVY/NSDC skill batches, medical college inquiries, or welfare collaboration? Contact our offices.
            </p>
          </div>
        </div>

        {/* Office Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Registered Office */}
          <GlassCard variant="glass" className="p-8 border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl neu-convex flex items-center justify-center text-orange-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  Registered Headquarters
                </span>
                <h3 className="text-xl font-bold text-white">Aurangabad, Murshidabad</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {trustInfo.registeredOffice.address}
            </p>

            <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>+91 70019 08806 / +91 78658 44944</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Monday – Saturday: 9:30 AM – 6:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(trustInfo.registeredOffice.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-orange-400 hover:text-orange-300 underline inline-block"
              >
                View on Google Maps &rarr;
              </a>
            </div>
          </GlassCard>

          {/* Corporate Office */}
          <GlassCard variant="glass" className="p-8 border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl neu-convex flex items-center justify-center text-amber-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Corporate Office
                </span>
                <h3 className="text-xl font-bold text-white">Park Street, Kolkata</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {trustInfo.corporateOffice.address}
            </p>

            <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>info@shibhamtrust.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-orange-400" />
                <span>Monday – Friday: 10:00 AM – 6:30 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(trustInfo.corporateOffice.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 underline inline-block"
              >
                View on Google Maps &rarr;
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            badge="Direct Message"
            title="Send Us An"
            highlight="Inquiry"
            description="Leave your message and contact details below; our administrative officers will reach back to you within 24 hours."
          />

          {submitted ? (
            <GlassCard variant="glass" className="p-8 sm:p-12 text-center border-emerald-500/30">
              <div className="w-16 h-16 rounded-full neu-inset mx-auto flex items-center justify-center text-emerald-400 mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-sm text-slate-300 mb-6">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry has been routed to our student and administration support desk.
              </p>
              <NeumorphicButton
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                }}
                variant="ghost"
                size="sm"
              >
                Send Another Message
              </NeumorphicButton>
            </GlassCard>
          ) : (
            <GlassCard variant="glass" className="p-6 sm:p-10 border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sourav Roy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500/60"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500/60"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Admission Inquiry / PMKVY Batch"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500/60"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your query in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500/60"
                  />
                </div>

                <NeumorphicButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={loading}
                  className="w-full justify-center"
                  icon={<Send className="w-5 h-5" />}
                >
                  {loading ? 'Sending Message...' : 'Send Message To Desk'}
                </NeumorphicButton>
              </form>
            </GlassCard>
          )}
        </div>
      </div>
    </div>
  );
}

