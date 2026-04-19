import { createFileRoute } from "@tanstack/react-router";
import { Download, MapPin, Bell, Compass, Search, BellRing, Plane, ArrowRight, Check } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import mockup from "@/assets/app-mockup.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sonia Buddy — Travel West Bengal Like a Pro" },
      { name: "description", content: "Track local buses in real-time, get smart geofence stop alerts, and book verified tours across 23 districts of West Bengal." },
      { property: "og:title", content: "Sonia Buddy — Travel West Bengal Like a Pro" },
      { property: "og:description", content: "Live bus tracking + smart alerts for 23 districts of West Bengal." },
    ],
  }),
  component: HomePage,
});

const districts = [
  "Kolkata","Howrah","Hooghly","North 24 Parganas","South 24 Parganas","Nadia",
  "Murshidabad","Birbhum","Bardhaman Purba","Paschim Bardhaman","Purulia","Bankura",
  "Paschim Medinipur","Purba Medinipur","Jhargram","Malda","Uttar Dinajpur","Dakshin Dinajpur",
  "Darjeeling","Kalimpong","Jalpaiguri","Alipurduar","Cooch Behar",
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Now live across all 23 districts
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Travel West Bengal{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-accent)" }}>
                Like a Pro.
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Sonia Buddy is your smart travel companion. Track local buses, get real-time stop alerts,
              and discover verified tour packages across all 23 districts. Travel smarter, safer, and faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="btn-primary">
                <Download className="h-4 w-4" /> Download on Play Store
              </a>
              <a href="#features" className="btn-ghost">
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Free to use","Works offline","Privacy-first"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-accent" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-60"
              style={{ background: "var(--gradient-accent)" }}
            />
            <img
              src={mockup}
              alt="Sonia Buddy app live bus tracking screen"
              width={520}
              height={520}
              className="w-full max-w-[440px] lg:max-w-[520px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Key features</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">Why use Sonia Buddy?</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Built from the ground up for the way Bengal actually travels.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: BellRing, title: "Smart Geofence Alerts", desc: "Never miss your stop again. Get automatic sound and vibration notifications as you enter your destination's radius — perfect for naps or noisy bus journeys." },
            { icon: MapPin, title: "Hyper-Local Bus Data", desc: "Detailed timings and stop sequences for routes even global maps miss. From major city hubs to rural village stands, we've got you covered." },
            { icon: Compass, title: "Verified Local Tours", desc: "Planning a trip to Digha, Darjeeling, or Murshidabad? Connect directly with trusted local agencies for the best, most affordable tour plans." },
          ].map((f) => (
            <div key={f.title} className="glass-card rounded-2xl p-7 transition-transform hover:-translate-y-1">
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-5"
                style={{ background: "var(--gradient-accent)" }}
              >
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">How it works</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">3 Simple Steps</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", icon: Search, title: "Search Your Route", desc: "Enter your starting point and destination to find the best bus options." },
              { n: "02", icon: Bell, title: "Set Your Alert", desc: "Select your drop-off stop and activate the smart proximity notification." },
              { n: "03", icon: Plane, title: "Relax & Travel", desc: "Sit back and enjoy. Sonia Buddy will alert you just before you arrive." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl bg-background p-7 border border-border">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-4xl font-display font-bold text-accent">{s.n}</span>
                  <s.icon className="h-7 w-7 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Regional coverage</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">All 23 Districts of West Bengal</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              From the tea gardens of Darjeeling to the beaches of Digha, Sonia Buddy maps every corner of Bengal —
              including routes that mainstream apps simply don't list.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {districts.map((d) => (
                <div key={d} className="px-3 py-2 rounded-lg bg-secondary text-xs font-medium text-secondary-foreground inline-flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-accent shrink-0" /> {d}
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square max-w-md mx-auto w-full">
            <div className="absolute inset-0 rounded-3xl glass-card p-8 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
                <defs>
                  <linearGradient id="wb" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.18 60)" />
                    <stop offset="100%" stopColor="oklch(0.235 0.025 260)" />
                  </linearGradient>
                </defs>
                {/* stylized West Bengal silhouette */}
                <path
                  d="M90 15 L120 25 L125 45 L115 60 L130 75 L120 95 L135 110 L125 130 L140 145 L130 165 L110 180 L95 175 L85 160 L70 165 L60 145 L75 125 L65 105 L80 90 L70 70 L85 55 L75 35 Z"
                  fill="url(#wb)"
                  opacity="0.9"
                />
                {/* district pins */}
                {[
                  [95, 50], [110, 70], [85, 85], [120, 100], [95, 115],
                  [110, 135], [85, 145], [105, 160], [125, 50], [80, 60],
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="6" fill="oklch(0.745 0.175 55)" opacity="0.3">
                      <animate attributeName="r" values="6;14;6" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                      <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                    </circle>
                    <circle cx={cx} cy={cy} r="3" fill="oklch(0.745 0.175 55)" />
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-4xl px-4 py-20 text-center">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider">Our vision</p>
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">Bridging the Gap in Local Travel</h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Sonia Buddy was built with one goal: to empower the daily commuters of West Bengal. We understand the
          struggle of waiting at stands and the fear of missing a stop in an unfamiliar area. By combining advanced
          Geofencing technology with authentic local data, we are making the 23 districts of Bengal more accessible
          and travel-friendly for everyone.
        </p>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-3xl p-10 md:p-14" style={{ background: "var(--gradient-navy)" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { v: "23", l: "Districts Covered" },
              { v: "1000+", l: "Local Bus Routes" },
              { v: "100%", l: "Verified Tour Operators" },
              { v: "Real-Time", l: "Proximity Notifications" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-4xl md:text-5xl font-display font-bold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-accent)" }}>
                  {s.v}
                </div>
                <p className="mt-2 text-sm text-white/70">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 pb-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to travel smarter?</h2>
        <p className="mt-3 text-muted-foreground">Download Sonia Buddy and never miss your stop again.</p>
        <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="btn-primary mt-6 inline-flex">
          <Download className="h-4 w-4" /> Download on Play Store
        </a>
      </section>
    </PageShell>
  );
}
