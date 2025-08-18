import React from "react";
import {
  IconStudy,
  IconTechProject,
  IconApproval,
  IconTenderDocs,
  IconAuthorSupervision,
  IconConsulting,
  IconImportIssue,
  IconDigitization,
  IconConstruction,
} from "./icons";

type Item = { label: string; Icon: React.ComponentType };

const ITEMS: Item[] = [
  { label: "komplexní zpracování studií", Icon: IconStudy },
  { label: "vypracování technologických projektů", Icon: IconTechProject },
  { label: "projednání a schválení projektů orgány státní správy", Icon: IconApproval },
  { label: "přípravu dokumentace pro nabídková a schvalovací řízení", Icon: IconTenderDocs },
  { label: "autorský dozor a technickou spolupráci při realizaci zakázek", Icon: IconAuthorSupervision },
  { label: "konzultační činnost", Icon: IconConsulting },
  { label: "řešení problému s dovozem již existujících zařízení", Icon: IconImportIssue },
  { label: "převedení dokumentace do digitální formy", Icon: IconDigitization },
  { label: "konstrukční činnost", Icon: IconConstruction },
];

export default function Services() {
  const tileClass =
    "group h-full p-6 rounded-2xl border border-sky-100 " +
    "bg-gradient-to-br from-sky-50 via-sky-100 to-blue-50 " +
    "shadow-sm hover:shadow-md transition-shadow " +
    "hover:from-sky-100 hover:via-sky-200 hover:to-blue-100";

  return (
    <section id="sluzby" className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <header className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight">Služby</h2>
        <p className="mt-3 text-gray-700">
          Kompletní projekčně-inženýrský servis od studií a technologických projektů,
          přes projednání se státní správou a přípravu dokumentace, až po autorský dozor,
          konzultace a konstrukční činnost.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {ITEMS.map(({ label, Icon }, i) => (
          <article key={`${i}-${label}`} className={tileClass}>
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                <Icon />
              </div>
              <h3 className="text-base md:text-lg font-semibold leading-snug">{label}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
