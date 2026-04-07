"use client";

import Link from "next/link";
import { useState } from "react";

export default function PoojaSection({ poojaData }: { poojaData: any }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Festival", "Personal", "Temple", "Special"];

  const filteredPoojas =
    activeCategory === "All"
      ? poojaData
      : poojaData.filter((item: any) => item.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-12 text-gray-800">
          Pooja Archive
          <span className="block h-[3px] w-24 mx-auto mt-4 bg-gradient-to-r from-amber-500 via-amber-300 to-transparent rounded-full"></span>
        </h2>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${
                  activeCategory === cat
                    ? "bg-amber-500 text-white border-amber-500 shadow-md scale-105"
                    : "bg-white text-gray-600 border-gray-300 hover:border-amber-400 hover:text-amber-600 hover:shadow-sm"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPoojas.map((item: any) =>
            item.status === "published" ? (
              <div
                key={item._id}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.heroImage.image}
                    alt={item.heroImage.alt}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* subtle overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold font-serif mb-1 text-gray-800 group-hover:text-amber-600 transition">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 mb-2">
                    {item.date} • {item.location}
                  </p>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <Link href={`/pooja/${item.slug}`}>
                    <button className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center gap-1">
                      View Details
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}