"use client";

import React from "react";
import { CheckCircle2, Calendar } from "lucide-react";
import { Course } from "@/data/mockData";

interface CourseDetailsOverviewProps {
  course: Course;
  instructorName: string;
  instructorRole: string;
  defaultSoftwares: string[];
  defaultFeatures: string[];
}

export default function CourseDetailsOverview({
  course,
  instructorName,
  instructorRole,
  defaultSoftwares,
  defaultFeatures,
}: CourseDetailsOverviewProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left 8 Cols: Curriculum Highlights & Software */}
      <div className="lg:col-span-8 space-y-8">
        {/* Features Checklist */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-6">
          <h2 className="text-xl font-bold text-slate-900">What You Will Master</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {defaultFeatures.map((feat, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-[#0077b6] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Softwares Covered */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Tools & Softwares Covered</h2>
          <div className="flex flex-wrap gap-2.5">
            {defaultSoftwares.map((sw, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold"
              >
                {sw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right 4 Cols: Instructor & Schedule Meta */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900">Lead Course Instructor</h3>
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-[#002b5b] text-white flex items-center justify-center font-bold text-lg">
              {instructorName.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">{instructorName}</h4>
              <p className="text-xs text-slate-500">{instructorRole}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs space-y-3 text-xs sm:text-sm text-slate-600">
          <h3 className="text-base font-bold text-slate-900 mb-2">Class Schedule</h3>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#0077b6]" />
            <span>3 Days / Week (Live Zoom)</span>
          </div>
          <p>Friday, Monday & Wednesday (9:00 PM - 11:00 PM)</p>
          <p className="text-xs text-slate-400">Class recordings uploaded within 2 hours of live session.</p>
        </div>
      </div>
    </div>
  );
}
