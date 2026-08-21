"use client";

import React from "react";
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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl">
        <div className="border-b border-slate-100 pb-3">
          <h4 className="text-base font-bold text-slate-900">
            Evaluate {selectedSubmission.studentName}
          </h4>
          <p className="text-xs text-slate-500">{selectedSubmission.assignmentTitle}</p>
        </div>

        <form onSubmit={onSave} className="space-y-4 text-xs sm:text-sm">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 block">Marks (Out of 100)</label>
            <input
              type="number"
              min="0"
              max="100"
              required
              value={scoreInput}
              onChange={(e) => setScoreInput(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-sm focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 block">Feedback & Corrections</label>
            <textarea
              rows={3}
              required
              value={feedbackInput}
              onChange={(e) => setFeedbackInput(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-2.5 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs cursor-pointer hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs cursor-pointer shadow-md"
            >
              Save Evaluation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
