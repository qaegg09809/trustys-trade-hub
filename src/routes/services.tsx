import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getContent } from "@/components/site/content";
import { ServiceCards } from "@/components/site/page-sections";
import { SiteLayout, SectionShell, SectionTitle } from "@/components/site/site-layout";
import { useSiteLanguage } from "@/components/site/use-site-language";
import boardroomVisual from "@/assets/yansab-boardroom.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Yansab General Trading L.L.C" },
      {
        name: "description",
        content:
          "Commercial service capabilities across general trading, procurement, distribution, supplier representation, trade coordination, and sourcing.",
      },
      { property: "og:title", content: "Services | Yansab General Trading L.L.C" },
      {
        property: "og:description",
        content:
          "Explore Yansab’s verified service capabilities built for disciplined and reliable commercial execution.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const language = useSiteLanguage();
  const t = getContent(language);
  const isArabic = language === "ar";

  return (
    <SiteLayout language={language}>
      <section className="relative isolate overflow-hidden border-b border-border/70 text-primary-foreground">
        <img src={boardroomVisual} alt={isArabic ? "اجتماع تنفيذي" : "Executive business strategy session"} className="absolute inset-0 h-full w-full object-cover" loading="eager" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/82" aria-hidden="true" />

        <div className="yansab-container relative py-16 md:py-20">
          <span className="section-eyebrow hero-eyebrow px-4 py-2">
            {isArabic ? "الخدمات" : "Services"}
          </span>
          <h1 className="mt-6 max-w-[18ch] text-4xl font-bold leading-[1.08] text-primary-foreground md:text-6xl">{t.services.pageTitle}</h1>
          <p className="mt-5 max-w-[62ch] text-base leading-8 text-primary-foreground md:text-lg">{t.services.intro}</p>
        </div>
      </section>

      <SectionShell>
        <SectionTitle title={isArabic ? "قدرات تنفيذية منضبطة" : "Disciplined commercial capabilities"} />
        <div className="mt-10">
          <ServiceCards cards={t.services.cards} isArabic={isArabic} />
        </div>
      </SectionShell>

      <SectionShell className="section-shell-premium">
        <Card className="premium-card border-[var(--line-strong)] shadow-[var(--shadow-strong)]">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold text-primary">
              {language === "ar" ? "نهج تنفيذي منضبط" : "Disciplined execution model"}
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-muted-foreground md:text-base">
              {language === "ar"
                ? "تُدار الخدمات ضمن وضوح تجاري، وضبط توثيقي، وتنسيق تشغيلي يوازن بين متطلبات السوق والاعتمادية طويلة المدى."
                : "Services are delivered through structured commercial communication, documentation control, and coordinated execution designed for long-term reliability."}
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link to="/contact" search={{ lang: language }}>
                  {t.ctaPrimary}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </SectionShell>
    </SiteLayout>
  );
}
