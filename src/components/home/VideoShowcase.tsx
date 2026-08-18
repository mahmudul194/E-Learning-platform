"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoGroups = [
    {
      subtitle: "Free Class Videos",
      title: "Professional Revit Architecture Course",
      videos: [
        {
          label: "Watch Intro Video",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          label: "Watch Demo Video",
          image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
    },
    {
      subtitle: "Free Class Videos",
      title: "Professional Revit Structure course",
      videos: [
        {
          label: "Watch Intro Video",
          image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          label: "Watch Demo Video",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
    },
    {
      subtitle: "Free Class Videos",
      title: "Professional Revit MEP Course",
      videos: [
        {
          label: "Watch Intro Video",
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          label: "Watch Demo Video",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
    },
    {
      subtitle: "Free Class Videos",
      title: "Professional Navisworks Course",
      videos: [
        {
          label: "Watch Intro Video",
          image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          label: "Watch Demo Video",
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
    },
    {
      subtitle: "Free Class Videos",
      title: "Professional Revit Dynamo Course",
      videos: [
        {
          label: "Watch Intro Video",
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          label: "Watch Demo Video",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
    },
    {
      subtitle: "Free Class Videos",
      title: "Professional AutoCAD Course",
      videos: [
        {
          label: "Watch Intro Video",
          image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          label: "Watch Demo Video",
          image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-white space-y-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Top Video Container: About IMS Institute (3 Videos) */}
        <div className="bg-[#f0f4f8] rounded-3xl p-8 sm:p-12 text-center border border-slate-200 shadow-xs">
          <span className="text-sm font-bold uppercase tracking-wider text-[#ea580c]">
            About
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] mt-1 mb-10">
            IMS Institute
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="space-y-3.5">
              <div
                onClick={() => setActiveVideo("https://www.youtube.com/embed/dQw4w9WgXcQ")}
                className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer group bg-slate-900 border border-slate-200"
              >
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Watch What is IMS Institute"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-10 rounded-2xl bg-red-600 group-hover:bg-red-700 flex items-center justify-center shadow-xl transition-all group-hover:scale-110">
                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base font-bold text-[#0f172a]">
                Watch What is IMS Institute?
              </p>
            </div>

            {/* Video 2 */}
            <div className="space-y-3.5">
              <div
                onClick={() => setActiveVideo("https://www.youtube.com/embed/dQw4w9WgXcQ")}
                className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer group bg-slate-900 border border-slate-200"
              >
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80"
                  alt="Watch Revit Live Sessions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-10 rounded-2xl bg-red-600 group-hover:bg-red-700 flex items-center justify-center shadow-xl transition-all group-hover:scale-110">
                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base font-bold text-[#0f172a]">
                Watch Revit Live Sessions
              </p>
            </div>

            {/* Video 3 */}
            <div className="space-y-3.5">
              <div
                onClick={() => setActiveVideo("https://www.youtube.com/embed/dQw4w9WgXcQ")}
                className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer group bg-slate-900 border border-slate-200"
              >
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                  alt="What is BIM"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-10 rounded-2xl bg-red-600 group-hover:bg-red-700 flex items-center justify-center shadow-xl transition-all group-hover:scale-110">
                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base font-bold text-[#0f172a]">
                What is BIM (Building Information Modeling)?
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Course Video Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-[#f0f4f8] rounded-3xl p-8 text-center border border-slate-200 shadow-xs space-y-6"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  {group.subtitle}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] mt-1">
                  {group.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {group.videos.map((vid, vIdx) => (
                  <div key={vIdx} className="space-y-3">
                    <div
                      onClick={() => setActiveVideo(vid.url)}
                      className="relative h-36 sm:h-44 rounded-2xl overflow-hidden shadow-md cursor-pointer group bg-slate-900 border border-slate-200"
                    >
                      <img
                        src={vid.image}
                        alt={vid.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-11 h-8 rounded-xl bg-red-600 group-hover:bg-red-700 flex items-center justify-center shadow-md transition-all group-hover:scale-110">
                          <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-[#0f172a]">
                      {vid.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
    </section>
  );
}
