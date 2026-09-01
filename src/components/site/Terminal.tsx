type Candle = { body: number; wick: number; up: boolean };
const CANDLES: Candle[] = [
  { body: 30, wick: 52, up: false },
  { body: 40, wick: 60, up: true },
  { body: 34, wick: 48, up: false },
  { body: 44, wick: 70, up: true },
  { body: 52, wick: 76, up: true },
  { body: 46, wick: 62, up: false },
  { body: 58, wick: 84, up: true },
  { body: 64, wick: 92, up: true },
  { body: 55, wick: 74, up: false },
  { body: 66, wick: 96, up: true },
  { body: 72, wick: 104, up: true },
  { body: 62, wick: 86, up: false },
  { body: 76, wick: 112, up: true },
  { body: 84, wick: 122, up: true },
  { body: 78, wick: 100, up: false },
  { body: 88, wick: 130, up: true },
];

export function SignalTerminal() {
  return (
    <div className="relative rounded-2xl border border-primary/30 bg-surface/80 p-1 glow-soft">
      <div className="rounded-xl border border-border/70 bg-background/80">
        <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
          <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-primary" />
            BotX Engine · Live
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">v3.4.1</span>
        </div>

        <div className="flex items-end justify-between px-5 pt-5">
          <div>
            <p className="mono-label">XAUUSD · Spot</p>
            <p className="mt-1 font-mono text-3xl font-bold tracking-tight md:text-4xl">
              $2,031.50
            </p>
          </div>
          <div className="text-right">
            <p className="mono-label">24H</p>
            <p className="font-mono text-sm text-bull">▲ 8.42 (0.42%)</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 divide-x divide-border/70 border-y border-border/70">
          {[
            ["Engine", "AI Active", "text-primary"],
            ["Signals", "847", ""],
            ["Uptime", "99.8%", ""],
          ].map(([l, v, c]) => (
            <div key={l} className="px-4 py-3">
              <p className="mono-label">{l}</p>
              <p className={`mt-1 font-mono text-sm ${c}`}>{v}</p>
            </div>
          ))}
        </div>

        <div className="px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="mono-label">Live signal · 15M</span>
            <span className="mono-label">Confidence</span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-bull">BUY</span>
              <span className="rounded bg-primary/15 px-2 py-0.5 font-mono text-[10px] tracking-widest text-primary uppercase">
                Strong
              </span>
            </span>
            <span className="font-mono text-xl font-bold">62%</span>
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-border/70 border-y border-border/70">
          {[
            ["Entry", "2031.50", ""],
            ["Stop loss", "2024.74", "text-bear"],
            ["Take profit", "2042.77", "text-bull"],
          ].map(([l, v, c]) => (
            <div key={l} className="px-4 py-3">
              <p className="mono-label">{l}</p>
              <p className={`mt-1 font-mono text-sm ${c}`}>{v}</p>
            </div>
          ))}
        </div>

        <div className="px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="mono-label">XAUUSD · 1M</span>
            <span className="font-mono text-[11px] text-primary">■ STREAMING</span>
          </div>
          <div className="mt-3 flex h-32 items-end gap-1.5">
            {CANDLES.map(({ body, wick, up }, i) => (
              <div key={i} className="relative flex flex-1 flex-col items-center justify-end">
                <div
                  className={`w-px ${up ? "bg-bull/50" : "bg-bear/50"}`}
                  style={{ height: `${wick - body}px` }}
                />
                <div
                  className={`w-full rounded-[2px] ${up ? "bg-bull" : "bg-bear"}`}
                  style={{ height: `${body / 2 + 8}px` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px]">
            <span className="rounded bg-bull/15 px-2 py-1 text-bull">TP 2,044</span>
            <span className="text-muted-foreground">MARKETS: 45+</span>
            <span className="rounded bg-bear/15 px-2 py-1 text-bear">SL 2,025</span>
          </div>
        </div>
      </div>
    </div>
  );
}
