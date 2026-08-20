"use client";

import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Course } from "@/data/mockData";

interface AdmissionSummaryCardProps {
  selectedCourse: Course;
  paymentType: "installment" | "full";
  installmentAmount: number;
  dueToday: number;
  savings: number;
}

export default function AdmissionSummaryCard({
  selectedCourse,
  paymentType,
  installmentAmount,
  dueToday,
  savings,
}: AdmissionSummaryCardProps) {
  const inclusions = [
    "Live Zoom Sessions + Direct Mentor Interaction",
    "Lifetime Access to Full HD Class Recordings",
    "Master Revit Families (.rfa) & Drawing Sheets",
    "Official QR-Verified Certificate of Completion",
    "24/7 Dedicated Doubt-Solving WhatsApp Group",
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl shadow-slate-200/40 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <h3 className="text-base sm:text-lg font-black text-[#002b5b]">Enrollment Summary</h3>
        <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
          {selectedCourse.badge || "Verified Batch"}
        </span>
      </div>

      {/* Selected Course Visual Card */}
      <div className="flex items-start gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
        <img
          src={selectedCourse.image}
          alt={selectedCourse.title}
          className="w-20 h-20 rounded-xl object-cover shrink-0 border border-slate-200 shadow-xs"
        />
        <div className="space-y-1 min-w-0">
          <span className="text-[10px] font-bold text-[#0077b6] uppercase tracking-wider block">
            {selectedCourse.batchNo || "Upcoming Batch"}
          </span>
          <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug line-clamp-2">
            {selectedCourse.title}
          </h4>
          <span className="text-xs text-slate-500 font-medium block">
            {selectedCourse.duration} • {selectedCourse.level}
          </span>
        </div>
      </div>

      {/* Pricing Calculation Table */}
      <div className="space-y-3 text-xs sm:text-sm text-slate-600 border-b border-slate-100 pb-5">
        <div className="flex justify-between items-center">
          <span>Regular Tuition Fee:</span>
          <span className="font-semibold text-slate-400 line-through">
            ৳{selectedCourse.originalPrice?.toLocaleString()} BDT
          </span>
        </div>

        {savings > 0 && (
          <div className="flex justify-between items-center text-emerald-600 font-bold">
            <span>Early Admission Discount:</span>
            <span>-৳{savings.toLocaleString()} BDT</span>
          </div>
        )}

        <div className="flex justify-between items-center">
          <span>Selected Plan:</span>
          <span className="font-bold text-slate-800">
            {paymentType === "installment" ? "3-Month Installment" : "Full Payment"}
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-sky-50/80 border border-sky-100 space-y-1">
          <div className="flex justify-between items-center text-xs font-bold text-[#002b5b]">
            <span>Today&apos;s Payable Amount:</span>
            <span className="text-base sm:text-lg font-black text-[#0077b6]">
              ৳{dueToday.toLocaleString()} BDT
            </span>
          </div>
          {paymentType === "installment" && (
            <p className="text-[11px] text-[#0f4c81]">
              Remaining Balance: ৳{(selectedCourse.price - installmentAmount).toLocaleString()} BDT (in 2 monthly installments)
            </p>
          )}
        </div>
      </div>

      {/* Course Inclusions Checklist */}
      <div className="space-y-2.5 text-xs text-slate-700">
        <span className="font-extrabold text-slate-900 text-xs block mb-1 uppercase tracking-wider">
          Included with Enrollment:
        </span>
        {inclusions.map((inc, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className="font-medium">{inc}</span>
          </div>
        ))}
      </div>

      {/* Trust & Counselor Box */}
      <div className="pt-2 border-t border-slate-100 space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-[#0077b6]" />
          <span>100% Secure Transaction & Money-back Policy</span>
        </div>

        <div className="p-3.5 rounded-xl bg-[#002b5b] text-white flex items-center justify-between">
          <div>
            <span className="text-[11px] text-sky-200 block font-bold">Have Questions?</span>
            <span className="text-xs font-bold">Speak with an Engineer Counselor</span>
          </div>
          <a
            href="https://wa.me/8801879526108"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#0077b6] hover:bg-[#005a8c] text-white text-xs font-extrabold transition-colors shadow-xs"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
