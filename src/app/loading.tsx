import React from "react";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-xs flex flex-col items-center justify-center space-y-4 font-sans">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl border-4 border-slate-100 border-t-[#0077b6] animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-xl bg-[#002b5b] p-1 flex items-center justify-center">
            <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-contain rounded-md" />
          </div>
        </div>
      </div>

      <div className="text-center space-y-1">
        <span className="text-sm font-extrabold text-slate-800 tracking-tight block">
          BIM Build BD
        </span>
        <span className="text-xs font-semibold text-slate-400 animate-pulse">
          Loading learning modules...
        </span>
      </div>
    </div>
  );
}
