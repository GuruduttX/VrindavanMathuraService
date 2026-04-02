"use client";
import { motion } from "framer-motion";
import {
  Star,
  Trophy,
  MapPin,
  DoorOpen,
  ShieldCheck,
  Wifi,
  Car,
  Utensils,
  Bath,
  Hotel,
} from "lucide-react";

export default function HotelDetailsSection({HotelData} : {HotelData : any}) {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-amber-50 to-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.6fr_1fr] gap-16 items-start">

        {/* LEFT SECTION */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* TITLE */}

          <h1 className="text-3xl font-bold text-gray-800">
            Radha Palace Hotel · Vrindavan
          </h1>

          <p className="text-gray-500 mt-2 flex items-center gap-2">
            <Star size={16} className="text-amber-500" />
            {HotelData.rating} · {HotelData.reviews} reviews · {HotelData.category}
          </p>

          {/* GUEST FAVORITE */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-8 bg-gradient-to-r from-amber-500 via-amber-500 to-orange-600 text-white rounded-2xl p-6 flex justify-between items-center shadow-xl"
          >
            <div>
              <p className="text-sm opacity-80">Guest Favourite</p>
              <p className="font-semibold text-lg">
                One of the most loved hotels in {HotelData.category}
              </p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold flex items-center gap-1 justify-center">
                <Star size={18} fill="white" /> 
              </p>
              <p className="text-xs opacity-80">231 Reviews</p>
            </div>
          </motion.div>

          {/* HOST */}

          <div className="mt-10 flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center font-semibold text-amber-600 text-lg">
              R
            </div>

            <div>
              <p className="font-semibold text-lg">
                Hosted by {HotelData.host}
              </p>
              <p className="text-sm text-gray-500">
                Superhost · 6 years hosting
              </p>
            </div>

          </div>


          {/* FEATURES */}

          <div className="mt-12 space-y-8 border-t pt-10">

            <Feature
              icon={<Trophy />}
              title="Top 10% of Vrindavan Hotels"
              desc="Highly rated for comfort and service"
            />

            <Feature
              icon={<DoorOpen />}
              title="Self Check-in"
              desc="Easy and flexible check-in experience"
            />

            <Feature
              icon={<MapPin />}
              title="Perfect Temple Location"
              desc="Just 5 minutes from Prem Mandir"
            />

            <Feature
              icon={<ShieldCheck />}
              title="Safe & Trusted Stay"
              desc="Verified hotel with premium guest service"
            />

          </div>


          {/* AMENITIES */}

          <div className="mt-14">

            <h3 className="text-xl font-semibold mb-6">
              What this place offers
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

              <Amenity icon={<Wifi />} title="Free WiFi" />
              <Amenity icon={<Car />} title="Free Parking" />
              <Amenity icon={<Utensils />} title="Pure Veg Restaurant" />
              <Amenity icon={<Bath />} title="Private Bathrooms" />
              <Amenity icon={<MapPin />} title="Temple View Rooms" />
              <Amenity icon={<ShieldCheck />} title="24×7 Security" />

            </div>

          </div>


          {/* DESCRIPTION */}

          <div className="mt-14 text-gray-600 leading-relaxed">

            <h3 className="text-xl font-semibold mb-4">
              About this stay
            </h3>

            <p>
              Radha Palace Hotel is a peaceful spiritual stay located near the
              famous temples of Vrindavan. Guests enjoy modern comfort with a
              divine atmosphere perfect for pilgrimage travellers.
            </p>

            <p className="mt-4">
              The hotel offers AC rooms, temple view balconies, vegetarian
              dining and guided tours to nearby sacred places.
            </p>

          </div>

        </motion.div>



        {/* RIGHT BOOKING CARD */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-28"
        >

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100"
          >

            <div className="flex items-end gap-2">

              <p className="text-3xl font-bold text-amber-600">
                ₹1,299
              </p>

              <span className="text-gray-500 text-sm">
                / night
              </span>

            </div>


            {/* DATE */}

            <div className="mt-6 border rounded-xl overflow-hidden">

              <div className="grid grid-cols-2">

                <div className="p-4 border-r">
                  <p className="text-xs text-gray-500">CHECK-IN</p>
                  <p className="text-sm font-semibold">10 April</p>
                </div>

                <div className="p-4">
                  <p className="text-xs text-gray-500">CHECK-OUT</p>
                  <p className="text-sm font-semibold">12 April</p>
                </div>

              </div>

              <div className="border-t p-4 flex justify-between">
                <p className="text-xs text-gray-500">GUESTS</p>
                <p className="text-sm font-semibold">2 Adults</p>
              </div>

            </div>


            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-amber-500 via-amber-500 to-orange-600 shadow-lg"
            >
              Reserve Now
            </motion.button>

            <p className="text-center text-xs text-gray-500 mt-3">
              You won’t be charged yet
            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}



function Feature({ icon, title, desc }: any) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex gap-4 items-start"
    >
      <div className="text-amber-500">{icon}</div>

      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </motion.div>
  );
}



function Amenity({ icon, title }: any) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="flex items-center gap-3 bg-white border p-4 rounded-xl shadow-sm"
    >
      <div className="text-amber-500">{icon}</div>
      <span className="text-sm font-medium">{title}</span>
    </motion.div>
  );
}