"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const places = [
  {
    name: "Mathura",
    distance: "12 km",
  },
  {
    name: "Govardhan",
    distance: "23 km",
  },
  {
    name: "Barsana",
    distance: "45 km",
  },
  {
    name: "Nandgaon",
    distance: "50 km",
  },
  {
    name: "Gokul",
    distance: "20 km",
  },
];

export default function BrajExplorer() {
  return (
    <section className="relative py-10 md:py-28 overflow-hidden">

      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>

      {/* glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-pink-400/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-400/20 blur-[140px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* heading */}

        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
            Explore Braj Destinations
          </h2>

          <p className="text-gray-600 mt-4">
            Discover spiritual places around Vrindavan and plan your journey
          </p>

        </div>

        {/* route line */}

        <div className="relative flex flex-col md:flex-row items-center justify-between">

          {/* line */}
          <div className=" absolute top-0 bottom-0 w-[3px] left-1/2 -translate-x-1/2 bg-gradient-to-b from-pink-400 via-fuchsia-500 to-purple-500 lg:top-auto lg:left-0 lg:right-0 lg:h-[3px] lg:w-auto lg:bg-gradient-to-r"></div>

          {places.map((place, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="relative flex flex-col items-center group"
            >

              {/* node */}
              <div className="
                w-14
                h-14
                flex
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-pink-500
                via-fuchsia-500
                to-purple-600
                text-white
                shadow-lg
              ">
                <MapPin size={18}/>
              </div>

              {/* label */}
              <div className="mt-3 text-center">

                <p className="font-semibold">
                  {place.name}
                </p>

                <p className="text-sm text-gray-500">
                  {place.distance}
                </p>

              </div>

              {/* hover card */}
              <div className="
                absolute
                -top-16
                opacity-0
                group-hover:opacity-100
                transition
                bg-white
                shadow-xl
                rounded-xl
                px-4
                py-2
                text-sm
              ">

                Visit {place.name}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}