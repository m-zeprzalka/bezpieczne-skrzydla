/**
 * Kontakt i formularz „Poproś o wycenę” — nie koszyk. Kilka pytań wstępnych
 * określa kierunek wyceny, zanim klientka odpisze z konkretną propozycją.
 */

export const contact = {
  label: "Kontakt · Wycena",
  title: "Poproś o wycenę",
  lead: "Kilka pytań wstępnych pomoże mi określić kierunek wyceny. Odpowiadam propozycją zakresu, formy i kwoty — bez zobowiązań, zwykle w ciągu jednego dnia roboczego.",
  reasons: [
    "Bezpłatna, niezobowiązująca rozmowa wstępna",
    "Wycena dopasowana do wielkości i możliwości firmy",
    "Odpowiedź zwykle w ciągu jednego dnia roboczego",
  ],
  privacyNote: "Dane wykorzystam wyłącznie do odpowiedzi na to zapytanie.",
} as const;

export const quoteForm = {
  interestLegend: "Czego ma dotyczyć wycena?",
  interests: [
    "Pakiet „Bezpieczna Firma”",
    "Kurs online dla jednej osoby",
    "Pakiet dla firmy",
    "Wdrożenie „MŚP bez chaosu”",
    "Szkolenie stacjonarne",
    "Warsztat „przy kawie”",
    "Jeszcze nie wiem",
  ],
  defaultInterest: "Jeszcze nie wiem",
  teamLegend: "Ile osób chcesz przeszkolić?",
  teamSizes: ["1 osoba", "2–10 osób", "11–30 osób", "ponad 30 osób"],
  procedureLegend: "Czy firma ma procedurę antymobbingową?",
  procedureOptions: ["Tak", "Nie", "Nie wiem"],
  fields: {
    name: { label: "Imię lub nazwa organizacji", placeholder: "np. Anna Kowalska" },
    email: { label: "Adres e-mail", placeholder: "anna@firma.pl" },
    message: {
      label: "Wiadomość",
      placeholder:
        "Napisz w kilku zdaniach, w jakiej sytuacji jest zespół i na czym Ci zależy.",
      hint: "Pole opcjonalne.",
    },
  },
  submit: "Poproś o wycenę",
  submitting: "Wysyłam…",
  success: {
    title: "Dziękuję — zapytanie dotarło.",
    text: "Odpowiem propozycją zakresu, formy i kwoty, zwykle w ciągu jednego dnia roboczego. Jeśli sprawa jest pilna, zadzwoń.",
  },
  errors: {
    name: "Podaj imię lub nazwę organizacji.",
    email: "Podaj adres e-mail, na który mam odpisać.",
    generic: "Nie udało się wysłać zapytania. Spróbuj ponownie albo napisz bezpośrednio na adres e-mail.",
  },
} as const;

/** Mapowanie parametru `?temat=` w adresie na domyślny wybór w formularzu. */
export const interestByTopic: Record<string, (typeof quoteForm.interests)[number]> = {
  "bezpieczna-firma": "Pakiet „Bezpieczna Firma”",
  "kurs-online": "Kurs online dla jednej osoby",
  "pakiet-firma": "Pakiet dla firmy",
  "msp-bez-chaosu": "Wdrożenie „MŚP bez chaosu”",
  stacjonarne: "Szkolenie stacjonarne",
  warsztat: "Warsztat „przy kawie”",
};
