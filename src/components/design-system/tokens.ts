import type { Oklch } from "@/lib/color";

/**
 * Lustro tokenów z `globals.css` — do tabel i próbek w /design-system.
 * Zmiana tokenu w CSS wymaga aktualizacji tutaj (świadomie: CSS jest źródłem
 * prawdy dla przeglądarki, ten plik dla dokumentacji).
 */

export type ColorToken = {
  name: string;
  css: string;
  value: Oklch;
  usage: string;
};

export const brandScale: ColorToken[] = [
  { name: "brand-50", css: "--brand-50", value: { l: 0.9834, c: 0.0042, h: 236.5 }, usage: "tło sekcji „tint”, kafelki ikon" },
  { name: "brand-100", css: "--brand-100", value: { l: 0.9552, c: 0.0128, h: 238 }, usage: "linie wewnętrzne, hover jasny" },
  { name: "brand-200", css: "--brand-200", value: { l: 0.9236, c: 0.0177, h: 234.5 }, usage: "obramowania kart, pastylki" },
  { name: "brand-300", css: "--brand-300", value: { l: 0.8676, c: 0.0378, h: 230 }, usage: "numery w obrysie, akcenty na ciemnym tle" },
  { name: "brand-400", css: "--brand-400", value: { l: 0.8065, c: 0.0511, h: 227.9 }, usage: "skrzydła z logo — przycisk „inverse”, zaznaczenie" },
  { name: "brand-500", css: "--brand-500", value: { l: 0.6528, c: 0.0928, h: 236 }, usage: "ikony pomocnicze, znaczniki list" },
  { name: "brand-600", css: "--brand-600", value: { l: 0.5088, c: 0.1004, h: 243 }, usage: "akcent w nagłówkach, etykiety, pierścień fokusu" },
  { name: "brand-700", css: "--brand-700", value: { l: 0.3851, c: 0.0832, h: 249.5 }, usage: "kontur logo — przycisk główny, hover odnośników" },
  { name: "brand-800", css: "--brand-800", value: { l: 0.3184, c: 0.0708, h: 251 }, usage: "tekst odnośników, hover przycisku" },
  { name: "brand-900", css: "--brand-900", value: { l: 0.2603, c: 0.06, h: 251.9 }, usage: "tekst treści (z kryciem 85–90 %)" },
  { name: "brand-950", css: "--brand-950", value: { l: 0.1976, c: 0.0468, h: 253 }, usage: "atrament nagłówków, tło sekcji „deep”" },
];

export const foundationScale: ColorToken[] = [
  { name: "foundation-50", css: "--foundation-50", value: { l: 0.975, c: 0.018, h: 168 }, usage: "tło panelu Fundament" },
  { name: "foundation-200", css: "--foundation-200", value: { l: 0.9, c: 0.055, h: 168 }, usage: "obramowanie, pastylki" },
  { name: "foundation-300", css: "--foundation-300", value: { l: 0.82, c: 0.08, h: 168 }, usage: "linia cytatu o Fundamencie" },
  { name: "foundation-600", css: "--foundation-600", value: { l: 0.55, c: 0.1, h: 168 }, usage: "ikony, strzałka „gotowość”" },
  { name: "foundation-900", css: "--foundation-900", value: { l: 0.3, c: 0.06, h: 168 }, usage: "tekst na tle Fundamentu" },
];

export const sandScale: ColorToken[] = [
  { name: "sand-50", css: "--sand-50", value: { l: 0.985, c: 0.008, h: 80 }, usage: "tło strony warsztatu" },
  { name: "sand-100", css: "--sand-100", value: { l: 0.965, c: 0.018, h: 78 }, usage: "gradient karty warsztatu" },
  { name: "sand-200", css: "--sand-200", value: { l: 0.93, c: 0.03, h: 76 }, usage: "obramowania w tonie ciepłym" },
  { name: "sand-700", css: "--sand-700", value: { l: 0.55, c: 0.08, h: 60 }, usage: "etykiety i ikony warsztatu" },
];

export const white: Oklch = { l: 1, c: 0, h: 0 };
export const inkMuted: Oklch = { l: 0.49, c: 0.03, h: 249 };

