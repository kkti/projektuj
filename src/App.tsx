import React, { useEffect, useRef, useState } from "react";

/**
 * BASE resolver compatible with Vite **and** sandboxed envs where `import.meta.env` may be undefined.
 * Priority:
 *  1) import.meta.env.BASE_URL (Vite build-time value)
 *  2) <base href> from DOM (e.g., GitHub Pages)
 *  3) document.baseURI pathname
 *  4) fallback to '/'
 * Always returns a trailing slash.
 */
function ensureTrailingSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

function computeBaseUrl(env: any, baseHref: string | null, baseURI: string | null): string {
  const fromEnv = env?.BASE_URL;
  if (typeof fromEnv === "string" && fromEnv.length > 0) {
    return ensureTrailingSlash(fromEnv);
  }
  const href = baseHref ?? baseURI ?? "/";
  try {
    const url = new URL(href, (typeof window !== "undefined" ? window.location.origin : "http://localhost"));
    return ensureTrailingSlash(url.pathname || "/");
  } catch {
    return "/";
  }
}

function getBaseUrl(): string {
  // `import.meta` may be undefined outside of Vite; use optional chaining + any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const env = (import.meta as any)?.env;
  const baseTagHref = typeof document !== "undefined" ? document.querySelector("base")?.getAttribute("href") : null;
  const baseURI = typeof document !== "undefined" ? document.baseURI : null;
  return computeBaseUrl(env, baseTagHref, baseURI);
}

// ---- lightweight runtime tests (console assertions) ----
(() => {
  console.assert(ensureTrailingSlash("/foo") === "/foo/", "ensureTrailingSlash adds trailing slash");
  console.assert(ensureTrailingSlash("/bar/") === "/bar/", "ensureTrailingSlash keeps trailing slash");
  console.assert(computeBaseUrl({ BASE_URL: "/projektuj/" }, null, null) === "/projektuj/", "env wins");
  console.assert(computeBaseUrl(undefined, "/foo/", null) === "/foo/", "base href used when env missing");
  console.assert(computeBaseUrl(undefined, null, "http://example.com/app/") === "/app/", "baseURI pathname used");
  console.assert(computeBaseUrl(undefined, null, null) === "/", "fallback to root");
})();

/** DŮLEŽITÉ: BASE zaručí správnou cestu k obrázkům na GitHub Pages (/projektuj/) i v sandboxu */
const BASE = getBaseUrl();

/* --- Ikonky / ilustrace pro sekce --- */
const ServiceIconDoc = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <rect x="12" y="10" width="48" height="60" rx="8" fill="#E0F2FE" stroke="#0EA5E9"/>
    <line x1="24" y1="28" x2="56" y2="28" stroke="#0EA5E9" strokeWidth="3"/>
    <line x1="24" y1="38" x2="56" y2="38" stroke="#0EA5E9" strokeWidth="3"/>
    <line x1="24" y1="48" x2="46" y2="48" stroke="#0EA5E9" strokeWidth="3"/>
  </svg>
);
const ServiceIconEngineer = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <circle cx="28" cy="28" r="10" fill="#93C5FD" />
    <rect x="18" y="40" width="40" height="20" rx="6" fill="#2563EB" />
    <rect x="52" y="18" width="10" height="44" rx="2" fill="#1E3A8A" />
  </svg>
);
const ServiceIconPassport = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <rect x="14" y="16" width="52" height="48" rx="8" fill="#DBEAFE" stroke="#2563EB"/>
    <circle cx="40" cy="40" r="12" fill="none" stroke="#2563EB" strokeWidth="3"/>
    <line x1="28" y1="40" x2="52" y2="40" stroke="#2563EB" strokeWidth="3"/>
  </svg>
);
const ServiceIconConsult = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <rect x="10" y="24" width="60" height="30" rx="8" fill="#E5E7EB" />
    <rect x="14" y="18" width="24" height="20" rx="6" fill="#60A5FA" />
    <rect x="42" y="18" width="24" height="20" rx="6" fill="#93C5FD" />
  </svg>
);
const ReferenceThumb = () => (
  <svg viewBox="0 0 640 360" className="w-full h-40" aria-hidden="true">
    <defs>
      <linearGradient id="rgrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#E5E7EB" />
        <stop offset="100%" stopColor="#F3F4F6" />
      </linearGradient>
    </defs>
    <rect width="640" height="360" rx="14" fill="url(#rgrad)" />
    <rect x="70" y="160" width="220" height="120" rx="8" fill="#1F2937" />
    <rect x="300" y="120" width="180" height="160" rx="8" fill="#2563EB" />
  </svg>
);

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm text-blue-700 bg-blue-50">
      {children}
    </span>
  );
}

