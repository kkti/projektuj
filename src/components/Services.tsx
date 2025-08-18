import React from "react";
import { ServiceIconDoc, ServiceIconEngineer, ServiceIconPassport, ServiceIconConsult } from "./icons";

export default function Services() {
  return (
    <section id="sluzby" className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-bold tracking-tight">Služby</h2>
          <p className="mt-3 text-gray-700">
            Kompletní servis pro investory, developery i veřejný sektor. Přehled klíčových činností:
          </p>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          <article className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-3">
              <ServiceIconDoc />
              <h3 className="text-xl font-semibold">Projektová dokumentace</h3>
            </div>
            <p className="mt-3 text-gray-700">Studie, DUR, DSP, DPS. Koordinace profesí a příprava podkladů pro řízení.</p>
          </article>
          <article className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-3">
              <ServiceIconEngineer />
              <h3 className="text-xl font-semibold">Inženýring</h3>
            </div>
            <p className="mt-3 text-gray-700">Stanoviska, povolení, komunikace s úřady a správci sítí, harmonogram a rozpočty.</p>
          </article>
          <article className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-3">
              <ServiceIconPassport />
              <h3 className="text-xl font-semibold">Pasporty a dokumentace skutečného provedení</h3>
            </div>
            <p className="mt-3 text-gray-700">Zaměření, pasporty staveb a aktualizace dokumentace.</p>
          </article>
          <article className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-3">
              <ServiceIconConsult />
              <h3 className="text-xl font-semibold">Konzultace a TDI</h3>
            </div>
            <p className="mt-3 text-gray-700">Technický dozor investora, BOZP koordinace, kontrola kvality a souladu smluv.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
