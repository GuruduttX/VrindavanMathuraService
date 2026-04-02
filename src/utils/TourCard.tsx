"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Users, Clock } from "lucide-react";

interface Tour {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  duration: string;
  rating: number;
  reviews: number;
}

interface Props {
  tour: Tour;
}

export default function TourCard({ tour }: any) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 ">
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
          <span className="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full font-medium">
            Festival
          </span>

          <span className="bg-pink-600 text-white text-xs px-3 py-1 rounded-full font-medium">
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
                className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
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
        <div className="border-t border-gray-200 pt-4 flex items-end justify-between">
          {/* Price */}
          <div>
            {tour.oldPrice && (
              <p className="text-sm text-gray-400 line-through">
                ₹{tour.oldPrice.toLocaleString()}
              </p>
            )}

            <p className="text-2xl font-bold text-pink-600">
              ₹{tour.price.toLocaleString()}
            </p>

            <p className="text-xs text-gray-500">per person</p>
          </div>

          {/* Button */}
          <Link href={`/tour-packages/${tour.id}`}>
            <button
              className="px-3 xl:px-7 py-3
                                    text-sm xl:text-lg
                                    rounded-full
                                    font-medium
                                    text-white
                                    bg-gradient-to-r from-orange-500 to-amber-600
                                    shadow-lg
                                    hover:scale-105
                                    transition
                                    overflow-hidden
                                    cursor-pointer"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}