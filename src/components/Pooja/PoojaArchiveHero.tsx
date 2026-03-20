"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const heroStyles = `

  /* ── Spring-like easing curves (matches Framer's spring feel) ── */
  :root {
    --spring:          cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --ease-out-expo:   cubic-bezier(0.16, 1, 0.3, 1);
    --ease-out-quart:  cubic-bezier(0.25, 1, 0.5, 1);
  }

  /* ── Entrance keyframes ── */
  @keyframes heroFadeUp {
    0%   { opacity: 0; transform: translateY(36px) scale(0.97); filter: blur(4px); }
    60%  { filter: blur(0px); }
    100% { opacity: 1; transform: translateY(0px)  scale(1);    filter: blur(0px); }
  }

  @keyframes heroBadge {
    0%   { opacity: 0; transform: translateY(12px) scale(0.88); }
    100% { opacity: 1; transform: translateY(0px)  scale(1);    }
  }

  @keyframes heroButtons {
    0%   { opacity: 0; transform: translateY(22px); }
    100% { opacity: 1; transform: translateY(0px);  }
  }

  /* ── FloatingImage: dramatic flip-in from back ── */
  @keyframes flipInCard {
    0%   { opacity: 0; transform: perspective(900px) rotateY(180deg) scale(0.85); }
    55%  { opacity: 1; }
    100% { opacity: 1; transform: perspective(900px) rotateY(0deg)   scale(1);    }
  }

  /* ── Idle float after flip completes ── */
  @keyframes idleFloat {
    0%, 100% { transform: translateY(0px);  }
    50%       { transform: translateY(-7px); }
  }

  /* ── Base hidden state ── */
  .hero-anim       { opacity: 0; will-change: transform, opacity; }
  .flip-card-inner { opacity: 0; will-change: transform, opacity; transform-style: preserve-3d; }

  /* ── Center content: triggered ── */
  .hero-badge.is-visible {
    animation: heroBadge   0.7s var(--spring)         forwards;
    animation-delay: 0ms;
  }
  .hero-title.is-visible {
    animation: heroFadeUp  0.95s var(--ease-out-expo) forwards;
    animation-delay: 180ms;
  }
  .hero-body.is-visible {
    animation: heroFadeUp  0.95s var(--ease-out-expo) forwards;
    animation-delay: 340ms;
  }
  .hero-cta.is-visible {
    animation: heroButtons 0.85s var(--ease-out-quart) forwards;
    animation-delay: 500ms;
  }

  /* ── FloatingImage: flip-in + idle float chained ── */
  .flip-card-inner.is-visible {
    animation:
      flipInCard  0.85s var(--ease-out-expo) var(--flip-delay, 0ms)                        forwards,
      idleFloat   3.8s  ease-in-out          calc(var(--flip-delay, 0ms) + 860ms)           infinite;
  }

  /* ── Hover: flip to back (overrides idle) ── */
  .flip-card:hover .flip-card-inner.is-visible {
    animation: none;
    transform: perspective(900px) rotateY(180deg);
    transition: transform 0.75s var(--spring);
    opacity: 1;
  }

  /* ── CTA buttons ── */
  .btn-primary {
    position: relative;
    overflow: hidden;
    transition: transform 0.35s var(--spring), box-shadow 0.3s ease;
  }
  .btn-primary:hover {
    transform: scale(1.06) translateY(-2px);
    box-shadow: 0 22px 55px rgba(185,19,114,0.5);
  }
  .btn-primary::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: rgba(255,255,255,0.14);
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  .btn-primary:hover::after { opacity: 1; }

  .btn-outline {
    transition: background 0.3s ease, color 0.3s ease, transform 0.35s var(--spring);
  }
  .btn-outline:hover { transform: scale(1.04) translateY(-2px); }

  /* ── Respect reduced motion ── */
  @media (prefers-reduced-motion: reduce) {
    .hero-anim, .flip-card-inner { opacity: 1 !important; will-change: auto !important; }
    .hero-badge.is-visible,
    .hero-title.is-visible,
    .hero-body.is-visible,
    .hero-cta.is-visible,
    .flip-card-inner.is-visible { animation: none !important; }
    .btn-primary:hover,
    .btn-outline:hover          { transform: none !important; }
  }
