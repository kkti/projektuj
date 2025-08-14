// src/components/Hero.tsx
export default function Hero() {
  return (
    <section
      className="relative grid min-h-[72vh] md:min-h-[88vh] place-items-center overflow-clip text-white"
    >
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 will-change-transform scale-[1.02]"
          style={{
            backgroundImage: `
              image-set(
                url("./hero-industrial-1280.webp") 1x,
                url("./hero-industrial-1920.webp") 1.5x,
                url("./hero-industrial-3200.webp") 2x
              )
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* horní jemný barevný závoj pro čitelnost */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617D9] via-[#02061780] to-[#02061759]" />
        {/* spodní ztmavení pro hladký přechod do obsahu */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617D9]" />
      </div>

      {/* Content */}
      <div className="w-[min(1100px,92vw)] p-6 md:p-12 grid gap-3 md:gap-4">
        <p className="uppercase tracking-wider text-sm/none opacity-90">
          Projektové řízení • IT • Audit
        </p>

        <h1 className="text-[clamp(32px,5.2vw,56px)] leading-[1.05] font-semibold">
          Řídíme složité projekty v&nbsp;průmyslu i&nbsp;IT
        </h1>

        <p className="text-[clamp(16px,1.4vw,20px)] opacity-95 max-w-[70ch]">
          Od analýzy přes delivery až po provoz. Transparentně, predikovatelně, včas.
        </p>

        <div className="flex gap-3 flex-wrap pt-1">
          <a
            href="#sluzby"
            className="inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold border border-transparent shadow-lg hover:shadow-xl transition
                       bg-sky-500 text-[#001018]"
          >
            Naše služby
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold border border-white/30 hover:border-white/50 transition
                       bg-white/10 hover:bg-white/15 text-white"
          >
            Kontakt
          </a>
        </div>
      </div>
    </section>
  );
}
