import React from "react";

// (Volitelné) Ilustrace – ponechávám pro případné další použití
const HeroIllustration = () => (
  <svg viewBox="0 0 960 420" className="w-full h-64 md:h-80" role="img" aria-label="Ilustrace: projektant nad výkresem">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F8FAFC" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>
    </defs>
    <rect width="960" height="420" fill="url(#bg)" />
    {/* desk */}
    <rect x="60" y="300" width="840" height="30" rx="8" fill="#E5E7EB" />
    {/* blueprint */}
    <rect x="120" y="160" width="420" height="110" rx="10" fill="#E0F2FE" stroke="#38BDF8" />
    <g stroke="#0EA5E9" strokeWidth="3" fill="none">
      <rect x="150" y="185" width="120" height="60" rx="6" />
      <line x1="290" y1="195" x2="500" y2="195" />
      <line x1="290" y1="215" x2="500" y2="215" />
      <line x1="290" y1="235" x2="460" y2="235" />
    </g>
    {/* character */}
    <circle cx="720" cy="150" r="42" fill="#1F2937" />
    <rect x="650" y="190" width="140" height="80" rx="16" fill="#111827" />
    <rect x="665" y="205" width="110" height="50" rx="10" fill="#2563EB" />
    {/* crane silhouette */}
    <g stroke="#94A3B8" strokeWidth="3" fill="none">
      <line x1="540" y1="120" x2="540" y2="70" />
      <line x1="540" y1="70" x2="840" y2="70" />
      <line x1="840" y1="70" x2="820" y2="90" />
      <line x1="820" y1="90" x2="680" y2="90" />
      <line x1="680" y1="90" x2="680" y2="140" />
    </g>
  </svg>
);

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
  <svg viewBox="0 0 640 360" className="w-full h-40" aria-hidden>
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

// Badge
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm text-blue-700 bg-blue-50">
      {children}
    </span>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-600 text-white grid place-items-center font-bold">PP</div>
              <span className="font-semibold text-lg">PP Projekce Pilař, s.r.o.</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-base font-medium">
              <a href="#sluzby" className="hover:text-blue-600 text-gray-700">Služby</a>
              <a href="#reference" className="hover:text-blue-600 text-gray-700">Reference</a>
              <a href="#o-nas" className="hover:text-blue-600 text-gray-700">O nás</a>
              <a href="#kontakt" className="hover:text-blue-600 text-gray-700">Kontakt</a>
              <a href="#poptavka" className="inline-flex items-center rounded-full border border-blue-600 px-5 py-2.5 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">Poptat projekt</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero — INDUSTRIAL BACKGROUND (obrázky v /public) */}
      <section className="relative grid min-h-[72vh] md:min-h-[88vh] place-items-center overflow-hidden text-white border-b border-gray-100">
        {/* Background image + overlays */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 will-change-transform scale-[1.02]"
            style={{
              backgroundImage: `
                image-set(
                  url("/hero-industrial-1280.webp") 1x,
                  url("/hero-industrial-1920.webp") 1.5x,
                  url("/hero-industrial-3200.webp") 2x
                )
              `,
              backgroundSize: "cover",
              backgroundPosition: "center right",
            }}
          />
          {/* horní jemný barevný závoj pro čitelnost */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#020617D9] via-[#02061780] to-[#02061759]" />
          {/* spodní ztmavení pro hladký přechod do obsahu */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617D9]" />
        </div>

        {/* Content */}
        <div className="w-[min(1100px,92vw)] p-6 md:p-12 grid gap-3 md:gap-4">
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
            <a href="#poptavka" className="rounded-full bg-sky-500 text-[#001018] px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition">
              Nezávazná poptávka
            </a>
            <a href="#sluzby" className="rounded-full border border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/15 text-white px-8 py-3 text-lg font-semibold transition">
              Naše služby
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
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

      {/* References */}
      <section id="reference" className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
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

      {/* About */}
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
      <section id="poptavka" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-700 to-blue-900" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold">Máte záměr? Pojďme jej připravit.</h2>
              <p className="mt-3 text-blue-100">Pošlete nám podklady (pozemek, studie, požadavky). Ozveme se s návrhem postupu.</p>
              <ul className="mt-4 space-y-2 text-blue-100">
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

      {/* Contact */}
      <footer id="kontakt" className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white grid place-items-center font-bold">PP</div>
            <p className="mt-3 text-sm text-gray-600 max-w-xs">Projekčně-inženýrská kancelář se zaměřením na kvalitní dokumentaci, inženýring a technický dozor.</p>
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
