"use client";

import React, { useState } from "react";
import { FolderTree, X } from "lucide-react";
import { CourseModuleItem } from "@/types/dashboard";

interface AdminAddModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourseName: string;
  onAddModule: (mod: CourseModuleItem) => void;
}

export default function AdminAddModuleModal({
  isOpen,
  onClose,
  selectedCourseName,
  onAddModule,
}: AdminAddModuleModalProps) {
  const [form, setForm] = useState({
    moduleNo: "Module 04",
    moduleTitle: "",
    duration: "8 Hours",
    firstLessonTitle: "",
    videoUrl: "https://vimeo.com/76979871",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddModule({
      id: `mod-${Date.now()}`,
      courseId: "revit-combo-pro",
      courseName: selectedCourseName,
      moduleNo: form.moduleNo,
      moduleTitle: form.moduleTitle,
      duration: form.duration,
      lessons: [
        {
          id: `les-${Date.now()}`,
          title: form.firstLessonTitle || "Introduction & Setup",
          videoUrl: form.videoUrl,
          duration: "55m",
          resourcesCount: 3,
        },
      ],
    });
    onClose();
  };

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 font-sans animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-7 sm:p-9 space-y-5 shadow-2xl border border-slate-100 ring-1 ring-black/5 animate-scale-in my-8 text-xs sm:text-sm">
        <div className="flex items-start justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0077b6] flex items-center justify-center border border-sky-100 shrink-0">
              <FolderTree className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">Upload Course Syllabus Module</h3>
              <p className="text-xs text-slate-500 mt-0.5">Attach structured lectures, video stream links & BIM datasets</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prominent Selected Course Scope Highlight */}
        <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
            <span className="text-slate-600 font-bold shrink-0">Selected Course:</span>
            <strong className="text-sm font-black text-[#002b5b] truncate">{selectedCourseName}</strong>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#0077b6]/10 text-[#0077b6] font-mono text-[11px] font-extrabold shrink-0">Active Scope</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 block mb-1.5">Module Identifier</label>
              <input type="text" required value={form.moduleNo} onChange={(e) => update("moduleNo", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0077b6] font-mono font-bold focus:outline-none" />
            </div>
            <div>
              <label className="font-bold text-slate-700 block mb-1.5">Estimated Duration</label>
              <input type="text" required value={form.duration} onChange={(e) => update("duration", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0077b6] focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1.5">Module Title / Topic Area</label>
            <input type="text" required placeholder="e.g. Advanced Structural Rebar & Column Detailing" value={form.moduleTitle} onChange={(e) => update("moduleTitle", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0077b6] focus:outline-none" />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1.5">Initial Class / Lesson Title</label>
            <input type="text" required placeholder="e.g. 3D Rebar Placement & Bar Bending Schedules" value={form.firstLessonTitle} onChange={(e) => update("firstLessonTitle", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0077b6] focus:outline-none" />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1.5">Video Embed URL (Vimeo / Google Drive)</label>
            <input type="url" required value={form.videoUrl} onChange={(e) => update("videoUrl", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0077b6] font-mono text-xs focus:outline-none" />
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
            <button type="button" onClick={onClose} className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors cursor-pointer">Cancel</button>
            <button type="submit" className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#002b5b] to-[#0077b6] hover:from-[#001830] hover:to-[#005a8c] text-white font-extrabold shadow-md transition-all cursor-pointer hover:scale-102">Save & Publish Module</button>
          </div>
        </form>
      </div>
    </div>
  );
}
