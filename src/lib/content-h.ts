/**
 * Treść wariantu H — kompaktowa, zgodnie z ustaleniem: na tym etapie liczy się
 * design, nie kompletność treści. Fakty czytamy z `content.ts`, tu tylko
 * hasła pisane pod plakatowy układ.
 */

export const navH = [
  { label: "Oferta", href: "#oferta" },
  { label: "Model 4R", href: "#model-4r" },
  { label: "Misja", href: "#misja" },
  { label: "Cennik", href: "#cennik" },
] as const;

export const heroH = {
  kicker: "Szkolenia · Mobbing · Przemoc psychiczna w pracy",
  lineA: "Bezpieczna praca",
  lineB: "to nie przywilej.",
  lineC: "To fundament.",
  lead: "Bezpieczne miejsce pracy zaczyna się od wiedzy i odwagi reagowania. Szkolę pracowników, HR, pracodawców i komisje antymobbingowe — prostym językiem, z narzędziami, które zostają w firmie.",
  primary: { label: "Poznaj szkolenia", href: "#oferta" },
  secondary: { label: "Zobacz Model 4R", href: "#model-4r" },
} as const;

export const tickerH = [
  "Autorski Model 4R",
  "Kursy online od 229 zł",
  "Procedura dla MŚP",
  "Schemat 24 h – 72 h – 7 dni",
  "Checklisty i workbooki",
  "Imienne certyfikaty",
  "Cała Polska",
] as const;

export const audiencesH = [
  {
    title: "Pracownicy i świadkowie",
    note: "nazwać sytuację i wiedzieć, co dalej",
  },
  { title: "Liderzy i HR", note: "przyjąć zgłoszenie, nie pogorszyć sprawy" },
  { title: "Pracodawcy MŚP", note: "prosta procedura zamiast segregatora" },
  { title: "Komisje antymobbingowe", note: "bezstronnie, rzetelnie, do końca" },
] as const;

export const missionH = {
  quote: "Znam tę ciszę, w której człowiek zostaje sam",
  body: "Bezpieczne Skrzydła nie powstały z pomysłu na firmę — powstały z doświadczenia. Dlatego uczę wcześniej: zanim ktoś zwątpi w siebie i zanim problem zamieni się w kryzys.",
  closing:
    "Moją misją jest budowanie miejsc pracy, w których człowiek nie musi wybierać między zatrudnieniem a własną godnością.",
} as const;

export const ctaH = {
  titleTop: "Porozmawiajmy",
  titleBottom: "o Twoim zespole",
  note: "Rozmowa wstępna jest bezpłatna i do niczego nie zobowiązuje. Odpowiadam zwykle w ciągu jednego dnia roboczego.",
} as const;
