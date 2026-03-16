"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TravelCTA() {
  return (
    <section className="py-28 relative overflow-hidden">

      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-fuchsia-400 to-purple-300"></div>

      {/* glow effects */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-white/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-white/20 blur-[150px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >

          {/* heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Plan Your Divine Vrindavan Journey Today
          </h2>

          {/* description */}
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            Book your tour packages, taxis, hotels and temple pujas with
            trusted local service. Experience Vrindavan with comfort,
            spirituality and unforgettable memories.
          </p>

          {/* buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-pink-600 font-semibold shadow-lg flex items-center gap-2 justify-center cursor-pointer"
            >
              Book Tour Package
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-pink-600 transition cursor-pointer"
            >
              Enquire Now
            </motion.button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}