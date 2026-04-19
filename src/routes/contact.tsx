import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Support — Sonia Buddy" },
      { name: "description", content: "Get in touch with the Sonia Buddy team for support, business inquiries, or account deletion requests." },
      { property: "og:title", content: "Contact Sonia Buddy Support" },
      { property: "og:description", content: "Email support, business inquiries, and account deletion." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Get in touch</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">Contact Sonia Buddy Support</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions about your journey or need help with the app? Our team is here to assist you.
          </p>
        </header>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, title: "Email Support", desc: "General queries & technical issues", value: "zisakhoofficial@gmail.com", href: "mailto:zisakhoofficial@gmail.com" },
              { icon: Send, title: "Business Inquiries", desc: "Partnerships & tour operators", value: "zisakhoofficial@gmail.com", href: "mailto:zisakhoofficial@gmail.com" },
              { icon: Clock, title: "Response Time", desc: "We typically reply within", value: "24–48 hours" },
              { icon: MapPin, title: "Office", desc: "Headquartered in", value: "West Bengal, India" },
            ].map((c) => (
              <div key={c.title} className="glass-card rounded-2xl p-5 flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--gradient-accent)" }}>
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                  {c.href ? (
                    <a href={c.href} className="text-sm font-medium text-accent break-all mt-1 inline-block">{c.value}</a>
                  ) : (
                    <p className="text-sm font-medium mt-1">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="glass-card rounded-3xl p-7 md:p-9"
            >
              {sent ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="h-14 w-14 text-accent mx-auto" />
                  <h3 className="mt-4 text-2xl font-bold">Message sent!</h3>
                  <p className="mt-2 text-muted-foreground">We'll get back to you within 24–48 hours.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold">Send us a message</h2>
                  <p className="text-sm text-muted-foreground mt-1">We'll reply by email.</p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <Field label="Your name" name="name" required />
                    <Field label="Email address" type="email" name="email" required />
                  </div>
                  <div className="mt-4">
                    <Field label="Subject" name="subject" required />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 text-sm"
                      placeholder="How can we help?"
                    />
                  </div>

                  <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                    <Send className="h-4 w-4" /> Send Message
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 text-sm"
      />
    </div>
  );
}
