"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  BookOpen,
  CreditCard,
  Award,
  BarChart3,
  CheckCircle2,
  XCircle,
  Clock,
  Download,
  Search,
} from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Super Admin & Control Panel</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              অ্যাডমিন ড্যাশবোর্ড ও ইনস্টিটিউট ওভারভিউ
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              NextByteIT E-Learning Management System • সর্বমোট রাজস্ব, ভর্তি ও পেমেন্ট রিকনসিলিয়েশন
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>নতুন ব্যাচ তৈরি করুন</span>
            </button>
            <button className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center gap-2 border border-slate-700">
              <Download className="w-4 h-4" />
              <span>রিপোর্ট ডাউনলোড (Excel)</span>
            </button>
          </div>
        </div>

        {/* 4 Financial & User KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-slate-500 text-xs font-semibold">মাসিক রাজস্ব (Revenue)</div>
            <div className="text-2xl font-extrabold text-emerald-600 mt-1">৳৪,৮৫,০০০</div>
            <span className="text-[11px] text-emerald-600 font-medium">+১২.৫% বৃদ্ধি (আগস্ট)</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-slate-500 text-xs font-semibold">সর্বমোট শিক্ষার্থী</div>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">৫,২৪০ জন</div>
            <span className="text-[11px] text-blue-600 font-medium">১৮২ জন এই মাসে নতুন</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-slate-500 text-xs font-semibold">অ্যাক্টিভ ব্যাচ সংখ্যা</div>
            <div className="text-2xl font-extrabold text-amber-600 mt-1">৬টি ব্যাচ</div>
            <span className="text-[11px] text-slate-500 font-medium">Revit, CAD, MEP, Dynamo</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-slate-500 text-xs font-semibold">ইস্যুকৃত সার্টিফিকেট</div>
            <div className="text-2xl font-extrabold text-purple-600 mt-1">৩,৮২০টি</div>
            <span className="text-[11px] text-purple-600 font-medium">QR Verified</span>
          </div>
        </div>

        {/* Admission Approval Queue & Gateway Reconcile */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">ভর্তি ও পেমেন্ট ভেরিফিকেশন কিউ</h2>
              <p className="text-xs text-slate-500">
                bKash, Nagad, Rocket ও SSLCommerz-এর মাধ্যমে আসা সর্বশেষ আবেদনসমূহ যাচাই করুন
              </p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="TrxID বা নাম খুঁজুন..."
                className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 border-y border-slate-200">
                <tr>
                  <th className="py-3 px-4 font-semibold">শিক্ষার্থীর নাম</th>
                  <th className="py-3 px-4 font-semibold">কোর্স ও ব্যাচ</th>
                  <th className="py-3 px-4 font-semibold">পেমেন্ট মেথড ও TrxID</th>
                  <th className="py-3 px-4 font-semibold">পরিমাণ (BDT)</th>
                  <th className="py-3 px-4 font-semibold">স্ট্যাটাস</th>
                  <th className="py-3 px-4 font-semibold text-right">অ্যাকশন</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-medium text-slate-900">মোঃ আরিফুল ইসলাম</td>
                  <td className="py-3.5 px-4 text-slate-600">Revit Combo (8th Batch)</td>
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-rose-600">bKash</span> •{" "}
                    <span className="font-mono text-slate-700">9J87K65LM4</span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">৳৬,০০০ (১ম কিস্তি)</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold">
                      Pending
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right space-x-1.5">
                    <button className="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[11px]">
                      Approve
                    </button>
                    <button className="px-2.5 py-1 rounded bg-rose-50 text-rose-700 border border-rose-200 font-bold text-[11px]">
                      Reject
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-medium text-slate-900">তাহমিনা আক্তার</td>
                  <td className="py-3.5 px-4 text-slate-600">AutoCAD 2D/3D (6th Batch)</td>
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-orange-600">Nagad</span> •{" "}
                    <span className="font-mono text-slate-700">NGD821049A</span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">৳৭,৫০০ (Full Pay)</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                      Verified
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="text-slate-400 text-[11px]">Completed</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-medium text-slate-900">তানভীর আহমেদ</td>
                  <td className="py-3.5 px-4 text-slate-600">Revit MEP (4th Batch)</td>
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-blue-600">SSLCommerz (Card)</span> •{" "}
                    <span className="font-mono text-slate-700">SSL-9921003</span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">৳৪,০০০ (১ম কিস্তি)</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                      Verified
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="text-slate-400 text-[11px]">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
