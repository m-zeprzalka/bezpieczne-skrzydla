import {
  ContainerE,
  LabelE,
  MarkedTitle,
  SectionE,
  T_BODY,
  T_H3,
} from "@/components/page-e/frame";
import { faq } from "@/lib/content";
import { faqE } from "@/lib/content-e";

/**
 * Bez akordeonu: wszystkie odpowiedzi są widoczne od razu. Rozwijanie to
 * animacja wysokości, a wariant E z założenia nie ma ani jednej — przy okazji
 * cała treść trafia do wyszukiwarek bez interakcji.
 */
export function FaqE() {
  return (
    <SectionE id="faq" className="bg-brand-50/70">
      <ContainerE>
        <div className="mx-auto max-w-[46rem] text-center">
          <LabelE>{faqE.label}</LabelE>
          <MarkedTitle
            before={faqE.titleBefore}
            marked={faqE.titleMarked}
            className="mt-4"
          />
        </div>

        <dl className="mx-auto mt-16 grid max-w-[64rem] grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:mt-20">
          {faq.map((item) => (
            <div key={item.q} className="flex flex-col">
              <dt className={`${T_H3} text-brand-950 font-semibold`}>
                {item.q}
              </dt>
              <dd className={`${T_BODY} text-muted-foreground mt-4`}>
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </ContainerE>
    </SectionE>
  );
}
