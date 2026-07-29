import { Building2, Gavel, UserRound, Users } from "lucide-react";

import { ContainerD, HeadingD, SectionD } from "@/components/page-d/frame";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { audiences } from "@/lib/content";
import { sectionsD } from "@/lib/content-d";

const icons = {
  pracownicy: UserRound,
  liderzy: Users,
  pracodawcy: Building2,
  komisje: Gavel,
} as const;

export function AudiencesD() {
  return (
    <SectionD id="dla-kogo" className="overflow-hidden bg-white">
      <div
        aria-hidden
        className="bg-light-well absolute inset-x-0 top-0 -z-10 h-[520px] opacity-45"
      />

      <ContainerD>
        <HeadingD
          eyebrow={sectionsD.audiences.eyebrow}
          title={sectionsD.audiences.title}
          description={sectionsD.audiences.description}
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item, i) => {
            const Icon = icons[item.id];
            return (
              <RevealItem key={item.id}>
                <article className="glass shadow-lux hover:shadow-lux-hover group relative h-full overflow-hidden rounded-3xl p-7 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5">
                  <span
                    aria-hidden
                    className="from-brand-200/70 pointer-events-none absolute -top-16 -right-10 size-40 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative flex items-center justify-between">
                    <span className="border-brand-200 text-brand-700 group-hover:bg-brand-700 group-hover:text-white group-hover:border-brand-700 grid size-12 place-items-center rounded-2xl border bg-white/70 transition-colors duration-400">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-lux text-brand-200 group-hover:text-brand-300 text-[1.6rem] leading-none font-extralight transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-lux text-brand-950 relative mt-7 text-[1.28rem] leading-snug font-light tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-brand-800/75 relative mt-3 text-[0.9rem] leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </ContainerD>
    </SectionD>
  );
}
