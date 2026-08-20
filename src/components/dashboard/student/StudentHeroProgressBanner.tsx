"use client";

import React from "react";
import { Sparkles, Play } from "lucide-react";
import { UserAccount } from "@/data/dummyAccounts";
import { ClassVideo } from "@/types/dashboard";

interface StudentHeroProgressBannerProps {
  currentUser: UserAccount;
  classesList: ClassVideo[];
  onSelectVideo: (video: ClassVideo) => void;
  onNavigateToCourses: () => void;
}

export default function StudentHeroProgressBanner({
  currentUser,
  classesList,
  onSelectVideo,
  onNavigateToCourses,
}: StudentHeroProgressBannerProps) {
  return (
    <div className="bg-gradient-to-r from-[#002b5b] via-[#0f4c81] to-[#0077b6] rounded-3xl text-white p-7 sm:p-10 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 font-sans">
      <div className="space-y-4 z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-sky-100 text-xs sm:text-sm font-bold backdrop-blur-xs">
          <Sparkles className="w-4 h-4 text-sky-200" />
          <span>Welcome Back, {currentUser.name}!</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
          Revit Architecture + Structure (5th Batch)
        </h2>
        <p className="text-sm sm:text-base text-sky-100 font-medium leading-relaxed">
          Next Lesson: <strong className="text-white font-bold">Class 28 — Column & Rebar Detailing</strong>
        </p>

        {/* Progress Bar */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between text-xs sm:text-sm font-bold text-sky-100">
            <span>Overall Course Progress</span>
            <span className="text-sky-200 font-extrabold">68% Complete (28/45 Classes)</span>
          </div>
          <div className="w-full h-3.5 bg-black/25 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-sky-300 to-sky-100 rounded-full w-[68%]" />
          </div>
        </div>
      </div>

      <div className="z-10 shrink-0">
        <button
          onClick={() => {
            onSelectVideo(classesList[0]);
            onNavigateToCourses();
          }}
          className="px-8 py-4 rounded-2xl bg-white text-[#002b5b] hover:bg-sky-50 font-black text-sm sm:text-base flex items-center gap-3 shadow-xl hover:scale-105 transition-all cursor-pointer"
        >
          <Play className="w-5 h-5 fill-[#002b5b]" />
          <span>Resume Learning</span>
        </button>
      </div>
    </div>
  );
}
