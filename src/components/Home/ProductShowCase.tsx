"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type FilterId = "tours" | "taxi" | "hotels";

interface Filter {
  id: FilterId;
  label: string;
}

interface Product {
  title: string;
  price: string;
  image: string;
}

type ProductData = Record<FilterId, Product[]>;

const filters: Filter[] = [
  { id: "tours", label: "Tour Packages" },
  { id: "taxi", label: "Taxi Service" },
  { id: "hotels", label: "Hotels" },
];

const data: ProductData = {
  tours: [
    {
      title: "Mathura Vrindavan 2 Days",
      price: "₹4,999",
      image: "/images/Home/prem-mandir.jpg",
    },
    {
      title: "Vrindavan Spiritual Tour",
      price: "₹3,499",
      image: "/images/Home/Mandir.jpg",
    },
  ],

  taxi: [
    {
      title: "Delhi to Vrindavan Taxi",
      price: "₹2,999",
      image: "/images/Home/taxi.jpg",
    },
    {
      title: "Mathura Local Taxi",
      price: "₹1,499",
      image: "/images/Home/taxi2.jpg",
    },
  ],

  hotels: [
    {
      title: "Luxury Hotel Vrindavan",
      price: "₹2,200 / night",
      image: "/images/Home/hotel.jpg",
    },
    {
      title: "Budget Stay",
      price: "₹999 / night",
      image: "/images/Home/hotel2.jpg",
    },
  ],
};

export default function ProductShowCase() {
  const [active, setActive] = useState<FilterId>("tours");

  const indicatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.querySelector(
      `[data-filter="${active}"]`
    ) as HTMLElement | null;

    if (el && indicatorRef.current) {
      indicatorRef.current.style.width = `${el.offsetWidth}px`;
      indicatorRef.current.style.left = `${el.offsetLeft}px`;
    }
  }, [active]);

  return (
    <section className="py-24 relative">

      {/* glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* heading */}
        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">
            Explore Our Services
          </h2>

          <p className="text-gray-600 mt-3">
            Tours, taxis, and hotels — all in one place
          </p>

        </div>



        {/* FILTER */}
        <div className="flex justify-center mb-10">

          <div className="relative flex gap-2 bg-white shadow-lg p-2 rounded-full border">

            {/* animated indicator */}
            <div
              ref={indicatorRef}
              className="
                absolute top-2 bottom-2
                bg-gradient-to-r from-pink-500 to-fuchsia-500
                rounded-full
                transition-all duration-300
                opacity-20
              "
            />

            {filters.map((filter) => (
              <button
                key={filter.id}
                data-filter={filter.id}
                onClick={() => setActive(filter.id)}
                className={`
                  relative z-10 px-6 py-2 rounded-full font-medium transition
                  ${
                    active === filter.id
                      ? "text-pink-700"
                      : "text-gray-600 hover:text-pink-600"
                  }
                `}
              >
                {filter.label}
              </button>
            ))}

          </div>

        </div>



        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {data[active].map((product, index) => (
            <div
              key={index}
              className="
                group bg-white rounded-2xl overflow-hidden
                shadow-lg hover:shadow-2xl transition duration-500
              "
            >

              {/* image */}
              <div className="relative h-64 overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="
                    object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute bottom-4 left-4 text-white font-semibold">
                  {product.price}
                </div>

              </div>


              {/* content */}
              <div className="p-5">

                <h3 className="font-semibold text-lg">
                  {product.title}
                </h3>

                <button className="mt-3 text-pink-600 font-medium hover:underline">
                  View Details →
                </button>

              </div>

            </div>
          ))}

        </div>



        {/* CTA */}
        <div className="text-center mt-12">

          <button className="
            px-8 py-3
            bg-gradient-to-r from-pink-500 to-fuchsia-600
            text-white
            rounded-full
            shadow-lg
            hover:scale-105 transition
          ">
            View All {filters.find(f => f.id === active)?.label}
          </button>

        </div>

      </div>

    </section>
  );
}