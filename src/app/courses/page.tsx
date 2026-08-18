"use client";

import React from "react";
import Link from "next/link";

export default function AllCoursesPage() {
  const courses = [
    {
      id: "revit-arch-struct-5th",
      title: "Professional Revit Architecture + Structure Course (5th Batch)",
      tag: "ARCHITECTURE + STRUCTURE",
      discount: "-20%",
      badge: "Expert",
      duration: "Duration: 3 to 4 Months …",
      price: "12,000.00",
      originalPrice: "15,000.00",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "revit-arch-struct-installment",
      title: "Professional Revit Architecture + Structure Course (৩ মাসে ধাপে ধাপে পেমেন্ট সুবিধা)",
      tag: "ARCHITECTURE + STRUCTURE",
      discount: "-20%",
      badge: "Expert",
      duration: "Duration: 3 to 4 Months …",
      price: "12,000.00",
      originalPrice: "15,000.00",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "revit-combo-full",
      title: "Professional Revit Combo Course Architecture, Structure & MEP (৩ মাসে ধাপে ধাপে পেমেন্ট সুবিধা)",
      tag: "ARCHITECTURE + STRUCTURE + MEP + NAVISWORKS",
      discount: "-40%",
      badge: "Expert",
      duration: "Duration: 5 to 6 Months …",
      price: "15,000.00",
      originalPrice: "25,000.00",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "revit-arch-only",
      title: "Professional Revit Architecture Course (৩ মাসে ধাপে ধাপে পেমেন্ট সুবিধা)",
      tag: "ARCHITECTURE",
      discount: "-30%",
      badge: "Expert",
      duration: "Duration: 2 to 3 Months …",
      price: "7,000.00",
      originalPrice: "10,000.00",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "revit-struct-only",
      title: "Professional Revit Structure Course (৩ মাসে ধাপে ধাপে পেমেন্ট সুবিধা)",
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
      title: "Professional Revit MEP Course (৩ মাসে ধাপে ধাপে পেমেন্ট সুবিধা)",
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
      title: "Professional Revit Navisworks Course (৩ মাসে ধাপে ধাপে পেমেন্ট সুবিধা)",
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
      title: "Professional AutoCAD Course (৩ মাসে ধাপে ধাপে পেমেন্ট সুবিধা)",
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
      title: "Professional Revit Dynamo Course (৩ মাসে ধাপে ধাপে পেমেন্ট সুবিধা)",
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
        {/* Breadcrumb matching Screenshot */}
        <div className="text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-slate-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700 font-semibold">All Courses</span>
        </div>

        {/* Page Title matching Screenshot */}
        <div className="text-center pt-2 pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight">
            All Courses
          </h1>
        </div>

        {/* 3x3 Course Grid matching Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-2"
            >
              {/* Card Thumbnail */}
              <div className="relative h-60 sm:h-64 w-full bg-slate-900 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                />

                {/* Discount Badge */}
                <div className="absolute top-3.5 left-3.5 bg-[#ea580c] text-white text-xs sm:text-sm font-black px-3 py-1 rounded-md shadow-md">
                  {course.discount}
                </div>

                {/* Tag Banner */}
                <div className="absolute top-3.5 right-3.5 bg-black/65 backdrop-blur-xs text-white text-[11px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
                  {course.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* Expert Pink Badge */}
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-black bg-rose-50 text-rose-600 border border-rose-100 mb-3">
                    {course.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors leading-snug line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Duration */}
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-2.5">
                    {course.duration}
                  </p>
                </div>

                {/* Price */}
                <div className="pt-4 border-t border-slate-100 flex items-baseline gap-3">
                  <span className="text-lg sm:text-xl font-black text-[#ea580c]">
                    ৳{course.price}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 line-through">
                    ৳{course.originalPrice}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
