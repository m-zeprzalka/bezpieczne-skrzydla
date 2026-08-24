/**
 * Baza wiedzy — wpisy blogowe.
 *
 * UWAGA: to wpisy PRZYKŁADOWE (mock), napisane głosem autorki na podstawie
 * treści szkoleń i Modelu 4R, aby pokazać docelowy układ i typografię bloga.
 * Przed publikacją klientka zastępuje je własnymi tekstami — struktura
 * (`PostBlock`) jest gotowa do podpięcia pod CMS lub pliki MDX.
 */

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "note"; title: string; text: string };

export type PostCategory =
  | "Dla pracowników"
  | "Dla HR i liderów"
  | "Dla pracodawców"
  | "Model 4R"
  | "Narzędzia";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  /** ISO 8601 — formatowany dopiero w komponencie. */
  date: string;
  readingMinutes: number;
  /** Numer szkolenia, które rozwija temat wpisu. */
  training?: string;
  /** Odcień okładki generowanej w kodzie (brak zdjęć na tym etapie). */
  tone: "sky" | "deep" | "sand" | "foundation";
  blocks: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "konflikt-czy-mobbing-piec-pytan",
    title: "Konflikt czy mobbing? Pięć pytań, które pomagają to odróżnić",
    excerpt:
      "„Czy ja przypadkiem nie przesadzam?” — to zdanie słyszę najczęściej. Zamiast odpowiadać za Ciebie, pokazuję, na co patrzeć: powtarzalność, czas trwania, kierunek i skutki.",
    category: "Dla pracowników",
    date: "2026-08-18",
    readingMinutes: 6,
    training: "01",
    tone: "sky",
    blocks: [
      {
        type: "p",
        text: "Prawie każda osoba, która trafia do mnie po raz pierwszy, zaczyna od tego samego pytania: „czy ja przypadkiem nie przesadzam?”. I prawie zawsze zadaje je za późno — po miesiącach wątpliwości, nieprzespanych nocy i tłumaczenia sobie, że „tak po prostu wygląda praca”.",
      },
      {
        type: "p",
        text: "Nie odpowiem Ci, czy to, czego doświadczasz, jest mobbingiem. Od tego są procedury i komisje. Mogę natomiast pokazać, na co patrzeć, żeby przestać zgadywać. Poniżej pięć pytań, które porządkują sytuację — bez oceniania i bez pośpiechu.",
      },
      { type: "h2", text: "1. Czy zachowanie się powtarza?" },
      {
        type: "p",
        text: "Jedna ostra uwaga, jedno nieudane spotkanie, jeden zły dzień przełożonego — to może boleć, ale samo w sobie nie jest mobbingiem. Konflikt bywa jednorazowy i głośny. Mobbing jest cichszy i wraca. Zapisz, kiedy sytuacja się powtórzyła. Sama lista dat mówi więcej niż emocje.",
      },
      { type: "h2", text: "2. Jak długo to trwa?" },
      {
        type: "p",
        text: "Napięcie w zespole potrafi zniknąć po jednej rozmowie. Jeżeli to, co opisujesz, trwa tygodniami albo miesiącami i nie widać, żeby ktoś próbował to zatrzymać — długotrwałość zaczyna mieć znaczenie.",
      },
      { type: "h2", text: "3. Czy jest wymierzone w konkretną osobę?" },
      {
        type: "p",
        text: "Wymagający styl zarządzania zwykle dotyka wszystkich w podobny sposób. Kiedy jedna osoba jest konsekwentnie pomijana, izolowana, ośmieszana albo pozbawiana informacji, których inni dostają bez pytania — kierunek staje się widoczny.",
      },
      { type: "h2", text: "4. Co to robi z Tobą?" },
      {
        type: "p",
        text: "Osoba, która przez dłuższy czas doświadcza presji, milknie, wycofuje się, traci pewność siebie i zaczyna wątpić we własne odczucia. Jeżeli zauważasz u siebie te zmiany, potraktuj je jako sygnał, a nie jako dowód swojej „nadwrażliwości”.",
      },
      { type: "h2", text: "5. Czy potrafisz to opisać faktami?" },
      {
        type: "p",
        text: "Spróbuj zapisać trzy ostatnie sytuacje tak, jakby czytał je ktoś z zewnątrz: co się wydarzyło, kiedy, kto był obecny, jakie były konsekwencje. Bez ocen, bez przymiotników. Jeżeli to się udaje — masz w ręku coś, z czym można pójść dalej.",
      },
      {
        type: "note",
        title: "Co możesz zrobić dziś",
        text: "Pobierz checklistę „Konflikt czy mobbing?” z bazy wiedzy i wypełnij ją na spokojnie. Nie po to, żeby postawić diagnozę — po to, żeby uporządkować fakty i odzyskać poczucie wpływu.",
      },
      {
        type: "quote",
        text: "Pierwszym krokiem może być nazwanie tego, co się dzieje, uporządkowanie faktów i odzyskanie poczucia wpływu.",
      },
    ],
  },
  {
    slug: "pierwsze-24-godziny-po-zgloszeniu",
    title: "Pierwsze 24 godziny po zgłoszeniu: co zrobić, a czego nie robić",
    excerpt:
      "Ktoś przyszedł do Ciebie i powiedział „nie czuję się bezpiecznie”. Nie musisz znać wszystkich odpowiedzi. Musisz wiedzieć, jak nie pogorszyć sytuacji.",
    category: "Dla HR i liderów",
    date: "2026-08-11",
    readingMinutes: 7,
    training: "04",
    tone: "deep",
    blocks: [
      {
        type: "p",
        text: "Pierwsza reakcja po zgłoszeniu trudnej sytuacji może otworzyć drogę do odpowiedzialnego rozwiązania albo sprawić, że pracownik wycofa się i już nigdy nie poprosi o pomoc. To nie jest przesada — to obserwacja z bardzo wielu rozmów.",
      },
      {
        type: "p",
        text: "Dobra wiadomość: nie oczekuję, że osoba przyjmująca zgłoszenie będzie od razu wiedziała wszystko. Wystarczy, że w pierwszej dobie zrobi kilka rzeczy dobrze i kilku rzeczy nie zrobi wcale.",
      },
      { type: "h2", text: "Co zrobić" },
      {
        type: "ol",
        items: [
          "Wysłuchaj do końca — bez przerywania, bez dopytywania „a czy na pewno”. Wysłuchanie nie oznacza uznania racji jednej ze stron. Oznacza potraktowanie człowieka z szacunkiem.",
          "Zadbaj o miejsce i czas. Rozmowa na korytarzu albo między spotkaniami mówi pracownikowi, że jego sprawa jest mało ważna.",
          "Sporządź notatkę od razu. Data, godzina, kto rozmawiał, co zostało powiedziane — fakty, nie oceny. Notatka, która powstaje po miesiącu, jest warta ułamek tej, która powstała tego samego dnia.",
          "Powiedz, co będzie dalej. Nawet jeśli brzmi to: „potrzebuję dnia, żeby sprawdzić procedurę, i wrócę do Ciebie jutro”.",
        ],
      },
      { type: "h2", text: "Czego nie robić" },
      {
        type: "ul",
        items: [
          "Nie oceniaj. „Może źle to zrozumiałaś” zamyka rozmowę szybciej niż cokolwiek innego.",
          "Nie obiecuj tego, czego nie możesz dotrzymać — ani szybkiego rozwiązania, ani konsekwencji dla kogokolwiek.",
          "Nie przekazuj informacji dalej „na wszelki wypadek”. Poufność to nie uprzejmość, tylko obowiązek.",
          "Nie konfrontuj stron tego samego dnia. Pochopne decyzje zwiększają lęk i chaos.",
        ],
      },
      { type: "h2", text: "24 godziny — 72 godziny — 7 dni" },
      {
        type: "p",
        text: "W szkoleniu „Pierwsze 24 godziny po zgłoszeniu” pokazuję prosty schemat: co musi się wydarzyć w pierwszej dobie, co może poczekać do trzeciego dnia, a co powinno zamknąć pierwszy tydzień. Nie po to, żeby dodać kolejną procedurę — po to, żeby w trudnym momencie nikt nie musiał improwizować.",
      },
      {
        type: "note",
        title: "Model 4R w pierwszej dobie",
        text: "Rozpoznaj — zauważ wagę zgłoszenia. Reaguj — wysłuchaj i zadbaj o bezpieczeństwo rozmowy. Raportuj — zapisz fakty. Rozwiązuj — zaplanuj dalszy tryb prowadzenia sprawy.",
      },
    ],
  },
  {
    slug: "procedura-antymobbingowa-w-malej-firmie",
    title: "Procedura antymobbingowa w małej firmie — czy naprawdę jej potrzebujesz?",
    excerpt:
      "„U nas wszyscy się znają.” Rozumiem to zdanie. Tyle że mała firma ma mniej miejsc, w których można się schować — i tym bardziej potrzebuje trzech prostych rzeczy.",
    category: "Dla pracodawców",
    date: "2026-08-04",
    readingMinutes: 5,
    training: "03",
    tone: "foundation",
    blocks: [
      {
        type: "p",
        text: "Kiedy rozmawiam z właścicielami małych firm, słyszę zwykle jedną z trzech odpowiedzi: „u nas wszyscy się znają”, „jesteśmy małym zespołem” albo „procedury są potrzebne tylko korporacjom”. Znam te zdania i rozumiem, skąd się biorą.",
      },
      {
        type: "p",
        text: "Tymczasem przekraczanie granic, konflikty, nieprawidłowa komunikacja i przemoc psychiczna pojawiają się niezależnie od wielkości firmy. W dziesięcioosobowym zespole nie da się przenieść do innego działu. Nie da się uniknąć osoby, która krzywdzi. Mała firma nie jest bezpieczniejsza — jest po prostu bardziej widoczna.",
      },
      { type: "h2", text: "Nie segregator. Trzy rzeczy." },
      {
        type: "p",
        text: "Nie namawiam nikogo na regulamin, którego nikt nie przeczyta. Mała firma potrzebuje przede wszystkim trzech elementów, które da się opisać na jednej stronie:",
      },
      {
        type: "ul",
        items: [
          "jasnych zasad — co jest w porządku, a co nie, powiedziane prostym językiem;",
          "czytelnej ścieżki zgłoszeń — gdzie i do kogo można pójść, także wtedy, gdy problem dotyczy szefa;",
          "podziału odpowiedzialności — kto przyjmuje zgłoszenie, kto decyduje, kto chroni poufność.",
        ],
      },
      { type: "h2", text: "Fundament, który działa, zanim coś się wydarzy" },
      {
        type: "p",
        text: "Po nowelizacji Kodeksu pracy rozwinęłam Model 4R o warstwę FUNDAMENT: regulaminy i polityki, ścieżka zgłoszeń, mapa ról, komunikacja, szkolenia i przegląd. Cztery etapy modelu uruchamiają się dopiero wtedy, gdy coś już się wydarzy. Fundament działa wcześniej i trwa cały czas — to prewencja, dzięki której w trudnym momencie firma nie zaczyna od zera.",
      },
      {
        type: "quote",
        text: "Moim celem jest przeprowadzenie firmy od deklaracji „nie tolerujemy mobbingu” do konkretnych działań, które pracodawca i pracownicy naprawdę rozumieją.",
      },
      {
        type: "note",
        title: "Od czego zacząć",
        text: "Wdrożenie „MŚP bez chaosu” obejmuje wzór prostej procedury, checklistę zabezpieczeń pracodawcy i schemat pierwszych siedmiu dni po zgłoszeniu. Jeżeli wolisz zamknąć temat w jednym podejściu — pakiet „Bezpieczna Firma” łączy procedurę, regulamin, mini audyt i przeszkolenie kadry.",
      },
    ],
  },
  {
    slug: "notatka-ktora-sie-broni",
    title: "Notatka, która się broni. Jak dokumentować trudne sytuacje",
    excerpt:
      "Rzeczowa dokumentacja chroni wszystkie strony. Notatka, która powstaje od razu, jest warta więcej niż najlepsza rekonstrukcja po miesiącach. Pokazuję, jak ją napisać.",
    category: "Narzędzia",
    date: "2026-07-28",
    readingMinutes: 5,
    tone: "sand",
    blocks: [
      {
        type: "p",
        text: "Etap „Raportuj” w Modelu 4R brzmi najmniej emocjonalnie ze wszystkich czterech. I właśnie dlatego jest tak często pomijany. Kiedy dzieje się coś trudnego, ostatnią rzeczą, na którą mamy siłę, jest pisanie. A jednak to jedyny etap, który po czasie da się odtworzyć wyłącznie z tego, co zostało zapisane.",
      },
      { type: "h2", text: "Fakty, nie oceny" },
      {
        type: "p",
        text: "Dobra notatka odpowiada na cztery pytania: co się wydarzyło, kiedy, kto był obecny i jakie były konsekwencje. Nie zawiera przymiotników („agresywnie”, „złośliwie”), tylko zachowania („podniósł głos”, „nie przekazał informacji o zmianie terminu, o której wiedzieli pozostali członkowie zespołu”).",
      },
      { type: "h2", text: "Od razu, nie „jak będzie chwila”" },
      {
        type: "p",
        text: "Pamięć wygładza. Po tygodniu nie będziesz wiedzieć, czy spotkanie było we wtorek, czy w środę, i czy zdanie padło przy dwóch osobach, czy przy czterech. Notatka pisana tego samego dnia jest krótka i niedoskonała — i właśnie dlatego wiarygodna.",
      },
      { type: "h2", text: "Oddzielnie: co czułam, co zrobiłam" },
      {
        type: "p",
        text: "Emocje nie są dowodem, ale są ważne — dla Ciebie. Zapisuj je osobno, poniżej faktów. Dzięki temu, jeżeli notatka trafi kiedyś do komisji, część faktyczna będzie się broniła sama, a Ty nie stracisz zapisu tego, ile Cię to kosztowało.",
      },
      {
        type: "ul",
        items: [
          "Data, godzina, miejsce.",
          "Osoby obecne — z imienia i roli.",
          "Co zostało powiedziane lub zrobione — możliwie dosłownie.",
          "Skutek: dla pracy, dla Ciebie, dla zespołu.",
          "Czy i komu zgłosiłeś sprawę oraz jaka była reakcja.",
        ],
      },
      {
        type: "note",
        title: "Bezpłatny materiał",
        text: "„Karta dokumentowania trudnych sytuacji” to jednostronicowy formularz dokładnie w tym układzie. Dostępna w bazie wiedzy po zapisie.",
      },
    ],
  },
  {
    slug: "cisza-swiadkow",
    title: "Cisza świadków. Dlaczego nikt nie reaguje i co można z tym zrobić",
    excerpt:
      "Najtrudniejsza w mobbingu bywa nie osoba, która krzywdzi, tylko cisza wszystkich pozostałych. Reakcja świadka nie musi oznaczać konfrontacji ani donosu.",
    category: "Dla pracowników",
    date: "2026-07-21",
    readingMinutes: 6,
    training: "02",
    tone: "deep",
    blocks: [
      {
        type: "p",
        text: "Kiedy opowiadam o własnym doświadczeniu, rzadko wracam do słów, które padły. Najtrudniejsze nie zawsze są słowa. Czasem najtrudniejsza jest cisza innych ludzi. Brak reakcji. Bagatelizowanie. Poczucie, że nikt nie widzi, jak wiele kosztuje Cię kolejny dzień.",
      },
      { type: "h2", text: "Dlaczego świadkowie milczą" },
      {
        type: "p",
        text: "Nie dlatego, że są źli. Zwykle dlatego, że nie wiedzą, co mogą zrobić, boją się, że sami staną się celem, albo mówią sobie: „to chyba nie moja sprawa”. Każdy z tych powodów jest zrozumiały. Żaden nie sprawia, że cisza przestaje boleć.",
      },
      { type: "h2", text: "Reakcja nie musi być konfrontacją" },
      {
        type: "p",
        text: "Świadek nie musi stawać między dwiema osobami ani składać formalnego zgłoszenia, żeby coś zmienić. Czasem wystarczy jedno zdanie powiedziane osobie, której to dotyczy: „widzę to i nie wydaje mi się w porządku”. To zdanie przerywa najgorsze — poczucie, że jest się niewidzialnym.",
      },
      {
        type: "ol",
        items: [
          "Zauważ i nazwij dla siebie: co konkretnie widzisz i jak często.",
          "Powiedz osobie, której to dotyczy, że to zauważasz. Bez oceniania, bez rad.",
          "Zapisz, co widziałeś — datę, sytuację, kto był obecny. Twoja notatka może kiedyś być jedyną.",
          "Sprawdź, jaka jest ścieżka zgłoszeń w Twojej firmie i czy możesz z niej skorzystać także jako świadek.",
          "Zadbaj o siebie. Bycie świadkiem też obciąża.",
        ],
      },
      {
        type: "quote",
        text: "Wierzę, że odpowiedzialna organizacja nie czeka, aż sytuacja stanie się dramatem. Uczy się rozpoznawać sygnały, słuchać ludzi, dokumentować działania i reagować w sposób, który nie pogłębia krzywdy.",
      },
    ],
  },
  {
    slug: "fundament-prewencja-ktora-dziala-wczesniej",
    title: "Fundament: prewencja, która działa, zanim cokolwiek się wydarzy",
    excerpt:
      "Cztery etapy Modelu 4R uruchamiają się, kiedy coś już się stało. Fundament działa wcześniej i cały czas. Wyjaśniam, dlaczego nie jest piątym etapem — i co się na niego składa.",
    category: "Model 4R",
    date: "2026-07-14",
    readingMinutes: 5,
    tone: "foundation",
    blocks: [
      {
        type: "p",
        text: "Model 4R — Rozpoznaj, Reaguj, Raportuj, Rozwiązuj — powstał jako mapa działania w trudnej sytuacji. Ma jedną cechę, o której łatwo zapomnieć: opisuje to, co dzieje się po. Po pierwszym sygnale, po zgłoszeniu, po rozmowie. Zgodnie z nowelizacją Kodeksu pracy rozwinęłam go o warstwę, która działa wcześniej.",
      },
      { type: "h2", text: "Dlaczego nie piąty etap" },
      {
        type: "p",
        text: "Etapy dzieją się po kolei. Fundament nie ma kolejności — trwa cały czas, cyklicznie. Nie „uruchamia się”, kiedy coś się wydarzy; sprawia, że kiedy coś się wydarzy, firma nie zaczyna od zera. Dlatego na schemacie leży pod czterema etapami, a nie obok nich.",
      },
      { type: "h2", text: "Z czego składa się Fundament" },
      {
        type: "ul",
        items: [
          "regulaminy i polityki antymobbingowe — napisane językiem, który pracownicy rozumieją;",
          "ścieżka zgłoszeń — wiadomo, gdzie i do kogo, także gdy sprawa dotyczy przełożonego;",
          "mapa ról — kto przyjmuje zgłoszenie, kto decyduje, kto chroni poufność;",
          "komunikacja — zespół wie, że procedura istnieje i jak działa;",
          "szkolenia — dopasowane do stanowiska, z dokumentacją, kto i kiedy został przeszkolony;",
          "przegląd — cykliczne sprawdzenie, czy to wszystko nadal działa.",
        ],
      },
      { type: "h2", text: "Obieg: gotowość w górę, wnioski w dół" },
      {
        type: "p",
        text: "Fundament i cztery etapy łączą dwie strzałki. Z Fundamentu w górę, do „Rozpoznaj”, płynie gotowość — ludzie wiedzą, na co patrzeć i co zrobić. Z „Rozwiązuj” w dół, do Fundamentu, płyną wnioski i dane: każda zamknięta sprawa uczy organizację czegoś, co warto wpisać do procedury, mapy ról albo programu szkoleń.",
      },
      {
        type: "note",
        title: "Pakiet „Bezpieczna Firma”",
        text: "Procedura, regulamin, mini audyt dokumentacji i przeszkolona kadra do 30 osób — czyli Fundament zbudowany w jednym podejściu. Dla firmy, która po nowelizacji chce zamknąć temat od razu.",
      },
    ],
  },
];

export const categories: PostCategory[] = [
  "Dla pracowników",
  "Dla HR i liderów",
  "Dla pracodawców",
  "Model 4R",
  "Narzędzia",
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function sortedPosts() {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
