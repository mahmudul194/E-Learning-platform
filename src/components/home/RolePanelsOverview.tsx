"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  Video,
  FileText,
  Award,
  CreditCard,
  BarChart3,
  Users,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function RolePanelsOverview() {
  const [activeTab, setActiveTab] = useState<"student" | "instructor" | "admin">("student");

  const panelData = {
    student: {
      role: "Student Panel",
      roleBn: "শিক্ষার্থী ড্যাশবোর্ড ও লার্নিং পোর্টাল",
      description:
        "শিক্ষার্থীদের জন্য একটি আধুনিক ও পারসোনালাইজড লার্নিং হাব যেখানে কোর্স প্রগ্রেস, রেকর্ডেড ক্লাস, অ্যাসাইনমেন্ট ও ফি ট্র্যাকিং সবকিছু এক জায়গায় পাওয়া যায়।",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      ctaHref: "/student/dashboard",
      features: [
        "স্টুডেন্ট রেজিস্ট্রেশন, প্রোফাইল ও সিকিউর লগইন",
        "পারসোনাল লার্নিং ড্যাশবোর্ড ও কোর্স এনরোলমেন্ট",
        "ফুল এইচডি ভিডিও লেসন ও ডাউনলোডেবল রিসোর্স/মডেলস",
        "অ্যাসাইনমেন্ট সাবমিশন ও লাইভ কুইজ পার্টিসিপেশন",
        "রিয়েল-টাইম কোর্স প্রগ্রেস ও পারফর্ম্যান্স ট্র্যাকার",
        "কোর্স সমাপ্তির পর অটোমেটিক কিউআর ভেরিফাইড সার্টিফিকেট",
        "পেমেন্ট হিস্ট্রি ও ৩ মাসের কিস্তি ট্র্যাকিং সিস্টেম",
        "এসএমএস ও ইমেইল নোটিফিকেশন অ্যালার্ট",
      ],
    },
    instructor: {
      role: "Instructor Panel",
      roleBn: "ইন্সট্রাক্টর ও ট্রেইনার ম্যানেজমেন্ট পোর্টাল",
      description:
        "কোর্স মেন্টর ও ট্রেইনারদের জন্য ডেডিকেটেড প্যানেল, যার মাধ্যমে ক্লাস শিডিউল, স্টুডেন্ট অ্যাসাইনমেন্ট মূল্যায়ন এবং লাইভ সেশন পরিচালনা করা যায়।",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      ctaHref: "/instructor/dashboard",
      features: [
        "ইন্সট্রাক্টর অথেনটিকেশন ও প্রোফাইল ড্যাশবোর্ড",
        "নতুন কোর্স তৈরি ও কারিকুলাম লেসন মডিউল আপলোড",
        "ভিডিও লেকচার, পিডিএফ নোটস ও প্রজেক্ট ফাইল শেয়ারিং",
        "কুইজ তৈরি ও ইন্টার‍্যাক্টিভ অ্যাসাইনমেন্ট ম্যানেজমেন্ট",
        "স্টুডেন্টদের জমা দেওয়া ড্রয়িং/কাজের গ্রেডিং ও ফিডব্যাক",
        "ব্যাচ অনুযায়ী শিক্ষার্থীদের উপস্থিতি ও অগ্রগতি ট্র্যাক",
        "Zoom / Google Meet লাইভ ক্লাস লিঙ্ক ইন্টিগ্রেশন",
      ],
    },
    admin: {
      role: "Admin Panel",
      roleBn: "সুপার অ্যাডমিন ও কন্ট্রোল প্যানেল",
      description:
        "সম্পূর্ণ ই-লার্নিং ইনস্টিটিউট পরিচালনার জন্য সেন্ট্রালাইজড ম্যানেজমেন্ট সিস্টেম, এনালিটিক্স ও পেমেন্ট অডিট প্যানেল।",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
      ctaHref: "/admin/dashboard",
      features: [
        "স্টুডেন্ট ও ইন্সট্রাক্টর ইউজার রোল ম্যানেজমেন্ট",
        "কোর্স ও সিলেবাস পাবলিশিং এবং কনটেন্ট সিএমএস",
        "ব্যাচ ক্রিয়েশন, শিডিউল ও আসন নিয়ন্ত্রণ",
        "অ্যাটেন্ডেন্স ও অনলাইন এক্সাম ম্যানেজমেন্ট",
        "সার্টিফিকেট জেনারেশন, ভেরিফিকেশন ও এপ্রুভাল",
        "আয়-ব্যয়, এনরোলমেন্ট ও রেভিনিউ রিপোর্টস/এনালিটিক্স",
        "bKash, Nagad, Rocket ও SSLCommerz পেমেন্ট রিকনসিলিয়েশন",
        "ওয়েবসাইট ব্যানার ও নোটিশ কনটেন্ট ম্যানেজমেন্ট",
      ],
    },
  };

  const current = panelData[activeTab];

  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Integrated 3-Tier Architecture (Proposal Feature)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            স্টুডেন্ট, ইন্সট্রাক্টর ও অ্যাডমিন ডেডিকেটেড প্যানেল
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            NextByteIT প্রপোজালে উল্লেখিত তিনটি সুনির্দিষ্ট রোল অনুযায়ী সম্পূর্ণ স্বয়ংক্রিয় ম্যানেজমেন্ট সুবিধা।
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <button
              onClick={() => setActiveTab("student")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "student"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Student Panel</span>
            </button>
            <button
              onClick={() => setActiveTab("instructor")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
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
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
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

        {/* Panel Content Box */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Info & Feature list */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-md text-xs font-bold border mb-2 ${current.badgeColor}`}
                >
                  {current.role}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {current.roleBn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Grid of features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {current.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href={current.ctaHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors"
                >
                  <span>ভিউ ডেমো প্যানেল ({current.role})</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Visual Preview Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400">Live Simulation</span>
                </div>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400 font-mono">
                  v1.0 Ready
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Active Status</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Operational
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Target Role</span>
                  <span className="text-white font-bold">{current.role}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Payment Gateway</span>
                  <span className="text-emerald-400 font-semibold">bKash/Nagad Ready</span>
                </div>
              </div>

              <Link
                href={current.ctaHref}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                প্যানেল প্রিভিউ দেখুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
