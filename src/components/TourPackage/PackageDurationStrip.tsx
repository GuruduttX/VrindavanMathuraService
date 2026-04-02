"use client";

import { motion } from "framer-motion";

interface DurationItem {
  id: string;
  days: number;
  place: string;
}

interface PackageDurationStripProps {
  duration: string;
  breakdown: DurationItem[];
}

export default function PackageDurationStrip({
  duration,
  breakdown,
}: PackageDurationStripProps) {
  return (
    <section className="relative py-14 px-6 overflow-hidden bg-[linear-gradient(180deg,#FFF7ED_0%,#ffffff_60%,#FFF7ED_100%)]">
      <div className="max-w-7xl mx-auto">

        {/* 🔶 Duration Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center px-6 py-3 mb-10 rounded-full 
          bg-[linear-gradient(145deg,#7A2E00_0%,#A84010_40%,#E8821A_100%)] 
          text-white font-semibold text-lg shadow-md shadow-orange-200"
        >
          {duration}
        </motion.div>

        {/* 📱 Mobile Timeline */}
        <div className="flex flex-col gap-0 md:hidden">
          {breakdown.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              {/* Node + Line */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-[#E8821A] rounded-full border-4 border-white shadow-md mt-1" />
                {index < breakdown.length - 1 && (
                  <div className="w-0.5 h-10 bg-gradient-to-b from-[#E8821A] to-[#FED7AA]" />
                )}
              </div>

              {/* Content */}
              <div className="pb-6">
                <span className="text-3xl font-extrabold text-[#7A2E00]">
                  {item.days}
                </span>
                <span className="text-xs text-gray-500 ml-1">days in</span>
                <p className="text-sm font-semibold text-gray-800 leading-tight">
                  {item.place}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 💻 Desktop Timeline */}
        <div className="hidden md:block relative overflow-x-auto pb-2">
          <div className="relative flex gap-10 w-max min-w-full">

            {/* Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute top-[10px] left-0 h-1 
              bg-gradient-to-r from-[#A84010] via-[#D4621A] to-[#E8821A] rounded-full"
            />

            {breakdown.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group shrink-0 w-28 cursor-pointer"
              >
                {/* Dot */}
                <div className="w-5 h-5 bg-[#E8821A] rounded-full border-4 border-white shadow-md 
                group-hover:scale-110 group-hover:shadow-orange-300 transition-all duration-300" />

                {/* Day */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="mt-4 text-4xl font-extrabold text-[#7A2E00]"
                >
                  {item.days}
                </motion.span>

                <span className="text-xs text-gray-500 mt-1">Days in</span>

                {/* Place */}
                <span className="text-sm font-semibold text-gray-800 leading-tight">
                  {item.place}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}