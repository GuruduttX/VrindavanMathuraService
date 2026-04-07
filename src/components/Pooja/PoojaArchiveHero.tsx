"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";


const STATS = [
  { icon: "🪔", value: "50+", label: "Pooja Types" },
  { icon: "🙏", value: "10k+", label: "Devotees Served" },
  { icon: "⭐", value: "4.9", label: "Rating" },
];

export default function PoojaHero() {
  const ref = useRef<HTMLDivElement>(null);
  const[isFormOpen, setIsFromOpen] = useState(false)

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
        className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden  md:pt-20"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(145deg, #FFFAEB 0%, #FDF2E2 40%, #FFF8E9 70%, #FFE1C3 100%)",
          }}
        />

        {/* Soft circle accents */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(236, 141, 27, 0.08) 0%, transparent 70%)",
            top: "-80px",
            left: "-80px",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(236, 141, 27, 0.08) 0%, transparent 70%)",
            bottom: "0px",
            right: "-60px",
          }}
        />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(236, 141, 27, 0.08) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-20"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 C360,100 900,0 1440,60 L1440,100 L0,100 Z"
              fill="white"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          {/* Diya icons */}
          <div className="ph-anim ph-d1 flex justify-center gap-3 mb-6 text-2xl">
            <span className="diya-icon">🪔</span>
            <span className="diya-icon">🌸</span>
            <span className="diya-icon">🪔</span>
          </div>

          {/* Badge */}
          <div
            className="ph-anim ph-d2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-5"
            style={{
              background: "rgba(236, 141, 27, 0.08)",
              border: "1px solid #BB4D00",
              color: "#BB4D00",
            }}
          >
            Authentic Vedic Pooja Packages
          </div>

          {/* Title */}
          <h1
            className="ph-anim ph-d3"
            style={{
              fontFamily: "roboto, serif",
              fontSize: "clamp(2.4rem, 6.5vw, 4.8rem)",
              lineHeight: 1.15,
              color: "#1a0a12",
              fontWeight: 600,
            }}
          >
            Book Sacred{" "}
            <em style={{ color: "#E17100", fontStyle: "italic" }}>Poojas</em>
            <span
              className="block mt-1"
              style={{
                fontSize: "0.5em",
                color: "#E17100",
                fontWeight: 400,
                letterSpacing: "0.04em",
              }}
            >
              in Mathura &amp; Vrindavan
            </span>
          </h1>

          {/* Body */}
          <p
            className="ph-anim ph-d4 mt-5 text-base md:text-lg leading-relaxed mx-auto"
            style={{ color: "#000000", maxWidth: "30rem" }}
          >
            Performed by learned pandits — Rukmini Vivah, Govardhan Pooja,
            Janmashtami Abhishek &amp; many more sacred rituals.
          </p>

          {/* CTAs */}
          <div className="ph-anim ph-d5 mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="btn-book px-9 py-3.5 rounded-full text-white font-semibold cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #FF8824, #EA8D19)",
                boxShadow: "0 8px 28px rgba(235, 141, 27, 0.8)",
              }}
              onClick={()=> setIsFromOpen(true)}
            >
              🙏 Book a Pooja
            </button>

            <Link href="/pooja-packages">
              <button
                className="btn-outline px-9 py-3.5 rounded-full font-semibold cursor-pointer"
                style={{
                  border: "1.5px solid #E17101",
                  color: "#E17101",
                  background: "transparent",
                }}
              >
                View All Poojas
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="ph-anim ph-d5 mt-10 flex flex-wrap justify-center gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-xl mb-0.5">{s.icon}</span>
                <span
                  className="text-xl font-semibold"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#E17101",
                  }}
                >
                  {s.value}
                </span>
                <span className="text-xs" style={{ color: "#BB4D00" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
        <CommonEnquiryForm
          open={isFormOpen}
          onClose={() => setIsFromOpen(false)}
          defaultService="Pooja"
        />
    </>
  );
}