import React from "react";

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
