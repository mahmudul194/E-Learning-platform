"use client";

import React, { useState } from "react";
import { Layers, Plus, Users, Calendar, CheckCircle2 } from "lucide-react";
import { MOCK_ADMIN_BATCHES, AdminBatch } from "@/data/adminMockData";
import AdminCreateBatchModal from "./AdminCreateBatchModal";

interface AdminBatchesTabProps {
  onOpenCreate?: () => void;
}

export default function AdminBatchesTab() {
  const [batches, setBatches] = useState<AdminBatch[]>(MOCK_ADMIN_BATCHES);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateBatch = (newBatch: AdminBatch) => {
    setBatches([newBatch, ...batches]);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#0077b6]" />
            <span>Course Batch Management</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Create new live batches, assign instructors, and configure seat allocations
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-[#002b5b] hover:bg-[#001a38] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md cursor-pointer"
        >
          <Plus className="w-4 h-4 text-sky-400" />
          <span>New Batch</span>
        </button>
      </div>

      {/* Batch Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {batches.map((b) => (
          <div
            key={b.id}
            className="p-6 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg transition-all space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-md bg-[#0077b6]/10 text-[#0077b6] font-mono text-xs font-bold">
                {b.code}
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${
                  b.status === "Enrolling"
                    ? "bg-amber-100 text-amber-800"
                    : b.status === "Ongoing"
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {b.status}
              </span>
            </div>

            <div>
              <h4 className="font-black text-slate-900 text-base">{b.name}</h4>
              <span className="text-xs text-slate-500 font-medium mt-0.5 block">
                Lead Trainer: <strong>{b.instructor}</strong>
              </span>
            </div>

            <div className="text-xs text-slate-600 space-y-1.5 pt-1 border-t border-slate-200">
              <p className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-500">
                  <Users className="w-4 h-4" /> Capacity
                </span>
                <strong className="font-mono text-slate-900">{b.enrolledStudents}/{b.maxSeats} Filled</strong>
              </p>
              <p className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-500">
                  <Calendar className="w-4 h-4" /> Start Date
                </span>
                <span className="font-medium text-slate-700">{b.startDate}</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="text-slate-500">Course Fee</span>
                <strong className="font-bold text-[#0077b6]">{b.fee}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>

      <AdminCreateBatchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateBatch}
      />
    </div>
  );
}
