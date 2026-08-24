/**
 * Cennik — celowo prosty, z maila klientki (3.08.2026).
 * Przy kwotach NIE piszemy „netto”: podana kwota jest kwotą do zapłaty.
 * Każdy przycisk prowadzi do formularza wyceny, nie do koszyka.
 */

export const pricing = {
  label: "Cennik",
  title: "Cennik — celowo prosty",
  lead: "Celowo prosty. Podana kwota jest kwotą do zapłaty — nie doliczam VAT i nie piszę gwiazdek.",
  cta: "Poproś o wycenę",
  flagship: {
    id: "bezpieczna-firma",
    badge: "Produkt flagowy",
    name: "Pakiet „Bezpieczna Firma”",
    price: "10 900 zł",
    description:
      "Procedura, regulamin, mini audyt dokumentacji, przeszkolona kadra (szkolenie online dopasowane do stanowiska pracownika) do 30 osób, wszystko w jednym. Dla firmy, która po nowelizacji chce zamknąć temat od razu, a nie w trzech podejściach.",
    /** Elementy pakietu wyprowadzone wprost z opisu — do listy „co zawiera”. */
    includes: [
      "procedura antymobbingowa",
      "regulamin",
      "mini audyt dokumentacji",
      "szkolenie online dopasowane do stanowiska — do 30 osób",
      "certyfikaty, raport i imienna lista przeszkolonych",
    ],
    interest: "Pakiet „Bezpieczna Firma”",
  },
  plans: [
    {
      id: "kurs-online",
      name: "Kurs online dla jednej osoby",
      price: "od 299 zł",
      description:
        "Nagrane lekcje wideo, materiały do pobrania, test i imienny certyfikat. Dostęp 60 dni, do przerobienia we własnym tempie.",
      audience: "dla pojedynczej osoby",
      interest: "Kurs online dla jednej osoby",
    },
    {
      id: "pakiet-firma",
      name: "Pakiet dla firmy",
      price: "od 2 390 zł",
      description:
        "Dostępy do kursu dla całego zespołu i certyfikaty dla uczestników. W cenie raport z realizacji szkolenia, imienna lista przeszkolonych osób z datami, czyli dokumentacja działań prewencyjnych pracodawcy.",
      audience: "dla zespołu",
      interest: "Pakiet dla firmy",
    },
    {
      id: "msp-bez-chaosu",
      name: "Wdrożenie „MŚP bez chaosu”",
      price: "od 2 900 zł",
      description:
        "Procedura antymobbingowa, wzory dokumentów i konsultacje. Dla firm bez działu HR, które potrzebują gotowego rozwiązania, a nie kolejnego szkolenia.",
      audience: "dla pracodawców MŚP",
      interest: "Wdrożenie „MŚP bez chaosu”",
    },
    {
      id: "stacjonarne",
      name: "Szkolenie stacjonarne",
      price: "od 6 900 zł",
      description:
        "Na życzenie klienta, grupa 10–15 osób. Dojazd, nocleg i sala rozliczane osobno, zawsze ustalone przed podpisaniem umowy.",
      audience: "na życzenie, grupa 10–15 osób",
      interest: "Szkolenie stacjonarne",
    },
  ],
  emphasis: "Każdą ofertę przygotowuję indywidualnie, po bezpłatnej rozmowie.",
  emphasisNote:
    "Strona pokazuje rząd wielkości — nie zastępuje wyceny. Napisz, a odpowiem konkretną propozycją.",
} as const;

/** Sekcja „Dopasowanie” na stronie cennika — treść z dokumentu klientki. */
export const pricingFit = {
  title: "Szkolenia dopasowane do Twojej organizacji",
  paragraphs: [
    "Każda firma jest inna, dlatego przed przygotowaniem oferty poznaję jej potrzeby, wielkość, możliwości i najważniejsze wyzwania. Na tej podstawie dopasowuję zakres, długość, materiały oraz formę szkolenia.",
    "Na prośbę klienta szkolenie może zostać przeprowadzone stacjonarnie. W takim przypadku indywidualnie ustalam koszt prowadzenia szkolenia oraz ewentualnych wydatków związanych z dojazdem, noclegiem, wynajęciem sali lub materiałami.",
  ],
  custom: {
    title: "Indywidualne dopasowanie",
    body: "Każdą ofertę przygotowuję po krótkiej rozmowie z klientem. Dopasowuję zakres, formę, czas trwania i materiały do potrzeb organizacji oraz jej możliwości finansowych. Dzięki temu również mikro, małe i średnie firmy mogą wybrać rozwiązanie odpowiadające ich rzeczywistym potrzebom.",
    closing:
      "Wspólnie wybieramy rozwiązanie, które odpowiada potrzebom organizacji i nie obciąża jej kosztami za elementy, których nie potrzebuje.",
  },
  reasons: [
    "Bezpłatna, niezobowiązująca rozmowa wstępna",
    "Wycena dopasowana do wielkości i możliwości firmy",
    "Odpowiedź zwykle w ciągu jednego dnia roboczego",
  ],
} as const;
