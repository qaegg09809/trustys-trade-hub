import { useState, type CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, ClipboardCheck, Gauge, Handshake, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/site/site-layout";
import { getContent } from "@/components/site/content";
import { useSiteLanguage } from "@/components/site/use-site-language";
import heroBackground from "@/assets/yansab-hero-ai-bg-v2.jpg";
import boardroomVisual from "@/assets/yansab-boardroom.jpg";
import trustDocuments from "@/assets/yansab-trust-documents-v3.jpg";
import serviceSourcing from "@/assets/yansab-service-sourcing.jpg";
import serviceDistribution from "@/assets/yansab-service-distribution.jpg";
import serviceSupplierRepresentation from "@/assets/yansab-service-supplier-representation-v2.jpg";
import serviceProcurement from "@/assets/yansab-service-procurement.jpg";
import serviceTradeCoordination from "@/assets/yansab-service-trade-coordination.jpg";
import partnershipHandshake from "@/assets/yansab-partnership-handshake-v2.jpg";
import contactOffice from "@/assets/yansab-contact-office.jpg";
import logisticsVisual from "@/assets/yansab-logistics-visual.jpg";
import operatingModelBackground from "@/assets/operating-model-bg-v1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yansab General Trading L.L.C" },
      {
        name: "description",
        content:
          "Dubai-based trading company established in 2010, built on trust, discipline, and long-term commercial value.",
      },
      { property: "og:title", content: "Yansab General Trading L.L.C" },
      {
        property: "og:description",
        content:
          "Family-owned trading platform with institutional discipline across sourcing, distribution, and commercial execution.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const language = useSiteLanguage();
  const t = getContent(language);
  const isArabic = language === "ar";

  const services = [
    {
      title: t.home.scopeCards[0]?.title,
      body: t.home.scopeCards[0]?.body,
      img: serviceSourcing,
    },
    {
      title: t.home.scopeCards[1]?.title,
      body: t.home.scopeCards[1]?.body,
      img: serviceProcurement,
    },
    {
      title: t.home.scopeCards[2]?.title,
      body: t.home.scopeCards[2]?.body,
      img: serviceDistribution,
    },
    {
      title: t.home.scopeCards[3]?.title,
      body: t.home.scopeCards[3]?.body,
      img: serviceSupplierRepresentation,
    },
    {
      title: t.home.scopeCards[4]?.title,
      body: t.home.scopeCards[4]?.body,
      img: serviceTradeCoordination,
    },
    {
      title: t.home.scopeCards[5]?.title,
      body: t.home.scopeCards[5]?.body,
      img: boardroomVisual,
    },
  ];

  const trustItems = t.home.trustItems;
  const operatingIcons = [Gauge, BadgeCheck, ShieldCheck, ClipboardCheck, Handshake];
  const operatingDescriptions = isArabic
    ? [
        "قياس حجم الطلب الفعلي واتجاهه قبل الالتزام التشغيلي.",
        "تحليل هامش العائد والربحية لضمان جدوى التنفيذ.",
        "التحقق من استقرار الموردين وقدرتهم على الالتزام بالتسليم.",
        "مراجعة الامتثال والتوثيق لضمان تنفيذ منضبط ومطابق.",
        "تقييم قابلية تكرار الأعمال والتوسع على المدى الطويل.",
      ]
    : [
        "Measure real demand volume and trend before operational commitment.",
        "Assess margin structure and profitability to ensure commercial viability.",
        "Validate supplier stability and delivery consistency before execution.",
        "Review compliance and documentation readiness for controlled operations.",
        "Evaluate repeatability and long-term scalability potential.",
      ];
  const [activeOperatingStep, setActiveOperatingStep] = useState(0);
  const ActiveIcon = operatingIcons[activeOperatingStep] ?? ShieldCheck;
  const activeOperatingTitle = t.home.operatingCriteria[activeOperatingStep] ?? "";
  const activeOperatingDescription = operatingDescriptions[activeOperatingStep] ?? "";
  const totalOperatingSteps = t.home.operatingCriteria.length;

  const handleOperatingStepNavigation = (index: number, key: string) => {
    if (key === "ArrowDown" || key === "ArrowRight") {
      setActiveOperatingStep((index + 1) % totalOperatingSteps);
      return;
    }

    if (key === "ArrowUp" || key === "ArrowLeft") {
      setActiveOperatingStep((index - 1 + totalOperatingSteps) % totalOperatingSteps);
      return;
    }

    if (key === "Home") {
      setActiveOperatingStep(0);
      return;
    }

    if (key === "End") {
      setActiveOperatingStep(totalOperatingSteps - 1);
    }
  };

  return (
    <SiteLayout language={language}>
      <section className="relative isolate overflow-hidden border-b border-border/70 text-primary-foreground">
        <img
          src={heroBackground}
          alt={isArabic ? "مشهد لوجستي وتجاري احترافي" : "Professional logistics and trade operations"}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-primary/58" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(110deg,color-mix(in_oklab,var(--color-primary)_88%,transparent)_0%,color-mix(in_oklab,var(--color-primary)_72%,transparent)_42%,color-mix(in_oklab,var(--color-secondary)_58%,transparent)_100%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-primary)_12%,transparent)_0%,color-mix(in_oklab,var(--color-primary)_54%,transparent)_100%)]" aria-hidden="true" />

        <div className="yansab-container section-hero relative">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="hero-eyebrow inline-flex w-fit items-center rounded-sm px-3 py-1.5 text-[11px] font-semibold uppercase">
                {t.home.heroKicker}
              </p>
              <h1 className="max-w-[13ch] text-[44px] font-bold leading-[1.02] text-primary-foreground drop-shadow-[0_18px_42px_rgba(0,0,0,0.56)] md:text-[72px]">
                {t.home.heroTitle}
              </h1>
              <p className="mt-7 max-w-[60ch] border-s-2 border-accent ps-4 text-base leading-8 text-primary-foreground md:text-[19px]">
                {t.home.heroBody}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 min-w-40 border border-accent bg-accent px-8 text-[15px] font-semibold text-primary shadow-none hover:bg-[color-mix(in_oklab,var(--color-accent)_90%,white_10%)]"
                >
                  <Link to="/contact" search={{ lang: language }}>
                    {t.ctaPrimary}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 min-w-40 border-primary-foreground bg-primary-foreground px-8 text-[15px] font-semibold text-primary shadow-none hover:bg-[color-mix(in_oklab,var(--color-primary-foreground)_92%,var(--color-muted)_8%)]"
                >
                  <Link to="/about" search={{ lang: language }}>
                    {t.home.introCta}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="hero-foundation-panel rounded-sm p-5 text-primary-foreground md:p-6">
                <h2 className="text-sm font-bold uppercase tracking-normal text-primary-foreground">{isArabic ? "أساس العمل" : "Operating foundation"}</h2>
                <ul className="mt-4 space-y-3">
                  {t.home.heroHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-primary-foreground">
                      <span className="mt-2 inline-block h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-primary py-4 text-primary-foreground md:py-5">
        <div className="mx-auto grid w-full max-w-[1240px] gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustItems.map((item, idx) => {
            return (
              <div
                key={item}
                className={`flex min-h-14 items-center gap-3 px-2 text-[13px] font-semibold tracking-[0.01em] text-primary-foreground/96 md:text-sm ${idx < trustItems.length - 1 ? "lg:border-r lg:border-primary-foreground/18" : ""}`}
              >
                <span className="inline-block h-1.5 w-8 bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-shell-premium border-b border-border/70 py-14 md:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <span className="mb-5 inline-block h-1 w-12 bg-accent" aria-hidden="true" />
            <h2 className="max-w-[14ch] text-4xl font-bold leading-tight text-primary md:text-6xl">{t.home.introTitle}</h2>
            <p className="mt-6 max-w-[62ch] text-base leading-8 text-muted-foreground md:text-lg">{t.home.introBody}</p>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden border border-[var(--line-strong)] shadow-[var(--shadow-strong)]">
              <img src={trustDocuments} alt={isArabic ? "اجتماع تجاري" : "Business meeting"} className="h-[440px] w-full object-cover" loading="lazy" width={1600} height={1024} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-[color-mix(in_oklab,var(--color-background)_80%,var(--color-muted)_20%)] py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary md:text-5xl">{t.home.scopeTitle}</h2>
            <span className="mx-auto mt-3 block h-1 w-12 bg-accent" aria-hidden="true" />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, idx) => {
              return (
                <Card
                  key={service.title ?? idx}
                  className="service-showcase-card flex h-full flex-col overflow-hidden"
                >
                  <div className="relative h-40">
                    <img src={service.img} alt={service.title ?? "service image"} className="h-full w-full object-cover" loading="lazy" width={1600} height={1024} />
                    <div className="absolute inset-x-0 bottom-0 h-[3px] bg-accent" aria-hidden="true" />
                  </div>
                  <CardContent className="flex flex-1 flex-col px-5 pb-5 pt-4 md:px-6 md:pb-6 md:pt-5">
                    <h3 className="text-[30px] font-semibold leading-[1.2] text-primary md:text-[32px]">{service.title}</h3>
                    <p className="mt-2.5 text-[18px] leading-8 text-muted-foreground">{service.body}</p>
                    <span className="mt-auto inline-flex items-center pt-5 text-[18px] font-semibold text-accent">{isArabic ? "اعرف المزيد" : "Learn more"}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="operating-model-shell relative isolate overflow-hidden border-b border-border/70 py-16 md:py-20">
        <img
          src={operatingModelBackground}
          alt=""
          aria-hidden="true"
          className="operating-model-bg"
          loading="lazy"
          width={1920}
          height={1088}
        />
        <div className="operating-model-overlay" aria-hidden="true" />
        <div className="operating-model-grain" aria-hidden="true" />
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="operating-stage mx-auto max-w-[1120px]">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold leading-[1.08] text-primary md:text-6xl">{t.home.operatingModelTitle}</h2>
              <span className="operating-title-accent" aria-hidden="true" />
              <p className="operating-model-support">{t.home.operatingModelBody}</p>
            </div>

            <div
              className="operating-framework mt-12"
              style={{ "--operating-active-step": activeOperatingStep } as CSSProperties}
            >
              <ol className="operating-timeline" aria-label={t.home.operatingModelTitle}>
                {t.home.operatingCriteria.map((item, index) => (
                  <li key={item} className="operating-timeline-item">
                    <button
                      type="button"
                      className={`operating-step-button ${activeOperatingStep === index ? "is-active" : ""}`}
                      id={`operating-step-${index}`}
                      onMouseEnter={() => setActiveOperatingStep(index)}
                      onFocus={() => setActiveOperatingStep(index)}
                      onClick={() => setActiveOperatingStep(index)}
                      onKeyDown={(event) => {
                        if (["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
                          event.preventDefault();
                          handleOperatingStepNavigation(index, event.key);
                        }
                      }}
                      aria-current={activeOperatingStep === index ? "step" : undefined}
                      aria-controls="operating-detail-panel"
                    >
                      <span className="operating-step-number">{String(index + 1).padStart(2, "0")}</span>
                      <span className="operating-step-title">{item}</span>
                    </button>
                  </li>
                ))}
              </ol>

              <article className="operating-detail-panel" id="operating-detail-panel" key={activeOperatingStep}>
                <span className="operating-detail-icon" aria-hidden="true">
                  <ActiveIcon className="h-5 w-5" />
                </span>
                <span className="operating-detail-number">{String(activeOperatingStep + 1).padStart(2, "0")}</span>
                <h3 className="operating-detail-title">{activeOperatingTitle}</h3>
                <p className="operating-detail-description">{activeOperatingDescription}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bridge section-band-brand relative isolate overflow-hidden border-b border-border/70 py-14 md:py-18 text-primary-foreground">
        <img src={logisticsVisual} alt={isArabic ? "مشهد لوجستي" : "Logistics network visual"} className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1600} height={1024} />
        <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,color-mix(in_oklab,var(--color-primary)_74%,transparent)_0%,color-mix(in_oklab,var(--color-secondary)_52%,transparent)_45%,color-mix(in_oklab,var(--color-primary)_88%,transparent)_100%)]" aria-hidden="true" />
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="relative text-center">
            <h2 className="text-4xl font-bold text-primary-foreground md:text-5xl">{t.home.whyTitle}</h2>
            <span className="mx-auto mt-3 block h-1 w-12 bg-accent" aria-hidden="true" />
          </div>

          <div className="relative mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {t.home.whyBullets.map((item) => (
              <div key={item} className="premium-card border-primary-foreground/24 bg-[color-mix(in_oklab,var(--color-card)_90%,var(--color-primary)_10%)] px-5 py-6 text-center">
                <span className="mx-auto block h-1 w-10 bg-accent" aria-hidden="true" />
                <p className="mt-4 text-sm leading-7 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-primary/20 bg-primary text-primary-foreground">
        <div className="mx-auto grid w-full max-w-[1240px] overflow-hidden rounded-none px-0 lg:grid-cols-2">
          <div className="min-h-[340px]">
            <img src={partnershipHandshake} alt={isArabic ? "مشهد شراكة تجارية" : "Business partnership"} className="h-full w-full object-cover" loading="lazy" width={1600} height={1024} />
          </div>
          <div className="px-6 py-12 lg:px-10 lg:py-14">
            <h2 className="max-w-[16ch] text-4xl font-bold leading-tight text-primary-foreground">{t.home.partnershipTitle}</h2>
            <ul className="mt-6 space-y-3">
              {t.home.partnershipBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-primary-foreground/92">
                  <span className="mt-2 inline-block h-2.5 w-2.5 shrink-0 bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-7 h-12 min-w-40 px-7 font-semibold">
              <Link to="/partnerships" search={{ lang: language }}>
                {t.ctaSecondary}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-14 text-primary-foreground md:py-18">
        <img src={contactOffice} alt={isArabic ? "أفق دبي" : "Dubai skyline at sunset"} className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/84" aria-hidden="true" />

        <div className="relative mx-auto grid w-full max-w-[1240px] gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="max-w-[14ch] text-5xl font-bold leading-tight text-primary-foreground">{t.home.finalCtaTitle}</h2>
          </div>
          <div>
            <p className="max-w-[62ch] text-base leading-8 text-primary-foreground/92 md:text-lg">{t.home.finalCtaBody}</p>
            <Button asChild size="lg" className="mt-6 h-12 min-w-44 px-8 font-semibold">
              <Link to="/contact" search={{ lang: language }}>
                {t.home.finalCtaButton}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
