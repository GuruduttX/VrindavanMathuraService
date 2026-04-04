"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

const tours = [
  
  {
    title: "Govardhan Barsana Tour",
    location: "Vrindavan",
    price: "₹1,999",
    image: "/images/Home/prem-mandir.jpg",
  },
  {
    title: "Mathura Vrindavan Tour",
    location: "Mathura",
    price: "₹2,499",
    image: "/images/Home/Mandir.jpg",
  },
  {
    title: "Braj 2 Day Tour",
    location: "Braj",
    price: "₹4,999",
    image: "/images/Home/Mandir-new.jpg",
  },
  {
    title: "Delhi to Vrindavan Trip",
    location: "Delhi",
    price: "₹3,499",
    image: "/images/Home/prem-mandir.jpg",
  },
];

export default function PopularTours() {
  return (
    <section className="py-10 md:py-28 bg-gradient-to-b from-white via-amber-50 to-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* heading */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
            Popular Tour Packages
          </h2>

          <p className="text-gray-600 mt-3">
            Discover the most loved spiritual journeys
          </p>

        </div>

        {/* scroll container */}
        <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory premium-scrollbar">

          {tours.map((tour, index) => (

            <div
              key={index}
              className="min-w-[320px] snap-start group relative"
            >

              {/* card */}
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

                {/* image */}
                <div className="relative h-60 overflow-hidden">

                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                </div>

                {/* title */}
                <div className="px-5 pt-5 text-black">

                  <h3 className="font-semibold text-lg">
                    {tour.title}
                  </h3>

                  <div className="flex items-center text-sm mt-1 text-gray-600">
                    <MapPin size={14} className="mr-1" />
                    {tour.location}
                  </div>

                </div>

                {/* bottom section */}
                <div className="p-6 flex items-center justify-between">

                  <span className="text-amber-600 font-semibold text-lg">
                    {tour.price}
                  </span>

                  <button
                    className="
                    px-5 py-2
                    rounded-full
                    text-white
                    bg-gradient-to-r
                    from-amber-500
                    via-amber-500
                    to-orange-600
                    shadow-md
                    "
                  >
                    View Tour
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}