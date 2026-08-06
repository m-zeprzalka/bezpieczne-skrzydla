/**
 * Treść wersji MVP — ostatecznej strony zbudowanej według maila klientki
 * z 3.08.2026.
 *
 * Baza: wariant G. Z wariantu C przychodzi blok „Co słyszę najczęściej”
 * (żyje w `content-c.ts` i jest używany bez zmian), z wariantu F blok
 * „Co wyróżnia Bezpieczne Skrzydła” oraz prezentacja czterech etapów
 * Modelu 4R (`content-f.ts`). Tutaj mieszka wyłącznie to, co w mailu
 * jest NOWE: warstwa FUNDAMENT, cennik, korekta „szkolenie online
 * = nagrany kurs e-learningowy” oraz formularz „Poproś o wycenę”.
 *
 * Zasady redakcyjne z maila:
 *  — pierwsza osoba liczby pojedynczej,
 *  — pięć szkoleń i jeden warsztat (warsztat NIE jest szkoleniem),
 *  — żadnych obietnic zajęć na żywo przez internet,
 *  — przy kwotach bez słowa „netto” — podana kwota jest kwotą do zapłaty.
 */

export const navMvp = [
  { label: "O Bezpiecznych Skrzydłach", href: "#o-nas" },
  { label: "Model 4R", href: "#model-4r" },
  { label: "Szkolenia", href: "#oferta" },
  { label: "Cennik", href: "#cennik" },
  { label: "Baza wiedzy", href: "#baza-wiedzy" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

/* ————— sekcja powitalna ————— */

export const marqueeMvp = [
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

export const heroChipsMvp = [
  { title: "Autorska metoda", text: "Model 4R z Fundamentem" },
  { title: "Kurs online", text: "od 299 zł · dostęp 60 dni" },
  { title: "Na życzenie", text: "szkolenie stacjonarne" },
] as const;

export const heroStatsMvp = [
  { icon: "compass", value: "4R", label: "autorski model z warstwą Fundament" },
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

/* ————— Model 4R z Fundamentem — drugi blok strony ————— */

export const modelMvp = {
  index: "01",
  label: "Moje podejście · Model 4R",
  /* Nowy akapit dopisany do dwóch akapitów podejścia z dokumentu. */
  foundationIntro:
    "Zgodnie z nowelizacją Kodeksu pracy rozwinęłam model o warstwę FUNDAMENT — wcześniej nazywaną Regułami. Cztery etapy dzieją się po kolei, kiedy coś już się wydarzy. Fundament działa wcześniej i trwa cały czas, cyklicznie: to prewencja, która sprawia, że w trudnym momencie firma nie zaczyna od zera.",
  stepsCaption: "cztery etapy — od pierwszego sygnału do zamknięcia sprawy",
  foundation: {
    name: "Fundament",
    formerly: "warstwa prewencyjna · wcześniej: Reguły",
    claim: "Działa zanim cokolwiek się wydarzy — i nie przestaje działać.",
    items: [
      "regulaminy i polityki antymobbingowe",
      "ścieżka zgłoszeń",
      "mapa ról",
      "komunikacja",
      "szkolenia",
      "przegląd",
    ],
    note: "Fundament nie jest piątym etapem. To osobna, stale obecna warstwa prewencyjna — cztery etapy uruchamiają się dopiero wtedy, gdy coś już się wydarzy.",
    arrowDown: { from: "Rozwiązuj", label: "wnioski i dane" },
    arrowUp: { to: "Rozpoznaj", label: "gotowość" },
  },
} as const;

/* ————— szkolenia i warsztat — stanowczo rozdzielone ————— */

export const trainingsMvp = {
  index: "02",
  label: "Oferta · Szkolenia",
  lead: "Każde szkolenie ma formę nagranego kursu online: moduły z krótkimi lekcjami wideo, test (10–20 pytań) i imienny certyfikat. Na życzenie klienta prowadzę też wersję stacjonarną.",
} as const;

export const workshopMvp = {
  index: "03",
  label: "Warsztat wspierający",
  badge: "To warsztat, nie szkolenie",
  /* Warsztat nie wlicza się do liczby programów szkoleniowych. */
  distinction:
    "„Bezpieczne Skrzydła przy kawie” to jedyny warsztat w mojej ofercie — celowo trzymam go z dala od pięciu szkoleń. Nie ma tu testu, certyfikatu ani procedur. Jest spotkanie.",
} as const;

/* ————— cennik — celowo prosty ————— */

export const pricingMvp = {
  index: "05",
  label: "Cennik",
  lead: "Celowo prosty. Podana kwota jest kwotą do zapłaty — nie doliczam VAT i nie piszę gwiazdek.",
  cta: "Poproś o wycenę",
  flagship: {
    badge: "Produkt flagowy",
    name: "Pakiet „Bezpieczna Firma”",
    price: "10 900 zł",
    description:
      "Procedura, regulamin, mini audyt dokumentacji, przeszkolona kadra (szkolenie online dopasowane do stanowiska pracownika) do 30 osób, wszystko w jednym. Dla firmy, która po nowelizacji chce zamknąć temat od razu, a nie w trzech podejściach.",
  },
  plans: [
    {
      name: "Kurs online dla jednej osoby",
      price: "od 299 zł",
      description:
        "Nagrane lekcje wideo, materiały do pobrania, test i imienny certyfikat. Dostęp 60 dni, do przerobienia we własnym tempie.",
    },
    {
      name: "Pakiet dla firmy",
      price: "od 2 390 zł",
      description:
        "Dostępy do kursu dla całego zespołu i certyfikaty dla uczestników. W cenie raport z realizacji szkolenia, imienna lista przeszkolonych osób z datami, czyli dokumentacja działań prewencyjnych pracodawcy.",
    },
    {
      name: "Wdrożenie „MŚP bez chaosu”",
      price: "od 2 900 zł",
      description:
        "Procedura antymobbingowa, wzory dokumentów i konsultacje. Dla firm bez działu HR, które potrzebują gotowego rozwiązania, a nie kolejnego szkolenia.",
    },
    {
      name: "Szkolenie stacjonarne",
      price: "od 6 900 zł",
      description:
        "Na życzenie klienta, grupa 10–15 osób. Dojazd, nocleg i sala rozliczane osobno, zawsze ustalone przed podpisaniem umowy.",
    },
  ],
  emphasis: "Każdą ofertę przygotowuję indywidualnie, po bezpłatnej rozmowie.",
  emphasisNote:
    "Strona pokazuje rząd wielkości — nie zastępuje wyceny. Napisz, a odpowiem konkretną propozycją.",
} as const;

/* ————— FAQ — z korektą „online = nagrany kurs” ————— */

export const faqMvp = [
  {
    q: "Czy „szkolenie online” oznacza spotkanie na żywo przez internet?",
    a: "Nie. Szkolenie online to u mnie nagrany kurs e-learningowy: moduły, a w nich krótkie lekcje wideo, do przerobienia we własnym tempie w ciągu 60 dni. Nie prowadzę szkoleń na żywo przez internet i na tę chwilę nie planuję webinarów. Jedyną formą na żywo jest szkolenie stacjonarne — na życzenie klienta, dla grupy 10–15 osób.",
  },
  {
    q: "Jak wygląda zaliczenie kursu i certyfikat?",
    a: "Po przerobieniu lekcji czeka krótki test — od 10 do 20 pytań. Po jego zaliczeniu wystawiam imienny certyfikat. W pakiecie dla firmy dołączam dodatkowo raport z realizacji szkolenia oraz imienną listę przeszkolonych osób z datami — to gotowa dokumentacja działań prewencyjnych pracodawcy.",
  },
  {
    q: "Czy szkolenie ma sens w małej firmie, gdzie wszyscy się znają?",
    a: "Tak. „U nas wszyscy się znają” to jedno z najczęstszych przekonań w MŚP — a przekraczanie granic, nieprawidłowa komunikacja i przemoc psychiczna mogą pojawić się w każdej organizacji. W małej firmie procedura nie musi być rozbudowana. Potrzebne są jasne zasady, czytelna ścieżka zgłoszeń i podział odpowiedzialności.",
  },
  {
    q: "Czy program da się dopasować do naszej organizacji?",
    a: "Zawsze. Przed przygotowaniem oferty poznaję potrzeby firmy, jej wielkość, możliwości i najważniejsze wyzwania. Na tej podstawie dopasowuję zakres, materiały oraz formę — tak, aby nie płacić za elementy, których organizacja nie potrzebuje. Każdą ofertę przygotowuję indywidualnie, po bezpłatnej rozmowie.",
  },
  {
    q: "Co uczestnicy dostają poza samym szkoleniem?",
    a: "Checklisty, karty pracy, workbooki, schematy działania, wzory notatek, przewodniki i materiały wdrożeniowe. Zależy mi na tym, żeby szkolenie nie kończyło się wraz z ostatnią lekcją — uczestnik korzysta z tych narzędzi również później.",
  },
  {
    q: "Czy warsztat „Bezpieczne Skrzydła przy kawie” to szkolenie albo terapia?",
    a: "Ani jedno, ani drugie. To warsztat wspierający — kameralne spotkanie dla osób po trudnych doświadczeniach w pracy. Nie jest to psychoterapia, interwencja kryzysowa ani indywidualna pomoc psychologiczna, nie ma tu też testu ani certyfikatu. To edukacyjna i wspierająca przestrzeń dla osób, które potrzebują się zatrzymać i poczuć zrozumienie.",
  },
] as const;

/* ————— formularz „Poproś o wycenę” ————— */

export const quoteFormMvp = {
  index: "12",
  label: "Kontakt · Wycena",
  lead: "Kilka pytań wstępnych pomoże mi określić kierunek wyceny. Odpowiadam propozycją zakresu, formy i kwoty — bez zobowiązań, zwykle w ciągu jednego dnia roboczego.",
  interestLegend: "Czego ma dotyczyć wycena?",
  interests: [
    "Pakiet „Bezpieczna Firma”",
    "Kurs online dla jednej osoby",
    "Pakiet dla firmy",
    "Wdrożenie „MŚP bez chaosu”",
    "Szkolenie stacjonarne",
    "Warsztat „przy kawie”",
    "Jeszcze nie wiem",
  ],
  teamLegend: "Ile osób chcesz przeszkolić?",
  teamSizes: ["1 osoba", "2–10 osób", "11–30 osób", "ponad 30 osób"],
  procedureLegend: "Czy firma ma procedurę antymobbingową?",
  procedureOptions: ["Tak", "Nie", "Nie wiem"],
} as const;

/* ————— stopka — bez obietnicy zajęć na żywo ————— */

export const footerMvp = {
  description:
    "Marka edukacyjno-wspierająca poświęcona przeciwdziałaniu mobbingowi, dyskryminacji i przemocy psychicznej w środowisku pracy. Nagrane kursy online z testem i imiennym certyfikatem, a na życzenie klienta szkolenia stacjonarne — w całej Polsce.",
} as const;
