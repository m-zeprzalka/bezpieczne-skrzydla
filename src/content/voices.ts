/**
 * „Co słyszę najczęściej” — blok zaakceptowany przez klientkę 1:1 z wariantu C.
 * Zdania, które wracają w rozmowach, i odpowiedzi „jak przy stole”.
 */

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
      training: "01",
    },
    {
      id: "male-firmy",
      who: "Pracodawca",
      quote: "U nas wszyscy się znają, procedury są dla korporacji.",
      answer: [
        "Znam to zdanie i rozumiem, skąd się bierze. Tyle że przekraczanie granic i nieprawidłowa komunikacja pojawiają się niezależnie od wielkości firmy — a mała firma ma mniej miejsc, w których można się schować.",
        "Nie namawiam Cię na segregator z regulaminami. Potrzebujesz trzech rzeczy: jasnych zasad, czytelnej ścieżki zgłoszeń i wiedzy, kto co robi, kiedy coś się wydarzy.",
      ],
      training: "03",
    },
    {
      id: "przyszedl",
      who: "HR i menedżerowie",
      quote: "Ktoś przyszedł do mnie z takim zgłoszeniem. Co teraz?",
      answer: [
        "Nie musisz od razu znać wszystkich odpowiedzi. Musisz wiedzieć, jak nie pogorszyć sytuacji.",
        "Przypadkowy komentarz, brak notatki albo obietnica bez pokrycia potrafią zamknąć człowiekowi drogę do pomocy na dobre. Uczę pierwszej doby: jak wysłuchać, co zapisać, komu wolno powiedzieć i czego nie rozstrzygać pochopnie.",
      ],
      training: "04",
    },
    {
      id: "komisja",
      who: "Komisja antymobbingowa",
      quote: "Mamy zgłoszenie, mamy komisję. Tylko jak to poprowadzić?",
      answer: [
        "Komisja nie powinna być formalnością powołaną dlatego, że wymaga tego procedura. To, jak pracuje, przekłada się na zaufanie całego zespołu do organizacji.",
        "Przechodzimy przez cały proces: przyjęcie sprawy, przygotowanie do rozmów, neutralne pytania, oddzielenie faktów od opinii, dokumentowanie ustaleń i rekomendacje.",
      ],
      training: "05",
    },
    {
      id: "swiadek",
      who: "Świadek",
      quote: "Widzę, że koledze coś się dzieje. Ale to chyba nie moja sprawa.",
      answer: [
        "Najtrudniejsza w mobbingu bywa nie osoba, która krzywdzi, tylko cisza wszystkich pozostałych.",
        "Reakcja świadka nie musi oznaczać konfrontacji ani donosu. Czasem wystarczy jedno zdanie powiedziane osobie, której to dotyczy: „widzę to i nie wydaje mi się w porządku”. Pokazuję, jak zareagować bezpiecznie — także dla siebie.",
      ],
      training: "02",
    },
  ],
  outro: {
    text: "Jeśli Twoje zdanie brzmi inaczej — napisz je własnymi słowami. Odpowiem tak samo konkretnie.",
    cta: { label: "Napisz do mnie", href: "/kontakt" },
  },
} as const;
