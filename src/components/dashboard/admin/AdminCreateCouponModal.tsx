"use client";

import React, { useState } from "react";
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
    const newCoupon: CouponItem = {
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
    };
    onCreateCoupon(newCoupon);
    onClose();
  };

  const updateField = (field: string, val: string) =>
    setForm((prev) => ({ ...prev, [field]: val }));

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans text-xs">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-4 shadow-2xl border border-slate-200">
        <div className="border-b border-slate-100 pb-3">
          <h4 className="text-lg font-black text-slate-900">Create Discount Coupon</h4>
          <p className="text-slate-500">Generate a promo code for checkout admissions</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            required
            placeholder="Coupon Code (e.g. BIMPRO2026)"
            value={form.code}
            onChange={(e) => updateField("code", e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none uppercase font-mono"
          />

          <div className="grid grid-cols-2 gap-2.5">
            <select
              value={form.discountType}
              onChange={(e) => updateField("discountType", e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none bg-white"
            >
              <option value="percentage">Percentage (% OFF)</option>
              <option value="flat">Flat Amount (৳ BDT)</option>
            </select>
            <input
              type="number"
              required
              placeholder="Discount Value"
              value={form.discountValue}
              onChange={(e) => updateField("discountValue", e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <input
              type="date"
              required
              value={form.expiryDate}
              onChange={(e) => updateField("expiryDate", e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none"
            />
            <input
              type="number"
              required
              placeholder="Usage Limit"
              value={form.usageLimit}
              onChange={(e) => updateField("usageLimit", e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none font-mono"
            />
          </div>

          <select
            value={form.applicableCourse}
            onChange={(e) => updateField("applicableCourse", e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#0077b6] focus:outline-none bg-white"
          >
            <option value="All Courses">All BIM Courses</option>
            <option value="Revit Combo Pro">Revit Combo Pro</option>
            <option value="Tekla Steel Detailing">Tekla Steel Detailing</option>
            <option value="Revit Architecture + Structure">Revit Architecture + Structure</option>
          </select>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#002b5b] hover:bg-[#001830] text-white font-bold shadow-md cursor-pointer"
            >
              Create Coupon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
