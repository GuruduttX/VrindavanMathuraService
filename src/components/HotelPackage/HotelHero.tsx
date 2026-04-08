"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Wifi, Coffee, Car, MapPin, LucideIcon } from "lucide-react";
import { useState } from "react";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";
import QuickEnquiry from "@/utils/QuickQuery";

export default function HotelDetailsHero({HotelData } : {HotelData : any}) {
    // console.log(HotelData, "from hotel-slug-hero")
    const[isFormOpen, setIsFormOpen] = useState(false);
    const inclusionConfig: Record<string, { Icon: LucideIcon; label: string }> = {
      freeWifi: { Icon: Wifi, label: "Free WiFi" },
      breakfast: { Icon: Coffee, label: "Breakfast" },
      parking: { Icon: Car, label: "Parking" },
    };
  return (
    <>
      <section className="relative bg-linear-to-b from-amber-50 to-white pt-30 pb-5">
        <div className="max-w-300 mx-auto px-6">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-400 mb-4">
            Home / Hotels /{" "}
            <span className="text-amber-600 font-medium">
              {HotelData.title}
            </span>
          </p>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src={HotelData.image}
              alt={HotelData.alt}
              width={1200}
              height={500}
              className="w-full h-[420px] object-cover"
            />

            {/* Rating badge */}
            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow flex items-center gap-2 text-sm font-medium">
              <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
              {HotelData.Rating} Rating
            </div>
          </motion.div>

          {/* Hotel Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl md:shadow-xl p-4 md:p-8 mt-6 flex flex-col lg:flex-row justify-between"
          >
            <div>
              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                {HotelData.title}
              </h1>

              <p className="text-gray-500 mt-2 max-w-[700px]">
                {HotelData.subcontent}
              </p>

              {/* Rating + Reviews */}
              <div className="flex items-center gap-4 mt-4">
                <span className="flex items-center gap-1 text-amber-600 font-medium text-sm">
                  ⭐ {HotelData.Rating}
                </span>

                <span className="text-gray-400 text-sm">
                  {HotelData.reviews} reviews
                </span>

                <span className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-full font-medium">
                  Top Rated
                </span>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-600">
                {Object.entries(HotelData.quickInclusions).map(
                  ([key, isIncluded]) => {
                    // Skip if the inclusion is false, or if we don't have a config for this key
                    if (!isIncluded || !inclusionConfig[key]) return null;

                    // Extract the specific Icon and label for this inclusion
                    const { Icon, label } = inclusionConfig[key];

                    return (
                      <div key={key} className="flex items-center gap-2">
                        <Icon size={16} /> {label}
                      </div>
                    );
                  },
                )}

                <div className="flex items-center gap-2">
                  <MapPin size={16} /> {HotelData.category}
                </div>
              </div>
            </div>

            {/* Price Card */}
            {/* <div className="mt-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 flex items-center justify-between text-white">
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
              className="bg-white text-amber-600 font-semibold px-6 py-3 rounded-xl shadow"
            >
              Book Now →
            </motion.button>
          </div> */}

            <div className="shrink-0 w-fit bg-white/70 backdrop-blur-md border border-orange-100 shadow-xl rounded-2xl px-6 py-5 hidden lg:block">
              <div className="flex items-center gap-8">
                {/* LEFT SIDE (replacing price area) */}
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Flexible Pricing
                  </p>

                  <div className="flex items-end justify-end">
                    <span className="text-2xl font-bold text-orange-600">
                      Get Price →
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <span className="mt-2 text-xs bg-orange-50 text-orange-600 px-3 py-1 rounded-full font-medium">
                      No Hidden Charges
                    </span>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="whitespace-nowrap cursor-pointer px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Check Availability →
                </button>
              </div>
            </div>

            {/**Quick enquiry form for mobile only */}
            <div className="md:hidden">
              <QuickEnquiry />
            </div>
          </motion.div>

        </div>
      </section>
          {/* 3. common Form Component */}
          <CommonEnquiryForm
            open={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            defaultService="Hotel Booking"
          />
    </>
  );
}