"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  CreditCard,
  Phone,
  Mail,
  User,
  MapPin,
  Briefcase,
  Layers,
  ArrowRight,
} from "lucide-react";
import { COURSES } from "@/data/mockData";

export default function AdmissionPage() {
  const [selectedCourseId, setSelectedCourseId] = useState(COURSES[0].id);
  const [paymentType, setPaymentType] = useState<"full" | "installment">("installment");
  const [paymentMethod, setPaymentMethod] = useState<"bkash" | "nagad" | "rocket" | "sslcommerz" | "bank">("bkash");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedCourse = COURSES.find((c) => c.id === selectedCourseId) || COURSES[0];
  const installmentAmount = Math.round(selectedCourse.price / 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="py-12 bg-[#f8fafc] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-slate-400 font-medium mb-6">
          <Link href="/" className="hover:text-slate-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700 font-semibold">Admission</span>
        </div>

        {/* Header Banner */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>Online Admission Form (অনলাইন ভর্তি ফরম)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1d37] tracking-tight">
            IMS Institute - ভর্তি ফরম
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            নিচের ফরমটি সঠিকভাবে পূরণ করে আপনার কাঙ্ক্ষিত কোর্সে ভর্তি নিশ্চিত করুন। ৩ মাসের সহজ কিস্তিতে ফি প্রদানের সুবিধা রয়েছে।
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-white rounded-3xl border border-orange-200 p-8 sm:p-12 text-center shadow-xl space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-orange-100 text-[#ea580c] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">ভর্তি আবেদন সফলভাবে গৃহীত হয়েছে!</h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                ধন্যবাদ! আমাদের এডমিশন টিম আপনার তথ্যাদি যাচাই করে দ্রুতই কল ও ইমেইলের মাধ্যমে কনফার্মেশন ও ক্লাস রোল প্রদান করবে।
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left max-w-md mx-auto space-y-2 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">নির্বাচিত কোর্স:</span>
                <span className="font-bold text-slate-800">{selectedCourse.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">পেমেন্ট মেথড:</span>
                <span className="font-bold text-orange-600 uppercase">{paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">পরিশোধিত/ধার্যকৃত কিস্তি:</span>
                <span className="font-bold text-slate-900">৳{installmentAmount.toLocaleString()} BDT</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/student/dashboard"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm shadow-md transition-all"
              >
                <span>স্টুডেন্ট ড্যাশবোর্ডে যান</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg space-y-8">
            {/* Step 1: Course Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                <Layers className="w-4 h-4 text-[#ea580c]" />
                <span>১. কোর্স ও ব্যাচ নির্বাচন</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    কাঙ্ক্ষিত কোর্স বেছে নিন *
                  </label>
                  <select
                    value={selectedCourseId}
                    onChange={(e) => setSelectedCourseId(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-medium focus:outline-[#ea580c]"
                  >
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title} (৳{c.price.toLocaleString()})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    ক্লাস ফরম্যাট *
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-medium focus:outline-[#ea580c]">
                    <option>Live Online Batch (Zoom & LMS Support)</option>
                    <option>Pre-Recorded + Live Doubt Solving Batch</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Personal Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                <User className="w-4 h-4 text-[#ea580c]" />
                <span>২. শিক্ষার্থীর ব্যক্তিগত তথ্য</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    শিক্ষার্থীর পূর্ণ নাম (Full Name) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Md. Ariful Islam"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-[#ea580c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    মোবাইল নাম্বার (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="017XXXXXXXX"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-[#ea580c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    ইমেইল এড্রেস (Email Address) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@gmail.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-[#ea580c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    পেশা / শিক্ষাগত ব্যাকগ্রাউন্ড *
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm focus:outline-[#ea580c]">
                    <option>Civil Engineer / Diploma</option>
                    <option>Architect / Architectural Diploma</option>
                    <option>Electrical / Mechanical Engineer</option>
                    <option>Student (Engineering / Polytechnic)</option>
                    <option>Draftsman / CAD Professional</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Payment Options */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                <CreditCard className="w-4 h-4 text-[#ea580c]" />
                <span>৩. ফি প্রদান পদ্ধতি (Bangladeshi Payment Gateways)</span>
              </div>

              {/* Installment vs Full */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentType("installment")}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    paymentType === "installment"
                      ? "border-[#ea580c] bg-orange-50/70 text-orange-950 font-bold shadow-xs"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold">৩ মাসের সহজ কিস্তি (Installment)</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    প্রথম কিস্তি: ৳{installmentAmount.toLocaleString()} BDT
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentType("full")}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    paymentType === "full"
                      ? "border-[#ea580c] bg-orange-50/70 text-orange-950 font-bold shadow-xs"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold">এককালীন সম্পূর্ণ ফি (Full Fee)</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    মোট: ৳{selectedCourse.price.toLocaleString()} BDT
                  </div>
                </button>
              </div>

              {/* Gateway Selection */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  পেমেন্ট গেটওয়ে সিলেক্ট করুন:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {[
                    { id: "bkash", name: "bKash", color: "border-pink-300 text-pink-600 bg-pink-50" },
                    { id: "nagad", name: "Nagad", color: "border-orange-300 text-orange-600 bg-orange-50" },
                    { id: "rocket", name: "Rocket", color: "border-purple-300 text-purple-600 bg-purple-50" },
                    { id: "sslcommerz", name: "SSLCommerz / Cards", color: "border-blue-300 text-blue-600 bg-blue-50" },
                    { id: "bank", name: "Bank Transfer", color: "border-emerald-300 text-emerald-600 bg-emerald-50" },
                  ].map((gw) => (
                    <button
                      type="button"
                      key={gw.id}
                      onClick={() => setPaymentMethod(gw.id as any)}
                      className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        paymentMethod === gw.id
                          ? `${gw.color} ring-2 ring-orange-500 shadow-xs`
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {gw.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Instruction Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span>মার্চেন্ট নাম্বার:</span>
                  <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-orange-600 font-bold">
                    01879-526108 (Merchant / Send Money)
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  টাকা পাঠানোর পর ট্রানজেকশন আইডি (TrxID) নিচের বক্সে দিন।
                </p>
                <div className="pt-2">
                  <input
                    type="text"
                    required
                    placeholder="পেমেন্ট TrxID দিন (e.g. 9J83KX91A)"
                    className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200 font-mono text-xs focus:outline-[#ea580c]"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                ভর্তি সংক্রান্ত প্রয়োজনে কল করুন: <strong className="text-slate-900">+880 1879-526108</strong>
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                ভর্তি নিশ্চিত করুন (Submit Admission)
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
