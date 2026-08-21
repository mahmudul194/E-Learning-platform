"use client";

import React, { useState } from "react";
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
  const [moduleNo, setModuleNo] = useState("Module 04");
  const [moduleTitle, setModuleTitle] = useState("");
  const [duration, setDuration] = useState("8 Hours");
  const [firstLessonTitle, setFirstLessonTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("https://vimeo.com/76979871");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMod: CourseModuleItem = {
      id: `mod-${Date.now()}`,
      courseId: "revit-combo-pro",
      courseName: selectedCourseName,
      moduleNo,
      moduleTitle,
      duration,
      lessons: [
        {
          id: `les-${Date.now()}`,
          title: firstLessonTitle || "Introduction & Project Setup",
          videoUrl,
          duration: "55m",
          resourcesCount: 3,
        },
      ],
    };

    onAddModule(newMod);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-4 shadow-2xl border border-slate-200">
        <div className="border-b border-slate-100 pb-3">
          <h4 className="text-lg font-black text-slate-900">Upload Course Module</h4>
          <p className="text-xs text-slate-500">Add syllabus module to <strong className="text-[#0077b6]">{selectedCourseName}</strong></p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Module No</label>
              <input
                type="text"
                required
                value={moduleNo}
                onChange={(e) => setModuleNo(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 block mb-1">Estimated Duration</label>
              <input
                type="text"
                required
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Module Title</label>
            <input
              type="text"
              required
              placeholder="e.g. Advanced Structural Rebar & Column Detailing"
              value={moduleTitle}
              onChange={(e) => setModuleTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Initial Lesson / Class Topic</label>
            <input
              type="text"
              required
              placeholder="e.g. 3D Rebar Placement & Bar Bending Schedules"
              value={firstLessonTitle}
              onChange={(e) => setFirstLessonTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Video Stream / Embed URL (Vimeo/Drive)</label>
            <input
              type="url"
              required
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none font-mono text-[11px]"
            />
          </div>

          <div className="flex justify-end gap-2.5 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#002b5b] hover:bg-[#001830] text-white font-bold text-xs shadow-md cursor-pointer"
            >
              Save Module
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
