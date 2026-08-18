"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, X } from "lucide-react";

export default function PortfolioPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const drawingProjects = [
    {
      status: "On Going",
      title: "Students Project",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      status: "On Going",
      title: "Students Project",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    },
    {
      status: "Completed",
      title: "Studens Project Pile & Pile Cap",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const videoProjects = [
    {
      title: "Video Placeholder",
      subtitle: "Elementor Project",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Video Placeholder",
      subtitle: "Elementor Project",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Video Placeholder",
      subtitle: "Elementor Project",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Video Placeholder",
      subtitle: "Elementor Project",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-14 sm:space-y-18">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-slate-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700 font-semibold">Our Portfolio</span>
        </div>

        {/* Page Title */}
        <div className="text-center pt-1 pb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight">
            Our Portfolio
          </h1>
        </div>

        {/* Section 1: Project Gallery (2D / 3D Drawings) */}
        <div className="space-y-10">
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight">
              Project{" "}
              <span className="relative inline-block">
                <span>Gallery</span>
                {/* Curved orange brush underline */}
                <svg
                  className="w-full h-3 text-[#ea580c] absolute -bottom-1.5 left-0"
                  viewBox="0 0 100 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8C25 2 75 2 98 9"
                    stroke="#ea580c"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* 3-Column Architectural Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {drawingProjects.map((proj, idx) => (
              <div key={idx} className="space-y-3 text-center flex flex-col items-center">
                <h3 className="text-base sm:text-lg font-extrabold text-[#ea580c]">
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

        {/* Section 2: Project Video Gallery */}
        <div className="space-y-10 pt-8 border-t border-slate-100">
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight">
              Project{" "}
              <span className="relative inline-block">
                <span>Gallery</span>
                {/* Curved orange brush underline */}
                <svg
                  className="w-full h-3 text-[#ea580c] absolute -bottom-1.5 left-0"
                  viewBox="0 0 100 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8C25 2 75 2 98 9"
                    stroke="#ea580c"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* 4-Column Video Grid matching Screenshot 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {videoProjects.map((video, idx) => (
              <div
                key={idx}
                onClick={() => setActiveVideo(video.url)}
                className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between h-48 sm:h-52"
              >
                {/* Background Image Thumbnail */}
                <img
                  src={video.image}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/70 pointer-events-none" />

                {/* Top Video Header */}
                <div className="relative z-10 p-3 flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white font-black text-[10px] shrink-0 shadow-xs">
                    ≡
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-white leading-tight line-clamp-1 drop-shadow-sm">
                      {video.title}
                    </h4>
                    <p className="text-[10px] text-slate-300 mt-0.5">{video.subtitle}</p>
                  </div>
                </div>

                {/* Center YouTube Red Play Button */}
                <div className="relative z-10 flex items-center justify-center my-auto">
                  <div className="w-12 h-8 rounded-xl bg-red-600 group-hover:bg-red-700 flex items-center justify-center shadow-xl transition-all group-hover:scale-110">
                    <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom YouTube Bar Overlay */}
                <div className="relative z-10 p-2.5 flex items-center justify-between text-white text-[10px]">
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-2 py-1 rounded-md">
                    <span>Watch on</span>
                    <span className="font-bold text-red-500">YouTube</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black p-2.5 rounded-full z-10 cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={activeVideo}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
