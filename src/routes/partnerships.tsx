import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BulletList, ProcessTimeline } from "@/components/site/page-sections";
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
  const phoneHref = `tel:${t.contactDetails.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${t.contactDetails.email}`;

  const contactRows = [
    `${isArabic ? "الهاتف" : "Phone"}: ${t.contactDetails.phone}`,
    `${isArabic ? "البريد الإلكتروني" : "Email"}: ${t.contactDetails.email}`,
  ];

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
          <Card className="rounded-xl border border-border bg-card shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
            <CardContent className="space-y-4 pt-6">
              <p className="text-sm leading-7 text-muted-foreground">
                {isArabic
                  ? "بدلاً من النموذج، تواصل معنا مباشرة عبر البريد الإلكتروني أو الهاتف."
                  : "Instead of a form, contact us directly via email or phone."}
              </p>

              <div className="space-y-2 text-sm">
                {contactRows.map((row, index) => (
                  <p key={row} className={index === 0 ? "font-semibold text-primary" : "text-foreground"}>
                    {row}
                  </p>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Button
                  asChild
                  size="lg"
                  className="w-full border border-accent bg-accent text-primary shadow-none hover:bg-[color-mix(in_oklab,var(--color-accent)_90%,white_10%)]"
                >
                  <a href={emailHref}>{isArabic ? "تواصل عبر البريد الإلكتروني" : "Email us directly"}</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-primary/20 bg-primary-foreground text-primary shadow-none hover:bg-[color-mix(in_oklab,var(--color-primary-foreground)_92%,var(--color-muted)_8%)]"
                >
                  <a href={phoneHref}>{isArabic ? "اتصل بنا مباشرة" : "Call us directly"}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
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
