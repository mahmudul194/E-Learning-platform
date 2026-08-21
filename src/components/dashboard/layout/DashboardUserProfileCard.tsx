"use client";

import React from "react";
import { UserAccount } from "@/data/dummyAccounts";

interface DashboardUserProfileCardProps {
  currentUser: UserAccount;
}

export default function DashboardUserProfileCard({ currentUser }: DashboardUserProfileCardProps) {
  return (
    <div className="px-4 py-2 font-sans">
      <div className="p-3.5 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex items-center gap-3.5 shadow-inner">
        <div className="relative shrink-0">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-11 h-11 rounded-xl object-cover ring-2 ring-sky-400/40 ring-offset-2 ring-offset-[#001e3d] shadow-md"
          />
          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#001e3d] rounded-full shadow-xs animate-pulse" />
        </div>

        <div className="min-w-0 flex-1 space-y-0.5">
          <h3 className="text-sm font-extrabold text-white truncate leading-tight tracking-tight">
            {currentUser.name}
          </h3>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-sky-300">
            <span>{currentUser.roleTitle}</span>
            <span className="w-1 h-1 rounded-full bg-slate-500" />
            <span className="text-slate-400 font-mono truncate">{currentUser.details.split("•")[1]?.trim() || currentUser.details}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
