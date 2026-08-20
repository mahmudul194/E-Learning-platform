import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="bg-[#002b5b] text-white rounded-3xl p-8 lg:p-14 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
              About BIM Build BD
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Empowering the Future of Architecture & Engineering with BIM
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
              BIM Build BD is a premier technical learning platform dedicated to training engineers, architects, and diploma professionals in modern Building Information Modeling and smart automation.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0077b6] flex items-center justify-center font-bold text-xl">
              🎯
            </div>
            <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To transition engineers from legacy 2D drafting methods into cutting-edge 3D/4D/5D Building Information Modeling (BIM) workflows with practical industry competence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#002b5b] flex items-center justify-center font-bold text-xl">
              🚀
            </div>
            <h2 className="text-xl font-bold text-slate-900">Our Vision</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To establish Bangladeshi engineering talent on the global stage, equipping professionals to lead major infrastructure and remote freelance contracts worldwide.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xs">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Key Features & Student Advantages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-slate-700">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-[#0077b6] shrink-0 mt-0.5" />
              <span>Direct training on international standard live BIM projects</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-[#0077b6] shrink-0 mt-0.5" />
              <span>Flexible 3-month installment plans with zero hidden fees</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-[#0077b6] shrink-0 mt-0.5" />
              <span>24/7 dedicated software & modeling troubleshooting support</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-[#0077b6] shrink-0 mt-0.5" />
              <span>Verifiable QR-coded official certificate upon completion</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-[#0077b6] shrink-0 mt-0.5" />
              <span>Lifetime access to full HD recorded backups & project libraries</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-[#0077b6] shrink-0 mt-0.5" />
              <span>Portfolio preparation & international job placement assistance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
