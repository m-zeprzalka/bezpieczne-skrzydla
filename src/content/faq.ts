/**
 * FAQ z korektami z maila klientki: „szkolenie online” = nagrany kurs
 * e-learningowy; test 10–20 pytań i imienny certyfikat; warsztat nie jest
 * ani szkoleniem, ani terapią.
 */

export const faq = [
  {
    id: "online",
    q: "Czy „szkolenie online” oznacza spotkanie na żywo przez internet?",
    a: "Nie. Szkolenie online to u mnie nagrany kurs e-learningowy: moduły, a w nich krótkie lekcje wideo, do przerobienia we własnym tempie w ciągu 60 dni. Nie prowadzę szkoleń na żywo przez internet i na tę chwilę nie planuję webinarów. Jedyną formą na żywo jest szkolenie stacjonarne — na życzenie klienta, dla grupy 10–15 osób.",
    topics: ["home", "trainings", "pricing"],
  },
  {
    id: "certyfikat",
    q: "Jak wygląda zaliczenie kursu i certyfikat?",
    a: "Po przerobieniu lekcji czeka krótki test — od 10 do 20 pytań. Po jego zaliczeniu wystawiam imienny certyfikat. W pakiecie dla firmy dołączam dodatkowo raport z realizacji szkolenia oraz imienną listę przeszkolonych osób z datami — to gotowa dokumentacja działań prewencyjnych pracodawcy.",
    topics: ["home", "trainings", "pricing"],
  },
  {
    id: "mala-firma",
    q: "Czy szkolenie ma sens w małej firmie, gdzie wszyscy się znają?",
    a: "Tak. „U nas wszyscy się znają” to jedno z najczęstszych przekonań w MŚP — a przekraczanie granic, nieprawidłowa komunikacja i przemoc psychiczna mogą pojawić się w każdej organizacji. W małej firmie procedura nie musi być rozbudowana. Potrzebne są jasne zasady, czytelna ścieżka zgłoszeń i podział odpowiedzialności.",
    topics: ["home", "trainings"],
  },
  {
    id: "dopasowanie",
    q: "Czy program da się dopasować do naszej organizacji?",
    a: "Zawsze. Przed przygotowaniem oferty poznaję potrzeby firmy, jej wielkość, możliwości i najważniejsze wyzwania. Na tej podstawie dopasowuję zakres, materiały oraz formę — tak, aby nie płacić za elementy, których organizacja nie potrzebuje. Każdą ofertę przygotowuję indywidualnie, po bezpłatnej rozmowie.",
    topics: ["home", "pricing"],
  },
  {
    id: "materialy",
    q: "Co uczestnicy dostają poza samym szkoleniem?",
    a: "Checklisty, karty pracy, workbooki, schematy działania, wzory notatek, przewodniki i materiały wdrożeniowe. Zależy mi na tym, żeby szkolenie nie kończyło się wraz z ostatnią lekcją — uczestnik korzysta z tych narzędzi również później.",
    topics: ["trainings", "pricing"],
  },
  {
    id: "warsztat",
    q: "Czy warsztat „Bezpieczne Skrzydła przy kawie” to szkolenie albo terapia?",
    a: "Ani jedno, ani drugie. To warsztat wspierający — kameralne spotkanie dla osób po trudnych doświadczeniach w pracy. Nie jest to psychoterapia, interwencja kryzysowa ani indywidualna pomoc psychologiczna, nie ma tu też testu ani certyfikatu. To edukacyjna i wspierająca przestrzeń dla osób, które potrzebują się zatrzymać i poczuć zrozumienie.",
    topics: ["home", "workshop"],
  },
] as const;

export type FaqTopic = (typeof faq)[number]["topics"][number];

export function faqFor(topic: FaqTopic) {
  return faq.filter((item) => (item.topics as readonly string[]).includes(topic));
}
