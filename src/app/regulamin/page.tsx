import { LegalPage } from "@/components/pages/legal-page";
import { terms } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: terms.title,
    description: terms.lead,
    path: "/regulamin",
  }),
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
