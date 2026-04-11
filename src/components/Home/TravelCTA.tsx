"use client"
import TourEnquiryPopup from "@/utils/TourEnquiryPopUp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";
import Link from "next/link";


export default function TravelCTA() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const targetRef = useRef(null);

  // Tracks the scroll progress through the invisible 200vh wrapper
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });

  // --- Animation Sequence ---
  // Heading: Comes from right, starts big, scales down, then fades out
  const headingX = useTransform(scrollYProgress, [0, 0.4], ["100%", "0%"]);
  const headingScale = useTransform(scrollYProgress, [0, 0.4], [1.3, 1]);
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.5],
    [0, 1, 1, 0],
  );

  // Paragraph & Buttons: Slide up and fade in after heading leaves
  const contentY = useTransform(scrollYProgress, [0.5, 0.7], [60, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  // Prevent button clicks while they are invisible
  const contentPointerEvents = useTransform(
    scrollYProgress,
    [0.5, 0.6],
    ["none", "auto"],
  );
  return (
    <>
      <TourEnquiryPopup open={tourOpen} onClose={() => setTourOpen(false)} />

      <div ref={targetRef} className="h-[200vh] relative">
        {/* 2. Your Original Section: Now sticky, so it pins to the screen. 
          Notice it uses your exact original padding (py-10 md:py-28) */}
        <section className="sticky top-[25vh] py-10 md:py-28 overflow-hidden rounded-none shadow-2xl z-10">
          {/* background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-600"></div>

          {/* glow effects */}
          <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-white/20 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-white/20 blur-[150px] rounded-full"></div>

          {/* 3. Fixed Height Inner Box: Because the animated elements are 'absolute', 
            we set a min-height here so the banner doesn't collapse. */}
          <div className="max-w-6xl mx-auto px-6 relative h-[280px] md:h-[250px] flex items-center justify-center">
            {/* LAYER 1: The Sweeping Heading */}
            <motion.div
              style={{
                x: headingX,
                scale: headingScale,
                opacity: headingOpacity,
              }}
              className="absolute w-full text-center"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-md">
                Plan Your Divine Vrindavan Journey Today
              </h2>
            </motion.div>

            {/* LAYER 2: The Paragraph and Buttons */}
            <motion.div
              style={{
                y: contentY,
                opacity: contentOpacity,
                pointerEvents: contentPointerEvents,
              }}
              className="absolute w-full text-center flex flex-col items-center"
            >
              {/* Adding a smaller context heading so the space doesn't look empty */}
              <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                Start Your Journey
              </h3>

              <p className="mt-4 md:mt-6 text-base md:text-lg text-white/95 max-w-2xl mx-auto drop-shadow-sm font-medium">
                Book your tour packages, taxis, hotels and temple pujas with
                trusted local service. Experience Vrindavan with comfort,
                spirituality and unforgettable memories.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full max-w-md md:max-w-none px-4 md:px-0">
                <Link href="/tour-packages" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-amber-600 font-semibold shadow-lg flex items-center gap-2 justify-center w-full"
                  >
                    Book Tour Package
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-amber-600 transition w-full sm:w-auto"
                  onClick={() => setIsFormOpen(true)}
                >
                  Enquire Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <CommonEnquiryForm
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        defaultService="Taxi Booking"
      />
    </>
  );
}