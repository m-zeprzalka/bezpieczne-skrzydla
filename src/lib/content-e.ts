/**
 * Treść wariantu E.
 *
 * Fakty (dane firmy, programy, cennik, Model 4R, FAQ) bierzemy z `content.ts`.
 * Tutaj mieszkają wyłącznie teksty pisane pod ten układ.
 */

export const navE = [
  { label: "Szkolenia", href: "#szkolenia" },
  { label: "Model 4R", href: "#model" },
  { label: "Dla kogo", href: "#dla-kogo" },
  { label: "Cennik", href: "#cennik" },
  { label: "O mnie", href: "#o-mnie" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const heroE = {
  titleBefore: "Bezpieczna praca da się",
  titleMarked: "zaprojektować",
  lead: "Prowadzę **szkolenia i warsztaty** z przeciwdziałania mobbingowi oraz przemocy psychicznej w pracy. Dla pracowników, HR, pracodawców i komisji antymobbingowych — online i stacjonarnie.",
  primaryCta: { label: "Zapytaj o szkolenie", href: "#kontakt" },
  secondaryCta: { label: "Poznaj Model 4R", href: "#model" },
  visualCaption: "Autorski Model 4R",
  visualSub: "Rozpoznaj · Reaguj · Raportuj · Rozwiązuj",
} as const;

export const trustE = {
  label: "Szkolę osoby na każdym poziomie organizacji:",
  items: [
    "Pracownicy i świadkowie",
    "Liderzy",
    "HR i kadry",
    "Pracodawcy MŚP",
    "Komisje antymobbingowe",
  ],
} as const;

export const servicesE = {
  titleBefore: "Co mogę dla Ciebie",
  titleMarked: "zrobić?",
  lead: "Trzy sposoby współpracy. Zakres, długość i materiały zawsze ustalam po krótkiej rozmowie.",
  items: [
    {
      number: "01",
      title: "Szkolenia dla zespołów",
      body: "Pięć gotowych programów dopasowanych do roli w organizacji — od pracownika po członka komisji antymobbingowej. Online lub stacjonarnie.",
      points: [
        "Materiały wdrożeniowe zostają w firmie",
        "Imienne certyfikaty dla uczestników",
        "Zakres dopasowany do wielkości zespołu",
      ],
      cta: { label: "Zobacz programy", href: "#szkolenia" },
    },
    {
      number: "02",
      title: "Procedura antymobbingowa",
      body: "Prosta procedura dla mikro, małych i średnich firm: jasne zasady, czytelna ścieżka zgłoszeń i podział odpowiedzialności. Bez korporacyjnego żargonu.",
      points: [
        "Wzór procedury napisany prostym językiem",
        "Schemat pierwszych siedmiu dni po zgłoszeniu",
        "Gotowy komunikat do pracowników",
      ],
      cta: { label: "Zapytaj o procedurę", href: "#kontakt" },
    },
    {
      number: "03",
      title: "Warsztat wspierający",
      body: "Kameralne spotkanie dla osób po trudnych doświadczeniach w pracy. Przestrzeń bez oceniania, w której można mówić, słuchać albo po prostu być.",
      points: [
        "Grupa kameralna",
        "Ćwiczenia refleksyjne i workbook",
        "Nie jest to psychoterapia ani interwencja kryzysowa",
      ],
      cta: { label: "Zapytaj o termin", href: "#kontakt" },
    },
  ],
} as const;

export const modelE = {
  label: "Autorski Model 4R",
  titleBefore: "Cztery kroki, które porządkują",
  titleMarked: "trudną sytuację",
  lead: "Ten sam schemat stoi za każdym moim programem. Uczestnik nie wychodzi z definicjami, tylko z kolejnością działań.",
} as const;

export const programsE = {
  label: "Szkolenia",
  titleBefore: "Pięć programów i jeden",
  titleMarked: "warsztat",
  lead: "Każdy odpowiada na inny moment w organizacji — od pierwszego niepokojącego sygnału po pracę komisji antymobbingowej.",
} as const;

export const audiencesE = {
  label: "Dla kogo",
  titleBefore: "Inna rola,",
  titleMarked: "inna wiedza",
  lead: "Innych informacji potrzebuje pracownik, innych świadek, a jeszcze innych pracodawca czy członek komisji. Zakres i język dopasowuję do grupy.",
} as const;

export const aboutE = {
  label: "O mnie",
  titleBefore: "Nie mówię o mobbingu",
  titleMarked: "wyłącznie z definicji",
  paragraphs: [
    "Nazywam się Małgorzata Just. Bezpieczne Skrzydła nie powstały wyłącznie z pomysłu na firmę — powstały z doświadczenia.",
    "Doświadczyłam mobbingu i wiem, jak odbiera człowiekowi spokój, pewność siebie i zaufanie do własnych odczuć. Brakowało mi wtedy miejsca, w którym ktoś pomógłby mi spokojnie nazwać sytuację i uporządkować fakty.",
    "Dlatego uczę wcześniej: zanim ktoś zwątpi w siebie i zanim problem zamieni się w kryzys.",
  ],
  facts: [
    { value: "4R", label: "autorski model działania" },
    { value: "6", label: "programów do wyboru" },
    { value: "cała Polska", label: "online i stacjonarnie" },
  ],
  quote:
    "Bezpieczna praca nie powinna być luksusem ani pustym hasłem zapisanym w procedurze.",
} as const;

export const pricingE = {
  label: "Cennik",
  titleBefore: "Widełki podaję",
  titleMarked: "od razu",
  lead: "Ostateczna kwota zależy od liczby uczestników, czasu trwania i wybranego zakresu. Nie ma ukrytych pozycji.",
  note: "Przy szkoleniu stacjonarnym do ceny mogą dojść wcześniej uzgodnione koszty dojazdu, noclegu, sali i organizacji spotkania. Ustalam je przed podpisaniem umowy.",
} as const;

export const faqE = {
  label: "Pytania",
  titleBefore: "Zanim",
  titleMarked: "napiszesz",
} as const;

export const contactE = {
  label: "Kontakt",
  titleBefore: "Zacznijmy od",
  titleMarked: "rozmowy",
  lead: "Napisz, w jakiej sytuacji jest Twoja organizacja i kogo chcesz przeszkolić. Odpowiem propozycją zakresu, formy i wyceny.",
  reasons: [
    "Rozmowa wstępna jest bezpłatna i do niczego nie zobowiązuje",
    "Wycena dopasowana do wielkości i możliwości firmy",
    "Odpowiadam zwykle w ciągu jednego dnia roboczego",
  ],
} as const;
