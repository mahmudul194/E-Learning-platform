"use client";

import React, { useState } from "react";
import { ClassVideo } from "@/types/dashboard";

interface StudentCoursePlayerTabProps {
  classesList: ClassVideo[];
  activeVideo: ClassVideo;
  onSelectVideo: (video: ClassVideo) => void;
}

export default function StudentCoursePlayerTab({
  classesList,
  activeVideo,
  onSelectVideo,
}: StudentCoursePlayerTabProps) {
  const [videoTab, setVideoTab] = useState<"notes" | "files">("notes");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans">
      {/* Video Player Column (8 cols) */}
      <div className="lg:col-span-8 space-y-6">
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
          {/* 16:9 Aspect Video Player */}
          <div className="relative aspect-video bg-black">
            <iframe
              src={activeVideo.videoUrl}
              title={activeVideo.title}
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>

          {/* Video Title & Meta */}
          <div className="p-7 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-500">
                <span className="px-3 py-0.5 rounded-full bg-sky-100 text-[#0077b6]">
                  Class {activeVideo.no}
                </span>
                <span>•</span>
                <span>{activeVideo.duration}</span>
                <span>•</span>
                <span>{activeVideo.date}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {activeVideo.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeVideo.description}
              </p>
            </div>

            {/* Interactive Lecture Tabs */}
            <div className="border-t border-slate-100 pt-5 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <button
                  onClick={() => setVideoTab("notes")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                    videoTab === "notes"
                      ? "bg-[#002b5b] text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Lecture Overview & Notes
                </button>
                <button
                  onClick={() => setVideoTab("files")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                    videoTab === "files"
                      ? "bg-[#002b5b] text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Exercise Files ({activeVideo.resources.length})
                </button>
              </div>

              {videoTab === "notes" && (
                <div className="text-xs sm:text-sm text-slate-700 space-y-2.5 p-4 bg-slate-50 rounded-2xl">
                  <p><strong>Key Concepts:</strong> Column Splice, Rebar Shape Codes, Reinforcement Scheduling, 3D Detailing.</p>
                  <p><strong>Required Software:</strong> Autodesk Revit 2024 / 2025.</p>
                </div>
              )}

              {videoTab === "files" && (
                <div className="space-y-3">
                  {activeVideo.resources.map((f, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
                      <div>
                        <strong className="text-slate-900 block">{f.name}</strong>
                        <span className="text-xs text-slate-500 font-mono">{f.type} • {f.size}</span>
                      </div>
                      <button className="px-4 py-2 rounded-xl bg-[#0077b6] text-white font-bold text-xs sm:text-sm hover:bg-[#005a8c] cursor-pointer">
                        Download File
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Playlist Column (4 cols) */}
      <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 h-fit">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-base font-bold text-slate-900">Recorded Course Playlist</h3>
          <p className="text-xs text-slate-500">Select any class to play immediately</p>
        </div>

        <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
          {classesList.map((cls, idx) => (
            <div
              key={idx}
              onClick={() => onSelectVideo(cls)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                activeVideo.no === cls.no
                  ? "border-[#0077b6] bg-sky-50 shadow-xs"
                  : "border-slate-200/80 bg-slate-50 hover:bg-slate-100"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                  activeVideo.no === cls.no
                    ? "bg-[#0077b6] text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {cls.no}
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {cls.title}
                </h4>
                <span className="text-xs text-slate-500 font-medium">
                  {cls.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
