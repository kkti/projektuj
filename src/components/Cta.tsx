import React from "react";

export default function Cta() {
  return (
    <section id="poptavka" className="relative isolate overflow-hidden bg-blue-900 bg-gradient-to-br from-blue-700 to-blue-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEVÝ TEXT */}
          <div className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
            <h2 className="text-3xl font-bold">Máte záměr? Pojďme jej připravit.</h2>
            <p className="mt-3">Pošlete nám podklady (pozemek, studie, požadavky). Ozveme se s návrhem postupu.</p>
            <ul className="mt-4 space-y-2">
              <li>• Konzultace zdarma</li>
              <li>• Předběžný harmonogram a odhad nákladů</li>
              <li>• Transparentní proces krok za krokem</li>
            </ul>
          </div>

          {/* FORMULÁŘ */}
          <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="text-sm">
                Jméno
                <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="Jan Novák" />
              </label>
              <label className="text-sm">
                E-mail
                <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" type="email" placeholder="jan@firma.cz" />
              </label>
              <label className="sm:col-span-2 text-sm">
                Popis záměru
                <textarea className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" rows={4} placeholder="Krátce popište projekt…" />
              </label>
              <button className="sm:col-span-2 rounded-xl bg-blue-600 text-white px-5 py-3 font-semibold hover:bg-blue-700">
                Odeslat poptávku
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
