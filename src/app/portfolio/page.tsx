"use client";

import React, { useState } from "react";
import Link from "next/link";
import DrawingProjectsSection from "@/components/portfolio/DrawingProjectsSection";
import VideoProjectsSection from "@/components/portfolio/VideoProjectsSection";
import VideoModal from "@/components/common/VideoModal";

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
      title: "Students Project Pile & Pile Cap",
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
        <DrawingProjectsSection projects={drawingProjects} />

        {/* Section 2: Project Video Gallery */}
        <VideoProjectsSection
          videos={videoProjects}
          onPlayVideo={(url) => setActiveVideo(url)}
        />

        {/* Reusable Video Modal */}
        <VideoModal
          videoUrl={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      </div>
    </div>
  );
}
