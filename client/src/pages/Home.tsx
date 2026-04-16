/*
 * DESIGN PHILOSOPHY: Soft Botanical Editorial
 * Sections: Nav → Hero (asymmetric) → Marquee → Features → How It Works → CTA Band → Footer
 * Colors: sage bg, forest green text/UI, white cards
 * Fonts: Playfair Display (display), Cormorant Garamond Italic (script), Lora (body), DM Sans (labels)
 */

import { useEffect, useRef, useState } from "react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663351570812/KbcYMkac7PodLc322qvUic/cover-photo_bcd733d4.png";
const LIFESTYLE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663351570812/KbcYMkac7PodLc322qvUic/coffee-shop-lifestyle-7PuBeJw6MsARi4NpBbACWG.webp";
const JOURNAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663351570812/KbcYMkac7PodLc322qvUic/lifestyle-photo_54501c12.png";

// Iced coffee cup SVG illustration (from product cover style)
function CoffeeCupIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Straw */}
      <rect x="68" y="4" width="5" height="60" rx="2.5" fill="#3a5c35" opacity="0.7" transform="rotate(-8 68 4)" />
      {/* Lid */}
      <path d="M20 44 Q60 36 100 44 L98 52 Q60 44 22 52 Z" fill="#3a5c35" opacity="0.6" />
      <rect x="22" y="50" width="76" height="6" rx="3" fill="#3a5c35" opacity="0.5" />
      {/* Cup body */}
      <path d="M24 56 L30 148 Q60 154 90 148 L96 56 Z" fill="#3a5c35" opacity="0.12" />
      <path d="M24 56 L30 148 Q60 154 90 148 L96 56 Z" stroke="#3a5c35" strokeWidth="2.5" fill="none" opacity="0.7" />
      {/* Ice cubes */}
      <rect x="38" y="100" width="22" height="22" rx="4" stroke="#3a5c35" strokeWidth="2" fill="none" opacity="0.6" />
      <rect x="60" y="108" width="20" height="20" rx="4" stroke="#3a5c35" strokeWidth="2" fill="none" opacity="0.6" />
      <rect x="44" y="122" width="18" height="18" rx="4" stroke="#3a5c35" strokeWidth="2" fill="none" opacity="0.5" />
      {/* Shine */}
      <path d="M36 70 Q40 80 38 95" stroke="#3a5c35" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

