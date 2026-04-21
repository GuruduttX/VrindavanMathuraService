"use client";

import Image from "next/image";
import { Star, IndianRupee, Clock , ChevronRight, Home} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";
import QuickEnquiry from "@/utils/QuickQuery";

export default function PackageHero({ PackageData }: any) {
  const [isFrormOpen, setIsFrormOpen] = useState(false);

  return (
    <>
      <CommonEnquiryForm
        open={isFrormOpen}
        onClose={() => setIsFrormOpen(false)}
        defaultService="Taxi Booking"
      />
      {/* <TourEnquiryPopup open={isOpen} onClose={() => setIsOpen(false)} /> */}
      <section className="relative w-full  mt-6">
        <nav className="pt-24 pb-4 px-4 sm:px-8 lg:px-20">
          <ol className="flex items-center gap-1 text-sm flex-wrap md:ml-29">
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
                href="/tour-packages/#tours"
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
                <div
                  key={i}
                  className="relative h-20 sm:h-24 rounded-xl overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    priority
                    className="object-cover"
                  />
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
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden shadow-md group"
                >
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

          {/* Info Card */}
          <div className="mt-6 bg-white rounded-3xl md:shadow-xl border border-orange-100 overflow-hidden">
            {/* Title */}
            <div className="p-5 sm:p-7 bg-gradient-to-br from-orange-50/50 to-white">
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                {PackageData.title}
              </h1>

              <p className="mt-2 text-gray-500 text-sm sm:text-base text-center lg:text-left max-w-2xl lg:mx-0 mx-auto">
                Experience the divine charm of Mathura & Vrindavan with a
                perfectly curated spiritual journey.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-4">
                <div className="bg-white px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold text-sm">
                    {PackageData.rating || "4.8"}
                  </span>
                </div>

                <div className="bg-white px-3 py-1.5 rounded-full shadow-sm">
                  <span className="text-sm text-gray-600">
                    {PackageData.reviews || "120"} reviews
                  </span>
                </div>

                <div className="bg-green-50 px-3 py-1.5 rounded-full">
                  <span className="text-sm text-green-700 font-medium">
                    Bestseller
                  </span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="p-4 sm:p-7 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white relative overflow-hidden">
              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Orbs */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-amber-400/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-400/30 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div className="w-full sm:w-auto">
                  <p className="text-orange-100/80 text-[10px] sm:text-xs uppercase tracking-widest font-semibold">
                    Special Offer
                  </p>

                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0 mt-1">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                      Get Special Custom Pricing
                    </span>
                    <span className="text-white/70 text-xs sm:text-sm">
                      /person
                    </span>
                  </div>

                  <p className="text-[10px] sm:text-xs text-white/70 mt-1 font-medium">
                    Limited time offer • No hidden charges
                  </p>
                </div>

                <div className="w-full md:hidden mt-1">
                  <QuickEnquiry />
                </div>

                <button
                  onClick={() => setIsFrormOpen(true)}
                  className="hidden md:block w-full sm:w-auto shrink-0 px-8 py-3.5 rounded-xl bg-white text-orange-600 font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  Enquire Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}