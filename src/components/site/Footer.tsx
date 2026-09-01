import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
              Bx
            </span>
            <span className="font-display text-lg font-bold">
              BotX<span className="text-primary">Signals</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Non-repainting, candle-close indicators for TradingView, MT4 and MT5. Structured
            signals across Forex, Gold, Crypto, Nifty 50 and BankNifty.
          </p>
          <p className="mt-6 font-mono text-[11px] leading-relaxed tracking-wider text-muted-foreground/70 uppercase">
            Risk warning · Trading involves substantial risk. Backtested metrics do not indicate
            future results. No refunds, no free trials.
          </p>
        </div>
        <div>
          <p className="mono-label">Product</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/indicators" className="hover:text-primary">
                Indicator suite
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-primary">
                Pricing & licenses
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mono-label">Support</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact desk
              </Link>
            </li>
            <li>support@botxsignals.ae</li>
            <li>Telegram · 24/7</li>
            <li>UAE · India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
        © {new Date().getFullYear()} BotX Signals · All rights reserved
      </div>
    </footer>
  );
}
