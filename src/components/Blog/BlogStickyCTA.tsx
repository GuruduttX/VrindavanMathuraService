"use client";

import Link from "next/link";
import Image from "next/image";

export default function BlogStickyCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-pink-100">

      {/* Top Image */}
      <div className="relative h-60 w-full">
        <Image
          src="/images/blog (2).webp"
          alt="Mathura Vrindavan Tour"
          fill
          className="object-cover"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <h4 className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg leading-snug">
          Plan Your Divine Journey
        </h4>
      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-sm text-gray-600 leading-relaxed">
          Book complete Mathura & Vrindavan tour packages, trusted hotels,
          comfortable taxis, and sacred pooja services — all arranged with care.
        </p>

        {/* Button */}
        <Link href="/contact">
          <button className="mt-6 w-full rounded-full bg-gradient-to-r from-pink-600 to-rose-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-300/40">
            Send Enquiry
          </button>
        </Link>

      </div>
    </div>
  );
}