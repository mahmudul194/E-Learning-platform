import React from "react";
import Link from "next/link";
import { Users, Award, BookOpen, ArrowRight } from "lucide-react";
import { TRAINERS } from "@/data/mockData";

export default function InstructorsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 text-[#0077b6] text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>Industry Expert Mentors</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Expert Instructors & BIM Trainers
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Learn directly from Autodesk certified engineers with years of hands-on experience in mega infrastructure and commercial projects.
            </p>
          </div>

          <Link
            href="/trainers"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0077b6] hover:text-[#002b5b] transition-colors"
          >
            <span>View All Instructors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 text-center flex flex-col items-center justify-between hover:shadow-lg transition-all group"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-4">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs shadow-xs">
                    ✓
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">{trainer.name}</h3>
                <p className="text-xs font-bold text-[#0077b6] mt-0.5">{trainer.role}</p>
                <p className="text-xs text-slate-400 mt-0.5">{trainer.organization}</p>

                <div className="flex flex-wrap gap-1 justify-center my-3">
                  {trainer.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 text-[10px] font-semibold"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-slate-500 line-clamp-2 mt-1">{trainer.bio}</p>
              </div>

              <div className="w-full pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  {trainer.coursesCount} Courses
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  {trainer.studentsCount}+ Students
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
