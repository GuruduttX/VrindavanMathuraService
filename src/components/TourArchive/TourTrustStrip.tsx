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
    <section className="bg-[linear-gradient(180deg,#FFF7ED_0%,#ffffff_100%)] border-t border-orange-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 py-6 sm:py-10">

        {/* MOBILE */}
        <div className="md:hidden flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[130px] bg-white rounded-2xl p-3 shadow-md border border-orange-100 text-center"
              >
                <div className="h-9 w-9 mx-auto flex items-center justify-center rounded-xl 
                bg-[linear-gradient(145deg,#7A2E00,#A84010,#E8821A)] text-white shadow-lg mb-2">
                  <Icon size={16} />
                </div>

                <h4 className="font-bold text-[#7A2E00] text-xs leading-tight">
                  {item.title}
                </h4>

                <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">
                  {item.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group"
              >
                <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-2xl 
                bg-orange-50 text-[#A84010] shadow-sm group-hover:bg-[#A84010] group-hover:text-white transition-all duration-300">
                  <Icon size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-[#7A2E00] text-base">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
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