"use client"

import { MapPin, Phone, CarTaxiFront } from "lucide-react"
import { useState } from "react"

export default function TaxiHero() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: ""
  })

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-amber-100 to-white py-10">

      {/* Divine amber Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-400/30 blur-[140px] rounded-full" />

      {/* Soft Grid */}
      <div className="absolute inset-0 
      bg-[linear-gradient(to_right,#ec489910_1px,transparent_1px),linear-gradient(to_bottom,#ec489910_1px,transparent_1px)]
      bg-[size:60px_60px]
      " />

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          <p className="text-amber-600 font-medium tracking-widest uppercase mb-4 text-xs md:text-sm text-center md:text-left">
            Vrindavan • Mathura Taxi Service
          </p>

          <h1 className="text-2xl md:text-6xl font-bold leading-tight text-gray-900 text-center md:text-left">
           Taxi Service <br />
            <span className="text-amber-600">
              For Vrindavan & Mathura Darshan
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-lg text-center md:text-left text-sm md:text-lg">
            Travel peacefully across the sacred land of Shri Krishna.
            Book reliable taxi services for temple darshan, local tours,
            and Mathura Vrindavan sightseeing with experienced drivers.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-lg shadow-amber-400/40 transition cursor-pointer">
              <CarTaxiFront size={18} />
              Book Taxi
            </button>

            <button className="flex items-center gap-2 px-6 py-3 border border-amber-300 hover:bg-amber-100 rounded-xl transition cursor-pointer">
              <Phone size={18} />
              Call Now
            </button>

          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-sm text-gray-700 justify-items-center md:justify-items-start">

            <div className="flex items-center gap-2 whitespace-nowrap">
              <MapPin size={16} className="text-amber-600 " />
              Temple Tours
            </div>

            <div className="flex items-center gap-2 whitespace-nowrap">
              <CarTaxiFront size={16} className="text-amber-600" />
              Local Taxi
            </div>

            <div className="flex items-center gap-2 whitespace-nowrap">
              <Phone size={16} className="text-amber-600" />
              24/7 Service
            </div>

            <div className="flex items-center gap-2 whitespace-nowrap">
              <Phone size={16} className="text-amber-600" />
              24/7 Service
            </div>

          </div>

        </div>

        {/* RIGHT BOOKING FORM */}
        <div className="relative">

          <div className="bg-white/70 backdrop-blur-xl border border-amber-200 shadow-2xl rounded-2xl p-8">

            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Book Your Taxi
            </h3>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <input
                type="text"
                placeholder="Pickup Location"
                className="w-full border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <input
                type="text"
                placeholder="Drop Location"
                className="w-full border border-amber-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition shadow-lg shadow-amber-400/40 cursor-pointer">
                Get Taxi Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}