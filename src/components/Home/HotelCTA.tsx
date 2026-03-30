"use client";

import { motion } from "framer-motion";
import { CalendarCheck, MapPin, Sparkles } from "lucide-react";

export default function HotelCTA() {
  return (
    <section className="py-10 bg-gradient-to-b from-purple-50 via-pink-100 to-pink-50">

      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >

          {/* GRADIENT BORDER EFFECT */}

          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 blur-lg opacity-30" />

          {/* MAIN CARD */}

          <div className="relative bg-white rounded-3xl shadow-2xl p-8 text-center">

            

            {/* TITLE */}

            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">
              Plan Your Peaceful Stay in Vrindavan
            </h2>

            {/* DESCRIPTION */}

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed text-sm md:text-lg">
              Experience a comfortable and spiritual stay near the sacred
              temples of Vrindavan. Our carefully selected hotels ensure a
              relaxing environment for pilgrims and travellers.
            </p>

            {/* FEATURES */}

            <div className="flex flex-wrap justify-center gap-8 mt-10 text-gray-600 text-sm md:text-md">

              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-pink-500" />
                Prime Temple Locations
              </div>

              <div className="flex items-center gap-2">
                <CalendarCheck size={18} className="text-pink-500" />
                Easy & Flexible Booking
              </div>

              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-pink-500" />
                Comfortable Spiritual Stay
              </div>

            </div>

            {/* BUTTON */}

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-10 py-4 text-white font-semibold rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 shadow-lg"
            >
              Book Your Stay Now
            </motion.button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}