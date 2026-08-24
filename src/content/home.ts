/**
 * Strona główna — sekcja powitalna, pas liczb, pasek haseł, ścieżki odbiorców.
 * Treści 1:1 z makiety zaakceptowanej przez klientkę (mail 3.08.2026).
 */

export const hero = {
  titleA: "Szkolenia i praktyczne narzędzia",
  titleB: "dla",
  titleAccent: "bezpieczniejszych",
  titleC: "miejsc pracy",
  lead: "Bezpieczne miejsce pracy zaczyna się od wiedzy i odwagi reagowania.",
  body: "Tworzę szkolenia, warsztaty i praktyczne materiały dotyczące mobbingu, przemocy psychicznej oraz odpowiedzialnego reagowania na trudne sytuacje w pracy. Wspieram pracowników, liderów, HR, pracodawców i komisje antymobbingowe w budowaniu środowiska opartego na szacunku i bezpieczeństwie.",
  primaryCta: { label: "Poznaj szkolenia i warsztaty", href: "/szkolenia" },
  secondaryCta: { label: "Poznaj Model 4R", href: "/model-4r" },
  audiencePrefix: "Dla",
  audiencePath: [
    { label: "pracowników", href: "/szkolenia/czy-to-juz-mobbing" },
    { label: "liderów i HR", href: "/szkolenia/jak-wspierac-pracownika" },
    { label: "pracodawców", href: "/szkolenia/msp-bez-chaosu" },
    {
      label: "komisji antymobbingowych",
      href: "/szkolenia/komisja-antymobbingowa",
    },
  ],
} as const;

export const heroStats = [
  {
    icon: "compass",
    value: "4R",
    label: "autorski model z warstwą Fundament",
  },
  {
    icon: "graduation",
    value: "5 + 1",
    label: "pięć szkoleń i jeden warsztat wspierający",
  },
  {
    icon: "badge",
    value: "od 299 zł",
    label: "kurs online z testem i imiennym certyfikatem",
  },
  {
    icon: "map",
    value: "cała Polska",
    label: "kursy online, stacjonarnie na życzenie",
  },
] as const;

export const marquee = [
  "Autorski Model 4R z Fundamentem",
  "Pakiet „Bezpieczna Firma” — wszystko w jednym",
  "Procedura antymobbingowa dla MŚP",
  "Nagrane kursy online — dostęp 60 dni",
  "Test i imienny certyfikat",
  "Szkolenia stacjonarne na życzenie",
  "Checklisty i workbooki",
  "Schemat 24 h – 72 h – 7 dni",
  "Cała Polska",
  "Materiały zostają w firmie",
] as const;

/**
 * Cztery grupy odbiorców — z treści dokumentu klientki („Dla kogo”).
 * Każda prowadzi do szkolenia napisanego dla tej roli.
 */
export const audiences = [
  {
    id: "pracownicy",
    title: "Pracownicy i świadkowie",
    description:
      "Nazwać to, co się dzieje, odróżnić konflikt od mobbingu i wiedzieć, jaki krok jest możliwy dziś.",
    href: "/szkolenia/czy-to-juz-mobbing",
    training: "01",
  },
  {
    id: "liderzy",
    title: "Liderzy i HR",
    description:
      "Przyjąć zgłoszenie, nie pogorszyć sytuacji, zadbać o poufność i poprowadzić sprawę procedurą.",
    href: "/szkolenia/jak-wspierac-pracownika",
    training: "02",
  },
  {
    id: "pracodawcy",
    title: "Pracodawcy MŚP",
    description:
      "Jasne zasady i prosta procedura antymobbingowa bez korporacyjnego żargonu i martwych dokumentów.",
    href: "/szkolenia/msp-bez-chaosu",
    training: "03",
  },
  {
    id: "komisje",
    title: "Komisje antymobbingowe",
    description:
      "Bezstronna analiza zgłoszenia, rzetelne rozmowy ze stronami i dokumentacja, która się broni.",
    href: "/szkolenia/komisja-antymobbingowa",
    training: "05",
  },
] as const;
