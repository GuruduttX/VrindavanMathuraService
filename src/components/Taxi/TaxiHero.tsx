"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CarTaxiFront, ShieldCheck, Clock, Sparkles } from "lucide-react";

const taxis = [
  {
    name: "Sedan",
    price: "₹799",
    image: "/images/Home/taxi1.jpg",
  },
  {
    name: "SUV",
    price: "₹1199",
    image: "/images/Home/taxi2.jpg",
  },
  {
    name: "Luxury",
    price: "₹1599",
    image: "/images/Home/taxi3.jpg",
  },
];

export default function TaxiHero() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>

      {/* glow blobs */}
      <div className="absolute -top-20 left-0 w-[400px] h-[400px] bg-pink-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-400/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* heading */}
        <div className="text-center max-w-3xl mx-auto">

          <h1 className="text-5xl font-bold leading-tight">

            Travel with

            <span className="block bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
              Premium Taxi Services
            </span>

          </h1>

          <p className="text-gray-600 mt-5">
            Clean cars, professional drivers and comfortable rides across
            Vrindavan, Mathura and nearby destinations.
          </p>

        </div>

        {/* trust features */}
        <div className="flex justify-center gap-10 mt-12 text-sm text-gray-600 flex-wrap">

          <div className="flex items-center gap-2">
            <ShieldCheck className="text-pink-600"/>
            Verified Drivers
          </div>

          <div className="flex items-center gap-2">
            <Sparkles className="text-pink-600"/>
            Clean Vehicles
          </div>

          <div className="flex items-center gap-2">
            <Clock className="text-pink-600"/>
            On-Time Pickup
          </div>

        </div>

        {/* taxi showcase */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

          {taxis.map((taxi, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >

              {/* glow */}
              <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-pink-500/30 via-fuchsia-500/30 to-purple-500/30"></div>

              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">

                {/* image */}
                <div className="relative h-60 overflow-hidden">

                  <Image
                    src={taxi.image}
                    alt={taxi.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    {taxi.name}
                  </div>

                </div>

                {/* bottom */}
                <div className="p-5 flex items-center justify-between">

                  <span className="text-pink-600 font-semibold text-lg">
                    {taxi.price}
                  </span>

                  <button className="
                    px-4
                    py-2
                    rounded-full
                    text-white
                    text-sm
                    flex items-center gap-1
                    bg-gradient-to-r
                    from-pink-500
                    via-fuchsia-500
                    to-purple-600
                    hover:scale-105
                    transition
                  ">
                    <CarTaxiFront size={16}/>
                    Select
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">

          <button className="
            px-8
            py-3
            rounded-full
            text-white
            font-medium
            bg-gradient-to-r
            from-pink-500
            via-fuchsia-500
            to-purple-600
            shadow-lg
            hover:scale-105
            transition
          ">
            View All Taxi Options
          </button>

        </div>

      </div>

    </section>
  );
}