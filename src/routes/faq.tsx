import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Heading, Section } from "@/components/site/Primitives";
import { FAQList } from "@/components/site/FAQList";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Licensing, Repainting & Platforms | BotX Signals" },
      {
        name: "description",
        content:
          "Answers on non-repainting logic, TradingView and MT4/MT5 support, license delivery, payment methods and refund policy for BotX Signals indicators.",
      },
      { property: "og:title", content: "BotX Signals FAQ" },
      {
        property: "og:description",
        content: "How BotX indicators work, what you get, and how licensing is delivered.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="hero-glow">
        <Section>
          <Heading
            eyebrow="FAQ"
            title={
              <>
                Questions, <span className="text-primary text-glow">answered clearly.</span>
              </>
            }
            subtitle="No fine print games. If something is still unclear, message the desk."
          />
          <div className="mt-12 max-w-3xl">
            <FAQList />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
