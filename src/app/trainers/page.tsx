import React from "react";
import Link from "next/link";
import { Users, BookOpen, Award, ArrowRight } from "lucide-react";
import { TRAINERS } from "@/data/mockData";

export default function TrainersPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 mb-12 shadow-xl">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Expert Instructor Panel
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              আমাদের অভিজ্ঞ ট্রেইনার ও মেন্টরবৃন্দ
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Advance BIM Institute-এর সম্মানিত ইন্সট্রাক্টরগণ স্বনামধন্য ফার্ম ও আন্তর্জাতিক প্রকল্পে সরাসরি কর্মরত অভিজ্ঞ প্রফেশনাল।
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center justify-between shadow-xs hover:shadow-lg transition-all text-center"
            >
              <div className="flex flex-col items-center">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-emerald-50 mb-4"
                />
                <h3 className="text-base font-bold text-slate-900">{trainer.name}</h3>
                <p className="text-xs font-semibold text-emerald-600 mt-1">{trainer.role}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{trainer.organization}</p>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">{trainer.bio}</p>

                <div className="flex flex-wrap gap-1.5 justify-center mt-4">
                  {trainer.specialties.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{trainer.coursesCount} Courses</span>
                <span>{trainer.studentsCount}+ Students</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
