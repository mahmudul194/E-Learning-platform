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
  const [form, setForm] = useState({
    name: "",
    code: "",
    instructor: "Engr. Ashikur Rahman",
    regFee: "20000",
    discFee: "16000",
    fbUrl: "https://facebook.com/groups/bim-secret-batch",
    schedule: "Mon, Wed, Fri (9:00 PM - 11:00 PM)",
    software: "Revit 2024 + Dynamo 2.19",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({
      id: `bat-${Date.now()}`,
      name: form.name,
      code: form.code,
      instructor: form.instructor,
      enrolledStudents: 0,
      maxSeats: 45,
      startDate: "Oct 01, 2026",
      regularFee: `৳${Number(form.regFee).toLocaleString()}`,
      discountFee: `৳${Number(form.discFee).toLocaleString()}`,
      fbGroupUrl: form.fbUrl,
      schedule: form.schedule,
      duration: "4 Months (40 Classes)",
      softwareVersion: form.software,
      metaTitle: `${form.name} Intake`,
      metaKeywords: "BIM, Revit, Tekla",
      status: "Enrolling",
    });
    onClose();
  };

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans text-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl border border-slate-200">
        <div className="border-b border-slate-100 pb-3">
          <h4 className="text-lg font-black text-slate-900">Launch New Live Batch</h4>
          <p className="text-slate-500">Configure pricing, secret FB group & software metadata</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" required placeholder="Batch Name" value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none" />

          <div className="grid grid-cols-2 gap-2.5">
            <input type="text" required placeholder="Code (REV-9TH)" value={form.code} onChange={(e) => update("code", e.target.value)} className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] uppercase focus:outline-none" />
            <select value={form.instructor} onChange={(e) => update("instructor", e.target.value)} className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none bg-white">
              <option value="Engr. Ashikur Rahman">Engr. Ashikur Rahman</option>
              <option value="Engr. Mojahedur Rahman">Engr. Mojahedur Rahman</option>
              <option value="Engr. Maidul Islam">Engr. Maidul Islam</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-2.5 font-mono">
            <input type="number" required placeholder="Regular Fee" value={form.regFee} onChange={(e) => update("regFee", e.target.value)} className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none" />
            <input type="number" required placeholder="Discount Fee" value={form.discFee} onChange={(e) => update("discFee", e.target.value)} className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none" />
          </div>

          <input type="url" required placeholder="FB Group Link" value={form.fbUrl} onChange={(e) => update("fbUrl", e.target.value)} className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none font-mono text-[11px]" />

          <div className="grid grid-cols-2 gap-2.5">
            <input type="text" placeholder="Schedule" value={form.schedule} onChange={(e) => update("schedule", e.target.value)} className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none" />
            <input type="text" placeholder="Software" value={form.software} onChange={(e) => update("software", e.target.value)} className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none" />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 cursor-pointer">Cancel</button>
            <button type="submit" className="px-5 py-2 rounded-xl bg-[#002b5b] hover:bg-[#001830] text-white font-bold shadow-md cursor-pointer">Launch Batch</button>
          </div>
        </form>
      </div>
    </div>
  );
}
