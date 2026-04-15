"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Users, Clock } from "lucide-react";
import { motion } from "framer-motion"

export default function TourCard({ tour, setOpen }: any) {
  console.log(tour)
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2 * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-orange-100"
    >
      {/* Image Section */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={"/images/Home/holy-image.webp"}
          alt={"The name is something called"}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105 w-full h-full"
          loading="lazy"
        />

        {/* Festival Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-orange-100 text-[#A84010] text-xs px-3 py-1 rounded-full font-medium">
            Festival
          </span>

          <span className="bg-[#A84010] text-white text-xs px-3 py-1 rounded-full font-medium">
            31% OFF
          </span>
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm flex items-center gap-2 shadow">
          <Clock size={14} />
          {tour.duration}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900">{tour.title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          Celebrate the world-famous Vrindavan Holi with colors, music, and
          spiritual bliss.
        </p>

        {/* Location Chips */}
        <div className="flex flex-wrap gap-2">
          {["Lathmar Holi", "Phoolon ki Holi", "Banke Bihari Holi"].map(
            (tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-xs bg-orange-50 text-[#A84010] px-3 py-1 rounded-full"
              >
                <MapPin size={12} />
                {tag}
              </span>
            ),
          )}
        </div>

        {/* Rating + Group Type */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="font-medium">{tour.rating}</span>
            <span>({tour.reviews})</span>
          </div>

          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>Groups & Couples</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-100 pt-4 flex gap-4 justify-around">
          {/* Button */}
          <Link
            href={`tour-packages/${tour.duration}/${tour.slug}`}
            className="flex-1 px-4  py-3 cursor-pointer rounded-xl 
            bg-[linear-gradient(145deg,#7A2E00,#A84010,#E8821A)] 
            text-white font-medium shadow-md hover:scale-105 transition duration-300 grid"
          >
            <button className="place-self-center">View Tour</button>
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="px-4 flex-1 py-3 cursor-pointer rounded-xl border
            border-orange-200 text-gray-600 hover:border-[#A84010] hover:text-[#A84010] font-medium shadow-md hover:scale-105 transition duration-300"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}