"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const paymentGateways = [
    { name: "bKash", bg: "bg-[#e2136e]/10 text-[#e2136e] border-[#e2136e]/30" },
    { name: "Nagad", bg: "bg-[#f7941d]/10 text-[#d97706] border-[#f7941d]/30" },
    { name: "Rocket", bg: "bg-[#8c3494]/10 text-[#8c3494] border-[#8c3494]/30" },
    { name: "Upay", bg: "bg-[#005ba4]/10 text-[#005ba4] border-[#005ba4]/30" },
    { name: "NexusPay", bg: "bg-[#00833e]/10 text-[#00833e] border-[#00833e]/30" },
    { name: "MCash", bg: "bg-[#006633]/10 text-[#006633] border-[#006633]/30" },
    { name: "VISA", bg: "bg-[#1a1f71]/10 text-[#1a1f71] border-[#1a1f71]/30" },
    { name: "MasterCard", bg: "bg-[#eb001b]/10 text-[#eb001b] border-[#eb001b]/30" },
    { name: "Q-Cash", bg: "bg-[#c00]/10 text-[#c00] border-[#c00]/30" },
    { name: "UnionPay", bg: "bg-[#004b87]/10 text-[#004b87] border-[#004b87]/30" },
  ];

  return (
    <footer className="bg-[#f0f4f8] text-slate-700 pt-20 pb-14 border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14">
          {/* Col 1: Logo & Share Icons (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-7">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 flex items-center justify-center text-[#0a1d37]">
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
                <span className="text-[11px] font-semibold text-slate-500 tracking-wider mt-0.5">
                  Build Smart. Lead Ahead
                </span>
              </div>
            </Link>

            {/* Share Now row with square icons */}
            <div className="space-y-2.5 pt-1">
              <div className="text-xs sm:text-sm font-extrabold text-slate-900">Share Now</div>
              <div className="flex items-center gap-2.5 text-white">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-[#1877f2] flex items-center justify-center hover:opacity-85 transition-opacity"
                  aria-label="Share Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801879526108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-[#25d366] flex items-center justify-center hover:opacity-85 transition-opacity"
                  aria-label="Share WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-[#0077b5] flex items-center justify-center hover:opacity-85 transition-opacity"
                  aria-label="Share LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Telegram */}
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-[#0088cc] flex items-center justify-center hover:opacity-85 transition-opacity"
                  aria-label="Share Telegram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.536-.195 1.006.128.832.942z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@advancebim.net"
                  className="w-8 h-8 rounded-sm bg-[#ea4335] flex items-center justify-center hover:opacity-85 transition-opacity"
                  aria-label="Share Email"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: About (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900">About</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link href="/" className="hover:text-[#ea580c] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ea580c] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admission" className="hover:text-[#ea580c] transition-colors">
                  Admission
                </Link>
              </li>

            </ul>
          </div>

          {/* Col 3: Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900">Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link href="/courses" className="hover:text-[#ea580c] transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#ea580c] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#ea580c] transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#ea580c] transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Support (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900">Support</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link href="/contact" className="hover:text-[#ea580c] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#ea580c] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-[#ea580c] transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ea580c] transition-colors">
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Download App Button on bottom-left */}
          <div>
            <a
              href="/android_app/abi.apk"
              className="inline-block px-8 py-3 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-black text-xs sm:text-sm shadow-md transition-colors"
            >
              Download App
            </a>
          </div>

          {/* Right Side: Payment Icons row + Copyright text */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            {/* Payment Gateway Mini White Card Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
              {paymentGateways.map((pg, idx) => (
                <div
                  key={idx}
                  className={`px-2.5 py-1 bg-white rounded-md border text-[11px] font-extrabold shadow-2xs ${pg.bg}`}
                >
                  {pg.name}
                </div>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-slate-500 font-medium">
              Copyright © 2026 IMS. All rights reserved | Developed by NextByteIT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
