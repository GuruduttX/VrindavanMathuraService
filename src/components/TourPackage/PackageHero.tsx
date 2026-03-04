"use client";

import Image from "next/image";
import { Star, IndianRupee, Clock, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default function PackageHero({ PackageData }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <section className="relative w-full px-6 py-14 lg:px-16 bg-gradient-to-br from-pink-50 via-rose-50 to-white ">

        {/* Breadcrumb */}
        <nav className="text-sm text-pink-600 mb-6 mt-20 px-12">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/tour-packages">Packages</Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-700">
            {PackageData.title}
          </span>
        </nav>

        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT BIG IMAGE */}
          <div className="relative col-span-2 h-[460px] rounded-3xl overflow-hidden shadow-xl group">
            <Image
              src={PackageData.heroimage.image}
              alt={PackageData.heroimage.alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Pink Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/60 via-rose-500/20 to-transparent" />

            {/* Duration Badge */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-pink-600 shadow flex items-center gap-2">
              <Clock size={16} />
              {PackageData.duration || "3 Days / 2 Nights"}
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {PackageData.childImage?.map((item: any, i: any) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group shadow-md">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>
            ))}
          </div>
        </div>

       {/* BOTTOM CONTENT - STACKED CARD DESIGN */}
{/* BOTTOM CONTENT - MODERN SPLIT VIEW */}
<div className="mx-auto max-w-7xl mt-10 px-4">
  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
    
    {/* TOP SECTION - Title & Description */}
    <div className="p-6 lg:p-8 bg-gradient-to-br from-pink-50/50 to-rose-50/50">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left">
        {PackageData.title}
      </h1>
      
      <p className="mt-3 text-gray-600 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base">
        Experience the divine charm of Mathura & Vrindavan with a perfectly curated spiritual journey.
      </p>
      
      {/* RATING BADGES */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-4">
        <div className="bg-white px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
          <Star className="w-4 h-4 text-pink-500 fill-pink-500" />
          <span className="font-semibold text-sm">{PackageData.rating || "4.8"}</span>
        </div>
        <div className="bg-white px-3 py-1.5 rounded-full shadow-sm">
          <span className="text-sm text-gray-600">{PackageData.reviews || "120"} reviews</span>
        </div>
        <div className="bg-green-50 px-3 py-1.5 rounded-full hidden sm:block">
          <span className="text-sm text-green-700 font-medium">Bestseller</span>
        </div>
      </div>
    </div>

    {/* BOTTOM SECTION - Price & CTA */}
    <div className="p-6 lg:p-8 bg-gradient-to-r from-pink-600 to-rose-500 text-white">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="text-center sm:text-left">
          <p className="text-pink-100 text-xs uppercase tracking-wide">
            Special Offer
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
            <span className="text-3xl lg:text-4xl font-bold flex items-center">
              <IndianRupee className="w-7 h-7" />
              {PackageData.price}
            </span>
            <span className="text-pink-100">/person</span>
          </div>
          <p className="text-xs text-pink-100 mt-1">
            Limited time offer • No hidden charges
          </p>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-pink-600 font-bold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
        >
          Book Now →
        </button>
      </div>
    </div>
  </div>
</div>




      </section>
    </>
  );
}