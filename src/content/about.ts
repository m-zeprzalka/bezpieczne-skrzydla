/**
 * O Bezpiecznych Skrzydłach — misja, kilka słów o marce, mocne strony,
 * „dlaczego warto”. Pełna treść dokumentu klientki, bez skrótów.
 */

export const mission = {
  label: "Moja misja",
  quote: "Znam tę ciszę, w której człowiek zostaje sam",
  paragraphs: [
    "Bezpieczne Skrzydła nie powstały wyłącznie z pomysłu na firmę. Powstały z doświadczenia.",
    "Doświadczyłam mobbingu i wiem, jak bardzo potrafi on odebrać człowiekowi spokój, pewność siebie i zaufanie do własnych odczuć. Wiem, jak trudno każdego dnia wracać do miejsca, w którym zamiast bezpieczeństwa pojawia się lęk.",
    "Najtrudniejsze nie zawsze są słowa. Czasem najtrudniejsza jest cisza innych ludzi. Brak reakcji. Bagatelizowanie. Poczucie, że nikt nie widzi, jak wiele kosztuje Cię kolejny dzień.",
    "W tamtym czasie brakowało mi miejsca, w którym ktoś pomógłby mi spokojnie nazwać sytuację, uporządkować fakty i zobaczyć możliwe kierunki działania. Brakowało mi prostego komunikatu: „To, czego doświadczasz, ma znaczenie. Nie musisz zostać z tym sama”.",
    "Dlatego stworzyłam Bezpieczne Skrzydła.",
    "Chcę, aby wiedza docierała do ludzi wcześniej, zanim zwątpią w siebie, zanim problem zamieni się w kryzys i zanim odejście z pracy zacznie wydawać się jedynym możliwym rozwiązaniem.",
    "Chcę również pomagać pracodawcom, liderom, HR i komisjom antymobbingowym. Wierzę, że odpowiedzialna organizacja nie czeka, aż sytuacja stanie się dramatem. Uczy się rozpoznawać sygnały, słuchać ludzi, dokumentować działania i reagować w sposób, który nie pogłębia krzywdy.",
  ],
  /** Indeks akapitu, który dostaje rangę typograficzną (serce tej historii). */
  pulledIndex: 2,
  closing:
    "Moją misją jest budowanie miejsc pracy, w których człowiek nie musi wybierać między zatrudnieniem a własną godnością.",
  foundation:
    "Bezpieczna praca nie powinna być luksusem, przywilejem ani pustym hasłem zapisanym w procedurze. Powinna być fundamentem każdej odpowiedzialnej organizacji.",
} as const;

export const about = {
  label: "Kilka słów o Bezpiecznych Skrzydłach",
  cards: [
    {
      title: "Marka edukacyjno-wspierająca",
      icon: "feather",
      body: "Bezpieczne Skrzydła to marka edukacyjno-wspierająca poświęcona przeciwdziałaniu mobbingowi, dyskryminacji, przemocy psychicznej oraz nieprawidłowym zachowaniom w środowisku pracy.",
    },
    {
      title: "Praktyczne materiały",
      icon: "book",
      body: "To szkolenia, warsztaty, checklisty, workbooki, przewodniki PDF i praktyczne materiały dla pracowników, świadków, pracodawców, kadry zarządzającej, HR oraz komisji antymobbingowych.",
    },
    {
      title: "Prosty i spokojny język",
      icon: "messages",
      body: "Zależy mi na tym, aby o trudnych sytuacjach zawodowych mówić prostym, spokojnym i odpowiedzialnym językiem. Bez straszenia, pochopnego oceniania i budowania atmosfery podejrzliwości. Chcę, aby wiedza pomagała odzyskać jasność, poczucie wpływu i możliwość podjęcia świadomej decyzji.",
    },
    {
      title: "Filar pracy: Model 4R",
      icon: "route",
      body: "Jednym z filarów mojej pracy jest autorski Model 4R: Rozpoznaj – Reaguj – Raportuj – Rozwiązuj. Pomaga on uporządkować trudną sytuację, zauważyć sygnały ostrzegawcze, odpowiedzialnie zareagować, udokumentować fakty i zaplanować dalsze działania.",
    },
  ],
  closing:
    "Bezpieczne Skrzydła są przestrzenią zarówno dla człowieka, który potrzebuje zrozumienia, jak i dla organizacji, która chce działać odpowiedzialnie.",
} as const;

export const strengths = {
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

export const why = {
  label: "Dlaczego warto",
  title: "Więcej niż prezentacja pełna definicji",
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
  closing:
    "Tworzę Bezpieczne Skrzydła z przekonania, że odpowiedzialne działanie zaczyna się od świadomości. Nie obiecuję prostych odpowiedzi na każdą sytuację. Daję jednak wiedzę, język i uporządkowany kierunek, od którego można zacząć.",
  pull: "Bo dobra organizacja nie czeka, aż trudna sytuacja stanie się kryzysem.",
} as const;
