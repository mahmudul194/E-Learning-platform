"use client";

import React from "react";
import { UserAccount } from "@/data/dummyAccounts";

interface DashboardUserProfileCardProps {
  currentUser: UserAccount;
}

export default function DashboardUserProfileCard({ currentUser }: DashboardUserProfileCardProps) {
  return (
    <div className="p-5 border-b border-white/10 bg-white/5 font-sans">
      <div className="flex items-center gap-3.5">
        <div className="relative shrink-0">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-12 h-12 rounded-2xl object-cover border-2 border-sky-400/40 shadow-md"
          />
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#001e3d] rounded-full" />
        </div>
        <div className="min-w-0 space-y-0.5">
          <h3 className="text-sm sm:text-base font-bold text-white truncate leading-tight">
            {currentUser.name}
          </h3>
          <span className="text-xs text-sky-200 font-semibold block">
            {currentUser.roleTitle}
          </span>
          <span className="text-xs text-slate-300 font-mono truncate block">
            {currentUser.details}
          </span>
        </div>
      </div>
    </div>
  );
}
