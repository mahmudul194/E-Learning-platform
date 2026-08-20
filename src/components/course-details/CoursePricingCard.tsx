"use client";

import React from "react";
import Link from "next/link";
import { CreditCard, ArrowRight } from "lucide-react";
import { Course } from "@/data/mockData";

interface CoursePricingCardProps {
  course: Course;
  installmentAmount: number;
}

export default function CoursePricingCard({
  course,
  installmentAmount,
}: CoursePricingCardProps) {
  return (
    <div className="lg:col-span-4 bg-white text-slate-900 rounded-3xl p-7 shadow-2xl border border-slate-100 space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
          Course Fee
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-3xl sm:text-4xl font-black text-[#0077b6]">
            ৳{course.price.toLocaleString()}
          </span>
          {course.originalPrice && (
            <span className="text-base text-slate-400 line-through font-bold">
              ৳{course.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* 3-Month Installment Badge */}
        <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#002b5b]">
            <CreditCard className="w-4 h-4 text-[#0077b6]" />
            <span>3-Month Installment Available</span>
          </div>
          <p className="text-xs text-[#0f4c81]">
            Only <strong>৳{installmentAmount.toLocaleString()} BDT</strong> per month
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <Link
          href="/admission"
          className="w-full py-3.5 rounded-xl bg-[#0077b6] hover:bg-[#005a8c] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition-all hover:scale-105 active:scale-95"
        >
          <span>Enroll in Course</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href="https://wa.me/8801879526108"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-xl bg-[#002b5b] hover:bg-[#001a38] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
        >
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
