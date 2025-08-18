import React from "react";

/* --- PŮVODNÍ (ponechávám kvůli kompatibilitě) --- */
export const ServiceIconDoc = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <rect x="12" y="10" width="48" height="60" rx="8" fill="#E0F2FE" stroke="#0EA5E9"/>
    <line x1="24" y1="28" x2="56" y2="28" stroke="#0EA5E9" strokeWidth="3"/>
    <line x1="24" y1="38" x2="56" y2="38" stroke="#0EA5E9" strokeWidth="3"/>
    <line x1="24" y1="48" x2="46" y2="48" stroke="#0EA5E9" strokeWidth="3"/>
  </svg>
);
export const ServiceIconEngineer = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <circle cx="28" cy="28" r="10" fill="#93C5FD" />
    <rect x="18" y="40" width="40" height="20" rx="6" fill="#2563EB" />
    <rect x="52" y="18" width="10" height="44" rx="2" fill="#1E3A8A" />
  </svg>
);
export const ServiceIconPassport = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <rect x="14" y="16" width="52" height="48" rx="8" fill="#DBEAFE" stroke="#2563EB"/>
    <circle cx="40" cy="40" r="12" fill="none" stroke="#2563EB" strokeWidth="3"/>
    <line x1="28" y1="40" x2="52" y2="40" stroke="#2563EB" strokeWidth="3"/>
  </svg>
);
export const ServiceIconConsult = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <rect x="10" y="24" width="60" height="30" rx="8" fill="#E5E7EB" />
    <rect x="14" y="18" width="24" height="20" rx="6" fill="#60A5FA" />
    <rect x="42" y="18" width="24" height="20" rx="6" fill="#93C5FD" />
  </svg>
);

/* --- Reference thumb --- */
export const ReferenceThumb = () => (
  <svg viewBox="0 0 640 360" className="w-full h-40" aria-hidden="true">
    <defs>
      <linearGradient id="rgrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#E5E7EB" />
        <stop offset="100%" stopColor="#F3F4F6" />
      </linearGradient>
    </defs>
    <rect width="640" height="360" rx="14" fill="url(#rgrad)" />
    <rect x="70" y="160" width="220" height="120" rx="8" fill="#1F2937" />
    <rect x="300" y="120" width="180" height="160" rx="8" fill="#2563EB" />
  </svg>
);

/* --- NOVÉ TEMATICKÉ IKONY --- */

/** 1) Komplexní zpracování studií – lupa nad dokumentem */
export const IconStudy = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <rect x="18" y="14" width="34" height="48" rx="6" fill="#E0F2FE" stroke="#2563EB"/>
    <line x1="24" y1="28" x2="44" y2="28" stroke="#2563EB" strokeWidth="3"/>
    <line x1="24" y1="36" x2="42" y2="36" stroke="#2563EB" strokeWidth="3"/>
    <circle cx="54" cy="48" r="8" fill="none" stroke="#2563EB" strokeWidth="3"/>
    <line x1="60" y1="54" x2="66" y2="60" stroke="#2563EB" strokeWidth="3"/>
  </svg>
);

/** 2) Vypracování technologických projektů – ozubené kolo + potrubí */
export const IconTechProject = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <circle cx="30" cy="32" r="10" fill="#DBEAFE" stroke="#2563EB" strokeWidth="3"/>
    <circle cx="30" cy="32" r="4" fill="#2563EB"/>
    <rect x="42" y="24" width="24" height="8" rx="3" fill="#93C5FD" stroke="#2563EB"/>
    <rect x="42" y="40" width="24" height="8" rx="3" fill="#93C5FD" stroke="#2563EB"/>
    <line x1="54" y1="32" x2="54" y2="40" stroke="#2563EB" strokeWidth="3"/>
  </svg>
);

