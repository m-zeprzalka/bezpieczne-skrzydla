/**
 * Treść wariantu F — finalnego.
 *
 * Zasada nadrzędna: maksymalna wierność dokumentowi klientki
 * („Informacje do Strony dla firmy BS.docx”). Kolejność sekcji strony
 * odpowiada kolejności treści w dokumencie, a opisy szkoleń, mocne strony
 * i sekcja „Dlaczego warto” są przeniesione w całości, nie w skrócie.
 * Fakty wspólne (dane firmy, Model 4R, FAQ) nadal czytamy z `content.ts`.
 */

/** Menu w układzie zaproponowanym przez klientkę. */
export const navF = [
  { label: "O Bezpiecznych Skrzydłach", href: "#o-nas" },
  { label: "Oferta", href: "#oferta" },
  { label: "Model 4R", href: "#model-4r" },
  { label: "Baza wiedzy", href: "#baza-wiedzy" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const heroF = {
  /* Nagłówek, lead, akapit i oba przyciski — dokładnie według propozycji
     klientki z sekcji „Główna część”. */
  titleA: "Szkolenia i praktyczne narzędzia",
  titleB: "dla",
  titleAccent: "bezpieczniejszych",
  titleC: "miejsc pracy",
  lead: "Bezpieczne miejsce pracy zaczyna się od wiedzy i odwagi reagowania.",
  body: "Tworzę szkolenia, warsztaty i praktyczne materiały dotyczące mobbingu, przemocy psychicznej oraz odpowiedzialnego reagowania na trudne sytuacje w pracy. Wspieram pracowników, liderów, HR, pracodawców i komisje antymobbingowe w budowaniu środowiska opartego na szacunku i bezpieczeństwie.",
  primaryCta: { label: "Poznaj szkolenia i warsztaty", href: "#oferta" },
  secondaryCta: { label: "Poznaj Model 4R", href: "#model-4r" },
  audiencePrefix: "Dla",
  audiencePath: [
    "pracowników",
    "liderów i HR",
    "pracodawców",
    "komisji antymobbingowych",
  ],
} as const;

export const approachF = {
  index: "01",
  label: "Moje podejście",
  paragraphs: [
    "W swoich szkoleniach łączę uporządkowaną wiedzę, doświadczenie zawodowe oraz ludzką perspektywę. Nie chcę jedynie przedstawiać definicji i przepisów. Zależy mi na tym, aby uczestnik po zakończeniu szkolenia wiedział, co może zrobić, jak powinien zareagować i czego należy unikać.",
    "Każdy program tworzę w oparciu o autorski Model 4R: Rozpoznaj – Reaguj – Raportuj – Rozwiązuj. To praktyczna mapa działania, która pomaga przejść od niepewności i chaosu do spokojnych, świadomych i odpowiedzialnych decyzji.",
  ],
} as const;

export type TrainingF = {
  number: string;
  title: string;
  audience: string;
  paragraphs: string[];
  showsLabel: string;
  shows: string[];
  closing?: string[];
  extra4R?: { intro: string; items: { key: string; text: string }[] };
  materialsLabel?: string;
  materials?: string[];
};

export const trainingsF: TrainingF[] = [
  {
    number: "01",
    title: "Czy to już mobbing? Rozpoznaj, Reaguj, Raportuj i Rozwiązuj",
    audience: "Szkolenie dla pracowników i świadków trudnych sytuacji w pracy",
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
  },
  {
    number: "02",
    title: "Jak wspierać pracownika w sprawie mobbingu",
    audience:
      "Szkolenie dla przedstawicieli pracowników, liderów, kadry zarządzającej i HR",
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
  },
  {
    number: "03",
    title: "MŚP bez chaosu",
    audience: "Szkolenie i procedura dla pracodawców",
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
  },
  {
    number: "04",
    title: "Pierwsze 24 godziny po zgłoszeniu",
    audience: "Szkolenie dla HR, menedżerów, kierowników i pracodawców",
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
  },
  {
    number: "05",
    title: "Komisja antymobbingowa w praktyce",
    audience:
      "Szkolenie dla członków komisji antymobbingowych i osób analizujących zgłoszenia",
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
  },
];

export const fitF = {
  index: "03",
  label: "Dopasowanie i cennik",
  title: "Szkolenia dopasowane do Twojej organizacji",
  paragraphs: [
    "Każda firma jest inna, dlatego przed przygotowaniem oferty poznaję jej potrzeby, wielkość, możliwości i najważniejsze wyzwania. Na tej podstawie dopasowuję zakres, długość, materiały oraz formę szkolenia.",
    "Podstawową formą realizacji są szkolenia online, dzięki czemu oferta pozostaje dostępna również dla mikro, małych i średnich firm. Ceny rozpoczynają się od 229 zł, a ostateczna wycena zależy od liczby uczestników, czasu trwania i wybranego zakresu.",
    "Na prośbę klienta szkolenie może zostać przeprowadzone stacjonarnie. W takim przypadku indywidualnie ustalam koszt prowadzenia szkolenia oraz ewentualnych wydatków związanych z dojazdem, noclegiem, wynajęciem sali lub materiałami.",
  ],
  plans: [
    {
      name: "Kursy online",
      price: "od 229 zł",
      unit: "za osobę",
      body: "Krótkie lekcje podzielone na moduły, materiały PDF, workbook, test końcowy i imienny certyfikat.",
    },
    {
      name: "Oferta dla firm",
      price: "od 890 zł",
      unit: "pakiety dostępów do kursów",
      body: "Cena zależy od wybranego programu i liczby uczestników.",
      featured: true,
    },
    {
      name: "Szkolenia stacjonarne",
      price: "od 2 490 zł",
      unit: "za grupę, na prośbę klienta",
      body: "Prezentacja, praktyczne case studies, zadania workbookowe, materiały i certyfikaty. Do ceny mogą zostać doliczone wcześniej uzgodnione koszty dojazdu, noclegu, sali i organizacji spotkania.",
    },
  ],
  custom: {
    title: "Indywidualne dopasowanie",
    body: "Każdą ofertę przygotowuję po krótkiej rozmowie z klientem. Dopasowuję zakres, formę, czas trwania i materiały do potrzeb organizacji oraz jej możliwości finansowych. Dzięki temu również mikro, małe i średnie firmy mogą wybrać rozwiązanie odpowiadające ich rzeczywistym potrzebom.",
    closing:
      "Wspólnie wybieramy rozwiązanie, które odpowiada potrzebom organizacji i nie obciąża jej kosztami za elementy, których nie potrzebuje.",
  },
} as const;

export const workshopF = {
  index: "04",
  label: "Warsztat wspierający",
  title: "Bezpieczne Skrzydła przy kawie",
  subtitle: "Kameralne spotkanie dla osób po trudnych doświadczeniach w pracy",
  paragraphs: [
    "Stworzyłam ten warsztat z myślą o osobach, które doświadczyły mobbingu, dyskryminacji, poniżania, przemocy psychicznej albo obojętności otoczenia. Dla tych, którzy po zakończeniu trudnej sytuacji nadal noszą w sobie lęk, wstyd, złość, bezradność albo pytanie: „Co teraz?”.",
    "Wiem, że po takich doświadczeniach człowiek nie zawsze potrzebuje kolejnej definicji. Czasem potrzebuje spokojnej przestrzeni, w której może usiąść, odetchnąć i przez chwilę nie udowadniać, że jest silny.",
    "„Bezpieczne Skrzydła przy kawie” to kameralne spotkanie przy kawie, herbacie i rozmowie. Nie oczekuję, że uczestnicy będą opowiadać o wszystkim. Można mówić, słuchać, milczeć, zadawać pytania albo po prostu być.",
  ],
  wantsLabel: "Podczas spotkania chcę",
  wants: [
    "stworzyć bezpieczną przestrzeń bez oceniania",
    "pomóc uczestnikom zobaczyć, że nie są sami",
    "uporządkować emocje i myśli związane z trudnym doświadczeniem",
    "pokazać proste sposoby odzyskiwania spokoju",
    "pomóc odbudowywać kontakt ze sobą i własnymi granicami",
    "przypomnieć, że nawet mały krok może być początkiem zmiany",
  ],
  format:
    "Spotkanie może łączyć rozmowę, ćwiczenia refleksyjne, proste techniki oddechowe, elementy uważności oraz pracę z kartami i workbookiem.",
  disclaimer:
    "Nie jest to psychoterapia, interwencja kryzysowa ani indywidualna pomoc psychologiczna. Jest to edukacyjna i wspierająca przestrzeń dla osób, które potrzebują zatrzymać się, poczuć zrozumienie i zobaczyć, że po trudnym doświadczeniu można powoli odzyskiwać grunt pod nogami.",
  closing:
    "Czasem jedna spokojna rozmowa nie rozwiązuje wszystkiego. Może jednak przypomnieć człowiekowi, że nadal ma prawo do godności, bezpieczeństwa i nowego początku.",
} as const;

export const missionF = {
  index: "05",
  label: "Moja misja",
  /* Dwa akapity, których wcześniejsze warianty nie przenosiły. */
  extraParagraphs: [
    "Chcę, aby wiedza docierała do ludzi wcześniej, zanim zwątpią w siebie, zanim problem zamieni się w kryzys i zanim odejście z pracy zacznie wydawać się jedynym możliwym rozwiązaniem.",
    "Chcę również pomagać pracodawcom, liderom, HR i komisjom antymobbingowym. Wierzę, że odpowiedzialna organizacja nie czeka, aż sytuacja stanie się dramatem. Uczy się rozpoznawać sygnały, słuchać ludzi, dokumentować działania i reagować w sposób, który nie pogłębia krzywdy.",
  ],
  foundation:
    "Bezpieczna praca nie powinna być luksusem, przywilejem ani pustym hasłem zapisanym w procedurze. Powinna być fundamentem każdej odpowiedzialnej organizacji.",
} as const;

export const aboutF = {
  index: "06",
  label: "Kilka słów o Bezpiecznych Skrzydłach",
  paragraphs: [
    "Bezpieczne Skrzydła to marka edukacyjno-wspierająca poświęcona przeciwdziałaniu mobbingowi, dyskryminacji, przemocy psychicznej oraz nieprawidłowym zachowaniom w środowisku pracy.",
    "To szkolenia, warsztaty, checklisty, workbooki, przewodniki PDF i praktyczne materiały dla pracowników, świadków, pracodawców, kadry zarządzającej, HR oraz komisji antymobbingowych.",
    "Zależy mi na tym, aby o trudnych sytuacjach zawodowych mówić prostym, spokojnym i odpowiedzialnym językiem. Bez straszenia, pochopnego oceniania i budowania atmosfery podejrzliwości. Chcę, aby wiedza pomagała odzyskać jasność, poczucie wpływu i możliwość podjęcia świadomej decyzji.",
    "Jednym z filarów mojej pracy jest autorski Model 4R: Rozpoznaj – Reaguj – Raportuj – Rozwiązuj. Pomaga on uporządkować trudną sytuację, zauważyć sygnały ostrzegawcze, odpowiedzialnie zareagować, udokumentować fakty i zaplanować dalsze działania.",
  ],
  closing:
    "Bezpieczne Skrzydła są przestrzenią zarówno dla człowieka, który potrzebuje zrozumienia, jak i dla organizacji, która chce działać odpowiedzialnie.",
} as const;

export const strengthsF = {
  index: "07",
  label: "Mocne strony",
  title: "Co wyróżnia Bezpieczne Skrzydła",
  items: [
    {
      title: "Autentyczność wynikająca z doświadczenia",
      body: "Nie mówię o mobbingu wyłącznie z perspektywy definicji i procedur. Wiem, jak wygląda utrata poczucia bezpieczeństwa, zwątpienie w siebie i samotność osoby, która nie wie, gdzie szukać pomocy. Dzięki temu łączę profesjonalne podejście z prawdziwym zrozumieniem człowieka.",
    },
    {
      title: "Autorski Model 4R",
      body: "Model Rozpoznaj – Reaguj – Raportuj – Rozwiązuj porządkuje wiedzę i przekłada ją na kolejne etapy działania. Uczestnicy nie zostają wyłącznie z teorią — otrzymują czytelny kierunek.",
    },
    {
      title: "Prosty i spokojny język",
      body: "Tłumaczę trudne zagadnienia w sposób zrozumiały. Nie chcę budować lęku ani zasypywać uczestników formalnym językiem. Wiedza ma pomagać, a nie tworzyć jeszcze większy chaos.",
    },
    {
      title: "Praktyczne narzędzia",
      body: "Do szkoleń przygotowuję checklisty, karty pracy, workbooki, schematy działania, wzory notatek, przewodniki i materiały wdrożeniowe. Uczestnik może korzystać z nich również po zakończeniu spotkania.",
    },
    {
      title: "Połączenie perspektywy człowieka i organizacji",
      body: "Rozumiem potrzeby osoby doświadczającej trudnej sytuacji, ale patrzę również na odpowiedzialność pracodawcy, lidera, HR i komisji. Dzięki temu pokazuję temat szerzej, bez automatycznego upraszczania i oceniania.",
    },
    {
      title: "Edukacja bez moralizowania",
      body: "Nie uczę poprzez zawstydzanie i wskazywanie winnych. Pokazuję, jakie mechanizmy mogą pojawić się w organizacji, gdzie powstaje ryzyko i co można zrobić, aby odpowiedzialnie zareagować.",
    },
    {
      title: "Działania dopasowane do odbiorcy",
      body: "Innych informacji potrzebuje pracownik, innych świadek, a jeszcze innych pracodawca lub członek komisji. Dlatego zakres, język i materiały dopasowuję do grupy uczestników oraz celu szkolenia.",
    },
  ],
} as const;

export const whyF = {
  index: "08",
  label: "Dlaczego warto",
  intro:
    "Wybierając Bezpieczne Skrzydła, otrzymujesz coś więcej niż prezentację pełną definicji. Otrzymujesz szkolenie, które:",
  points: [
    "pomaga zrozumieć trudne sytuacje, zamiast je upraszczać",
    "pokazuje konkretne sposoby reagowania",
    "uwzględnia emocje i bezpieczeństwo człowieka",
    "pomaga uporządkować odpowiedzialność organizacji",
    "łączy wiedzę z praktycznymi narzędziami",
    "nie kończy się wraz z ostatnim slajdem",
    "może zostać dopasowane do potrzeb konkretnej firmy lub zespołu",
  ],
  closing: [
    "Tworzę Bezpieczne Skrzydła z przekonania, że odpowiedzialne działanie zaczyna się od świadomości. Nie obiecuję prostych odpowiedzi na każdą sytuację. Daję jednak wiedzę, język i uporządkowany kierunek, od którego można zacząć.",
  ],
  pull: "Bo dobra organizacja nie czeka, aż trudna sytuacja stanie się kryzysem.",
} as const;

export const knowledgeF = {
  index: "09",
  label: "Baza wiedzy",
  title: "Miejsce na opinie, artykuły i bezpłatne materiały",
  lead: "Tu będą pojawiać się artykuły, opinie uczestników oraz darmowe pliki PDF i workbooki. Pierwsze materiały udostępniam po zapisie.",
} as const;

export const contactF = {
  index: "10",
  label: "Kontakt",
  title: "Porozmawiajmy o Twojej organizacji",
  lead: "Napisz, kogo chcesz przeszkolić i w jakiej sytuacji jest zespół. Odpowiem propozycją zakresu, formy i wyceny — bez zobowiązań.",
} as const;
