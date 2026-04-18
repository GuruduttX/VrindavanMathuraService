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
  const [fuelFilter, setFuelFilter] = useState("all");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const filteredTaxis = taxis.filter((taxi: any) => {
    const matchesSearch = taxi.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter === "all" || taxi.cabType === filter;
    const matchesFuel = fuelFilter === "all" || taxi.fuelType === fuelFilter;
    return matchesSearch && matchesFilter && matchesFuel;
  });

  return (
    <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-10">
        {/* Sidebar Filters */}
        <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-5 h-fit shadow-sm">
          {/* Header */}
          <div
            className="flex items-center justify-between cursor-pointer md:cursor-default"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 rounded-full bg-gradient-to-b from-amber-500 to-orange-500" />
              <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
            </div>
            <div
              className={`md:hidden transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            >
              <ChevronDown size={20} className="text-amber-500" />
            </div>
          </div>

          <div
            className={`mt-6 space-y-7 ${isOpen ? "block" : "hidden"} md:block`}
          >
            {/* CAB TYPE */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
                Cab Type
              </p>
              <div className="flex flex-wrap gap-2">
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
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                      filter === type
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-transparent shadow-sm"
                        : "bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-amber-600"
                    }`}
                  >
                    {type === "all" ? "All" : type}
                  </button>
                ))}
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-gray-100" />

            {/* FUEL TYPE */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
                Fuel Type
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: "all", label: "All", icon: "⛽" },
                  { value: "Petrol", label: "Petrol", icon: "🔴" },
                  { value: "Diesel", label: "Diesel", icon: "🟤" },
                  { value: "Electric", label: "Electric", icon: "⚡" },
                  { value: "CNG", label: "CNG", icon: "🟢" },
                ].map(({ value, label, icon }) => (
                  <button
                    key={value}
                    onClick={() => {
                      setFuelFilter(value);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                      fuelFilter === value
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-transparent shadow-sm"
                        : "bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-amber-600"
                    }`}
                  >
                    <span className="text-base">{icon}</span>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* RESET */}
            {(filter !== "all" || fuelFilter !== "all") && (
              <button
                onClick={() => {
                  setFilter("all");
                  setFuelFilter("all");
                }}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold text-orange-500 border border-dashed border-orange-300 hover:bg-orange-50 transition-all duration-200"
              >
                ✕ Reset Filters
              </button>
            )}
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

            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-white px-6 py-4 rounded-2xl md:rounded-full bg-gradient-to-r from-amber-500 via-amber-500 to-orange-600 shadow-lg text-sm sm:text-base font-medium">
              <span className="whitespace-nowrap">Trusted Drivers</span>
              <span className="hidden sm:inline text-amber-200/50">•</span>{" "}
              {/* Visual divider on desktop */}
              <span className="whitespace-nowrap">Clean Cabs</span>
              <span className="hidden sm:inline text-amber-200/50">•</span>
              <span className="whitespace-nowrap">On-Time Pickup</span>
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
