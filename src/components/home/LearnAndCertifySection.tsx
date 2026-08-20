"use client";

import React from "react";
import { Lock } from "lucide-react";

export default function LearnAndCertifySection() {
  const certifiedPoints = [
    "Architecture, Structural, HVAC, Plumbing, Firefighting & Electrical Working Drawing",
    "Industry-recognized BIM certificate upon course completion",
    "Boost your career with hands-on projects & expert guidance",
    "Flexible online/offline learning with recorded materials",
    "Become a skilled BIM professional ready for national & international projects",
  ];

  return (
    <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center font-sans">
      {/* Left Column: 5 Certified Checklist */}
      <div className="lg:col-span-7 space-y-8">
        <div className="relative inline-block">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#002b5b] tracking-tight">
            What You’ll Learn & Get Certified
          </h2>
          {/* Curved brand blue underline */}
          <svg
            className="w-36 sm:w-52 h-4 text-[#0077b6] absolute -bottom-2 right-0"
            viewBox="0 0 120 10"
            fill="none"
          >
            <path
              d="M2 7C30 1 85 1 118 8"
              stroke="#0077b6"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="space-y-6 pt-3">
          {certifiedPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-sky-100 text-[#0077b6] shrink-0 mt-0.5 flex items-center justify-center font-black text-sm">
                ✓
              </div>
              <span className="text-sm sm:text-base lg:text-lg font-bold text-[#002b5b] leading-relaxed">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Certificate Mockup with Padlock */}
      <div className="lg:col-span-5 flex justify-center">
        <div className="relative max-w-md w-full bg-slate-50 rounded-3xl border-4 border-amber-100 p-8 shadow-2xl text-center overflow-hidden">
          {/* Certificate Inner Preview */}
          <div className="border-2 border-amber-200/80 p-8 sm:p-10 rounded-2xl bg-white space-y-5 relative shadow-inner">
            <div className="text-xs sm:text-sm uppercase font-bold tracking-widest text-slate-400">
              BIM BUILD BD
            </div>
            <div className="text-base sm:text-xl font-black text-[#0f172a] tracking-wider">
              CERTIFICATE OF COMPLETION
            </div>
            <div className="text-xs sm:text-sm text-slate-500 italic">
              Course: Professional Revit Combo Course (Architecture, Structure & MEP)
            </div>
            <div className="pt-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
                QR Verified Credential
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
