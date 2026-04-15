"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden py-32 px-6 lg:px-20">

      {/* 🌅 Rich Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-200" />

      {/* ✨ Glow Layers */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-orange-400/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-amber-300/40 rounded-full blur-3xl" />

      {/* 🌞 Subtle Radial Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.25),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>

          {/* 🔗 Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-5">
            <Link href="/" className="hover:text-orange-600 cursor-pointer">
              Home
            </Link>
            <span>›</span>
            <Link href="/blogs" className="hover:text-orange-600 cursor-pointer">
              Blogs
            </Link>
            <span>›</span>
            <span className="text-orange-700 font-semibold">
              Mathura Vrindavan Guide
            </span>
          </div>

          {/* 🪔 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold leading-tight text-gray-900"
          >
            Experience the Divine Journey of{" "}
            <span className="text-orange-600 drop-shadow-sm">
              Mathura & Vrindavan
            </span>
          </motion.h1>

          {/* 📖 Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-700 text-lg leading-relaxed"
          >
            मंदिर दर्शन, यात्रा गाइड, टैक्सी सेवा और सम्पूर्ण टूर प्लानिंग —  
            सब कुछ एक ही जगह पर आपके पवित्र सफर के लिए।
          </motion.p>

          {/* ✨ Divider */}
          <div className="mt-6 w-28 h-[3px] bg-gradient-to-r from-orange-400 to-amber-500 rounded-full" />
        </div>

        {/* RIGHT – PREMIUM FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative backdrop-blur-lg bg-white/70 
          border border-orange-200 
          rounded-2xl shadow-xl p-6 w-full max-w-md mx-auto"
        >
          {/* ✨ Glow border effect */}
          <div className="absolute inset-0 rounded-2xl border border-orange-300/40 pointer-events-none" />

          <h3 className="text-lg font-semibold text-orange-700 text-center">
            🪔 Book Your Darshan
          </h3>

          <p className="text-xs text-gray-600 text-center mt-1 mb-4">
            Vrindavan Mathura Guide
          </p>

          <form className="flex flex-col gap-3">
            <input
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-xl 
              bg-white border border-orange-200 
              focus:ring-2 focus:ring-orange-400 
              outline-none text-sm"
            />

            <input
              placeholder="Phone Number"
              className="w-full px-3 py-2 rounded-xl 
              bg-white border border-orange-200 
              focus:ring-2 focus:ring-orange-400 
              outline-none text-sm"
            />

            <button
              type="submit"
              className="mt-3 bg-gradient-to-r from-orange-500 to-orange-600 
              hover:from-orange-600 hover:to-orange-700 
              text-white py-2 rounded-2xl text-sm font-semibold 
              transition-all duration-200 cursor-pointer shadow-md"
            >
              ✨ Get Call Back
            </button>
          </form>
        </motion.div>
      </div>

{/* 🌊 Layered Curvy Bottom */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
  
  {/* Back Wave */}
  <svg
    viewBox="0 0 1440 200"
    className="w-full h-[140px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0,100 C300,180 600,20 900,100 C1200,180 1440,80 1440,80 L1440,200 L0,200 Z"
      fill="rgba(255,165,0,0.15)"
    />
  </svg>

  {/* Front Wave */}
  <svg
    viewBox="0 0 1440 200"
    className="w-full h-[120px] absolute bottom-0 left-0"
    preserveAspectRatio="none"
  >
    <path
      d="M0,80 C240,160 480,0 720,60 C960,120 1200,40 1440,100 L1440,200 L0,200 Z"
      fill="#ffffff"
    />
  </svg>
</div>
    </section>
  );
}