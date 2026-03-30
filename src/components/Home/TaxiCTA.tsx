"use client";

import Image from "next/image";
import { Car, ArrowRight } from "lucide-react";

export default function TaxiCTA() {
  return (
    <section className="relative py-10 md:py-28 overflow-hidden">

      {/* layered background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>

      {/* grid pattern */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(236,72,153,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.15)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* glow blobs */}
      <div className="absolute -top-24 -left-24 w-[380px] h-[380px] bg-pink-400/25 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] bg-purple-400/25 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* glass container */}
        <div className="
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
        ">

          {/* left content */}
          <div>

            <div className="inline-flex ml-8 md:ml-0 items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Car size={16}/>
              Reliable Taxi Services
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight text-center md:text-left">

              Book Comfortable
              <span className="block bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                Taxi Rides in Vrindavan
              </span>

            </h2>

            <p className="text-gray-600 mt-5 max-w-md text-center md:text-left">
              Travel easily between temples, cities, and sacred places with
              our trusted AC taxi services and experienced drivers.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-8">

              <button className="
              px-7 py-3
              rounded-full
              text-white
              font-medium
              flex items-center gap-2
              whitespace-nowrap
              bg-gradient-to-r
              from-pink-500
              via-fuchsia-500
              to-purple-600
              shadow-lg
              
              hover:scale-105
              transition
              cursor-pointer
              ">
                Book Taxi
                <ArrowRight size={18}/>
              </button>

              <button className="
              px-7 py-3
              rounded-full
              border
              whitespace-nowrap
              border-pink-500
              text-pink-600
              font-medium
              hover:bg-pink-50
              transition
              cursor-pointer
              ">
                View Routes
              </button>

            </div>

          </div>


          {/* right visual */}
          <div className="relative">

            <div className="
            relative
            h-[200px]
            md:h-[320px]
            rounded-3xl
            overflow-hidden
            shadow-xl
            group
            ">

              <Image
                src="/images/tourpackages/TourPackage-CTA.webp"
                alt="Vrindavan Taxi"
                fill
                loading="lazy"
                className="object-contain md:object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            </div>

            {/* floating price card */}
            <div className="
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
            ">

              <p className="text-xs text-gray-500">
                Starting from
              </p>

              <p className="text-lg font-semibold text-pink-600">
                ₹799 / trip
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}