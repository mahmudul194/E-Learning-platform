import React from "react";
import { SkeletonCard } from "@/components/common/SkeletonCard";

export default function CoursesLoading() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 space-y-10 font-sans">
      <div className="space-y-3 max-w-2xl">
        <div className="w-48 h-6 rounded-md skeleton-shimmer" />
        <div className="w-80 h-10 rounded-xl skeleton-shimmer" />
        <div className="w-96 h-4 rounded-md skeleton-shimmer" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
