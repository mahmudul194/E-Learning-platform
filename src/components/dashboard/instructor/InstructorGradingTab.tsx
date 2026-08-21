"use client";

import React, { useState } from "react";
import { FileCheck, Check } from "lucide-react";
import { StudentSubmission } from "@/data/instructorMockData";
import InstructorEvaluationModal from "./InstructorEvaluationModal";
import InstructorSubmissionCard from "./InstructorSubmissionCard";

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
    setScoreInput(sub.score !== null ? String(sub.score) : "95");
    setFeedbackInput(
      sub.feedback || "Well done! The structural model alignment and BNBC schedule are accurate."
    );
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

    setSuccessMsg(`Evaluation and marks published for ${selectedSubmission.studentName}!`);
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
            Inspect student answer notes, download .rvt / .dwg models, and publish verified scores
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
          <InstructorSubmissionCard
            key={sub.id}
            sub={sub}
            onEvaluate={handleOpenEvaluate}
          />
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
