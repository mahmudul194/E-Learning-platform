"use client";

import React, { useState, useEffect } from "react";
import { DUMMY_ACCOUNTS, UserAccount } from "@/data/dummyAccounts";
import {
  ClassVideo,
  StudentDashboardTab,
  InstructorDashboardTab,
  AdminDashboardTab,
} from "@/types/dashboard";
import {
  MOCK_DASHBOARD_CLASSES,
  MOCK_LIVE_CLASSES,
  MOCK_ASSIGNMENTS,
  MOCK_RESOURCES,
} from "@/data/dashboardMockData";

// Layout & Navigation Subcomponents
import DashboardSidebar from "@/components/dashboard/layout/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/layout/DashboardHeader";

// Domain Subcomponents
import StudentTabRouter from "@/components/dashboard/student/StudentTabRouter";
import AssignmentUploadModal from "@/components/dashboard/student/AssignmentUploadModal";
import InstructorDashboardView from "@/components/dashboard/instructor/InstructorDashboardView";
import AdminDashboardView from "@/components/dashboard/admin/AdminDashboardView";

export default function UnifiedDashboardPage() {
  const [currentRole, setCurrentRole] = useState<"student" | "instructor" | "admin">("student");
  const [currentUser, setCurrentUser] = useState<UserAccount>(DUMMY_ACCOUNTS[0]);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [studentTab, setStudentTab] = useState<StudentDashboardTab>("overview");
  const [instructorTab, setInstructorTab] = useState<InstructorDashboardTab>("overview");
  const [adminTab, setAdminTab] = useState<AdminDashboardTab>("overview");

  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [activeAssignmentId, setActiveAssignmentId] = useState<number | null>(null);
  const [selectedClassVideo, setSelectedClassVideo] = useState<ClassVideo | null>(null);

  // Synchronize active role from localStorage
  useEffect(() => {
    const savedRole = typeof window !== "undefined" ? (localStorage.getItem("bim_user_role") as any) : null;
    if (savedRole && ["student", "instructor", "admin"].includes(savedRole)) {
      switchRole(savedRole);
    } else {
      switchRole("student");
    }
  }, []);

  const switchRole = (role: "student" | "instructor" | "admin") => {
    setCurrentRole(role);
    if (typeof window !== "undefined") {
      localStorage.setItem("bim_user_role", role);
    }
    const acc = DUMMY_ACCOUNTS.find((a) => a.role === role) || DUMMY_ACCOUNTS[0];
    setCurrentUser(acc);
    setIsMobileSidebarOpen(false);
  };

  const activeVideo = selectedClassVideo || MOCK_DASHBOARD_CLASSES[0];

  return (
    <div className="bg-[#f4f7fa] min-h-screen text-slate-900 flex font-sans w-full">
      {/* 1. Full-Height Docked Left Sidebar */}
      <DashboardSidebar
        currentRole={currentRole}
        currentUser={currentUser}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
        studentTab={studentTab}
        setStudentTab={setStudentTab}
        instructorTab={instructorTab}
        setInstructorTab={setInstructorTab}
        adminTab={adminTab}
        setAdminTab={setAdminTab}
      />

      {/* 2. Main Right Viewport & Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader
          currentRole={currentRole}
          onSwitchRole={switchRole}
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <main className="flex-1 p-5 sm:p-8 lg:p-10 space-y-8 max-w-[1600px] w-full">
          {/* Student Role Views */}
          {currentRole === "student" && (
            <StudentTabRouter
              studentTab={studentTab}
              setStudentTab={setStudentTab}
              currentUser={currentUser}
              classesList={MOCK_DASHBOARD_CLASSES}
              liveClasses={MOCK_LIVE_CLASSES}
              resources={MOCK_RESOURCES}
              assignments={MOCK_ASSIGNMENTS}
              activeVideo={activeVideo}
              onSelectVideo={setSelectedClassVideo}
              onOpenUpload={(id) => {
                setActiveAssignmentId(id);
                setUploadModalOpen(true);
              }}
            />
          )}

          {/* Instructor Role Views */}
          {currentRole === "instructor" && (
            <InstructorDashboardView
              currentUser={currentUser}
              instructorTab={instructorTab}
              setInstructorTab={setInstructorTab}
            />
          )}

          {/* Admin Role Views */}
          {currentRole === "admin" && <AdminDashboardView />}
        </main>
      </div>

      {/* Assignment Upload Modal */}
      <AssignmentUploadModal
        isOpen={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
      />
    </div>
  );
}
