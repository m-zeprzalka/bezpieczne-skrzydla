/**
 * Treść wariantu C.
 *
 * Fakty (dane firmy, programy, cennik, FAQ) współdzielimy z pozostałymi
 * koncepcjami przez `content.ts`. Tutaj mieszka to, co C ma tylko dla siebie:
 * wypowiedzi w pierwszej osobie, zdania, które klientka słyszy od odbiorców,
 * oraz zobowiązania stojące za Modelem 4R.
 *
 * Zasada redakcyjna: każde zdanie brzmi jak wypowiedziane na głos przez
 * Małgorzatę. Zero języka ofertowego, zero trzeciej osoby.
 */

export const sections = [
  { id: "start", label: "Początek" },
  { id: "slysze", label: "Co słyszę" },
  { id: "cisza", label: "Cisza" },
  { id: "mapa", label: "Mapa 4R" },
  { id: "zostaje", label: "Co zostaje" },
  { id: "programy", label: "Programy" },
  { id: "ile", label: "Ile to kosztuje" },
  { id: "pytania", label: "Pytania" },
  { id: "napisz", label: "Napisz do mnie" },
] as const;

export const heroC = {
  kicker: "Małgorzata Just · Bezpieczne Skrzydła",
  opening: "Zanim cokolwiek Ci sprzedam, chcę powiedzieć jedno:",
  statement:
    "To, czego doświadczasz w pracy, ma znaczenie. Nawet jeśli jeszcze nie umiesz tego nazwać.",
  body: [
    "Nazywam się Małgorzata Just. Uczę firmy, zespoły i pojedyncze osoby, jak rozpoznawać mobbing i przemoc psychiczną w pracy — i co konkretnie zrobić, kiedy się pojawią.",
    "Robię to prostym językiem. Bez straszenia, bez moralizowania i bez procedur, których nikt nie czyta.",
  ],
  primaryCta: { label: "Umów bezpłatną rozmowę", href: "#napisz" },
  secondaryCta: { label: "Zobacz, czego uczę", href: "#programy" },
} as const;

export const voices = {
  eyebrow: "Co słyszę najczęściej",
  intro:
    "Te zdania wracają w niemal każdej rozmowie. Poniżej odpowiadam na nie tak, jak odpowiedziałabym przy stole.",
  items: [
    {
      id: "przesadzam",
      who: "Pracownik",
      quote: "Czy ja przypadkiem nie przesadzam?",
      answer: [
        "To pytanie zadaje sobie prawie każda osoba, która trafia do mnie po raz pierwszy. I prawie zawsze zadaje je za późno.",
        "Nie odpowiem Ci, czy to mobbing — od tego są procedury i komisje. Pokażę Ci natomiast, na co patrzeć: czy zachowanie się powtarza, jak długo trwa i czy jest wymierzone w konkretną osobę. Kiedy to uporządkujesz, przestajesz zgadywać.",
      ],
      program: "01",
    },
    {
      id: "male-firmy",
      who: "Pracodawca",
      quote: "U nas wszyscy się znają, procedury są dla korporacji.",
      answer: [
        "Znam to zdanie i rozumiem, skąd się bierze. Tyle że przekraczanie granic i nieprawidłowa komunikacja pojawiają się niezależnie od wielkości firmy — a mała firma ma mniej miejsc, w których można się schować.",
        "Nie namawiam Cię na segregator z regulaminami. Potrzebujesz trzech rzeczy: jasnych zasad, czytelnej ścieżki zgłoszeń i wiedzy, kto co robi, kiedy coś się wydarzy.",
      ],
      program: "03",
    },
    {
      id: "przyszedl",
      who: "HR i menedżerowie",
      quote: "Ktoś przyszedł do mnie z takim zgłoszeniem. Co teraz?",
      answer: [
        "Nie musisz od razu znać wszystkich odpowiedzi. Musisz wiedzieć, jak nie pogorszyć sytuacji.",
        "Przypadkowy komentarz, brak notatki albo obietnica bez pokrycia potrafią zamknąć człowiekowi drogę do pomocy na dobre. Uczę pierwszej doby: jak wysłuchać, co zapisać, komu wolno powiedzieć i czego nie rozstrzygać pochopnie.",
      ],
      program: "04",
    },
    {
      id: "komisja",
      who: "Komisja antymobbingowa",
      quote: "Mamy zgłoszenie, mamy komisję. Tylko jak to poprowadzić?",
      answer: [
        "Komisja nie powinna być formalnością powołaną dlatego, że wymaga tego procedura. To, jak pracuje, przekłada się na zaufanie całego zespołu do organizacji.",
        "Przechodzimy przez cały proces: przyjęcie sprawy, przygotowanie do rozmów, neutralne pytania, oddzielenie faktów od opinii, dokumentowanie ustaleń i rekomendacje.",
      ],
      program: "05",
    },
    {
      id: "swiadek",
      who: "Świadek",
      quote: "Widzę, że koledze coś się dzieje. Ale to chyba nie moja sprawa.",
      answer: [
        "Najtrudniejsza w mobbingu bywa nie osoba, która krzywdzi, tylko cisza wszystkich pozostałych.",
        "Reakcja świadka nie musi oznaczać konfrontacji ani donosu. Czasem wystarczy jedno zdanie powiedziane osobie, której to dotyczy: „widzę to i nie wydaje mi się w porządku”. Pokazuję, jak zareagować bezpiecznie — także dla siebie.",
      ],
      program: "02",
    },
  ],
} as const;

