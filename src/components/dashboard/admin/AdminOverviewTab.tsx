"use client";

import React from "react";
import { Plus, ArrowRight, ShieldCheck, CreditCard, Users } from "lucide-react";
import { PendingApproval } from "@/types/dashboard";
import AdminMetricsGrid from "./AdminMetricsGrid";
import AdminPaymentQueueTable from "./AdminPaymentQueueTable";

interface AdminOverviewTabProps {
  pendingApprovals: PendingApproval[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onNavigateToAdmissions: () => void;
  onOpenCreateBatch: () => void;
}

export default function AdminOverviewTab({
  pendingApprovals,
  onApprove,
  onReject,
  onNavigateToAdmissions,
  onOpenCreateBatch,
}: AdminOverviewTabProps) {
  const pendingCount = pendingApprovals.filter((p) => p.status === "Pending").length;

  return (
    <div className="space-y-8 font-sans">
      {/* Super Admin Control Banner */}
      <div className="bg-gradient-to-r from-[#002b5b] via-[#003b7a] to-[#0077b6] rounded-3xl text-white p-7 sm:p-9 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-sky-200 text-xs font-bold backdrop-blur-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Super Admin & Financial Command Center</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black leading-tight">
            BIM Build BD Platform Management
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 font-medium">
            You have <strong className="text-amber-300 font-bold">{pendingCount} Pending TrxID Approvals</strong> requiring verification today.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCreateBatch}
            className="px-6 py-3 rounded-2xl bg-white text-[#002b5b] hover:bg-slate-100 font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all cursor-pointer hover:scale-105"
          >
            <Plus className="w-4 h-4 text-[#0077b6]" />
            <span>Create Batch</span>
          </button>
        </div>
      </div>

      {/* 4 KPI Metrics */}
      <AdminMetricsGrid />

      {/* Quick Action: Pending Admission Queue */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#0077b6]" />
            <span>Admission Payment Queue Snapshot</span>
          </h3>
          <button
            onClick={onNavigateToAdmissions}
            className="text-xs text-[#0077b6] hover:underline font-bold flex items-center gap-1 cursor-pointer"
          >
            <span>Full Admission Queue ({pendingApprovals.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <AdminPaymentQueueTable
          pendingApprovals={pendingApprovals}
          onApprove={onApprove}
          onReject={onReject}
        />
      </div>
    </div>
  );
}
