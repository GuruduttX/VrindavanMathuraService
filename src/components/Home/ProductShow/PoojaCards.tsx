import Image from "next/image";
import { Star, MapPin, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function PoojaCard({ product }: any) {
  const discount = product.discountPrice && product.price > product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : null;

  const displayPrice = product?.discountPrice ?? product?.price;

  return (
    <div className="flex flex-col rounded-xl border border-stone-200 overflow-hidden bg-white">

      {/* Image */}
      <div className="relative h-[175px] bg-amber-100 flex-shrink-0">
        {product.heroImage?.image ? (
          <Image src={product.heroImage?.image} alt={product.heroImage?.alt || product.title}
            fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">🪔</div>
        )}
        <span className={`absolute top-2 left-2 text-xs font-medium px-2 py-1 rounded-md
          ${product.status === "published" ? "bg-green-100 text-green-800" : "bg-stone-100 text-stone-600"}`}>
           Available
        </span>
        <div className="absolute top-2 right-2 bg-white border border-stone-200 rounded-md
          px-2 py-1 flex items-center gap-1 text-xs font-medium">
          <Star size={12} className="fill-amber-400 text-amber-400" />
          {product.rating}
        </div>
      </div>

      {/* Temple strip */}
      <div className="flex items-center gap-1.5 px-4 py-2 bg-amber-50 border-b border-amber-200
        text-xs font-medium text-amber-800 truncate">
        <MapPin size={11} className="flex-shrink-0" />
        {product.temple}
        <span className="text-amber-300 mx-0.5">·</span>
        {product.location}
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-[15px] font-medium leading-snug">{product.title}</h3>
          {product.description && (
            <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {/* Duration */}
        {product?.duration && (
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-stone-500">
              <Clock size={11} /> {product.duration}
            </span>
          </div>
        )}

        {/* Star rating row */}
        {product?.rating && (
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={11}
                  className={parseFloat(product.rating) >= i
                    ? "fill-amber-400 text-amber-400"
                    : "text-amber-300 fill-none stroke-amber-300"} />
              ))}
            </div>
            <span className="text-xs font-medium">{product.rating}</span>
            {product.reviews && (
              <span className="text-xs text-stone-400">· {product.reviews.length} reviews</span>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-stone-100">
        <div>
          <p className="text-[10px] uppercase tracking-wide text-stone-400">Booking price</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-medium text-amber-700">
                ₹{displayPrice ? displayPrice.toLocaleString() : "0"}
            </span>
            {discount && (
              <>
                <span className="text-xs text-stone-400 line-through">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-[10px] bg-green-100 text-green-800 rounded px-1 py-0.5 font-medium">
                  {discount}% off
                </span>
              </>
            )}
          </div>
        </div>
        <Link href={`/pooja/${product.slug}`} className="bg-amber-400 text-amber-950 text-sm font-medium
          px-4 py-2 rounded-lg hover:bg-amber-500 transition-colors">
          View Page
        </Link>
      </div>
    </div>
  );
}