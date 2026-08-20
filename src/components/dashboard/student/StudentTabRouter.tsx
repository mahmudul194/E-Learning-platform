"use client";

import React from "react";
import { UserAccount } from "@/data/dummyAccounts";
import { ClassVideo, LiveClass, CourseResource, StudentDashboardTab, Assignment } from "@/types/dashboard";
import StudentOverviewTab from "./StudentOverviewTab";
import StudentCoursePlayerTab from "./StudentCoursePlayerTab";
import StudentLiveScheduleTab from "./StudentLiveScheduleTab";
import StudentAssignmentsTab from "./StudentAssignmentsTab";
import StudentResourcesTab from "./StudentResourcesTab";
import StudentPaymentsTab from "./StudentPaymentsTab";
import StudentCertificateTab from "./StudentCertificateTab";
import StudentProfileTab from "./StudentProfileTab";

interface StudentTabRouterProps {
  studentTab: StudentDashboardTab;
  setStudentTab: (tab: StudentDashboardTab) => void;
  currentUser: UserAccount;
  classesList: ClassVideo[];
  liveClasses: LiveClass[];
  resources: CourseResource[];
  assignments: Assignment[];
  activeVideo: ClassVideo;
  onSelectVideo: (video: ClassVideo) => void;
  onOpenUpload: (id: number) => void;
}

export default function StudentTabRouter({
  studentTab,
  setStudentTab,
  currentUser,
  classesList,
  liveClasses,
  resources,
  assignments,
  activeVideo,
  onSelectVideo,
  onOpenUpload,
}: StudentTabRouterProps) {
  return (
    <>
      {studentTab === "overview" && (
        <StudentOverviewTab
          currentUser={currentUser}
          classesList={classesList}
          liveClasses={liveClasses}
          resources={resources}
          onSelectVideo={onSelectVideo}
          onNavigateToCourses={() => setStudentTab("courses")}
          onNavigateToResources={() => setStudentTab("resources")}
        />
      )}
      {studentTab === "courses" && (
        <StudentCoursePlayerTab
          classesList={classesList}
          activeVideo={activeVideo}
          onSelectVideo={onSelectVideo}
        />
      )}
      {studentTab === "live" && <StudentLiveScheduleTab liveClasses={liveClasses} />}
      {studentTab === "assignments" && (
        <StudentAssignmentsTab
          assignments={assignments}
          onOpenUpload={onOpenUpload}
        />
      )}
      {studentTab === "resources" && <StudentResourcesTab resources={resources} />}
      {studentTab === "payments" && <StudentPaymentsTab />}
      {studentTab === "certificate" && <StudentCertificateTab currentUser={currentUser} />}
      {studentTab === "profile" && <StudentProfileTab currentUser={currentUser} />}
    </>
  );
}
