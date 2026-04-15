"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, Fuel, Search } from "lucide-react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TaxiArchive({ taxis }: { taxis: any }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();


  const filteredTaxis = taxis.filter((taxi: any) => {
    const matchesSearch = taxi.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter === "all" || taxi.cabType === filter;
    return matchesSearch && matchesFilter;
  });

  

  return (
    <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-10">
        {/* Sidebar Filters */}
        <div className="bg-white rounded-3xl shadow-xl p-6 h-fit transition-all duration-300">
          {/* Header - Clickable on Mobile */}
          <div
            className="flex items-center justify-between cursor-pointer md:cursor-default"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h3 className="text-xl font-bold text-gray-800">Filters</h3>

            {/* Arrow Icon - Only visible on mobile, rotates when open */}
            <div
              className={`md:hidden transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            >
              <ChevronDown size={24} className="text-amber-600" />
            </div>
          </div>

          {/* Filter List - Responsive visibility */}
          <div
            className={`
      space-y-3 mt-6 
      ${isOpen ? "block" : "hidden"} 
      md:block
    `}
          >
            {[
              "all",
              "Sedan",
              "SUV",
              "Hatchback",
              "MiniBus",
              "Tempo Traveller",
            ].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setFilter(type);
                  setIsOpen(false); // Optional: Close accordion after selection on mobile
                }}
                className={`w-full text-left px-4 py-3 rounded-xl transition font-medium cursor-pointer ${
                  filter === type
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md"
                    : "bg-gray-100 hover:bg-amber-50 text-gray-700"
                }`}
              >
                {type === "all" ? "All Cabs" : type}
              </button>
            ))}
          </div>
        </div>

        {/* Taxi Listings */}
        <div className="lg:col-span-3 space-y-8">
          {/* Search + Trust banner */}

          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96 group">
              <div
                className="
                  flex items-center
                  rounded-2xl
                  bg-white
                  px-4 py-3
                  border border-amber-100
                  shadow-sm
                  transition-all
                  duration-300
                  group-focus-within:border-amber-400
                  group-focus-within:ring-2
                  group-focus-within:ring-amber-200
                "
              >
                <Search
                  size={18}
                  className="text-gray-400 group-focus-within:text-amber-500 transition-colors"
                />

                <input
                  placeholder="Search Taxi..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1
                            bg-transparent
                            outline-none
                            px-3
                            text-sm
                            text-gray-700
                            placeholder:text-gray-400
                          "
                />
              </div>
            </div>

            {/* Trust banner */}

            <div className="flex gap-6 text-white px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-500 to-orange-600 shadow-lg">
              <span>Trusted Drivers</span>
              <span>Clean Cabs</span>
              <span>On-Time Pickup</span>
            </div>
          </div>

          <div className="flex flex-col gap-7 max-h-137.5 overflow-y-scroll no-scrollbar">
            {/* Taxi Cards */}
            {filteredTaxis.map((taxi: any) => (
              <motion.div
                key={taxi._id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl shadow-lg p-6 flex flex-col lg:flex-row items-center justify-between gap-8" // Increased gap to 8
              >
                {/* Taxi Info - Removed inner border and padding to give content room */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1 w-full">
                  {/* Image Container - Larger on desktop to avoid looking "tiny" */}
                  <div className="relative w-full sm:w-44 h-48 sm:h-28 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                    <Image
                      src={taxi.image}
                      alt={taxi.alt}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>

                  {/* Content Area - Uses more horizontal space */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-bold text-xl md:text-2xl text-gray-800 tracking-tight">
                        {taxi.title}
                      </h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700 uppercase tracking-wider">
                        {taxi.cabType}
                      </span>
                    </div>

                    {/* Metadata - More spacing and slightly larger icons */}
                    <div className="flex gap-8 text-gray-500 font-medium mt-4">
                      <span className="flex items-center gap-2">
                        <Users size={18} className="text-amber-500" />
                        {taxi.seats} Seats
                      </span>
                      <span className="flex items-center gap-2">
                        <Fuel size={18} className="text-amber-500" />
                        {taxi.fuelType}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price & Action Section - Grouped for better alignment on desktop */}
                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between w-full lg:w-auto pt-6 lg:pt-0 border-t lg:border-t-0 border-gray-100">
                  <div className="lg:text-right">
                    <p className="text-3xl font-extrabold text-amber-600">
                      ₹{taxi.basePrice}
                    </p>
                    <p className="text-sm text-gray-400 font-medium">
                      per trip
                    </p>
                  </div>
                  <Link href={`taxi/review/${taxi._id}`}>
                    <button
                      className="mt-0 lg:mt-4
                            px-8
                            py-3
                            rounded-full
                            text-white
                            font-bold
                            bg-gradient-to-r
                            from-amber-500
                            to-orange-600
                            hover:shadow-lg
                            hover:scale-105
                            active:scale-95
                            transition-all
                            cursor-pointer
                          "
                    >
                      Select Cab
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
