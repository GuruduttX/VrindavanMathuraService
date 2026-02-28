"use client";

import { Star, BadgeCheck } from "lucide-react";

export default function PackageTestimonials({ PackageData }: any) {
  const testimonials = [
    ...(PackageData?.testimonials || []),
    ...(PackageData?.testimonials || []), // duplicate for seamless loop
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-14">

        {/* LEFT – SUMMARY */}
        <div className="space-y-6">
          <p className="text-sm font-semibold text-pink-600 tracking-wide">
            Guest Reviews
          </p>

          <h2 className="text-3xl font-semibold text-gray-900">
            Trusted by Hundreds of Devotees
          </h2>

          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold text-gray-900">
              4.8
            </span>

            <div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-pink-500 fill-pink-500"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Based on 180+ journeys
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT – INFINITE SCROLL */}
        <div className="lg:col-span-2 relative">

          <div className="overflow-hidden">
            <div className="flex gap-8 infinite-scroll">

              {testimonials.map((t: any, index: number) => (
                <div
                  key={index}
                  className="min-w-[320px] max-w-[320px] bg-white border border-pink-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">

                    <div className="h-10 w-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-semibold">
                      {t.name?.charAt(0) || "G"}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 text-sm">
                          {t.name || "Guest"}
                        </p>

                        <BadgeCheck className="w-4 h-4 text-pink-600" />
                      </div>

                      <p className="text-xs text-gray-500">
                        {t.location || "India"}
                      </p>
                    </div>

                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-pink-500 fill-pink-500"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-sm text-gray-700 leading-relaxed">
                    “{t.description ||
                      "Very peaceful and well-managed spiritual experience."}”
                  </p>

                </div>
              ))}

            </div>
          </div>

          {/* Gradient Fade Edges */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-pink-50 to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />

        </div>
      </div>
    </section>
  );
}