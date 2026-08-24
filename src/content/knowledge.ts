/**
 * Baza wiedzy — bezpłatne materiały i zapis na powiadomienia.
 * Klientka: „Tu będą pojawiać się artykuły, opinie uczestników oraz darmowe
 * pliki PDF i workbooki. Pierwsze materiały udostępniam po zapisie.”
 */

export const knowledge = {
  label: "Baza wiedzy",
  title: "Artykuły, opinie i bezpłatne materiały",
  lead: "Tu będą pojawiać się artykuły, opinie uczestników oraz darmowe pliki PDF i workbooki. Pierwsze materiały udostępniam po zapisie.",
  signup: {
    title: "Odbierz pierwsze materiały",
    text: "Zostaw adres e-mail — wyślę checklistę „Konflikt czy mobbing?” i dam znać, gdy pojawią się kolejne pliki. Bez spamu, wypisanie jednym kliknięciem.",
    placeholder: "Twój adres e-mail",
    cta: "Zapisz mnie",
    consent:
      "Zapisując się, zgadzasz się na otrzymywanie wiadomości o nowych materiałach. Dane wykorzystam wyłącznie w tym celu.",
  },
} as const;

export const resources = [
  {
    id: "checklista",
    title: "Checklista „Konflikt czy mobbing?”",
    description:
      "Uporządkowane pytania, które pomagają spokojnie sprawdzić, z czym naprawdę masz do czynienia.",
    type: "PDF",
    forWhom: "dla pracowników i świadków",
  },
  {
    id: "karta",
    title: "Karta dokumentowania trudnych sytuacji",
    description:
      "Prosty formularz do zapisywania faktów: co, kiedy, kto był obecny, jakie były konsekwencje.",
    type: "PDF",
    forWhom: "dla każdego",
  },
  {
    id: "schemat",
    title: "Schemat „24 h — 72 h — 7 dni”",
    description:
      "Co zrobić w pierwszej dobie po zgłoszeniu, a co może poczekać do końca tygodnia.",
    type: "Schemat",
    forWhom: "dla HR i menedżerów",
  },
  {
    id: "mapa",
    title: "Mapa Modelu 4R",
    description:
      "Jednostronicowa mapa działania — do powieszenia przy biurku osoby przyjmującej zgłoszenia.",
    type: "Workbook",
    forWhom: "dla organizacji",
  },
] as const;
