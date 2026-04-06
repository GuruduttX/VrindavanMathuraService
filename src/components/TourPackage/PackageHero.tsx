"use client";

import Image from "next/image";
import { Star, IndianRupee, Clock , ChevronRight, Home} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import TourEnquiryPopup from "@/utils/TourEnquiryPopUp";

export default function PackageHero({ PackageData }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TourEnquiryPopup open={isOpen} onClose={()=>setIsOpen(false)} />
      <section className="relative w-full  mt-6">

    <nav className="pt-24 pb-4 px-4 sm:px-8 lg:px-20">
        <ol className="flex items-center gap-1 text-sm flex-wrap">
  
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-gray-400 hover:text-[#A84010] transition-colors duration-200"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>
  
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
  
          <li>
            <Link
              href="/pooja-packages"
              className="text-gray-400 hover:text-[#A84010] transition-colors duration-200"
            >
              Packages
            </Link>
          </li>
  
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
  
          <li className="flex items-center gap-1.5">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-[#A84010] border border-orange-100 max-w-[200px] sm:max-w-xs truncate"
              title={PackageData.title}
            >
              {PackageData.title}
            </span>
          </li>
  
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto px-4  pb-14">

        {/* Mobile/Tablet */}
        <div className="lg:hidden flex flex-col gap-2">
          <div className="relative aspect-[4/3] sm:h-[320px] rounded-3xl overflow-hidden">
            <Image
              src={PackageData.heroImage?.image}
              alt={PackageData.heroImage?.alt}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-[#A84010] shadow flex items-center gap-1.5">
              <Clock size={13} />
              {PackageData.duration || "3 Days / 2 Nights"}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {PackageData.childImages?.map((item: any, i: number) => (
              <div key={i} className="relative h-20 sm:h-24 rounded-xl overflow-hidden">
                <Image src={item.image} alt={item.alt} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-4 h-[460px]">
          <div className="relative col-span-2 rounded-3xl overflow-hidden shadow-xl group">
            <Image
              src={PackageData.heroImage?.image}
              alt={PackageData.heroImage?.alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7A2E00]/60 via-[#A84010]/20 to-transparent" />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-[#A84010] shadow flex items-center gap-2">
              <Clock size={16} />
              {PackageData.duration || "3 Days / 2 Nights"}
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {PackageData.childImages?.map((item: any, i: number) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shadow-md group">
                <Image src={item.image} alt={item.alt} fill className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/25" />
              </div>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden">

          {/* Title */}
          <div className="p-5 sm:p-7 bg-gradient-to-br from-orange-50/50 to-white">
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              {PackageData.title}
            </h1>

            <p className="mt-2 text-gray-500 text-sm sm:text-base text-center lg:text-left max-w-2xl lg:mx-0 mx-auto">
              Experience the divine charm of Mathura & Vrindavan with a perfectly curated spiritual journey.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-4">
              <div className="bg-white px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold text-sm">{PackageData.rating || "4.8"}</span>
              </div>

              <div className="bg-white px-3 py-1.5 rounded-full shadow-sm">
                <span className="text-sm text-gray-600">{PackageData.reviews || "120"} reviews</span>
              </div>

              <div className="bg-green-50 px-3 py-1.5 rounded-full">
                <span className="text-sm text-green-700 font-medium">Bestseller</span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="p-5 sm:p-7 bg-gradient-to-r from-[#7A2E00] to-[#E8821A] text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

              <div className="text-center sm:text-left">
                <p className="text-orange-100 text-xs uppercase tracking-wide">Special Offer</p>

                <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
                  <span className="text-3xl font-bold flex items-center">
                    <IndianRupee className="w-6 h-6" />
                    {PackageData.discountPrice ?? PackageData.price}
                  </span>

                  {PackageData.discountPrice && (
                    <span className="text-orange-200 line-through text-lg">
                      ₹{PackageData.price}
                    </span>
                  )}

                  <span className="text-orange-100 text-sm">/person</span>
                </div>

                <p className="text-xs text-orange-100 mt-1">
                  Limited time offer • No hidden charges
                </p>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#A84010] font-bold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer"
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