"use client";

import { motion } from "framer-motion";

export default function PoojaArchiveHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50 py-32 mt-12">

      {/* Soft Divine Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,200,120,0.25),_transparent_70%)] pointer-events-none"></div>

      {/* Floating Sacred Images - LEFT */}
      <div className="hidden lg:block absolute left-10 top-24 space-y-8">
        <FloatingImage
          src="/images/pooja/hero1.webp"
          size="w-24 h-24"
        />
        <FloatingImage
          src="/images/pooja/hero2.webp"
          size="w-28 h-28 ml-12"
        />
        <FloatingImage
          src="/images/pooja/hero3.webp"
          size="w-20 h-20"
        />
      </div>

      {/* Floating Sacred Images - RIGHT */}
      <div className="hidden lg:block absolute right-10 top-24 space-y-8">
        <FloatingImage
          src="/images/pooja/hero4.webp"
          size="w-24 h-24 ml-90"
        />
        <FloatingImage
          src="/images/pooja/hero5.webp"
          size="w-28 h-28 ml-76"
        />
        <FloatingImage
          src="/images/pooja/hero6.webp"
          size="w-20 h-20 ml-90"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-serif font-semibold text-gray-900 leading-tight"
        >
          Pooja Archive
          <span className="block mt-4 text-pink-600 italic text-2xl md:text-3xl">
            Preserving Sacred Moments of Devotion
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center mt-6"
        >
          <div className="h-[3px] w-32 bg-gradient-to-r from-transparent via-pink-600 to-transparent rounded-full"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-gray-700 leading-relaxed"
        >
          Explore past sacred rituals and divine ceremonies — each performed
          with devotion, authenticity, and spiritual grace.
        </motion.p>

      </div>
    </section>
  );
}

function FloatingImage({
  src,
  size,
}: {
  src: string;
  size: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative ${size} rounded-2xl overflow-hidden shadow-2xl border border-white/50`}
    >
      <img
        src={src}
        alt="Sacred Pooja"
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
}