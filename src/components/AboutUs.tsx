import type { SVGProps } from "react";

const IconShield = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M12 3l7 3v6c0 4.418-3.134 8.418-7 9-3.866-.582-7-4.582-7-9V6l7-3Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M9 12l2 2 4-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
);

const IconFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M3 21h18M4 21V9l4-2v4l4-2v4l4-2v10"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
);

const IconClipboard = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M9 4h6a2 2 0 0 1 2 2h2v14H5V6h2a2 2 0 0 1 2-2Zm0 0V3h6v1"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
    <path
      d="M8 10h8M8 14h8M8 18h5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
);

const TOP_CARDS = [
  {
    title: "Tradice",
    value: "Od roku 2004",
    body:
      "Se pohybuji v oblasti průmyslových a technologických provozů, kde se podílím na návrhu, zpracování a koordinaci technické dokumentace.",
    Icon: IconShield,
  },
  {
    title: "Specializace",
    value: "Technologická řešení",
    body:
      "Návrh technologických zařízení, potrubních systémů a konstrukčních řešení pro průmyslové a výrobní provozy.",
    Icon: IconFactory,
  },
  {
    title: "Rozsah služeb",
    value: "Studie, DSP, DPS, DSPS",
    body: [
      "Studie - technický návrh řešení.",
      "DSP - dokumentace pro stavební povolení.",
      "DPS - dokumentace pro provádění stavby.",
      "DSPS - dokumentace skutečného provedení stavby.",
    ],
    Icon: IconClipboard,
  },
] as const;

export default function AboutUs() {
  return (
    <section id="o-nas" className="border-y border-gray-200 bg-gray-50">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-5xl">
          <h2 className="text-4xl font-bold tracking-tight">O mně</h2>

          <div className="mt-8 text-[clamp(1.1rem,1.7vw,1.35rem)] leading-9 text-slate-900">
            <p>
              Po letech zkušeností s kompletními projekty napříč všemi profesemi
              se dnes specializuji na externí technickou spolupráci.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TOP_CARDS.map(({ title, value, body, Icon }) => (
            <article
              key={title}
              className="flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-gray-200 bg-white shadow-sm"
            >
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(135deg,#2090ea,#2858d9)] text-white shadow-[0_12px_20px_rgba(37,99,235,0.18)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-xl font-semibold text-slate-900">
                    {title}
                  </div>
                </div>

                <div className="mt-5 text-[1.05rem] font-semibold text-slate-950">
                  {value}
                </div>
                {Array.isArray(body) ? (
                  <div className="mt-6 space-y-1 text-[clamp(1rem,1.35vw,1.08rem)] leading-6 text-slate-900">
                    {body.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                ) : (
                  <p className="mt-6 text-[clamp(1rem,1.35vw,1.08rem)] leading-6 text-slate-900">
                    {body}
                  </p>
                )}
              </div>
              <div className="mt-auto h-1 w-full bg-[linear-gradient(90deg,#66c6ff,#5679ea)] opacity-90" />
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-1">
          <article className="overflow-hidden rounded-[1.8rem] border border-gray-200 bg-white shadow-sm">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-slate-900">
                Přístup k projektu
              </h3>
              <p className="mt-5 text-[clamp(1rem,1.3vw,1.08rem)] leading-6 text-slate-900">
                Pracuji efektivně, samostatně a s důrazem na technickou
                funkčnost, proveditelnost a návaznost na ostatní profese.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
