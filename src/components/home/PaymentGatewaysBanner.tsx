import React from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function PaymentGatewaysBanner() {
  const methods = [
    {
      name: "bKash",
      type: "Mobile Financial Service",
      bg: "bg-rose-50 border-rose-200 text-rose-700",
      pill: "bg-rose-600 text-white",
      desc: "Merchant Payment & Direct App Checkout",
    },
    {
      name: "Nagad",
      type: "Digital Banking",
      bg: "bg-orange-50 border-orange-200 text-orange-700",
      pill: "bg-orange-600 text-white",
      desc: "Instant Online Fee Payment & Installments",
    },
    {
      name: "Rocket",
      type: "DBBL Mobile Banking",
      bg: "bg-purple-50 border-purple-200 text-purple-700",
      pill: "bg-purple-600 text-white",
      desc: "Easy Bill Pay & Cash-In Support",
    },
    {
      name: "SSLCommerz",
      type: "Cards & Internet Banking",
      bg: "bg-blue-50 border-blue-200 text-blue-700",
      pill: "bg-blue-600 text-white",
      desc: "Visa, Mastercard, Amex, 30+ Banks Gateway",
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Secure Bangladeshi Payment Gateway</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                সহজ কিস্তিতে ফি পরিশোধের সুযোগ
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                শিক্ষার্থীদের সুবিধার জন্য আমাদের সকল দীর্ঘমেয়াদী কোর্সে ৩ মাসের সহজ কিস্তিতে পেমেন্ট করার সুব্যবস্থা রয়েছে। কোনো এক্সট্রা চার্জ ছাড়াই পছন্দের লোকাল গেটওয়ে দিয়ে ফি পরিশোধ করুন।
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>অটোমেটিক ইনস্ট্যান্ট ইনভয়েস ও রিসিট জেনারেশন</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>এসএমএস ও ইমেইলে পেমেন্ট কনফার্মেশন</span>
                </div>
              </div>
            </div>

            {/* Gateway Cards Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {methods.map((method) => (
                <div
                  key={method.name}
                  className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl flex flex-col justify-between hover:border-emerald-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-extrabold text-white">{method.name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${method.pill}`}>
                      Active
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-medium mb-1">{method.type}</p>
                  <p className="text-[10px] text-slate-400">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
