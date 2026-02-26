"use client";

import { motion } from "framer-motion";

export default function OurMissionVision() {
  return (
    <section className="relative overflow-hidden bg-pink-50 py-24 px-6 lg:px-16">

      {/* Decorative Blur Background Shapes */}
      <div className="absolute -top-32 -left-32 h-96 w-96 bg-pink-300 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 h-96 w-96 bg-rose-400 opacity-30 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-700">
            Our Mission & Vision
          </h2>

          {/* Elegant Underline */}
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-pink-600 to-rose-400 rounded-full"></div>
          </div>
        </motion.div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/60 border border-pink-100 p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold text-pink-600 mb-6">
              🌸 Our Mission
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              At <span className="font-semibold text-pink-700">MathuraVrindavanService</span>, 
              our mission is to provide seamless, comfortable, and spiritually enriching 
              travel experiences in Mathura and Vrindavan. From divine pooja arrangements 
              to reliable taxi services, hotel bookings, and curated tour packages — 
              we aim to serve every traveler with dedication, authenticity, and care.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/60 border border-pink-100 p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold text-rose-500 mb-6">
              ✨ Our Vision
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              Our vision is to become the most trusted local travel and devotional 
              service platform in the holy cities of Mathura and Vrindavan. 
              We aspire to connect devotees and travelers with authentic 
              experiences while maintaining professionalism, transparency, 
              and heartfelt hospitality.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}