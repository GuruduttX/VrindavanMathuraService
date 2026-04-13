"use client";

import Image from "next/image";
import { MapPin, ArrowRight, Clock, Users } from "lucide-react";
import Link from "next/link";

const tours = [
  {
    title: "Govardhan Barsana Tour",
    location: "Vrindavan",
    price: "₹1,999",
    duration: "1 Day",
    groupSize: "2–15",
    badge: "Bestseller",
    image: "/images/Home/prem-mandir.jpg",
  },
  {
    title: "Mathura Vrindavan Tour",
    location: "Mathura",
    price: "₹2,499",
    duration: "1 Day",
    groupSize: "2–20",
    badge: "Popular",
    image: "/images/Home/Mandir.jpg",
  },
  {
    title: "Braj 2 Day Tour",
    location: "Braj",
    price: "₹4,999",
    duration: "2 Days",
    groupSize: "4–12",
    badge: "Premium",
    image: "/images/Home/Mandir-new.jpg",
  },
  {
    title: "Delhi to Vrindavan Trip",
    location: "Delhi",
    price: "₹3,499",
    duration: "1 Day",
    groupSize: "2–10",
    badge: "New",
    image: "/images/Home/prem-mandir.jpg",
  },
];

const badgeColors: Record<string, string> = {
  Bestseller: "bg-amber-500 text-white",
  Popular: "bg-orange-500 text-white",
  Premium: "bg-yellow-500 text-white",
  New: "bg-green-500 text-white",
};

export default function PopularTours() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            ✦ Handpicked For You
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Popular Tour Packages
          </h2>

          {/* SVG Divider */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <svg width="80" height="12" viewBox="0 0 80 12" fill="none">
              <line x1="0" y1="6" x2="28" y2="6" stroke="#fdba74" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="36" cy="6" r="3" fill="#f97316"/>
              <circle cx="44" cy="6" r="2" fill="#fbbf24"/>
              <circle cx="50" cy="6" r="1.5" fill="#fde68a"/>
            </svg>
            <p className="text-gray-400 text-sm">Discover the most loved spiritual journeys</p>
            <svg width="80" height="12" viewBox="0 0 80 12" fill="none">
              <circle cx="30" cy="6" r="1.5" fill="#fde68a"/>
              <circle cx="36" cy="6" r="2" fill="#fbbf24"/>
              <circle cx="44" cy="6" r="3" fill="#f97316"/>
              <line x1="52" y1="6" x2="80" y2="6" stroke="#fdba74" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Scroll container */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory premium-scrollbar scrollbar-hide -mx-4 px-4">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="min-w-[290px] sm:min-w-[310px] snap-start group flex-shrink-0"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden border border-amber-100/80 shadow-md shadow-amber-100/60 hover:shadow-xl hover:shadow-amber-200/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col">

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  {/* Badge */}
                  <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold ${badgeColors[tour.badge]}`}>
                    {tour.badge}
                  </div>

                  {/* Price chip on image */}
                  <div className="absolute top-3 right-3 bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1 rounded-lg">
                    <span className="text-white font-extrabold text-sm">{tour.price}</span>
                  </div>

                  {/* Location on image bottom */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white/85 text-xs font-medium">
                    <MapPin size={11} />
                    {tour.location}
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-base leading-snug mb-3">
                    {tour.title}
                  </h3>

                  {/* Meta row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Clock size={12} />
                      {tour.duration}
                    </div>
                    <div className="w-px h-3 bg-gray-200" />
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Users size={12} />
                      {tour.groupSize} people
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-amber-100 via-orange-200 to-amber-100 mb-4" />

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wide">Starting from</div>
                      <div className="text-amber-600 font-extrabold text-lg leading-tight">{tour.price}</div>
                    </div>
                    <button className="flex cursor-pointer items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 text-white font-semibold text-xs shadow-md shadow-amber-200/60 hover:shadow-lg hover:shadow-amber-300/60 hover:-translate-y-0.5 transition-all duration-200">
                      View Tour
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-10">
          
          <Link href={"/tour-packages"} className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border-2 border-amber-400 text-amber-600 font-semibold text-sm hover:bg-amber-50 transition-colors duration-200">
            View All Packages
            <ArrowRight size={15} />
          </Link>
        
        </div>

      </div>
    </section>
  );
}