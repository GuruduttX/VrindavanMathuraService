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
    <section className="relative py-10 md:py-28 overflow-hidden">

      {/* animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50 to-orange-50" />

      {/* floating glow blobs */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-10 w-[400px] h-[400px] bg-amber-400/20 blur-[140px] rounded-full"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-orange-400/20 blur-[140px] rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
            Why Travelers Trust Us
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Reliable travel services in Vrindavan including tours, taxis, hotels
            and puja arrangements with local expertise and complete transparency.
          </p>

          {/* animated divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full"
          />
        </motion.div>

        {/* cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="
                group
                relative
                p-[1px]
                rounded-3xl
                bg-gradient-to-r
                from-amber-500
                via-amber-500
                to-orange-600
                "
              >
                {/* inner glass card */}
                <div
                  className="
                  relative
                  h-full
                  rounded-3xl
                  bg-white/70
                  backdrop-blur-xl
                  p-8
                  shadow-lg
                  border
                  border-white/40
                  overflow-hidden
                  "
                >

                  {/* shine animation */}
                  <div
                    className="
                    absolute
                    -top-20
                    -left-20
                    w-40
                    h-40
                    bg-white/30
                    blur-2xl
                    rotate-12
                    opacity-0
                    group-hover:opacity-100
                    transition
                    "
                  />

                  {/* icon */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="
                    w-16
                    h-16
                    flex
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-amber-500
                    via-amber-500
                    to-orange-600
                    text-white
                    mb-6
                    shadow-lg
                    "
                  >
                    <Icon size={28} />
                  </motion.div>

                  {/* title */}
                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>

                  {/* description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* bottom glow */}
                  <div
                    className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-20
                    bg-gradient-to-t
                    from-amber-500/10
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition
                    "
                  />
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}