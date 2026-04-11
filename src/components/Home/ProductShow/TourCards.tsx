'use client'
import {  MapPin, Users, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";
import { SetStateAction } from "react";
import { motion } from "framer-motion"


export default function TourCard({ product , setOpen}: { product: any, setOpen : React.Dispatch<SetStateAction<boolean>> }) {
  console.log(product, "this is product highlight");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3 * 0.15 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="flex flex-col h-full rounded-[20px] border border-stone-200 overflow-hidden bg-white w-full max-w-sm"
      >
        {/* Hero Image */}
        <div className="relative h-52 bg-stone-100 flex-shrink-0">
          {product.heroImage?.image ? (
            <img
              src={product.heroImage.image}
              alt={product.heroImage?.alt || product.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl">
              🏔️
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-5 flex flex-col gap-4 ">
          {/* Title */}
          <h3 className="text-[22px] font-bold text-slate-900 leading-tight">
            {product.title}
          </h3>
          {/* Inclusions */}
          <div className="flex flex-wrap gap-1.5">
            {product.isStayIncluded && <Chip>Stay</Chip>}
            {product.isBreakfastIncluded && <Chip>Breakfast</Chip>}
            {product.isSightseeingIncluded && <Chip>Sightseeing</Chip>}
            {product.isTransferIncluded && <Chip>Transfer</Chip>}
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-stone-600 text-base">
            <MapPin size={18} className="text-amber-500" strokeWidth={2.5} />
            <span>
              {product.destination ||
                (product.routes && product.routes.destination)}
            </span>
          </div>

          {/* Duration & Audience Row */}
          <div className="flex items-center gap-6 text-stone-600 text-base">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-amber-500" strokeWidth={2.5} />
              <span>{product.days}-days</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-amber-500" strokeWidth={2.5} />
              <span>Ideal for Families & Elders</span>
            </div>
          </div>

          {/* Inclusions Grid (2x2) */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-2 mt-2 text-[15px] text-stone-700">
            {product.isTransferIncluded && (
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-500" />
                <span>AC Cab</span>
              </div>
            )}
            {product.isSightseeingIncluded && (
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-500" />
                <span>Local Guide</span>
              </div>
            )}
            {product.isStayIncluded && (
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-500" />
                <span>Stay Included</span>
              </div>
            )}
            {product.isBreakfastIncluded && (
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-500" />
                <span>Breakfast</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-4">
            <Link
              href={`/tour-packages/${product.duration}/${product.slug}`}
              className="flex-1 bg-amber-600 hover:bg-amber-600 text-white text-base font-semibold py-3 rounded-xl text-center transition-colors"
            >
              View Details
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="flex-1 border-[1.5px] border-amber-500 text-amber-600 hover:bg-amber-50 text-base font-semibold py-3 rounded-xl text-center transition-colors"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </motion.div>
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