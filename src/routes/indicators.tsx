import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Heading, Panel, Section } from "@/components/site/Primitives";

export const Route = createFileRoute("/indicators")({
  head: () => ({
    meta: [
      { title: "Indicator Suite — Gold, Forex, Nifty & BankNifty | BotX Signals" },
      {
        name: "description",
        content:
          "Two focused indicator packs: Gold & Forex for XAUUSD and majors, Nifty & BankNifty for Indian index and weekly options. Candle-close, non-repainting logic.",
      },
      { property: "og:title", content: "BotX Indicator Suite" },
      {
        property: "og:description",
        content: "Market-specific, non-repainting indicators for TradingView, MT4 and MT5.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndicatorsPage,
});

const PACKS = [
  {
    tag: "Global market",
    left: "23 licenses left",
    name: "Gold & Forex Engine",
    sub: "XAUUSD · Major pairs · Indices",
    desc: "Built for fast-moving metals and FX. Session-aware structure mapping, liquidity sweep detection and candle-close confirmation on every print.",
    features: [
      "XAUUSD tuned volatility filter",
      "London / New York session logic",
      "Auto TP1 / TP2 & trailing stop levels",
      "M5 · M15 · H1 · H4 · D1 timeframes",
    ],
    price: "₹1,199",
  },
  {
    tag: "India market",
    left: "18 licenses left",
    name: "Nifty & BankNifty Engine",
    sub: "Nifty 50 · BankNifty · Weekly options",
    desc: "Index-specific structure reading for Indian markets, including expiry-day behaviour and weekly option bias with strict candle-close validation.",
    features: [
      "Expiry-day volatility handling",
      "Weekly options directional bias",
      "Opening-range breakout filter",
      "Multi-timeframe trend confluence",
    ],
    price: "₹1,399",
  },
];

function IndicatorsPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="hero-glow">
        <Section>
          <Heading
            eyebrow="Indicator suite"
            title={
              <>
                Choose your market. <span className="text-primary text-glow">Trade with precision.</span>
              </>
            }
            subtitle="Focused tools for specific instruments — no bloated all-in-one dashboard, just structured clarity where you actually trade."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {PACKS.map((p) => (
              <Panel key={p.name} className="flex flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-primary/30 bg-primary/8 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-primary uppercase">
                    {p.tag}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-bear uppercase">
                    {p.left}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">{p.name}</h3>
                <p className="mono-label mt-1">{p.sub}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-end justify-between border-t border-border/70 pt-6">
                  <div>
                    <p className="mono-label">Lifetime from</p>
                    <p className="font-mono text-2xl font-bold">{p.price}</p>
                  </div>
                  <Link
                    to="/pricing"
                    className="rounded-md bg-primary px-5 py-2.5 font-mono text-[11px] font-bold tracking-[0.15em] text-primary-foreground uppercase hover:glow-ring"
                  >
                    View plans →
                  </Link>
                </div>
              </Panel>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Non-repaint verified", "Candle-close only"],
              ["TradingView published", "Pine Script v5"],
              ["Multi-timeframe", "M5 · M15 · H1 · H4 · D1"],
              ["USDT accepted", "TRC20 · ERC20"],
              ["256-bit SSL", "Encrypted checkout"],
              ["24/7 support", "< 30 min response"],
            ].map(([t, s]) => (
              <div
                key={t}
                className="rounded-lg border border-border/70 bg-surface/50 px-4 py-3.5"
              >
                <p className="font-mono text-[11px] tracking-[0.15em] text-primary uppercase">{t}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
