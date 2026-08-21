import React from "react";
import { SkeletonMetric } from "@/components/common/SkeletonCard";

export default function DashboardLoading() {
  return (
    <div className="bg-[#f4f7fa] min-h-screen text-slate-900 flex font-sans w-full">
      {/* Sidebar Skeleton */}
      <div className="hidden lg:block w-72 sm:w-80 bg-[#001428] h-screen shrink-0 p-6 space-y-6">
        <div className="w-40 h-8 rounded-xl skeleton-shimmer opacity-30" />
        <div className="w-full h-18 rounded-2xl skeleton-shimmer opacity-20" />
        <div className="space-y-3 pt-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-full h-10 rounded-xl skeleton-shimmer opacity-20" />
          ))}
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex-1 p-6 sm:p-10 space-y-8 max-w-[1600px] w-full">
        {/* Banner Skeleton */}
        <div className="w-full h-44 rounded-3xl skeleton-shimmer" />

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[...Array(4)].map((_, i) => (
            <SkeletonMetric key={i} />
          ))}
        </div>

        {/* Big Workspace Box */}
        <div className="w-full h-96 rounded-3xl skeleton-shimmer" />
      </div>
    </div>
  );
}
