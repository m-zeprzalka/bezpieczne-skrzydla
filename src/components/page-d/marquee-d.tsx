import { marqueeItems } from "@/lib/content-d";

/**
 * Pasek przewijany w nieskończoność. Treść jest zdublowana, a animacja
 * przesuwa dokładnie o połowę szerokości — dzięki temu pętla nie ma szwu.
 * Przy `prefers-reduced-motion` animacja zatrzymuje się (reguła globalna
 * skraca czas trwania), a pasek pozostaje czytelny.
 */
export function MarqueeD() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="border-brand-200/70 relative overflow-hidden border-y bg-white py-5">
      <div
        aria-hidden
        className="mask-fade-edges flex w-max animate-marquee items-center gap-10 motion-reduce:animate-none"
      >
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="text-brand-800/80 text-[0.88rem] tracking-wide whitespace-nowrap">
              {item}
            </span>
            <span className="bg-brand-300 size-1 shrink-0 rounded-full" />
          </span>
        ))}
      </div>

      {/* Ta sama treść dla czytników ekranu, bez duplikatu z animacji */}
      <ul className="sr-only">
        {marqueeItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
