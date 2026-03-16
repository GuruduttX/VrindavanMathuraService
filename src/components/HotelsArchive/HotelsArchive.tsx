"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Wifi, Car, Utensils, MapPin, Hotel } from "lucide-react";

const hotels = [
  {
    id: 1,
    name: "Radha Palace Hotel",
    location: "Near Prem Mandir",
    rating: 4.6,
    price: 1299,
    type: "luxury",
    amenities: ["wifi", "parking"],
    image: "/images/Home/hotel.webp",
  },
  {
    id: 2,
    name: "Vrindavan Residency",
    location: "Banke Bihari Temple Road",
    rating: 4.4,
    price: 1099,
    type: "budget",
    amenities: ["wifi"],
    image: "/images/Home/hotel.webp",
  },
  {
    id: 3,
    name: "Divine Stay Vrindavan",
    location: "Iskcon Temple Area",
    rating: 4.7,
    price: 1499,
    type: "luxury",
    amenities: ["wifi", "restaurant"],
    image: "/images/Home/hotel.webp",
  },
  {
    id: 4,
    name: "Temple View Hotel",
    location: "Govardhan Road",
    rating: 4.3,
    price: 999,
    type: "budget",
    amenities: ["wifi"],
    image: "/images/Home/hotel.webp",
  },
];

export default function HotelsArchive() {

  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState(5000);
  const [wifi, setWifi] = useState(false);
  const [parking, setParking] = useState(false);
  const [restaurant, setRestaurant] = useState(false);

  const filteredHotels = hotels.filter((hotel) => {
    return (
      hotel.rating >= rating &&
      hotel.price <= price &&
      (!wifi || hotel.amenities.includes("wifi")) &&
      (!parking || hotel.amenities.includes("parking")) &&
      (!restaurant || hotel.amenities.includes("restaurant"))
    );
  });

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* INTRO */}

        <div className="text-center mb-16">

          <h2 className="
          text-4xl md:text-5xl font-bold
          bg-gradient-to-r
          from-pink-500
          via-fuchsia-500
          to-purple-400
          bg-clip-text
          text-transparent
          ">
            Our Hotels in Vrindavan
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Comfortable stays near temples and peaceful places
            for your Vrindavan journey.
          </p>

        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-4 gap-10">

          {/* FILTERS */}

          <div className="
          sticky
          top-24
          bg-white
          rounded-3xl
          shadow-xl
          p-6
          space-y-8
          border border-gray-100
          ">

            <h3 className="text-xl font-semibold">
              Filter Hotels
            </h3>

            {/* PRICE */}

            <div>

              <p className="text-sm text-gray-500 mb-3">
                Price Range
              </p>

              <input
                type="range"
                min={500}
                max={5000}
                value={price}
                onChange={(e)=>setPrice(Number(e.target.value))}
                className="w-full accent-pink-500"
              />

              <p className="text-sm mt-2 text-gray-600">
                Up to ₹{price}
              </p>

            </div>

            {/* RATING */}

            <div>

              <p className="text-sm text-gray-500 mb-3">
                Rating
              </p>

              {[4,4.5].map((value)=>(
                <button
                  key={value}
                  onClick={()=>setRating(value)}
                  className="
                  flex items-center gap-2
                  w-full
                  px-3 py-2
                  rounded-lg
                  hover:bg-pink-50
                  transition
                  text-sm
                  "
                >
                  <Star size={16} className="text-yellow-500"/>
                  {value}+ Rating
                </button>
              ))}

            </div>

            {/* AMENITIES */}

            <div>

              <p className="text-sm text-gray-500 mb-3">
                Amenities
              </p>

              <label className="flex items-center gap-2 text-sm mb-2">
                <input
                  type="checkbox"
                  checked={wifi}
                  onChange={()=>setWifi(!wifi)}
                  className="accent-pink-500"
                />
                <Wifi size={16} className="text-pink-500"/>
                Free WiFi
              </label>

              <label className="flex items-center gap-2 text-sm mb-2">
                <input
                  type="checkbox"
                  checked={parking}
                  onChange={()=>setParking(!parking)}
                  className="accent-pink-500"
                />
                <Car size={16} className="text-pink-500"/>
                Parking
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={restaurant}
                  onChange={()=>setRestaurant(!restaurant)}
                  className="accent-pink-500"
                />
                <Utensils size={16} className="text-pink-500"/>
                Restaurant
              </label>

            </div>

          </div>

          {/* HOTEL LIST */}

          <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">

            {filteredHotels.map((hotel)=>(
              <motion.div
                key={hotel.id}
                whileHover={{y:-8}}
                className="
                bg-white
                rounded-3xl
                shadow-xl
                overflow-hidden
                group
                "
              >

                {/* IMAGE */}

                <div className="relative h-56 overflow-hidden">

                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm shadow flex items-center gap-1">

                    <Star size={14} className="text-yellow-500"/>
                    {hotel.rating}

                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-6">

                  <h3 className="text-lg font-semibold">
                    {hotel.name}
                  </h3>

                  <div className="flex items-center text-gray-500 text-sm mt-1">

                    <MapPin size={14} className="mr-1"/>
                    {hotel.location}

                  </div>

                  {/* AMENITIES */}

                  <div className="flex gap-4 mt-4 text-sm text-gray-600">

                    {hotel.amenities.includes("wifi") && (
                      <span className="flex items-center gap-1">
                        <Wifi size={14}/> WiFi
                      </span>
                    )}

                    {hotel.amenities.includes("parking") && (
                      <span className="flex items-center gap-1">
                        <Car size={14}/> Parking
                      </span>
                    )}

                    {hotel.amenities.includes("restaurant") && (
                      <span className="flex items-center gap-1">
                        <Utensils size={14}/> Restaurant
                      </span>
                    )}

                  </div>

                  {/* PRICE */}

                  <div className="flex items-center justify-between mt-6">

                    <span className="text-pink-600 font-semibold">
                      ₹{hotel.price} / night
                    </span>

                    <button className="
                    px-4 py-2
                    rounded-full
                    text-white
                    text-sm
                    bg-gradient-to-r
                    from-pink-500
                    via-fuchsia-500
                    to-purple-600
                    hover:scale-105
                    transition
                    ">
                      View Hotel
                    </button>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}