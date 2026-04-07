"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";
import QuickEnquiry from "@/utils/QuickQuery";
export default function HotelsHero() {

  const [location, setLocation] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);


  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-amber-100 pt-12">
        {/* Background blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[90px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[100px] -z-10" />

        <div className="max-w-[1300px] mx-auto px-6 lg:px-20 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 font-semibold text-sm px-4 py-2 rounded-full mb-6"
            >
              🏨 Explore Luxury Stays
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[42px] lg:text-[50px] font-bold leading-tight text-gray-900"
            >
              Find the Perfect Hotel
              <br />
              in <span className="text-amber-600">Vrindavan</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-5 text-gray-500 max-w-[500px] text-lg"
            >
              Discover luxury hotels, spiritual stays, and budget friendly
              accommodations near the sacred temples of Vrindavan and Mathura.
            </motion.p>

            {/* Category Pills */}
            {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-3 mt-6"
          >
            {[
              "Luxury Hotels",
              "Budget Hotels",
              "Ashrams",
              "Family Stays",
              "Riverside Hotels",
            ].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-4 py-2 rounded-full bg-white border border-amber-100 text-gray-600 text-sm font-medium hover:bg-amber-50 hover:text-amber-600 transition"
              >
                {item}
              </motion.button>
            ))}
          </motion.div> */}

            {/* SEARCH BAR */}
            {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 bg-white rounded-2xl shadow-xl border border-amber-100 p-4 grid md:grid-cols-5 gap-3"
          >

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />

            <input
              type="date"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200"
            />

            <input
              type="date"
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200"
            />

            <input
              type="text"
              placeholder="Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl px-6 py-3 shadow hover:shadow-lg transition"
            >
              Search
            </motion.button>

          </motion.div> */}
            <QuickEnquiry />

            {/* Quick Filters */}
            {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-3 mt-6 text-sm"
          >
            {[
              "⭐ Top Rated",
              "💰 Budget Friendly",
              "🛎 Premium",
              "🌅 Yamuna View",
            ].map((f) => (
              <motion.button
                key={f}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-full bg-white border border-amber-100 text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition"
              >
                {f}
              </motion.button>
            ))}
          </motion.div> */}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4 mt-10 flex-col md:flex-row"
            >
              <div className="flex gap-8 justify-center">
              <Stat number="200+" label="Hotels" />
              <Stat number="5K+" label="Guests" />
              <Stat number="₹999" label="Starting From" />
              </div>

              {/* Enquire button */}
              <button
                className="
                px-7
                py-3
                rounded-full
                border
                border-amber-500
                text-amber-600
                hover:bg-amber-50
                transition
                flex items-center gap-2
                relative
                justify-center
                 z-10
                "
                onClick={() => setIsFormOpen(true)}
              >
                Enquire Now
                <Phone size={18} />
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE FLOATING CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] hidden lg:block"
          >
            <div className="absolute top-0 left-24 float-slow">
              <HotelCard
                image="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                name="Radha Palace"
                rating="4.9"
                price="3499"
              />
            </div>

            <div className="absolute top-40 left-0 float-medium">
              <HotelCard
                image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
                name="Nidhivan Resort"
                rating="4.7"
                price="2199"
              />
            </div>

            <div className="absolute bottom-0 right-10 float-fast">
              <HotelCard
                image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
                name="Yamuna Riverside"
                rating="4.8"
                price="4299"
              />
            </div>
          </motion.div>
        </div>

        {/* Wavy Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[120px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L80,213.3C160,203,320,181,480,176C640,171,800,181,960,197.3C1120,213,1280,235,1360,245.3L1440,256L1440,320L0,320Z"
            ></path>
          </svg>
        </div>

      </section>
        {/* 3. The Form Component */}
        <CommonEnquiryForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          defaultService="Hotel Booking"
        />
    </>
  );
}

function HotelCard({ image, name, rating, price }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -5 }}
      className="w-[260px] bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="relative h-[150px]">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-sm">{name}</h3>

        <div className="flex justify-between items-center mt-2">
          <span className="text-yellow-500 text-sm">★ {rating}</span>
          <span className="text-amber-600 font-bold">₹{price}</span>
        </div>
      </div>
    </motion.div>
  );
}

function Stat({ number, label }: any) {
  return (
    <div>
      <p className="text-2xl font-bold text-amber-600">{number}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}