"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function StudentMetricsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 font-sans">
      <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xs space-y-2">
        <span className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-wider">Enrolled Course</span>
        <div className="text-2xl sm:text-3xl font-black text-[#002b5b]">1 Course</div>
        <span className="text-xs sm:text-sm text-emerald-600 font-bold flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" /> Active & Ongoing
        </span>
      </div>

      <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xs space-y-2">
        <span className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-wider">Classes Completed</span>
        <div className="text-2xl sm:text-3xl font-black text-[#0077b6]">28 Classes</div>
        <span className="text-xs sm:text-sm text-slate-500 font-semibold">17 Classes Remaining</span>
      </div>

      <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xs space-y-2">
        <span className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-wider">Assignment Score</span>
        <div className="text-2xl sm:text-3xl font-black text-emerald-600">94% (A+)</div>
        <span className="text-xs sm:text-sm text-emerald-700 font-semibold">7 Evaluated Submissions</span>
      </div>

      <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xs space-y-2">
        <span className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-wider">Official Certificate</span>
        <div className="text-2xl sm:text-3xl font-black text-slate-700">In Progress</div>
        <span className="text-xs sm:text-sm text-slate-500 font-semibold">Unlocks on 100% Finish</span>
      </div>
    </div>
  );
}
