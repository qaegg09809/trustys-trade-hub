import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { getContent } from "@/components/site/content";
import { BulletList } from "@/components/site/page-sections";
import { SiteLayout, SectionShell, SectionTitle } from "@/components/site/site-layout";
import { useSiteLanguage } from "@/components/site/use-site-language";

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Governance & Compliance | YANSAB Trading Co." },
      {
        name: "description",
        content:
          "Commercial documentation, supplier verification, payment discipline, and regulatory compliance foundations at Yansab.",
      },
      { property: "og:title", content: "Governance & Compliance | YANSAB Trading Co." },
      {
        property: "og:description",
        content: "Clear foundations designed to strengthen trust and reduce execution risk.",
      },
    ],
  }),
  component: GovernancePage,
});

function GovernancePage() {
  const language = useSiteLanguage();
  const t = getContent(language);

  return (
    <SiteLayout language={language}>
      <SectionShell>
        <SectionTitle title={t.governance.pageTitle} subtitle={t.governance.intro} />
        <div className="mt-8 max-w-3xl">
          <BulletList items={t.governance.bullets} />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contact" search={{ lang: language }}>
              {t.ctaPrimary}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/partnerships" search={{ lang: language }}>
              {language === "ar" ? "الشراكات" : "Partnerships"}
            </Link>
          </Button>
        </div>
      </SectionShell>
    </SiteLayout>
  );
}
