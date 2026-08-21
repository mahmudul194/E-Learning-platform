import React from "react";

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs">
      <div className="w-full h-44 rounded-2xl skeleton-shimmer" />
      <div className="space-y-2">
        <div className="w-1/3 h-4 rounded-md skeleton-shimmer" />
        <div className="w-4/5 h-6 rounded-md skeleton-shimmer" />
        <div className="w-full h-3 rounded-md skeleton-shimmer" />
      </div>
      <div className="pt-2 flex items-center justify-between border-t border-slate-100">
        <div className="w-1/4 h-5 rounded-md skeleton-shimmer" />
        <div className="w-1/3 h-8 rounded-xl skeleton-shimmer" />
      </div>
    </div>
  );
}

export function SkeletonMetric() {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
      <div className="w-2/5 h-3 rounded-md skeleton-shimmer" />
      <div className="w-3/5 h-8 rounded-md skeleton-shimmer" />
      <div className="w-1/2 h-3 rounded-md skeleton-shimmer" />
    </div>
  );
}
