"use client";

import React from "react";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { CATEGORIES } from "@/data/mockData";

export default function NavCategoryDropdown() {
  return (
    <div className="relative hidden md:block group py-4">
      <button className="flex items-center gap-2.5 px-3.5 py-2 text-sm sm:text-[15px] font-bold text-slate-800 hover:text-[#0077b6] transition-colors cursor-pointer">
        <LayoutGrid className="w-5 h-5 text-slate-700" />
        <span>Category</span>
      </button>

      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 pt-1 w-72 transition-all duration-150 z-50">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 py-3">
          <div className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
            Course Categories
          </div>
          {CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
            <Link
              key={cat.id}
              href={`/courses?category=${cat.id}`}
              className="flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-[#0077b6] transition-colors"
            >
              <span>{cat.name}</span>
              <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-bold">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
