import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getContent } from "@/components/site/content";
import { SiteLayout, SectionShell, SectionTitle } from "@/components/site/site-layout";
import { useSiteLanguage } from "@/components/site/use-site-language";
import boardroomVisual from "@/assets/yansab-founder-message.jpg";
import heroFacade from "@/assets/yansab-building-facade.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Yansab General Trading L.L.C" },
      {
        name: "description",
        content:
          "Dubai-based trading company established in 2010 with family roots, institutional discipline, and long-term value focus.",
      },
      { property: "og:title", content: "About Yansab General Trading L.L.C" },
      {
        property: "og:description",
        content:
          "Learn about Yansab’s story, founder’s message, vision, mission, and values built on trust and disciplined execution.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const language = useSiteLanguage();
  const t = getContent(language);
  const isArabic = language === "ar";

  return (
    <SiteLayout language={language}>
      <section className="relative isolate overflow-hidden border-b border-border/70 text-primary-foreground">
        <img src={heroFacade} alt={isArabic ? "مبنى ينساب" : "Yansab headquarters facade"} className="absolute inset-0 h-full w-full object-cover" loading="eager" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/82" aria-hidden="true" />

        <div className="yansab-container relative py-16 md:py-20 lg:py-24">
          <h1 className="max-w-[18ch] text-4xl font-bold leading-[1.08] text-primary-foreground md:text-6xl">{t.about.pageTitle}</h1>
          <p className="mt-5 max-w-[62ch] text-base leading-8 text-primary-foreground md:text-lg">{t.about.intro}</p>
        </div>
      </section>

      <SectionShell>
        <SectionTitle title={isArabic ? "الهوية المؤسسية" : "Corporate identity"} />
        <div className="mt-8 grid gap-6">
          {t.about.overview.map((paragraph) => (
            <p key={paragraph} className="max-w-4xl text-base leading-9 text-muted-foreground md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="section-shell-premium">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionTitle title={t.about.founderTitle} />
            <div className="mt-6 space-y-5">
              {t.about.founderMessage.map((paragraph) => (
                <p key={paragraph} className="text-base leading-9 text-muted-foreground md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <Card className="premium-card overflow-hidden border-[var(--line-strong)] shadow-[var(--shadow-strong)]">
              <img
                src={boardroomVisual}
                alt={language === "ar" ? "غرفة اجتماعات احترافية" : "Executive boardroom"}
                width={1600}
                height={1024}
                className="h-80 w-full object-cover"
                loading="lazy"
              />
            </Card>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-5 md:grid-cols-3">
          <Card className="premium-card">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold text-primary">{t.about.visionTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{t.about.visionBody}</p>
            </CardContent>
          </Card>
          <Card className="premium-card">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold text-primary">{t.about.missionTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{t.about.missionBody}</p>
            </CardContent>
          </Card>
          <Card className="premium-card">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold text-primary">{t.about.valuesTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{t.about.valuesBody}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10">
          <Button asChild>
            <Link to="/contact" search={{ lang: language }}>
              {t.ctaPrimary}
            </Link>
          </Button>
        </div>
      </SectionShell>
    </SiteLayout>
  );
}
