import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyDownload } from "./StickyDownload";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
      <StickyDownload />
    </div>
  );
}

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-12">
        <header className="mb-10 pb-8 border-b border-border">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Sonia Buddy
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
          {intro && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>}
          <p className="mt-4 text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </header>
        <div className="prose-legal">{children}</div>
      </article>
    </PageShell>
  );
}