export const silence = {
  eyebrow: "Dlaczego ja",
  lead: "Bezpieczne Skrzydła nie powstały z pomysłu na firmę.",
  paragraphs: [
    "Doświadczyłam mobbingu. Wiem, jak odbiera spokój, pewność siebie i zaufanie do własnych odczuć. Wiem, jak trudno wracać każdego dnia do miejsca, w którym zamiast bezpieczeństwa czeka lęk.",
    "Najtrudniejsze nie zawsze są słowa. Czasem najtrudniejsza jest cisza innych ludzi. Brak reakcji. Bagatelizowanie. Poczucie, że nikt nie widzi, ile kosztuje Cię kolejny dzień.",
    "Brakowało mi wtedy miejsca, w którym ktoś pomógłby mi spokojnie nazwać sytuację, uporządkować fakty i zobaczyć możliwe kierunki. Brakowało mi jednego zdania: „to, czego doświadczasz, ma znaczenie — nie musisz zostać z tym sama”.",
  ],
  pull: "Znam tę ciszę, w której człowiek zostaje sam.",
  closing:
    "Dlatego uczę wcześniej. Zanim ktoś zwątpi w siebie, zanim problem zamieni się w kryzys i zanim odejście z pracy zacznie wyglądać na jedyne wyjście.",
} as const;

export const promises = {
  eyebrow: "Model 4R",
  title: "Cztery rzeczy, które robimy po kolei",
  intro:
    "To mój autorski schemat i szkielet każdego programu. Nie jest skomplikowany — właśnie na tym polega jego wartość, kiedy w firmie robi się nerwowo.",
  items: [
    {
      key: "rozpoznaj",
      index: "01",
      title: "Rozpoznaj",
      promise: "Najpierw nazwiemy to, co się dzieje.",
      body: "Oddzielimy konflikt, napięcie w zespole i wymagający styl zarządzania od zachowań, które mogą prowadzić do mobbingu. Powtarzalność i czas trwania mają tu znaczenie większe niż pojedyncza ostra rozmowa.",
    },
    {
      key: "reaguj",
      index: "02",
      title: "Reaguj",
      promise: "Potem zadbamy o to, żeby rozmowa była bezpieczna.",
      body: "Odpowiedzialna reakcja nie polega na szybkim wydaniu wyroku. Zaczyna się od uważnego wysłuchania, poufności i powstrzymania się od obietnic, których nie da się dotrzymać.",
    },
    {
      key: "raportuj",
      index: "03",
      title: "Raportuj",
      promise: "Zapiszemy fakty, zanim się rozmyją.",
      body: "Notatka spisana tego samego dnia jest warta więcej niż najlepsza rekonstrukcja po pół roku. Pokazuję, co zapisać, jak oddzielić fakty od ocen i komu wolno te informacje przekazać.",
    },
    {
      key: "rozwiazuj",
      index: "04",
      title: "Rozwiązuj",
      promise: "Na końcu ustalimy, kto co robi i do kiedy.",
      body: "Zamiast improwizacji — plan: podział odpowiedzialności, ramy czasowe 24 godziny, 72 godziny i 7 dni oraz komunikat, który usłyszy zespół.",
    },
  ],
} as const;

