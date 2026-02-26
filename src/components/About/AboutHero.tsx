"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 py-28 text-white">
      
      {/* Background Glow Effects */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-pink-300 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-rose-300 opacity-20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold leading-tight md:text-6xl"
        >
          About MathuraVrindavanService
        </motion.h1>

        {/* Elegant Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-6 h-1 rounded-full bg-white/80"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-pink-100 md:text-xl"
        >
          We provide trusted Tour Packages, Hotel Bookings, Taxi Services, and
          Pooja arrangements in Mathura & Vrindavan with dedication,
          authenticity, and care.
        </motion.p>

      </div>
    </section>
  );
}