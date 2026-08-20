"use client";

import React from "react";
import { Assignment } from "@/types/dashboard";

interface StudentAssignmentsTabProps {
  assignments: Assignment[];
  onOpenUpload: (assignmentId: number) => void;
}

export default function StudentAssignmentsTab({
  assignments,
  onOpenUpload,
}: StudentAssignmentsTabProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 font-sans">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl font-bold text-slate-900">Assignments & Evaluation</h3>
        <p className="text-xs sm:text-sm text-slate-500">Submit weekly homework and review mentor grade feedback</p>
      </div>

      <div className="space-y-4">
        {assignments.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
          >
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.status === "Graded"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {item.status}
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium">
                  Due: {item.deadline}
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
              <p className="text-xs sm:text-sm text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200">
                <strong>Mentor Feedback:</strong> {item.feedback}
              </p>
            </div>

            <div className="shrink-0 text-right">
              {item.obtainedMarks ? (
                <div className="text-center">
                  <span className="text-xs sm:text-sm text-slate-500 font-bold block">Score</span>
                  <span className="text-3xl font-black text-emerald-600">{item.obtainedMarks}/100</span>
                </div>
              ) : (
                <button
                  onClick={() => onOpenUpload(item.id)}
                  className="px-6 py-3 rounded-xl bg-[#0077b6] hover:bg-[#005a8c] text-white text-sm font-bold shadow-md cursor-pointer"
                >
                  Upload File
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
