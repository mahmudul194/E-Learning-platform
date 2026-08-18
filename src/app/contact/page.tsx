"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Smartphone, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 4000);
  };

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-slate-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700 font-semibold">Contact us</span>
        </div>

        {/* Page Title */}
        <div className="text-center pt-1 pb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight">
            Contact us
          </h1>
        </div>

        {/* Main 2-Column Content matching Screenshot 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column: Keep In Touch With Us */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-snug">
              Keep In Touch
              <br />
              With Us.
            </h2>

            <div className="space-y-6 pt-2">
              {/* Phone 1 */}
              <div className="flex items-start gap-4">
                <div className="text-[#ea580c] pt-1">
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
                <div className="text-[#ea580c] pt-1">
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
                <div className="text-[#ea580c] pt-1">
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

          {/* Right Column: Send a Message Form */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Send a Message
            </h2>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2 animate-in fade-in duration-300">
                <div className="text-xl font-bold">ধন্যবাদ! আপনার বার্তাটি পাঠানো হয়েছে।</div>
                <p className="text-sm">আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-orange-400 transition-all"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-orange-400 transition-all"
                  />
                </div>

                {/* Row 2: Phone */}
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-orange-400 transition-all"
                  />
                </div>

                {/* Row 3: Message */}
                <div>
                  <textarea
                    rows={5}
                    required
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-orange-400 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-10 py-3.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-sm sm:text-base shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
