"use client";

import React, { useState } from "react";
import { UserCheck, Search, Plus, Phone, Mail } from "lucide-react";
import AdminAddInstructorModal from "./AdminAddInstructorModal";

export interface InstructorRecord {
  id: string;
  name: string;
  role: string;
  specialty: string;
  phone: string;
  email: string;
  batchesCount: number;
  studentsCount: number;
  rating: number;
  status: "Active" | "On Leave";
}

const INITIAL_INSTRUCTORS: InstructorRecord[] = [
  { id: "ins-1", name: "Engr. Ashikur Rahman", role: "Lead Structural BIM Specialist", specialty: "Revit Structure + Dynamo Automation", phone: "+880 1711-223344", email: "ashikur@bimbuildbd.com", batchesCount: 12, studentsCount: 2150, rating: 4.9, status: "Active" },
  { id: "ins-2", name: "Engr. Mojahedur Rahman", role: "Senior Tekla Detailing Specialist", specialty: "Tekla Structures + Steel Connections", phone: "+880 1722-334455", email: "mojahedur@bimbuildbd.com", batchesCount: 8, studentsCount: 1480, rating: 4.85, status: "Active" },
  { id: "ins-3", name: "Engr. Maidul Islam", role: "Lead Architectural & MEP Specialist", specialty: "Revit Architecture + MEP Coordination", phone: "+880 1733-445566", email: "maidul@bimbuildbd.com", batchesCount: 10, studentsCount: 1610, rating: 4.9, status: "Active" },
];

export default function AdminInstructorsTab() {
  const [instructors, setInstructors] = useState<InstructorRecord[]>(INITIAL_INSTRUCTORS);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = instructors.filter((ins) =>
    ins.name.toLowerCase().includes(search.toLowerCase()) ||
    ins.specialty.toLowerCase().includes(search.toLowerCase()) ||
    ins.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddInstructor = (t: InstructorRecord) => setInstructors((p) => [t, ...p]);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[#0077b6]" />
            <span>Instructor & Mentor Directory</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Manage lead BIM trainers, assigned live batches, student ratios & performance ratings
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#002b5b] to-[#0077b6] hover:from-[#001830] hover:to-[#005a8c] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer hover:scale-102 shrink-0"
        >
          <Plus className="w-4 h-4 text-sky-400" />
          <span>Add New Trainer</span>
        </button>
      </div>

      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search by trainer name, email or specialty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:border-[#0077b6] focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filtered.map((ins) => (
          <div key={ins.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 hover:border-sky-300 transition-all">
            <div className="flex items-start justify-between">
              <div>
                <strong className="text-base font-extrabold text-slate-900 block">{ins.name}</strong>
                <span className="text-xs text-[#0077b6] font-bold">{ins.role}</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">{ins.status}</span>
            </div>

            <p className="text-xs text-slate-600 bg-white p-2 rounded-xl border border-slate-200 font-medium">
              Specialty: <span className="font-bold text-slate-800">{ins.specialty}</span>
            </p>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] text-slate-400 block font-bold">Batches</span>
                <span className="font-extrabold text-slate-900">{ins.batchesCount}</span>
              </div>
              <div className="p-2 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] text-slate-400 block font-bold">Students</span>
                <span className="font-extrabold text-[#0077b6]">{ins.studentsCount.toLocaleString()}</span>
              </div>
              <div className="p-2 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] text-slate-400 block font-bold">Rating</span>
                <span className="font-extrabold text-amber-800 font-mono">★ {ins.rating}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 space-y-1 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-2 truncate"><Phone className="w-3.5 h-3.5 text-[#0077b6] shrink-0" /><span>{ins.phone}</span></div>
              <div className="flex items-center gap-2 truncate"><Mail className="w-3.5 h-3.5 text-[#0077b6] shrink-0" /><span className="truncate">{ins.email}</span></div>
            </div>
          </div>
        ))}
      </div>

      <AdminAddInstructorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddInstructor} />
    </div>
  );
}
