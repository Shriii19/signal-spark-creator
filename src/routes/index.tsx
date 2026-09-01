import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SignalTerminal } from "@/components/site/Terminal";
import { Eyebrow, Heading, Panel, Section } from "@/components/site/Primitives";
import { FAQList } from "@/components/site/FAQList";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BotX Signals — Non-Repainting AI Indicators for Gold, Forex & Nifty" },
      {
        name: "description",
        content:
          "Candle-close, non-repainting TradingView, MT4 and MT5 indicators for XAUUSD, forex, crypto, Nifty 50 and BankNifty. Entry, stop loss and take profit on every signal.",
      },
      { property: "og:title", content: "BotX Signals — Clear Signals, Not Noise" },
      {
        property: "og:description",
        content:
          "AI-structured, non-repainting trading indicators for Gold, Forex, Crypto and Indian indices.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STATS = [
  ["99.8%", "Platform uptime"],
  ["10K+", "Active traders"],
  ["45+", "Markets covered"],
  ["24/7", "Telegram support"],
  ["847", "Signals per day"],
  ["0", "Repaints, ever"],
];

const STEPS = [
  ["Market scan", "Price action, candle structure and trend context read across multiple timeframes, 24/7 on 45+ instruments."],
  ["Signal creation", "The engine isolates high-probability BUY, SELL, STRONG BUY or STRONG SELL setups using deterministic logic."],
  ["Live validation", "Each setup is validated against live data and confirmed only on candle close. Never before."],
  ["Instant alert", "A clean alert lands with Entry, Stop Loss and Take Profit — plotted directly on your chart."],
  ["Execute", "We give structure and a plan. Position size and execution stay entirely in your hands."],
];

const COMPARE = [
  ["Delayed signals", "Candle-close confirmations"],
  ["Repainting history", "Permanent, verifiable prints"],
  ["Manual TP & SL planning", "Built-in TP & SL levels"],
  ["Chart clutter", "Clean single-layer overlay"],
  ["Guesswork on entries", "Structured entry logic"],
  ["Five tools stitched together", "One market-specific engine"],
];

const TRACK = [
  ["Win rate (backtested)", "72%", "Across 1,200+ trades", "up"],
  ["Avg. risk : reward", "1:2.4", "Structured TP logic", "up"],
  ["Best streak", "11W", "BankNifty weekly options", "up"],
  ["Max drawdown", "-8.4%", "Rolling 6-month window", "down"],
  ["Markets live", "45+", "Forex · Crypto · Indices", "up"],
  ["Daily signals", "847", "Average across suite", "up"],
];

const REVIEWS = [
  ["Arjun Mehta", "BankNifty", "The direction clarity is unreal. Entry, SL and target are on the chart before I click. No second-guessing at 9:20am."],
  ["Fatima Hassan", "Gold · UAE", "I trade XAUUSD exclusively. Entries are plotted cleanly, stops are realistic and targets hit with good frequency."],
  ["Deepak Nair", "Nifty & BankNifty", "The multi-timeframe logic separates this from every other tool. 15m for entry, 1h for direction — works beautifully."],
  ["Mohammed Al-Farsi", "Forex · Dubai", "Candle-close confirmation means I stopped chasing fake breakouts. That change alone paid for the license."],
  ["Priya Sharma", "Nifty 50", "Strong-buy prints on Nifty have been consistently accurate. The structure-based read finally makes sense to me."],
  ["Ravi Krishnan", "Weekly options", "The sell signals kept me out of more bad trades than the buys made me money. That's the real value."],
];

