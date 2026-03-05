"use client";

import { Heart, Star, PhoneCall, Users } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "3 Million+",
    desc: "Happy travelers from 70+ countries.",
  },
  {
    icon: Star,
    title: "4.8 / 5",
    desc: "Top-rated experiences on Google & TripAdvisor.",
  },
  {
    icon: Heart,
    title: "Curated with Care",
    desc: "Thoughtfully designed spiritual journeys.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Support",
    desc: "Assistance before, during & after travel.",
  },
];

export default function ProductRatings() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-3xl border border-pink-100 bg-white shadow-sm overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className={`p-10 text-center ${
                    i !== features.length - 1
                      ? "border-b md:border-b-0 lg:border-r border-pink-100"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}