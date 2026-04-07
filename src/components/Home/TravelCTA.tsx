"use client"
import TourEnquiryPopup from "@/utils/TourEnquiryPopUp";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";
import Link from "next/link";


export default function TravelCTA() {
  const [tourOpen, setTourOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <TourEnquiryPopup open={tourOpen} onClose={() => setTourOpen(false)} />

      <section className="py-10 md:py-28 relative overflow-hidden">
        {/* background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400"></div>

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
            <h2 className="text-2xl md:text-5xl font-bold leading-tight">
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
              {/* Primary Button */}
              <Link href="/tour-packages">
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-white text-amber-600 font-semibold shadow-lg flex items-center gap-2 justify-center cursor-pointer w-full"
                >
                  Book Tour Package
                  <ArrowRight size={18} />
                </motion.button>
              </Link>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-amber-600 transition cursor-pointer"
                onClick={() => {
                  setIsFormOpen(true);
                }}
              >
                Enquire Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

        <CommonEnquiryForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          defaultService="Taxi Booking"
        />
    </>
  );
}