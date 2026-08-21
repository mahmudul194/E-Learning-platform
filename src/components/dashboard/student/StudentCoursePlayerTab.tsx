"use client";

import React, { useState } from "react";
import { EnrolledCourse } from "@/types/dashboard";
import { MOCK_STUDENT_ENROLLED_COURSES } from "@/data/studentCoursesMockData";
import StudentEnrolledCoursesGrid from "./StudentEnrolledCoursesGrid";
import StudentClassroomPlayer from "./StudentClassroomPlayer";

export default function StudentCoursePlayerTab() {
  const [selectedCourse, setSelectedCourse] = useState<EnrolledCourse | null>(null);

  if (!selectedCourse) {
    return (
      <StudentEnrolledCoursesGrid
        courses={MOCK_STUDENT_ENROLLED_COURSES}
        onSelectCourse={setSelectedCourse}
      />
    );
  }

  return (
    <StudentClassroomPlayer
      course={selectedCourse}
      onBackToCourses={() => setSelectedCourse(null)}
    />
  );
}
