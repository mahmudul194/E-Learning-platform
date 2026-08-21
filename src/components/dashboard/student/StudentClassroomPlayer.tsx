"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, CheckCircle2, PlayCircle, Lock, Download, ArrowLeft } from "lucide-react";
import { EnrolledCourse, EnrolledLesson } from "@/types/dashboard";
import CustomVideoPlayer from "./CustomVideoPlayer";

interface StudentClassroomPlayerProps {
  course: EnrolledCourse;
  onBackToCourses: () => void;
}

export default function StudentClassroomPlayer({ course, onBackToCourses }: StudentClassroomPlayerProps) {
  const [courseData, setCourseData] = useState<EnrolledCourse>(course);
  const allLessons = courseData.modules.flatMap((m) => m.lessons);
  const [activeLessonId, setActiveLessonId] = useState<string>(
    allLessons.find((l) => l.isUnlocked && !l.isCompleted)?.id || allLessons[0]?.id
  );
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    [courseData.modules[0]?.id]: true,
    [courseData.modules[1]?.id]: true,
  });
  const [lockedAlert, setLockedAlert] = useState<string | null>(null);

  const activeLesson = allLessons.find((l) => l.id === activeLessonId) || allLessons[0];
  const currentIndex = allLessons.findIndex((l) => l.id === activeLesson?.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  const toggleModule = (modId: string) => setOpenModules((p) => ({ ...p, [modId]: !p[modId] }));

  const handleSelectLesson = (lesson: EnrolledLesson) => {
    if (!lesson.isUnlocked) {
      setLockedAlert(`Lesson ${lesson.lessonNo} is locked! Complete current lesson first to unlock.`);
      setTimeout(() => setLockedAlert(null), 3500);
      return;
    }
    setLockedAlert(null);
    setActiveLessonId(lesson.id);
  };

  const handleNextAndComplete = () => {
    if (!nextLesson) return;
    setCourseData((prev) => {
      const updated = prev.modules.map((m) => ({
        ...m,
        lessons: m.lessons.map((l) => {
          if (l.id === activeLesson.id) return { ...l, isCompleted: true };
          if (l.id === nextLesson.id) return { ...l, isUnlocked: true };
          return l;
        }),
      }));
      const flat = updated.flatMap((m) => m.lessons);
      const done = flat.filter((l) => l.isCompleted).length;
      return { ...prev, modules: updated, completedLessons: done, progressPercent: Math.round((done / flat.length) * 100) };
    });
    setActiveLessonId(nextLesson.id);
    const nextMod = courseData.modules.find((m) => m.lessons.some((l) => l.id === nextLesson.id));
    if (nextMod) setOpenModules((p) => ({ ...p, [nextMod.id]: true }));
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Top Course Information Header */}
      <div className="bg-white/95 backdrop-blur-xs p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button onClick={onBackToCourses} className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm flex items-center gap-2 transition-all cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> <span>Back to Courses</span>
          </button>
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-tight">{courseData.title}</h2>
            <span className="text-sm text-[#0077b6] font-semibold mt-0.5 block">{courseData.batch} • {courseData.instructor}</span>
          </div>
        </div>
        <div className="flex items-center gap-3.5 w-full md:w-72">
          <div className="flex-1 space-y-1.5">
            <div className="flex justify-between text-xs font-bold"><span className="text-slate-500">Course Progress</span><span className="text-slate-900 font-mono text-sm">{courseData.progressPercent}%</span></div>
            <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden"><div className="h-full bg-gradient-to-r from-[#002b5b] to-[#0077b6] rounded-full transition-all duration-500" style={{ width: `${courseData.progressPercent}%` }} /></div>
          </div>
          <span className="text-xs font-mono font-bold bg-sky-50 text-[#0077b6] px-3 py-1.5 rounded-xl border border-sky-200/60 shrink-0">{courseData.completedLessons}/{courseData.totalLessons} Done</span>
        </div>
      </div>

      {lockedAlert && <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-bold flex items-center gap-2.5 animate-fade-in"><Lock className="w-5 h-5 text-amber-600 shrink-0" /><span>{lockedAlert}</span></div>}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs space-y-4">
            <CustomVideoPlayer title={activeLesson?.title || "BIM Engineering Class"} videoUrl={activeLesson?.videoUrl} onEnded={handleNextAndComplete} />

            <div className="p-6 sm:p-7 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <span className="px-3 py-1 rounded-lg bg-sky-100 text-[#0077b6] text-xs font-bold font-mono">Lesson {activeLesson?.lessonNo}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1.5 leading-snug">{activeLesson?.title}</h3>
                  <span className="text-sm text-slate-500 font-semibold mt-0.5 block">{activeLesson?.duration}</span>
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  <button onClick={() => prevLesson && handleSelectLesson(prevLesson)} disabled={!prevLesson} className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-sm font-bold flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"><ChevronLeft className="w-4 h-4" /> Previous</button>
                  <button onClick={handleNextAndComplete} disabled={!nextLesson} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#002b5b] to-[#0077b6] hover:from-[#001830] hover:to-[#005a8c] disabled:opacity-40 text-white text-sm font-extrabold flex items-center gap-2 shadow-md cursor-pointer disabled:cursor-not-allowed"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Next Lesson & Finish <ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">{activeLesson?.description}</p>
              {activeLesson?.resources?.length > 0 && (
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <span className="text-sm font-bold text-slate-800 block">Lecture Exercise Files ({activeLesson.resources.length})</span>
                  {activeLesson.resources.map((f, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 text-sm">
                      <div><strong className="text-slate-900 block font-bold">{f.name}</strong><span className="text-xs text-slate-500 font-mono">{f.type} • {f.size}</span></div>
                      <button className="px-3.5 py-2 rounded-lg bg-[#0077b6] hover:bg-[#005a8c] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"><Download className="w-4 h-4" /> Download</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar Syllabus & Modules */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs space-y-4 h-fit">
          <div className="border-b border-slate-100 pb-3"><h4 className="text-base sm:text-lg font-black text-slate-900">Course Syllabus & Modules</h4><p className="text-xs text-slate-500 font-medium">Click to watch unlocked lessons</p></div>
          <div className="space-y-3 max-h-[680px] overflow-y-auto pr-1 custom-scrollbar">
            {courseData.modules.map((mod) => (
              <div key={mod.id} className="rounded-2xl border border-slate-200/80 overflow-hidden bg-slate-50/70">
                <button type="button" onClick={() => toggleModule(mod.id)} className="w-full p-3.5 flex items-center justify-between text-left hover:bg-slate-100/80 transition-colors cursor-pointer">
                  <div className="min-w-0 pr-2"><span className="text-xs font-black text-[#0077b6] uppercase font-mono block tracking-wider">{mod.moduleNo}</span><h5 className="text-sm sm:text-base font-bold text-slate-900 truncate mt-0.5">{mod.title}</h5></div>
                  <div className="flex items-center gap-2 shrink-0"><span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-[#0077b6]">{mod.lessons.filter(l => l.isCompleted).length}/{mod.lessons.length}</span><ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openModules[mod.id] ? "rotate-180" : ""}`} /></div>
                </button>
                {openModules[mod.id] && (
                  <div className="p-2.5 space-y-2 border-t border-slate-200/60 bg-white">
                    {mod.lessons.map((les) => (
                      <div key={les.id} onClick={() => handleSelectLesson(les)} className={`p-3 rounded-xl border flex items-center justify-between gap-2.5 text-sm transition-all cursor-pointer ${activeLessonId === les.id ? "bg-sky-50 border-[#0077b6] shadow-2xs font-bold text-slate-900" : !les.isUnlocked ? "bg-slate-50/50 border-slate-200/50 text-slate-400 opacity-60" : "bg-slate-50 border-slate-200/80 hover:bg-slate-100 text-slate-700"}`}>
                        <div className="flex items-center gap-2.5 min-w-0">{les.isCompleted ? <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> : !les.isUnlocked ? <Lock className="w-5 h-5 text-slate-400 shrink-0" /> : <PlayCircle className="w-5 h-5 text-[#0077b6] shrink-0" />}<span className="truncate">{les.title}</span></div>
                        <span className="text-xs font-mono text-slate-500 shrink-0">{les.duration}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
