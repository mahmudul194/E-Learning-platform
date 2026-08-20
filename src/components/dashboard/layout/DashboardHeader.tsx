"use client";

import React from "react";
import Link from "next/link";
import { Menu, Search, LogOut } from "lucide-react";

interface DashboardHeaderProps {
  currentRole: "student" | "instructor" | "admin";
  onSwitchRole: (role: "student" | "instructor" | "admin") => void;
  onOpenMobileSidebar: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export default function DashboardHeader({
  currentRole,
  onSwitchRole,
  onOpenMobileSidebar,
  searchQuery,
  setSearchQuery,
}: DashboardHeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20 px-5 sm:px-8 py-3.5 shadow-xs font-sans">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle & Page Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Open Sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="hidden sm:block">
            <h2 className="text-lg font-black text-slate-900 leading-tight">
              {currentRole === "student" && "Student Learning Portal"}
              {currentRole === "instructor" && "Instructor & Trainer Console"}
              {currentRole === "admin" && "Super Admin & Control Center"}
            </h2>
            <p className="text-xs text-slate-500">Welcome to your BIM Build BD workspace</p>
          </div>
        </div>

        {/* Center Search Bar */}
        <div className="hidden md:flex items-center relative w-72 lg:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search class, assignment, or file..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-100/90 border border-slate-200/80 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#0077b6] focus:outline-none transition-all"
          />
        </div>

        {/* Right: Role Switcher Chips & Logout */}
        <div className="flex items-center gap-3">
          <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs sm:text-sm">
            <button
              onClick={() => onSwitchRole("student")}
              className={`px-3 py-1.5 rounded-lg font-extrabold transition-all cursor-pointer ${
                currentRole === "student"
                  ? "bg-[#002b5b] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Student
            </button>
            <button
              onClick={() => onSwitchRole("instructor")}
              className={`px-3 py-1.5 rounded-lg font-extrabold transition-all cursor-pointer ${
                currentRole === "instructor"
                  ? "bg-[#002b5b] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Instructor
            </button>
            <button
              onClick={() => onSwitchRole("admin")}
              className={`px-3 py-1.5 rounded-lg font-extrabold transition-all cursor-pointer ${
                currentRole === "admin"
                  ? "bg-[#002b5b] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Admin
            </button>
          </div>

          <Link
            href="/login"
            title="Log Out"
            className="p-2.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors hidden sm:block"
          >
            <LogOut className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
