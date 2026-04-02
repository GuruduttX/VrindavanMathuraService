"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Users, Clock } from "lucide-react";

export default function TourCard({ tour }: any) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-orange-100">

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
        <h3 className="text-xl font-semibold text-gray-900">
          {tour.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          Celebrate the world-famous Vrindavan Holi with colors,
          music, and spiritual bliss.
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
            )
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
        <div className="border-t border-orange-100 pt-4 flex items-end justify-between">

          {/* Price */}
          <div>
            {tour.oldPrice && (
              <p className="text-sm text-gray-400 line-through">
                ₹{tour.oldPrice.toLocaleString()}
              </p>
            )}

            <p className="text-2xl font-bold text-[#A84010]">
              ₹{tour.price.toLocaleString()}
            </p>

            <p className="text-xs text-gray-500">per person</p>
          </div>

          {/* Button */}
          <Link href={`/tour-packages/${tour.id}`}>
            <button className="px-6 py-3 cursor-pointer rounded-full 
            bg-[linear-gradient(145deg,#7A2E00,#A84010,#E8821A)] 
            text-white font-medium shadow-md hover:scale-105 transition duration-300">
              Book Now
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}