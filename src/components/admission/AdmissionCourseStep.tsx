"use client";

import React from "react";
import { Video, Download } from "lucide-react";
import { Course } from "@/data/mockData";

interface AdmissionCourseStepProps {
  courses: Course[];
  selectedCourseId: string;
  onSelectCourseId: (id: string) => void;
  classFormat: string;
  onSelectClassFormat: (format: string) => void;
  batchTiming: string;
  onSelectBatchTiming: (timing: string) => void;
}

export default function AdmissionCourseStep({
  courses,
  selectedCourseId,
  onSelectCourseId,
  classFormat,
  onSelectClassFormat,
  batchTiming,
  onSelectBatchTiming,
}: AdmissionCourseStepProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
        <div className="w-8 h-8 rounded-xl bg-sky-100 text-[#0077b6] flex items-center justify-center font-black text-sm">
          1
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900">Select Target Course & Batch</h2>
          <p className="text-xs text-slate-500">Choose the program you wish to enroll in</p>
        </div>
      </div>

      {/* Course Selector */}
      <div className="space-y-2">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          Select Course <span className="text-rose-500">*</span>
        </label>
        <select
          value={selectedCourseId}
          onChange={(e) => onSelectCourseId(e.target.value)}
          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-semibold text-slate-800 focus:bg-white focus:border-[#0077b6] focus:ring-2 focus:ring-sky-200 transition-all cursor-pointer"
        >
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title} — (৳{c.price.toLocaleString()} BDT)
            </option>
          ))}
        </select>
      </div>

      {/* Class Delivery Format */}
      <div className="space-y-2 pt-1">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          Delivery Format <span className="text-rose-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onSelectClassFormat("live")}
            className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
              classFormat === "live"
                ? "border-[#0077b6] bg-sky-50/70 text-[#002b5b] shadow-xs ring-2 ring-sky-200"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
              <Video className="w-4 h-4 text-[#0077b6]" />
              <span>Live Interactive Batch</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Zoom live sessions + Live Doubt solving</p>
          </button>

          <button
            type="button"
            onClick={() => onSelectClassFormat("recorded")}
            className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
              classFormat === "recorded"
                ? "border-[#0077b6] bg-sky-50/70 text-[#002b5b] shadow-xs ring-2 ring-sky-200"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
              <Download className="w-4 h-4 text-[#0077b6]" />
              <span>Recorded + Mentorship</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Full HD backup videos + Weekly Q&A</p>
          </button>
        </div>
      </div>

      {/* Preferred Batch Timing */}
      <div className="space-y-2 pt-1">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          Preferred Batch Shift <span className="text-rose-500">*</span>
        </label>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { id: "night", title: "Night Shift", time: "9:00 PM - 11:00 PM" },
            { id: "evening", title: "Evening Shift", time: "6:30 PM - 8:30 PM" },
            { id: "weekend", title: "Weekend Only", time: "Fri & Sat 10:00 AM" },
          ].map((t) => (
            <button
              type="button"
              key={t.id}
              onClick={() => onSelectBatchTiming(t.id)}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                batchTiming === t.id
                  ? "border-[#0077b6] bg-[#002b5b] text-white font-bold shadow-xs"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <div className="text-xs font-bold">{t.title}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{t.time}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
