"use client";

import React from "react";
import { Course } from "@/data/mockData";
import AdmissionGatewaySelector from "./AdmissionGatewaySelector";

interface AdmissionPaymentStepProps {
  selectedCourse: Course;
  paymentType: "installment" | "full";
  onSelectPaymentType: (type: "installment" | "full") => void;
  paymentMethod: "bkash" | "nagad" | "rocket" | "sslcommerz" | "bank";
  onSelectPaymentMethod: (method: "bkash" | "nagad" | "rocket" | "sslcommerz" | "bank") => void;
  trxId: string;
  setTrxId: (id: string) => void;
  installmentAmount: number;
  dueToday: number;
}

export default function AdmissionPaymentStep({
  selectedCourse,
  paymentType,
  onSelectPaymentType,
  paymentMethod,
  onSelectPaymentMethod,
  trxId,
  setTrxId,
  installmentAmount,
  dueToday,
}: AdmissionPaymentStepProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
        <div className="w-8 h-8 rounded-xl bg-sky-100 text-[#0077b6] flex items-center justify-center font-black text-sm">
          3
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900">Payment Plan & Gateway</h2>
          <p className="text-xs text-slate-500">Select installment mode and local payment gateway</p>
        </div>
      </div>

      {/* Plan Option Toggle Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => onSelectPaymentType("installment")}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
            paymentType === "installment"
              ? "border-[#0077b6] bg-sky-50/70 text-[#002b5b] shadow-xs ring-2 ring-sky-300"
              : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
          }`}
        >
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-[#0077b6] text-white text-[10px] font-black uppercase tracking-wider">
            POPULAR
          </span>
          <div className="text-xs sm:text-sm font-black text-[#002b5b]">3-Month Installment Plan</div>
          <div className="text-xl sm:text-2xl font-black text-[#0077b6] mt-2">
            ৳{installmentAmount.toLocaleString()}{" "}
            <span className="text-xs font-bold text-slate-500">/ 1st Month</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Pay ৳{installmentAmount.toLocaleString()} today. Next 2 installments due on day 30 and day 60.
          </p>
        </button>

        <button
          type="button"
          onClick={() => onSelectPaymentType("full")}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
            paymentType === "full"
              ? "border-[#0077b6] bg-sky-50/70 text-[#002b5b] shadow-xs ring-2 ring-sky-300"
              : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
          }`}
        >
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
            FULL CLEAR
          </span>
          <div className="text-xs sm:text-sm font-black text-[#002b5b]">One-Time Full Fee</div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
            ৳{selectedCourse.price.toLocaleString()}{" "}
            <span className="text-xs font-bold text-slate-500">Total</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            One-time complete payment. Full course lifetime access granted instantly.
          </p>
        </button>
      </div>

      {/* Gateway Grid & TrxID Input */}
      <AdmissionGatewaySelector
        paymentMethod={paymentMethod}
        onSelectPaymentMethod={onSelectPaymentMethod}
        trxId={trxId}
        setTrxId={setTrxId}
        dueToday={dueToday}
      />
    </div>
  );
}
