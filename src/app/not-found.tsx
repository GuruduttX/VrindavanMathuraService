"use client";

import Link from "next/link";
import { Home, MapPin, Search } from "lucide-react";
import Navbar from "@/utils/Navbar";
import LuxuryFooter from "@/utils/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-[#f8efe6] via-[#ffffff] to-[#f6e6d5]">

        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 shadow mb-6 text-2xl">
          🦚
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-orange-500">404</h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
          You seem lost in <span className="text-orange-500">Braj</span>
        </h2>

        {/* Description */}
        <p className="max-w-xl text-gray-600 mt-4 leading-relaxed">
          The path you're looking for doesn't exist. But don't worry — just
          like in Vrindavan, <b>Krishna always guides the lost souls</b>.
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-orange-400 rounded-full mt-6"></div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">

          <Link
            href="/"
            className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            href="/tours"
            className="flex items-center gap-2 border border-orange-400 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-50 transition"
          >
            <MapPin size={18} />
            Explore Tours
          </Link>

          <Link
            href="/search"
            className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition"
          >
            <Search size={18} />
            Search Places
          </Link>

        </div>

        {/* Quote */}
        <p className="text-gray-500 italic mt-12 text-sm">
          “In Vrindavan, even being lost is part of the journey.”
        </p>

      </div>

      <LuxuryFooter />
    </>
  );
}