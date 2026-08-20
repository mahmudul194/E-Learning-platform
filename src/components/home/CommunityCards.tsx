"use client";

import React from "react";

export default function CommunityCards() {
  const cards = [
    {
      title: "Join Our Facebook Page",
      desc: "Stay connected to Facebook to get all our updates.",
      iconBg: "bg-blue-600",
      icon: (
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      link: "https://www.facebook.com",
    },
    {
      title: "Join Our YouTube Channel",
      desc: "Stay connected to YouTube to get all our updates.",
      iconBg: "bg-red-600",
      icon: (
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      link: "https://www.youtube.com",
    },
    {
      title: "Join Our LinkedIn",
      desc: "Stay connected to the LinkedIn to get all our updates.",
      iconBg: "bg-[#0077b5]",
      icon: (
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      link: "https://www.linkedin.com",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-[#6b7280]/90 rounded-3xl p-9 sm:p-11 text-white flex flex-col justify-between space-y-8 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all hover:-translate-y-1.5"
            >
              {/* Background Mockup Image */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=400&q=80"
                  alt="Background preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 relative z-10">
                <div
                  className={`w-16 h-16 rounded-full ${c.iconBg} flex items-center justify-center shadow-lg`}
                >
                  {c.icon}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-2">{c.desc}</p>
                </div>
              </div>

              <div className="relative z-10 pt-2">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-xl bg-[#0077b6] hover:bg-[#005a8c] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
                >
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
