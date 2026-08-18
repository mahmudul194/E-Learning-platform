"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/student/dashboard");
    }, 600);
  };

  return (
    <div className="bg-[#fafbfc] min-h-[calc(100vh-140px)] py-10 sm:py-16 flex flex-col justify-start">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        {/* Breadcrumb matching screenshot */}
        <div className="text-xs sm:text-sm text-slate-400 font-medium mb-12">
          <Link href="/" className="hover:text-slate-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700 font-semibold">Student Dashboard</span>
        </div>

        {/* Centered Login Card */}
        <div className="max-w-md mx-auto w-full">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-10 space-y-7">
            {/* Title */}
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight">
                Login
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Username or Email */}
              <div className="space-y-2">
                <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-500">
                  USERNAME OR EMAIL
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your username or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-orange-400 transition-all"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-500">
                  PASSWORD
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-4 pr-11 py-3 rounded-lg bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-orange-400 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password Row */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-[#ea580c] focus:ring-[#ea580c] cursor-pointer"
                  />
                  <span>Remember me</span>
                </label>

                <Link
                  href="/contact"
                  className="text-slate-600 hover:text-[#ea580c] transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-sm sm:text-base shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-70"
                >
                  {loading ? "Logging in..." : "Log In"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
