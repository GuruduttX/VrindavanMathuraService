"use client";

import Image from "next/image";
import { Car, ArrowRight } from "lucide-react";
import { useState } from "react";
import TourEnquiryPopup from "@/utils/TourEnquiryPopUp";
import Link from "next/link";
import { isHmrRefresh } from "next/dist/server/app-render/work-unit-async-storage.external";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";

export default function TaxiCTA() {
  const [open, setOpne] = useState(false);
  const[isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <TourEnquiryPopup open={open} onClose={() => setOpne(false)} />
      <section className="relative py-10 md:py-28 overflow-hidden ">
        {/* layered background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100"></div>

        {/* grid pattern */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(236,72,153,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.15)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* glow blobs */}
        <div className="absolute -top-24 -left-24 w-[380px] h-[380px] bg-amber-400/25 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] bg-orange-400/25 blur-[120px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* glass container */}
          <div
            className="
        relative
        rounded-3xl
        border
        border-white/40
        bg-white/70
        backdrop-blur-xl
        shadow-xl
        p-10
        lg:p-14
        grid
        lg:grid-cols-2
        gap-10
        items-center
        "
          >
            {/* left content */}
            <div>
              <div className="inline-flex ml-8 md:ml-0 items-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Car size={16} />
                Reliable Taxi Services
              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight text-center md:text-left">
                Book Comfortable
                <span className="block bg-gradient-to-r from-amber-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Taxi Rides in Vrindavan
                </span>
              </h2>

              <p className="text-gray-600 mt-5 max-w-md text-center md:text-left">
                Travel easily between temples, cities, and sacred places with
                our trusted AC taxi services and experienced drivers.
              </p>

              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="
              px-7 py-3
              rounded-full
              text-white
              font-medium
              flex items-center gap-2
              justify-center
              whitespace-nowrap
              bg-gradient-to-r
              from-amber-500
              via-amber-500
              to-orange-600
              shadow-lg
              
              hover:scale-105
              transition
              cursor-pointer

              
              "
                >
                  Book Taxi
                  <ArrowRight size={18} />
                </button>

                <Link
                  href="taxi"
                  className="
              px-7 py-3
              rounded-full
              border
              whitespace-nowrap
              border-amber-500
              text-amber-600
              font-medium
              hover:bg-amber-50
              transition
              cursor-pointer
              flex
              items-center
              justify-center
              "
                >
                  View Routes
                </Link>
              </div>
            </div>

            {/* right visual */}
            <div className="relative">
              <div
                className="
            relative
            h-[200px]
            md:h-[320px]
            rounded-3xl
            overflow-hidden
            shadow-xl
            group
            "
              >
                <Image
                  src="/images/tourpackages/TourPackage-CTA-Amber.webp"
                  alt="Vrindavan Taxi"
                  fill
                  loading="lazy"
                  className="object-contain md:object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* floating price card */}
              <div
                className="
            absolute
            bottom-5
            right-5
            bg-white/90
            backdrop-blur
            rounded-2xl
            px-5
            py-3
            shadow-lg
            border
            "
              >
                <p className="text-xs text-gray-500">Starting from</p>

                <p className="text-lg font-semibold text-amber-600">
                  ₹799 / trip
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CommonEnquiryForm
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        defaultService="Taxi Booking"
      />
    </>
  );
}