// Scroll-triggered fade-up hook
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useFadeUp();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const MARQUEE_TEXT = "sunday sips & yap";
const MARQUEE_ITEMS = Array(16).fill(MARQUEE_TEXT);

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#eef1ec" }}>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 w-full" style={{ background: "#eef1ec", borderBottom: "1px solid #c8d4c4" }}>
        <div className="container flex items-center justify-between py-4">
          <div className="flex flex-col leading-none">
            <span className="font-label text-xs tracking-widest uppercase" style={{ color: "#5a7a54", letterSpacing: "0.18em" }}>girl journal</span>
            <span className="font-display font-bold text-lg" style={{ color: "#2d4a28", lineHeight: 1.1 }}>Sunday Sips</span>
          </div>
          <a
            href="#buy"
            className="font-label text-sm font-medium px-5 py-2 rounded-full transition-all duration-200"
            style={{
              background: "#3a5c35",
              color: "#ffffff",
              letterSpacing: "0.04em",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#4f7848")}
            onMouseLeave={e => (e.currentTarget.style.background = "#3a5c35")}
          >
            Buy Now
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: Typography block */}
          <div className="flex flex-col gap-6">
            <div
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease 0.05s, transform 0.7s ease 0.05s",
              }}
            >
              <span className="font-label text-xs tracking-widest uppercase" style={{ color: "#5a7a54", letterSpacing: "0.2em" }}>
                by girl journal
              </span>
            </div>

            <div
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.18s, transform 0.7s ease 0.18s",
              }}
            >
              <h1 className="font-display font-bold leading-none" style={{ color: "#2d4a28", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
                SUNDAY<br />SIPS
              </h1>
              <p className="font-script" style={{ color: "#3a5c35", fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.1, marginTop: "-0.1em" }}>
                & yap
              </p>
            </div>

            <div
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.32s, transform 0.7s ease 0.32s",
              }}
            >
              <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: "#3a5c35", maxWidth: "38ch" }}>
                A passport-style coffee shop guide for you and your bestie. Visit 10 of the cutest spots in Orange County, rate your experience, and journal together.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.46s, transform 0.7s ease 0.46s",
              }}
            >
              <a
                id="buy"
                href="#buy-section"
                className="font-label font-medium px-8 py-3.5 rounded-full transition-all duration-200 text-base"
                style={{ background: "#3a5c35", color: "#ffffff", letterSpacing: "0.04em" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#4f7848"; e.currentTarget.style.transform = "scale(1.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#3a5c35"; e.currentTarget.style.transform = "scale(1)"; }}
              >
                Buy Now
              </a>
              <div className="flex flex-col">
                <span className="font-label text-xs" style={{ color: "#5a7a54", letterSpacing: "0.05em" }}>
                  <span style={{ textDecoration: "line-through", opacity: 0.6 }}>Regular price</span>
                </span>
                <span className="font-label font-medium text-sm" style={{ color: "#2d4a28" }}>
                  10% off — limited time
                </span>
              </div>
            </div>
          </div>

          {/* Right: Product image */}
          <div
            className="relative flex justify-center md:justify-end"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
            }}
          >
            <div className="relative" style={{ maxWidth: 380 }}>
              <img
                src={HERO_IMG}
                alt="Sunday Sips & Yap journal with iced coffee"
                className="w-full rounded-2xl shadow-2xl"
                style={{ objectFit: "cover", aspectRatio: "3/4" }}
              />
              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 md:-right-8 flex flex-col items-center justify-center rounded-full shadow-lg"
                style={{
                  background: "#3a5c35",
                  color: "#fff",
                  width: 80,
                  height: 80,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <span style={{ fontSize: 11, letterSpacing: "0.08em", opacity: 0.85 }}>SAVE</span>
                <span style={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}>10%</span>
                <span style={{ fontSize: 9, letterSpacing: "0.06em", opacity: 0.8 }}>OFF</span>
              </div>
              {/* Decorative coffee cup */}
              <CoffeeCupIllustration className="absolute -bottom-6 -left-8 w-20 opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        className="w-full overflow-hidden py-4"
        style={{ background: "#3a5c35", borderTop: "1px solid #2d4a28", borderBottom: "1px solid #2d4a28" }}
      >
        <div className="marquee-track">
          {MARQUEE_ITEMS.map((text, i) => (
            <span key={i} className="flex items-center shrink-0 px-6">
              <span
                className="font-display font-bold"
                style={{ color: "#eef1ec", fontSize: "1.1rem", letterSpacing: "0.02em" }}
              >
                {i % 2 === 0 ? <><em style={{ fontStyle: "italic" }}>sunday</em> sips &amp; yap</> : <><em style={{ fontStyle: "italic" }}>sunday</em> sips &amp; yap</>}
              </span>
              <span className="mx-4" style={{ color: "#eef1ec", opacity: 0.4, fontSize: "0.5rem" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── WHAT'S INSIDE ── */}
      <section className="container py-20 md:py-28">
        <FadeSection className="mb-14">
          <p className="font-label text-xs tracking-widest uppercase mb-2" style={{ color: "#5a7a54", letterSpacing: "0.2em" }}>what's inside</p>
          <h2 className="font-display font-bold" style={{ color: "#2d4a28", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            More than a guide.
            <br />
            <span className="font-script font-normal" style={{ color: "#3a5c35", fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)" }}>
              it's a memory you keep.
            </span>
          </h2>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "☕",
              title: "10 Coffee Shops",
              body: "Curated guide to 10 of the cutest independent coffee spots in Orange County, each with its own dedicated spread.",
            },
            {
              icon: "⭐",
              title: "Rate & Review",
              body: "Score the vibes, taste, service, and more. Circle what applies, write your notes, and keep a record of every visit.",
            },
            {
              icon: "💬",
              title: "3 Journal Prompts",
              body: "Each spot includes prompts that spark real conversation, the kind that brings you and your bestie closer.",
            },
          ].map((card, i) => (
            <FadeSection key={i} delay={i * 120}>
              <div
                className="rounded-2xl p-8 h-full flex flex-col gap-4 transition-all duration-300"
                style={{ background: "#ffffff", border: "1px solid #d4ddd0" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(58,92,53,0.12)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
              >
                <span style={{ fontSize: "2rem" }}>{card.icon}</span>
                <h3 className="font-display font-bold text-xl" style={{ color: "#2d4a28" }}>{card.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#5a7a54" }}>{card.body}</p>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── LIFESTYLE IMAGE ── */}
      <section className="container pb-20">
        <FadeSection>
          <div className="rounded-3xl overflow-hidden" style={{ maxHeight: 480 }}>
            <img
              src={LIFESTYLE_IMG}
              alt="Two friends journaling together at a coffee shop"
              className="w-full object-cover"
              style={{ height: 480 }}
            />
          </div>
        </FadeSection>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 md:py-28" style={{ background: "#ffffff" }}>
        <div className="container">
          <FadeSection className="mb-14">
            <p className="font-label text-xs tracking-widest uppercase mb-2" style={{ color: "#5a7a54", letterSpacing: "0.2em" }}>how it works</p>
            <h2 className="font-display font-bold" style={{ color: "#2d4a28", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Your Sunday ritual,
              <br />
              <span className="font-script font-normal" style={{ color: "#3a5c35", fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)" }}>
                beautifully documented.
              </span>
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              {[
                { num: "01", title: "Pick a spot", body: "Choose one of the 10 featured OC coffee shops and head there with your bestie." },
                { num: "02", title: "Sip & rate", body: "Order your drinks, soak in the vibes, and fill in your ratings, taste, service, ambiance, and more." },
                { num: "03", title: "Yap together", body: "Work through the 3 journal prompts. Go deep, go funny, go wherever the conversation takes you." },
                { num: "04", title: "Keep the memory", body: "Write it all down and keep your passport as a keepsake of every spot you've explored together." },
              ].map((step, i) => (
                <FadeSection key={i} delay={i * 100} className="flex gap-5 items-start">
                  <span
                    className="font-display font-bold shrink-0"
                    style={{ color: "#d4ddd0", fontSize: "2.5rem", lineHeight: 1, minWidth: 56 }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1" style={{ color: "#2d4a28" }}>{step.title}</h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: "#5a7a54" }}>{step.body}</p>
                  </div>
                </FadeSection>
              ))}
            </div>

            <FadeSection delay={200}>
              <img
                src={JOURNAL_IMG}
                alt="Sunday Sips journal detail with rating page"
                className="w-full rounded-2xl shadow-xl"
                style={{ objectFit: "cover", aspectRatio: "4/3" }}
              />
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── GIFT CALLOUT ── */}
      <section className="container py-20">
        <FadeSection>
          <div
            className="rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-8"
            style={{ background: "#d4ddd0" }}
          >
            <div className="flex-1">
              <p className="font-label text-xs tracking-widest uppercase mb-3" style={{ color: "#5a7a54", letterSpacing: "0.2em" }}>the perfect gift</p>
              <h2 className="font-display font-bold mb-4" style={{ color: "#2d4a28", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
                One for you,<br />
                <span className="font-script font-normal" style={{ color: "#3a5c35", fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}>
                  one for your person.
                </span>
              </h2>
              <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "#3a5c35", maxWidth: "40ch" }}>
                Grab one for yourself and use it with different girlfriends at different spots, or each get your own and document every visit together. Either way, it's the cutest gift.
              </p>
              <a
                href="#buy-section"
                className="inline-block font-label font-medium px-8 py-3.5 rounded-full transition-all duration-200 text-base"
                style={{ background: "#3a5c35", color: "#ffffff", letterSpacing: "0.04em" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#4f7848"; e.currentTarget.style.transform = "scale(1.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#3a5c35"; e.currentTarget.style.transform = "scale(1)"; }}
              >
                Buy Now
              </a>
            </div>
            <CoffeeCupIllustration className="w-32 md:w-48 opacity-50 shrink-0" />
          </div>
        </FadeSection>
      </section>

      {/* ── CTA BAND ── */}
      <section id="buy-section" className="py-24 md:py-32" style={{ background: "#3a5c35" }}>
        <div className="container flex flex-col items-center text-center gap-6">
          <FadeSection>
            <p className="font-label text-xs tracking-widest uppercase mb-2" style={{ color: "#a8c4a2", letterSpacing: "0.2em" }}>limited time offer</p>
            <h2 className="font-display font-bold mb-2" style={{ color: "#ffffff", fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
              10% Off Right Now
            </h2>
            <p className="font-script" style={{ color: "#c8ddc4", fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
              don't wait on this one.
            </p>
          </FadeSection>
          <FadeSection delay={150}>
            <p className="font-body text-base leading-relaxed" style={{ color: "#c8ddc4", maxWidth: "44ch" }}>
              Sunday Sips &amp; Yap is the cutest way to explore Orange County with your bestie and make memories worth keeping.
            </p>
          </FadeSection>
          <FadeSection delay={280}>
            <a
              href="https://girljournal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label font-medium px-10 py-4 rounded-full transition-all duration-200 text-lg mt-2"
              style={{ background: "#ffffff", color: "#2d4a28", letterSpacing: "0.04em" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#eef1ec"; e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.18)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Buy Now
            </a>
          </FadeSection>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8" style={{ background: "#2d4a28" }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col items-center sm:items-start">
            <span className="font-label text-xs tracking-widest uppercase" style={{ color: "#a8c4a2", letterSpacing: "0.18em" }}>girl journal</span>
            <span className="font-display font-bold text-base" style={{ color: "#eef1ec" }}>Sunday Sips <span className="font-script font-normal">& yap</span></span>
          </div>
          <p className="font-label text-xs" style={{ color: "#a8c4a2" }}>
            © {new Date().getFullYear()} girl journal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
