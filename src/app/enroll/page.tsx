'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { GlassCard } from '@/components/ui/GlassCard';
import { NeumorphicButton } from '@/components/ui/NeumorphicButton';
import { Sparkles, CheckCircle2, User, Phone, Mail, MapPin, GraduationCap, Calendar, Send } from 'lucide-react';

function EnrollmentFormInner() {
  const searchParams = useSearchParams();
  const defaultProgram = searchParams.get('program') || searchParams.get('institution') || 'PMKVY';

  const [formData, setFormData] = useState({
    fullName: '',
    guardianName: '',
    dob: '',
    phone: '',
    email: '',
    address: '',
    lastQualification: 'Higher Secondary (10+2)',
    currentStatus: 'Studying',
    applyFor: defaultProgram,
    remarks: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verificationId, setVerificationId] = useState('ST-742201');

  const programs = [
    'PMKVY (Pradhan Mantri Kaushal Vikas Yojana)',
    'PBSSD (Utkarsh Bangla Skill Development)',
    'NSDC Paid Course',
    'FREE COACHING (Competitive Exams & IT)',
    'JAKIR HOSSAIN SKILL TRAINING CENTER',
    'B.Ed / D.El.Ed (Teacher Training)',
    'B.Pharm / D.Pharm (Pharmacy)',
    'Polytechnic (Diploma Engineering)',
    'MBBS / Paramedical Healthcare',
    'School Admission (Aurangabad Public School / EOA)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const generatedId = `ST-${Math.floor(100000 + Math.random() * 900000)}`;
    setVerificationId(generatedId);

    // Simulate instant secure processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {submitted ? (
        <GlassCard variant="glass" className="p-8 sm:p-14 text-center border-orange-500/30">
          <div className="w-20 h-20 rounded-full neu-inset mx-auto flex items-center justify-center text-emerald-400 mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Application Submitted Successfully!
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-6 leading-relaxed">
            Thank you, <strong className="text-white">{formData.fullName}</strong>. Your enrollment request for <strong className="text-orange-400">{formData.applyFor}</strong> has been received by our admission counseling desk.
          </p>

          <div className="p-4 rounded-xl neu-inset max-w-md mx-auto text-xs text-slate-300 mb-8 text-left space-y-1.5">
            <p><span className="text-slate-400">Applicant:</span> {formData.fullName}</p>
            <p><span className="text-slate-400">Phone:</span> {formData.phone}</p>
            <p><span className="text-slate-400">Selected Course:</span> {formData.applyFor}</p>
            <p><span className="text-slate-400">Verification ID:</span> {verificationId}</p>
          </div>

          <NeumorphicButton
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                guardianName: '',
                dob: '',
                phone: '',
                email: '',
                address: '',
                lastQualification: 'Higher Secondary (10+2)',
                currentStatus: 'Studying',
                applyFor: 'PMKVY',
                remarks: ''
              });
            }}
            variant="ghost"
            size="md"
          >
            Submit Another Application
          </NeumorphicButton>
        </GlassCard>
      ) : (
        <GlassCard variant="glass" className="p-6 sm:p-12 border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-orange-400" />
                  <span>Applicant Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Mondal"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500/60"
                />
              </div>

              {/* Guardian's Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span>Father&apos;s / Guardian&apos;s Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Subir Mondal"
                  value={formData.guardianName}
                  onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500/60"
                />
              </div>

              {/* DOB */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>Date of Birth *</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500/60"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Contact Mobile Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500/60"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                  <span>Email ID</span>
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500/60"
                />
              </div>

              {/* Last Qualification */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-orange-400" />
                  <span>Last Qualification *</span>
                </label>
                <select
                  value={formData.lastQualification}
                  onChange={(e) => setFormData({ ...formData, lastQualification: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/60"
                >
                  <option value="Secondary (10th Pass)">Secondary (10th Pass)</option>
                  <option value="Higher Secondary (10+2)">Higher Secondary (10+2)</option>
                  <option value="Graduation (BA/BSc/BCom)">Graduation (BA/BSc/BCom)</option>
                  <option value="Post Graduation">Post Graduation</option>
                  <option value="Diploma / ITI">Diploma / ITI</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Full Postal Address (Village, Block, District, PIN) *</span>
              </label>
              <input
                type="text"
                required
                placeholder="Vill + P.O, Police Station, District, State, PIN"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500/60"
              />
            </div>

            {/* Current Status & Program */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                  Current Status
                </label>
                <div className="flex gap-4 pt-1">
                  {['Studying', 'Working', 'Seeking Employment'].map((status) => (
                    <label
                      key={status}
                      className={`flex-1 p-3 rounded-xl neu-inset border cursor-pointer text-center text-xs font-bold transition-all ${
                        formData.currentStatus === status
                          ? 'border-orange-500 text-orange-400 bg-orange-500/10'
                          : 'border-white/5 text-slate-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="status"
                        value={status}
                        checked={formData.currentStatus === status}
                        onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                        className="sr-only"
                      />
                      <span>{status}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                  Apply For Program / Course *
                </label>
                <select
                  value={formData.applyFor}
                  onChange={(e) => setFormData({ ...formData, applyFor: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/60"
                >
                  {programs.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Remarks */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                Additional Remarks / Special Questions
              </label>
              <textarea
                rows={3}
                placeholder="Any previous experience, hostel accommodation requirements, etc."
                value={formData.remarks}
                onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500/60"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <NeumorphicButton
                type="submit"
                variant="primary"
                size="lg"
                disabled={loading}
                className="w-full justify-center"
                icon={<Send className="w-5 h-5" />}
              >
                {loading ? 'Submitting Application...' : 'Submit Student Enrollment'}
              </NeumorphicButton>
            </div>
          </form>
        </GlassCard>
      )}
    </div>
  );
}

export default function EnrollPage() {
  return (
    <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Banner */}
        <div className="relative p-8 sm:p-14 rounded-3xl neu-convex border border-white/10 overflow-hidden text-center">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[130px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 border border-orange-500/30 text-orange-400">
              <Sparkles className="w-3.5 h-3.5" />
              Online Admissions & Registration
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Student Online{' '}
              <span className="text-gradient-brand">Enrollment Form</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Register your interest for Government PMKVY/NSDC skill certifications, Free Coaching, or degree courses at our affiliated institutions.
            </p>
          </div>
        </div>

        <Suspense fallback={<div className="text-center py-12 text-slate-400">Loading enrollment form...</div>}>
          <EnrollmentFormInner />
        </Suspense>
      </div>
    </div>
  );
}
