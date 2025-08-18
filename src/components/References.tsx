import React from "react";
import { ReferenceThumb } from "./icons";

export default function References() {
  const items = [
    { title: "Bytový dům – DSP & TDI", meta: "Praha, 2024" },
    { title: "Rekonstrukce školy – DUR/DSP", meta: "Středočeský kraj, 2023" },
    { title: "Rodinný dům – studie & DSP", meta: "Mělník, 2022" },
    { title: "Polyfunkční objekt – DPS", meta: "Praha-západ, 2022" },
    { title: "Hasičská zbrojnice – DSP", meta: "Mělnicko, 2021" },
    { title: "Administrativní budova – TDI", meta: "Praha, 2021" },
  ];

  return (
    <section id="reference" className="border-y border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 relative z-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Vybrané reference</h2>
            <p className="mt-3 text-gray-700">Ukázka projektů rezidenčních i občanských staveb. Kompletní seznam na vyžádání.</p>
          </div>
          <a href="#poptavka" className="hidden md:inline-flex rounded-full border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 bg-white">
            Chci podobný projekt
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {items.map((r, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <ReferenceThumb />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{r.title}</h3>
                <p className="text-sm text-gray-600">{r.meta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-semibold mb-5">Galerie projektů</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-200 to-gray-100" />
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-500">Pošli mi odkazy/fotky a nahradím placeholdery reálnými snímky referencí.</p>
        </div>
      </div>
    </section>
  );
}
