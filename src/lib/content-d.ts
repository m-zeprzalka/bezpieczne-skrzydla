/**
 * Treść wariantu D.
 *
 * Fakty (dane firmy, programy, cennik, FAQ, Model 4R) bierzemy z `content.ts`.
 * Tutaj żyją wyłącznie teksty pisane pod ten układ: hero, pasek przewijany
 * i podpisy sekcji.
 */

export const heroD = {
  badge: "Przeciwdziałanie mobbingowi i przemocy psychicznej w pracy",
  titleTop: "Bezpieczna praca",
  titleAccent: "nie jest przywilejem.",
  titleBottom: "Jest fundamentem.",
  lead: "Szkolenia, procedury i gotowe narzędzia dla firm, które chcą reagować odpowiedzialnie — zanim trudna sytuacja stanie się kryzysem.",
  primaryCta: { label: "Umów bezpłatną rozmowę", href: "#kontakt" },
  secondaryCta: { label: "Zobacz programy", href: "#oferta" },
  scrollHint: "Przewiń",
  facts: [
    { value: 4, suffix: "", label: "etapy autorskiego Modelu 4R" },
    { value: 6, suffix: "", label: "programów szkoleniowych" },
    { value: 229, prefix: "od ", suffix: " zł", label: "kurs online za osobę" },
  ],
} as const;

/** Pasek przewijany pod hero — hasła, nie zdania. */
export const marqueeItems = [
  "Model 4R",
  "Procedura antymobbingowa dla MŚP",
  "Pierwsze 24 godziny po zgłoszeniu",
  "Komisja antymobbingowa",
  "Checklisty i workbooki",
  "Szkolenia online i stacjonarne",
  "Cała Polska",
  "Materiały zostają w firmie",
] as const;

export const sectionsD = {
  audiences: {
    eyebrow: "Dla kogo",
    title: "Cztery perspektywy, jedna wspólna zasada",
    description:
      "Innych informacji potrzebuje pracownik, innych świadek, a jeszcze innych pracodawca czy członek komisji. Zakres, język i materiały dopasowuję do grupy uczestników.",
  },
  model: {
    eyebrow: "Autorski Model 4R",
    title: "Od chaosu do spokojnej, świadomej decyzji",
    description:
      "Praktyczna mapa działania, na której opieram każdy program. Cztery etapy, które porządkują trudną sytuację krok po kroku.",
    hint: "Przewijaj, aby przejść przez etapy",
  },
  programs: {
    eyebrow: "Oferta",
    title: "Pięć programów szkoleniowych i jeden warsztat wspierający",
    description:
      "Każde szkolenie odpowiada na inny moment w organizacji — od pierwszego niepokojącego sygnału po pracę komisji antymobbingowej.",
  },
  mission: {
    eyebrow: "Dlaczego powstały Bezpieczne Skrzydła",
    quote: "Znam tę ciszę, w której człowiek zostaje sam",
  },
  pricing: {
    eyebrow: "Formy współpracy",
    title: "Przejrzyste widełki, wycena po rozmowie",
    description:
      "Podstawową formą są szkolenia online — dzięki temu oferta pozostaje dostępna również dla mikro, małych i średnich firm.",
  },
  faq: {
    eyebrow: "Pytania i odpowiedzi",
    title: "Zanim napiszesz",
    description:
      "Odpowiadam na konkretne pytania konkretnie — bez ofert-widmo i bez namawiania na zakres, którego nie potrzebujesz.",
  },
  contact: {
    eyebrow: "Porozmawiajmy",
    title: "Każdą ofertę przygotowuję po krótkiej rozmowie",
    description:
      "Napisz, w jakiej sytuacji jest Twoja organizacja i kogo chcesz przeszkolić. Odpowiem propozycją zakresu, formy i wyceny — bez zobowiązań.",
  },
} as const;
