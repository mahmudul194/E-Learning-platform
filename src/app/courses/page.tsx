"use client";

import React from "react";
import Link from "next/link";
import CourseCard, { CourseCardItem } from "@/components/courses/CourseCard";

export default function CoursesPage() {
  const courses: CourseCardItem[] = [
    {
      id: "revit-combo-pro",
      title: "Professional Revit Combo Course (Architecture, Structure & MEP) (3-Month Installment Available)",
      tag: "COMBO",
      discount: "-40%",
      badge: "Expert",
      duration: "Duration: 5 to 6 Months …",
      price: "15,000.00",
      originalPrice: "25,000.00",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "revit-arch-struct",
      title: "Professional Revit Architecture & Structure (3-Month Installment Available)",
      tag: "ARCH + STRUCT",
      discount: "-38%",
      badge: "Expert",
      duration: "Duration: 4 to 5 Months …",
      price: "12,500.00",
      originalPrice: "20,000.00",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "revit-mep",
      title: "Professional Revit MEP & HVAC Masterclass (3-Month Installment Available)",
      tag: "MEP & HVAC",
      discount: "-30%",
      badge: "Expert",
      duration: "Duration: 2 to 3 Months …",
      price: "7,000.00",
      originalPrice: "10,000.00",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "revit-architecture-only",
      title: "Professional Revit Architecture Course (3-Month Installment Available)",
      tag: "ARCHITECTURE",
      discount: "-30%",
      badge: "Expert",
      duration: "Duration: 2 to 3 Months …",
      price: "7,000.00",
      originalPrice: "10,000.00",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "revit-structure-only",
      title: "Professional Revit Structure Course (3-Month Installment Available)",
      tag: "STRUCTURE",
      discount: "-30%",
      badge: "Expert",
      duration: "Duration: 2 to 3 Months …",
      price: "7,000.00",
      originalPrice: "10,000.00",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "revit-mep-only",
      title: "Professional Revit MEP Course (3-Month Installment Available)",
      tag: "MEP",
      discount: "-30%",
      badge: "Expert",
      duration: "Duration: 2 to 3 Months …",
      price: "7,000.00",
      originalPrice: "10,000.00",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "revit-navisworks-only",
      title: "Professional Revit Navisworks Course (3-Month Installment Available)",
      tag: "NAVISWORKS",
      discount: "-40%",
      badge: "Expert",
      duration: "Duration: 1 to 2 Months …",
      price: "6,000.00",
      originalPrice: "10,000.00",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "autocad-only",
      title: "Professional AutoCAD Course (3-Month Installment Available)",
      tag: "AUTOCAD",
      discount: "-25%",
      badge: "Expert",
      duration: "Duration: 2 to 3 Months …",
      price: "6,000.00",
      originalPrice: "8,000.00",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "dynamo-only",
      title: "Professional Revit Dynamo Course (3-Month Installment Available)",
      tag: "DYNAMO",
      discount: "-33%",
      badge: "Expert",
      duration: "Duration: 2 to 3 Months …",
      price: "10,000.00",
      originalPrice: "15,000.00",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-slate-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700 font-semibold">All Courses</span>
        </div>

        {/* Page Title */}
        <div className="text-center pt-2 pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002b5b] tracking-tight">
            All Courses
          </h1>
        </div>

        {/* 3x3 Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
