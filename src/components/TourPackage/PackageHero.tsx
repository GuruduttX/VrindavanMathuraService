"use client";

import Image from "next/image";
import { Star, IndianRupee, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PackageHero({ PackageData }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <section className="relative w-full px-6 py-14 lg:px-16 bg-gradient-to-br from-pink-50 via-rose-50 to-white">

        {/* Breadcrumb */}
        <nav className="text-sm text-pink-600 mb-6">
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

        {/* BOTTOM CONTENT */}
        <div className="mx-auto max-w-7xl mt-10 flex flex-col lg:flex-row justify-between items-start gap-10">

          {/* LEFT TITLE */}
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {PackageData.title}
            </h1>

            <p className="mt-3 text-gray-600 max-w-xl">
              Experience the divine charm of Mathura & Vrindavan with a perfectly curated spiritual journey.
            </p>

            <div className="flex items-center gap-2 mt-4 text-sm">
              <Star className="w-4 h-4 text-pink-500 fill-pink-500" />
              <span className="font-semibold">{PackageData.rating || "4.8"}</span>
              <span className="text-gray-600">
                ({PackageData.reviews || "120"}) reviews
              </span>
            </div>
          </div>

          {/* PRICE CARD */}
          <div className="bg-white/80 backdrop-blur-xl border border-pink-100 shadow-2xl rounded-2xl px-8 py-6 flex flex-col items-center text-center">

            <p className="text-xs uppercase tracking-wide text-gray-500">
              Starting from
            </p>

            <div className="flex items-end gap-1 mt-2">
              <span className="text-4xl font-extrabold text-pink-600 flex items-center">
                <IndianRupee size={30} />
                {PackageData.price}
              </span>
              <span className="text-sm text-gray-500 mb-1">/person</span>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="mt-6 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              Book Now →
            </button>

            <span className="mt-3 text-xs text-gray-500">
              No hidden charges • Best price guarantee
            </span>
          </div>
        </div>

      </section>
    </>
  );
}