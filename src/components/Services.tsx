import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import {
  IconApproval,
  IconConstruction,
  IconConsulting,
  IconDigitization,
  IconStudy,
  IconTechProject,
} from "./icons";

type ServiceItem = {
  id: string;
  label: string;
  teaser: string;
  details: string[];
  Icon: () => ReactElement;
};

const ITEMS: ReadonlyArray<ServiceItem> = [
  {
    id: "projection",
    label: "Projekční činnost",
    teaser: "Dokumentace technologických zařízení od studie až po DSPS.",
    details: [
      "DSP – dokumentace pro stavební povolení",
      "DPS – dokumentace pro provedení stavby",
      "DSPS – dokumentace skutečného provedení stavby",
      "Koordinace a zapracování požadavků investora",
    ],
    Icon: IconStudy,
  },
  {
    id: "permits",
    label: "Inženýrská činnost + zajištění stavebního povolení",
    teaser: "Kompletní vyřízení povolení a jednání s úřady.",
    details: [
      "Projednání se stavebním úřadem",
      "Zajištění stanovisek dotčených orgánů",
      "Jednání se správci sítí",
      "Kompletní podání žádosti",
      "Vedení procesu až k vydání stavebního povolení",
    ],
    Icon: IconApproval,
  },
  {
    id: "technology",
    label: "Konstrukční a technologická řešení",
    teaser: "Návrh technologických zařízení a potrubních systémů.",
    details: [
      "Návrh technologických zařízení",
      "Návrh potrubních tras a dimenzí",
      "Technické řešení napojení",
      "Spolupráce na výrobním provedení",
      "Optimalizace funkčnosti a provozu",
    ],
    Icon: IconTechProject,
  },
  {
    id: "external-support",
    label: "Externí technická spolupráce",
    teaser: "Externí podpora pro projekční kanceláře a firmy.",
    details: [
      "Externí technická kapacita dle potřeby",
      "Spolupráce s projekčními kancelářemi",
      "Podpora investora / výrobního podniku",
      "Koordinace technických řešení",
      "Práce na zakázku i dlouhodobě",
    ],
    Icon: IconConsulting,
  },
  {
    id: "digitization",
    label: "Převod dokumentace do digitální formy",
    teaser: "Převod a úpravy dokumentace do digitální podoby.",
    details: [
      "Překreslení staré dokumentace",
      "Úpravy a aktualizace výkresů",
    ],
    Icon: IconDigitization,
  },
  {
    id: "steel-structures",
    label: "Ocelové konstrukce",
    teaser: "Výrobní dokumentace ocelových konstrukcí.",
    details: [
      "Návrh a zpracování výrobní dokumentace",
      "Detailní konstrukční řešení",
      "Výkresy dílců a sestav",
      "Podklady pro výrobu a montáž",
      "Statický výpočet dle potřeby",
    ],
    Icon: IconConstruction,
  },
];

export default function Services() {
  const [openCardId, setOpenCardId] = useState<string | null>(null);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updatePointerMode = () => {
      setIsCoarsePointer(mediaQuery.matches);
    };

    updatePointerMode();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePointerMode);
      return () => mediaQuery.removeEventListener("change", updatePointerMode);
    }

    mediaQuery.addListener(updatePointerMode);
    return () => mediaQuery.removeListener(updatePointerMode);
  }, []);

  return (
    <section id="sluzby" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <header className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-tight">Služby</h2>
        <p className="mt-3 text-gray-700">
          Poskytuji externí technickou spolupráci v oblasti projekce,
          konstrukce a technologických řešení pro průmyslové a výrobní provozy.
          Spolupracuji s investory, projekčními kancelářemi i výrobními podniky
          jednorázově i dlouhodobě dle potřeb projektu.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ id, label, teaser, details, Icon }) => {
          const isOpen = openCardId === id;

          return (
            <article
              key={id}
              className={`service-card ${isOpen ? "is-open" : ""}`}
            >
              <button
                type="button"
                className="w-full rounded-[1.6rem] text-left focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                aria-expanded={isOpen}
                aria-label={`${label}. ${isOpen ? "Skrýt detail" : "Zobrazit detail"}`}
                onClick={() => {
                  if (!isCoarsePointer) {
                    return;
                  }

                  setOpenCardId((currentId) => (currentId === id ? null : id));
                }}
              >
                <div className="service-card-inner">
                  <div className="service-card-face overflow-hidden rounded-[1.6rem] border border-[var(--color-brand-100)] bg-[linear-gradient(160deg,rgba(239,245,251,0.98),rgba(216,230,242,0.94))] p-6 shadow-[0_18px_30px_rgba(20,39,51,0.08)]">
                    <div className="flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-brand-500),var(--color-brand-700))] text-white shadow-[0_12px_24px_rgba(52,82,104,0.22)]">
                          <Icon />
                        </div>
                        <span className="rounded-full border border-[var(--color-brand-200)] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-600)]">
                          Více
                        </span>
                      </div>

                      <div className="mt-8 space-y-4">
                        <h3 className="text-xl font-semibold leading-snug text-slate-900">
                          {label}
                        </h3>
                        <p className="text-sm leading-6 text-slate-600">{teaser}</p>
                      </div>
                    </div>
                  </div>

                  <div className="service-card-face service-card-back overflow-hidden rounded-[1.6rem] border border-[var(--color-brand-700)] bg-[linear-gradient(160deg,var(--color-brand-800),var(--color-brand-900))] p-6 text-white shadow-[0_22px_34px_rgba(20,39,51,0.18)]">
                    <div className="flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold leading-snug">
                            {label}
                          </h3>
                        </div>
                        {isCoarsePointer ? (
                          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                            Zavřít
                          </span>
                        ) : null}
                      </div>

                      <ul className="mt-2.5 grid gap-0 text-[0.95rem] leading-4.5 text-white/90">
                        {details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 border-b border-white/10 px-1 py-2.5 last:border-b-0"
                          >
                            <span className="mt-[0.45rem] inline-block h-2 w-2 shrink-0 rounded-full bg-white/75" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