export const deliverables = {
  eyebrow: "Co zostaje po szkoleniu",
  title: "Nie kończę na ostatnim slajdzie",
  intro:
    "Do każdego programu przygotowuję materiały, z których korzysta się później, w codziennej pracy. To one decydują o tym, czy szkolenie cokolwiek zmieni.",
  groups: [
    {
      label: "Dla osoby, której to dotyczy",
      items: [
        "checklista „Konflikt czy mobbing?”",
        "karta czerwonych flag",
        "karta dokumentowania trudnych sytuacji",
        "lista pierwszych kroków",
        "mini przewodnik dla świadka",
      ],
    },
    {
      label: "Dla osoby przyjmującej zgłoszenie",
      items: [
        "checklista pierwszej rozmowy",
        "wzór notatki z przyjęcia zgłoszenia",
        "lista zdań wspierających i neutralnych",
        "lista komunikatów, których warto unikać",
        "karta poufności informacji",
      ],
    },
    {
      label: "Dla firmy",
      items: [
        "wzór prostej procedury antymobbingowej dla MŚP",
        "schemat „24 h — 72 h — 7 dni”",
        "mapa odpowiedzialności w firmie",
        "wzór komunikatu do pracowników",
        "karta „Moje 5 działań po szkoleniu”",
      ],
    },
  ],
} as const;

export const programsC = {
  eyebrow: "Programy",
  title: "Sześć rozmów, które mogę poprowadzić w Twojej firmie",
  intro:
    "Pięć szkoleń i jeden warsztat wspierający. Zakres, długość i materiały zawsze dopasowuję po wcześniejszej rozmowie — nie sprzedaję gotowych pakietów w ciemno.",
} as const;

export const pricingC = {
  eyebrow: "Ile to kosztuje",
  title: "Mówię o pieniądzach wprost",
  intro:
    "Nie lubię cenników ukrytych za formularzem. Poniżej widełki, od których zaczynamy rozmowę. Ostateczna kwota zależy od liczby uczestników, czasu trwania i wybranego zakresu.",
  note: "Przy szkoleniu stacjonarnym do ceny mogą dojść wcześniej uzgodnione koszty dojazdu, noclegu, sali i organizacji spotkania. Ustalam je przed podpisaniem umowy — nie pojawiają się na fakturze jako niespodzianka.",
} as const;

export const contactC = {
  eyebrow: "Napisz do mnie",
  title: "Zacznijmy od zwykłej rozmowy",
  intro:
    "Nie musisz mieć gotowego briefu ani wiedzieć, którego szkolenia potrzebujesz. Napisz w kilku zdaniach, co się dzieje — resztę ustalimy razem.",
  reassurance: [
    "Rozmowa wstępna jest bezpłatna i do niczego nie zobowiązuje.",
    "Jeśli uznam, że nie jestem właściwą osobą, powiem to wprost.",
    "Odpowiadam zwykle w ciągu jednego dnia roboczego.",
  ],
} as const;

export const stickyBar = {
  label: "Szkolenia online od 229 zł za osobę",
  cta: "Umów bezpłatną rozmowę",
} as const;
