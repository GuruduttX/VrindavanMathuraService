"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Wifi, MapPin, Hotel, Sparkles } from "lucide-react";

export default function HotelsHero() {
  return (
    <section className="relative pt-35 pb-5 overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <motion.h1
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
            className="text-5xl font-bold"
          >

            Stay Close to

            <span className="
            block
            bg-gradient-to-r
            from-pink-600
            via-fuchsia-600
            to-purple-600
            bg-clip-text
            text-transparent
            ">
              Vrindavan Temples
            </span>

          </motion.h1>

          <p className="text-gray-600 mt-5 max-w-xl mx-auto">
            Find peaceful hotels near sacred temples with modern
            comforts and a spiritual atmosphere.
          </p>

        </div>


        {/* Featured Hotel Showcase */}

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">

          {/* background image */}

          <div className="relative h-[480px]">

            <Image
              src="/images/Home/hotel.webp"
              alt="Vrindavan Hotel"
              fill
              className="object-cover"
            />

            {/* overlay gradient */}

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

          </div>


          {/* Featured Hotel Card */}

          <motion.div
            initial={{opacity:0,x:-60}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.6}}
            className="
            absolute
            left-10
            top-1/2
            -translate-y-1/2
            bg-white/95
            backdrop-blur-xl
            rounded-3xl
            shadow-xl
            p-8
            max-w-md
            "
          >

            {/* badge */}

            <div className="inline-flex items-center gap-2 text-xs bg-pink-50 text-pink-600 px-3 py-1 rounded-full">

              <Sparkles size={14}/>
              Featured Stay

            </div>


            <h3 className="text-2xl font-semibold mt-4">
              Radha Palace Hotel
            </h3>

            <div className="flex items-center text-gray-500 text-sm mt-2">

              <MapPin size={14} className="mr-1"/>
              Near Prem Mandir

            </div>


            {/* rating */}

            <div className="flex items-center gap-2 mt-4">

              <Star className="text-yellow-500" size={18}/>
              <span className="font-medium">4.6 Rating</span>

            </div>


            {/* amenities */}

            <div className="flex flex-wrap gap-2 mt-5 text-xs">

              <span className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full flex items-center gap-1">
                <Hotel size={12}/> Temple View
              </span>

              <span className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full flex items-center gap-1">
                <Wifi size={12}/> Free WiFi
              </span>

              <span className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full">
                AC Rooms
              </span>

            </div>


            {/* CTA */}

            <div className="flex items-center justify-between mt-7">

              <span className="text-pink-600 font-semibold text-lg">
                ₹1,299 / night
              </span>

              <button className="
              px-5
              py-2
              rounded-full
              text-white
              text-sm
              bg-gradient-to-r
              from-pink-500
              via-fuchsia-500
              to-purple-600
              hover:scale-105
              transition
              ">
                View Hotel
              </button>

            </div>

          </motion.div>


          {/* Brand gradient streak */}

          <div className="
          absolute
          right-0
          top-0
          h-full
          w-40
          bg-gradient-to-b
          from-pink-500/40
          to-purple-600/40
          blur-xl
          "></div>

        </div>

      </div>

    </section>
  );
}