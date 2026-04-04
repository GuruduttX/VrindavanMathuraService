"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Phone, CarTaxiFront, ShieldCheck, Clock, Star } from "lucide-react";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";

export default function TaxiNewCTA() {
   const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section className="relative py-10 md:py-28 overflow-hidden">

      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50"></div>

      {/* glow blobs */}
      <div className="absolute -top-20 left-0 w-[350px] h-[350px] bg-orange-400/25 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-amber-400/25 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="
        grid
        lg:grid-cols-2
        gap-14
        items-center
        bg-white
        rounded-3xl
        shadow-2xl
        p-10
        ">

          {/* LEFT CONTENT */}

          <div>

            <h2 className="text-2xl md:text-4xl font-bold leading-tight">

              Ready to Travel with

              <span className="block bg-gradient-to-r from-orange-600 via-amber-600 to-amber-600 bg-clip-text text-transparent">
                Reliable Taxi Services?
              </span>

            </h2>

            <p className="text-gray-600 mt-5 max-w-md text-sm md:text-md">
              Enjoy safe and comfortable rides across Vrindavan,
              Mathura, Govardhan and nearby destinations with our
              trusted drivers and well-maintained taxis.
            </p>

            {/* trust points */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-sm text-gray-600">

              <div className="flex items-center gap-2 whitespace-nowrap">
                <ShieldCheck className="text-orange-600"/>
                Verified Drivers
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <Clock className="text-orange-600"/>
                On-Time Pickup
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <Star className="text-orange-600"/>
                4.8 Customer Rating
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <CarTaxiFront className="text-orange-600"/>
                Clean AC Cars
              </div>

            </div>

            {/* buttons */}

            <div className="flex flex-col md:flex-row gap-4 mt-10">

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="
                px-7
                py-3
                rounded-full
                text-white
                font-medium
                flex
                items-center
                justify-center
                gap-2
                bg-gradient-to-r
                from-orange-500
                via-amber-500
                to-amber-600
                shadow-lg
                whitespace-nowrap
                cursor-pointer
                "
                onClick={()=> setIsFormOpen(true)}
              >
                <CarTaxiFront size={18}/>
                Book Your Ride
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="
                px-7
                py-3
                rounded-full
                border
                border-orange-500
                text-orange-600
                flex
                items-center
                justify-center
                gap-2
                hover:bg-orange-50
                cursor-pointer
                "
              >
                <Phone size={18}/>
                Call Driver
              </motion.button>

            </div>

          </div>

          {/* 3. common Form Component */}
          <CommonEnquiryForm
            open={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            defaultService="Taxi Booking"
          />


          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="relative h-[360px] hidden md:block"
          >

            <div className="
            absolute
            inset-0
            rounded-3xl
            overflow-hidden
            shadow-xl
            ">

              <Image
                src="/images/Home/taxi-home.webp"
                alt="Taxi Ride"
                fill
                sizes=""
                loading="lazy"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            </div>

            {/* floating price card */}

            <div className="
            absolute
            bottom-6
            right-6
            bg-white
            shadow-xl
            rounded-2xl
            px-5
            py-3
            ">

              <p className="text-xs text-gray-500">
                Starting Fare
              </p>

              <p className="text-lg font-semibold text-orange-600">
                ₹799 / trip
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}