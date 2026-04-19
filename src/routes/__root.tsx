import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SoniaAI } from "@/components/SoniaAI";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <a href="/" className="btn-primary mt-6 inline-flex">Go home</a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sonia Buddy — Smart Travel Companion for West Bengal" },
      { name: "description", content: "Live bus tracking, smart geofence stop alerts, and verified local tours across all 23 districts of West Bengal." },
      { name: "theme-color", content: "#1A202C" },
      { property: "og:title", content: "Sonia Buddy — Smart Travel Companion for West Bengal" },
      { property: "og:description", content: "Live bus tracking, smart geofence stop alerts, and verified local tours across all 23 districts of West Bengal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sonia Buddy — Smart Travel Companion for West Bengal" },
      { name: "twitter:description", content: "Live bus tracking, smart geofence stop alerts, and verified local tours across all 23 districts of West Bengal." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c8c6d95f-8b8d-4d4c-abdb-4f0496f807f6/id-preview-2f141d7f--72ca426b-f436-4b72-87bd-dc5373423b88.lovable.app-1776591109343.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c8c6d95f-8b8d-4d4c-abdb-4f0496f807f6/id-preview-2f141d7f--72ca426b-f436-4b72-87bd-dc5373423b88.lovable.app-1776591109343.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: () => (<><Outlet /><SoniaAI /></>),
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
