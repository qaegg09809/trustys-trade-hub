import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { getContent } from "@/components/site/content";
import { BulletList } from "@/components/site/page-sections";
import { SiteLayout, SectionShell, SectionTitle } from "@/components/site/site-layout";
import { useSiteLanguage } from "@/components/site/use-site-language";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Sectors & Capabilities | YANSAB Trading Co." },
      {
        name: "description",
        content:
          "Commercial capabilities across sourcing, supply, distribution, procurement, and disciplined execution.",
      },
      { property: "og:title", content: "Sectors & Capabilities | YANSAB Trading Co." },
      {
        property: "og:description",
        content:
          "Practical commercial capabilities to connect market demand with dependable supply.",
      },
    ],
  }),
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  const language = useSiteLanguage();
  const t = getContent(language);

  return (
    <SiteLayout language={language}>
      <SectionShell>
        <SectionTitle title={t.capabilities.pageTitle} subtitle={t.capabilities.intro} />
        <div className="mt-8 max-w-3xl">
          <BulletList items={t.capabilities.bullets} />
        </div>
        <div className="mt-10">
          <Button asChild>
            <Link to="/services" search={{ lang: language }}>
              {language === "ar" ? "استكشف الخدمات" : "Explore Services"}
            </Link>
          </Button>
        </div>
      </SectionShell>
    </SiteLayout>
  );
}
