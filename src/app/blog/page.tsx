"use client";

import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function BlogsPage() {
  const blogs = [
    {
      id: "bim-lod-complete-guide",
      category: "BIM LOD",
      date: "November 30, 2025",
      title: "⭐ “BIM LOD (Level of Development) — Complete Guide (LOD 100–500)”",
      excerpt: "⭐ “BIM LOD (Level of Development) — Complete Guide (LOD 100-500)” বিস্তারিত গাইডলাইন...",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bim-dimensions-1d-7d",
      category: "BIM DIMENSIONS",
      date: "November 30, 2025",
      title: "⭐ BIM Dimensions (1D-7D) Explained: কীভাবে 7D পর্যন্ত BIM কাজ করে?",
      excerpt: "Building Information Modeling (BIM) হলো ডিজিটাল construction management system যেখানে প্রকল্প ডিজাইন...",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "clash-detection-bim",
      category: "CLASH DETECTION",
      date: "November 30, 2025",
      title: "Clash Detection in BIM: সম্পূর্ণ গাইড (What, Why & How)",
      excerpt: "Clash Detection হলো BIM (Building Information Modeling)-এর একটি অত্যন্ত গুরুত্বপূর্ণ প্রক্রিয়া যা নির্মাণ ত্রুটি কমায়...",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ims-institute-intro",
      category: "INSTITUTE",
      date: "November 4, 2025",
      title: "IMS Institute",
      excerpt: "🎉 IMS Institute — বাংলাদেশের ভবিষ্যৎ নির্মাণ শিক্ষার নতুন দিগন্ত। প্রফেশনাল BIM ও CAD ট্রেনিং...",
      image: "",
      hasImage: false,
    },
    {
      id: "bim-smart-construction-future",
      category: "BIM",
      date: "October 6, 2025",
      title: "BIM - নির্মাণ শিল্পে স্মার্ট প্রযুক্তির নতুন যুগ",
      excerpt: "বর্তমান সময়ের নির্মাণ শিল্পে BIM (Building Information Modeling) একটি বিপ্লবী রূপান্তর ঘটিয়েছে...",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      hasImage: true,
    },
  ];

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-slate-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700 font-semibold">Blogs</span>
        </div>

        {/* Page Title */}
        <div className="text-center pt-2 pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight">
            Blogs
          </h1>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Image (if present) */}
                {blog.image && (
                  <div className="relative h-56 sm:h-60 w-full bg-slate-900 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="text-xs font-black uppercase tracking-wider text-slate-500">
                    {blog.category}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Button */}
              <div className="p-6 sm:p-7 pt-0">
                <button className="px-5 py-2 rounded-lg bg-[#f1f5f9] hover:bg-[#ea580c] text-slate-700 hover:text-white text-xs sm:text-sm font-bold transition-all shadow-2xs cursor-pointer">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
