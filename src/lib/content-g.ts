/**
 * Treść pomocnicza wariantu G.
 *
 * G dziedziczy PEŁNE treści dokumentu klientki z `content-f.ts` — tu żyją
 * wyłącznie elementy opracowania graficznego: pasek haseł, plakietki hero,
 * kafelki liczb i tytuły nadane kartom (same akapity pozostają nietknięte).
 */

export const marqueeG = [
  "Autorski Model 4R",
  "Procedura antymobbingowa dla MŚP",
  "Checklisty i workbooki",
  "Schemat 24 h – 72 h – 7 dni",
  "Imienne certyfikaty",
  "Szkolenia online i stacjonarne",
  "Cała Polska",
  "Materiały zostają w firmie",
] as const;

export const heroChipsG = [
  { title: "Autorska metoda", text: "Model 4R" },
  { title: "Kursy online", text: "od 229 zł za osobę" },
  { title: "Zasięg", text: "online i stacjonarnie" },
] as const;

export const heroStatsG = [
  { icon: "compass", value: "4R", label: "autorski model działania" },
  { icon: "graduation", value: "6", label: "programów szkoleniowych" },
  { icon: "badge", value: "od 229 zł", label: "kurs online za osobę" },
  { icon: "map", value: "cała Polska", label: "online i stacjonarnie" },
] as const;

/** Tytuły nadane czterem akapitom „Kilka słów o BS” — treść kart bez zmian. */
export const aboutCardTitlesG = [
  "Marka edukacyjno-wspierająca",
  "Praktyczne materiały",
  "Prosty i spokojny język",
  "Filar pracy: Model 4R",
] as const;
