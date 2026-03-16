"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, CarTaxiFront, ShieldCheck, Clock, Star } from "lucide-react";

export default function TaxiNewCTA() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>

      {/* glow blobs */}
      <div className="absolute -top-20 left-0 w-[350px] h-[350px] bg-pink-400/25 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-400/25 blur-[140px] rounded-full"></div>

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

            <h2 className="text-4xl font-bold leading-tight">

              Ready to Travel with

              <span className="block bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                Reliable Taxi Services?
              </span>

            </h2>

            <p className="text-gray-600 mt-5 max-w-md">
              Enjoy safe and comfortable rides across Vrindavan,
              Mathura, Govardhan and nearby destinations with our
              trusted drivers and well-maintained taxis.
            </p>

            {/* trust points */}

            <div className="grid grid-cols-2 gap-4 mt-8 text-sm text-gray-600">

              <div className="flex items-center gap-2">
                <ShieldCheck className="text-pink-600"/>
                Verified Drivers
              </div>

              <div className="flex items-center gap-2">
                <Clock className="text-pink-600"/>
                On-Time Pickup
              </div>

              <div className="flex items-center gap-2">
                <Star className="text-pink-600"/>
                4.8 Customer Rating
              </div>

              <div className="flex items-center gap-2">
                <CarTaxiFront className="text-pink-600"/>
                Clean AC Cars
              </div>

            </div>

            {/* buttons */}

            <div className="flex gap-4 mt-10">

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
                gap-2
                bg-gradient-to-r
                from-pink-500
                via-fuchsia-500
                to-purple-600
                shadow-lg
                "
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
                border-pink-500
                text-pink-600
                flex
                items-center
                gap-2
                hover:bg-pink-50
                "
              >
                <Phone size={18}/>
                Call Driver
              </motion.button>

            </div>

          </div>


          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="relative h-[360px]"
          >

            <div className="
            absolute
            inset-0
            rounded-3xl
            overflow-hidden
            shadow-xl
            ">

              <Image
                src="/images/Home/taxi1.jpg"
                alt="Taxi Ride"
                fill
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

              <p className="text-lg font-semibold text-pink-600">
                ₹799 / trip
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}