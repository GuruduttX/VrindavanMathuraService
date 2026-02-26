"use client";

import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-600 to-rose-500 py-24 px-6 lg:px-20 text-white">
      
      {/* Decorative Blur Circles */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pink-400/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-rose-300/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-4xl text-center">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Explore Mathura & Vrindavan
        </motion.h1>

        {/* Subtitle (SEO Optimized) */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-pink-100 leading-relaxed"
        >
          Discover temple guides, travel tips, hotel recommendations,
          taxi services, pooja rituals, and complete tour planning insights
          for your divine journey in Mathura and Vrindavan.
        </motion.p>

        {/* Animated Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-8 h-1 rounded-full bg-white/70"
        />
      </div>
    </section>
  );
}