'use client';

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { NeumorphicButton } from '@/components/ui/NeumorphicButton';
import { trustInfo } from '@/data/trustData';
import { Heart, ShieldCheck, CheckCircle2, Building, Copy, Check } from 'lucide-react';

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedCause, setSelectedCause] = useState<string>('Free Coaching & Youth Skill Training');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPan, setDonorPan] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const presetAmounts = [500, 1000, 2500, 5000, 10000];

  const causes = [
    'Free Coaching & Youth Skill Training',
    'Rural Healthcare & Medical Camps',
    'Girl Child Education & Scholarships',
    'Needy Family Relief & Winter Warmth'
  ];

  const effectiveAmount = customAmount ? Number(customAmount) || 0 : selectedAmount;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Banner */}
        <div className="relative p-8 sm:p-14 rounded-3xl neu-convex border border-white/10 overflow-hidden text-center">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-600/15 rounded-full blur-[130px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/15 border border-rose-500/30 text-rose-400">
              <Heart className="w-3.5 h-3.5 fill-rose-400" />
              Support Our Noble Cause
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Invest In A Student&apos;s{' '}
              <span className="text-gradient-brand">Future</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Your contribution enables free medical checkups, skill development kits, and competitive exam books for deserving underprivileged youths.
            </p>
          </div>
        </div>

        {/* Donation Portal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Donation Form */}
          <div className="lg:col-span-7">
            {showSuccess ? (
              <GlassCard variant="glass" className="p-8 sm:p-12 text-center border-emerald-500/40">
                <div className="w-20 h-20 rounded-full neu-inset mx-auto flex items-center justify-center text-emerald-400 mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  Thank You For Your Kindness!
                </h2>

                <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto mb-6">
                  Pledge of <strong className="text-emerald-400">₹{effectiveAmount.toLocaleString()}</strong> for <strong className="text-white">{selectedCause}</strong> registered successfully.
                </p>

                <div className="p-4 rounded-xl neu-inset max-w-sm mx-auto text-xs text-slate-300 mb-6 space-y-1">
                  <p>Donor: {donorName || 'Generous Benefactor'}</p>
                  <p>Tax 80G Receipt: Will be emailed to {donorEmail || 'your email'}</p>
                </div>

                <NeumorphicButton
                  onClick={() => setShowSuccess(false)}
                  variant="ghost"
                  size="sm"
                >
                  Make Another Contribution
                </NeumorphicButton>
              </GlassCard>
            ) : (
              <GlassCard variant="glass" className="p-6 sm:p-10 border-white/10 space-y-8">
                <form onSubmit={handleDonateSubmit} className="space-y-8">
                  {/* Amount Selector */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
                      1. Select Contribution Amount (₹ INR)
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                      {presetAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amt);
                            setCustomAmount('');
                          }}
                          className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                            selectedAmount === amt && !customAmount
                              ? 'neu-btn text-white scale-105'
                              : 'neu-btn-ghost text-slate-300 hover:text-white'
                          }`}
                        >
                          ₹{amt.toLocaleString()}
                        </button>
                      ))}
                    </div>

                    <div className="pt-2">
                      <input
                        type="number"
                        placeholder="Or enter custom amount in ₹"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(0);
                        }}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070b14] border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/60"
                      />
                    </div>
                  </div>

                  {/* Cause Selector */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
                      2. Choose Cause / Welfare Initiative
                    </label>
                    <div className="space-y-2">
                      {causes.map((cause) => (
                        <label
                          key={cause}
                          className={`flex items-center gap-3 p-3.5 rounded-xl neu-inset border cursor-pointer transition-all ${
                            selectedCause === cause
                              ? 'border-orange-500 text-white bg-orange-500/10'
                              : 'border-white/5 text-slate-400'
                          }`}
                        >
                          <input
                            type="radio"
                            name="cause"
                            value={cause}
                            checked={selectedCause === cause}
                            onChange={(e) => setSelectedCause(e.target.value)}
                            className="text-orange-500 focus:ring-0"
                          />
                          <span className="text-xs sm:text-sm font-semibold">{cause}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Donor Info */}
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
                      3. Donor Details for 80G Tax Exemption Receipt
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070b14] border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/60"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email (for tax receipt) *"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070b14] border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/60"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="PAN Number (Optional, for 80G tax benefit certificate)"
                      value={donorPan}
                      onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070b14] border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/60"
                    />
                  </div>

                  <NeumorphicButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    icon={<Heart className="w-5 h-5 fill-white" />}
                  >
                    Proceed To Donate ₹{effectiveAmount.toLocaleString()}
                  </NeumorphicButton>
                </form>
              </GlassCard>
            )}
          </div>

          {/* Right: Direct Bank & Trust Transparency Card */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard variant="glass" className="p-6 sm:p-8 border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl neu-convex flex items-center justify-center text-amber-400">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct Bank NEFT / RTGS Transfer</h3>
                  <p className="text-xs text-slate-400">Official Trust Account</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl neu-inset flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 block text-[10px]">ACCOUNT NAME</span>
                    <strong className="text-white font-mono">{trustInfo.name}</strong>
                  </div>
                  <button
                    onClick={() => copyToClipboard(trustInfo.name, 'name')}
                    className="p-1.5 rounded-lg neu-btn-ghost text-slate-400 hover:text-white"
                  >
                    {copiedField === 'name' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-3 rounded-xl neu-inset flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 block text-[10px]">BANK NAME</span>
                    <strong className="text-white">State Bank of India (SBI)</strong>
                  </div>
                </div>

                <div className="p-3 rounded-xl neu-inset flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 block text-[10px]">BRANCH & IFSC</span>
                    <strong className="text-white font-mono">Aurangabad Branch, Murshidabad</strong>
                  </div>
                </div>

                <div className="p-3 rounded-xl neu-inset flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 block text-[10px]">TRUST UPI ID</span>
                    <strong className="text-orange-400 font-mono">shibhamtrust@sbi</strong>
                  </div>
                  <button
                    onClick={() => copyToClipboard('shibhamtrust@sbi', 'upi')}
                    className="p-1.5 rounded-lg neu-btn-ghost text-slate-400 hover:text-white"
                  >
                    {copiedField === 'upi' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Tax Exemption Eligible under 80G</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  All donations made to Shibham Education & Social Welfare Trust are eligible for deduction under Section 80G of the Income Tax Act. A formal digital receipt with certificate is issued immediately.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
