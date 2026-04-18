"use client";

import Link from "next/link";
import { useState } from "react";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";
import PoojaCard from "../Home/ProductShow/PoojaCards";

export default function PoojaSection({ poojaData }: { poojaData: any }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [open, setOpen] = useState(false);

  const categories = ["All", "Festival", "Personal", "Temple", "Special"];

  const filteredPoojas =
    activeCategory === "All"
      ? poojaData
      : poojaData.filter((item: any) => item.category === activeCategory);

  return (
    <>
        <CommonEnquiryForm open={open} onClose={()=>setOpen(false)}/>
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
              className={`px-5 py-2 rounded-full cursor-pointer text-sm font-medium transition-all duration-300 border
                ${
                  activeCategory === cat
                    ? "bg-amber-500 text-white border-amber-500 shadow-md scale-105"
                    : "bg-white text-gray-600  border-gray-300 hover:border-amber-400 hover:text-amber-600 hover:shadow-sm"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PoojaCard product={filteredPoojas} setOpen={setOpen}/> 
        </div>
      </div>
    </section>
    </>

  );
}