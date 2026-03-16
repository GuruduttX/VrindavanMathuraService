"use client";

import { motion } from "framer-motion";
import { MapPin, Car, Hotel, Sparkles } from "lucide-react";

const services = [
  {
    title: "Vrindavan Tour Packages",
    description:
      "Explore divine destinations like Govardhan, Barsana, Nandgaon and Mathura with guided spiritual tours.",
    icon: MapPin,
  },
  {
    title: "Taxi & Travel Service",
    description:
      "Book comfortable AC taxis for Delhi to Vrindavan trips, temple tours and local travel.",
    icon: Car,
  },
  {
    title: "Hotel Booking",
    description:
      "Find the best hotels and guest houses near temples with comfortable stay and affordable pricing.",
    icon: Hotel,
  },
  {
    title: "Puja & Temple Rituals",
    description:
      "Book special pujas, temple darshan services and spiritual rituals with experienced priests.",
    icon: Sparkles,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-10 md:py-28 relative bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden">

      {/* soft glow background */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-pink-300/30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-300/30 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
            Everything You Need For Your Vrindavan Journey
          </h2>

          <p className="text-sm md:text-lg text-gray-600 mt-4 max-w-xl mx-auto">
            Plan your complete spiritual trip with tour packages, taxi services,
            hotel booking and temple puja arrangements — all in one place.
          </p>

        </motion.div>

        {/* services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition cursor-pointer"
              >

                {/* icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white mb-6 shadow-lg">
                  <Icon size={28} />
                </div>

                {/* title */}
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                {/* description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-pink-500/20 via-fuchsia-500/20 to-purple-500/20"></div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}