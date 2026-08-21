"use client";

import React from "react";
import { TrendingUp, Users, Layers, Award } from "lucide-react";

export default function AdminMetricsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 font-sans">
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1.5">
        <span className="text-xs sm:text-sm text-slate-500 font-bold">Monthly Revenue</span>
        <div className="text-2xl sm:text-3xl font-black text-emerald-600">৳4,85,000</div>
        <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
          <TrendingUp className="w-3.5 h-3.5" /> +12.5% Growth
        </span>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1.5">
        <span className="text-xs sm:text-sm text-slate-500 font-bold">Total Students</span>
        <div className="text-2xl sm:text-3xl font-black text-[#002b5b]">5,240</div>
        <span className="text-xs text-sky-600 font-bold flex items-center gap-1">
          <Users className="w-3.5 h-3.5" /> 182 New This Month
        </span>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1.5">
        <span className="text-xs sm:text-sm text-slate-500 font-bold">Active Batches</span>
        <div className="text-2xl sm:text-3xl font-black text-amber-600">6 Batches</div>
        <span className="text-xs text-slate-500 font-medium">Revit, Tekla, MEP</span>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1.5">
        <span className="text-xs sm:text-sm text-slate-500 font-bold">Issued Certificates</span>
        <div className="text-2xl sm:text-3xl font-black text-purple-600">3,820</div>
        <span className="text-xs text-purple-600 font-bold flex items-center gap-1">
          <Award className="w-3.5 h-3.5" /> QR Verified
        </span>
      </div>
    </div>
  );
}
