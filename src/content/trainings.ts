/**
 * Pięć szkoleń — pełne opisy z dokumentu klientki, bez skrótów.
 *
 * Reguły nienegocjowalne (mail 3.08.2026):
 *  — „szkolenie online” = nagrany kurs e-learningowy (moduły, lekcje wideo,
 *    test 10–20 pytań, imienny certyfikat, dostęp 60 dni); zero zajęć na żywo
 *    przez internet,
 *  — jedyna forma na żywo: szkolenie stacjonarne na życzenie (grupa 10–15 osób),
 *  — pięć szkoleń + jeden warsztat; warsztat NIE jest szkoleniem (`workshop.ts`).
 */

export const trainingsIntro = {
  label: "Oferta · Szkolenia",
  title: "Pięć szkoleń, każde dla innej roli w organizacji",
  lead: "Każde szkolenie ma formę nagranego kursu online: moduły z krótkimi lekcjami wideo, test (10–20 pytań) i imienny certyfikat. Na życzenie klienta prowadzę też wersję stacjonarną.",
} as const;

/** Format kursu — fakty, które powtarzają się na kartach i stronach szkoleń. */
export const courseFormat = [
  {
    icon: "play",
    title: "Nagrane lekcje wideo",
    text: "Moduły z krótkimi lekcjami, do przerobienia we własnym tempie.",
  },
  {
    icon: "clock",
    title: "Dostęp 60 dni",
    text: "Wystarczająco, żeby wrócić do materiału, gdy sytuacja tego wymaga.",
  },
  {
    icon: "check",
    title: "Test 10–20 pytań",
    text: "Krótki sprawdzian po lekcjach — potwierdza, że wiedza została.",
  },
  {
    icon: "award",
    title: "Imienny certyfikat",
    text: "Dla uczestnika; w pakiecie dla firmy także raport i lista przeszkolonych.",
  },
  {
    icon: "package",
    title: "Materiały do pobrania",
    text: "Checklisty, karty pracy, wzory notatek — zostają po zakończeniu kursu.",
  },
  {
    icon: "users",
    title: "Stacjonarnie na życzenie",
    text: "Grupa 10–15 osób, w całej Polsce. Koszty organizacyjne ustalane z góry.",
  },
] as const;

export type Training = {
  slug: string;
  number: string;
  title: string;
  /** Krótka nazwa do nawigacji i kart. */
  shortTitle: string;
  audience: string;
  /** Jedno zdanie na kartę — pierwsze zdanie opisu, bez zmian treści. */
  summary: string;
  paragraphs: string[];
  showsLabel: string;
  shows: string[];
  closing?: string[];
  extra4R?: { intro: string; items: { key: string; text: string }[] };
  materialsLabel?: string;
  materials?: string[];
  /** Powiązany cennik. */
  priceFrom: string;
};

