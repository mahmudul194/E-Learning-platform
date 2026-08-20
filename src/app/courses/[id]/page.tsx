import React from "react";
import { notFound } from "next/navigation";
import { COURSES } from "@/data/mockData";
import CourseHeroHeader from "@/components/course-details/CourseHeroHeader";
import CoursePricingCard from "@/components/course-details/CoursePricingCard";
import CourseDetailsOverview from "@/components/course-details/CourseDetailsOverview";

export function generateStaticParams() {
  return COURSES.map((course) => ({
    id: course.id,
  }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = COURSES.find((c) => c.id === id) || COURSES[0];

  if (!course) {
    notFound();
  }

  const installmentAmount = Math.round(course.price / 3);
  const instructorName = typeof course.instructor === "object" ? course.instructor.name : (course.instructor || "Lead BIM Specialist");
  const instructorRole = typeof course.instructor === "object" ? course.instructor.role : "Senior BIM Consultant";

  const defaultSoftwares = ["Autodesk Revit", "AutoCAD", "Navisworks", "Dynamo"];
  const defaultFeatures = course.features || [
    "Project-Based Live Training",
    "Lifetime Class Recordings",
    "BIM Family Library",
    "Certificate of Completion",
    "Job & Freelancing Support",
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Hero + Pricing Card Grid */}
        <div className="bg-[#002b5b] text-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <CourseHeroHeader course={course} />
            <CoursePricingCard course={course} installmentAmount={installmentAmount} />
          </div>
        </div>

        {/* Detailed Curriculum, Features & Instructor Meta */}
        <CourseDetailsOverview
          course={course}
          instructorName={instructorName}
          instructorRole={instructorRole}
          defaultSoftwares={defaultSoftwares}
          defaultFeatures={defaultFeatures}
        />
      </div>
    </div>
  );
}
