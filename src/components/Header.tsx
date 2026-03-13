import { useState } from "react";

type HeaderProps = {
  onHero: boolean;
};

const NAV_ITEMS = [
  { href: "#o-nas", label: "O mně" },
  { href: "#sluzby", label: "Služby" },
  { href: "#reference", label: "Reference" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export default function Header({ onHero }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerClass = [
    "sticky top-0 z-50 border-b py-0 overflow-visible",
    "transition-colors duration-300",
    onHero
      ? "border-white/10 backdrop-blur-0"
      : "border-black/10 backdrop-blur-md shadow-md",
    onHero
      ? "bg-gradient-to-r from-[rgba(52,82,104,0.78)] via-[rgba(66,103,132,0.72)] to-[rgba(20,39,51,0.82)]"
      : "bg-gradient-to-r from-[rgba(36,61,79,0.94)] via-[rgba(52,82,104,0.95)] to-[rgba(20,39,51,0.96)]",
  ].join(" ");

  const linkClass = "leading-none text-white/90 transition hover:text-white";
  const ctaClass =
    "inline-flex items-center rounded-full border border-white/20 bg-white/90 px-4 py-2 text-sm font-semibold leading-none text-[var(--color-brand-700)] transition hover:bg-white";
  const logoTextClass = onHero ? "text-[#d9ebfb]" : "text-[#edf7ff]";
  const logoSubtextClass = onHero ? "text-[#b8d3e7]" : "text-[#d3e5f2]";

  return (
    <header className={headerClass}>
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <a
            href="#top"
            aria-label="PP Projekce Pilař, s.r.o. - zpět na začátek"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-95"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#8cc8f3,#5a97ca)] text-sm font-black tracking-[-0.06em] text-[var(--color-brand-900)] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_16px_rgba(20,39,51,0.16)]">
              PP
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={`text-[0.95rem] font-semibold tracking-[-0.02em] ${logoTextClass}`}
              >
                Projekce
              </span>
              <span
                className={`mt-0.5 text-[0.8rem] font-semibold ${logoSubtextClass}`}
              >
                Pilař s.r.o.
              </span>
            </span>
            <span className="sr-only">PP Projekce Pilař, s.r.o.</span>
          </a>

          <nav
            aria-label="Hlavní navigace"
            className="hidden items-center gap-5 text-[15px] font-medium leading-none md:flex"
          >
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ))}
            <a href="#poptavka" className={ctaClass}>
              Poptat projekt
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition hover:bg-white/15 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>

          {isMobileMenuOpen ? (
            <div
              id="mobile-nav"
              className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-white/10 bg-[rgba(20,39,51,0.96)] p-3 shadow-[0_18px_36px_rgba(20,39,51,0.28)] md:hidden"
            >
              <nav className="flex flex-col gap-2" aria-label="Mobilní navigace">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-4 py-3 text-white/90 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#poptavka"
                  className="mt-1 inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[var(--color-brand-700)] transition hover:bg-white/90"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Poptat projekt
                </a>
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
