"use client";

import React from "react";
import { Check, Lock } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mojahedur Rahman",
      role: "Student",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
      text: "IMS Institute এ বাস্তবভিত্তিক প্রজেক্ট কাজ শেখানো হয় আন্তর্জাতিক মানে। এখানে অভিজ্ঞ ইঞ্জিনিয়ার ও স্থপতিদের সাথে শেখার সুযোগ পাই — এটি সত্যিই এক অসাধারণ প্ল্যাটফর্ম!",
    },
    {
      name: "Md. Ariful Haque",
      role: "Student",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=300&q=80",
      text: "Complete BIM Revit কোর্সে যোগ দিয়ে অনেক কিছু শিখেছি। কোর্সের কাঠামো চমৎকার এবং রেভিট শেখা এখন ক্যারিয়ারের জন্য অত্যন্ত গুরুত্বপূর্ণ। IMS সত্যিই ভবিষ্যতে BIM প্রফেশনাল তৈরি করছে।",
    },
    {
      name: "Souvik Karmakar",
      role: "Student",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=300&q=80",
      text: "IMS Institute পেশাদারভাবে BIM শেখার দারুণ একটি প্ল্যাটফর্ম। লাইভ ও রেকর্ডেড ক্লাস, সহায়তামূলক ইন্সট্রাক্টর, আর প্র্যাকটিকাল ট্রেইনিং সবই চমৎকার। শেখার অভিজ্ঞতা দারুণ লাগছে!",
    },
    {
      name: "Matiur Rahaman",
      role: "Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      text: "IMS Institute শেখার জন্য সেরা একটি জায়গা। দক্ষ ও যত্নবান ইন্সট্রাক্টরা সুন্দরভাবে সব কিছু শেখান। যারা BIM-এ ক্যারিয়ার গড়তে চান, তাদের জন্য Highly Recommended!",
    },
  ];

  const certifiedPoints = [
    "Architecture, Structural, HVAC, Plumbing, Firefighting & Electrical Working Drawing",
    "Industry-recognized BIM certificate upon course completion",
    "Boost your career with hands-on projects & expert guidance",
    "Flexible online/offline learning with recorded materials",
    "Become a skilled BIM professional ready for national & international projects",
  ];

  return (
    <section className="py-24 bg-white space-y-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-24">
        {/* Top Part: What Students Say About Us */}
        <div className="space-y-14">
          <div className="text-center space-y-2.5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#ea580c]">
              TESTIMONIALS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0f172a]">
              What Students Say About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-9 flex flex-col items-center text-center justify-between shadow-xs hover:shadow-2xl transition-all hover:-translate-y-1.5"
              >
                <div className="flex flex-col items-center space-y-5">
                  {/* Avatar */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-slate-50 shadow-md"
                  />
                  {/* Bengali Testimonial Text */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {item.text}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 w-full text-center">
                  <h4 className="text-sm sm:text-base font-bold text-[#0f172a]">{item.name}</h4>
                  <p className="text-xs font-semibold text-slate-400 mt-0.5">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel indicator dots */}
          <div className="flex justify-center items-center gap-2.5 pt-2">
            <span className="w-3 h-3 rounded-full bg-[#0f172a]" />
            <span className="w-3 h-3 rounded-full bg-slate-300" />
          </div>
        </div>

        {/* Bottom Part: What You’ll Learn & Get Certified */}
        <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 5 Certified Checklist */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative inline-block">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight">
                What You’ll Learn & Get Certified
              </h2>
              {/* Curved orange underline */}
              <svg
                className="w-36 sm:w-52 h-4 text-[#ea580c] absolute -bottom-2 right-0"
                viewBox="0 0 120 10"
                fill="none"
              >
                <path
                  d="M2 7C30 1 85 1 118 8"
                  stroke="#ea580c"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="space-y-6 pt-3">
              {certifiedPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-[#ea580c] shrink-0 mt-0.5 flex items-center justify-center font-black text-sm">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-[#0f172a] leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certificate Mockup with Padlock */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-md w-full bg-slate-50 rounded-3xl border-4 border-amber-100 p-8 shadow-2xl text-center overflow-hidden">
              {/* Certificate Inner Preview */}
              <div className="border-2 border-amber-200/80 p-8 sm:p-10 rounded-2xl bg-white space-y-5 relative shadow-inner">
                <div className="text-xs sm:text-sm uppercase font-bold tracking-widest text-slate-400">
                  IMS INSTITUTE
                </div>
                <div className="text-base sm:text-xl font-black text-[#0f172a] tracking-wider">
                  CERTIFICATE OF COMPLETION
                </div>
                <div className="text-xs sm:text-sm text-slate-500 italic">
                  Course: Professional Revit Combo Course (Architecture, Structure & MEP)
                </div>

                {/* Padlock Overlay in Center */}
                <div className="py-6 flex flex-col items-center justify-center space-y-3.5">
                  <div className="w-18 h-18 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl border-2 border-amber-300">
                    <Lock className="w-9 h-9" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-blue-600">
                    Certificate available for enrolled students only
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
