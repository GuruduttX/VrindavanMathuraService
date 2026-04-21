"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, CarTaxiFront, Sparkles } from "lucide-react";
import CommonEnquiryForm from "./CommanEnquiryForm";
import { useState } from "react";


const trustItems = [
  {
    icon: ShieldCheck,
    title: "Trusted & Verified",
    description: "All tours, drivers, hotels and puja services are fully verified for a safe journey.",
    color: "from-orange-500 to-amber-500",
    light: "bg-orange-50 border-orange-100",
    iconBg: "from-orange-500 to-amber-400",
    dot: "#f97316",
  },
  {
    icon: Users,
    title: "5000+ Happy Travelers",
    description: "Thousands of pilgrims trust us for well-organised and comfortable Vrindavan trips.",
    color: "from-amber-500 to-yellow-400",
    light: "bg-amber-50 border-amber-100",
    iconBg: "from-amber-500 to-yellow-400",
    dot: "#f59e0b",
  },
  {
    icon: CarTaxiFront,
    title: "Professional Drivers",
    description: "Local experienced drivers with clean AC vehicles for smooth temple-to-temple travel.",
    color: "from-yellow-400 to-amber-500",
    light: "bg-yellow-50 border-yellow-100",
    iconBg: "from-yellow-400 to-amber-500",
    dot: "#eab308",
  },
  {
    icon: Sparkles,
    title: "Authentic Experiences",
    description: "Temple pujas, guided darshan and divine rituals arranged by seasoned local experts.",
    color: "from-amber-500 to-orange-500",
    light: "bg-orange-50 border-orange-100",
    iconBg: "from-amber-500 to-orange-500",
    dot: "#f97316",
  },
];

export default function HomeTrustBuildingSection() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
     <CommonEnquiryForm open={open} onClose={()=>setOpen(false)} />
       <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-amber-50/40 to-white">

      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-200/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-200/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            ✦ Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Why Travelers Trust Us
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <svg width="80" height="12" viewBox="0 0 80 12" fill="none">
              <line x1="0" y1="6" x2="26" y2="6" stroke="#fdba74" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="34" cy="6" r="3" fill="#f97316"/>
              <circle cx="43" cy="6" r="2" fill="#fbbf24"/>
              <circle cx="50" cy="6" r="1.5" fill="#fde68a"/>
            </svg>
            <p className="text-gray-400 text-sm">Reliable services with local expertise</p>
            <svg width="80" height="12" viewBox="0 0 80 12" fill="none">
              <circle cx="30" cy="6" r="1.5" fill="#fde68a"/>
              <circle cx="37" cy="6" r="2" fill="#fbbf24"/>
              <circle cx="46" cy="6" r="3" fill="#f97316"/>
              <line x1="54" y1="6" x2="80" y2="6" stroke="#fdba74" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>

        {/* Tree structure */}
        <div className="flex flex-col items-center">

          {/* Root node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative z-10 flex items-center gap-3 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 text-white px-7 py-3.5 rounded-2xl shadow-lg shadow-amber-300/40 font-bold text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8" stroke="white" strokeWidth="1.5" strokeDasharray="3 2"/>
              <circle cx="9" cy="9" r="3" fill="white"/>
            </svg>
            Vrindavan Travel — Our Promise
          </motion.div>

          {/* Trunk line down */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "top" }}
            className="w-px h-8 bg-gradient-to-b from-amber-400 to-amber-300"
          />

          {/* Horizontal branch bar */}
          <div className="relative w-full max-w-4xl hidden md:flex items-center justify-center">

            {/* Full horizontal line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "center" }}
              className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"
            />

            {/* 4 vertical drops */}
            {trustItems.map((_, i) => (
              <div key={i} className="flex-1 flex justify-center">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.35, delay: 0.6 + i * 0.1 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "top" }}
                  className="w-px h-8 bg-amber-300"
                />
              </div>
            ))}
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-16 w-full max-w-5xl mt-0 md:-mt-0">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative cursor-pointer"
                  onClick={()=>setOpen(true)}
                >
                  {/* Mobile: vertical connector above card */}
                  <div className="md:hidden flex justify-center mb-3 cursor-pointer">
                    <div className="flex flex-col items-center gap-0">
                      <div className="w-px h-5 bg-amber-300" />
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                    </div>
                  </div>

                  <div className={`relative bg-white border ${item.light} rounded-2xl p-5 shadow-md hover:shadow-xl hover:shadow-amber-100/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden`}>

                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color}`} />

                    {/* Icon */}
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center mb-4 shadow-md`}>
                      <Icon size={20} className="text-white" />
                    </div>

                    <h3 className="font-bold text-gray-900 text-sm mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {item.description}
                    </p>

                    {/* Hover glow */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.04]`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
    </>
   
  );
}