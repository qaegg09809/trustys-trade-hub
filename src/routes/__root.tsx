import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "YANSAB Trading Co." },
      {
        name: "description",
        content:
          "Yansab General Trading L.L.C is a Dubai-based trading company established in 2010.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "YANSAB Trading Co." },
      {
        property: "og:description",
        content:
          "Where Trading Meets Trust. Dubai-based general trading with disciplined execution.",
      },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "YANSAB Trading Co." },
      { name: "description", content: "Yansab Trading Co. is a Dubai-based general trading company established in 2010, offering sourcing, supply, and distribution solutions." },
      { property: "og:description", content: "Yansab Trading Co. is a Dubai-based general trading company established in 2010, offering sourcing, supply, and distribution solutions." },
      { name: "twitter:description", content: "Yansab Trading Co. is a Dubai-based general trading company established in 2010, offering sourcing, supply, and distribution solutions." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/1fbb5be2-a7fa-464f-a4cd-c340cf0e59c0" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/1fbb5be2-a7fa-464f-a4cd-c340cf0e59c0" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "canonical",
        href: "https://www.yansabtrading.com",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
