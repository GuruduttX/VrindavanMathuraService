"use client";

import { motion } from "framer-motion";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";
import { useState } from "react";
export default function CTASection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 to-orange-500 py-24 px-6 lg:px-20 text-white -my-5">
      {/* Decorative Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-amber-400/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Plan Your Divine Journey Today
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-amber-100"
        >
          Experience spiritual peace, comfortable stays, reliable taxi services,
          and divine pooja arrangements — all in one place.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <button className="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-amber-600 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ">
            <span onClick={() => setIsFormOpen(true)} className="relative z-10">
              Book Your Journey
            </span>

            {/* Hover Glow Effect */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
          </button>
        </motion.div>
      </div>
        <CommonEnquiryForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          defaultService="Tour Package"
        />
    </section>
  );
}