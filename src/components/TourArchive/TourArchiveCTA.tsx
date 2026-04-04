"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";

export default function TourArchiveCTA() {
  const [isFormOpen, setIsFromOpen] = useState(false);
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
            <stop offset="0%" stopColor="#7A2E00" />
            <stop offset="100%" stopColor="#E8821A" />
          </linearGradient>
        </defs>
      </svg>

      {/* MAIN CTA */}
      <div className="bg-gradient-to-br from-[#FFF7ED] to-white py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 lg:py-28 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* LEFT TEXT */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 leading-snug"
            >
              Let Us Design Your
              <span className="block italic text-[#A84010]">
                Personalized Spiritual Journey
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base lg:text-lg text-gray-600 leading-relaxed"
            >
              Our Braj travel specialists craft custom itineraries covering sacred
              temples, comfortable stays, private transfers, and guided experiences —
              thoughtfully planned for a meaningful visit.
            </motion.p>


            <button className="px-6 py-3 sm:px-8 sm:py-3.5 lg:px-10 lg:py-4 text-sm sm:text-base rounded-full 
            bg-[linear-gradient(145deg,#7A2E00,#A84010,#E8821A)] 
            text-white font-medium tracking-wide hover:opacity-90 transition duration-300 shadow-md cursor-pointer"
             onClick={()=> setIsFromOpen(true)}>
              Speak With Our Travel Expert
            </button>
          </div>

          {/* 3. common Form Component */}
                    <CommonEnquiryForm
                      open={isFormOpen}
                      onClose={() => setIsFromOpen(false)}
                      defaultService="Taxi Booking"
                    />

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Decorative line */}
            <svg
              className="absolute -left-6 top-10 h-60 w-6 hidden lg:block"
              viewBox="0 0 20 200"
              fill="none"
            >
              <path d="M10 0 L10 200" stroke="#7A2E00" strokeWidth="2" />
              <circle cx="10" cy="40" r="3" fill="#E8821A" />
              <circle cx="10" cy="100" r="3" fill="#E8821A" />
              <circle cx="10" cy="160" r="3" fill="#E8821A" />
            </svg>

            <div className="relative w-full max-w-sm sm:max-w-md lg:w-[420px] h-[220px] sm:h-[260px] lg:h-[300px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/tourpackages/TourPackage-CTA-Amber.webp"
                alt="Custom Mathura Vrindavan Tour"
                fill
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
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
            <stop offset="0%" stopColor="#7A2E00" />
            <stop offset="100%" stopColor="#E8821A" />
          </linearGradient>
        </defs>
      </svg>

    </section>
  );
}