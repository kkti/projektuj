// src/components/Header.tsx
import React from "react";
import { BASE } from "../utils/baseUrl";

export default function Header({ onHero }: { onHero: boolean }) {
  const headerClass = [
    "sticky top-0 z-50 h-14 py-0 overflow-hidden",
    "transition-colors duration-300 border-b border-black/10",
    onHero ? "backdrop-blur-0" : "backdrop-blur-sm",
    onHero
      ? "bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600"
      : "bg-gradient-to-r from-sky-500 via-blue-600 to-blue-800 shadow-md",
  ].join(" ");

  const linkClass = "text-white hover:text-slate-100 leading-none";
  const ctaClass =
    "inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-slate-100 leading-none";

  const logoCapsuleBase =
    "flex items-center gap-3 rounded-lg px-2.5 py-1.5 ring-1 transition-colors";
  const logoCapsuleVariant = onHero ? "bg-white/0 ring-white/0" : "bg-white/30 ring-white/50";

  return (
    <header className={headerClass}>
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          <div className={`${logoCapsuleBase} ${logoCapsuleVariant}`}>
            <img
              src={`${BASE}logo-pp-horizontal-transparent.png`}
              alt="PP Projekce Pilař, s.r.o."
              className="block h-7 w-auto"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
            <span className="sr-only">PP Projekce Pilař, s.r.o.</span>
          </div>

          {/* ⬇️ O NÁS je první položka v navigaci */}
          <nav className="hidden md:flex items-center gap-5 text-[15px] font-medium leading-none">
            <a href="#o-nas" className={linkClass}>O nás</a>
            <a href="#sluzby" className={linkClass}>Služby</a>
            <a href="#reference" className={linkClass}>Reference</a>
            <a href="#kontakt" className={linkClass}>Kontakt</a>
            <a href="#poptavka" className={ctaClass + " leading-none py-2"}>Poptat projekt</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