`;

export default function TourHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.addEventListener(
              "animationend",
              () => { (entry.target as HTMLElement).style.willChange = "auto"; },
              { once: true }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    const root = sectionRef.current;
    if (!root) return;
    root.querySelectorAll(".hero-anim, .flip-card-inner").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{heroStyles}</style>

      <section
        ref={sectionRef}
        className="relative w-full min-h-[88vh] flex items-center justify-center overflow-hidden"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#b91372] via-[#e52e71] to-[#ff6a88]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, #ff4db2, transparent 45%), radial-gradient(circle at 80% 30%, #ff2e93, transparent 45%)",
          }}
        />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 140" className="w-full h-28" preserveAspectRatio="none">
            <path d="M0,60 C300,140 600,0 900,60 C1150,110 1350,30 1440,80 L1440,140 L0,140 Z" fill="#ffffff" opacity="0.9" />
            <path d="M0,80 C300,160 600,20 900,80 C1150,130 1350,50 1440,100 L1440,140 L0,140 Z" fill="#fdf2f8" opacity="0.6" />
          </svg>
        </div>

        {/* ── Left columns ── */}
        <div
          className="hidden lg:block absolute -left-8 top-32 space-y-8"
          style={{ maskImage: "linear-gradient(to right, transparent, black 40%)" }}
        >
          <FloatingImage src="/images/tourpackages/hero1.webp"  extraClass="opacity-40 scale-90" delay={60}  />
          <FloatingImage src="/images/tourpackages/hero2.webp"  extraClass="opacity-70"           delay={160} />
          <FloatingImage src="/images/tourpackages/hero6.webp"  extraClass="opacity-90"           delay={260} />
        </div>
        <div className="hidden lg:block absolute left-18 top-52 space-y-8">
          <FloatingImage src="/images/tourpackages/hero9.webp"  extraClass="opacity-70" delay={130} />
          <FloatingImage src="/images/tourpackages/hero10.webp" extraClass="opacity-80" delay={230} />
        </div>
        <div className="hidden lg:block absolute left-44 top-68 space-y-8">
          <FloatingImage src="/images/tourpackages/hero8.webp" extraClass="opacity-90" delay={210} />
        </div>

        {/* ── Right columns ── */}
        <div
          className="hidden lg:block absolute -right-8 top-32 space-y-8"
          style={{ maskImage: "linear-gradient(to left, transparent, black 40%)" }}
        >
          <FloatingImage src="/images/tourpackages/hero5.webp" extraClass="opacity-40 scale-90" delay={60}  />
          <FloatingImage src="/images/tourpackages/hero1.webp" extraClass="opacity-70"           delay={160} />
          <FloatingImage src="/images/tourpackages/hero2.webp" extraClass="opacity-90"           delay={260} />
        </div>
        <div className="hidden lg:block absolute right-18 top-52 space-y-8">
          <FloatingImage src="/images/tourpackages/hero7.webp" extraClass="opacity-70" delay={130} />
          <FloatingImage src="/images/tourpackages/hero6.webp" extraClass="opacity-80" delay={230} />
        </div>
        <div className="hidden lg:block absolute right-44 top-68 space-y-8">
          <FloatingImage src="/images/tourpackages/hero4.webp" extraClass="opacity-90" delay={210} />
        </div>

        {/* ── Center content ── */}
        <div className="relative z-20 text-center text-white px-6 max-w-5xl">

          <div className="hero-anim hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-md text-sm mb-6">
            ✨ Mathura Vrindavan Tour Packages
          </div>

          <h1 className="hero-anim hero-title text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
            Discover the Divine Land of{" "}
            <span className="block text-pink-200 italic font-medium">Krishna</span>
          </h1>

          <p className="hero-anim hero-body mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Explore sacred temples, vibrant festivals, and spiritual experiences
            in Mathura &amp; Vrindavan with our curated tour packages.
          </p>

          <div className="hero-anim hero-cta mt-10 flex justify-center gap-6 flex-wrap">
            <Link href="#tours">
              <button className="btn-primary px-10 py-4 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white font-semibold shadow-xl cursor-pointer">
                Explore Packages
              </button>
            </Link>
            <Link href="/tour-packages">
              <button className="btn-outline px-10 py-4 rounded-full border border-white/70 text-white font-semibold hover:bg-white hover:text-black cursor-pointer">
                View All Tours
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

function FloatingImage({
  src,
  extraClass,
  delay,
}: {
  src: string;
  extraClass?: string;
  delay: number;
}) {
  return (
    <div className={`flip-card w-24 h-24 rounded-2xl ${extraClass ?? ""}`}>
      <div
        className="flip-card-inner relative w-full h-full rounded-2xl overflow-hidden"
        style={{ "--flip-delay": `${delay}ms` } as React.CSSProperties}
      >
        <Image
          src={src}
          alt="Tour Preview"
          fill
          quality={80}
          sizes="96px"
          className="object-cover rounded-2xl"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 pointer-events-none" />
      </div>
    </div>
  );
}