const PLATFORMS = ["TRADINGVIEW", "METATRADER 4", "METATRADER 5", "TELEGRAM", "USDT TRC20", "PINE SCRIPT V5"];

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />

      <main>
        {/* HERO */}
        <div className="relative overflow-hidden hero-glow">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 md:py-28 lg:grid-cols-2">
            <div className="animate-rise">
              <Eyebrow>AI-powered · Live XAUUSD · 47 licenses left</Eyebrow>
              <h1 className="mt-6 font-display text-5xl leading-[0.95] font-bold tracking-tighter md:text-7xl">
                Trade with
                <br />
                <span className="text-primary text-glow">clear signals</span>
                <br />
                not noise.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                Elite non-repainting indicators for TradingView, MT4 and MT5. Structured signals for
                Forex, Crypto, Gold (XAUUSD), Nifty 50 and BankNifty — driven by the same engine
                behind BotX automated systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/indicators"
                  className="rounded-md bg-primary px-6 py-3.5 font-mono text-[11px] font-bold tracking-[0.15em] text-primary-foreground uppercase transition-shadow hover:glow-ring"
                >
                  Browse indicators ↗
                </Link>
                <Link
                  to="/contact"
                  className="rounded-md border border-border bg-surface/70 px-6 py-3.5 font-mono text-[11px] font-bold tracking-[0.15em] uppercase transition-colors hover:border-primary/60"
                >
                  ✈ Talk to the desk
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.15em] text-primary uppercase">
                {["No repaint", "Candle-close", "Multi-timeframe"].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex gap-10 border-t border-border/70 pt-8">
                {[
                  ["99.8%", "Uptime"],
                  ["24/7", "Support"],
                  ["10K+", "Traders"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <p className="font-mono text-2xl font-bold text-primary">{v}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-rise lg:pl-6">
              <SignalTerminal />
            </div>
          </div>
        </div>

        {/* STAT STRIP */}
        <div className="border-y border-border/60 bg-surface/40">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border/60 md:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
            {STATS.map(([v, l], i) => (
              <div key={l} className="px-5 py-7">
                <p className="mono-label">0{i + 1} /</p>
                <p className="mt-2 font-mono text-2xl font-bold">{v}</p>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PLATFORM MARQUEE */}
        <div className="overflow-hidden border-b border-border/60 py-6">
          <div className="flex w-max animate-ticker-fast gap-12 pr-12">
            {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
              <span
                key={i}
                className="font-display text-lg font-bold tracking-[0.15em] text-muted-foreground/45"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* COMPARISON */}
        <Section>
          <Heading
            align="center"
            eyebrow="The edge"
            title={
              <>
                Beyond traditional <span className="text-primary text-glow">indicators.</span>
              </>
            }
            subtitle="Same charts, entirely different information. Here is what changes the moment you switch."
          />
          <Panel className="mt-12 overflow-hidden">
            <div className="grid grid-cols-2 divide-x divide-border/70 border-b border-border/70">
              <p className="px-6 py-4 text-center font-mono text-[11px] tracking-[0.18em] text-bear uppercase">
                Traditional indicators
              </p>
              <p className="px-6 py-4 text-center font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
                BotX engine
              </p>
            </div>
            {COMPARE.map(([a, b]) => (
              <div key={a} className="grid grid-cols-2 divide-x divide-border/70 border-b border-border/70 last:border-0">
                <p className="flex items-center gap-2.5 bg-bear/5 px-6 py-4 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-bear" />
                  {a}
                </p>
                <p className="flex items-center gap-2.5 bg-primary/5 px-6 py-4 text-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {b}
                </p>
              </div>
            ))}
          </Panel>
        </Section>

        {/* HOW IT WORKS */}
        <Section className="pt-0">
          <Heading
            eyebrow="How it works"
            title={
              <>
                From market noise to <span className="text-primary text-glow">structured signals.</span>
              </>
            }
            subtitle="Five deterministic steps. No black box, no guesswork, no hindsight edits."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {STEPS.map(([t, d], i) => (
              <Panel key={t} className="relative overflow-hidden p-6">
                <span className="font-mono text-4xl font-bold text-primary/20">0{i + 1}</span>
                <h3 className="mt-3 font-display text-base font-bold tracking-wide uppercase">{t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
                <div className="absolute inset-x-0 bottom-0 h-px hairline" />
              </Panel>
            ))}
          </div>
        </Section>

        {/* TRACK RECORD */}
        <Section className="pt-0">
          <Heading
            eyebrow="Track record"
            title={
              <>
                Data. <span className="text-primary text-glow">Not promises.</span>
              </>
            }
            subtitle="Past signal patterns do not indicate future market behaviour. Metrics are backtested — all trading carries risk."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TRACK.map(([l, v, s, dir]) => (
              <Panel key={l} className="p-6">
                <div className="flex items-center justify-between">
                  <p className="mono-label">{l}</p>
                  <span className={dir === "up" ? "text-bull" : "text-bear"}>
                    {dir === "up" ? "↗" : "↘"}
                  </span>
                </div>
                <p className="mt-3 font-mono text-4xl font-bold">{v}</p>
                <p className="mt-2 text-xs text-muted-foreground">{s}</p>
              </Panel>
            ))}
          </div>
        </Section>

        {/* PRICING TEASER */}
        <Section className="pt-0">
          <Panel className="relative overflow-hidden border-primary/35 p-10 glow-soft md:p-14">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <Eyebrow>Licensing</Eyebrow>
                <h2 className="mt-5 font-display text-3xl leading-tight font-bold md:text-4xl">
                  Two engines. Three terms.
                  <br />
                  <span className="text-primary text-glow">From ₹59 a month.</span>
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  Monthly, yearly or lifetime keys for the Gold & Forex and Nifty & BankNifty
                  engines. USDT and card accepted. All sales final — no trials, no refunds.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  to="/pricing"
                  className="rounded-md bg-primary py-3.5 text-center font-mono text-[11px] font-bold tracking-[0.15em] text-primary-foreground uppercase hover:glow-ring"
                >
                  See all plans →
                </Link>
                <Link
                  to="/indicators"
                  className="rounded-md border border-border bg-surface-2 py-3.5 text-center font-mono text-[11px] font-bold tracking-[0.15em] uppercase hover:border-primary/60"
                >
                  Compare engines
                </Link>
              </div>
            </div>
          </Panel>
        </Section>

        {/* REVIEWS */}
        <Section className="pt-0">
          <Heading
            eyebrow="Verified users"
            title={
              <>
                Traders. <span className="text-primary text-glow">Actually trading.</span>
              </>
            }
            subtitle="Real feedback from traders running BotX indicators across India and the Gulf."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map(([name, market, text]) => (
              <Panel key={name} className="flex flex-col p-6">
                <span className="font-mono text-sm text-gold">★★★★★</span>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">"{text}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border/70 pt-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-bold text-primary">
                    {name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="mono-label">{market}</p>
                  </div>
                </div>
              </Panel>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section className="pt-0">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Heading
              eyebrow="FAQ"
              title={
                <>
                  Questions, <span className="text-primary text-glow">answered.</span>
                </>
              }
              subtitle="Still unclear on something? The desk replies within 24 hours."
            />
            <FAQList />
          </div>
        </Section>

        {/* FINAL CTA */}
        <div className="border-t border-border/60 hero-glow">
          <div className="mx-auto max-w-3xl px-4 py-24 text-center">
            <Eyebrow>Start trading</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl">
              Stop guessing. Start trading with{" "}
              <span className="text-primary text-glow">structure.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Join 10,000+ traders using BotX indicators for Nifty, BankNifty, Gold and Forex.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/indicators"
                className="rounded-md bg-primary px-7 py-3.5 font-mono text-[11px] font-bold tracking-[0.15em] text-primary-foreground uppercase hover:glow-ring"
              >
                Browse indicators →
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-border bg-surface/70 px-7 py-3.5 font-mono text-[11px] font-bold tracking-[0.15em] uppercase hover:border-primary/60"
              >
                ✈ Join Telegram
              </Link>
            </div>
            <p className="mt-8 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              ⚠ No refunds · No free trials · All sales final
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
