"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Wifi,
  Car,
  Utensils,
  MapPin,
  Hotel,
  ChevronDown,
  ChevronUp,
  CheckCircle
} from "lucide-react";
import { IFAQ } from "@/types/hotelTypes";
import Link from "next/link";


interface HotelInclusion {
  freeWifi: boolean;
  breakfast: boolean;
  parking: boolean;
}

interface RatingSummary {
  // Using Record<string, any> since the highlights object was truncated in the log
  // Replace 'any' with a specific type if you know the exact shape of highlights
  highlights: Record<string, any>;
}

interface Hotel {
  _id: string;
  __v: number;
  title: string;
  slug: string;
  image: string;
  alt: string;
  category: string;
  host: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  status: "published" | "draft" | "archived" | string; 
  quickInclusions: HotelInclusion;
  ratingSummary: RatingSummary;
  faqs: any[];
  offers: any[]; 
  createdAt: string;
  updatedAt: string;
}

export default function HotelsArchive() {
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState(20000);
  const [wifi, setWifi] = useState(false);
  const [parking, setParking] = useState(false);
  const [restaurant, setRestaurant] = useState(false);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/users/hotels`,
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        setHotels(data.data);
      } catch (error) {
        console.error("Failed to fetch hotels:", error);
      }
    };
    fetchHotels();
  }, []);

  const filteredHotels = hotels.filter((hotel) => {
    // 1. Basic Number Comparisons
    const matchesRating = hotel.rating >= rating;
    const matchesPrice = hotel.price <= price;

    // 2. Boolean Inclusion Checks (Replacing the old .includes() array method)
    // If the user hasn't toggled 'wifi' (!wifi), it passes. If they have, the hotel MUST have freeWifi.
    const matchesWifi = !wifi || hotel.quickInclusions?.freeWifi === true;
    const matchesParking = !parking || hotel.quickInclusions?.parking === true;

    // Note: Your dummy data checked for "restaurant", but the real data has "breakfast".
    // I have mapped your restaurant state to check the breakfast boolean here.

    const matchesRestaurant =
      !restaurant || hotel.quickInclusions?.breakfast === true;

    // 3. Final Evaluation

    return (
      matchesRating &&
      matchesPrice &&
      matchesWifi &&
      matchesParking &&
      matchesRestaurant
    );
  });

  console.log(filteredHotels, "filtered hotels");

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* INTRO */}

        <div className="text-center mb-16">
          <h2
            className="
          text-4xl md:text-5xl font-bold
          bg-gradient-to-r
          from-amber-500
          via-amber-500
          to-orange-400
          bg-clip-text
          text-transparent
          "
          >
            Our Hotels in Vrindavan
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Comfortable stays near temples and peaceful places for your
            Vrindavan journey.
          </p>
        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-4 gap-10">
          {/* FILTERS */}

          <div
            className="
                        sticky
                        top-28
                        z-35
                        bg-white
                        rounded-3xl
                        shadow-xl
                        p-6
                        border border-gray-100
                        h-fit
                      "
          >
            {/* HEADER & MOBILE TOGGLE */}
            <div
              className="flex items-center justify-between cursor-pointer lg:cursor-default"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <h3 className="text-xl font-semibold">Filter Hotels</h3>

              {/* Caret icon only visible on mobile (hidden on lg screens) */}
              <button className="lg:hidden text-gray-500 hover:text-amber-500 transition">
                {isFilterOpen ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </button>
            </div>

            {/* FILTER CONTENT */}
            {/* lg:block ensures it's ALWAYS visible on desktop.
        On mobile, it toggles between 'block' and 'hidden' based on state. 
    */}
            <div
              className={`mt-8 space-y-8 lg:block ${isFilterOpen ? "block" : "hidden"}`}
            >
              {/* PRICE */}
              <div>
                <p className="text-sm text-gray-500 mb-3">Price Range</p>
                <input
                  type="range"
                  min={500}
                  max={20000}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
                <p className="text-sm mt-2 text-gray-600">Up to ₹{price}</p>
              </div>

              {/* RATING */}
              <div>
                <p className="text-sm text-gray-500 mb-3">Rating</p>
                {[4, 4.5].map((value) => (
                  <button
                    key={value}
                    onClick={() => setRating(value)}
                    className="
              flex items-center gap-2
              w-full
              px-3 py-2
              rounded-lg
              hover:bg-amber-50
              transition
              text-sm
            "
                  >
                    <Star size={16} className="text-yellow-500" />
                    {value}+ Rating
                  </button>
                ))}
              </div>

              {/* AMENITIES */}
              <div>
                <p className="text-sm text-gray-500 mb-3">Amenities</p>

                <label className="flex items-center gap-2 text-sm mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={wifi}
                    onChange={() => setWifi(!wifi)}
                    className="accent-amber-500 w-4 h-4"
                  />
                  <Wifi size={16} className="text-amber-500" />
                  Free WiFi
                </label>

                <label className="flex items-center gap-2 text-sm mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={parking}
                    onChange={() => setParking(!parking)}
                    className="accent-amber-500 w-4 h-4"
                  />
                  <Car size={16} className="text-amber-500" />
                  Parking
                </label>

                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={restaurant}
                    onChange={() => setRestaurant(!restaurant)}
                    className="accent-amber-500 w-4 h-4"
                  />
                  <Utensils size={16} className="text-amber-500" />
                  Restaurant
                </label>
              </div>
            </div>
          </div>
          {/* HOTEL LIST */}

          <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">
            {filteredHotels.map((hotel) => (
              <motion.div
                key={hotel._id} // Changed from hotel.id to hotel._id
                whileHover={{ y: -8 }}
                className="
                bg-white
                rounded-3xl
                shadow-xl
                overflow-hidden
                group
                max-w-sm
                "
              >
                {/* IMAGE */}

                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.alt || hotel.title} // Uses the specific alt text from backend, falls back to title
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm shadow flex items-center gap-1">
                    <Star size={14} className="text-yellow-500" />
                    {hotel.rating}{" "}
                    <span className="text-xs text-gray-500 ml-1">
                      ({hotel.reviews})
                    </span>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold">{hotel.title}</h3>{" "}
                  {/* Changed from name to title */}
                  <div className="flex items-center text-gray-500 text-orange-500 text-sm mt-1">
                    <MapPin size={14} className="mr-1" />
                    {hotel.category} {/* Changed from location to category */}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      AC Cab
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Local Guide
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Temple Darshan
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Pickup & Drop
                    </span>
                  </div>
                  {/* AMENITIES -> INCLUSIONS */}
                  <div className="flex gap-4 mt-4 text-sm text-gray-600">
                    {hotel.quickInclusions?.freeWifi && ( // Checks boolean directly
                      <span className="flex items-center gap-1">
                        <Wifi size={14} /> WiFi
                      </span>
                    )}

                    {hotel.quickInclusions?.parking && ( // Checks boolean directly
                      <span className="flex items-center gap-1">
                        <Car size={14} /> Parking
                      </span>
                    )}

                    {hotel.quickInclusions?.breakfast && ( // Checks boolean directly
                      <span className="flex items-center gap-1">
                        <Utensils size={14} /> Breakfast{" "}
                        {/* Changed label to Breakfast */}
                      </span>
                    )}
                  </div>
                  {/* PRICE */}
                  <div className="flex items-center gap-3 justify-around mt-6 text-lg font-bold">
                    <Link
                      href={`/hotels/${hotel.slug}`}
                      className="
                    px-4 py-2
                    rounded-xl
                    text-white
                    text-center
                    text-sm
                    bg-gradient-to-r from-orange-500 to-amber-600
                    hover:scale-105
                    transition
                    flex-1
                    "
                    >
                      <button>View Hotel</button>
                    </Link>
                    <button
                      className="
                    px-4 py-2
                    rounded-xl
                    text-orange-500
                    border-orange-500
                    border
                    text-sm
                    bg-white
                    hover:scale-105
                    transition
                    flex-1
                    "
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}