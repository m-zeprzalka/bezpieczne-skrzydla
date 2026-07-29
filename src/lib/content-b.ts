/**
 * Treść wariantu B.
 *
 * Fakty (dane firmy, programy, cennik, FAQ, misja) współdzielimy z wariantem A
 * przez `content.ts` — to jedno źródło prawdy. Tutaj żyje wyłącznie to, czego
 * wariant A nie ma: podział na role odwiedzającego, samosprawdzenie i oś czasu.
 */

export type RoleId = "pracownik" | "lider" | "pracodawca" | "komisja";

export const heroB = {
  kicker: "Przeciwdziałanie mobbingowi i przemocy psychicznej w pracy",
  titleLead: "Od „chyba coś jest nie tak”",
  titleAccent: "do konkretnego planu",
  titleTail: "działania",
  description:
    "Szkolenia, procedury i gotowe narzędzia dla organizacji, które nie chcą czekać, aż trudna sytuacja stanie się kryzysem. Uczę tego, co zrobić w pierwszej dobie, pierwszych trzech dniach i pierwszym tygodniu po zgłoszeniu.",
  rolePrompt: "Zacznij od tego, kim jesteś",
  facts: [
    { value: "4", label: "etapy Modelu 4R" },
    { value: "6", label: "programów do wyboru" },
    { value: "229 zł", label: "od tej kwoty za osobę" },
    { value: "cała Polska", label: "online i stacjonarnie" },
  ],
} as const;

export const roles: {
  id: RoleId;
  tab: string;
  short: string;
  situation: string;
  answer: string;
  gains: string[];
  program: string;
  cta: string;
}[] = [
  {
    id: "pracownik",
    tab: "Jestem pracownikiem",
    short: "Pracownik lub świadek",
    situation:
      "„Widzę, że dzieje się coś niepokojącego, ale nie wiem, czy nie przesadzam”.",
    answer:
      "Pomogę Ci nazwać sytuację, oddzielić fakty od emocji i zobaczyć, jaki krok jest możliwy dziś. Nie narzucam jednej drogi — każda sytuacja jest inna i wymaga uwzględnienia Twojego bezpieczeństwa.",
    gains: [
      "Jak odróżnić konflikt i wymagający styl zarządzania od mobbingu",
      "Jak rzeczowo dokumentować to, co się dzieje",
      "Jak może zareagować świadek i gdzie szukać wsparcia",
    ],
    program: "01",
    cta: "Zobacz szkolenie dla pracowników",
  },
  {
    id: "lider",
    tab: "Kieruję zespołem lub pracuję w HR",
    short: "Lider, menedżer, HR",
    situation:
      "„Ktoś może przyjść z takim zgłoszeniem do mnie. Nie chcę pogorszyć sprawy”.",
    answer:
      "Nauczę Cię przyjąć zgłoszenie tak, żeby nie zamknąć człowiekowi drogi do pomocy: wysłuchać bez przesłuchiwania, zabezpieczyć poufność i skierować sprawę na właściwą ścieżkę.",
    gains: [
      "Jak przyjąć pierwsze zgłoszenie i sporządzić rzeczową notatkę",
      "Jakich komunikatów i decyzji unikać w pierwszej dobie",
      "Jak wspierać bez składania obietnic bez pokrycia",
    ],
    program: "04",
    cta: "Zobacz szkolenie dla HR i menedżerów",
  },
  {
    id: "pracodawca",
    tab: "Prowadzę firmę",
    short: "Pracodawca MŚP",
    situation:
      "„Nie mam działu HR ani czasu na tworzenie skomplikowanych dokumentów”.",
    answer:
      "Poukładam u Ciebie zasady, ścieżkę zgłoszeń i podział odpowiedzialności — prostym językiem, w formie, którą zespół naprawdę zrozumie. Bez korporacyjnego żargonu i martwych procedur w segregatorze.",
    gains: [
      "Prosta procedura antymobbingowa dopasowana do MŚP",
      "Czytelna ścieżka zgłoszeń i podział odpowiedzialności",
      "Plan wdrożenia i gotowy komunikat do pracowników",
    ],
    program: "03",
    cta: "Zobacz szkolenie dla pracodawców",
  },
  {
    id: "komisja",
    tab: "Jestem w komisji",
    short: "Komisja antymobbingowa",
    situation:
      "„Mamy zgłoszenie i musimy rozpatrzyć je rzetelnie oraz bezstronnie”.",
    answer:
      "Przeprowadzę komisję przez cały proces: od przyjęcia sprawy, przez analizę materiałów i rozmowy ze stronami, po dokumentowanie ustaleń i przygotowanie rekomendacji.",
    gains: [
      "Jak zadawać neutralne pytania i oddzielać fakty od opinii",
      "Jak dokumentować przebieg postępowania",
      "Jak rozpoznać konflikt interesów i uniknąć błędów pogłębiających konflikt",
    ],
    program: "05",
    cta: "Zobacz szkolenie dla komisji",
  },
];

/** Który program odpowiada której roli — steruje podświetleniem w tabeli oferty. */
export const programRoles: Record<string, RoleId[]> = {
  "01": ["pracownik"],
  "02": ["lider"],
  "03": ["pracodawca"],
  "04": ["lider", "pracodawca"],
  "05": ["komisja"],
};

