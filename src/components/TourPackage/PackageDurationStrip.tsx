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
    <section className="relative py-14 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto">

        {/* Floating Duration Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center px-6 py-3 mb-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold text-lg shadow-lg"
        >
          {duration}
        </motion.div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Animated Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-6 left-0 h-1 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"
          />

          <div className="relative flex flex-wrap md:flex-nowrap justify-between gap-10">

            {breakdown.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >

                {/* Node */}
                <div className="w-5 h-5 bg-pink-500 rounded-full border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300" />

                {/* Days */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                  className="mt-4 text-4xl font-extrabold text-gray-800"
                >
                  {item.days}
                </motion.span>

                {/* Label */}
                <span className="text-xs text-gray-500 mt-1">
                  Days in
                </span>

                <span className="text-sm font-semibold text-gray-900">
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