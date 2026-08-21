"use client";

import React from "react";
import { Download, MessageSquare, X, CheckCircle2 } from "lucide-react";
import { StudentSubmission } from "@/data/instructorMockData";

interface InstructorEvaluationModalProps {
  selectedSubmission: StudentSubmission | null;
  scoreInput: string;
  setScoreInput: (val: string) => void;
  feedbackInput: string;
  setFeedbackInput: (val: string) => void;
  onSave: (e: React.FormEvent) => void;
  onClose: () => void;
}

export default function InstructorEvaluationModal({
  selectedSubmission,
  scoreInput,
  setScoreInput,
  feedbackInput,
  setFeedbackInput,
  onSave,
  onClose,
}: InstructorEvaluationModalProps) {
  if (!selectedSubmission) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 font-sans animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl my-8 border border-slate-100 ring-1 ring-black/5 animate-scale-in">
        {/* Header */}
        <div className="border-b border-slate-100 pb-3.5 flex items-start justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-black text-slate-900">
                Evaluating: {selectedSubmission.studentName}
              </h4>
              <span className="text-xs font-mono bg-sky-50 text-[#0077b6] px-2 py-0.5 rounded-md font-bold border border-sky-100">
                {selectedSubmission.studentRoll}
              </span>
            </div>
            <p className="text-xs text-slate-500">{selectedSubmission.assignmentTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Student's Answer Script & Notes */}
        <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-1.5 text-xs">
          <div className="flex items-center gap-1.5 font-extrabold text-[#0077b6]">
            <MessageSquare className="w-4 h-4" />
            <span>Student&apos;s Answer Script / Project Notes:</span>
          </div>
          <p className="text-slate-800 leading-relaxed font-medium bg-white p-3 rounded-xl border border-sky-100/80">
            &ldquo;{selectedSubmission.studentNote}&rdquo;
          </p>
        </div>

        {/* 2. Submitted CAD / BIM Attachments for Review */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            Submitted Project Files & Drawing Sheets (Click to Inspect)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {selectedSubmission.files.map((file, idx) => (
              <a
                key={idx}
                href={file.url}
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Downloading ${file.name} for drawing inspection.`);
                }}
                className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between group transition-all text-xs cursor-pointer"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="px-2 py-1 rounded-md bg-[#002b5b] text-white font-mono text-[10px] font-bold shrink-0">
                    {file.type}
                  </span>
                  <div className="truncate">
                    <span className="font-bold text-slate-900 block truncate group-hover:text-[#0077b6]">
                      {file.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{file.size}</span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-slate-400 group-hover:text-[#0077b6] shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* 3. Evaluation Form */}
        <form onSubmit={onSave} className="space-y-3.5 pt-2 border-t border-slate-100 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Marks (Out of 100)</label>
              <input
                type="number"
                min="0"
                max="100"
                required
                value={scoreInput}
                onChange={(e) => setScoreInput(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 font-bold text-sm focus:bg-white focus:border-[#0077b6] focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2 text-slate-500 text-xs pb-1">
              <span>Rubric: 40% 3D Geometry • 40% BNBC Standard • 20% Schedule</span>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Trainer Feedback & Corrections</label>
            <textarea
              rows={2}
              required
              value={feedbackInput}
              onChange={(e) => setFeedbackInput(e.target.value)}
              placeholder="Provide constructive feedback on CAD layers, BIM parameters, and schedules..."
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0077b6] focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#002b5b] to-[#0077b6] hover:from-[#001830] hover:to-[#005a8c] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer hover:scale-102"
            >
              Submit Grade & Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
