"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ChevronDown,
  Menu,
  X,
  LayoutGrid,
} from "lucide-react";
import { CATEGORIES } from "@/data/mockData";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "All Courses", href: "/courses" },
    { name: "Students Gallery", href: "/gallery" },
  ];

  const aboutSubItems = [
    { name: "Blogs", href: "/blog" },
    { name: "Our Portfolio", href: "/portfolio" },
    { name: "Contact us", href: "/contact" },
  ];

  const dashboardSubItems = [
    { name: "Student Dashboard", href: "/student/dashboard" },
    { name: "Instructor Dashboard", href: "/instructor/dashboard" },
    { name: "Admin Dashboard", href: "/admin/dashboard" },
  ];

  return (
    <div className="bg-white border-b border-slate-100 relative z-40">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-22 gap-6">
          {/* Logo & Category Button */}
          <div className="flex items-center gap-6 shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center text-[#0a1d37]">
                <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-[#0a1d37]" strokeWidth="2.5">
                  <path d="M8 36V12L20 4L32 12V36H8Z" />
                  <path d="M15 36V20H25V36" />
                  <path d="M14 14H16M24 14H26M14 18H16M24 18H26" strokeWidth="2.5" stroke="#ea580c" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#0a1d37] leading-none">
                  IMS <span className="text-[#ea580c] font-black">INSTITUTE</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wider mt-0.5">
                  Build Smart. Lead Ahead
                </span>
              </div>
            </Link>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-10 bg-slate-200" />

            {/* 9-Dot Category Button */}
            <div className="relative hidden md:block group py-4">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-2.5 px-3.5 py-2 text-sm sm:text-[15px] font-bold text-slate-800 hover:text-[#ea580c] transition-colors cursor-pointer"
              >
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
                      className="flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-[#ea580c] transition-colors"
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
          </div>

          {/* Center: Search Box with Orange Search Icon */}
          <div className="hidden lg:flex items-center flex-1 max-w-md xl:max-w-lg mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-5 pr-12 py-2.5 sm:py-3 rounded-xl bg-[#f0f2f5] text-sm sm:text-[15px] text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-400/50 transition-all"
              />
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ea580c] hover:scale-110 transition-transform cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative py-2 text-sm sm:text-[15px] font-bold transition-colors ${
                    isActive
                      ? "text-[#ea580c]"
                      : "text-slate-700 hover:text-[#ea580c]"
                  }`}
                >
                  <span>{item.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2.5px] bg-[#ea580c] rounded-full transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* About us Dropdown (Seamless Bridge, Zero Disappearing Gap) */}
            <div className="relative group py-6">
              <button
                className={`relative flex items-center gap-1.5 text-sm sm:text-[15px] font-bold transition-colors cursor-pointer ${
                  pathname.startsWith("/about") || pathname.startsWith("/blog") || pathname.startsWith("/contact") || pathname.startsWith("/portfolio")
                    ? "text-[#ea580c]"
                    : "text-slate-700 group-hover:text-[#ea580c]"
                }`}
              >
                <span>About us</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-500 group-hover:text-[#ea580c]" />
                <span
                  className={`absolute -bottom-2 left-0 h-[2.5px] bg-[#ea580c] rounded-full transition-all duration-200 ${
                    pathname.startsWith("/about") || pathname.startsWith("/blog") || pathname.startsWith("/contact") || pathname.startsWith("/portfolio")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>

              {/* Seamless Dropdown Card with Invisible Hover Bridge */}
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 pt-2 w-48 transition-all duration-150 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-slate-100 py-2.5 relative">
                  {/* Top Arrow Pointer */}
                  <div className="absolute -top-1.5 left-5 w-3 h-3 bg-white rotate-45 border-l border-t border-slate-100" />

                  {aboutSubItems.map((subItem) => {
                    const isSubActive = pathname === subItem.href;
                    return (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block px-5 py-2.5 text-sm font-semibold transition-colors ${
                          isSubActive
                            ? "text-[#ea580c]"
                            : "text-slate-700 hover:text-[#ea580c] hover:bg-slate-50"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Dashboard Dropdown (Seamless Bridge, Zero Disappearing Gap) */}
            <div className="relative group py-6">
              <button
                className={`relative flex items-center gap-1.5 text-sm sm:text-[15px] font-bold transition-colors cursor-pointer ${
                  pathname.includes("/dashboard")
                    ? "text-[#ea580c]"
                    : "text-slate-700 group-hover:text-[#ea580c]"
                }`}
              >
                <span>Dashboard</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-500 group-hover:text-[#ea580c]" />
                <span
                  className={`absolute -bottom-2 left-0 h-[2.5px] bg-[#ea580c] rounded-full transition-all duration-200 ${
                    pathname.includes("/dashboard")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>

              {/* Seamless Dropdown Card with Invisible Hover Bridge */}
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 pt-2 w-52 transition-all duration-150 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-slate-100 py-2.5 relative">
                  {/* Top Arrow Pointer */}
                  <div className="absolute -top-1.5 left-5 w-3 h-3 bg-white rotate-45 border-l border-t border-slate-100" />

                  {dashboardSubItems.map((dash) => {
                    const isDashActive = pathname === dash.href;
                    return (
                      <Link
                        key={dash.name}
                        href={dash.href}
                        className={`block px-5 py-2.5 text-sm font-semibold transition-colors ${
                          isDashActive
                            ? "text-[#ea580c]"
                            : "text-slate-700 hover:text-[#ea580c] hover:bg-slate-50"
                        }`}
                      >
                        {dash.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-slate-800 hover:bg-slate-100 rounded-xl"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-4 shadow-xl">
          <div className="relative w-full mb-3">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-sm"
            />
            <Search className="w-4 h-4 text-[#ea580c] absolute right-3.5 top-1/2 -translate-y-1/2" />
          </div>

          <div className="space-y-1.5 text-base font-semibold">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-[#ea580c] bg-orange-50 font-bold"
            >
              Home
            </Link>
            <Link
              href="/courses"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50"
            >
              All Courses
            </Link>
            <Link
              href="/gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50"
            >
              Students Gallery
            </Link>
            
            {/* Mobile About Us Submenu */}
            <div className="pl-2 space-y-1 pt-1 border-t border-slate-100">
              <div className="px-2 py-1 text-xs font-bold uppercase text-slate-400">About Us</div>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg text-sm text-slate-700 hover:text-[#ea580c]"
              >
                Blogs
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg text-sm text-slate-700 hover:text-[#ea580c]"
              >
                Our Portfolio
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg text-sm text-slate-700 hover:text-[#ea580c]"
              >
                Contact us
              </Link>
            </div>

            {/* Mobile Dashboard Panels */}
            <div className="pl-2 space-y-1 pt-2 border-t border-slate-100">
              <div className="px-2 py-1 text-xs font-bold uppercase text-slate-400">Dashboard</div>
              <Link
                href="/student/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg text-sm text-slate-700 hover:text-[#ea580c]"
              >
                Student Dashboard
              </Link>
              <Link
                href="/instructor/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg text-sm text-slate-700 hover:text-[#ea580c]"
              >
                Instructor Dashboard
              </Link>
              <Link
                href="/admin/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg text-sm text-slate-700 hover:text-[#ea580c]"
              >
                Admin Dashboard
              </Link>
            </div>

            <Link
              href="/admission"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-emerald-700 bg-emerald-50 font-bold"
            >
              Admission
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
