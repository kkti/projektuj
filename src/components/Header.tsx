import React, { useEffect, useState } from "react";

/** DŮLEŽITÉ: BASE zajistí správnou cestu k assetům na GitHub Pages (/projektuj/) */
const BASE = import.meta.env.BASE_URL;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll(); // inicializace při načtení (pro případ reloadu uprostřed stránky)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        "backdrop-blur-md border-b border-black/5",
        solid ? "bg-white/90 shadow-md" : "bg-white/75",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href={BASE} className="flex items-center gap-3">
            {/* Nahraj do /public nebo /docs kořenové složky soubor logo.svg s průhledným pozadím */}
            <img
              src={`${BASE}logo.svg`}
              alt="Projektuj.cz"
              className="h-8 w-auto"
              fetchPriority="high"
            />
            <span className="sr-only">Projektuj.cz</span>
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-900">
            <a href="#sluzby" className="hover:text-slate-700">Služby</a>
            <a href="#reference" className="hover:text-slate-700">Reference</a>
            <a href="#o-nas" className="hover:text-slate-700">O&nbsp;nás</a>
            <a href="#kontakt" className="hover:text-slate-700">Kontakt</a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Otevřít menu"
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/5">
          <nav className="px-4 py-3 space-y-2 text-slate-900">
            <a href="#sluzby" onClick={() => setMenuOpen(false)} className="block">Služby</a>
            <a href="#reference" onClick={() => setMenuOpen(false)} className="block">Reference</a>
            <a href="#o-nas" onClick={() => setMenuOpen(false)} className="block">O&nbsp;nás</a>
            <a href="#kontakt" onClick={() => setMenuOpen(false)} className="block">Kontakt</a>
          </nav>
        </div>
      )}
    </header>
  );
}
