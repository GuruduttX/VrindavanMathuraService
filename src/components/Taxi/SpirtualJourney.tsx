"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

const journey = [
  {
    title: "Prem Mandir Darshan",
    description:
      "Experience the divine beauty of Prem Mandir illuminated in the evening.",
    image: "/images/Home/prem-mandir.jpg",
  },
  {
    title: "Banke Bihari Temple",
    description:
      "Witness the sacred darshan of Lord Krishna at the famous Banke Bihari temple.",
    image: "/images/Home/Mandir.jpg",
  },
  {
    title: "Iskcon Temple Visit",
    description:
      "Immerse yourself in peaceful kirtans and spiritual atmosphere.",
    image: "/images/Home/Mandir-new.jpg",
  },
];

export default function SpiritualJourney() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>

      {/* glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-400/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-400/20 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* heading */}
        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
            Your Spiritual Journey
          </h2>

          <p className="text-gray-600 mt-4">
            Explore divine experiences in Vrindavan with our curated tours
          </p>

        </div>

        {/* timeline */}
        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-pink-400 to-purple-500 hidden md:block"></div>

          <div className="space-y-24">

            {journey.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >

                {/* image */}
                <div className="relative h-[320px] rounded-3xl overflow-hidden shadow-2xl">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                </div>

                {/* text */}
                <div>

                  <div className="flex items-center gap-2 text-pink-600 font-semibold">

                    <MapPin size={18} />

                    Vrindavan

                  </div>

                  <h3 className="text-3xl font-bold mt-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 max-w-md">
                    {item.description}
                  </p>

                  <button className="
                    mt-6
                    px-6
                    py-3
                    rounded-full
                    text-white
                    bg-gradient-to-r
                    from-pink-500
                    via-fuchsia-500
                    to-purple-600
                    hover:scale-105
                    transition
                  ">
                    Explore Experience
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}