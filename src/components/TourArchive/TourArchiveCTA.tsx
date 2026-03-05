"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TourArchiveCTA() {
  return (
    <section className="relative bg-white">

      {/* TOP ZIG ZAG */}
      <svg className="w-full" viewBox="0 0 1440 40" preserveAspectRatio="none">
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

      {/* MAIN CTA */}
      <div className="bg-gradient-to-br from-rose-50 to-amber-50 py-28 px-6 lg:px-20">
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

          {/* RIGHT IMAGE WITH SVG DECORATION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Decorative Vertical SVG */}
            <svg
              className="absolute -left-6 top-10 h-60 w-6"
              viewBox="0 0 20 200"
              fill="none"
            >
              <path
                d="M10 0 L10 200"
                stroke="#ec4899"
                strokeWidth="2"
              />
              <circle cx="10" cy="40" r="3" fill="#f43f5e" />
              <circle cx="10" cy="100" r="3" fill="#f43f5e" />
              <circle cx="10" cy="160" r="3" fill="#f43f5e" />
            </svg>

            {/* Image */}
            <div className="relative w-[420px] h-[300px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/tourpackages/TourPackage-CTA.webp"
                alt="Custom Mathura Vrindavan Tour"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

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