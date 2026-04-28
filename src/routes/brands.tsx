import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getContent } from "@/components/site/content";
import { SiteLayout, SectionShell, SectionTitle } from "@/components/site/site-layout";
import { useSiteLanguage } from "@/components/site/use-site-language";
import somittaLogo from "@/assets/somitta-logo.jpg";
import heroFacade from "@/assets/yansab-building-facade.jpg";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands & Business Lines | Yansab General Trading L.L.C" },
      {
        name: "description",
        content:
          "Yansab supports owned and partner brands. Verified portfolio includes Somitta in perfumes, incense, and beauty products.",
      },
      { property: "og:title", content: "Brands & Business Lines | Yansab General Trading L.L.C" },
      {
        property: "og:description",
        content:
          "Explore Yansab’s verified brand portfolio and request additional brand-line details through official contact.",
      },
    ],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  const language = useSiteLanguage();
  const t = getContent(language);
  const isArabic = language === "ar";

  return (
    <SiteLayout language={language}>
      <section className="relative isolate overflow-hidden border-b border-border/70 text-primary-foreground">
        <img src={heroFacade} alt={isArabic ? "واجهة مبنى ينساب" : "Yansab brand environment"} className="absolute inset-0 h-full w-full object-cover" loading="eager" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/82" aria-hidden="true" />

        <div className="yansab-container relative py-16 md:py-20">
          <h1 className="max-w-[18ch] text-4xl font-bold leading-[1.08] text-primary-foreground md:text-6xl">{t.brands.pageTitle}</h1>
          <p className="mt-5 max-w-[62ch] text-base leading-8 text-primary-foreground md:text-lg">{t.brands.intro}</p>
        </div>
      </section>

      <SectionShell>
        <SectionTitle title={isArabic ? "محفظة العلامات" : "Brand portfolio"} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {t.brands.cards.map((brand) => (
            <Card
              key={brand.name}
              className={`premium-card ${brand.status === "missing" ? "border-dashed bg-card/86 shadow-none" : ""}`}
            >
              <CardContent className="pt-6">
                {brand.status !== "missing" ? (
                  <img src={somittaLogo} alt="Somitta logo" className="h-24 w-auto object-contain" loading="lazy" />
                ) : null}
                {brand.website ? (
                  <h2 className="mt-4 text-2xl font-semibold text-primary">
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                    >
                      {brand.name}
                    </a>
                  </h2>
                ) : (
                  <h2 className="mt-4 text-2xl font-semibold text-primary">{brand.name}</h2>
                )}
                <p className="mt-2 text-sm font-semibold text-accent">{brand.tagline}</p>
                <p className="mt-3 text-sm text-foreground">{brand.category}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{brand.positioning}</p>
                {brand.cta && brand.website ? (
                  <div className="mt-6">
                    <Button
                      asChild
                      className="h-11 min-w-32 px-6 font-semibold bg-accent text-accent-foreground border-accent hover:bg-accent/90 hover:border-accent/90 hover:text-accent-foreground"
                    >
                      <a href={brand.website} target="_blank" rel="noopener noreferrer">
                        {brand.cta}
                      </a>
                    </Button>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
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
