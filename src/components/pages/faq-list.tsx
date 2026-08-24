import { Reveal } from "@/components/system/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

/** Akordeon FAQ — jedna otwarta odpowiedź naraz, pierwsza otwarta domyślnie. */
export function FaqList({
  items,
  className,
  defaultOpen = true,
}: {
  items: readonly { id: string; q: string; a: string }[];
  className?: string;
  defaultOpen?: boolean;
}) {
  return (
    <Reveal delay={0.08} className={cn("", className)}>
      <Accordion
        type="single"
        collapsible
        defaultValue={defaultOpen ? items[0]?.id : undefined}
        className="w-full overflow-hidden rounded-card border border-brand-200/80 bg-white"
      >
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-brand-100 px-6 sm:px-8">
            <AccordionTrigger className="gap-6 py-6 text-left font-display text-[1.02rem] leading-snug font-medium text-ink hover:no-underline data-[state=open]:text-brand-700 sm:text-[1.1rem] [&_svg]:text-brand-500">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="pr-4 pb-6 text-body-sm text-pretty text-ink-muted">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  );
}
