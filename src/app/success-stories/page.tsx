import React from "react";
import Link from "next/link";
import { Star, Quote, Sparkles, Award } from "lucide-react";
import { TESTIMONIALS } from "@/data/mockData";

export default function SuccessStoriesPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Alumni & Success Stories</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            শিক্ষার্থীদের সাফল্য ও ক্যারিয়ার প্লেসমেন্ট
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            আমাদের প্রাক্তন শিক্ষার্থীদের বাস্তব ক্যারিয়ার অভিজ্ঞতা ও তাদের অনুপ্রেরণামূলক যাত্রা।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs text-emerald-600 font-semibold">{review.role}</p>
                  <p className="text-[11px] text-slate-400">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
