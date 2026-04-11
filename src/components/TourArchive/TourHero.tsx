"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TourHero() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[80vh] xl:min-h-[95vh] flex items-center justify-center overflow-hidden pt-2 md:pt-10">
      
      {/* THEME CHANGED ONLY */}
      <div className="absolute inset-0 bg-gradient-to-br 
      from-[#7A2E00] 
      via-[#A84010] 
      to-[#E8821A]" />

      {/* Premium Gradient Background */}
      <div className="absolute inset-0 
             bg-[radial-gradient(circle_at_20%_20%,#E8821A,transparent_45%),
             radial-gradient(circle_at_80%_30%,#A84010,transparent_45%),
             linear-gradient(135deg,#7A2E00,#A84010,#E8821A)]" />

      {/* Soft Dot Pattern */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absoulte left-2 w-2.5 h-full shadow-2xl"/>

      {/* Softer Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 140" className="w-full h-28" preserveAspectRatio="none">
          <path
            d="M0,60 C300,140 600,0 900,60 C1150,110 1350,30 1440,80 L1440,140 L0,140 Z"
            fill="#ffffff"
            opacity="0.9"
          />
          <path
            d="M0,80 C300,160 600,20 900,80 C1150,130 1350,50 1440,100 L1440,140 L0,140 Z"
            fill="#FFF7ED"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* LEFT IMAGES (UNCHANGED) */}
      <div className="hidden xl:block absolute -left-8 top-32 space-y-8   
        [mask-image:linear-gradient(to_right,transparent,black_40%)]" style={{ perspective: 1200 }}>

        <FloatingImage src="/images/tourpackages/hero1.webp" size="w-24 h-24 opacity-40 scale-90" />
        <FloatingImage src="/images/tourpackages/hero2.webp" size="w-24 h-24 opacity-70" />
        <FloatingImage src="/images/tourpackages/hero6.webp" size="w-24 h-24 opacity-90" />
      </div>

      <div className="hidden xl:block absolute left-18 top-52 space-y-8" style={{ perspective: 1200 }}>
        <FloatingImage src="/images/tourpackages/hero9.webp" size="w-24 h-24 opacity-70" />
        <FloatingImage src="/images/tourpackages/hero10.webp" size="w-24 h-24 opacity-80" />
      </div>

      <div className="hidden xl:block absolute left-44 top-68 space-y-8" style={{ perspective: 1200 }}>
        <FloatingImage src="/images/tourpackages/hero8.webp" size="w-24 h-24 opacity-90" />
      </div>

      {/* RIGHT IMAGES (UNCHANGED) */}
      <div className="hidden xl:block absolute -right-8 top-32 space-y-8 
        [mask-image:linear-gradient(to_left,transparent,black_40%)]" style={{ perspective: 1200 }}>

        <FloatingImage src="/images/tourpackages/hero5.webp" size="w-24 h-24 opacity-40 scale-90" />
        <FloatingImage src="/images/tourpackages/hero1.webp" size="w-24 h-24 opacity-70" />
        <FloatingImage src="/images/tourpackages/hero2.webp" size="w-24 h-24 opacity-90" />
      </div>

      <div className="hidden xl:block absolute right-18 top-52 space-y-8" style={{ perspective: 1200 }}>
        <FloatingImage src="/images/tourpackages/hero7.webp" size="w-24 h-24 opacity-70" />
        <FloatingImage src="/images/tourpackages/hero6.webp" size="w-24 h-24 opacity-80" />
      </div>

      <div className="hidden xl:block absolute right-44 top-68 space-y-8" style={{ perspective: 1200 }}>
        <FloatingImage src="/images/tourpackages/hero4.webp" size="w-24 h-24 opacity-90" />
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-20 text-center text-white px-6 max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/15 backdrop-blur-md text-xs sm:text-sm mb-4 sm:mb-6"
        >
          ✨ Mathura Vrindavan Tour Packages
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-tight"
        >
          Discover the Divine Land of{" "}
          <span className="block text-orange-200 italic font-medium">
            Krishna
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
        >
          Explore sacred temples, vibrant festivals, and spiritual
          experiences in Mathura & Vrindavan with our curated tour packages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 px-4 sm:px-2 w-full"
        >
          <Link href="#tours" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base rounded-full 
            bg-gradient-to-r from-[#7A2E00] to-[#E8821A] text-white cursor-pointer font-semibold shadow-xl hover:scale-105 transition duration-300">
              Explore Packages
            </button>
          </Link>

          <Link href="/tour-packages" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base rounded-full border border-white/70 cursor-pointer text-white font-semibold hover:bg-white hover:text-[#7A2E00] transition duration-300">
              View All Tours
            </button>
          </Link>
        </motion.div>
        
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
      initial={{ rotateY: 180, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ rotateY: 180 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className={`relative ${size} rounded-2xl overflow-hidden cursor-pointer`}
    >
      <Image
        src={src}
        alt="Tour Preview"
        fill
        quality={75}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        className="object-cover rounded-2xl"
      />

      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 pointer-events-none" />
    </motion.div>
  );
}