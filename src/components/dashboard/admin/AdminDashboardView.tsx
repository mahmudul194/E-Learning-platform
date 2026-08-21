"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { PendingApproval } from "@/types/dashboard";
import AdminPaymentQueueTable from "./AdminPaymentQueueTable";

export default function AdminDashboardView() {
  const [pendingApprovals, setPendingApprovals] = useState<PendingApproval[]>([
    {
      id: "ADM-901",
      name: "Md. Tanvir Ahmed",
      course: "Professional Tekla Steel Detailing",
      method: "bKash (TrxID: 9J87K65LM4)",
      amount: "৳4,000 (1st Installment)",
      phone: "+880 1711-223344",
      status: "Pending",
    },
    {
      id: "ADM-902",
      name: "Sabbir Hossain",
      course: "Revit Architecture + Structure",
      method: "Nagad (TrxID: 8K72M90P11)",
      amount: "৳4,000 (1st Installment)",
      phone: "+880 1822-334455",
      status: "Pending",
    },
    {
      id: "ADM-903",
      name: "Engr. Farhana Yesmin",
      course: "Complete BIM Combo (Revit+Tekla+Navisworks)",
      method: "SSLCommerz (Card)",
      amount: "৳12,000 (Full Fee)",
      phone: "+880 1933-445566",
      status: "Approved",
    },
  ]);

  const handleApprove = (id: string) => {
    setPendingApprovals((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: "Approved" } : item))
    );
  };

  const handleReject = (id: string) => {
    setPendingApprovals((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: "Rejected" } : item))
    );
  };

  return (
    <div className="animate-fade-in-up space-y-8 font-sans">
      {/* Admin Banner */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Super Admin Portal</span>
          <h2 className="text-2xl font-bold text-slate-900">BIM Build BD Control Center</h2>
          <p className="text-sm text-slate-500">Revenue, Admission Queue & Student Reconciliation</p>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 cursor-pointer shadow-md">
          <Plus className="w-4 h-4" />
          <span>Create Batch</span>
        </button>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-1.5">
          <span className="text-xs sm:text-sm text-slate-500 font-bold">Monthly Revenue</span>
          <div className="text-2xl sm:text-3xl font-black text-emerald-600">৳4,85,000</div>
          <span className="text-xs text-emerald-600 font-semibold">+12.5% Growth</span>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-1.5">
          <span className="text-xs sm:text-sm text-slate-500 font-bold">Total Students</span>
          <div className="text-2xl sm:text-3xl font-black text-slate-900">5,240</div>
          <span className="text-xs text-blue-600 font-semibold">182 New this month</span>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-1.5">
          <span className="text-xs sm:text-sm text-slate-500 font-bold">Active Batches</span>
          <div className="text-2xl sm:text-3xl font-black text-amber-600">6 Batches</div>
          <span className="text-xs text-slate-500 font-medium">Revit, Tekla, MEP</span>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-1.5">
          <span className="text-xs sm:text-sm text-slate-500 font-bold">Certificates</span>
          <div className="text-2xl sm:text-3xl font-black text-purple-600">3,820</div>
          <span className="text-xs text-purple-600 font-semibold">QR Verified</span>
        </div>
      </div>

      {/* Admission & Payment Verification Queue Table */}
      <AdminPaymentQueueTable
        pendingApprovals={pendingApprovals}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
}
