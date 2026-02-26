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
  const [year, setYear] = useState("");

  useEffect(() => {
    // setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative mt-40">

      {/* TEMPLE SILHOUETTE DIVIDER */}
      {/* <div className="absolute top-0 left-0 w-full -translate-y-full">
        <svg viewBox="0 0 1440 120" className="w-full h-24 fill-pink-500">
          <path d="M0,80L80,64L160,80L240,48L320,80L400,64L480,80L560,32L640,80L720,64L800,80L880,48L960,80L1040,64L1120,80L1200,48L1280,80L1360,64L1440,80L1440,120L0,120Z"/>
        </svg>
      </div> */}


      {/* BACKGROUND */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#7a1f5c] via-[#c2185b] to-[#ff4da6] text-white">

        {/* animated mesh glow */}
        <div className="absolute w-[600px] h-[600px] bg-pink-400/30 blur-[160px] rounded-full -top-40 -left-40 animate-pulse"/>
        <div className="absolute w-[600px] h-[600px] bg-fuchsia-300/30 blur-[160px] rounded-full -bottom-40 -right-40 animate-pulse delay-1000"/>


        {/* subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />


        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-10">

          {/* TOP */}
          <div className="grid lg:grid-cols-12 gap-12">

            {/* BRAND */}
            <div className="lg:col-span-5">

              <h2 className="text-3xl font-semibold tracking-tight">
                Vrindavan Travels
              </h2>

              <p className="mt-4 text-white/80 max-w-md leading-relaxed">
                Premium spiritual travel experiences in Vrindavan.
                Luxury stays, trusted taxi services, and curated divine tours.
              </p>


              {/* SOCIAL */}
              <div className="flex gap-4 mt-6">

                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <div
                    key={i}
                    className="group cursor-pointer"
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white hover:text-pink-600 transition duration-300 group-hover:scale-110">
                      <Icon size={18}/>
                    </div>
                  </div>
                ))}

              </div>

            </div>



            {/* LINKS */}
            <div className="lg:col-span-2">

              <h3 className="font-medium mb-4 text-white/90">
                Services
              </h3>

              <ul className="space-y-3 text-white/70">

                {[
                  "Tour Packages",
                  "Taxi Booking",
                  "Hotel Booking",
                  "Custom Tours",
                ].map((item, i) => (
                  <li key={i}>
                    <a className="group flex items-center gap-2 hover:text-white transition">
                      {item}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition"
                      />
                    </a>
                  </li>
                ))}

              </ul>

            </div>



            {/* COMPANY */}
            <div className="lg:col-span-2">

              <h3 className="font-medium mb-4 text-white/90">
                Company
              </h3>

              <ul className="space-y-3 text-white/70">

                {[
                  "About",
                  "Contact",
                  "Privacy",
                  "Terms",
                ].map((item, i) => (
                  <li key={i}>
                    <a className="group flex items-center gap-2 hover:text-white transition">
                      {item}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition"
                      />
                    </a>
                  </li>
                ))}

              </ul>

            </div>



            {/* CONTACT CARD */}
            <div className="lg:col-span-3">

              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl">

                <h3 className="font-medium mb-4">
                  Contact
                </h3>

                <div className="space-y-3 text-white/80 text-sm">

                  <div className="flex gap-3">
                    <MapPin size={16}/>
                    Vrindavan, Uttar Pradesh
                  </div>

                  <div className="flex gap-3">
                    <Phone size={16}/>
                    +91 9876543210
                  </div>

                  <div className="flex gap-3">
                    <Mail size={16}/>
                    info@vrindavantravels.com
                  </div>

                </div>

              </div>

            </div>

          </div>



          {/* NEWSLETTER */}
          <div className="mt-16 border border-white/20 bg-white/5 backdrop-blur-xl rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">

            <div>
              <h3 className="text-xl font-medium">
                Receive exclusive Vrindavan tour offers
              </h3>
              <p className="text-white/70 text-sm mt-1">
                No spam. Only premium travel deals.
              </p>
            </div>


            <div className="flex w-full md:w-auto">

              <input
                className="px-5 py-3 rounded-l-xl bg-white text-black outline-none w-full md:w-72"
                placeholder="Enter your email"
              />

              <button className="px-6 py-3 rounded-r-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:scale-105 transition font-medium">
                Subscribe
              </button>

            </div>

          </div>



          {/* BOTTOM */}
          <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">

            <div>
              © {year} Vrindavan Travels. All rights reserved.
            </div>

            <div className="flex gap-6 mt-4 md:mt-0">

              <span className="hover:text-white cursor-pointer transition">
                Sitemap
              </span>

              <span className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}