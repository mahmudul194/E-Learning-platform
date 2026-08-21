"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, CheckCircle2, PlayCircle, Lock, Download, ArrowLeft } from "lucide-react";
import { EnrolledCourse, EnrolledLesson } from "@/types/dashboard";

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
      <div className="bg-white/95 backdrop-blur-xs p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button onClick={onBackToCourses} className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> <span>Back to Courses</span>
          </button>
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">{courseData.title}</h2>
            <span className="text-xs text-[#0077b6] font-mono font-bold">{courseData.batch} • {courseData.instructor}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-64">
          <div className="flex-1 space-y-1">
            <div className="flex justify-between text-[11px] font-bold"><span className="text-slate-500">Progress</span><span className="text-slate-900 font-mono">{courseData.progressPercent}%</span></div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden"><div className="h-full bg-gradient-to-r from-[#002b5b] to-[#0077b6] rounded-full transition-all duration-500" style={{ width: `${courseData.progressPercent}%` }} /></div>
          </div>
          <span className="text-[11px] font-mono font-bold bg-sky-50 text-[#0077b6] px-2.5 py-1 rounded-xl border border-sky-200/60 shrink-0">{courseData.completedLessons}/{courseData.totalLessons} Done</span>
        </div>
      </div>

      {lockedAlert && <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold flex items-center gap-2 animate-fade-in"><Lock className="w-4 h-4 text-amber-600 shrink-0" /><span>{lockedAlert}</span></div>}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-5">
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs space-y-4">
            <div className="relative aspect-video bg-black"><iframe src={activeLesson?.videoUrl} title={activeLesson?.title} className="w-full h-full border-0" allowFullScreen /></div>
            <div className="p-6 sm:p-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-md bg-sky-100 text-[#0077b6] text-xs font-bold font-mono">Lesson {activeLesson?.lessonNo}</span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1">{activeLesson?.title}</h3>
                  <span className="text-xs text-slate-500 font-medium">{activeLesson?.duration}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => prevLesson && handleSelectLesson(prevLesson)} disabled={!prevLesson} className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-bold flex items-center gap-1 cursor-pointer disabled:cursor-not-allowed"><ChevronLeft className="w-4 h-4" /> Previous</button>
                  <button onClick={handleNextAndComplete} disabled={!nextLesson} className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#002b5b] to-[#0077b6] hover:from-[#001830] hover:to-[#005a8c] disabled:opacity-40 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md cursor-pointer disabled:cursor-not-allowed"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Next Lesson & Finish <ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{activeLesson?.description}</p>
              {activeLesson?.resources?.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Lecture Exercise Files ({activeLesson.resources.length})</span>
                  {activeLesson.resources.map((f, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                      <div><strong className="text-slate-900 block">{f.name}</strong><span className="text-[10px] text-slate-500 font-mono">{f.type} • {f.size}</span></div>
                      <button className="px-3 py-1.5 rounded-lg bg-[#0077b6] hover:bg-[#005a8c] text-white font-bold text-xs flex items-center gap-1 cursor-pointer"><Download className="w-3.5 h-3.5" /> Download</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3 h-fit">
          <div className="border-b border-slate-100 pb-3"><h4 className="text-sm font-black text-slate-900">Course Syllabus & Modules</h4><p className="text-[11px] text-slate-500">Click to watch unlocked lessons</p></div>
          <div className="space-y-2.5 max-h-[650px] overflow-y-auto pr-1 custom-scrollbar">
            {courseData.modules.map((mod) => (
              <div key={mod.id} className="rounded-2xl border border-slate-200/80 overflow-hidden bg-slate-50/70">
                <button type="button" onClick={() => toggleModule(mod.id)} className="w-full p-3 flex items-center justify-between text-left hover:bg-slate-100/80 transition-colors cursor-pointer">
                  <div className="min-w-0 pr-2"><span className="text-[10px] font-bold text-[#0077b6] uppercase font-mono block">{mod.moduleNo}</span><h5 className="text-xs font-bold text-slate-900 truncate">{mod.title}</h5></div>
                  <div className="flex items-center gap-1.5 shrink-0"><span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-sky-100 text-[#0077b6]">{mod.lessons.filter(l => l.isCompleted).length}/{mod.lessons.length}</span><ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openModules[mod.id] ? "rotate-180" : ""}`} /></div>
                </button>
                {openModules[mod.id] && (
                  <div className="p-2 space-y-1.5 border-t border-slate-200/60 bg-white">
                    {mod.lessons.map((les) => (
                      <div key={les.id} onClick={() => handleSelectLesson(les)} className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 text-xs transition-all cursor-pointer ${activeLessonId === les.id ? "bg-sky-50 border-[#0077b6] shadow-2xs font-bold text-slate-900" : !les.isUnlocked ? "bg-slate-50/50 border-slate-200/50 text-slate-400 opacity-60" : "bg-slate-50 border-slate-200/80 hover:bg-slate-100 text-slate-700"}`}>
                        <div className="flex items-center gap-2 min-w-0">{les.isCompleted ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> : !les.isUnlocked ? <Lock className="w-4 h-4 text-slate-400 shrink-0" /> : <PlayCircle className="w-4 h-4 text-[#0077b6] shrink-0" />}<span className="truncate">{les.title}</span></div>
                        <span className="text-[10px] font-mono text-slate-500 shrink-0">{les.duration}</span>
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
