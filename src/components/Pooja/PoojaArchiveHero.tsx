"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";
import QuickEnquiry from "@/utils/QuickQuery";
import StatsStrip from "./StatsStrip";


import { Flame, Users, Star } from "lucide-react";

const STATS = [
  {
    icon: Flame,
    value: "50+",
    label: "Pooja Types",
  },
  {
    icon: Users,
    value: "10k+",
    label: "Devotees Served",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Rating",
  },
];

export default function PoojaHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".ph-anim").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={ref}
        className="relative w-full min-h-[85vh] flex items-center overflow-hidden py-10 sm:py-3"
        style={{
          background:
            "linear-gradient(135deg, #c94a00 0%, #e86d00 30%, #f9a825 70%, #ffd54f 100%)",
        }}
      >
        {/* Blob accents */}
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />
        <div
          className="absolute bottom-[-60px] left-[35%] w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "rgba(180,60,0,0.15)" }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Bottom curvy wave */}
        <div className="absolute bottom-[-2px] left-0 w-full pointer-events-none">
          <svg
            viewBox="0 0 1440 80"
            className="w-full h-16 md:h-20"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Inner layout */}
        <div className="relative  w-full max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-14 pb-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* ── LEFT: All content ── */}
          <div className="flex-1 min-w-0 flex flex-col items-start py-12">
            {/* Diya row */}
            {/* <div className="ph-anim ph-d1 flex gap-2 mb-4 text-xl">
              <span>🪔</span>
              <span>🌸</span>
              <span>🪔</span>
            </div> */}

            {/* Badge */}
            <div
              className="ph-anim ph-d2 inline-flex items-center px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-5"
              style={{
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.42)",
              }}
            >
              Authentic Vedic Pooja Packages
            </div>

            {/* Title */}
            <h1
              className="ph-anim ph-d3 text-white font-black leading-[1.08] tracking-tight drop-shadow-sm mb-2"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 3.3rem)" }}
            >
              Book Sacred{" "}
              <em className="italic" style={{ opacity: 0.9 }}>
                Poojas
              </em>
            </h1>
            <p
              className="ph-anim ph-d3 font-normal tracking-widest mb-4"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.3rem)",
                color: "rgba(255,255,255,0.82)",
              }}
            >
              in Mathura &amp; Vrindavan
            </p>

            {/* Divider */}
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-6 bg-white/40" />
              <div
                className="h-1 w-20 rounded-full bg-white"
                style={{ boxShadow: "0 0 10px rgba(255,255,255,0.45)" }}
              />
              <div className="h-px w-6 bg-white/40" />
            </div>

            {/* Description */}
            <p
              className="ph-anim ph-d4 text-sm md:text-base leading-relaxed mb-7 max-w-md"
              style={{ color: "rgba(255,255,255,0.84)" }}
            >
              Performed by learned pandits — Rukmini Vivah, Govardhan Pooja,
              Janmashtami Abhishek &amp; many more sacred rituals.
            </p>

            {/* Stats */}
            <div className="ph-anim ph-d5 flex flex-wrap gap-7 mb-7">
              {STATS.map((s: any) => {
                const Icon = s.icon;

                return (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-xl font-black text-white leading-none flex items-center gap-2">
                      
                      {/* ICON */}
                      <Icon className="w-5 h-5 text-white/90" />

                      {/* VALUE */}
                      {s.value}
                    </span>

                    <span
                      className="text-[11px] mt-1"
                      style={{ color: "rgba(255,255,255,0.62)" }}
                    >
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="ph-anim ph-d5 flex flex-wrap gap-3 mb-7">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-extrabold text-sm cursor-pointer transition-all duration-200 hover:scale-[1.03] active:scale-95"
                style={{
                  background: "#fff",
                  color: "#c94a00",
                  boxShadow: "0 6px 22px rgba(0,0,0,0.15)",
                }}
              >
                🙏 Book a Pooja
              </button>

              <Link href="/pooja-packages">
                <button
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white cursor-pointer transition-all duration-200 hover:bg-white/20 hover:scale-[1.03] active:scale-95"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.5)",
                    background: "rgba(255,255,255,0.12)",
                  }}
                >
                  View All Poojas →
                </button>
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {[
                "100% Vedic Rituals",
                "Certified Pandits",
                "Doorstep Service",
                "Secure Booking",
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 text-xs"
                  style={{ color: "rgba(255,255,255,0.52)" }}
                >
                  <span style={{ color: "rgba(255,228,70,0.85)" }}>✦</span>
                  {t}
                </span>
              ))}
            </div>

            <div className="md:hidden w-full mt-6">
              <QuickEnquiry />
            </div>
          </div>

          {/* ── RIGHT: Image ── */}
 <div className="hidden md:block flex-shrink-0 w-full md:w-[300px] lg:w-[380px] self-stretch flex items-center justify-end">
  <div className="relative w-full max-w-[380px] h-[100px] md:h-full">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 460 380"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="cardClip">
          <rect x="0" y="0" width="460" height="380" rx="16" />
        </clipPath>
      </defs>

      <image
        href="/images/pooja/mainheropooja.webp"
        x="0"
        y="0"
        width="460"
        height="380"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#cardClip)"
      />

      {/* Orange overlay tint on top of image */}
      <rect
        x="0" y="0" width="460" height="380" rx="16"
        fill="#c2410c"
        fillOpacity="0.15"
        clipPath="url(#cardClip)"
      />

      {/* Card border */}
      <rect x="0" y="0" width="460" height="380" rx="16"
        fill="none" stroke="#f97316" strokeWidth="2.5" strokeOpacity="0.6" />
      <rect x="0" y="0" width="460" height="380" rx="16"
        fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />

      {/* Floating badge */}
      <rect x="296" y="300" width="152" height="68" rx="14" fill="white" />
      <text x="312" y="333" fontFamily="Georgia, serif" fontSize="24" fontWeight="700" fill="#c2410c">10K+</text>
      <text x="312" y="354" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#9ca3af" letterSpacing="1">DEVOTEES SERVED</text>
    </svg>
  </div>
</div>
        </div>


       
      </section>

       <StatsStrip/>

      <CommonEnquiryForm
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        defaultService="Pooja"
      />
    </>
  );
}