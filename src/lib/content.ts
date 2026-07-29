/**
 * Cała treść strony głównej w jednym miejscu.
 * Dzięki temu przeniesienie na WordPressa (ACF / bloki) sprowadza się do
 * zmapowania tych struktur na pola — bez grzebania w komponentach.
 */

export const site = {
  name: "Bezpieczne Skrzydła",
  owner: "Małgorzata Just",
  tagline:
    "Szkolenia i praktyczne narzędzia dla bezpieczniejszych miejsc pracy",
  url: "https://www.bezpieczneskrzydla.com",
  phone: "789 61 61 31",
  phoneHref: "+48789616131",
  email: "kontakt@bezpieczneskrzydla.com",
  nip: "728 250 06 96",
  regon: "545292029",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61575286035085",
    instagram: "https://www.instagram.com/bezpieczneskrzydla/",
    linkedin: "https://www.linkedin.com/in/bezpieczne-skrzyd%C5%82a",
  },
} as const;

export const nav = [
  { label: "O Bezpiecznych Skrzydłach", href: "#o-mnie" },
  { label: "Model 4R", href: "#model-4r" },
  { label: "Oferta", href: "#oferta" },
  { label: "Cennik", href: "#cennik" },
  { label: "Baza wiedzy", href: "#baza-wiedzy" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const hero = {
  eyebrow: "Mobbing · dyskryminacja · przemoc psychiczna w pracy",
  title: "Szkolenia i praktyczne narzędzia dla bezpieczniejszych miejsc pracy",
  lead: "Bezpieczne miejsce pracy zaczyna się od wiedzy i odwagi reagowania.",
  body: "Tworzę szkolenia, warsztaty i praktyczne materiały dotyczące mobbingu, przemocy psychicznej oraz odpowiedzialnego reagowania na trudne sytuacje w pracy. Wspieram pracowników, liderów, HR, pracodawców i komisje antymobbingowe w budowaniu środowiska opartego na szacunku i bezpieczeństwie.",
  primaryCta: { label: "Poznaj szkolenia i warsztaty", href: "#oferta" },
  secondaryCta: { label: "Poznaj Model 4R", href: "#model-4r" },
  proof: [
    { value: "4R", label: "autorski model działania" },
    { value: "6", label: "programów szkoleniowych" },
    { value: "od 229 zł", label: "kurs online za osobę" },
  ],
} as const;

export const audiences = [
  {
    id: "pracownicy",
    title: "Pracownicy i świadkowie",
    description:
      "Nazwać to, co się dzieje, odróżnić konflikt od mobbingu i wiedzieć, jaki krok jest możliwy dziś.",
  },
  {
    id: "liderzy",
    title: "Liderzy i HR",
    description:
      "Przyjąć zgłoszenie, nie pogorszyć sytuacji, zadbać o poufność i poprowadzić sprawę procedurą.",
  },
  {
    id: "pracodawcy",
    title: "Pracodawcy MŚP",
    description:
      "Jasne zasady i prosta procedura antymobbingowa bez korporacyjnego żargonu i martwych dokumentów.",
  },
  {
    id: "komisje",
    title: "Komisje antymobbingowe",
    description:
      "Bezstronna analiza zgłoszenia, rzetelne rozmowy ze stronami i dokumentacja, która się broni.",
  },
] as const;

export const mission = {
  quote: "Znam tę ciszę, w której człowiek zostaje sam",
  paragraphs: [
    "Bezpieczne Skrzydła nie powstały wyłącznie z pomysłu na firmę. Powstały z doświadczenia.",
    "Doświadczyłam mobbingu i wiem, jak bardzo potrafi on odebrać człowiekowi spokój, pewność siebie i zaufanie do własnych odczuć. Wiem, jak trudno każdego dnia wracać do miejsca, w którym zamiast bezpieczeństwa pojawia się lęk.",
    "Najtrudniejsze nie zawsze są słowa. Czasem najtrudniejsza jest cisza innych ludzi. Brak reakcji. Bagatelizowanie. Poczucie, że nikt nie widzi, jak wiele kosztuje Cię kolejny dzień.",
    "W tamtym czasie brakowało mi miejsca, w którym ktoś pomógłby mi spokojnie nazwać sytuację, uporządkować fakty i zobaczyć możliwe kierunki działania. Brakowało mi prostego komunikatu: „To, czego doświadczasz, ma znaczenie. Nie musisz zostać z tym sama”.",
    "Dlatego stworzyłam Bezpieczne Skrzydła.",
  ],
  closing:
    "Moją misją jest budowanie miejsc pracy, w których człowiek nie musi wybierać między zatrudnieniem a własną godnością.",
} as const;

export const model4r = {
  eyebrow: "Autorski Model 4R",
  title: "Od chaosu do spokojnej, świadomej decyzji",
  description:
    "Praktyczna mapa działania, na której opieram każdy program. Porządkuje to, co dzieje się w trudnej sytuacji — krok po kroku, bez pośpiechu i bez oceniania.",
  steps: [
    {
      key: "rozpoznaj",
      index: "01",
      title: "Rozpoznaj",
      claim: "Zauważ sygnał i nazwij go po imieniu.",
      description:
        "Odróżnienie konfliktu, napięcia w zespole i wymagającego stylu zarządzania od zachowań, które mogą prowadzić do mobbingu. Powtarzalność i długotrwałość mają znaczenie.",
      points: [
        "Czerwone flagi w zachowaniu i komunikacji",
        "Konflikt czy mobbing — gdzie przebiega granica",
        "Sygnały, których nie należy bagatelizować",
      ],
    },
    {
      key: "reaguj",
      index: "02",
      title: "Reaguj",
      claim: "Zadbaj o bezpieczeństwo rozmowy, nie o szybki werdykt.",
      description:
        "Odpowiedzialna reakcja nie polega na wydaniu oceny ani obietnicy szybkiego rozwiązania. Zaczyna się od uważnego wysłuchania i zabezpieczenia poufności.",
      points: [
        "Jak wysłuchać bez przesłuchiwania i oceniania",
        "Komunikaty wspierające i te, których warto unikać",
        "Jak może zareagować świadek",
      ],
    },
    {
      key: "raportuj",
      index: "03",
      title: "Raportuj",
      claim: "Zapisz fakty, oddziel je od emocji i ocen.",
      description:
        "Rzeczowa dokumentacja chroni wszystkie strony. Notatka, która powstaje od razu, jest warta więcej niż najlepsza rekonstrukcja po miesiącach.",
      points: [
        "Wzór notatki z przyjęcia zgłoszenia",
        "Karta dokumentowania trudnych sytuacji",
        "Komu i w jakim zakresie można przekazać informacje",
      ],
    },
    {
      key: "rozwiazuj",
      index: "04",
      title: "Rozwiązuj",
      claim: "Zaplanuj dalszy tryb prowadzenia sprawy.",
      description:
        "Uporządkowany plan zamiast improwizacji: kto odpowiada za co, w jakim czasie i co usłyszy zespół. Schemat 24 godziny — 72 godziny — 7 dni.",
      points: [
        "Schemat „24 h — 72 h — 7 dni”",
        "Mapa odpowiedzialności w firmie",
        "Plan wdrożenia działań po szkoleniu",
      ],
    },
  ],
} as const;

export const programs = [
  {
    number: "01",
    title: "Czy to już mobbing? Rozpoznaj, Reaguj, Raportuj i Rozwiązuj",
    audience: "Pracownicy i świadkowie",
    summary:
      "Dla osób, które czują, że w ich miejscu pracy dzieje się coś niepokojącego, ale nie potrafią jeszcze tego nazwać.",
    highlights: [
      "Jak odróżniać konflikt od możliwego mobbingu",
      "Jak rzeczowo dokumentować sytuacje",
      "Jak może zareagować świadek",
    ],
    materials: [
      "checklista „Konflikt czy mobbing?”",
      "karta czerwonych flag",
      "mini przewodnik dla świadka",
      "mapa Modelu 4R dla pracownika",
    ],
    featured: true,
  },
  {
    number: "02",
    title: "Jak wspierać pracownika w sprawie mobbingu",
    audience: "Liderzy, kadra zarządzająca i HR",
    summary:
      "Odpowiedzialne wsparcie zaczyna się od uważnego wysłuchania, a nie od szukania winnego.",
    highlights: [
      "Wsparcie bez obietnic bez pokrycia",
      "Reagowanie zgodnie z procedurami",
      "Ochrona poufności i zapobieganie eskalacji",
    ],
    materials: [
      "schematy reagowania",
      "przykłady sytuacji",
      "zadania wdrożeniowe",
    ],
    featured: false,
  },
  {
    number: "03",
    title: "MŚP bez chaosu",
    audience: "Pracodawcy MŚP",
    summary:
      "Przeciwdziałanie mobbingowi bez korporacyjnego żargonu i dokumentów, których nikt nie rozumie.",
    highlights: [
      "Podstawowa procedura antymobbingowa dla MŚP",
      "Czytelna ścieżka zgłoszeń i podział odpowiedzialności",
      "Schemat pierwszych siedmiu dni po zgłoszeniu",
    ],
    materials: [
      "wzór prostej procedury antymobbingowej",
      "checklista zabezpieczeń pracodawcy",
      "wzór komunikatu do pracowników",
      "karta „Moje 5 działań po szkoleniu”",
    ],
    featured: true,
  },
  {
    number: "04",
    title: "Pierwsze 24 godziny po zgłoszeniu",
    audience: "HR i menedżerowie",
    summary:
      "Pierwsza reakcja może otworzyć drogę do rozwiązania albo sprawić, że pracownik już nigdy nie poprosi o pomoc.",
    highlights: [
      "Jak spokojnie przyjąć zgłoszenie",
      "Jak sporządzić rzeczową notatkę",
      "Jakich decyzji nie podejmować pochopnie",
    ],
    materials: [
      "checklista pierwszej rozmowy",
      "wzór notatki z przyjęcia zgłoszenia",
      "karta poufności informacji",
      "mapa ról po zgłoszeniu",
    ],
    featured: false,
  },
  {
    number: "05",
    title: "Komisja antymobbingowa w praktyce",
    audience: "Komisje antymobbingowe",
    summary:
      "Praca komisji ma realny wpływ na bezpieczeństwo pracowników i zaufanie do całej procedury.",
    highlights: [
      "Jak zadawać neutralne i rzeczowe pytania",
      "Jak oddzielać fakty od opinii",
      "Jak rozpoznawać konflikt interesów",
    ],
    materials: [
      "schemat prowadzenia postępowania",
      "wzory dokumentowania ustaleń",
      "struktura wniosków i rekomendacji",
    ],
    featured: false,
  },
] as const;

export const workshop = {
  badge: "Warsztat wspierający",
  title: "Bezpieczne Skrzydła przy kawie",
  subtitle: "Kameralne spotkanie dla osób po trudnych doświadczeniach w pracy",
  body: "Wiem, że po takich doświadczeniach człowiek nie zawsze potrzebuje kolejnej definicji. Czasem potrzebuje spokojnej przestrzeni, w której może usiąść, odetchnąć i przez chwilę nie udowadniać, że jest silny. Można mówić, słuchać, milczeć, zadawać pytania albo po prostu być.",
  points: [
    "Bezpieczna przestrzeń bez oceniania",
    "Uporządkowanie emocji i myśli",
    "Proste sposoby odzyskiwania spokoju",
    "Odbudowa kontaktu z własnymi granicami",
  ],
  disclaimer:
    "To nie jest psychoterapia, interwencja kryzysowa ani indywidualna pomoc psychologiczna. To edukacyjna i wspierająca przestrzeń.",
} as const;

export const strengths = [
  {
    title: "Autentyczność wynikająca z doświadczenia",
    body: "Nie mówię o mobbingu wyłącznie z perspektywy definicji i procedur. Wiem, jak wygląda utrata poczucia bezpieczeństwa i samotność osoby, która nie wie, gdzie szukać pomocy.",
    wide: true,
  },
  {
    title: "Prosty i spokojny język",
    body: "Tłumaczę trudne zagadnienia w sposób zrozumiały. Wiedza ma pomagać, a nie tworzyć jeszcze większy chaos.",
    wide: false,
  },
  {
    title: "Praktyczne narzędzia",
    body: "Checklisty, karty pracy, workbooki, schematy działania, wzory notatek i materiały wdrożeniowe — dostępne również po zakończeniu spotkania.",
    wide: false,
  },
  {
    title: "Perspektywa człowieka i organizacji",
    body: "Rozumiem potrzeby osoby doświadczającej trudnej sytuacji, ale patrzę również na odpowiedzialność pracodawcy, lidera, HR i komisji.",
    wide: false,
  },
  {
    title: "Edukacja bez moralizowania",
    body: "Nie uczę przez zawstydzanie i wskazywanie winnych. Pokazuję mechanizmy, ryzyka i możliwe odpowiedzialne reakcje.",
    wide: false,
  },
  {
    title: "Zakres dopasowany do odbiorcy",
    body: "Innych informacji potrzebuje pracownik, innych świadek, a jeszcze innych pracodawca lub członek komisji.",
    wide: true,
  },
] as const;

export const pricing = [
  {
    name: "Kursy online",
    price: "od 229 zł",
    unit: "za osobę",
    description:
      "Nagrane kursy podzielone na krótkie lekcje — do przerobienia we własnym tempie.",
    features: [
      "Moduły wideo i krótkie lekcje",
      "Materiały PDF i workbook",
      "Test końcowy",
      "Imienny certyfikat",
    ],
    cta: "Zapytaj o kurs",
    featured: false,
  },
  {
    name: "Pakiety dla firm",
    price: "od 890 zł",
    unit: "za pakiet dostępów",
    description:
      "Dostępy do kursów dla zespołu. Cena zależy od wybranego programu i liczby uczestników.",
    features: [
      "Dostępy dla całego zespołu",
      "Wybrany program lub zestaw programów",
      "Materiały wdrożeniowe dla organizacji",
      "Certyfikaty dla uczestników",
    ],
    cta: "Poproś o wycenę",
    featured: true,
  },
  {
    name: "Szkolenia stacjonarne",
    price: "od 2 490 zł",
    unit: "za grupę",
    description:
      "Realizowane na prośbę klienta. Koszty dojazdu, noclegu i sali ustalam indywidualnie.",
    features: [
      "Prezentacja i praktyczne case studies",
      "Zadania workbookowe",
      "Materiały drukowane",
      "Certyfikaty dla uczestników",
    ],
    cta: "Ustal termin",
    featured: false,
  },
] as const;

export const resources = [
  {
    title: "Checklista „Konflikt czy mobbing?”",
    description:
      "Uporządkowane pytania, które pomagają spokojnie sprawdzić, z czym naprawdę masz do czynienia.",
    type: "PDF",
  },
  {
    title: "Karta dokumentowania trudnych sytuacji",
    description:
      "Prosty formularz do zapisywania faktów: co, kiedy, kto był obecny, jakie były konsekwencje.",
    type: "PDF",
  },
  {
    title: "Schemat „24 h — 72 h — 7 dni”",
    description:
      "Co zrobić w pierwszej dobie po zgłoszeniu, a co może poczekać do końca tygodnia.",
    type: "Schemat",
  },
  {
    title: "Mapa Modelu 4R",
    description:
      "Jednostronicowa mapa działania — do powieszenia przy biurku osoby przyjmującej zgłoszenia.",
    type: "Workbook",
  },
] as const;

export const faq = [
  {
    q: "Czy szkolenie ma sens w małej firmie, gdzie wszyscy się znają?",
    a: "Tak. „U nas wszyscy się znają” to jedno z najczęstszych przekonań w MŚP — a przekraczanie granic, nieprawidłowa komunikacja i przemoc psychiczna mogą pojawić się w każdej organizacji. W małej firmie procedura nie musi być rozbudowana. Potrzebne są jasne zasady, czytelna ścieżka zgłoszeń i podział odpowiedzialności.",
  },
  {
    q: "Prowadzisz szkolenia online czy stacjonarnie?",
    a: "Podstawową formą są szkolenia online — dzięki temu oferta pozostaje dostępna również dla mikro, małych i średnich firm. Na prośbę klienta prowadzę szkolenia stacjonarne; wtedy indywidualnie ustalam koszt prowadzenia oraz ewentualne wydatki związane z dojazdem, noclegiem, wynajęciem sali i materiałami.",
  },
  {
    q: "Czy program da się dopasować do naszej organizacji?",
    a: "Zawsze. Przed przygotowaniem oferty poznaję potrzeby firmy, jej wielkość, możliwości i najważniejsze wyzwania. Na tej podstawie dopasowuję zakres, długość, materiały oraz formę szkolenia — tak, aby nie płacić za elementy, których organizacja nie potrzebuje.",
  },
  {
    q: "Co uczestnicy dostają poza samym szkoleniem?",
    a: "Checklisty, karty pracy, workbooki, schematy działania, wzory notatek, przewodniki i materiały wdrożeniowe. Zależy mi na tym, żeby szkolenie nie kończyło się wraz z ostatnim slajdem — uczestnik korzysta z tych narzędzi również później.",
  },
  {
    q: "Czy warsztat „Bezpieczne Skrzydła przy kawie” to forma terapii?",
    a: "Nie. To nie jest psychoterapia, interwencja kryzysowa ani indywidualna pomoc psychologiczna. To edukacyjna i wspierająca przestrzeń dla osób, które potrzebują się zatrzymać, poczuć zrozumienie i zobaczyć, że po trudnym doświadczeniu można powoli odzyskiwać grunt pod nogami.",
  },
  {
    q: "Czy szkolenie kończy się certyfikatem?",
    a: "Tak. Kursy online kończą się testem i imiennym certyfikatem. Uczestnicy szkoleń stacjonarnych również otrzymują certyfikaty wraz z kompletem materiałów.",
  },
] as const;

export const contact = {
  eyebrow: "Porozmawiajmy",
  title: "Każdą ofertę przygotowuję po krótkiej rozmowie",
  description:
    "Napisz, w jakiej sytuacji jest Twoja organizacja i kogo chcesz przeszkolić. Odpowiem z propozycją zakresu, formy i wyceny — bez zobowiązań.",
  reasons: [
    "Bezpłatna, niezobowiązująca rozmowa wstępna",
    "Wycena dopasowana do wielkości i możliwości firmy",
    "Odpowiedź zwykle w ciągu jednego dnia roboczego",
  ],
} as const;
