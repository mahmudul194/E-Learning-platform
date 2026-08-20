"use client";

import React from "react";
import { User, Phone, Mail } from "lucide-react";

interface StudentInfo {
  fullName: string;
  phone: string;
  email: string;
  profession: string;
  notes: string;
}

interface AdmissionStudentInfoStepProps {
  formData: StudentInfo;
  setFormData: React.Dispatch<React.SetStateAction<StudentInfo>>;
}

export default function AdmissionStudentInfoStep({
  formData,
  setFormData,
}: AdmissionStudentInfoStepProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
        <div className="w-8 h-8 rounded-xl bg-sky-100 text-[#0077b6] flex items-center justify-center font-black text-sm">
          2
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900">Student Personal Details</h2>
          <p className="text-xs text-slate-500">Your information for certificate and student LMS profile</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700">
            Full Name (As on Certificate) <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              placeholder="e.g. Engr. Tanvir Hasan"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-[#f8fafc] text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#0077b6] focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* WhatsApp / Phone */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700">
            WhatsApp / Mobile Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              required
              placeholder="017XXXXXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-[#f8fafc] text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#0077b6] focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700">
            Email Address (For LMS Credentials) <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              placeholder="tanvir@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-[#f8fafc] text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#0077b6] focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Profession */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700">
            Profession / Academic Background <span className="text-rose-500">*</span>
          </label>
          <select
            value={formData.profession}
            onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f8fafc] text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#0077b6] focus:outline-none transition-all cursor-pointer"
          >
            <option>Civil Engineer / Diploma</option>
            <option>Architect / Architectural Diploma</option>
            <option>MEP / Electrical / Mechanical Engineer</option>
            <option>Engineering Student (Polytechnic / University)</option>
            <option>Draftsman / CAD Modeler</option>
            <option>Other AEC Professional</option>
          </select>
        </div>
      </div>
    </div>
  );
}
