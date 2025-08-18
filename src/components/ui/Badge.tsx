import React from "react";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm text-blue-700 bg-blue-50">
      {children}
    </span>
  );
}