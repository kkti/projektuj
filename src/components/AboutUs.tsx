// src/components/AboutUs.tsx
import React from "react";

const IconFactory = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M3 21h18M4 21V9l4-2v4l4-2v4l4-2v10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconClipboard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M9 4h6a2 2 0 0 1 2 2h2v14H5V6h2a2 2 0 0 1 2-2Zm0 0V3h6v1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 10h8M8 14h8M8 18h5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconShield = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 3l7 3v6c0 4.418-3.134 8.418-7 9-3.866-.582-7-4.582-7-9V6l7-3Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconTools = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M7 7l3 3M3 21l6-6M14 3l7 7-4 4-7-7 4-4Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function AboutUs() {
  return (
    <section id="o-nas" className="border-y border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 relative z-10">
        {/* Hlavička sekce (bez horního CTA) */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">O nás</h2>
            <p className="mt-3 text-gray-700 max-w-3xl">
              PP Projekce Pilař, s.r.o. poskytuje kompletní projektové služby od studie až po schválení a uvedení do provozu.
              Zaměřujeme se na technologické celky v&nbsp;chemickém, potravinářském a&nbsp;papírenském průmyslu s důrazem na
              kvalitu, bezpečnost a hospodárnost řešení.
            </p>
          </div>
        </div>

        {/* Dlaždice */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <IconShield className="h-5 w-5" />, k: "Tradice", v: "Od roku 2004", d: "Stabilní tým a dlouhodobá praxe." },
            { icon: <IconFactory className="h-5 w-5" />, k: "Specializace", v: "Technologické celky", d: "Chemie • potravinářství • papírny." },
            { icon: <IconClipboard className="h-5 w-5" />, k: "Rozsah služeb", v: "Studie → schválení", d: "Koncepce, dokumentace, inženýring." },
            { icon: <IconTools className="h-5 w-5" />, k: "Nástroje", v: "CAD & 3D", d: "AutoCAD, MicroStation, SolidWorks…" },
          ].map((card, i) => (
            <article
              key={i}
              className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all h-full"
            >
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow">
                    {card.icon}
                  </div>
                  <div className="text-sm font-semibold text-gray-900">{card.k}</div>
                </div>
                <div className="mt-3 text-xl font-semibold text-gray-900">{card.v}</div>
                <p className="mt-1 text-gray-700">{card.d}</p>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-sky-400 via-blue-600 to-blue-800 opacity-70 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* Dva panely */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            <div className="p-8">
              <h3 className="text-base font-semibold text-gray-900">Co děláme</h3>
              <ul className="mt-4 space-y-3 text-gray-700 list-disc list-inside">
                <li>Studie proveditelnosti a koncepční návrhy</li>
                <li>Technologické a stavební projektování</li>
                <li>Kompletní projektová dokumentace a autorský dozor</li>
                <li>Koordinace profesí a inženýrská činnost</li>
              </ul>
            </div>
          </article>

          <article className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            <div className="p-8">
              <h3 className="text-base font-semibold text-gray-900">Jak pracujeme</h3>
              <ul className="mt-4 space-y-3 text-gray-700 list-disc list-inside">
                <li>Analýza potřeb a návrh optimálního řešení</li>
                <li>Komunikace s úřady, povolovací procesy a schvalování</li>
                <li>Důraz na bezpečnost, kvalitu a ekonomiku</li>
                <li>Transparentní harmonogram a reporting</li>
              </ul>
              {/* Spodní CTA v panelu nechávám – pokud chceš i to odstranit, řekni */}
              <div className="mt-6">
                <a
                  href="#poptavka"
                  className="inline-flex items-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800"
                >
                  Poptat projekt
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
