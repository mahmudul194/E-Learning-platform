"use client";

import React, { useState } from "react";
import Link from "next/link";
import BatchGallerySection from "@/components/gallery/BatchGallerySection";
import VideoReviewsSection from "@/components/gallery/VideoReviewsSection";
import VideoModal from "@/components/common/VideoModal";

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
      title: "3rd & 4th Batch Students",
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
      author: "BIM Build BD",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Mominul Islam Live Student Review",
      author: "BIM Build BD",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Mamun Roshid Live Student Review",
      author: "BIM Build BD",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Nasir Uddin Live Student Review",
      author: "BIM Build BD",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Shafiqul Islam Live Student Review",
      author: "BIM Build BD",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Shahabul Islam Live Student Review",
      author: "BIM Build BD",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Sarfen Ahmed Live Student Review",
      author: "BIM Build BD",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "What is BIM Build BD? | Live Student Review",
      author: "BIM Build BD",
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

        {/* Section 1: Batch Photo Gallery */}
        <BatchGallerySection batches={batchList} />

        {/* Section 2: Video Reviews */}
        <VideoReviewsSection
          videos={studentVideos}
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
