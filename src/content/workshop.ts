/**
 * Warsztat wspierający „Bezpieczne Skrzydła przy kawie”.
 * Nigdy nie jest liczony jako szkolenie — ma osobną trasę i osobną stylistykę.
 */

export const workshop = {
  label: "Warsztat wspierający",
  badge: "To warsztat, nie szkolenie",
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
  distinction:
    "„Bezpieczne Skrzydła przy kawie” to jedyny warsztat w mojej ofercie — celowo trzymam go z dala od pięciu szkoleń. Nie ma tu testu, certyfikatu ani procedur. Jest spotkanie.",
  closing:
    "Czasem jedna spokojna rozmowa nie rozwiązuje wszystkiego. Może jednak przypomnieć człowiekowi, że nadal ma prawo do godności, bezpieczeństwa i nowego początku.",
  cta: { label: "Zapytaj o najbliższy termin", href: "/kontakt?temat=warsztat" },
} as const;
