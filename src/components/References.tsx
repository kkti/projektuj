import React from "react";
import { BASE } from "../utils/baseUrl";

type RefItem = {
  title: string;
  meta: string;
  img: string;   // relativní URL do /public
  alt: string;
};

const items: RefItem[] = [
  {
    title: "Zařízení pro vyhřívání a chlazení extruderu ZSK 130",
    meta: "Kaučuk a.s.",
    img: `${BASE}ref-extruder.webp`,
    alt: "Průmyslový extruder s topnými pásy a chladicími okruhy v hale",
  },
  {
    title: "Konsignační sklad",
    meta: "Dunajská Streda",
    img: `${BASE}ref-warehouse.webp`,
    alt: "Moderní sklad s regály a vysokozdvižným vozíkem",
  },
  {
    title: "Zvýšení bezpečnosti skladu chloru",
    meta: "Spolana a.s., Neratovice",
    img: `${BASE}ref-chlor-storage.webp`,
    alt: "Sklad tlakových lahví s bezpečnostními prvky a značením",
  },
  {
    title: "Výměník VT4B",
    meta: "Spolana a.s., Neratovice",
    img: `${BASE}ref-heat-exchanger.webp`,
    alt: "Průmyslový deskový/ trubkový výměník tepla s potrubními tahy",
  },
  {
    title: "Generální rekonstrukce vakuových rozvodů v obj. B 5170",
    meta: "NeraPharm, spol. s r.o.",
    img: `${BASE}ref-vacuum-piping.webp`,
    alt: "Nerezové vakuové rozvody v technologické chodbě",
  },
  {
    title: "Výměna potrubí na mostě III., IV.",
    meta: "Kaučuk a.s.",
    img: `${BASE}ref-bridge-pipe.webp`,
    alt: "Potrubí vedené přes mostní konstrukci s úchyty",
  },
];

export default function References() {
  return (
    <section id="reference" className="border-y border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 relative z-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Vybrané reference</h2>
            <p className="mt-3 text-gray-700">
              Ukázky projektů z průmyslu – procesní technologie, sklady, bezpečnost,
              potrubní trasy a podpůrné systémy. Kompletní seznam na vyžádání.
            </p>
          </div>
          {/* CTA bylo odstraněno */}
        </div>

        {/* Nové „photo cards“ */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {items.map((r, i) => (
            <article
              key={i}
              className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col"
            >
              <div className="relative aspect-[16/9]">
                <img
                  src={r.img}
                  alt={r.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* tmavý přechod pro čitelnost */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                {/* pilulka s meta (lokalita/klient) */}
                <div className="absolute left-4 bottom-3">
                  <span className="inline-flex items-center rounded-full bg-white/90 text-slate-900 text-xs font-medium px-2.5 py-1 ring-1 ring-black/5">
                    {r.meta}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg leading-snug">{r.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
