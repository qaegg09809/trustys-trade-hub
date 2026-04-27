import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BulletList, PartnerForm, ProcessTimeline } from "@/components/site/page-sections";
import { getContent } from "@/components/site/content";
import { SiteLayout, SectionShell, SectionTitle } from "@/components/site/site-layout";
import { useSiteLanguage } from "@/components/site/use-site-language";
import partnershipsHeroVisual from "@/assets/yansab-partnership-handshake-v2.jpg";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "Distribution & Partnerships | Yansab General Trading L.L.C" },
      {
        name: "description",
        content:
          "Yansab partnership approach built on transparency, continuity, and disciplined commercial execution.",
      },
      { property: "og:title", content: "Distribution & Partnerships | Yansab General Trading L.L.C" },
      {
        property: "og:description",
        content:
          "Discover Yansab’s partner journey from initial discussion to structured execution and relationship management.",
      },
      { property: "og:image", content: partnershipsHeroVisual },
      { name: "twitter:image", content: partnershipsHeroVisual },
    ],
  }),
  component: PartnershipsPage,
});

function PartnershipsPage() {
  const language = useSiteLanguage();
  const t = getContent(language);
  const isArabic = language === "ar";

  return (
    <SiteLayout language={language}>
      <SectionShell className="partnerships-intro-shell">
        <div className="partnerships-hero-visual-wrap partnerships-hero-visual-wrap--top">
          <img
            src={partnershipsHeroVisual}
            alt={isArabic ? "صورة شراكة احترافية" : "Professional partnership handshake visual"}
            className="partnerships-hero-visual"
            loading="lazy"
            width={1920}
            height={1080}
          />
          <div className="partnerships-hero-overlay" aria-hidden="true" />
        </div>

        <SectionTitle title={t.partnerships.pageTitle} subtitle={t.partnerships.intro} />
        <div className="mt-8 max-w-3xl">
          <BulletList items={t.partnerships.bullets} />
        </div>
      </SectionShell>

      <SectionShell className="section-shell-premium partnerships-journey-shell">
        <Card className="premium-card border-[var(--line-strong)] shadow-[var(--shadow-strong)]">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold text-primary">{t.partnerships.whyPartnerTitle}</h2>
            <div className="mt-5 max-w-3xl">
              <BulletList items={t.partnerships.bullets} />
            </div>

            <h2 className="mt-8 text-2xl font-semibold text-primary">{t.partnerships.journeyTitle}</h2>
            <div className="mt-6">
              <ProcessTimeline items={t.partnerships.journeySteps} isArabic={isArabic} highlightIndices={[0, 3, 5]} />
            </div>
          </CardContent>
        </Card>

        <div className="mt-8">
          <PartnerForm
            title={t.partnerships.partnerFormTitle}
            intro={t.partnerships.partnerFormIntro}
            fields={t.partnerships.partnerFormFields}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contact" search={{ lang: language }}>
              {t.ctaSecondary}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/services" search={{ lang: language }}>
              {language === "ar" ? "استعرض الخدمات" : "Explore Services"}
            </Link>
          </Button>
        </div>
      </SectionShell>
    </SiteLayout>
  );
}
