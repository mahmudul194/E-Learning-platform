"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, CheckSquare } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f0f2f5] py-14 sm:py-18 lg:py-20 xl:py-24 flex items-center">
      {/* Background subtle curve accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 650" fill="none">
          <circle
            cx="1180"
            cy="360"
            r="300"
            stroke="#cbd5e1"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines, Checkmarks, Buttons, Software 2-Row Logos */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {/* Main Headline with Locked Elements */}
            <div className="space-y-1">
              {/* Row 1: Learn BIM (with cap perched exactly on I) */}
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#1e293b] tracking-tight leading-none">
                  Learn
                </span>
                <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#ea580c] tracking-tight leading-none relative inline-flex items-center">
                  B
                  <span className="relative inline-flex items-center">
                    I
                    {/* Graduation cap perched directly on top of I */}
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#0f172a] absolute -top-5 sm:-top-7 left-1/2 -translate-x-1/2" />
                  </span>
                  M
                </span>
              </div>

              {/* Row 2: Build Your Career (with underline locked directly under Career) */}
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#1e293b] tracking-tight leading-tight">
                <span>Build Your </span>
                <span className="relative inline-block">
                  <span>Career</span>
                  {/* Curved orange brush underline locked 100% to Career word */}
                  <svg
                    className="w-full h-3 sm:h-4 text-[#ea580c] absolute -bottom-2 sm:-bottom-2.5 left-0"
                    viewBox="0 0 160 14"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 10C45 2 115 2 157 11"
                      stroke="#ea580c"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* 3 Checkmark Bullet Points */}
            <div className="space-y-3 pt-1 text-sm sm:text-base font-semibold text-slate-700">
              <div className="flex items-center gap-3">
                <CheckSquare className="w-5 h-5 text-[#ea580c] shrink-0" />
                <span>Revit Architecture | Structure | MEP</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckSquare className="w-5 h-5 text-[#ea580c] shrink-0" />
                <span>Project-Based Training</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckSquare className="w-5 h-5 text-[#ea580c] shrink-0" />
                <span>Freelancing & Job Placement Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-1">
              <div>
                <Link
                  href="/courses"
                  className="inline-block px-8 py-3.5 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm sm:text-base lg:text-lg shadow-lg shadow-orange-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  Join Our Live Courses!
                </Link>
              </div>

              <div>
                <Link
                  href="/admission"
                  className="inline-block px-9 py-3 rounded-xl bg-[#0a1d37] hover:bg-[#153258] text-white font-bold text-xs sm:text-sm lg:text-base transition-all shadow-md hover:scale-105 active:scale-95"
                >
                  Admission
                </Link>
              </div>
            </div>

            {/* Software Logos 2-Row Grid */}
            <div className="pt-6 space-y-3 border-t border-slate-200/90">
              {/* Row 1 */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs sm:text-sm">
                {/* 3ds Max */}
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-teal-600 text-sm sm:text-base">3</span>
                  <div className="text-[11px] font-bold leading-tight text-slate-800">
                    AUTODESK<br /><span className="font-extrabold">3DS MAX</span>
                  </div>
                </div>

                {/* AutoCAD */}
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-red-600 text-sm sm:text-base">A</span>
                  <div className="text-[11px] font-bold leading-tight text-slate-800">
                    AUTODESK<br /><span className="font-extrabold">AUTOCAD</span>
                  </div>
                </div>

                {/* Navisworks */}
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-blue-600 text-sm sm:text-base">N</span>
                  <div className="text-[11px] font-bold leading-tight text-slate-800">
                    AUTODESK<br /><span className="font-extrabold">NAVISWORKS</span>
                  </div>
                </div>

                {/* Revit */}
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-blue-700 text-sm sm:text-base">R</span>
                  <div className="text-[11px] font-bold leading-tight text-slate-800">
                    AUTODESK<br /><span className="font-extrabold">REVIT</span>
                  </div>
                </div>

                {/* Dynamo */}
                <div className="flex items-center gap-1.5 font-bold text-slate-800 text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-xs bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">D</span>
                  <span>Dynamo</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs sm:text-sm">
                {/* ETABS */}
                <span className="font-extrabold text-blue-900 text-sm sm:text-base tracking-wider">
                  ETABS
                </span>

                {/* KeyShot */}
                <div className="flex items-center gap-1 font-bold text-slate-800">
                  <span className="w-3 h-3 rounded-full bg-cyan-600 inline-block" />
                  <span className="font-extrabold text-xs sm:text-sm">KeyShot</span>
                </div>

                {/* LUMION */}
                <div className="flex items-center gap-1 font-extrabold text-slate-800">
                  <span className="text-[11px] bg-slate-800 text-white px-1.5 py-0.5 rounded-xs">L</span>
                  <span className="text-xs sm:text-sm">LUMION</span>
                </div>

                {/* SketchUp */}
                <div className="flex items-center gap-1 font-bold text-slate-800">
                  <span className="text-red-500 font-extrabold text-sm">⯁</span>
                  <span className="text-xs sm:text-sm font-extrabold">SketchUp</span>
                </div>

                {/* Tekla */}
                <div className="flex items-center gap-1 font-extrabold text-slate-900">
                  <span className="text-red-600 text-sm">▼</span>
                  <span className="tracking-tight text-sm sm:text-base font-extrabold">Tekla</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Building Construction with Tower Cranes and Matrix Dots */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Matrix Dot Grid on left of building */}
            <div className="absolute -left-4 top-1/4 w-40 h-40 opacity-35 pointer-events-none">
              <div className="grid grid-cols-6 gap-3 w-full h-full">
                {[...Array(36)].map((_, idx) => (
                  <div key={idx} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                ))}
              </div>
            </div>

            {/* User-provided PNG Image Render */}
            <div className="relative w-full max-w-lg xl:max-w-xl">
              <img
                src="/banner-img-1.png"
                alt="Building Construction BIM"
                className="w-full h-auto object-contain select-none filter drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
