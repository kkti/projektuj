import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--color-brand-200)] bg-[rgba(239,245,251,0.88)] px-3 py-1 text-sm font-medium text-[var(--color-brand-700)] shadow-sm backdrop-blur-sm">
      {children}
    </span>
  );
}
