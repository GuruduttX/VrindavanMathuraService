"use client"
import Image from "next/image";
import { Star, Wifi, Coffee, Car } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";

export default function HotelCard({ product, setOpen }: any) {
  const scores = product.ratingSummary?.scores;
  

  return (
    <>
        <div className="flex flex-col rounded-xl  border border-stone-200 overflow-hidden bg-white">

      {/* Image */}
      <div className="relative h-[185px] bg-amber-100 flex-shrink-0">
        <Image src={product.image} alt={product.alt || product.title} fill className="object-cover" />
        <span className={`absolute top-2 left-2 text-xs font-medium px-2 py-1 rounded-md
          ${product.status === "published" ? "bg-green-100 text-green-800" : "bg-stone-100 text-stone-600"}`}>
         Available
        </span>
        <div className="absolute top-2 right-2 bg-white border border-stone-200 rounded-md
          px-2 py-1 flex items-center gap-1 text-xs font-medium">
          <Star size={12} className="fill-amber-400 text-amber-400" />
          {product.rating?.toFixed(1)}
          <span className="text-stone-400">({product.reviews})</span>
        </div>
      </div>

      {/* Category strip */}
      <div className="flex items-center justify-between px-4 py-2 bg-amber-50
        border-b border-amber-200 text-xs font-medium text-amber-800">
        <span>{product.category}</span>
        {product.duration && <span className="text-amber-600">{product.duration}</span>}
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-[15px] font-medium leading-snug">{product.title}</h3>
          {product.subcontent && (
            <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
              {product.subcontent}
            </p>
          )}
        </div>

        {/* Host */}
        {product.host && (
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <div className="w-[22px] h-[22px] rounded-full bg-amber-100 flex items-center
              justify-center text-[11px] font-medium text-amber-800 flex-shrink-0">
              {product.host.slice(0, 2).toUpperCase()}
            </div>
            Hosted by <span className="font-medium text-stone-700">{product.host}</span>
          </div>
        )}

        {/* Quick inclusions */}
        <div className="flex flex-wrap gap-1.5">
          {product.quickInclusions?.freeWifi && (
            <Chip icon={<Wifi size={11} />}>Free Wifi</Chip>
          )}
          {product.quickInclusions?.breakfast && (
            <Chip icon={<Coffee size={11} />}>Breakfast</Chip>
          )}
          {product.quickInclusions?.parking && (
            <Chip icon={<Car size={11} />}>Parking</Chip>
          )}
        </div>

        {/* Rating scores */}
        {scores && (
          <>
            <div className="h-px bg-stone-100" />
            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              {Object.entries(scores).map(([key, val]: any) => (
                <div key={key} className="flex items-center gap-1.5">
                  <span className="text-[10px] text-stone-400 w-[68px] capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                  <div className="flex-1 h-1 bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${(val / 5) * 100}%` }} />
                  </div>
                  <span className="text-[11px] font-medium text-amber-700 w-5 text-right">
                    {val.toFixed(1)}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3  border-t border-stone-100">
        <div onClick={()=>setOpen(true)}>
          <p className="text-[10px] uppercase tracking-wide text-stone-400">Interested?</p>
          <p className="text-lg font-medium text-amber-700">Book Now</p>
          <p className="text-[11px] text-stone-400">Contact us for pricing</p>
        </div>
        <Link href={`/hotels/${product.slug}`} className="bg-amber-400 text-amber-950 text-sm font-medium
          px-4 py-2 rounded-lg hover:bg-amber-500 transition-colors">
          View Hotel
        </Link>
      </div>
    </div>
    </>
  
  );
}

function Chip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 text-[11px] bg-green-50 text-green-800
      border border-green-200 rounded px-2 py-0.5">
      {icon}
      {children}
    </span>
  );
}