'use client'
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";
import TourEnquiryPopup from "@/utils/TourEnquiryPopUp";
import { Star, MapPin, Moon } from "lucide-react";
import Link from "next/link";
import { useState, SetStateAction } from "react";


export default function TourCard({ product , setOpen}: { product: any, setOpen : React.Dispatch<SetStateAction<boolean>> }) {
  console.log(product, "this is product highlight");

  return (
    <>
      <div className="flex flex-col rounded-xl border border-stone-200 overflow-hidden bg-white">
      
      {/* Image */}
      <div className="relative h-48 bg-amber-100 flex-shrink-0">
        {product.heroImage?.image ? (
          <img src={product.heroImage.image} alt={product.heroImage?.alt || product.title}
            className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">🏔️</div>
        )}
        <span className={`absolute top-2 left-2 text-xs font-medium px-2 py-1 rounded-md
          ${product.status === "published" ? "bg-green-100 text-green-800" : "bg-stone-100 text-stone-600"}`}>
          Available
        </span>
        <div className="absolute top-2 right-2 bg-white border border-stone-200 rounded-md px-2 py-1
          flex items-center gap-1 text-xs font-medium">
          <Star size={12} className="fill-amber-400 text-amber-400" />
          {product.rating || "—"}
        </div>
      </div>

      {/* Duration strip */}
      <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 border-b border-amber-200
        text-xs font-medium text-amber-800">
        <Moon size={12} />
        {product.days} Days · {product.nights} Nights
        <span className="ml-auto text-amber-600">{product.destination}</span>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-[15px] font-medium leading-snug">{product.title}</h3>
          {product.routes && (
            <p className="flex items-center gap-1 text-xs text-stone-500 mt-1">
              <MapPin size={11} />
              {product.routes.source} → {product.routes.destination}
            </p>
          )}
        </div>

        {/* Inclusions */}
        <div className="flex flex-wrap gap-1.5">
          {product.isStayIncluded && <Chip>Stay</Chip>}
          {product.isBreakfastIncluded && <Chip>Breakfast</Chip>}
          {product.isSightseeingIncluded && <Chip>Sightseeing</Chip>}
          {product.isTransferIncluded && <Chip>Transfer</Chip>}
        </div>

        {/* Highlights */}
        {product.highlights?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {product.highlights.slice(0, 3).map((h: any) => (
              <span key={h._id} className="text-[11px] bg-stone-100 text-stone-600
                rounded px-2 py-0.5 border border-stone-200">
                {h.description}
              </span>
            ))}
            {product.highlights.length > 3 && (
              <span className="text-[11px] text-stone-400">+{product.highlights.length - 3} more</span>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-stone-100">
        <div onClick={()=>setOpen(true)}>
          <p className="text-[10px] uppercase tracking-wide text-stone-400">Interested?</p>
          <p className="text-lg font-medium text-amber-700">Book Now</p>
          <p className="text-[11px] text-stone-400">Contact us for pricing</p>
        </div>
        <Link href={`/tour-packages/${product.duration}/${product.slug}`}  className="bg-amber-400 text-amber-950 text-sm font-medium px-4 py-2 rounded-lg
          hover:bg-amber-500 transition-colors">
          View Package
        </Link>
      
      </div>
     </div>
    </>
    
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] bg-green-50 text-green-800 rounded px-2 py-0.5 flex items-center gap-1">
      {children}
    </span>
  );
}