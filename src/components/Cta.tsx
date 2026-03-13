export default function Cta() {
  return (
    <section
      id="poptavka"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,var(--color-brand-700),var(--color-brand-900))]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div className="max-w-[40rem] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
            <h2 className="text-3xl font-bold">
              Máte záměr? Pojďme jej připravit.
            </h2>
            <p className="mt-3 max-w-[34rem]">
              Pošlete nám podklady a stručné zadání. Ozveme se s návrhem
              postupu.
            </p>
            <ul className="mt-6 list-disc space-y-3 pl-5">
              <li>Konzultace zdarma</li>
              <li>Ozvu se zpravidla do 24 hodin.</li>
              <li>Transparentní proces krok za krokem</li>
            </ul>
          </div>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="w-full rounded-2xl border border-white/10 bg-white p-6 shadow-sm"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm" htmlFor="name">
                Jméno
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none transition focus:border-[var(--color-brand-400)] focus:ring-2 focus:ring-[rgba(111,152,185,0.18)]"
                  placeholder="Jan Novák"
                />
              </label>
              <label className="text-sm" htmlFor="email">
                E-mail
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none transition focus:border-[var(--color-brand-400)] focus:ring-2 focus:ring-[rgba(111,152,185,0.18)]"
                  placeholder="jan@firma.cz"
                />
              </label>
              <label
                className="text-sm sm:col-span-2"
                htmlFor="project-description"
              >
                Popis záměru
                <textarea
                  id="project-description"
                  name="projectDescription"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none transition focus:border-[var(--color-brand-400)] focus:ring-2 focus:ring-[rgba(111,152,185,0.18)]"
                  placeholder="Krátce popište projekt..."
                />
              </label>
              <button
                type="submit"
                className="rounded-xl bg-[var(--color-brand-600)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--color-brand-700)] sm:col-span-2"
              >
                Odeslat poptávku
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
