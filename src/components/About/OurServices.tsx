"use client";

import { motion } from "framer-motion";
import { Map, Hotel, Car, Flower } from "lucide-react";

const services = [
  {
    title: "Tour Packages",
    description:
      "Carefully curated Mathura & Vrindavan tour packages for a peaceful and divine experience.",
    icon: Map,
  },
  {
    title: "Hotel Booking",
    description:
      "Comfortable and verified hotel stays near temples and prime spiritual locations.",
    icon: Hotel,
  },
  {
    title: "Taxi Services",
    description:
      "Safe and reliable taxi services with experienced local drivers.",
    icon: Car,
  },
  {
    title: "Pooja Services",
    description:
      "Authentic temple pooja arrangements guided by experienced priests.",
    icon: Flower,
  },
];

export default function OurServices() {
  return (
    <section className="relative py-24 bg-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-pink-700">
            Our Divine Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group rounded-3xl p-8 backdrop-blur-lg bg-white/60 border border-pink-200 shadow-lg hover:shadow-pink-200/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white mb-6 shadow-md">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-pink-700 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-pink-300 transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}