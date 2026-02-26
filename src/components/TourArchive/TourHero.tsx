"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TourHero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/tourpackages/tour-archive-hero.webp"
          alt="Mathura Vrindavan Tour Packages"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Top Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Bottom Soft Fade */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 140"
          className="w-full h-28"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,140 600,0 900,60 C1150,110 1350,30 1440,80 L1440,140 L0,140 Z"
            fill="#ffffff"
            opacity="0.9"
          />
          <path
            d="M0,80 C300,160 600,20 900,80 C1150,130 1350,50 1440,100 L1440,140 L0,140 Z"
            fill="#fdf2f8"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm mb-6"
        >
          ✨ Mathura Vrindavan Tour Packages
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight"
        >
          Discover the Divine Land of{" "}
          <span className="block text-pink-400 italic font-medium">
            Krishna
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
        >
          Explore sacred temples, vibrant festivals, and spiritual
          experiences in Mathura & Vrindavan with our curated tour packages.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          <Link href="#tours">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r cursor-pointer from-pink-600 to-rose-500 text-white font-semibold shadow-xl hover:scale-105 transition duration-300">
              Explore Packages
            </button>
          </Link>

          <Link href="/tour-packages">
            <button className="px-10 py-4 rounded-full border cursor-pointer border-white text-white font-semibold hover:bg-white hover:text-black transition duration-300">
              View All Tours
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}