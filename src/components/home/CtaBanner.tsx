import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, PhoneCall, Download } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-emerald-100 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join Advance BIM Institute</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              আজই প্রফেশনাল BIM জার্নি শুরু করুন!
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              ৩ মাসের সহজ কিস্তিতে ভর্তি হওয়ার সুযোগ নিন। যেকোনো তথ্যের জন্য আমাদের এক্সপার্ট কাউন্সেলরদের সাথে সরাসরি কথা বলুন।
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/admission"
              className="px-6 py-3.5 rounded-xl bg-white text-emerald-900 font-extrabold text-sm hover:bg-emerald-50 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <span>ভর্তি ফরম পূরণ করুন</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+8801879526108"
              className="px-5 py-3.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-900 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>+880 1879-526108</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
