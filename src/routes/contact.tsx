import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Heading, Panel, Section } from "@/components/site/Primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact the BotX Signals Desk — Telegram, Email, WhatsApp" },
      {
        name: "description",
        content:
          "Questions about indicators, licensing or chart access? Reach the BotX Signals desk on Telegram, WhatsApp or email — responses within 24 hours.",
      },
      { property: "og:title", content: "Contact BotX Signals" },
      {
        property: "og:description",
        content: "Talk to a BotX specialist about indicators, licensing and access.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const CHANNELS = [
  ["Telegram", "@botxsignals"],
  ["WhatsApp", "+971 · chat support"],
  ["Email", "support@botxsignals.ae"],
  ["Region", "UAE · India"],
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="hero-glow">
        <Section>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Heading
                eyebrow="Contact"
                title={
                  <>
                    Talk to a <span className="text-primary text-glow">BotX specialist.</span>
                  </>
                }
                subtitle="Questions about indicators, licensing or chart access? Send a message — we respond within 24 hours, usually much faster."
              />
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {CHANNELS.map(([l, v]) => (
                  <div key={l} className="rounded-lg border border-border/70 bg-surface/50 p-4">
                    <p className="mono-label">{l}</p>
                    <p className="mt-1 font-mono text-sm">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            <Panel className="p-7">
              <h3 className="font-display text-xl font-bold">Send a message</h3>
              <p className="mt-1 text-sm text-muted-foreground">Quick and direct. No spam, ever.</p>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                {[
                  { id: "name", label: "Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="mono-label">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      required
                      className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary/60"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="market" className="mono-label">
                    Market
                  </label>
                  <select
                    id="market"
                    className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary/60"
                  >
                    <option>Nifty & BankNifty</option>
                    <option>Gold & Forex</option>
                    <option>Both</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="msg" className="mono-label">
                    Message
                  </label>
                  <textarea
                    id="msg"
                    rows={4}
                    required
                    className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary/60"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary py-3 font-mono text-[11px] font-bold tracking-[0.15em] text-primary-foreground uppercase hover:glow-ring"
                >
                  {sent ? "Message received ✓" : "Send message →"}
                </button>
                {sent && (
                  <p className="text-center text-xs text-primary">
                    Thanks — the desk will reply within 24 hours.
                  </p>
                )}
              </form>
            </Panel>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
