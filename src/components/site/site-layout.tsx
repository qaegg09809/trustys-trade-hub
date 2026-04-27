import type { ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getContent } from "./content";
import type { SiteLanguage } from "./language";
import logoEn from "@/assets/yansab-logo-en-transparent.png";
import logoAr from "@/assets/yansab-logo-ar.jpg";
import logoFull from "@/assets/yansab-logo-full-transparent.png";

export function SectionShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`section-shell ${className}`}>
      <div className="yansab-container">{children}</div>
    </section>
  );
}

export function SiteLayout({ language, children }: { language: SiteLanguage; children: ReactNode }) {
  const t = getContent(language);
  const isArabic = language === "ar";
  const location = useLocation();
  const altLanguage: SiteLanguage = isArabic ? "en" : "ar";
  const activeLogo = isArabic ? logoAr : logoEn;
  const verificationLabel = isArabic ? "يرجى التواصل عبر نموذج الاتصال" : "Please contact us via the contact form";
  const contactLines = [
    `${isArabic ? "الهاتف" : "Phone"}: ${verificationLabel}`,
    `${isArabic ? "البريد الإلكتروني" : "Email"}: ${verificationLabel}`,
    `${isArabic ? "العنوان" : "Address"}: ${verificationLabel}`,
    `${isArabic ? "منصات التواصل" : "Social Platforms"}: ${verificationLabel}`,
  ];

  return (
    <div dir={t.dir} lang={language} className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-[var(--line-soft)] bg-background/72 backdrop-blur-[20px]">
        <div className="yansab-container flex h-[5.5rem] items-center justify-between gap-4">
          <Link to="/" search={{ lang: language }} className="inline-flex shrink-0 items-center">
            <img
              src={activeLogo}
              alt={isArabic ? "شعار ينساب للتجارة العامة ذ.م.م" : "Yansab General Trading L.L.C logo"}
              className="h-10 w-auto md:h-11"
              loading="eager"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center lg:flex">
            <div className="inline-flex min-h-12 items-center gap-1 rounded-full border border-[var(--line-soft)] bg-[var(--glass-bg-strong)] px-2 py-1.5 shadow-[var(--shadow-glass)] backdrop-blur-[calc(var(--glass-blur)+2px)]">
            {t.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                search={{ lang: language }}
                  className="relative rounded-full px-4 py-2 text-sm font-semibold text-primary/92 transition-all duration-250 hover:bg-[var(--glass-highlight)] hover:text-primary"
                activeProps={{
                  className:
                    "bg-[var(--glass-highlight)] text-primary shadow-[var(--shadow-soft)] before:absolute before:left-1/2 before:top-1 before:h-0.5 before:w-8 before:-translate-x-1/2 before:bg-accent before:content-['']",
                }}
              >
                {item.label}
              </Link>
            ))}
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
             <div className="hidden h-10 items-center rounded-full border border-[var(--line-soft)] bg-[var(--glass-bg-strong)] p-1 shadow-[var(--shadow-glass)] backdrop-blur-[calc(var(--glass-blur)+2px)] sm:flex">
              <Link
                to={location.pathname}
                search={{ lang: "en" }}
                   className={`inline-flex h-8 min-w-10 items-center justify-center rounded-full px-3 text-xs font-semibold transition-all ${!isArabic ? "bg-[var(--glass-highlight)] text-primary shadow-[var(--shadow-soft)]" : "text-primary/78 hover:bg-[var(--glass-highlight)] hover:text-primary"}`}
              >
                EN
              </Link>
              <Link
                to={location.pathname}
                search={{ lang: "ar" }}
                   className={`inline-flex h-8 min-w-10 items-center justify-center rounded-full px-3 text-xs font-semibold transition-all ${isArabic ? "bg-[var(--glass-highlight)] text-primary shadow-[var(--shadow-soft)]" : "text-primary/78 hover:bg-[var(--glass-highlight)] hover:text-primary"}`}
              >
                AR
              </Link>
            </div>

            <Link
              to={location.pathname}
              search={{ lang: altLanguage }}
              className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-[var(--line-soft)] bg-[var(--glass-bg-strong)] px-3 text-sm font-semibold text-primary shadow-[var(--shadow-glass)] backdrop-blur-[calc(var(--glass-blur)+2px)] transition-all duration-250 hover:bg-[var(--glass-highlight)] sm:hidden"
            >
              {altLanguage.toUpperCase()}
            </Link>

            <Button asChild className="hidden min-w-36 sm:inline-flex" size="default">
              <Link to="/contact" search={{ lang: language }}>
                {t.ctaPrimary}
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                    className="border-[var(--line-soft)] bg-[var(--glass-bg-strong)] text-primary shadow-[var(--shadow-glass)] backdrop-blur-[calc(var(--glass-blur)+2px)] lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">{isArabic ? "فتح القائمة" : "Open menu"}</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side={isArabic ? "left" : "right"}
                  className="w-[90%] border-[var(--line-soft)] bg-background/82 backdrop-blur-[22px] sm:max-w-sm"
              >
                <SheetHeader className="border-b border-border/70 pb-4">
                  <SheetTitle>
                    <img src={isArabic ? logoAr : logoFull} alt={isArabic ? "شعار ينساب" : "Yansab logo"} className="h-14 w-auto" />
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6 flex flex-col gap-2">
                  {t.nav.map((item) => (
                    <SheetClose asChild key={item.to}>
                      <Link
                        to={item.to}
                        search={{ lang: language }}
                        className="rounded-full border border-transparent px-4 py-3 text-base font-semibold text-foreground transition-all duration-250 hover:border-[var(--glass-border)] hover:bg-[var(--glass-bg-strong)] hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <SheetClose asChild>
                    <Button asChild>
                      <Link to="/contact" search={{ lang: language }}>
                        {t.ctaPrimary}
                      </Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild variant="outline">
                      <Link to="/partnerships" search={{ lang: language }}>
                        {t.ctaSecondary}
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <div className="h-px w-full bg-accent" aria-hidden="true" />

      <main>{children}</main>

      <footer className="border-t border-primary-foreground/10 bg-primary text-primary-foreground">
        <div className="yansab-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4">
            <img src={activeLogo} alt={isArabic ? "شعار ينساب" : "Yansab logo"} className="h-12 w-auto" />
            <p className="text-sm leading-7 text-primary-foreground/90">{t.footerIntro}</p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-primary-foreground">{t.quickLinksLabel}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {t.nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    search={{ lang: language }}
                    className="text-primary-foreground/84 transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-primary-foreground">{isArabic ? "الخدمات" : "Services"}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/84">
              {t.home.scopeCards.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 text-sm">
            <h3 className="text-sm font-bold text-primary-foreground">{t.contactLabel}</h3>
            {contactLines.map((line) => (
              <p key={line} className="text-primary-foreground/84">
                {line}
              </p>
            ))}
          </div>

          <div className="space-y-2 text-sm">
            <h3 className="text-sm font-bold text-primary-foreground">{isArabic ? "اللغة" : "Language"}</h3>
            <div className="inline-flex h-10 items-center rounded-full border border-primary-foreground/32 bg-primary-foreground/12 p-1 backdrop-blur-[10px]">
              <Link
                to={location.pathname}
                search={{ lang: "en" }}
                className={`inline-flex h-8 items-center justify-center rounded-full px-3 text-xs font-semibold transition-all ${!isArabic ? "bg-primary-foreground text-primary shadow-[var(--shadow-soft)]" : "text-primary-foreground/86 hover:bg-primary-foreground/16 hover:text-primary-foreground"}`}
              >
                EN
              </Link>
              <Link
                to={location.pathname}
                search={{ lang: "ar" }}
                className={`inline-flex h-8 items-center justify-center rounded-full px-3 text-xs font-semibold transition-all ${isArabic ? "bg-primary-foreground text-primary shadow-[var(--shadow-soft)]" : "text-primary-foreground/86 hover:bg-primary-foreground/16 hover:text-primary-foreground"}`}
              >
                AR
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/12">
          <div className="yansab-container flex flex-wrap items-center justify-between gap-3 py-4 text-xs text-primary-foreground/75">
            <p>{isArabic ? "© 2010 - 2026 ينساب للتجارة العامة ذ.م.م" : "© 2010 - 2026 Yansab General Trading L.L.C"}</p>
            <p>{isArabic ? "جميع الحقوق محفوظة" : "All rights reserved"}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl space-y-4">
      <span className="inline-block h-1 w-14 bg-accent" aria-hidden="true" />
      <h2 className="text-balance text-3xl font-bold leading-tight text-primary md:text-5xl">{title}</h2>
      {subtitle ? <p className="text-base leading-8 text-muted-foreground md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
