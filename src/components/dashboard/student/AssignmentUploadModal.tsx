"use client";

import React from "react";
import { X } from "lucide-react";

interface AssignmentUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssignmentUploadModal({
  isOpen,
  onClose,
}: AssignmentUploadModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 space-y-5 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-base font-bold text-slate-900">
            Upload Assignment (.rvt / .dwg / .zip)
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
            alert("Assignment Submitted Successfully!");
          }}
          className="space-y-4 text-sm"
        >
          <input
            type="file"
            required
            className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-sky-50 file:text-[#0077b6]"
          />
          <textarea
            rows={3}
            placeholder="Notes for instructor (optional)..."
            className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#0077b6] focus:outline-none"
          />
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-600 font-bold text-sm hover:bg-slate-200 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#0077b6] text-white font-bold text-sm hover:bg-[#005a8c] cursor-pointer shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
