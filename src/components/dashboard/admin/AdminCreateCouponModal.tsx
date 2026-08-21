"use client";

import React, { useState } from "react";
import { TicketPercent, X } from "lucide-react";
import { CouponItem } from "@/types/dashboard";

interface AdminCreateCouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateCoupon: (coupon: CouponItem) => void;
}

export default function AdminCreateCouponModal({
  isOpen,
  onClose,
  onCreateCoupon,
}: AdminCreateCouponModalProps) {
  const [form, setForm] = useState({
    code: "",
    discountType: "percentage" as "percentage" | "flat",
    discountValue: "15",
    minOrder: "10000",
    expiryDate: "2026-10-31",
    usageLimit: "50",
    applicableCourse: "All Courses",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateCoupon({
      id: `cp-${Date.now()}`,
      code: form.code.toUpperCase(),
      discountType: form.discountType,
      discountValue: Number(form.discountValue),
      minOrderAmount: Number(form.minOrder),
      expiryDate: form.expiryDate,
      usageLimit: Number(form.usageLimit),
      usedCount: 0,
      applicableCourse: form.applicableCourse,
      isActive: true,
    });
    onClose();
  };

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 font-sans animate-fade-in text-xs sm:text-sm">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-100 ring-1 ring-black/5 animate-scale-in">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#0077b6] flex items-center justify-center border border-sky-100 shadow-xs shrink-0">
              <TicketPercent className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900 tracking-tight">Create Promo Coupon</h4>
              <p className="text-xs text-slate-500">Generate a discount code for admissions</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="font-bold text-slate-700 block mb-1">Coupon Code</label>
            <input type="text" required placeholder="e.g. BIMPRO2026" value={form.code} onChange={(e) => update("code", e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0077b6] focus:ring-2 focus:ring-sky-500/10 focus:outline-none uppercase font-mono font-bold" />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Discount Type</label>
              <select value={form.discountType} onChange={(e) => update("discountType", e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0077b6] focus:outline-none">
                <option value="percentage">Percentage (% OFF)</option>
                <option value="flat">Flat Amount (৳ BDT)</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 block mb-1">Discount Rate</label>
              <input type="number" required placeholder="Discount Value" value={form.discountValue} onChange={(e) => update("discountValue", e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0077b6] focus:outline-none font-mono font-bold" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Expiry Date</label>
              <input type="date" required value={form.expiryDate} onChange={(e) => update("expiryDate", e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0077b6] focus:outline-none" />
            </div>
            <div>
              <label className="font-bold text-slate-700 block mb-1">Usage Limit</label>
              <input type="number" required placeholder="Usage Limit" value={form.usageLimit} onChange={(e) => update("usageLimit", e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0077b6] focus:outline-none font-mono" />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Applicable Course</label>
            <select value={form.applicableCourse} onChange={(e) => update("applicableCourse", e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0077b6] focus:outline-none">
              <option value="All Courses">All BIM Courses</option>
              <option value="Revit Combo Pro">Revit Combo Pro</option>
              <option value="Tekla Steel Detailing">Tekla Steel Detailing</option>
              <option value="Revit Architecture + Structure">Revit Architecture + Structure</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
            <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors cursor-pointer">Cancel</button>
            <button type="submit" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#002b5b] to-[#0077b6] hover:from-[#001830] hover:to-[#005a8c] text-white font-extrabold shadow-md transition-all cursor-pointer hover:scale-102">Create Coupon</button>
          </div>
        </form>
      </div>
    </div>
  );
}
