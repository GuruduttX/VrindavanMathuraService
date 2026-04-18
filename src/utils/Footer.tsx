"use client";

import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function LuxuryFooter() {
  const [year, setYear] = useState("2025");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="relative mt-5">
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100">
        {/* Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-300/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-300/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-200/50 rounded-full blur-3xl pointer-events-none" />

        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.12) 1px, transparent 1px), linear-gradient(to right, rgba(249,115,22,0.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Diagonal shimmer */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(105deg, transparent, transparent 80px, rgba(251,146,60,0.3) 80px, rgba(251,146,60,0.3) 81px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
          {/* TOP GRID */}
          <div className="grid lg:grid-cols-12 gap-12">
            {/* BRAND */}
            <div className="lg:col-span-5">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-orange-200 border border-orange-300 text-orange-700 mb-3">
                ✦ Divine Travel
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-amber-900">
                Vrindavan Travels
              </h2>

              <p className="mt-4 max-w-md leading-relaxed text-amber-800/70">
                Premium spiritual travel experiences in Vrindavan. Luxury stays,
                trusted taxi services, and curated divine tours.
              </p>

              <div className="flex gap-3 mt-6">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-200 border border-orange-300 text-orange-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                  >
                    <Icon size={17} />
                  </button>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold mb-5 text-orange-600 uppercase tracking-wider text-sm">
                Services
              </h3>
              <ul className="space-y-3 text-amber-700">
                {[
                  "Tour Packages",
                  "Taxi Booking",
                  "Hotel Booking",
                  "Custom Tours",
                ].map((item) => (
                  <li key={item}>
                    <a className="group flex items-center gap-1.5 hover:text-orange-500 transition-colors cursor-pointer text-sm">
                      {item}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold mb-5 text-orange-600 uppercase tracking-wider text-sm">
                Company
              </h3>
              <ul className="space-y-3 text-amber-700">
                {["About", "Contact", "Privacy", "Terms"].map((item) => (
                  <li key={item}>
                    <a className="group flex items-center gap-1.5 hover:text-orange-500 transition-colors cursor-pointer text-sm">
                      {item}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT CARD */}
            <div className="lg:col-span-3">
              <h3 className="font-semibold mb-5 text-orange-600 uppercase tracking-wider text-sm">
                Contact Us
              </h3>
              <div className="bg-orange-100 border border-orange-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-start gap-3 text-sm text-amber-800">
                  <MapPin
                    size={15}
                    className="text-orange-500 mt-0.5 shrink-0"
                  />
                  Vrindavan, Uttar Pradesh
                </div>
                <div className="flex items-center gap-3 text-sm text-amber-800">
                  <Phone size={15} className="text-orange-500 shrink-0" />
                  +91 9876543210
                </div>
                <div className="flex items-center gap-3 text-sm text-amber-800">
                  <Mail size={15} className="text-orange-500 shrink-0" />
                  info@vrindavantravels.com
                </div>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="mt-14 bg-orange-100 border border-orange-200 rounded-2xl p-7 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-lg font-semibold text-amber-900">
                Get exclusive Vrindavan tour offers
              </h3>
              <p className="text-amber-600 text-sm mt-1">
                No spam. Only premium travel deals.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                className="px-4 py-3 rounded-l-xl bg-white border border-orange-200 border-r-0 text-amber-900 placeholder-amber-300 outline-none w-full md:w-64 text-sm"
                placeholder="Enter your email"
              />
              <button className="px-5 py-3 rounded-r-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-10 pt-6 border-t border-orange-200 flex flex-col md:flex-row justify-between items-center text-amber-600 text-sm">
            <div>© {year} Vrindavan Travels. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              {["Sitemap", "Privacy Policy"].map((label) => (
                <span
                  key={label}
                  className="hover:text-orange-500 cursor-pointer transition-colors"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
