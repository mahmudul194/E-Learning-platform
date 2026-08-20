"use client";

import React from "react";
import { Smartphone, Mail } from "lucide-react";

export default function ContactInfoSidebar() {
  return (
    <div className="lg:col-span-5 space-y-8 font-sans">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-snug">
        Keep In Touch
        <br />
        With Us.
      </h2>

      <div className="space-y-6 pt-2">
        {/* Phone 1 */}
        <div className="flex items-start gap-4">
          <div className="text-[#0077b6] pt-1">
            <Smartphone className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-extrabold text-slate-900">Phone</h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              +880 1879-526108
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100" />

        {/* Phone 2 */}
        <div className="flex items-start gap-4">
          <div className="text-[#0077b6] pt-1">
            <Smartphone className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-extrabold text-slate-900">Phone</h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              +880 1739-081633
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100" />

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="text-[#0077b6] pt-1">
            <Mail className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-extrabold text-slate-900">Email</h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              info@advancebim.net
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
