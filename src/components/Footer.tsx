export default function Footer() {
  return (
    <footer id="kontakt" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr_0.8fr] md:items-start md:gap-12">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1b58b8,#113d84)] text-lg font-black tracking-[-0.06em] text-white">
              PP
            </div>
            <p className="mt-6 text-[1.05rem] font-semibold text-slate-900">
              Projekční a konstrukční kancelář
            </p>
            <p className="mt-1 text-gray-700">
              Projektová a konstrukční dokumentace pro průmysl
            </p>
            <p className="text-gray-700">
              Externí technická spolupráce pro firmy a provozy
            </p>
          </div>

          <div className="md:pl-16 lg:pl-24">
            <h3 className="text-xl font-semibold text-slate-900">
              Kontakt{" "}
              <span className="font-normal text-slate-700">
                / Poptávka spolupráce
              </span>
            </h3>
            <ul className="mt-5 list-disc space-y-1 pl-5 text-gray-800">
              <li>PP Projekce Pilař, s.r.o.</li>
              <li>V Zátiší 1010, 278 01 Kralupy nad Vltavou</li>
              <li>mob.: 604 300 629</li>
              <li>E-mail: jpilar@projektuj.cz</li>
              <li>IČO: 27181588</li>
            </ul>
          </div>

          <div className="md:pl-12 lg:pl-20">
            <h3 className="text-xl font-semibold text-slate-900">Rychlé odkazy</h3>
            <ul className="mt-5 space-y-2 text-gray-700">
              <li>
                <a
                  href="#sluzby"
                  className="transition hover:text-[var(--color-brand-700)]"
                >
                  Služby
                </a>
              </li>
              <li>
                <a
                  href="#reference"
                  className="transition hover:text-[var(--color-brand-700)]"
                >
                  Reference
                </a>
              </li>
              <li>
                <a
                  href="#poptavka"
                  className="transition hover:text-[var(--color-brand-700)]"
                >
                  Nezávazná poptávka
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PP Projekce Pilař, s.r.o.
      </div>
    </footer>
  );
}
