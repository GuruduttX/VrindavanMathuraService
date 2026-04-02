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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-serif font-semibold text-center mb-10">
          Pooja Archive
          <span className="block h-[2px] w-24 mx-auto mt-3 bg-gradient-to-r from-amber-500 to-transparent"></span>
        </h2>

        {/* 2️ Filter / Category Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat,index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition
                ${activeCategory === cat
                  ? "bg-amber-500 text-white border-amber-500"
                  : "border-gray-300 text-gray-700 hover:border-amber-400 hover:text-amber-600"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3️⃣ Pooja Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPoojas.map((item: any) => (
            item.status == "published" ? <div
              key={item.id}
              className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 bg-white"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.heroimage.image}
                  alt={item.heroimage.alt}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold font-serif mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mb-2">
                  {item.date} • {item.location}
                </p>

                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>

                <Link href={`/pooja/${item.slug}`}>
                  <button className="text-amber-600 font-medium hover:underline">
                    View Details →
                  </button>
                </Link>
              </div>
            </div> : <></>
          ))}
        </div>
      </div>
    </section>
  );
}