"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import NavCategoryDropdown from "./NavCategoryDropdown";
import NavAboutDropdown from "./NavAboutDropdown";
import NavMobileMenu from "./NavMobileMenu";

export default function Navbar({ isScrolled = false }: { isScrolled?: boolean }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "All Courses", href: "/courses" },
    { name: "Students Gallery", href: "/gallery" },
  ];

  return (
    <div className={`relative z-40 transition-all duration-300 ease-in-out font-sans ${isScrolled ? "border-b border-slate-200/80" : "border-b border-slate-100"}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className={`flex items-center justify-between gap-6 transition-all duration-300 ease-in-out ${isScrolled ? "h-16 sm:h-18" : "h-20 sm:h-22"}`}>
          
          {/* Logo & Category Button */}
          <div className="flex items-center gap-6 shrink-0">
            <Link href="/" className="flex items-center gap-3 py-1">
              <img
                src="/logo.jpeg"
                alt="BIM Build BD"
                className={`w-auto object-contain transition-all duration-300 hover:scale-105 ${
                  isScrolled ? "h-12 sm:h-15" : "h-16 sm:h-20"
                }`}
              />
            </Link>

            <div className="hidden md:block w-px h-8 bg-slate-200" />
            <NavCategoryDropdown />
          </div>

          {/* Center Search Input */}
          <div className="hidden lg:flex items-center flex-1 max-w-md xl:max-w-lg mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-5 pr-12 py-2.5 sm:py-3 rounded-xl bg-[#f0f2f5] text-sm sm:text-[15px] text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-sky-400/50 transition-all"
              />
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0077b6] hover:scale-110 transition-transform cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative py-2 text-sm sm:text-[15px] font-bold transition-colors ${
                    isActive ? "text-[#0077b6]" : "text-slate-700 hover:text-[#0077b6]"
                  }`}
                >
                  <span>{item.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2.5px] bg-[#0077b6] rounded-full transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* About us Dropdown */}
            <NavAboutDropdown />
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-slate-800 hover:bg-slate-100 rounded-xl cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <NavMobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
}
