"use client";

import { useState } from "react";
import Image from "next/image";
import { CarTaxiFront, Users, Fuel, Search } from "lucide-react";
import { motion } from "framer-motion";

const taxis = [
  {
    id: 1,
    name: "Sedan Premium",
    type: "Sedan",
    seats: 4,
    fuel: "Diesel",
    price: 3000,
    image: "/images/Home/taxi1.jpg",
    badge: "NEW",
  },
  {
    id: 2,
    name: "Sedan Economy",
    type: "Sedan",
    seats: 4,
    fuel: "Petrol",
    price: 2500,
    image: "/images/Home/taxi2.jpg",
    badge: "POPULAR",
  },
  {
    id: 3,
    name: "SUV Luxury",
    type: "SUV",
    seats: 6,
    fuel: "Diesel",
    price: 4200,
    image: "/images/Home/taxi3.jpg",
    badge: "BEST",
  },
];

export default function TaxiArchive() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTaxis = taxis.filter((taxi) => {
    const matchesSearch = taxi.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || taxi.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 min-h-screen py-20">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-10">

        {/* Sidebar Filters */}
        <div className="bg-white rounded-3xl shadow-xl p-6 h-fit">

          <h3 className="text-xl font-semibold mb-6">
            Filters
          </h3>

          <div className="space-y-3">

            {["all","Sedan","SUV"].map((type)=>(
              <button
                key={type}
                onClick={()=>setFilter(type)}
                className={`w-full text-left px-4 py-3 rounded-xl transition ${
                  filter === type
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                    : "bg-gray-100 hover:bg-pink-50"
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
            <div className="flex items-center border rounded-xl px-3 py-2 bg-white w-full lg:w-96">

              <Search size={18} className="text-gray-400"/>

              <input
                placeholder="Search Taxi..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className="flex-1 outline-none px-2"
              />

            </div>

            {/* Trust banner */}

            <div className="flex gap-6 text-white px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 shadow-lg">

              <span>Trusted Drivers</span>
              <span>Clean Cabs</span>
              <span>On-Time Pickup</span>

            </div>

          </div>


          {/* Taxi Cards */}

          {filteredTaxis.map((taxi)=>(
            <motion.div
              key={taxi.id}
              whileHover={{y:-6}}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col lg:flex-row items-center justify-between gap-6"
            >

              {/* Taxi Info */}

              <div className="flex items-center gap-5">

                <div className="relative w-28 h-20 rounded-xl overflow-hidden">

                  <Image
                    src={taxi.image}
                    alt={taxi.name}
                    fill
                    className="object-cover"
                  />

                </div>

                <div>

                  <div className="flex items-center gap-3">

                    <h3 className="font-semibold text-lg">
                      {taxi.name}
                    </h3>

                    <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
                      {taxi.badge}
                    </span>

                  </div>

                  <div className="flex gap-4 text-gray-500 text-sm mt-2">

                    <span className="flex items-center gap-1">
                      <Users size={14}/>
                      {taxi.seats} Seats
                    </span>

                    <span className="flex items-center gap-1">
                      <Fuel size={14}/>
                      {taxi.fuel}
                    </span>

                  </div>

                </div>

              </div>

              {/* Price */}

              <div className="text-right">

                <p className="text-2xl font-bold text-pink-600">
                  ₹{taxi.price}
                </p>

                <p className="text-sm text-gray-500">
                  per trip
                </p>

              </div>

              {/* Button */}

              <button className="
                px-6
                py-3
                rounded-full
                text-white
                font-medium
                bg-gradient-to-r
                from-pink-500
                via-fuchsia-500
                to-purple-600
                hover:scale-105
                transition
              ">
                Select Cab
              </button>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}