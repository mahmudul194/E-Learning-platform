"use client";

import React from "react";

interface DrawingProject {
  status: string;
  title: string;
  image: string;
}

interface DrawingProjectsSectionProps {
  projects: DrawingProject[];
}

export default function DrawingProjectsSection({ projects }: DrawingProjectsSectionProps) {
  return (
    <div className="space-y-10">
      <div className="text-left">
        <h2 className="text-xl sm:text-2xl font-black text-[#002b5b] tracking-tight">
          Project{" "}
          <span className="relative inline-block">
            <span className="text-[#0f4c81]">Gallery</span>
            <svg
              className="w-full h-3 text-[#0077b6] absolute -bottom-1.5 left-0"
              viewBox="0 0 100 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8C25 2 75 2 98 9"
                stroke="#0077b6"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {projects.map((proj, idx) => (
          <div key={idx} className="space-y-3 text-center flex flex-col items-center">
            <h3 className="text-base sm:text-lg font-extrabold text-[#0077b6]">
              {proj.status}
            </h3>

            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group bg-slate-50 p-2">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-xs sm:text-sm font-bold text-slate-800">
              {proj.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
