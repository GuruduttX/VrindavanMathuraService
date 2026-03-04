"use client";

import Image from "next/image";
import Link from "next/link";

interface PoojaHeroProps {
  pooja: {
    title: string;
    shortDesc: string;
    duration: string;
    location: string;
    price: number;
    heroImage: string;
  };
}

export default function PoojaHero({ pooja }: PoojaHeroProps) {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={pooja.heroImage}
          alt={pooja.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Pink Divine Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#b91372]/90 via-[#e52e71]/80 to-[#ff6a88]/70" />

      {/* Soft Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-pink-300/20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white w-full">

        <div className="max-w-3xl">

          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-sm tracking-wide mb-6">
            Sacred Ritual in {pooja.location}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {pooja.title}
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
            {pooja.shortDesc}
          </p>

          {/* Quick Info Row */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/90">

            <div>
              <p className="font-semibold text-white">Duration</p>
              <p>{pooja.duration}</p>
            </div>

            <div>
              <p className="font-semibold text-white">Location</p>
              <p>{pooja.location}</p>
            </div>

            <div>
              <p className="font-semibold text-white">Starting From</p>
              <p>₹{pooja.price}</p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10 flex gap-5 flex-wrap">

            <Link href="#enquiry">
              <button className="
                px-10 py-4
                rounded-full
                bg-white
                text-pink-600
                font-semibold
                shadow-lg
                hover:shadow-2xl
                transition
              ">
                Book This Pooja
              </button>
            </Link>

            <Link href="/contact">
              <button className="
                px-10 py-4
                rounded-full
                border border-white
                text-white
                font-semibold
                hover:bg-white hover:text-pink-600
                transition
              ">
                Talk to Priest
              </button>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}