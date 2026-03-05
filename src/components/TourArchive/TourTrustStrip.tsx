"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Headphones, CreditCard } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Trusted Service",
    subtitle: "10+ years of experience",
  },
  {
    icon: MapPin,
    title: "Local Experts",
    subtitle: "Born & raised in Braj",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    subtitle: "Always here for you",
  },
  {
    icon: CreditCard,
    title: "Best Prices",
    subtitle: "No hidden charges",
  },
];

export default function TourTrustStrip() {
  return (
    <section className="bg-pink-200 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                {/* Icon Box */}
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-pink-50 text-pink-600 shadow-sm">
                  <Icon size={22} />
                </div>

                {/* Text */}
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}