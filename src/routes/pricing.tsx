import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Heading, Panel, Section } from "@/components/site/Primitives";
import { FAQList } from "@/components/site/FAQList";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Licenses — Monthly, Yearly, Lifetime | BotX Signals" },
      {
        name: "description",
        content:
          "Transparent indicator licensing from ₹59/month. Yearly and lifetime keys for the Gold & Forex and Nifty & BankNifty engines. USDT and card accepted.",
      },
      { property: "og:title", content: "BotX Signals Pricing" },
      {
        property: "og:description",
        content: "Monthly, yearly and lifetime indicator licenses with instant Telegram support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

const PLANS = {
  monthly: [
    { name: "Gold & Forex", price: "₹59", per: "/mo", popular: false },
    { name: "Nifty & BankNifty", price: "₹69", per: "/mo", popular: true },
    { name: "Full Suite", price: "₹109", per: "/mo", popular: false },
  ],
  yearly: [
    { name: "Gold & Forex", price: "₹499", per: "/yr", popular: false },
    { name: "Nifty & BankNifty", price: "₹599", per: "/yr", popular: true },
    { name: "Full Suite", price: "₹949", per: "/yr", popular: false },
  ],
  lifetime: [
    { name: "Gold & Forex", price: "₹1,199", per: "one-time", popular: false },
    { name: "Nifty & BankNifty", price: "₹1,399", per: "one-time", popular: true },
    { name: "Full Suite", price: "₹2,299", per: "one-time", popular: false },
  ],
};

const INCLUDED = [
  "Non-repainting candle-close signals",
  "Entry, stop loss and take profit plotted",
  "TradingView + MT4/MT5 access",
  "Telegram alert routing",
  "Multi-timeframe confluence engine",
  "Free updates for the license period",
];

function PricingPage() {
  const [cycle, setCycle] = useState<keyof typeof PLANS>("yearly");
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="hero-glow">
        <Section>
          <Heading
            align="center"
            eyebrow="Licensing"
            title={
              <>
                One price. <span className="text-primary text-glow">Zero surprises.</span>
              </>
            }
            subtitle="Pick a market, pick a term. Licenses are provisioned manually and usually activate within 30 minutes."
          />

          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-lg border border-border/70 bg-surface/70 p-1">
              {(Object.keys(PLANS) as (keyof typeof PLANS)[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCycle(c)}
                  className={`rounded-md px-5 py-2 font-mono text-[11px] tracking-[0.15em] uppercase transition-colors ${
                    cycle === c
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PLANS[cycle].map((p) => (
              <Panel
                key={p.name}
                className={`flex flex-col p-7 ${p.popular ? "border-primary/50 glow-soft" : ""}`}
              >
                {p.popular && (
                  <span className="mb-4 w-fit rounded-full bg-primary/15 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-primary uppercase">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-5 flex items-end gap-1.5">
                  <span className="font-mono text-4xl font-bold">{p.price}</span>
                  <span className="mono-label pb-1.5">{p.per}</span>
                </p>
                <ul className="mt-7 flex-1 space-y-2.5">
                  {INCLUDED.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-0.5 font-mono text-primary">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 rounded-md py-3 text-center font-mono text-[11px] font-bold tracking-[0.15em] uppercase ${
                    p.popular
                      ? "bg-primary text-primary-foreground hover:glow-ring"
                      : "border border-border bg-surface-2 text-foreground hover:border-primary/50"
                  }`}
                >
                  Get license →
                </Link>
              </Panel>
            ))}
          </div>

          <p className="mt-8 text-center font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            ⚠ No refunds · No free trials · All sales final · USDT & card accepted
          </p>
        </Section>

        <Section className="pt-0">
          <Heading align="center" eyebrow="Before you buy" title="Common questions" />
          <div className="mx-auto mt-10 max-w-3xl">
            <FAQList />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
