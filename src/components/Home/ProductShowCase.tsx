"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { MapPin, CheckCircle, Star, Car, Hotel } from "lucide-react";

type FilterId = "tours" | "taxi" | "hotels" | "puja";

interface Filter {
  id: FilterId;
  label: string;
}

interface Product {
  title: string;
  price: string;
  image: string;
  location: string;
}

type ProductData = Record<FilterId, Product[]>;

const filters: Filter[] = [
  { id: "tours", label: "Tour Packages" },
  { id: "taxi", label: "Taxi Service" },
  { id: "hotels", label: "Hotels" },
  { id: "puja", label: "Puja" },
];

const data: ProductData = {
  tours: [
    {
      title: "Same Day Govardhan Barsana Tour",
      price: "₹1,999",
      image: "/images/Home/prem-mandir.jpg",
      location: "Govardhan",
    },
    {
      title: "Same Day Govardhan Barsana Tour",
      price: "₹1,999",
      image: "/images/Home/prem-mandir.jpg",
      location: "Govardhan",
    },
    {
      title: "Same Day Govardhan Barsana Tour",
      price: "₹1,999",
      image: "/images/Home/prem-mandir.jpg",
      location: "Govardhan",
    },
  ],

  taxi: [
    {
      title: "Delhi to Vrindavan Taxi",
      price: "₹2,999",
      image: "/images/Home/taxi.jpg",
      location: "Delhi",
    },
    {
      title: "Delhi to Vrindavan Taxi",
      price: "₹2,999",
      image: "/images/Home/taxi.jpg",
      location: "Delhi",
    },
    {
      title: "Delhi to Vrindavan Taxi",
      price: "₹2,999",
      image: "/images/Home/taxi.jpg",
      location: "Delhi",
    },
  ],

  hotels: [
    {
      title: "Luxury Hotel Vrindavan",
      price: "₹2,200 / night",
      image: "/images/Home/hotel.webp",
      location: "Vrindavan",
    },
    {
      title: "Luxury Hotel Vrindavan",
      price: "₹2,200 / night",
      image: "/images/Home/hotel.webp",
      location: "Vrindavan",
    },
    {
      title: "Luxury Hotel Vrindavan",
      price: "₹2,200 / night",
      image: "/images/Home/hotel.webp",
      location: "Vrindavan",
    },
  ],

  puja: [
    {
      title: "Temple Puja Booking",
      price: "₹999",
      image: "/images/Home/hotel.webp",
      location: "Vrindavan",
    },
    {
      title: "Temple Puja Booking",
      price: "₹999",
      image: "/images/Home/hotel.webp",
      location: "Vrindavan",
    },
    {
      title: "Temple Puja Booking",
      price: "₹999",
      image: "/images/Home/hotel.webp",
      location: "Vrindavan",
    },
  ],
};

export default function ProductsShowcase() {
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
    <section className="py-10 md:py-24 relative bg-gradient-to-b from-white via-amber-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* heading */}
        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 bg-clip-text text-transparent">
            Explore Our Services
          </h2>

          <p className="text-gray-600 mt-5">
            Tours, taxis and hotels — all in one place
          </p>

        </div>


        {/* FILTER */}
        <div className="flex justify-center mb-10">

          <div className="relative flex gap-0 md:gap-2 bg-white shadow-lg p-2 rounded-full border-2 border-amber-400 cursor-pointer">

            <div
              ref={indicatorRef}
              className="
              absolute top-2 bottom-2
              bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500
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
                className={`relative z-10 text-xs md:text-lg px-3 whitespace-nowrap md:px-10 py-2 md:py-4 rounded-full font-medium transition cursor-pointer ${active === filter.id
                    ? "text-amber-700"
                    : "text-gray-600 hover:text-amber-600"
                  }`}
              >
                {filter.label}
              </button>
            ))}

          </div>

        </div>



        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {data[active].map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 h-[480px] flex flex-col hover:scale-105 cursor-pointer"
            >

              {/* ================= TOURS CARD ================= */}
              {active === "tours" && (
                <>
                  <div className="relative h-[220px]">

                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/40 via-orange-500/20 to-transparent"></div>

                    <div className="absolute bottom-4 left-4 text-white">

                      <div className="mt-2 bg-white text-amber-600 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                        {product.price}
                      </div>

                    </div>

                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <h3 className="font-semibold text-lg">
                      {product.title}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin size={16} />
                      {product.location}
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-4 text-sm">

                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        AC Cab
                      </div>

                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Guide
                      </div>

                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Temple Darshan
                      </div>

                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Pickup & Drop
                      </div>

                    </div>

                    <button className="mt-6 bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 rounded-xl cursor-pointer">
                      View Details
                    </button>

                  </div>
                </>
              )}



              {/* ================= TAXI CARD ================= */}
              {active === "taxi" && (
                <>
                  <div className="flex items-center justify-center h-[220px] bg-gradient-to-br from-amber-100 to-orange-100">

                    <Car size={60} className="text-amber-600" />

                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">

                    <div>

                      <h3 className="text-xl font-semibold">
                        {product.title}
                      </h3>

                      <p className="text-gray-500 mt-2">
                        Comfortable AC taxi with professional driver service.
                      </p>

                    </div>

                    <div>

                      <div className="text-amber-600 font-semibold mb-4">
                        {product.price}
                      </div>

                      <button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 rounded-xl">
                        Book Taxi
                      </button>

                    </div>

                  </div>
                </>
              )}



              {/* ================= HOTELS CARD ================= */}
              {active === "hotels" && (
                <>
                  <div className="relative h-[220px]">

                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />

                    <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-lg flex items-center gap-1 shadow text-sm">
                      <Star size={14} className="text-yellow-500" />
                      4.6
                    </div>

                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">

                    <div>

                      <div className="flex items-center gap-2 mb-2">
                        <Hotel size={18} className="text-amber-600" />
                        <span className="text-sm text-gray-500">
                          Premium Stay
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold">
                        {product.title}
                      </h3>

                      <p className="text-gray-500 mt-2">
                        Comfortable stay with modern amenities in Vrindavan.
                      </p>

                    </div>

                    <div>

                      <div className="text-amber-600 font-semibold mb-4">
                        {product.price}
                      </div>

                      <button className="w-full border border-amber-500 text-amber-600 py-3 rounded-xl hover:bg-amber-50">
                        View Hotel
                      </button>

                    </div>

                  </div>
                </>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}