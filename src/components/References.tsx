import { BASE } from "../utils/baseUrl";

type RefItem = {
  title: string;
  meta: string;
  description: string;
  img: string;
  alt: string;
};

const items: ReadonlyArray<RefItem> = [
  {
    title: "Potrubní most",
    meta: "Cukrovar Dobrovice",
    description:
      "Návrh potrubního mostu a technické řešení potrubních tras a konstrukčních návazností.",
    img: `${BASE}ref-bridge-pipe.webp`,
    alt: "Potrubní most a ocelová konstrukce v průmyslovém areálu",
  },
  {
    title: "Vakuové rozvody",
    meta: "Česká rafinérská technologie",
    description:
      "Projektové řešení technologické trasy v provozu včetně koordinace napojení a provozních vazeb.",
    img: `${BASE}ref-vacuum-piping.webp`,
    alt: "Technologické potrubí a vakuové rozvody v průmyslové hale",
  },
  {
    title: "Dávkovací zařízení",
    meta: "Synthos Kralupy",
    description:
      "Návrh technologického uzlu a konstrukčního řešení pro dávkování v provozním prostředí.",
    img: `${BASE}ref-extruder.webp`,
    alt: "Technologické dávkovací zařízení v průmyslovém provozu",
  },
  {
    title: "Ocelová obslužná plošina",
    meta: "Spolana Neratovice",
    description:
      "Zpracování výrobní dokumentace ocelové obslužné plošiny včetně detailů a návazností.",
    img: `${BASE}ref-warehouse.webp`,
    alt: "Konstrukční řešení ocelové plošiny a obslužné konstrukce",
  },
  {
    title: "Technologické napojení",
    meta: "Synthos Kralupy",
    description:
      "Projektové řešení napojení potrubní trasy a souvisejících technologických prvků.",
    img: `${BASE}ref-heat-exchanger.webp`,
    alt: "Technologické napojení potrubí a zařízení v provozu",
  },
  {
    title: "Bezpečnostní úpravy skladu",
    meta: "Spolana Neratovice",
    description:
      "Návrh a dokumentace bezpečnostních úprav skladu včetně technických a provozních návazností.",
    img: `${BASE}ref-chlor-storage.webp`,
    alt: "Průmyslový sklad s bezpečnostními prvky a technologickým vybavením",
  },
];

export default function References() {
  return (
    <section id="reference" className="border-y border-gray-200 bg-gray-50">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--color-brand-100)] bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(239,245,251,0.92))] shadow-[0_20px_40px_rgba(20,39,51,0.06)]">
          <div className="px-6 py-6 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Ukázky projektů a dokumentace
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              Z důvodu interních pravidel klientů jsou ukázky uvedeny v obecnější
              podobě. Další reference poskytnu na požádání.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/9]">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,39,51,0.7)] via-[rgba(20,39,51,0.16)] to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="inline-flex items-center rounded-full bg-white/92 px-2.5 py-1 text-xs font-medium text-slate-900 ring-1 ring-black/5">
                    {item.meta}
                  </span>
                </div>
              </div>

              <div className="flex h-full flex-col p-5">
                <h3 className="text-lg font-semibold leading-snug text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
