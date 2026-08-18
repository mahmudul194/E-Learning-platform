"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/mockData";

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const extendedFaqs = [
    ...FAQS,
    {
      question: "আমি কি মোবাইল দিয়ে ক্লাস করতে পারব?",
      answer: "লাইভ ক্লাস মোবাইলের মাধ্যমেও দেখা ও শোনা যাবে, তবে প্র্যাকটিসের জন্য একটি ল্যাপটপ বা ডেস্কটপ কম্পিউটার (ন্যূনতম Core i5 / Ryzen 5, 8GB/16GB RAM) আবশ্যক।",
    },
    {
      question: "কোর্সের ক্লাস শিডিউল কখন নির্ধারণ করা হয়?",
      answer: "অধিকাংশ ক্লাস রাতের শিফটে (রাত ৮:৩০ বা ৯:০০ টা থেকে) অনুষ্ঠিত হয় যাতে বিশ্ববিদ্যালয়ের শিক্ষার্থী ও চাকুরিজীবী উভয়েই স্বাচ্ছন্দ্যে অংশ নিতে পারেন।",
    },
    {
      question: "কিস্তির টাকা পরিশোধের নিয়ম কী?",
      answer: "ভর্তি হওয়ার সময় ১ম কিস্তি দিয়ে রেজিস্ট্রেশন সম্পন্ন করতে হবে। ২য় কিস্তি কোর্স শুরুর ৩০ দিন পর এবং ৩য় কিস্তি ৬০ দিন পর bKash, Nagad বা অনলাইন পোর্টালে সরাসরি পে করা যাবে।",
    },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>FAQ & Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            সচরাচর জিজ্ঞাসিত সকল প্রশ্ন (FAQ)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Advance BIM Institute-এর কোর্স, ক্লাস মেথড, ফি কিস্তি ও সার্টিফিকেট সংক্রান্ত যাবতীয় তথ্য।
          </p>
        </div>

        <div className="space-y-4">
          {extendedFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs transition-shadow"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-700 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
