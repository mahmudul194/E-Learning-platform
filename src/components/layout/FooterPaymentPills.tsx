"use client";

import React from "react";

export default function FooterPaymentPills() {
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
    <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5">
        <span className="text-xs font-bold text-slate-400 mr-1 uppercase tracking-wider">
          We Accept:
        </span>
        {paymentGateways.map((g) => (
          <span
            key={g.name}
            className={`px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-bold border ${g.bg}`}
          >
            {g.name}
          </span>
        ))}
      </div>

      <div className="text-xs text-slate-500 font-medium text-center md:text-right shrink-0">
        © 2026 BIM Build BD. All rights reserved.
      </div>
    </div>
  );
}
