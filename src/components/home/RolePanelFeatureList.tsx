"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface RolePanelData {
  role: string;
  roleEn: string;
  description: string;
  badgeColor: string;
  ctaHref: string;
  features: string[];
}

interface RolePanelFeatureListProps {
  current: RolePanelData;
}

export default function RolePanelFeatureList({ current }: RolePanelFeatureListProps) {
  return (
    <div className="lg:col-span-8 space-y-6">
      <div>
        <span
          className={`inline-block px-3 py-1 rounded-md text-xs font-bold border mb-2 uppercase ${current.badgeColor}`}
        >
          {current.role}
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-white">{current.roleEn}</h3>
        <p className="text-sm text-slate-400 mt-2 leading-relaxed max-w-2xl font-medium">
          {current.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        {current.features.map((feat, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>{feat}</span>
          </div>
        ))}
      </div>

      <div className="pt-3">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0077b6] hover:bg-[#005a8c] text-white font-extrabold text-sm shadow-md transition-all hover:scale-105"
        >
          <span>Explore /dashboard</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
