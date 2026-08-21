"use client";

import React, { useState } from "react";
import { FolderTree, Plus, Video, Clock, FolderDown, BookOpen } from "lucide-react";
import { MOCK_COURSE_MODULES } from "@/data/adminCourseContentMockData";
import { CourseModuleItem } from "@/types/dashboard";
import AdminAddModuleModal from "./AdminAddModuleModal";

export default function AdminModulesTab() {
  const [modules, setModules] = useState<CourseModuleItem[]>(MOCK_COURSE_MODULES);
  const [selectedCourse, setSelectedCourse] = useState("revit-combo-pro");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courseNames: Record<string, string> = {
    "revit-combo-pro": "Revit Combo Pro (Arch + Struct + MEP)",
    "tekla-steel-pro": "Tekla Steel Detailing Masterclass",
    "revit-dynamo": "Revit Dynamo BIM Automation",
  };

  const filteredModules = modules.filter(
    (m) => m.courseId === selectedCourse || selectedCourse === "all"
  );

  const handleAddModule = (newMod: CourseModuleItem) => {
    newMod.courseId = selectedCourse === "all" ? "revit-combo-pro" : selectedCourse;
    setModules([...modules, newMod]);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FolderTree className="w-5 h-5 text-[#0077b6]" />
            <span>Course Content & Module Uploader</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Structure syllabus modules, upload video lectures, and attach BIM project resources
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-[#002b5b] hover:bg-[#001830] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4 text-sky-400" />
          <span>Add New Module</span>
        </button>
      </div>

      {/* Course Filter Selector */}
      <div className="flex flex-wrap items-center gap-2">
        {Object.entries(courseNames).map(([id, title]) => (
          <button
            key={id}
            onClick={() => setSelectedCourse(id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCourse === id
                ? "bg-[#0077b6] text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Modules List */}
      <div className="space-y-4">
        {filteredModules.map((mod) => (
          <div key={mod.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-md bg-[#002b5b] text-white font-mono text-xs font-bold">
                  {mod.moduleNo}
                </span>
                <strong className="text-sm sm:text-base font-extrabold text-slate-900">{mod.moduleTitle}</strong>
              </div>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#0077b6]" /> {mod.duration}
              </span>
            </div>

            {/* Lessons List in Module */}
            <div className="space-y-2">
              {mod.lessons.map((les) => (
                <div
                  key={les.id}
                  className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    <Video className="w-4 h-4 text-[#0077b6] shrink-0" />
                    <span className="font-bold text-slate-800 truncate">{les.title}</span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 text-slate-500 font-mono text-[11px]">
                    <span>{les.duration}</span>
                    <span className="px-2 py-0.5 rounded bg-sky-50 text-[#0077b6] font-bold">
                      {les.resourcesCount} Files
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AdminAddModuleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCourseName={courseNames[selectedCourse] || "Course"}
        onAddModule={handleAddModule}
      />
    </div>
  );
}
