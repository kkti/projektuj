type HeaderProps = {
  onHero: boolean;
};

export default function Header({ onHero }: HeaderProps) {
  const headerClass = [
    "sticky top-0 z-50 h-14 overflow-hidden border-b py-0",
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
      <div className="mx-auto h-full w-full max-w-7xl px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          <a
            href="#top"
            aria-label="PP Projekce Pilař, s.r.o. - zpět na začátek"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-95"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#8cc8f3,#5a97ca)] text-sm font-black tracking-[-0.06em] text-[var(--color-brand-900)] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_16px_rgba(20,39,51,0.16)]">
              PP
            </span>
            <span className="flex flex-col leading-none">
              <span className={`text-[0.95rem] font-semibold tracking-[-0.02em] ${logoTextClass}`}>
                Projekce
              </span>
              <span className={`mt-0.5 text-[0.8rem] font-semibold ${logoSubtextClass}`}>
                Pilař s.r.o.
              </span>
            </span>
            <span className="sr-only">PP Projekce Pilař, s.r.o.</span>
          </a>

          <nav
            aria-label="Hlavní navigace"
            className="hidden items-center gap-5 text-[15px] font-medium leading-none md:flex"
          >
            <a href="#o-nas" className={linkClass}>
              O mně
            </a>
            <a href="#sluzby" className={linkClass}>
              Služby
            </a>
            <a href="#reference" className={linkClass}>
              Reference
            </a>
            <a href="#kontakt" className={linkClass}>
              Kontakt
            </a>
            <a href="#poptavka" className={ctaClass}>
              Poptat projekt
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
