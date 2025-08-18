import React from "react";
import { BASE } from "../utils/baseUrl";

export default function Footer() {
  return (
    <footer id="kontakt" className="border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <img
            src={`${BASE}logo-pp-square-1024-transparent.png`}
            alt="PP Projekce Pilař, s.r.o."
            className="h-10 w-10 rounded-xl"
            loading="lazy"
          />
          <p className="mt-3 text-sm text-gray-600 max-w-xs">
            Projekčně-inženýrská kancelář se zaměřením na kvalitní dokumentaci, inženýring a technický dozor.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Kontakt</h3>
          <ul className="mt-3 space-y-1 text-gray-700">
            <li>PP Projekce Pilař, s.r.o.</li>
            <li>V Zátiší 1010, 278 01 Kralupy nad Vltavou</li>
            <li>
              Tel: <a href="tel:+420604300629" className="underline">+420 604 300 629</a>,{" "}
              <a href="tel:+420737475750" className="underline">+420 737 475 750</a>
            </li>
            <li>
              E-mail: <a href="mailto:JPilar@projektuj.cz" className="underline">JPilar@projektuj.cz</a>
            </li>
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
  );
}