export const trainings: Training[] = [
  {
    slug: "czy-to-juz-mobbing",
    number: "01",
    title: "Czy to już mobbing? Rozpoznaj, Reaguj, Raportuj i Rozwiązuj",
    shortTitle: "Czy to już mobbing?",
    audience: "Szkolenie dla pracowników i świadków trudnych sytuacji w pracy",
    summary:
      "Dla osób, które czują, że w ich miejscu pracy dzieje się coś niepokojącego, ale nie potrafią jeszcze tego nazwać.",
    paragraphs: [
      "Stworzyłam to szkolenie z myślą o osobach, które czują, że w ich miejscu pracy dzieje się coś niepokojącego, ale nie potrafią jeszcze tego nazwać. Być może zastanawiasz się, czy przesadzasz, czy jesteś zbyt wrażliwy, czy może „tak po prostu wygląda praca”. Być może widzisz, że ktoś w Twoim zespole jest poniżany, izolowany, stale krytykowany albo pomijany, ale nie wiesz, jak bezpiecznie zareagować.",
      "Podczas szkolenia pomagam odróżnić konflikt, napięcie w zespole, nieporozumienie i wymagający styl zarządzania od zachowań, które mogą prowadzić do mobbingu lub przemocy psychicznej. Pokazuję, na jakie sygnały warto zwrócić uwagę, dlaczego powtarzalność i długotrwałość mają znaczenie oraz kiedy nie należy już bagatelizować sytuacji.",
      "Mówię również o tym, co dzieje się z człowiekiem, który przez dłuższy czas doświadcza presji, izolowania, upokarzania lub podważania kompetencji. Wyjaśniam, dlaczego osoba krzywdzona może milczeć, wycofywać się, tracić pewność siebie i wątpić we własne odczucia.",
    ],
    showsLabel: "W trakcie szkolenia pokazuję",
    shows: [
      "jak odróżniać konflikt od możliwego mobbingu",
      "jakie zachowania są czerwonymi flagami",
      "jak rzeczowo dokumentować sytuacje",
      "jak oddzielać fakty od emocji i ocen",
      "jakie pierwsze kroki można rozważyć",
      "jak może zareagować świadek",
      "gdzie szukać odpowiedniego wsparcia",
      "jak wykorzystać Model 4R w trudnej sytuacji",
    ],
    closing: [
      "Nie narzucam jednej drogi postępowania. Każda sytuacja jest inna i wymaga uwzględnienia bezpieczeństwa osoby, która jej doświadcza. Chcę jednak pokazać, że pierwszym krokiem może być nazwanie tego, co się dzieje, uporządkowanie faktów i odzyskanie poczucia wpływu.",
    ],
    materialsLabel: "Do szkolenia mogą zostać dołączone między innymi",
    materials: [
      "checklista „Konflikt czy mobbing?”",
      "karta czerwonych flag",
      "karta dokumentowania trudnych sytuacji",
      "lista pierwszych kroków",
      "mini przewodnik dla świadka",
      "karta „Co mogę zrobić dziś?”",
      "mapa Modelu 4R dla pracownika",
      "lista możliwych miejsc i form wsparcia",
    ],
    priceFrom: "od 299 zł",
  },
  {
    slug: "jak-wspierac-pracownika",
    number: "02",
    title: "Jak wspierać pracownika w sprawie mobbingu",
    shortTitle: "Jak wspierać pracownika",
    audience:
      "Szkolenie dla przedstawicieli pracowników, liderów, kadry zarządzającej i HR",
    summary:
      "Dla osób, które odpowiadają za ludzi, relacje, procedury oraz bezpieczeństwo w organizacji.",
    paragraphs: [
      "To szkolenie dla osób, które odpowiadają za ludzi, relacje, procedury oraz bezpieczeństwo w organizacji. Kieruję je do przedstawicieli pracowników, liderów, menedżerów, osób pracujących w HR i kadrach oraz wszystkich, którzy mogą zostać poproszeni o wsparcie w trudnej sytuacji zawodowej.",
      "Pokazuję w nim, że wspieranie pracownika nie polega na natychmiastowym wydawaniu ocen, szukaniu winnego ani obiecywaniu szybkiego rozwiązania. Odpowiedzialne wsparcie zaczyna się od uważnego wysłuchania, spokojnego zebrania informacji, zadbania o poufność oraz skierowania sprawy na właściwą ścieżkę.",
      "Łączę wiedzę z zakresu prawa pracy, zarządzania, HR i komunikacji z praktycznym spojrzeniem na codzienne funkcjonowanie organizacji. Zależy mi na tym, aby uczestnicy wiedzieli nie tylko, jakie obowiązki spoczywają na pracodawcy, ale również jak rozmawiać z człowiekiem, który przychodzi z lękiem, wstydem lub poczuciem bezradności.",
    ],
    showsLabel: "Podczas szkolenia pokazuję",
    shows: [
      "czym mobbing różni się od konfliktu i egzekwowania obowiązków",
      "jak rozpoznawać pierwsze sygnały ostrzegawcze",
      "jak wspierać pracownika bez składania obietnic bez pokrycia",
      "jak reagować zgodnie z procedurami",
      "jak chronić poufność",
      "jak dokumentować zdarzenia i rozmowy",
      "jak zapobiegać eskalacji problemu",
      "jak budować kulturę pracy opartą na szacunku i dialogu",
    ],
    closing: [
      "Szkolenie opieram na Modelu 4R, który porządkuje działania od pierwszego sygnału do zaplanowania dalszych kroków. Uczestnicy otrzymują nie tylko wiedzę, ale również konkretne narzędzia, schematy reagowania, przykłady sytuacji oraz zadania pomagające przełożyć szkolenie na codzienną praktykę.",
    ],
    priceFrom: "od 299 zł",
  },
  {
    slug: "msp-bez-chaosu",
    number: "03",
    title: "MŚP bez chaosu",
    shortTitle: "MŚP bez chaosu",
    audience: "Szkolenie i procedura dla pracodawców",
    summary:
      "Dla właścicieli i osób zarządzających mikro, małymi oraz średnimi firmami, które chcą działać odpowiedzialnie bez rozbudowanego działu HR.",
    paragraphs: [
      "„MŚP bez chaosu” jest dla właścicieli, pracodawców i osób zarządzających mikro, małymi oraz średnimi firmami. Szczególnie dla tych, którzy chcą odpowiedzialnie przeciwdziałać mobbingowi i przemocy psychicznej, ale nie mają rozbudowanego działu HR ani czasu na tworzenie skomplikowanych dokumentów.",
      "W małych firmach często pojawia się przekonanie: „u nas wszyscy się znają”, „jesteśmy małym zespołem” albo „procedury są potrzebne tylko korporacjom”. Tymczasem przekraczanie granic, konflikty, nieprawidłowa komunikacja i przemoc psychiczna mogą pojawić się w każdej organizacji.",
      "Pokazuję, że przeciwdziałanie mobbingowi nie musi oznaczać korporacyjnego żargonu, nadmiernego formalizmu ani dokumentów, których nikt nie rozumie. Mała firma potrzebuje przede wszystkim jasnych zasad, czytelnej ścieżki zgłoszeń, podziału odpowiedzialności oraz przygotowania do spokojnej reakcji.",
    ],
    showsLabel: "Podczas szkolenia pomagam uporządkować",
    shows: [
      "obowiązki pracodawcy",
      "sposób przyjmowania zgłoszeń",
      "zasady ochrony poufności",
      "role poszczególnych osób w firmie",
      "podstawową procedurę antymobbingową",
      "sposób komunikowania procedury pracownikom",
      "dokumentowanie podjętych działań",
      "schemat pierwszych siedmiu dni po zgłoszeniu",
      "plan wdrożenia działań po szkoleniu",
    ],
    closing: [
      "Szczególną uwagę poświęcam temu, aby procedura nie była martwym dokumentem schowanym w segregatorze. Powinna być napisana prostym językiem i odpowiadać na konkretne pytania pracowników: gdzie można zgłosić problem, kto przyjmie zgłoszenie, co wydarzy się później i w jaki sposób będą chronione informacje.",
      "Moim celem jest przeprowadzenie firmy od deklaracji „nie tolerujemy mobbingu” do konkretnych działań, które pracodawca i pracownicy naprawdę rozumieją.",
    ],
    materialsLabel: "Program może obejmować",
    materials: [
      "wzór prostej procedury antymobbingowej dla MŚP",
      "checklistę zabezpieczeń pracodawcy",
      "plan wdrożenia Modelu 4R",
      "wzór komunikatu do pracowników",
      "schemat „24 godziny – 72 godziny – 7 dni”",
      "mapę odpowiedzialności w firmie",
      "listę najczęstszych błędów pracodawcy",
      "kartę „Moje 5 działań po szkoleniu”",
    ],
    priceFrom: "od 2 900 zł",
  },
  {
    slug: "pierwsze-24-godziny",
    number: "04",
    title: "Pierwsze 24 godziny po zgłoszeniu",
    shortTitle: "Pierwsze 24 godziny",
    audience: "Szkolenie dla HR, menedżerów, kierowników i pracodawców",
    summary:
      "Pierwsza reakcja po zgłoszeniu może otworzyć drogę do rozwiązania albo sprawić, że pracownik już nigdy nie poprosi o pomoc.",
    paragraphs: [
      "Pierwsza reakcja po zgłoszeniu trudnej sytuacji może otworzyć drogę do odpowiedzialnego rozwiązania albo sprawić, że pracownik wycofa się i już więcej nie poprosi o pomoc.",
      "To szkolenie stworzyłam dla osób, które jako pierwsze mogą usłyszeć od pracownika: „dzieje się coś niepokojącego”, „nie czuję się bezpiecznie” albo „chcę zgłosić mobbing”.",
      "Nie oczekuję, że osoba przyjmująca zgłoszenie będzie od razu znała wszystkie odpowiedzi. Powinna jednak wiedzieć, jak nie pogorszyć sytuacji. Przypadkowe komentarze, ocenianie, brak notatki, przekazywanie informacji niewłaściwym osobom czy pochopne obietnice mogą zwiększyć lęk i chaos.",
    ],
    showsLabel: "Podczas szkolenia pokazuję",
    shows: [
      "jak spokojnie przyjąć zgłoszenie",
      "jak wysłuchać bez przesłuchiwania i oceniania",
      "jakie pytania pomagają uporządkować fakty",
      "jakich komunikatów należy unikać",
      "jak sporządzić rzeczową notatkę",
      "jak chronić poufność",
      "komu i w jakim zakresie można przekazać informacje",
      "jakich decyzji nie podejmować pochopnie",
      "jak zaplanować działania w ciągu 24 godzin, 72 godzin i 7 dni",
    ],
    closing: [
      "Uczę, że wysłuchanie nie oznacza automatycznego uznania racji jednej ze stron. Oznacza potraktowanie człowieka z szacunkiem oraz zebranie informacji potrzebnych do zaplanowania kolejnych kroków.",
    ],
    extra4R: {
      intro: "Model 4R pomaga uporządkować ten pierwszy etap:",
      items: [
        {
          key: "Rozpoznaj",
          text: "zauważ wagę zgłoszenia i nie bagatelizuj sygnałów.",
        },
        {
          key: "Reaguj",
          text: "wysłuchaj i zadbaj o bezpieczeństwo rozmowy.",
        },
        { key: "Raportuj", text: "zapisz fakty i zabezpiecz informacje." },
        {
          key: "Rozwiązuj",
          text: "zaplanuj dalszy tryb prowadzenia sprawy.",
        },
      ],
    },
    materialsLabel: "Do szkolenia mogą zostać dołączone",
    materials: [
      "checklista pierwszej rozmowy",
      "wzór notatki z przyjęcia zgłoszenia",
      "lista zdań wspierających i neutralnych",
      "lista komunikatów, których warto unikać",
      "schemat „24 h – 72 h – 7 dni”",
      "karta poufności informacji",
      "mapa ról po zgłoszeniu",
      "plan działania według Modelu 4R",
      "lista najczęstszych błędów po otrzymaniu zgłoszenia",
    ],
    priceFrom: "od 299 zł",
  },
  {
    slug: "komisja-antymobbingowa",
    number: "05",
    title: "Komisja antymobbingowa w praktyce",
    shortTitle: "Komisja antymobbingowa",
    audience:
      "Szkolenie dla członków komisji antymobbingowych i osób analizujących zgłoszenia",
    summary:
      "Praca komisji ma realny wpływ na bezpieczeństwo pracowników, zaufanie do organizacji oraz sposób rozwiązania trudnej sytuacji.",
    paragraphs: [
      "Komisja antymobbingowa nie powinna być jedynie formalnością powoływaną dlatego, że wymaga tego procedura. Jej praca ma realny wpływ na bezpieczeństwo pracowników, zaufanie do organizacji oraz sposób rozwiązania trudnej sytuacji.",
      "Pokazuję, jak przygotować członków komisji do spokojnego, bezstronnego i odpowiedzialnego działania. Omawiam cały proces: od przyjęcia sprawy, przez analizę dostępnych informacji i rozmowy ze stronami, aż po dokumentowanie ustaleń i przygotowanie rekomendacji.",
      "Szczególną uwagę zwracam na zachowanie bezstronności. Członek komisji nie powinien rozpoczynać pracy z gotową oceną ani utożsamiać emocji z dowodami. Jednocześnie nie może bagatelizować doświadczeń osób, które biorą udział w postępowaniu.",
    ],
    showsLabel: "Podczas szkolenia pokazuję",
    shows: [
      "jak określić role członków komisji",
      "jak analizować zgłoszenie i dostępne materiały",
      "jak przygotować się do rozmów",
      "jak zadawać neutralne i rzeczowe pytania",
      "jak oddzielać fakty od opinii",
      "jak dokumentować przebieg postępowania",
      "jak chronić poufność informacji",
      "jak rozpoznawać konflikt interesów",
      "jak unikać błędów pogłębiających konflikt",
      "jak przygotować wnioski i rekomendacje",
    ],
    closing: [
      "Moim celem jest uporządkowanie pracy komisji tak, aby jej działania były rzetelne, przejrzyste i budowały zaufanie do procedury antymobbingowej.",
    ],
    priceFrom: "od 299 zł",
  },
];

export function getTraining(slug: string) {
  return trainings.find((training) => training.slug === slug);
}
