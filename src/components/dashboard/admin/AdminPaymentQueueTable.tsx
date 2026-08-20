"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { PendingApproval } from "@/types/dashboard";

interface AdminPaymentQueueTableProps {
  pendingApprovals: PendingApproval[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

export default function AdminPaymentQueueTable({
  pendingApprovals,
  onApprove,
  onReject,
}: AdminPaymentQueueTableProps) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-5 font-sans">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">Payment Verification Queue</h3>
          <p className="text-xs sm:text-sm text-slate-500">Review bKash / Nagad TrxIDs and confirm student admissions</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
          {pendingApprovals.filter((a) => a.status === "Pending").length} Pending
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-700 border-y border-slate-200">
            <tr>
              <th className="p-3.5">Student</th>
              <th className="p-3.5">Course</th>
              <th className="p-3.5">Payment TrxID</th>
              <th className="p-3.5">Fee</th>
              <th className="p-3.5">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {pendingApprovals.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="p-3.5 font-semibold text-slate-900">
                  <div>{item.name}</div>
                  <div className="text-xs text-slate-500 font-mono">{item.phone}</div>
                </td>
                <td className="p-3.5 text-slate-700">{item.course}</td>
                <td className="p-3.5 font-mono text-[#0077b6] font-bold">{item.method}</td>
                <td className="p-3.5 font-bold text-slate-900">{item.amount}</td>
                <td className="p-3.5">
                  {item.status === "Approved" ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-bold">
                      <CheckCircle2 className="w-4 h-4" /> Approved
                    </span>
                  ) : item.status === "Rejected" ? (
                    <span className="text-rose-600 font-bold">Rejected</span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onApprove(item.id)}
                        className="px-4 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm cursor-pointer hover:bg-emerald-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => onReject(item.id)}
                        className="px-4 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm cursor-pointer hover:bg-slate-200"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
