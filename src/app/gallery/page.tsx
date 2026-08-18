"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, X } from "lucide-react";

export default function StudentsGalleryPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const batchList = [
    {
      title: "1st Batch Students",
      subtitle: "Architectural, Structural, MEP & Navisworks",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      hasImage: true,
    },
    {
      title: "2nd Batch Students",
      subtitle: "Architectural, Structural, MEP & Navisworks",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      hasImage: true,
    },
    {
      title: "3rd & 4rth Batch Students",
      subtitle: "Architectural, Structural, MEP & Navisworks",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      hasImage: true,
    },
    {
      title: "Ongoing 5th Batch Students",
      subtitle: "Architectural, Structural, MEP & Navisworks",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      hasImage: true,
    },
    {
      title: "Coming Batch",
      subtitle: "Architectural, Structural, MEP & Navisworks",
      image: "",
      hasImage: false,
    },
    {
      title: "Coming Batch",
      subtitle: "Architectural, Structural, MEP & Navisworks",
      image: "",
      hasImage: false,
    },
  ];

  const studentVideos = [
    {
      title: "Sumon Ahmed Live Student Review",
      author: "Advance BIM Institute",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Mominul Islam Live Student Review",
      author: "Advance BIM Institute",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Mamun Roshid Live Student Review",
      author: "Advance BIM Institute",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Nasir Uddin Live Student Review",
      author: "Advance BIM Institute",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Shafiqul Islam Live Student Review",
      author: "Advance BIM Institute",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Shahabul Islam Live Student Review",
      author: "Advance BIM Institute",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Sarfen Ahmed Live Student Review",
      author: "Advance BIM Institute",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "What is Advance BIM Institute? | Live Student Review",
      author: "Advance BIM Institute",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
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
          <span className="text-slate-700 font-semibold">Students Gallery</span>
        </div>

        {/* Page Title */}
        <div className="text-center pt-1 pb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight">
            Students Gallery
          </h1>
        </div>

        {/* Section 1: Student Batch Gallery */}
        <div className="space-y-10">
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight">
              Student Batch{" "}
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

          {/* 3-Column Batch Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {batchList.map((batch, idx) => (
              <div key={idx} className="space-y-3 text-center flex flex-col items-center">
                <h3 className="text-base sm:text-lg font-bold text-[#ea580c]">
                  {batch.title}
                </h3>

                {batch.hasImage ? (
                  <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                    <img
                      src={batch.image}
                      alt={batch.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-full h-20 sm:h-24 flex items-center justify-center">
                    {/* Empty placeholder area for Coming Batch */}
                  </div>
                )}

                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  {batch.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Student Video Gallery */}
        <div className="space-y-10 pt-8 border-t border-slate-100">
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight">
              Student Video{" "}
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

          {/* 4-Column Video Grid matching Screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {studentVideos.map((video, idx) => (
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

                {/* Top Video Header (Title & Channel) */}
                <div className="relative z-10 p-3 flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center text-[#0a1d37] font-black text-[10px] shrink-0 shadow-xs">
                    IMS
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-white leading-tight line-clamp-2 drop-shadow-sm">
                      {video.title}
                    </h4>
                    <p className="text-[10px] text-slate-300 mt-0.5">{video.author}</p>
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
