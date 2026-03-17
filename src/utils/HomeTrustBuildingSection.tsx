"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, CarTaxiFront, Sparkles } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Trusted & Verified Services",
    description:
      "All our tours, taxi drivers, hotels and puja services are verified to ensure a safe spiritual journey.",
  },
  {
    icon: Users,
    title: "5000+ Happy Travelers",
    description:
      "Thousands of pilgrims and tourists trust us for comfortable and well-organized Vrindavan trips.",
  },
  {
    icon: CarTaxiFront,
    title: "Professional Drivers",
    description:
      "Experienced local drivers with clean AC taxis for smooth travel between temples and cities.",
  },
  {
    icon: Sparkles,
    title: "Authentic Spiritual Experience",
    description:
      "Book temple pujas, guided darshan, and divine experiences arranged by local experts.",
  },
];

export default function HomeTrustBuildingSection() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-purple-50"></div>

      {/* glow blobs */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-pink-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-400/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
            Why Travelers Trust Us
          </h2>

          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            We provide reliable travel services in Vrindavan including tours,
            taxis, hotels and puja arrangements with complete transparency and
            local expertise.
          </p>
        </motion.div>


        {/* trust cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="
                group
                relative
                p-8
                rounded-3xl
                bg-white/70
                backdrop-blur-xl
                border
                border-white/40
                shadow-lg
                hover:shadow-2xl
                transition
                "
              >

                {/* icon */}
                <div className="
                w-14
                h-14
                flex
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-r
                from-pink-500
                via-fuchsia-500
                to-purple-600
                text-white
                mb-6
                shadow-md
                ">
                  <Icon size={26} />
                </div>

                {/* title */}
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                {/* description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* glow hover */}
                <div className="
                absolute
                inset-0
                rounded-3xl
                opacity-0
                group-hover:opacity-100
                transition
                bg-gradient-to-r
                from-pink-500/10
                via-fuchsia-500/10
                to-purple-500/10
                pointer-events-none
                "></div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}