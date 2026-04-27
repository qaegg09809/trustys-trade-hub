import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getContent } from "@/components/site/content";
import { SiteLayout, SectionShell, SectionTitle } from "@/components/site/site-layout";
import { useSiteLanguage } from "@/components/site/use-site-language";
import contactConversationImage from "@/assets/contact-conversation-hero.jpg";

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
          <div className="space-y-6 lg:col-span-6">
            <Card className="rounded-xl border border-border bg-card shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
              <CardContent className="space-y-4 pt-6">
                <div className="h-1.5 w-12 rounded-full bg-accent" />
                <p className="text-sm leading-7 text-muted-foreground">
                  {isArabic
                    ? "اختر وسيلة التواصل المناسبة وسيتم تحويلك مباشرة."
                    : "Choose your preferred contact method for direct communication."}
                </p>

                <div className="space-y-2 text-sm">
                  {contactRows.map((row, index) => (
                    <p key={row} className={index === 0 ? "font-semibold text-primary" : "text-foreground"}>
                      {row}
                    </p>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
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

          <div className="lg:col-span-6">
            <Card className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
              <img
                src={contactConversationImage}
                alt={
                  isArabic
                    ? "اجتماع مهني لبدء شراكة تجارية"
                    : "Professional business conversation for partnership planning"
                }
                className="h-full min-h-[280px] w-full object-cover"
                width={1600}
                height={1000}
              />
            </Card>
          </div>
        </div>
      </SectionShell>
    </SiteLayout>
  );
}
