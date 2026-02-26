"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TourArchiveCTA() {
  return (
    <section className="relative bg-white">

      {/* TOP ZIG ZAG */}
        <svg
        className="w-full"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        >
        <path
            d="M0 30 L60 10 L120 30 L180 10 L240 30 L300 10 L360 30 L420 10 L480 30 L540 10 L600 30 L660 10 L720 30 L780 10 L840 30 L900 10 L960 30 L1020 10 L1080 30 L1140 10 L1200 30 L1260 10 L1320 30 L1380 10 L1440 30"
            stroke="url(#zigzagGradient)"
            strokeWidth="2"
            fill="none"
        />
        <defs>
            <linearGradient id="zigzagGradient" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
        </defs>
        </svg>

      {/* MAIN CTA CONTENT */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-100 py-28 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-20">

          {/* LEFT TEXT */}
          <div className="space-y-8">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-gray-900 leading-snug"
            >
              Let Us Design Your
              <span className="block italic text-pink-600">
                Personalized Spiritual Journey
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Our Braj travel specialists craft custom itineraries covering sacred
              temples, comfortable stays, private transfers, and guided experiences —
              thoughtfully planned for a meaningful visit.
            </motion.p>

            <Link href="/contact">
              <button className="px-10 py-4 rounded-full bg-pink-600 text-white font-medium tracking-wide hover:bg-pink-700 transition duration-300 shadow-md">
                Speak With Our Travel Expert
              </button>
            </Link>

          </div>

          {/* RIGHT SIMPLE SVG LINE ART */}
          <div className="flex justify-center opacity-80">
            <svg
              width="320"
              height="260"
              viewBox="0 0 300 250"
              fill="none"
            >
              <path
                d="M150 30 L180 120 L120 120 Z"
                stroke="#be123c"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="150"
                cy="25"
                r="12"
                stroke="#f43f5e"
                strokeWidth="2"
                fill="none"
              />
              <rect
                x="100"
                y="120"
                width="100"
                height="40"
                stroke="#f43f5e"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

        </div>
      </div>

      {/* BOTTOM ZIG ZAG */}
     <svg
    className="w-full rotate-180"
    viewBox="0 0 1440 40"
    preserveAspectRatio="none"
    >
    <path
        d="M0 30 L60 10 L120 30 L180 10 L240 30 L300 10 L360 30 L420 10 L480 30 L540 10 L600 30 L660 10 L720 30 L780 10 L840 30 L900 10 L960 30 L1020 10 L1080 30 L1140 10 L1200 30 L1260 10 L1320 30 L1380 10 L1440 30"
        stroke="url(#zigzagGradient2)"
        strokeWidth="2"
        fill="none"
    />
    <defs>
        <linearGradient id="zigzagGradient2" x1="0" y1="0" x2="1440" y2="0">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
    </defs>
    </svg>

    </section>
  );
}