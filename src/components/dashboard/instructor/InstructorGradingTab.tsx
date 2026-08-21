"use client";

import React, { useState } from "react";
import { FileCheck, Check } from "lucide-react";
import { StudentSubmission } from "@/data/instructorMockData";
import InstructorEvaluationModal from "./InstructorEvaluationModal";

interface InstructorGradingTabProps {
  submissions: StudentSubmission[];
}

export default function InstructorGradingTab({ submissions }: InstructorGradingTabProps) {
  const [list, setList] = useState<StudentSubmission[]>(submissions);
  const [selectedSubmission, setSelectedSubmission] = useState<StudentSubmission | null>(null);
  const [scoreInput, setScoreInput] = useState<string>("");
  const [feedbackInput, setFeedbackInput] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleOpenEvaluate = (sub: StudentSubmission) => {
    setSelectedSubmission(sub);
    setScoreInput(sub.score ? String(sub.score) : "95");
    setFeedbackInput(sub.feedback || "Well done! The structural model alignment and schedules are accurate.");
  };

  const handleSaveGrade = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSubmission) return;

    setList((prev) =>
      prev.map((item) =>
        item.id === selectedSubmission.id
          ? {
              ...item,
              score: Number(scoreInput),
              feedback: feedbackInput,
              status: "Graded",
            }
          : item
      )
    );

    setSuccessMsg(`Evaluation submitted for ${selectedSubmission.studentName}!`);
    setSelectedSubmission(null);
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-rose-500" />
            <span>Student Submission & Grading Console</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Download submitted .rvt / .dwg models, award marks, and provide constructive feedback
          </p>
        </div>
        <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold w-fit">
          {list.filter((s) => s.status === "Pending").length} Due Evaluations
        </span>
      </div>

      {successMsg && (
        <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-bold flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Submissions List */}
      <div className="space-y-4">
        {list.map((sub) => (
          <div
            key={sub.id}
            className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs sm:text-sm"
          >
            <div className="space-y-1 min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <strong className="text-slate-900 text-sm">{sub.studentName}</strong>
                <span className="text-[11px] font-mono text-slate-500 bg-slate-200 px-2 py-0.5 rounded-md">
                  {sub.studentRoll}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${
                    sub.status === "Graded"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-rose-100 text-rose-800"
                  }`}
                >
                  {sub.status}
                </span>
              </div>
              <p className="text-slate-700 font-semibold">{sub.assignmentTitle}</p>
              <span className="text-xs text-slate-500 font-mono block">
                File: {sub.fileName} ({sub.fileSize}) • Submitted: {sub.submittedAt}
              </span>
              {sub.feedback && (
                <p className="text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-100 mt-2">
                  <strong>Feedback Given:</strong> {sub.feedback}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {sub.score !== null && (
                <div className="text-center px-3">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Score</span>
                  <span className="text-xl font-black text-emerald-600">{sub.score}/100</span>
                </div>
              )}
              <button
                onClick={() => handleOpenEvaluate(sub)}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs cursor-pointer shadow-xs"
              >
                {sub.status === "Graded" ? "Edit Grade" : "Evaluate & Score"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Evaluation Dialog */}
      <InstructorEvaluationModal
        selectedSubmission={selectedSubmission}
        scoreInput={scoreInput}
        setScoreInput={setScoreInput}
        feedbackInput={feedbackInput}
        setFeedbackInput={setFeedbackInput}
        onSave={handleSaveGrade}
        onClose={() => setSelectedSubmission(null)}
      />
    </div>
  );
}
