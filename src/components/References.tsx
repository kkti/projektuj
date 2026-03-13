import { BASE } from "../utils/baseUrl";

type RefItem = {
  title: string;
  description: string;
  img: string;
  alt: string;
};

const items: ReadonlyArray<RefItem> = [
  {
    title: "Cukrovar Dobrovice - Potrubní most",
    description:
      "Návrh potrubního mostu a technické řešení potrubních tras a konstrukčních návazností.",
    img: `${BASE}reference/IM000908.JPG`,
    alt: "Potrubní most a ocelová konstrukce v průmyslovém areálu",
  },
  {
    title: "Česká rafinérská - Napojení čerpadla",
    description:
      "Projektové řešení napojení technologie v provozu, včetně koordinace návazností.",
    img: `${BASE}reference/2014-01-10 13.53.30.jpg`,
    alt: "Technologické napojení čerpadla a potrubí v průmyslovém provozu",
  },
  {
    title: "Synthos Kralupy - Dávkovací zařízení",
    description:
      "Návrh technologického uzlu a konstrukčního řešení pro dávkování.",
    img: `${BASE}reference/20231031_122650.jpg`,
    alt: "Technologické dávkovací zařízení v průmyslovém provozu",
  },
  {
    title: "Spolana Neratovice - Výrobní dokumentace obslužné plošiny",
    description:
      "Zpracování výrobní dokumentace ocelové obslužné plošiny včetně detailů a návazností.",
    img: `${BASE}ref-warehouse.webp`,
    alt: "Konstrukční řešení ocelové plošiny a obslužné konstrukce",
  },
  {
    title: "Synthos Kralupy - Napojení říční vody",
    description:
      "Projektové řešení napojení potrubní trasy pro přívod říční vody včetně armatur.",
    img: `${BASE}ref-heat-exchanger.webp`,
    alt: "Technologické napojení potrubí a zařízení v provozu",
  },
  {
    title: "Bidfood Kralupy - Požární žebřík",
    description:
      "Návrh a zpracování dokumentace požárního žebříku včetně konstrukčních detailů a kotvení.",
    img: `${BASE}ref-chlor-storage.webp`,
    alt: "Technický návrh požárního žebříku a související konstrukce",
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
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,39,51,0.55)] via-[rgba(20,39,51,0.1)] to-transparent" />
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
