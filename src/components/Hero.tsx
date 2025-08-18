import React from "react";
import { Badge } from "./ui/Badge";
import { BASE } from "../utils/baseUrl";

export type HeroProps = {
  /** ref sloužící jako sentinel pro IntersectionObserver v App.tsx */
  sentinelRef: React.RefObject<HTMLDivElement>;
};

export default function Hero({ sentinelRef }: HeroProps) {
  return (
    <section className="relative grid min-h-[72vh] md:min-h-[88vh] place-items-center overflow-hidden text-white border-b border-gray-100">
      {/* Sentinel pro IntersectionObserver (ovládá vzhled headeru) */}
      <div ref={sentinelRef} aria-hidden="true" className="absolute -top-px left-0 h-px w-px" />

      {/* Pozadí */}
      <div aria-hidden className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 will-change-transform scale-[1.02]"
          style={{
            backgroundImage: `url("${BASE}hero-industrial-1920.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617D9] via-[#02061780] to-[#02061759]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617D9]" />
      </div>

      {/* Obsah */}
      <div className="relative z-10 w-[min(1100px,92vw)] p-6 md:p-12 grid gap-3 md:gap-4">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge>Projekčně-inženýrská kancelář</Badge>
          <Badge>od roku 1992</Badge>
          <Badge>Kralupy nad Vltavou</Badge>
        </div>

        <h1 className="text-[clamp(32px,5.2vw,56px)] leading-[1.05] font-extrabold">
          Projektová a inženýrská činnost na míru
        </h1>

        <p className="text-[clamp(16px,1.4vw,20px)] opacity-95 max-w-[70ch]">
          Od studie přes povolení až po realizaci a kolaudaci — váš projekt pod kontrolou zkušeného týmu.
        </p>

        <div className="flex flex-wrap gap-4 pt-1">
          <a href="#poptavka" className="rounded-full bg-sky-500 text-[#001018] px-7 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition">
            Nezávazná poptávka
          </a>
          <a href="#sluzby" className="rounded-full border border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/15 text-white px-7 py-3 text-lg font-semibold transition">
            Naše služby
          </a>
        </div>
      </div>
    </section>
  );
}
