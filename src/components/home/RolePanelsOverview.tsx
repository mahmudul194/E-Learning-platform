"use client";

import React, { useState } from "react";
import { GraduationCap, UserCheck, ShieldCheck, Layers } from "lucide-react";
import RolePanelFeatureList from "./RolePanelFeatureList";
import RolePanelPreviewMockup from "./RolePanelPreviewMockup";

export default function RolePanelsOverview() {
  const [activeTab, setActiveTab] = useState<"student" | "instructor" | "admin">("student");

  const panelData = {
    student: {
      role: "Student Panel",
      roleEn: "Student Learning Dashboard & Course Hub",
      description:
        "A modern and personalized learning hub for students to track course progress, access recorded video lessons, submit assignments, and manage installment ledgers in one place.",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      ctaHref: "/dashboard",
      features: [
        "Student Registration, Profile & Secure Login",
        "Personal Learning Dashboard & Active Course Enrollment",
        "Full HD Video Lessons & Downloadable Families/Models",
        "Assignment Submission & Live Quiz Participation",
        "Real-Time Course Progress & Performance Tracker",
        "Automatic QR-Verified Certificate upon 100% Completion",
        "Payment Invoices & 3-Month Installment Ledger",
        "SMS & Email Instant Notification Alerts",
      ],
    },
    instructor: {
      role: "Instructor Panel",
      roleEn: "Trainer & Mentor Management Console",
      description:
        "A dedicated control panel for course mentors to manage batch schedules, grade student drawing submissions, host live Zoom sessions, and upload project families.",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      ctaHref: "/dashboard",
      features: [
        "Instructor Authentication & Profile Dashboard",
        "Course Creation & Curriculum Lesson Uploads",
        "Video Lecture, PDF Notes & Project File Sharing",
        "Interactive Quiz & Assignment Management",
        "Drawing Evaluation & Real-Time Student Feedback",
        "Batch-Wise Attendance & Progress Monitoring",
        "Direct Zoom / Google Meet Live Integration",
      ],
    },
    admin: {
      role: "Admin Panel",
      roleEn: "Super Admin & Central Control Center",
      description:
        "A centralized platform management system for tracking institute revenue, auditing bKash/Nagad transactions, approving admissions, and controlling site content.",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
      ctaHref: "/dashboard",
      features: [
        "Student & Instructor User Role Management",
        "Course & Syllabus Publishing CMS",
        "Batch Creation, Scheduling & Seat Allocation",
        "Attendance & Online Examination Control",
        "Certificate Generation, Verification & Approvals",
        "Monthly Revenue & Student Growth Analytics",
        "bKash, Nagad, Rocket & SSLCommerz Reconciliation",
        "Platform Notice & Announcement Management",
      ],
    },
  };

  const current = panelData[activeTab];

  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Integrated 3-Tier Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Dedicated Student, Instructor & Admin Portals
          </h2>
          <p className="text-sm text-slate-400">
            Tailored consoles and automated management workflows engineered specifically for each user role.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <button
              onClick={() => setActiveTab("student")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "student"
                  ? "bg-[#0077b6] text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Student Panel</span>
            </button>
            <button
              onClick={() => setActiveTab("instructor")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "instructor"
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Instructor Panel</span>
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "admin"
                  ? "bg-rose-600 text-white shadow-lg shadow-rose-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Admin Panel</span>
            </button>
          </div>
        </div>

        {/* Panel Content Card */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <RolePanelFeatureList current={current} />
            <RolePanelPreviewMockup activeTab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
}
