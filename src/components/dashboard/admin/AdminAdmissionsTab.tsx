"use client";

import React, { useState } from "react";
import { CreditCard, Search } from "lucide-react";
import { PendingApproval } from "@/types/dashboard";
import AdminPaymentQueueTable from "./AdminPaymentQueueTable";

interface AdminAdmissionsTabProps {
  pendingApprovals: PendingApproval[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

export default function AdminAdmissionsTab({
  pendingApprovals,
  onApprove,
  onReject,
}: AdminAdmissionsTabProps) {
  const [filter, setFilter] = useState<"All" | "Pending" | "Approved" | "Rejected">("All");
  const [search, setSearch] = useState("");

  const filtered = pendingApprovals.filter((item) => {
    const matchesFilter = filter === "All" ? true : item.status === filter;
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search) ||
      item.method.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#0077b6]" />
            <span>Admissions & Payment Verification Queue</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Verify manual bKash, Nagad, Rocket TrxID receipts and activate student course access
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          {(["All", "Pending", "Approved", "Rejected"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === tab
                  ? "bg-[#002b5b] text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Filter by student name, phone or TrxID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:border-[#0077b6] focus:outline-none"
        />
      </div>

      {/* Table Subcomponent */}
      <AdminPaymentQueueTable
        pendingApprovals={filtered}
        onApprove={onApprove}
        onReject={onReject}
      />
    </div>
  );
}