export const selfCheck = {
  eyebrow: "Narzędzie, nie ulotka",
  title: "Konflikt czy mobbing? Cztery pytania na początek",
  intro:
    "Od tych pytań zaczynam każde szkolenie. Nie odpowiadają, czy doszło do mobbingu — porządkują to, co widzisz, i podpowiadają, co ma sens jako następny krok.",
  questions: [
    {
      id: "powtarzalnosc",
      text: "Czy to zachowanie powtarza się, a nie zdarzyło się raz?",
    },
    {
      id: "czas",
      text: "Czy trwa od dłuższego czasu — tygodni albo miesięcy?",
    },
    {
      id: "ukierunkowanie",
      text: "Czy jest skierowane przeciw konkretnej osobie: izoluje ją, poniża albo podważa jej kompetencje?",
    },
    {
      id: "skutki",
      text: "Czy ta osoba zaczęła się wycofywać, milczeć albo wątpić we własne odczucia?",
    },
  ],
  results: [
    {
      max: 1,
      badge: "Pojedyncze sygnały",
      title: "Na razie widzisz pojedyncze sygnały",
      body: "Powtarzalność i długotrwałość mają znaczenie — jeden trudny epizod albo ostra rozmowa to jeszcze nie mobbing. To dobry moment, żeby zacząć zapisywać fakty: co, kiedy i kto był obecny. Jeśli sytuacja się powtórzy, będziesz mieć punkt odniesienia zamiast wrażeń.",
      next: "Karta dokumentowania trudnych sytuacji",
    },
    {
      max: 2,
      badge: "Warto się przyjrzeć",
      title: "To sygnały, których nie warto bagatelizować",
      body: "Część kryteriów już się spełnia. Nie oznacza to automatycznie mobbingu, ale oznacza, że sytuacja wymaga uwagi, a nie przeczekania. Uporządkuj fakty, oddziel je od ocen i rozważ rozmowę z osobą, która w Twojej organizacji przyjmuje takie zgłoszenia.",
      next: "Checklista „Konflikt czy mobbing?”",
    },
    {
      max: 4,
      badge: "Wzorzec, nie incydent",
      title: "To układa się we wzorzec",
      body: "Powtarzalność, czas trwania i ukierunkowanie na konkretną osobę to sygnały, które w Modelu 4R oznaczają przejście z etapu „Rozpoznaj” do „Reaguj”. Nie musisz od razu wiedzieć, jak nazwać to formalnie — musisz zadbać o bezpieczeństwo rozmowy i zapisać fakty.",
      next: "Mapa Modelu 4R",
    },
  ],
  yes: "Tak",
  no: "Nie",
  unsure: "Nie wiem",
  disclaimer:
    "Odpowiedzi nie są nigdzie zapisywane ani wysyłane — liczenie odbywa się w Twojej przeglądarce. To narzędzie edukacyjne: nie zastępuje porady prawnej, pomocy psychologicznej ani postępowania wyjaśniającego w Twojej organizacji.",
} as const;

export const timeline = {
  eyebrow: "Schemat 24 h — 72 h — 7 dni",
  title: "Co robisz, kiedy ktoś w końcu powie: „dzieje się coś niepokojącego”",
  intro:
    "Pierwsza reakcja może otworzyć drogę do odpowiedzialnego rozwiązania albo sprawić, że pracownik wycofa się i już nigdy nie poprosi o pomoc. Tego schematu uczę na szkoleniach dla HR, menedżerów i pracodawców.",
  note: "To schemat organizacji pracy nad zgłoszeniem, a nie porada prawna dla konkretnej sprawy.",
  phases: [
    {
      key: "24h",
      label: "24 h",
      title: "Przyjęcie zgłoszenia",
      items: [
        "Wysłuchaj bez przesłuchiwania i bez oceniania",
        "Sporządź rzeczową notatkę: fakty, daty, osoby obecne",
        "Zabezpiecz poufność i ustal, kto może wiedzieć",
        "Nie podejmuj pochopnych decyzji personalnych",
      ],
    },
    {
      key: "72h",
      label: "72 h",
      title: "Uporządkowanie sprawy",
      items: [
        "Oddziel fakty od ocen i opinii",
        "Ustal tryb prowadzenia sprawy i role poszczególnych osób",
        "Przekaż informacje wyłącznie tym, którzy muszą je znać",
        "Zaplanuj rozmowy i zadbaj o bezpieczeństwo osoby zgłaszającej",
      ],
    },
    {
      key: "7dni",
      label: "7 dni",
      title: "Rozmowy i rekomendacje",
      items: [
        "Przeprowadź rozmowy według przygotowanego schematu",
        "Udokumentuj przebieg i ustalenia",
        "Przygotuj wnioski i rekomendacje dalszych kroków",
        "Zaplanuj, co i w jakiej formie usłyszy zespół",
      ],
    },
  ],
} as const;

export const proofB = [
  "Autorka Modelu 4R — własnego schematu działania, nie cudzej licencji",
  "Doświadczenie mobbingu z perspektywy osoby, której to dotyczyło",
  "Wiedza z zarządzania, HR i prawa pracy w jednym miejscu",
  "Materiały wdrożeniowe zostają w firmie po zakończeniu szkolenia",
] as const;
