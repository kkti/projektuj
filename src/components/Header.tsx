// components/Header.tsx
import React from "react";
import { BASE } from "../utils/baseUrl";

export default function Header({ onHero }: { onHero: boolean }) {
  const headerClass = [
    "sticky top-0 z-50 h-14 py-0 overflow-hidden",
    "transition-colors duration-300 backdrop-blur-md border-b border-black/10",
    onHero ? "bg-white/95" : "bg-white shadow-md",
  ].join(" ");

  const linkClass = "text-slate-900 hover:text-slate-700 leading-none";
  const ctaClass =
    "inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 leading-none";

  return (
    <header className={headerClass}>
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={`${BASE}logo-pp-horizontal-transparent.png`}
              alt="PP Projekce Pilař, s.r.o."
              className="h-7 w-auto"
              loading="eager"
              fetchPriority="high"
            />
            <span className="sr-only">PP Projekce Pilař, s.r.o.</span>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-[15px] font-medium leading-none">
            <a href="#sluzby" className={linkClass}>Služby</a>
            <a href="#reference" className={linkClass}>Reference</a>
            <a href="#o-nas" className={linkClass}>O nás</a>
            <a href="#kontakt" className={linkClass}>Kontakt</a>
            <a href="#poptavka" className={ctaClass + " leading-none py-2"}>Poptat projekt</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
