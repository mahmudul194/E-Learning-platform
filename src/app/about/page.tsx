import React from "react";
import Link from "next/link";
import { Layers, ShieldCheck, Award, Users, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-14 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              About Advance BIM Institute
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              নির্মাণ ও ডিজাইন শিল্পে প্রযুক্তির আধুনিক রূপান্তর
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Advance BIM Institute বাংলাদেশের প্রকৌশলী, স্থপতি ও ডিপ্লোমা শিক্ষার্থীদের জন্য নিবেদিত একটি আন্তর্জাতিক মানের অনলাইন ও অফলাইন টেকনিক্যাল ট্রেনিং প্ল্যাটফর্ম।
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xl">
              🎯
            </div>
            <h2 className="text-xl font-bold text-slate-900">আমাদের লক্ষ্য (Mission)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              বাংলাদেশের প্রতিটি ইঞ্জিনিয়ারিং শিক্ষার্থী ও প্রফেশনালকে সনাতন ড্রাফটিং পদ্ধতি থেকে আধুনিক Building Information Modeling (BIM) এবং অটোমেশনের সাথে পরিচিত ও দক্ষ করে গড়ে তোলা।
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
              🚀
            </div>
            <h2 className="text-xl font-bold text-slate-900">আমাদের ভিশন (Vision)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              আন্তর্জাতিক পরিমণ্ডলে বাংলাদেশী তরুণ প্রকৌশলীদের মেধা ও দক্ষতার দৃষ্টান্ত স্থাপন করা এবং গ্লোবাল রিমোট ইঞ্জিনিয়ারিং জব মার্কেটে একটি শীর্ষস্থানীয় প্ল্যাটফর্ম হিসেবে নেতৃত্ব দেওয়া।
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xs">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            আমাদের বিশেষত্ব ও সুযোগ-সুবিধা
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>আন্তর্জাতিক BIM প্রজেক্ট ভিত্তিক সরাসরি প্রশিক্ষণ</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>৩ মাসের সহজ কিস্তিতে ফি প্রদানের সার্বক্ষণিক সুযোগ</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>২৪/৭ ডেডিকেটেড টেকনিক্যাল ও সফটওয়্যার সাপোর্ট</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>কোর্স শেষে ভেরিফায়েবল কিউআর কোডযুক্ত সার্টিফিকেট</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>লাইফটাইম ক্লাস ভিডিও ব্যাকআপ ও প্রজেক্ট ফাইলস এক্সেস</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>সিভি মেকিং ও লোকাল/ইন্টারন্যাশনাল জব প্লেসমেন্ট হেল্প</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
