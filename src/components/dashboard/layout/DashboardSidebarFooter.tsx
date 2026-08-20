"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle, Home, LogOut } from "lucide-react";

export default function DashboardSidebarFooter() {
  return (
    <div className="p-5 border-t border-white/10 bg-black/25 space-y-2 font-sans">
      <div className="text-slate-200 font-bold text-xs sm:text-sm flex items-center gap-2">
        <HelpCircle className="w-4 h-4 text-sky-400" />
        <span>Mentor Helpline:</span>
      </div>
      <a
        href="https://wa.me/8801879526108"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-300 hover:underline font-mono text-xs sm:text-sm font-bold block"
      >
        +880 1879-526108
      </a>

      <div className="pt-2 border-t border-white/10 flex items-center justify-between">
        <Link
          href="/"
          className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 font-bold"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <Link
          href="/login"
          className="text-xs text-rose-300 hover:text-rose-200 flex items-center gap-1 font-bold"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Log Out</span>
        </Link>
      </div>
    </div>
  );
}
