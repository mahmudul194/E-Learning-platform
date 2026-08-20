"use client";

import React from "react";
import { Video } from "lucide-react";
import { UserAccount } from "@/data/dummyAccounts";

interface InstructorDashboardViewProps {
  currentUser: UserAccount;
}

export default function InstructorDashboardView({ currentUser }: InstructorDashboardViewProps) {
  const activeBatches = [
    {
      batch: "Revit Architecture + Structure (5th Batch)",
      count: "72 Students",
      sched: "Mon, Wed, Fri (9:00 PM)",
    },
    {
      batch: "Tekla Steel Detailing Masterclass (3rd Batch)",
      count: "58 Students",
      sched: "Sun, Tue, Thu (9:30 PM)",
    },
  ];

  return (
    <div className="space-y-8 font-sans">
      {/* Instructor Banner */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
            Instructor Console
          </span>
          <h2 className="text-2xl font-bold text-slate-900">{currentUser.name}</h2>
          <p className="text-sm text-slate-500">Active Batches: 3 • Total Students: 2,400+</p>
        </div>
        <button className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm flex items-center gap-2 shadow-md cursor-pointer">
          <Video className="w-4 h-4" />
          <span>Start Live Zoom Class</span>
        </button>
      </div>

      {/* 4 Instructor Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-1.5">
          <span className="text-xs sm:text-sm text-slate-500 font-bold">Courses</span>
          <div className="text-2xl sm:text-3xl font-black text-slate-900">3 Courses</div>
          <span className="text-xs text-amber-600 font-semibold">Revit, Tekla, MEP</span>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-1.5">
          <span className="text-xs sm:text-sm text-slate-500 font-bold">Active Students</span>
          <div className="text-2xl sm:text-3xl font-black text-blue-600">184 Students</div>
          <span className="text-xs text-slate-500 font-medium">Current Batches</span>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-1.5">
          <span className="text-xs sm:text-sm text-slate-500 font-bold">Pending Reviews</span>
          <div className="text-2xl sm:text-3xl font-black text-rose-600">12 Due</div>
          <span className="text-xs text-rose-600 font-semibold">Assignments</span>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-1.5">
          <span className="text-xs sm:text-sm text-slate-500 font-bold">Next Class</span>
          <div className="text-xl sm:text-2xl font-black text-emerald-600">Tonight 9:00 PM</div>
          <span className="text-xs text-slate-500 font-medium">Batch 5 • Module 4</span>
        </div>
      </div>

      {/* Batch Management Table / List */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-5">
        <h3 className="text-lg font-bold text-slate-900">Batch Management & Host Controls</h3>
        <div className="space-y-4">
          {activeBatches.map((b, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm"
            >
              <div>
                <strong className="text-slate-900 block text-base">{b.batch}</strong>
                <span className="text-slate-500 text-xs sm:text-sm">{b.count} • {b.sched}</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-xl bg-[#0077b6] text-white font-bold text-xs sm:text-sm hover:bg-[#005a8c] cursor-pointer">
                  Host Zoom
                </button>
                <button className="px-4 py-2 rounded-xl bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-300 cursor-pointer">
                  Upload Material
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
