/** Pierwszy element w porządku fokusu — pozwala ominąć nawigację klawiaturą. */
export function SkipLink() {
  return (
    <a
      href="#tresc"
      className="sr-only rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-brand-50 focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:ring-3 focus:ring-brand-300 focus:outline-none"
    >
      Przejdź do treści
    </a>
  );
}
