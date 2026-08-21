"use client";

import React from "react";
import {
  StudentDashboardTab,
  InstructorDashboardTab,
  AdminDashboardTab,
} from "@/types/dashboard";
import {
  STUDENT_NAV_ITEMS,
  INSTRUCTOR_NAV_ITEMS,
  ADMIN_NAV_ITEMS,
} from "./dashboardNavConfig";
import DashboardBrandHeader from "./DashboardBrandHeader";
import DashboardSidebarFooter from "./DashboardSidebarFooter";

interface DashboardSidebarProps {
  currentRole: "student" | "instructor" | "admin";
  isMobileOpen: boolean;
  onCloseMobile: () => void;
  studentTab: StudentDashboardTab;
  setStudentTab: (tab: StudentDashboardTab) => void;
  instructorTab: InstructorDashboardTab;
  setInstructorTab: (tab: InstructorDashboardTab) => void;
  adminTab: AdminDashboardTab;
  setAdminTab: (tab: AdminDashboardTab) => void;
}

export default function DashboardSidebar({
  currentRole,
  isMobileOpen,
  onCloseMobile,
  studentTab,
  setStudentTab,
  instructorTab,
  setInstructorTab,
  adminTab,
  setAdminTab,
}: DashboardSidebarProps) {
  const activeTabId =
    currentRole === "student"
      ? studentTab
      : currentRole === "instructor"
      ? instructorTab
      : adminTab;

  const currentNavItems =
    currentRole === "student"
      ? STUDENT_NAV_ITEMS
      : currentRole === "instructor"
      ? INSTRUCTOR_NAV_ITEMS
      : ADMIN_NAV_ITEMS;

  const handleNavClick = (id: string) => {
    if (currentRole === "student") setStudentTab(id as StudentDashboardTab);
    else if (currentRole === "instructor") setInstructorTab(id as InstructorDashboardTab);
    else setAdminTab(id as AdminDashboardTab);
    onCloseMobile();
  };

  const getBadgeStyle = (badge: string, isActive: boolean) => {
    if (isActive) return "bg-white/20 text-white border border-white/20";
    if (badge.includes("Live")) return "bg-rose-500/20 text-rose-300 border border-rose-500/30";
    if (badge.includes("Due")) return "bg-amber-500/20 text-amber-300 border border-amber-500/30";
    return "bg-sky-500/15 text-sky-200 border border-sky-500/25";
  };

  return (
    <>
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-xs"
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 sm:w-80 bg-[#001428] text-white z-50 lg:z-30 flex flex-col justify-between transition-transform duration-300 ease-in-out shrink-0 overflow-hidden shadow-2xl lg:shadow-none border-r border-slate-800/80 font-sans ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col min-h-0 flex-1">
          {/* Brand Header */}
          <DashboardBrandHeader
            currentRole={currentRole}
            onCloseMobile={onCloseMobile}
          />

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 custom-scrollbar">
            {currentNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTabId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer group ${
                    isActive
                      ? "bg-gradient-to-r from-[#0077b6] to-[#0284c7] text-white shadow-md shadow-sky-950/40 border border-sky-400/25"
                      : "text-slate-300 hover:bg-white/[0.07] hover:text-white hover:translate-x-0.5"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <Icon
                      className={`w-4.5 h-4.5 transition-colors ${
                        isActive ? "text-white" : "text-sky-300 group-hover:text-sky-200"
                      }`}
                    />
                    <span className="tracking-tight">{item.label}</span>
                  </div>

                  {item.badge && (
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-md font-mono font-bold tracking-tight ${getBadgeStyle(
                        item.badge,
                        isActive
                      )}`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Support Box */}
        <DashboardSidebarFooter />
      </aside>
    </>
  );
}
