import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const TICKER = [
  { s: "XAU/USD", p: "2,031.50", c: "+0.42%" },
  { s: "BANKNIFTY", p: "48,204", c: "-0.18%" },
  { s: "NIFTY50", p: "21,845", c: "+0.31%" },
  { s: "BTC/USD", p: "64,120", c: "+1.24%" },
  { s: "EUR/USD", p: "1.0842", c: "-0.09%" },
  { s: "NAS100", p: "17,980", c: "+0.66%" },
  { s: "ETH/USD", p: "3,412", c: "+0.88%" },
  { s: "GBP/USD", p: "1.2673", c: "-0.12%" },
];

const NAV = [
  { to: "/", label: "Home" },
  { to: "/indicators", label: "Indicators" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

function useCountdown(hours = 43) {
  const [left, setLeft] = useState(hours * 3600);
  useEffect(() => {
    const t = setInterval(() => setLeft((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const d = Math.floor(left / 86400);
  const h = Math.floor((left % 86400) / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;
  return [d, h, m, s].map((n) => String(n).padStart(2, "0"));
}

export function Ticker() {
  const row = [...TICKER, ...TICKER];
  return (
    <div className="overflow-hidden border-b border-border/60 bg-surface/60 py-2">
      <div className="flex w-max animate-ticker gap-8 pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-2 font-mono text-[11px] tracking-widest">
            <span className="text-muted-foreground">{t.s}</span>
            <span className="text-foreground">{t.p}</span>
            <span className={t.c.startsWith("+") ? "text-bull" : "text-bear"}>{t.c}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function PromoBar() {
  const [d, h, m, s] = useCountdown();
  return (
    <div className="bg-primary/12 border-b border-primary/25">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2 text-center">
        <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
          Launch offer · 25% off lifetime licenses
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          {[
            [d, "D"],
            [h, "H"],
            [m, "M"],
            [s, "S"],
          ].map(([v, l]) => (
            <span key={l} className="rounded bg-surface-2 px-1.5 py-0.5 text-foreground">
              {v}
              <span className="text-muted-foreground">{l}</span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <PromoBar />
      <Ticker />
      <div className="border-b border-border/60 bg-background/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
              Bx
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              BotX<span className="text-primary">Signals</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "text-primary bg-primary/10" }}
                className="rounded-md px-3 py-2 font-mono text-[11px] tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-2 font-mono text-[11px] text-muted-foreground lg:flex">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-primary" />
              291 VIEWING
            </span>
            <Link
              to="/pricing"
              className="rounded-md bg-primary px-4 py-2 font-mono text-[11px] font-bold tracking-[0.15em] text-primary-foreground uppercase transition-shadow hover:glow-ring"
            >
              Get Access
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="rounded-md border border-border px-3 py-2 font-mono text-[11px] md:hidden"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {open && (
          <nav className="flex flex-col border-t border-border/60 px-4 py-2 md:hidden">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
