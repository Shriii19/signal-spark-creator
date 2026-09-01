import { useState } from "react";

const FAQS = [
  {
    q: "Do the signals repaint?",
    a: "No. Every signal is confirmed on candle close. Once a marker prints it stays on the chart permanently — no back-shifting, no history rewriting.",
  },
  {
    q: "Does it work on Nifty 50 and BankNifty?",
    a: "Yes. The India suite is purpose-built for Nifty 50 and BankNifty including weekly options, with multi-timeframe structure analysis on M5, M15, H1 and H4.",
  },
  {
    q: "Does it work on Gold (XAUUSD) and Forex?",
    a: "Yes. The global suite covers XAUUSD, all major and most minor forex pairs, plus indices such as NAS100 and US30.",
  },
  {
    q: "Which platform do I need?",
    a: "TradingView (free plan is enough for a single indicator) or MetaTrader 4 / MetaTrader 5. Alerts can be routed to Telegram, email or mobile push.",
  },
  {
    q: "How do I get access after payment?",
    a: "Send your TradingView username or MT account ID after checkout. Licenses are provisioned manually and typically activate within 30 minutes.",
  },
  {
    q: "What is the refund policy?",
    a: "All sales are final. Because licenses unlock digital access immediately, there are no refunds and no free trials. Read the specs before purchasing.",
  },
  {
    q: "Does it guarantee profits?",
    a: "No. Nothing in trading does. The indicator provides structured entries, stops and targets — risk management and execution remain your responsibility.",
  },
];

export function FAQList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border/70 overflow-hidden rounded-xl border border-border/70 bg-surface/50">
      {FAQS.map((f, i) => (
        <div key={f.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-surface-2/50"
          >
            <span className="font-display text-base font-semibold md:text-lg">{f.q}</span>
            <span className="font-mono text-lg text-primary">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <p className="animate-rise px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