export const semanticTokens = [
  ["--surface", "biel", "tło strony i kart"],
  ["--surface-tint", "brand-50", "sekcje naprzemienne, tło formularzy"],
  ["--surface-deep", "brand-950", "sekcje ciemne: cennik, pasy CTA, panel zapisu"],
  ["--ink", "brand-950", "nagłówki i tekst główny"],
  ["--ink-soft", "brand-800", "treść artykułów"],
  ["--ink-muted", "oklch(0.49 0.03 249)", "opisy, leady, podpisy — 4,5:1 na bieli"],
  ["--line", "oklch(0.91 0.013 236)", "obramowania kart i separatory"],
  ["--line-strong", "brand-300", "obramowania interaktywne, numery w obrysie"],
  ["--ring", "brand-600", "pierścień fokusu (3 px, 40 % krycia, odsunięty o 2 px)"],
] as const;

export const typeScale = [
  { token: "text-display", size: "clamp(2.5rem, 1.75rem + 2.4vw, 3.75rem)", lh: "1.05", ls: "-0.025em", font: "Fraunces", use: "H1 strony głównej" },
  { token: "text-h1", size: "clamp(2.25rem, 1.7rem + 1.8vw, 3.25rem)", lh: "1.08", ls: "-0.022em", font: "Fraunces", use: "H1 podstron" },
  { token: "text-h2", size: "clamp(1.75rem, 1.4rem + 1.2vw, 2.5rem)", lh: "1.12", ls: "-0.018em", font: "Fraunces", use: "tytuły sekcji" },
  { token: "text-h3", size: "clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem)", lh: "1.25", ls: "-0.01em", font: "Fraunces", use: "tytuły kart, śródtytuły artykułów" },
  { token: "text-h4", size: "1.125rem", lh: "1.35", ls: "-0.006em", font: "Fraunces", use: "tytuły w panelach" },
  { token: "text-lead", size: "clamp(1.0625rem, 1rem + 0.2vw, 1.1875rem)", lh: "1.65", ls: "0", font: "Inter", use: "leady sekcji" },
  { token: "text-body", size: "1rem", lh: "1.7", ls: "0", font: "Inter", use: "treść" },
  { token: "text-body-sm", size: "0.9375rem", lh: "1.65", ls: "0", font: "Inter", use: "opisy w kartach" },
  { token: "text-small", size: "0.875rem", lh: "1.55", ls: "0", font: "Inter", use: "listy, meta" },
  { token: "text-caption", size: "0.8125rem", lh: "1.5", ls: "0", font: "Inter", use: "podpisy, daty, dane rejestrowe" },
  { token: "t-label", size: "0.7rem", lh: "1.2", ls: "0.16em · wersaliki", font: "Inter 600", use: "etykiety sekcji, kategorie" },
] as const;

export const spacingScale = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160] as const;

export const breakpoints = [
  ["sm", "640 px", "dwie kolumny kart, przyciski obok siebie"],
  ["md", "768 px", "siatka 12 kolumn, układy dwukolumnowe"],
  ["lg", "1024 px", "cztery kolumny, kolumny przyklejone (sticky)"],
  ["xl", "1280 px", "nawigacja pozioma w nagłówku"],
  ["2xl", "1536 px", "numer telefonu w nagłówku"],
] as const;

export const radii = [
  ["rounded-md", "0.75rem", "przyciski pomocnicze (shadcn)"],
  ["rounded-field", "0.75rem", "pola formularzy, kafelki ikon"],
  ["rounded-card", "1.25rem", "karty, plakietki"],
  ["rounded-panel", "1.5rem", "panele, formularz, pas Fundamentu"],
  ["rounded-full", "9999px", "przyciski marki, pastylki, chipsy"],
] as const;

export const shadows = [
  ["shadow-hairline", "obrys 1 px z krycia 8 % granatu", "alternatywa dla obramowania na zdjęciach"],
  ["shadow-lift", "0 1 2 / 0 10 28 · 6 % / 14 %", "karta pod kursorem, kadr autorki"],
  ["shadow-lift-lg", "0 2 4 / 0 24 56 · 8 % / 22 %", "elementy wyraźnie nad stroną (rzadko)"],
  ["shadow-float", "trzy warstwy do 64 px", "elementy pływające nad treścią"],
] as const;

export const motion = [
  ["150 ms", "linear / ease", "zmiana koloru, obrysu"],
  ["300 ms", "ease-out-expo", "przesunięcie strzałki, tło przycisku"],
  ["500 ms", "ease-out-expo", "uniesienie karty o 2 px, chowanie nagłówka"],
  ["700 ms", "ease-out-expo", "wejście sekcji (Reveal) — 16 px w górę + krycie"],
  ["850 ms", "ease-out-expo", "słowa nagłówka H1 (maska, 40 ms odstępu)"],
  ["48 s", "linear, w pętli", "pasek haseł (marquee)"],
] as const;
