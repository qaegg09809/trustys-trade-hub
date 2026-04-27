import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getContent } from "@/components/site/content";
import { SiteLayout, SectionShell, SectionTitle } from "@/components/site/site-layout";
import { useSiteLanguage } from "@/components/site/use-site-language";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Yansab General Trading L.L.C" },
      {
        name: "description",
        content:
          "Contact Yansab for partnerships, supplier opportunities, distribution discussions, and general commercial inquiries.",
      },
      { property: "og:title", content: "Contact | Yansab General Trading L.L.C" },
      {
        property: "og:description",
        content:
          "Start the conversation with Yansab for disciplined and professional commercial execution support.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
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
      <SectionShell>
        <SectionTitle title={t.contact.pageTitle} subtitle={t.contact.intro} />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <Card className="premium-card">
              <CardContent className="space-y-3 pt-6 text-sm">
                {contactRows.map((row, index) => (
                  <p key={row} className={index === 0 ? "font-semibold text-primary" : "text-foreground"}>
                    {row}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <Card className="premium-card border-[var(--line-strong)] shadow-[var(--shadow-strong)]">
              <CardContent className="space-y-5 pt-6">
                <p className="text-sm leading-7 text-muted-foreground">
                  {isArabic
                    ? "اختر وسيلة التواصل المناسبة وسيتم تحويلك مباشرة."
                    : "Choose your preferred contact method for direct communication."}
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Button asChild size="lg" className="w-full">
                    <a href={emailHref}>{isArabic ? "تواصل عبر البريد الإلكتروني" : "Email us directly"}</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full">
                    <a href={phoneHref}>{isArabic ? "اتصل بنا مباشرة" : "Call us directly"}</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionShell>
    </SiteLayout>
  );
}
