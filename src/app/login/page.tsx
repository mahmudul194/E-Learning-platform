"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DemoLoginChips from "@/components/auth/DemoLoginChips";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const performLogin = (role: "student" | "instructor" | "admin") => {
    setLoading(true);
    setErrorMsg("");
    if (typeof window !== "undefined") {
      localStorage.setItem("bim_user_role", role);
    }
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 400);
  };

  const handleLoginSubmit = (username: string) => {
    const input = username.trim().toLowerCase();
    if (input.includes("admin")) {
      performLogin("admin");
    } else if (input.includes("instructor") || input.includes("trainer") || input.includes("teacher")) {
      performLogin("instructor");
    } else {
      performLogin("student");
    }
  };

  return (
    <div className="bg-[#fafbfc] min-h-[calc(100vh-140px)] py-10 sm:py-16 flex flex-col justify-start">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-slate-400 font-medium mb-10">
          <Link href="/" className="hover:text-slate-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700 font-semibold">User Login & Dashboard</span>
        </div>

        {/* Centered Login Card */}
        <div className="max-w-md mx-auto w-full space-y-6">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/80 p-8 sm:p-10 space-y-6">
            
            {/* Title */}
            <div className="text-center space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-black text-[#002b5b] tracking-tight">
                LMS Portal Login
              </h1>
              <p className="text-xs text-slate-500">
                Sign in to access your customized learning portal
              </p>
            </div>

            {/* Quick Demo Login Chips */}
            <DemoLoginChips onPerformLogin={performLogin} />

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs font-semibold text-center border border-red-200">
                {errorMsg}
              </div>
            )}

            {/* Form */}
            <LoginForm loading={loading} onLoginSubmit={handleLoginSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
