"use client";

import React from "react";
import Link from "next/link";
import {
  UserCheck,
  BookOpen,
  Users,
  Video,
  FileCheck,
  Plus,
  Upload,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function InstructorDashboardPage() {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-amber-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <UserCheck className="w-4 h-4" />
              <span>Instructor / Trainer Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              ইন্সট্রাক্টর প্যানেল: Engr. Ashikur Rahman (Ovi)
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Lead BIM Specialist • অ্যাক্টিভ ব্যাচ: ৩টি • মোট স্টুডেন্ট: ২,৪০০+
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors">
              <Video className="w-4 h-4" />
              <span>লাইভ ক্লাস শুরু করুন (Start Zoom)</span>
            </button>
            <button className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center gap-2 border border-slate-700">
              <Plus className="w-4 h-4" />
              <span>নতুন কুইজ / অ্যাসাইনমেন্ট</span>
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-slate-500 text-xs font-semibold">পরিচালিত কোর্স</div>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">৩টি কোর্স</div>
            <span className="text-[11px] text-amber-600 font-medium">Revit Combo, MEP, Navisworks</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-slate-500 text-xs font-semibold">বর্তমান ব্যাচে শিক্ষার্থী</div>
            <div className="text-2xl font-extrabold text-blue-600 mt-1">১৮৪ জন</div>
            <span className="text-[11px] text-slate-400 font-medium">Active this month</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-slate-500 text-xs font-semibold">অ্যাসাইনমেন্ট রিভিউ বাকি</div>
            <div className="text-2xl font-extrabold text-rose-600 mt-1">১২টি</div>
            <span className="text-[11px] text-rose-600 font-medium">Pending Grade</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-slate-500 text-xs font-semibold">পরবর্তী লাইভ ক্লাস</div>
            <div className="text-xl font-bold text-slate-900 mt-1">আজ রাত ৯:০০ টা</div>
            <span className="text-[11px] text-emerald-600 font-medium">Batch 8 • Module 3</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Active Batches & Class Scheduler */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">অ্যাক্টিভ ব্যাচ ও ক্লাস শিডিউল</h2>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">
                      Revit Combo (8th Batch)
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      সময়: সোম, বুধ, শুক্র (রাত ৯:০০ - ১১:০০) • মোট শিক্ষার্থী: ৭২ জন
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold">
                      Host Zoom
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold">
                      Upload Material
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">
                      Revit Structure (5th Batch)
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      সময়: রবি, মঙ্গল, বৃহস্পতি (রাত ৮:৩০ - ১০:৩০) • মোট শিক্ষার্থী: ৫৮ জন
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold">
                      Host Zoom
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold">
                      Upload Material
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submissions Queue */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900">স্টুডেন্ট প্রজেক্ট সাবমিশন রিভিউ</h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="block text-slate-900">মোঃ মিজানুর রহমান</strong>
                      <span className="text-slate-500 text-[11px]">Assignment #05: Beam Rebar Model (.rvt)</span>
                    </div>
                    <span className="text-[10px] bg-rose-100 text-rose-700 font-bold px-1.5 py-0.5 rounded">
                      New
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-1 rounded bg-emerald-600 text-white font-bold text-[11px]">
                      Grade & Feedback
                    </button>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="block text-slate-900">সৌভিক কর্মকার</strong>
                      <span className="text-slate-500 text-[11px]">Assignment #04: HVAC Clash Report (.nwd)</span>
                    </div>
                    <span className="text-[10px] bg-rose-100 text-rose-700 font-bold px-1.5 py-0.5 rounded">
                      New
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-1 rounded bg-emerald-600 text-white font-bold text-[11px]">
                      Grade & Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
