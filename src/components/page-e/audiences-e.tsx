import { Building2, Gavel, UserRound, Users } from "lucide-react";

import {
  ContainerE,
  SectionE,
  SectionHeadE,
  T_BODY,
  T_H3,
} from "@/components/page-e/frame";
import { audiences } from "@/lib/content";
import { audiencesE } from "@/lib/content-e";

const icons = {
  pracownicy: UserRound,
  liderzy: Users,
  pracodawcy: Building2,
  komisje: Gavel,
} as const;

export function AudiencesE() {
  return (
    <SectionE id="dla-kogo">
      <ContainerE>
        <SectionHeadE
          label={audiencesE.label}
          before={audiencesE.titleBefore}
          marked={audiencesE.titleMarked}
          lead={audiencesE.lead}
        />

        <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:grid-rows-[auto_auto_1fr]">
          {audiences.map((item) => {
            const Icon = icons[item.id];
            return (
              <li
                key={item.id}
                className="flex flex-col lg:grid lg:row-span-3 lg:grid-rows-subgrid lg:gap-0"
              >
                <span className="bg-brand-50 text-brand-700 grid size-14 place-items-center rounded-xl">
                  <Icon className="size-6" aria-hidden />
                </span>

                <h3 className={`${T_H3} text-brand-950 mt-6 font-semibold`}>
                  {item.title}
                </h3>

                <p className={`${T_BODY} text-muted-foreground mt-3`}>
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </ContainerE>
    </SectionE>
  );
}
