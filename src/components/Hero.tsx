import type { RefObject } from "react";
import { BASE } from "../utils/baseUrl";
import { Badge } from "./ui/Badge";

export type HeroProps = {
  sentinelRef: RefObject<HTMLDivElement>;
};

export default function Hero({ sentinelRef }: HeroProps) {
  return (
    <section
      id="top"
      className="relative grid min-h-[72vh] place-items-center overflow-hidden border-b border-gray-100 text-white md:min-h-[88vh]"
    >
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="absolute -top-px left-0 h-px w-px"
      />

      <div aria-hidden className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 scale-[1.02] will-change-transform"
          style={{
            backgroundImage: `url("${BASE}hero-industrial-1920.webp")`,
            backgroundPosition: "center right",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(20,39,51,0.64)_8%,rgba(52,82,104,0.44)_48%,rgba(84,125,159,0.20)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_34%,rgba(20,39,51,0.32)_100%)]" />
      </div>

      <div className="relative z-10 grid w-[min(1100px,92vw)] gap-4 px-6 py-10 md:gap-5 md:px-12 md:py-16">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <Badge>Projekčně-inženýrská kancelář</Badge>
          <Badge>od roku 1992</Badge>
          <Badge>Kralupy nad Vltavou</Badge>
        </div>

        <h1 className="max-w-[15ch] text-[clamp(36px,5.6vw,66px)] font-extrabold leading-[1.02] text-white drop-shadow-[0_8px_24px_rgba(20,39,51,0.32)]">
          Projekční a konstrukční kancelář
        </h1>

        <div className="grid max-w-[66ch] gap-2 text-[clamp(18px,1.6vw,24px)] font-medium leading-[1.45] text-white/95 drop-shadow-[0_2px_10px_rgba(20,39,51,0.22)]">
          <p>Projektová a konstrukční dokumentace pro průmysl</p>
          <p>Externí technická spolupráce pro firmy a provozy</p>
        </div>

        <div className="flex flex-wrap gap-4 pt-3">
          <a
            href="#poptavka"
            className="rounded-full border border-[rgba(255,255,255,0.18)] bg-[var(--color-brand-500)] px-7 py-3 text-lg font-semibold text-white shadow-[0_16px_32px_rgba(20,39,51,0.18)] transition hover:bg-[var(--color-brand-600)] hover:shadow-[0_20px_36px_rgba(20,39,51,0.24)]"
          >
            Nezávazná poptávka
          </a>
          <a
            href="#sluzby"
            className="rounded-full border border-white/35 bg-white/12 px-7 py-3 text-lg font-semibold text-white transition hover:border-white/55 hover:bg-white/18"
          >
            Naše služby
          </a>
        </div>
      </div>
    </section>
  );
}