export default function App() {
  // === Přepínání vzhledu hlavičky (jsme / nejsme na hero) ===
  const [onHero, setOnHero] = useState(true);
  const heroSentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = heroSentinelRef.current;
    if (!el) return;
    const headerHeight = 56; // px (odpovídá h-14 níže)
    const obs = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting),
      { threshold: 0, rootMargin: `-${headerHeight}px 0px 0px 0px` }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Header: stále kompaktní výška 56 px (na hero 95% bílé + blur, po scrollu plná bílá)
  const headerClass = [
    "sticky top-0 z-50 h-14 py-0 overflow-hidden",
    "transition-colors duration-300 backdrop-blur-md border-b border-black/10",
    onHero ? "bg-white/95" : "bg-white shadow-md",
  ].join(" ");

  const linkClass = "text-slate-900 hover:text-slate-700 leading-none";
  const ctaClass =
    "inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 leading-none";

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Sticky header – kompaktní 56 px */}
      <header className={headerClass}>
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 h-full">
          <div className="flex h-full items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={`${BASE}logo-pp-horizontal-transparent.png`}
                alt="PP Projekce Pilař, s.r.o."
                className="h-7 w-auto"
                loading="eager"
                fetchPriority="high"
              />
              <span className="sr-only">PP Projekce Pilař, s.r.o.</span>
            </div>
            <nav className="hidden md:flex items-center gap-5 text-[15px] font-medium leading-none">
              <a href="#sluzby" className={linkClass}>Služby</a>
              <a href="#reference" className={linkClass}>Reference</a>
              <a href="#o-nas" className={linkClass}>O nás</a>
              <a href="#kontakt" className={linkClass}>Kontakt</a>
              <a href="#poptavka" className={ctaClass + " leading-none py-2"}>Poptat projekt</a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative grid min-h-[72vh] md:min-h-[88vh] place-items-center overflow-hidden text-white border-b border-gray-100">
        {/* Sentinel pro IntersectionObserver — úplně nahoře v hero */}
        <div ref={heroSentinelRef} aria-hidden="true" className="absolute -top-px left-0 h-px w-px" />

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
          {/* závoje pro čitelnost */}
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

      {/* SLUŽBY */}
      <section id="sluzby" className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold tracking-tight">Služby</h2>
            <p className="mt-3 text-gray-700">Kompletní servis pro investory, developery i veřejný sektor. Přehled klíčových činností:</p>
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

      {/* REFERENCE */}
      <section id="reference" className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 relative z-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Vybrané reference</h2>
              <p className="mt-3 text-gray-700">Ukázka projektů rezidenčních i občanských staveb. Kompletní seznam na vyžádání.</p>
            </div>
            <a href="#poptavka" className="hidden md:inline-flex rounded-full border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 bg-white">Chci podobný projekt</a>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { title: "Bytový dům – DSP & TDI", meta: "Praha, 2024" },
              { title: "Rekonstrukce školy – DUR/DSP", meta: "Středočeský kraj, 2023" },
              { title: "Rodinný dům – studie & DSP", meta: "Mělník, 2022" },
              { title: "Polyfunkční objekt – DPS", meta: "Praha-západ, 2022" },
              { title: "Hasičská zbrojnice – DSP", meta: "Mělnicko, 2021" },
              { title: "Administrativní budova – TDI", meta: "Praha, 2021" },
            ].map((r, i) => (
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
              {Array.from({length:8}).map((_,i)=> (
                <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-200 to-gray-100" />
              ))}
            </div>
            <p className="mt-3 text-sm text-gray-500">Pošli mi odkazy/fotky a nahradím placeholdery reálnými snímky referencí.</p>
          </div>
        </div>
      </section>

      {/* O NÁS */}
      <section id="o-nas" className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">O nás</h2>
            <p className="mt-4 text-gray-700">
              Jsme stabilní projekčně-inženýrská kancelář se sídlem v Kralupech nad Vltavou. Poskytujeme komplexní služby
              a věnujeme maximální péči každému projektu – od studie přes legislativní procesy až po realizaci.
            </p>
            <ul className="mt-6 space-y-3 text-gray-800">
              <li>• Dlouholeté zkušenosti a lokální znalost prostředí</li>
              <li>• Koordinace profesí (TZB, elektro, VZT, statika)</li>
              <li>• Transparentní rozpočty a důraz na kvalitu dokumentace</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <h3 className="text-xl font-semibold">Čím se nejčastěji zabýváme</h3>
            <ol className="mt-4 list-decimal ml-5 text-gray-700 space-y-2">
              <li>Projektová dokumentace pro povolení a provádění staveb</li>
              <li>Inženýring – zajištění stanovisek a rozhodnutí</li>
              <li>Technický dozor investora a BOZP koordinace</li>
              <li>Energetická posouzení a průkazy PENB</li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="poptavka" className="relative overflow-hidden bg-blue-900">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-700 to-blue-900" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-blue">
              <h2 className="text-3xl font-bold">Máte záměr? Pojďme jej připravit.</h2>
              <p className="mt-3 text-white">Pošlete nám podklady (pozemek, studie, požadavky). Ozveme se s návrhem postupu.</p>
              <ul className="mt-4 space-y-2 text-white">
                <li>• Konzultace zdarma</li>
                <li>• Předběžný harmonogram a odhad nákladů</li>
                <li>• Transparentní proces krok za krokem</li>
              </ul>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="text-sm">Jméno
                  <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="Jan Novák" />
                </label>
                <label className="text-sm">E-mail
                  <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" type="email" placeholder="jan@firma.cz" />
                </label>
                <label className="sm:col-span-2 text-sm">Popis záměru
                  <textarea className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" rows={4} placeholder="Krátce popište projekt…" />
                </label>
                <button className="sm:col-span-2 rounded-xl bg-blue-600 text-white px-5 py-3 font-semibold hover:bg-blue-700">Odeslat poptávku</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="kontakt" className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <img
              src={`${BASE}logo-pp-square-1024-transparent.png`}
              alt="PP Projekce Pilař, s.r.o."
              className="h-10 w-10 rounded-xl"
              loading="lazy"
            />
            <p className="mt-3 text-sm text-gray-600 max-w-xs">
              Projekčně-inženýrská kancelář se zaměřením na kvalitní dokumentaci, inženýring a technický dozor.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Kontakt</h3>
            <ul className="mt-3 space-y-1 text-gray-700">
              <li>PP Projekce Pilař, s.r.o.</li>
              <li>V Zátiší 1010, 278 01 Kralupy nad Vltavou</li>
              <li>Tel: <a href="tel:+420604300629" className="underline">+420 604 300 629</a>, <a href="tel:+420737475750" className="underline">+420 737 475 750</a></li>
              <li>E-mail: <a href="mailto:JPilar@projektuj.cz" className="underline">JPilar@projektuj.cz</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Rychlé odkazy</h3>
            <ul className="mt-3 space-y-1 text-gray-700">
              <li><a href="#sluzby" className="hover:underline">Služby</a></li>
              <li><a href="#reference" className="hover:underline">Reference</a></li>
              <li><a href="#poptavka" className="hover:underline">Nezávazná poptávka</a></li>
            </ul>
          </div>
        </div>
        <div className="py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} PP Projekce Pilař, s.r.o.</div>
      </footer>
    </div>
  );
}
