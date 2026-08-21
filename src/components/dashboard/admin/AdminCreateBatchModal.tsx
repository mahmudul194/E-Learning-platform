"use client";

import React, { useState } from "react";
import { AdminBatch } from "@/data/adminMockData";

interface AdminCreateBatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (batch: AdminBatch) => void;
}

export default function AdminCreateBatchModal({
  isOpen,
  onClose,
  onCreate,
}: AdminCreateBatchModalProps) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [instructor, setInstructor] = useState("Engr. Ashikur Rahman");
  const [fee, setFee] = useState("18000");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBatch: AdminBatch = {
      id: `bat-${Date.now()}`,
      name,
      code,
      instructor,
      enrolledStudents: 0,
      maxSeats: 45,
      startDate: "Oct 01, 2026",
      fee: `৳${fee}`,
      status: "Enrolling",
    };

    onCreate(newBatch);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200">
        <div className="border-b border-slate-100 pb-3">
          <h4 className="text-lg font-black text-slate-900">Create New Course Batch</h4>
          <p className="text-xs text-slate-500">Launch a new live batch and open admission enrollment</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 block">Batch Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Professional Revit Combo 9th Batch"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">Batch Code</label>
              <input
                type="text"
                required
                placeholder="e.g. REV-9TH"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none uppercase"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">Course Fee (BDT)</label>
              <input
                type="number"
                required
                value={fee}
                onChange={(e) => setFee(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 block">Assigned Lead Trainer</label>
            <select
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none bg-white"
            >
              <option value="Engr. Ashikur Rahman">Engr. Ashikur Rahman (Lead BIM Specialist)</option>
              <option value="Engr. Mojahedur Rahman">Engr. Mojahedur Rahman (Senior Architect)</option>
              <option value="Engr. Maidul Islam">Engr. Maidul Islam (Tekla Steel Specialist)</option>
            </select>
          </div>

          <div className="flex justify-end gap-2.5 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs cursor-pointer hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#002b5b] hover:bg-[#001a38] text-white font-bold text-xs cursor-pointer shadow-md"
            >
              Launch Batch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
