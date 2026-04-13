"use client";
import { Star, MapPin, Clock, Users, Coffee, Eye, Car, BedDouble } from "lucide-react";
import Link from "next/link";
import { SetStateAction } from "react";

export default function TourCard({
  product,
  setOpen,
}: {
  product: any;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const inclusions = [
    { key: "isStayIncluded", label: "Stay", Icon: BedDouble },
    { key: "isBreakfastIncluded", label: "Breakfast", Icon: Coffee },
    { key: "isSightseeingIncluded", label: "Sightseeing", Icon: Eye },
    { key: "isTransferIncluded", label: "Transfer", Icon: Car },
  ];

  return (
    <Link
      href={`/tour-packages/${product.duration}/${product.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-stone-200
      transition-all duration-300 hover:-translate-y-1
      hover:shadow-[0_10px_40px_rgba(255,140,0,0.15)] cursor-pointer"
    >
      {/* ── Image ── */}
      <div className="relative h-52 flex-shrink-0 overflow-hidden">
        {product.heroImage?.image ? (
          <img
            src={product.heroImage.image}
            alt={product.heroImage?.alt || product.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full bg-stone-100 flex items-center justify-center">
            <MapPin size={32} className="text-stone-300" />
          </div>
        )}

        {/* Overlay (depth) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80" />

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>

        {/* top-left badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.category && (
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/90 text-stone-700 backdrop-blur-sm">
              {product.category}
            </span>
          )}
          {product.originalPrice && product.price && (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-600 text-white shadow-md">
              {Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) * 100
              )}
              % OFF
            </span>
          )}
        </div>

        {/* duration pill */}
        <div
          className="absolute bottom-3 right-3 flex items-center gap-1.5
          bg-white/95 text-stone-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm backdrop-blur"
        >
          <Clock size={11} className="text-amber-500" />
          {product.days} Days {product.nights} Nights
        </div>
      </div>

      {/* ── Body ── */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Title */}
        <div>
          <h3 className="text-[15px] font-semibold text-stone-800 leading-snug transition-colors duration-300 group-hover:text-orange-600">
            {product.title}
          </h3>

          {product.routes?.source && (
            <p className="flex items-center gap-1 text-xs text-stone-400 mt-1">
              <MapPin size={10} />
              {product.routes.source} → {product.routes.destination}
            </p>
          )}
        </div>

        {/* Destination pills */}
        {product.durationbreakdown?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {product.durationbreakdown.slice(0, 3).map((d: any) => (
              <span
                key={d.id}
                className="flex items-center gap-1 text-[11px] text-stone-500
                border border-stone-200 rounded-full px-2.5 py-0.5
                group-hover:border-orange-200 group-hover:text-orange-600 transition"
              >
                <MapPin size={9} className="text-orange-400" />
                {d.place}
              </span>
            ))}
          </div>
        )}

        {/* Inclusions */}
        <div className="flex items-center gap-4 pt-0.5">
          {inclusions.map(({ key, label, Icon }) => {
            const active = product[key];
            return (
              <div
                key={key}
                className={`flex items-center gap-1 transition ${
                  active
                    ? "text-stone-600 group-hover:text-orange-600"
                    : "text-stone-300"
                }`}
              >
                <Icon size={13} strokeWidth={1.5} />
                <span className="text-[11px]">{label}</span>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-stone-100" />

        {/* Rating + audience */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Star size={13} className="fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-stone-700">
              {product.rating || "—"}
            </span>
            {product.reviews && (
              <span className="text-xs text-stone-400">
                ({product.reviews})
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-xs text-stone-400">
            <Users size={12} strokeWidth={1.5} />
            Groups & Couples
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="flex gap-2.5 px-4 pb-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen(true);
          }}
          className="flex-1 py-2.5 rounded-xl border border-stone-200 text-sm font-medium
          text-stone-600 hover:border-orange-300 hover:text-orange-600
          transition active:scale-[0.97]"
        >
          Enquire Now
        </button>

        <div
          className="flex-1 py-2.5 rounded-xl bg-orange-600 text-white text-sm font-semibold
          text-center hover:bg-orange-700 transition active:scale-[0.97]"
        >
          View Tour
        </div>
      </div>
    </Link>
  );
}