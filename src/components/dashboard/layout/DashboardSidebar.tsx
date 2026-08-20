"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { UserAccount } from "@/data/dummyAccounts";
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
import DashboardUserProfileCard from "./DashboardUserProfileCard";
import DashboardSidebarFooter from "./DashboardSidebarFooter";

interface DashboardSidebarProps {
  currentRole: "student" | "instructor" | "admin";
  currentUser: UserAccount;
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
  currentUser,
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

  return (
    <>
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-xs"
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 sm:w-80 bg-[#001e3d] text-white z-50 lg:z-30 flex flex-col justify-between transition-transform duration-300 ease-in-out shrink-0 overflow-hidden shadow-2xl lg:shadow-none border-r border-slate-800 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col min-h-0 flex-1">
          {/* Brand Header */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/logo.jpeg"
                alt="BIM Build BD"
                className="w-10 h-10 object-contain rounded-xl bg-white p-1"
              />
              <div>
                <h1 className="text-base sm:text-lg font-black text-white tracking-tight leading-tight">
                  BIM Build BD
                </h1>
                <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider block">
                  {currentRole} Portal
                </span>
              </div>
            </Link>

            <button
              onClick={onCloseMobile}
              className="lg:hidden p-1 text-white/70 hover:text-white cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* User Profile Card */}
          <DashboardUserProfileCard currentUser={currentUser} />

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-1.5">
            {currentNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTabId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0077b6] text-white shadow-md shadow-sky-950/30"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-sky-300"}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-md font-bold ${
                        isActive ? "bg-black/25 text-white" : "bg-white/15 text-sky-200"
                      }`}
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
