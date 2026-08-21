"use client";

import React from "react";
import { Star } from "lucide-react";
import { InstructorBatch } from "@/data/instructorMockData";

interface InstructorMetricsGridProps {
  batches: InstructorBatch[];
  pendingCount: number;
}

export default function InstructorMetricsGrid({
  batches,
  pendingCount,
}: InstructorMetricsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 font-sans">
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1.5">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Batches</span>
        <div className="text-2xl sm:text-3xl font-black text-[#002b5b]">{batches.length} Batches</div>
        <span className="text-xs text-amber-600 font-bold">Revit, Tekla, MEP</span>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1.5">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Students</span>
        <div className="text-2xl sm:text-3xl font-black text-[#0077b6]">184 Enrolled</div>
        <span className="text-xs text-slate-500 font-medium">Active Learners</span>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1.5">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pending Grading</span>
        <div className="text-2xl sm:text-3xl font-black text-rose-600">{pendingCount} Submissions</div>
        <span className="text-xs text-rose-600 font-semibold">Requires Review</span>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1.5">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mentor Rating</span>
        <div className="text-2xl sm:text-3xl font-black text-emerald-600">4.95 / 5.0</div>
        <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 450+ Student Reviews
        </span>
      </div>
    </div>
  );
}
