"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { MapPin, Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const hotels = [
  {
    name: "Radha Palace Hotel",
    location: "Near Prem Mandir",
    price: "₹1,299 / night",
    rating: "4.6",
    badge: "Popular",
    image: "/images/Home/hotel.webp",
  },
  {
    name: "Vrindavan Residency",
    location: "Banke Bihari Temple Road",
    price: "₹1,099 / night",
    rating: "4.4",
    badge: "Best Price",
    image: "/images/Home/hotel.webp",
  },
  {
    name: "Divine Stay Vrindavan",
    location: "Iskcon Temple Area",
    price: "₹1,499 / night",
    rating: "4.7",
    badge: "Luxury",
    image: "/images/Home/hotel.webp",
  },
  {
    name: "Temple View Hotel",
    location: "Govardhan Road",
    price: "₹999 / night",
    rating: "4.3",
    badge: "Budget",
    image: "/images/Home/hotel.webp",
  },
];

export default function PopularHotels() {
  const controls = useAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        ease: "linear",
        duration: 28,
        repeat: Infinity,
      },
    });
  }, [controls]);

  const toggleFavorite = (index: number) => {
    setFavorites((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="relative py-10 md:py-28 overflow-hidden">

      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-purple-50"></div>

      {/* glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-pink-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-400/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
            Popular Hotels in Vrindavan
          </h2>

          <p className="text-gray-600 mt-3">
            Comfortable and trusted stays near temples
          </p>
        </div>

        {/* navigation arrows */}
        <div className="flex justify-end gap-3 mb-6">

          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-white shadow hover:bg-pink-50 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-white shadow hover:bg-pink-50 transition"
          >
            <ChevronRight />
          </button>

        </div>

        {/* scroll container */}
        <div
          ref={scrollRef}
          className="overflow-hidden"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: ["0%", "-50%"],
              transition: {
                ease: "linear",
                duration: 28,
                repeat: Infinity,
              },
            })
          }
        >

          <motion.div
            className="flex gap-8 cursor-grab"
            animate={controls}
            drag="x"
            dragConstraints={{ left: -500, right: 0 }}
          >

            {[...hotels, ...hotels].map((hotel, index) => (
              <div key={index} className="min-w-[320px] group relative">

                {/* glow */}
                <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-pink-500/30 via-fuchsia-500/30 to-purple-500/30"></div>

                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">

                  {/* image */}
                  <div className="relative h-56 overflow-hidden">

                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                    {/* badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {hotel.badge}
                    </div>

                    {/* rating */}
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg flex items-center gap-1 text-sm shadow">
                      <Star size={14} className="text-yellow-500" />
                      {hotel.rating}
                    </div>

                    {/* favorite */}
                    <button
                      onClick={() => toggleFavorite(index)}
                      className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow"
                    >
                      <Heart
                        size={16}
                        className={
                          favorites.includes(index)
                            ? "text-pink-600 fill-pink-600"
                            : "text-gray-500"
                        }
                      />
                    </button>

                  </div>

                  {/* content */}
                  <div className="p-5">

                    <h3 className="font-semibold text-lg">
                      {hotel.name}
                    </h3>

                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <MapPin size={14} className="mr-1" />
                      {hotel.location}
                    </div>

                    <div className="flex items-center justify-between mt-4">

                      <span className="text-pink-600 font-semibold">
                        {hotel.price}
                      </span>

                      <Link href={"/"}  className="
                        px-4 py-2
                        rounded-full
                        text-white
                        text-sm
                        bg-gradient-to-r
                        from-pink-500
                        via-fuchsia-500
                        to-purple-600
                        hover:scale-105
                        transition
                      ">
                        View Hotel
                      </Link>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </motion.div>

        </div>

        {/* CTA */}
        <div className="text-center mt-14">

          <Link
            href={'/hotels'}
           className="
            px-8 py-3
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
            cursor-pointer
          ">
            View All Hotels
          </Link>

        </div>

      </div>
    </section>
  );
}