import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Smartphone, Bus, ShieldCheck, Sparkles, Lock, HelpCircle } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Sonia Buddy" },
      { name: "description", content: "Frequently asked questions about Sonia Buddy: smart alerts, bus data accuracy, privacy, language support, and more." },
      { property: "og:title", content: "FAQ — Sonia Buddy" },
      { property: "og:description", content: "Answers about app usage, safety, bus data, and privacy on Sonia Buddy." },
    ],
  }),
  component: FAQPage,
});

const categories = [
  { key: "all", label: "All", icon: Sparkles },
  { key: "App Usage", label: "App Usage", icon: Smartphone },
  { key: "Bus Data", label: "Bus Data", icon: Bus },
  { key: "Safety", label: "Safety", icon: ShieldCheck },
  { key: "General", label: "General", icon: HelpCircle },
  { key: "Privacy", label: "Privacy", icon: Lock },
] as const;

const faqs = [
  {
    tag: "App Usage",
    icon: Smartphone,
    q: "How do I set a destination alert?",
    a: "Simply search for your bus route, select your destination stop, and toggle the \"Smart Alert\" button. Sonia Buddy will notify you via sound and vibration before you arrive.",
  },
  {
    tag: "Bus Data",
    icon: Bus,
    q: "Are the bus timings accurate?",
    a: "We use ground-level verified data for 23 districts of West Bengal. However, timings may vary slightly due to real-time traffic conditions.",
  },
  {
    tag: "Safety",
    icon: ShieldCheck,
    q: "Why does the app ask for background location?",
    a: "Background location is essential for our \"Smart Alert\" feature. It allows the app to track your distance from the stop even if your phone is locked or you are using another app.",
  },
  {
    tag: "General",
    icon: HelpCircle,
    q: "Is Sonia Buddy available in Bengali?",
    a: "Yes! Sonia Buddy is designed for West Bengal and supports both English and Bengali languages for a smoother user experience.",
  },
  {
    tag: "Privacy",
    icon: Lock,
    q: "How can I delete my data?",
    a: "Your privacy is our priority. You can request data deletion through the \"Account Deletion\" link in the footer or by emailing support@soniabuddy.in.",
  },
];

function FAQPage() {
  const [active, setActive] = useState<string>("all");

  const filtered = active === "all" ? faqs : faqs.filter((f) => f.tag === active);

  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto max-w-4xl px-4 pt-24 pb-12 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Help center</p>
          <h1 className="mt-3 text-5xl sm:text-6xl font-bold tracking-tight">
            Frequently Asked{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            >
              Questions
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about traveling smarter with Sonia Buddy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24">
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => {
            const isActive = active === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  isActive
                    ? "bg-accent text-primary border-transparent shadow-md"
                    : "bg-background text-muted-foreground border-border hover:text-foreground hover:border-accent/40"
                }`}
              >
                <c.icon className="h-4 w-4" />
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Accordion */}
        <div className="glass-card rounded-2xl p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {filtered.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-border/60 last:border-b-0 px-3 sm:px-4"
              >
                <AccordionTrigger className="hover:no-underline py-5 group">
                  <div className="flex items-start gap-4 text-left pr-4">
                    <span
                      className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "var(--gradient-accent)" }}
                    >
                      <f.icon className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent mb-1">
                        {f.tag}
                      </span>
                      <p className="text-base sm:text-lg font-semibold text-foreground">
                        {f.q}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-[3.25rem] pr-4 pb-5 text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still need help */}
        <div className="mt-12 text-center rounded-2xl p-10" style={{ background: "var(--gradient-navy)" }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Still have questions?</h2>
          <p className="mt-2 text-white/70">Our support team usually replies within 24–48 hours.</p>
          <a href="/contact" className="btn-primary mt-6 inline-flex">
            Contact Support
          </a>
        </div>
      </section>
    </PageShell>
  );
}
