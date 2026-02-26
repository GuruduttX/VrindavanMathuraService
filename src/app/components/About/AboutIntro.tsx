"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="relative w-full py-24 bg-pink-50 overflow-hidden">

      {/* Background Blur Shape */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-300 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-pink-600 font-semibold uppercase tracking-wider">
            Who We Are
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Your Trusted Companion in
            <span className="block text-pink-600">
              Mathura & Vrindavan
            </span>
          </h2>

          {/* Elegant underline */}
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-pink-600 to-rose-400 rounded-full" />

          <p className="mt-8 text-gray-600 text-lg leading-relaxed">
            At <strong>MathuraVrindavanService</strong>, we specialize in 
            providing complete travel and spiritual solutions in the sacred
            cities of Mathura and Vrindavan. From comfortable hotels and
            reliable taxi services to curated tour packages and divine pooja
            arrangements — we ensure your journey is peaceful, seamless,
            and spiritually fulfilling.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            With strong local partnerships and deep understanding of the
            region, we are committed to offering personalized experiences
            that reflect devotion, comfort, and authenticity.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1606112219348-204d7d8b94ee"
            alt="Mathura Vrindavan Temple"
            
            className="object-cover w-full h-full"
          />
        </motion.div>

      </div>
    </section>
  );
}