"use client";
import TourEnquiryPopup from "@/utils/TourEnquiryPopUp";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { useState } from "react";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "5000+", label: "Happy Pilgrims" },
  { value: "50+", label: "Tour Packages" },
  { value: "12+", label: "Years Experience" },
];

const trustItems = [
  "Verified Local Guides",
  "24/7 Support",
  "Best Price Guarantee",
  "Spiritual & Comfortable",
];

export default function TravelCTA() {
  const [tourOpen, setTourOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <TourEnquiryPopup open={tourOpen} onClose={() => setTourOpen(false)} />
      <CommonEnquiryForm open={isFormOpen} onClose={() => setIsFormOpen(false)} defaultService="Taxi Booking" />

      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-500 shadow-xl shadow-amber-400/30">

            {/* Dot pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Orbs */}
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none" />
            <div className="absolute -bottom-12 left-32 w-48 h-48 rounded-full bg-white/[0.06] pointer-events-none" />

            <div className="relative grid md:grid-cols-2 items-stretch">

              {/* LEFT — Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="px-8 md:px-12 py-10 text-white flex flex-col justify-center"
              >
                <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-4 w-fit">
                  <MapPin size={10} className="opacity-80" />
                  Vrindavan's Trusted Partner
                </div>

                <h2 className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight mb-3">
                  Plan Your Divine<br />Vrindavan Journey
                </h2>

                <p className="text-white/75 text-sm leading-relaxed max-w-sm mb-7">
                  Tours, taxis, hotels &amp; temple pujas — all with trusted local expertise. Spirituality meets comfort.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Link href="/tour-packages">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-amber-700 font-bold text-sm shadow-lg cursor-pointer w-full sm:w-auto"
                    >
                      Book Tour Package <ArrowRight size={15} />
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsFormOpen(true)}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm"
                  >
                    Enquire Now <ArrowRight size={15} />
                  </motion.button>
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-white/20">
                  {stats.map(({ value, label }) => (
                    <div key={label}>
                      <div className="text-xl font-extrabold">{value}</div>
                      <div className="text-[11px] text-white/55 mt-0.5 tracking-wide">{label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

             {/* RIGHT — Image slot */}
<motion.div
  initial={{ opacity: 0, scale: 0.97 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
  className="hidden md:block relative min-h-[320px] overflow-hidden py-6 px-6"
>
  {/* Image */}
  <img
    src="/images/Home/CTAImage.webp"
    alt="Vrindavan Mathura CTA"
    className="w-full h-full object-cover object-center rounded-xl"
  />

  {/* Left fade — blends into the text side */}
  <div
    className="absolute inset-0"
    
  />

  {/* Top fade */}
 

  {/* Bottom fade — into trust bar */}


  {/* Subtle warm tint overlay to harmonize colors */}
</motion.div>

            </div>

            {/* Trust bar */}
            <div className="relative border-t border-white/15 px-8 md:px-12 py-3 flex justify-around items-center gap-x-6 gap-y-1.5">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-white/65 text-xs font-medium">
                  <Star size={10} className="text-yellow-300 fill-yellow-300" />
                  {item}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}