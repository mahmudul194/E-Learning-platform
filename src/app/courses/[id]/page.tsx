import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  BookOpen,
  Star,
  Users,
  CreditCard,
  CheckCircle2,
  Calendar,
  Award,
  Video,
  FileText,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { COURSES } from "@/data/mockData";

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

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 mb-10 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  {course.batchNo}
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium">
                  {course.level}
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium">
                  {course.duration}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                {course.title}
              </h1>
              {course.titleBn && (
                <p className="text-base text-emerald-400 font-medium">{course.titleBn}</p>
              )}

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span>Instructor: <strong className="text-white">{course.instructor.name}</strong></span>
                </div>
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{course.rating}</span>
                  <span className="text-slate-400 font-normal">({course.reviewsCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>{course.studentsCount}+ Enrolled</span>
                </div>
              </div>
            </div>

            {/* Price Box */}
            <div className="lg:col-span-4 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <span className="text-xs text-slate-400 uppercase font-semibold">Course Fee & Admission</span>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-white">৳{course.price.toLocaleString()}</span>
                <span className="text-sm text-slate-400 line-through">৳{course.originalPrice.toLocaleString()}</span>
              </div>

              {course.installmentAvailable && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-xs font-medium flex items-center gap-2">
                  <CreditCard className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{course.installmentDetails}</span>
                </div>
              )}

              <Link
                href={`/admission?course=${course.id}`}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <span>ভর্তি ফরম পূরণ করুন</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Course Details Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            {/* Features & Key Takeaways */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 mb-4">এই কোর্সে যা যা শিখবেন (Key Highlights)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Breakdown */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 mb-4">কোর্স কারিকুলাম ও মডিউল</h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h4 className="font-bold text-slate-900">Module 01: BIM Fundamentals & Autodesk Interface Setup</h4>
                  <p className="text-slate-500 mt-1">Introduction to LOD 100-400, Coordinate System, Units, Grid and Level configuration.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h4 className="font-bold text-slate-900">Module 02: 3D Architectural & Structural Component Modeling</h4>
                  <p className="text-slate-500 mt-1">Walls, Curtain walls, Beams, Columns, Slabs, Foundation, Roofs, Stairs and Custom Families.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h4 className="font-bold text-slate-900">Module 03: Rebar Detailing, MEP Systems & Schedules</h4>
                  <p className="text-slate-500 mt-1">Reinforcement placement, HVAC ducts, Plumbing slopes, Electrical lighting, Material Takeoffs.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h4 className="font-bold text-slate-900">Module 04: Real-world Capstone Project & Sheet Production</h4>
                  <p className="text-slate-500 mt-1">Full working drawings, title blocks, PDF plotting, Navisworks clash coordination.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-sm">ইনস্টিটিউট সুবিধা ও সার্টিফিকেশন</h3>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>ইন্ডাস্ট্রি রিকগনাইজড সার্টিফিকেট</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-blue-600" />
                  <span>লাইভ জুম ক্লাস + রেকর্ডিং ব্যাকআপ</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span>প্রজেক্ট রিসোর্স ও লাইব্রেরি ডাউনলোড</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-purple-600" />
                  <span>bKash / Nagad / Card ৩ কিস্তি সুবিধা</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
