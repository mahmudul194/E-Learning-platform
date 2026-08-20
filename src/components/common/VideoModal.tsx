"use client";

import React from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  videoUrl: string | null;
  onClose: () => void;
}

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative pt-[56.25%] w-full">
          <iframe
            src={`${videoUrl}?autoplay=1`}
            title="Video Player"
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
