"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Video,
  FileCheck,
  Award,
  CreditCard,
  Clock,
  Download,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Bell,
  Play,
} from "lucide-react";

export default function StudentDashboardPage() {
  const [activeTab, setActiveTab] = useState<"courses" | "assignments" | "payments" | "certificate">("courses");

  return (
    <div className="py-10 bg-[#f8fafc] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-[#0a1d37] via-[#0f284e] to-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>Student Learning Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              স্বাগতম, মোঃ আরিফুল ইসলাম!
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              রোল নং: <strong className="text-white font-mono">IMS-2026-0842</strong> • ব্যাচ: 5th Batch (Revit Architecture + Structure)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://zoom.us"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md hover:scale-105"
            >
              <Video className="w-4 h-4" />
              <span>আজকের লাইভ ক্লাসে জয়েন করুন (Zoom)</span>
            </a>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1">
            <div className="text-slate-500 text-xs font-bold">এনরোল্ড কোর্স</div>
            <div className="text-2xl sm:text-3xl font-black text-[#0a1d37]">১টি কোর্স</div>
            <span className="text-[11px] text-emerald-600 font-bold">Active & Ongoing</span>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1">
            <div className="text-slate-500 text-xs font-bold">কোর্স অগ্রগতি (Progress)</div>
            <div className="text-2xl sm:text-3xl font-black text-[#ea580c]">৬৮%</div>
            <span className="text-[11px] text-slate-500 font-medium">২৮/৪৫ ক্লাস সম্পন্ন</span>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1">
            <div className="text-slate-500 text-xs font-bold">অ্যাসাইনমেন্ট সাবমিট</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">৭/৮ টি</div>
            <span className="text-[11px] text-emerald-600 font-medium">গড় নম্বর: ৯২%</span>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1">
            <div className="text-slate-500 text-xs font-bold">সার্টিফিকেট স্ট্যাটাস</div>
            <div className="text-2xl sm:text-3xl font-black text-blue-600">Pending</div>
            <span className="text-[11px] text-slate-500 font-medium">কোর্স সম্পন্ন হলে আনলক হবে</span>
          </div>
        </div>

        {/* Dashboard Tabs Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
          {[
            { id: "courses", label: "আমার কোর্স ও ক্লাস ভিডিও", icon: BookOpen },
            { id: "assignments", label: "অ্যাসাইনমেন্ট ও কুইজ", icon: FileCheck },
            { id: "payments", label: "কিস্তি ও ফি হিস্ট্রি", icon: CreditCard },
            { id: "certificate", label: "সার্টিফিকেট", icon: Award },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#0a1d37] text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Courses & Recorded Classes */}
        {activeTab === "courses" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                    Professional Revit Architecture + Structure Course (5th Batch)
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    ইন্সট্রাক্টর: Engr. Maidul Islam • কোর্স মেয়াদ: ৪ মাস
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>সিলেবাস অগ্রগতি (Syllabus Completion)</span>
                  <span className="text-[#ea580c]">৬৮% সম্পন্ন</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full w-[68%]" />
                </div>
              </div>

              {/* Recorded Classes List */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-slate-900">রেকর্ডেড ক্লাস লাইব্রেরি:</h3>
                {[
                  { no: "২৮", title: "Class 28: Structural Column & Rebar Detailing", time: "২ ঘণ্টা ১০ মিনিট", date: "১৩ আগস্ট ২০২৬" },
                  { no: "২৭", title: "Class 27: 3D Curtain Wall & Custom Parametric Family", time: "১ ঘণ্টা ৫৫ মিনিট", date: "১০ আগস্ট ২০২৬" },
                  { no: "২৬", title: "Class 26: Multi-Storey Residential Building Project Setup", time: "২ ঘণ্টা ০৫ মিনিট", date: "০৭ আগস্ট ২০২৬" },
                ].map((cls, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-slate-100 bg-[#f8fafc] flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-black">
                        {cls.no}
                      </div>
                      <div>
                        <strong className="block text-slate-900">{cls.title}</strong>
                        <span className="text-slate-500 text-xs">তারিখ: {cls.date} • সময়কাল: {cls.time}</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-[#0a1d37] hover:bg-[#ea580c] text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Watch</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Downloadable Materials */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Download className="w-4 h-4 text-[#ea580c]" />
                  <span>ক্লাস ম্যাটেরিয়ালস ও রিসোর্স (PDFs & Sheets)</span>
                </h3>
                <div className="space-y-2 text-xs">
                  {[
                    "Revit Family Library (Doors & Windows).zip (45MB)",
                    "Architectural Working Drawing Standard.pdf",
                    "Structural Column Schedule Sheet.dwg",
                  ].map((res, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                      <span className="font-semibold text-slate-700 truncate max-w-[200px]">{res}</span>
                      <button className="text-[#ea580c] hover:underline font-bold text-[11px] shrink-0">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Payments & Installments */}
        {activeTab === "payments" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              ৩ মাসের কিস্তি ও পেমেন্ট হিস্ট্রি
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div>
                  <span className="font-black text-emerald-950 block text-sm">১ম কিস্তি: ৳৪,০০০ (Paid)</span>
                  <span className="text-xs text-emerald-700 font-mono">bKash: 9J87K65LM4</span>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div>
                  <span className="font-black text-emerald-950 block text-sm">২য় কিস্তি: ৳৪,০০০ (Paid)</span>
                  <span className="text-xs text-emerald-700 font-mono">Nagad: 8K72M90P11</span>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                <div>
                  <span className="font-black text-amber-950 block text-sm">৩য় কিস্তি: ৳৪,০০০ (Due)</span>
                  <span className="text-xs text-amber-700">পরিশোধের শেষ তারিখ: ২৫ আগস্ট ২০২৬</span>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold transition-all shadow-xs">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Certificate */}
        {activeTab === "certificate" && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center space-y-4 max-w-xl mx-auto shadow-xs">
            <Award className="w-16 h-16 text-amber-500 mx-auto" />
            <h3 className="text-xl font-bold text-slate-900">অফিসিয়াল সার্টিফিকেট প্রিভিউ</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              সকল ক্লাস সম্পন্ন এবং ফাইনাল প্রজেক্ট জমা দেওয়ার পর আপনার ভেরিফায়েড ডিজিটাল সার্টিফিকেট এবং হার্ডকপি প্রদান করা হবে।
            </p>
            <button disabled className="px-6 py-2.5 rounded-xl bg-slate-200 text-slate-400 font-bold text-xs cursor-not-allowed">
              Download Certificate (Locked)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