/** 3) Projednání & schválení – dokument s razítkem a fajfkou */
export const IconApproval = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <rect x="14" y="16" width="36" height="48" rx="6" fill="#E0F2FE" stroke="#2563EB"/>
    <line x1="22" y1="30" x2="42" y2="30" stroke="#2563EB" strokeWidth="3"/>
    <line x1="22" y1="38" x2="40" y2="38" stroke="#2563EB" strokeWidth="3"/>
    <circle cx="56" cy="48" r="10" fill="#DBEAFE" stroke="#2563EB" strokeWidth="3"/>
    <path d="M50 48 l4 4 l8 -8" fill="none" stroke="#2563EB" strokeWidth="3" />
  </svg>
);

/** 4) Dokumentace pro nabídková/schvalovací řízení – složka s pečetí */
export const IconTenderDocs = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <path d="M16 28 h20 l6 6 h22 v26 a4 4 0 0 1 -4 4 H20 a4 4 0 0 1 -4 -4 Z"
          fill="#DBEAFE" stroke="#2563EB"/>
    <circle cx="56" cy="48" r="6" fill="#60A5FA" stroke="#2563EB"/>
  </svg>
);

/** 5) Autorský dozor/technická spolupráce – přilba + fajfka */
export const IconAuthorSupervision = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <path d="M20 42 a14 14 0 0 1 40 0 v8 H20 Z" fill="#DBEAFE" stroke="#2563EB"/>
    <path d="M26 50 h28 a6 6 0 0 1 6 6 v2 H20 v-2 a6 6 0 0 1 6 -6 Z" fill="#93C5FD" stroke="#2563EB"/>
    <path d="M50 40 l4 4 l8 -8" fill="none" stroke="#2563EB" strokeWidth="3"/>
  </svg>
);

/** 6) Konzultační činnost – dvě bubliny */
export const IconConsulting = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <rect x="14" y="18" width="30" height="20" rx="6" fill="#DBEAFE" stroke="#2563EB"/>
    <path d="M18 38 l-4 6 l8 -4" fill="#DBEAFE" stroke="#2563EB"/>
    <rect x="36" y="34" width="30" height="20" rx="6" fill="#93C5FD" stroke="#2563EB"/>
    <path d="M62 54 l8 4 l-4 -6" fill="#93C5FD" stroke="#2563EB"/>
  </svg>
);

/** 7) Řešení problému s dovozem zařízení – bedna/kontejner + šipka */
export const IconImportIssue = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <rect x="16" y="28" width="28" height="24" rx="4" fill="#E0F2FE" stroke="#2563EB"/>
    <line x1="16" y1="40" x2="44" y2="40" stroke="#2563EB" strokeWidth="3"/>
    <path d="M50 34 h14 l-4 -4 M64 34 v18" fill="none" stroke="#2563EB" strokeWidth="3"/>
  </svg>
);

/** 8) Převedení dokumentace do digitální formy – dokument + pixely */
export const IconDigitization = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <rect x="18" y="16" width="30" height="42" rx="6" fill="#DBEAFE" stroke="#2563EB"/>
    <line x1="24" y1="28" x2="42" y2="28" stroke="#2563EB" strokeWidth="3"/>
    <line x1="24" y1="36" x2="40" y2="36" stroke="#2563EB" strokeWidth="3"/>
    <rect x="52" y="24" width="8" height="8" fill="#60A5FA" />
    <rect x="60" y="32" width="8" height="8" fill="#93C5FD" />
    <rect x="52" y="40" width="8" height="8" fill="#1D4ED8" />
  </svg>
);

/** 9) Konstrukční činnost – kružítko/pravítko */
export const IconConstruction = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12" aria-hidden="true">
    <path d="M28 20 l-8 20 h8 l8 -20" fill="#DBEAFE" stroke="#2563EB"/>
    <line x1="28" y1="20" x2="52" y2="60" stroke="#2563EB" strokeWidth="3"/>
    <rect x="44" y="52" width="20" height="6" rx="2" fill="#93C5FD" stroke="#2563EB"/>
  </svg>
);
