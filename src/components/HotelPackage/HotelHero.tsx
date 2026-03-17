"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Wifi, Coffee, Car, MapPin } from "lucide-react";

export default function HotelDetailsHero() {

  return (
    <section className="relative bg-gradient-to-b from-pink-50 to-white pt-20 pb-5">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-400 mb-4">
          Home / Hotels / <span className="text-pink-600 font-medium">Radha Palace Hotel</span>
        </p>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-xl"
        >

          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Radha Palace Hotel"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover"
          />

          {/* Rating badge */}
          <div className="absolute top-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow flex items-center gap-2 text-sm font-medium">
            <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
            4.6 Rating
          </div>

        </motion.div>


        {/* Hotel Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 mt-6"
        >

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800">
            Radha Palace Hotel
          </h1>

          <p className="text-gray-500 mt-2 max-w-[700px]">
            Peaceful and comfortable stay near Prem Mandir and ISKCON Temple
            with modern amenities and spiritual atmosphere.
          </p>


          {/* Rating + Reviews */}
          <div className="flex items-center gap-4 mt-4">

            <span className="flex items-center gap-1 text-pink-600 font-medium text-sm">
              ⭐ 4.6
            </span>

            <span className="text-gray-400 text-sm">
              214 reviews
            </span>

            <span className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-full font-medium">
              Top Rated
            </span>

          </div>


          {/* Amenities */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-600">

            <div className="flex items-center gap-2">
              <Wifi size={16} /> Free WiFi
            </div>

            <div className="flex items-center gap-2">
              <Coffee size={16} /> Breakfast
            </div>

            <div className="flex items-center gap-2">
              <Car size={16} /> Parking
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} /> Near Prem Mandir
            </div>

          </div>


          {/* Price Card */}
          <div className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-6 flex items-center justify-between text-white">

            <div>
              <p className="text-xs uppercase opacity-80">Special Offer</p>

              <p className="text-2xl font-bold mt-1">
                ₹1,299 <span className="text-sm font-normal">/ night</span>
              </p>

              <p className="text-xs opacity-80 mt-1">
                Limited time price • Free cancellation
              </p>
            </div>


            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-xl shadow"
            >
              Book Now →
            </motion.button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}