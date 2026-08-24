import { LegalPage } from "@/components/pages/legal-page";
import { privacyPolicy } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: privacyPolicy.title,
    description: privacyPolicy.lead,
    path: "/polityka-prywatnosci",
  }),
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return <LegalPage doc={privacyPolicy} />;
}
