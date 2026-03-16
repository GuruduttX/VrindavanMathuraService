"use client";

import Image from "next/image";
import { useState } from "react";
import { CarTaxiFront, MapPin, Users } from "lucide-react";

type TaxiType = "sedan" | "suv" | "luxury";

const taxis = {
  sedan: {
    name: "Sedan Taxi",
    baseFare: 15,
    image: "/images/Home/taxi1.jpg",
    capacity: 4,
  },
  suv: {
    name: "SUV Taxi",
    baseFare: 20,
    image: "/images/Home/taxi2.jpg",
    capacity: 6,
  },
  luxury: {
    name: "Luxury Taxi",
    baseFare: 30,
    image: "/images/Home/taxi3.jpg",
    capacity: 4,
  },
};

export default function TaxiShowCase() {
  const [taxiType, setTaxiType] = useState<TaxiType>("sedan");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [distance, setDistance] = useState(10);
  const [passengers, setPassengers] = useState(1);

  const taxi = taxis[taxiType];

  const estimatedFare = taxi.baseFare * distance;

  return (
    <section className="relative py-28 overflow-hidden">

      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>

      {/* glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-pink-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-400/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Taxi image */}
        <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl group">

          <Image
            src={taxi.image}
            alt={taxi.name}
            fill
            className="object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
            {taxi.name}
          </div>

        </div>

        {/* Booking widget */}
        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
            Book Your Taxi
          </h2>

          {/* taxi type */}
          <div className="flex gap-3 mb-6">

            {Object.keys(taxis).map((type) => (
              <button
                key={type}
                onClick={() => setTaxiType(type as TaxiType)}
                className={`px-5 py-2 rounded-full font-medium transition ${
                  taxiType === type
                    ? "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {taxis[type as TaxiType].name}
              </button>
            ))}

          </div>

          {/* pickup */}
          <div className="flex items-center border rounded-xl px-3 py-2 mb-4">
            <MapPin size={18} className="text-gray-400"/>
            <input
              type="text"
              placeholder="Pickup location"
              value={pickup}
              onChange={(e)=>setPickup(e.target.value)}
              className="flex-1 outline-none px-2"
            />
          </div>

          {/* drop */}
          <div className="flex items-center border rounded-xl px-3 py-2 mb-4">
            <MapPin size={18} className="text-gray-400"/>
            <input
              type="text"
              placeholder="Drop location"
              value={drop}
              onChange={(e)=>setDrop(e.target.value)}
              className="flex-1 outline-none px-2"
            />
          </div>

          {/* distance slider */}
          <div className="mb-6">

            <label className="text-sm text-gray-500">
              Distance: {distance} km
            </label>

            <input
              type="range"
              min={1}
              max={100}
              value={distance}
              onChange={(e)=>setDistance(Number(e.target.value))}
              className="w-full mt-2 accent-pink-600"
            />

          </div>

          {/* passengers */}
          <div className="flex items-center justify-between mb-6">

            <div className="flex items-center gap-2 text-gray-600">
              <Users size={18}/>
              Passengers
            </div>

            <div className="flex gap-2">

              <button
                onClick={()=>setPassengers(Math.max(1, passengers-1))}
                className="px-3 py-1 border rounded"
              >
                -
              </button>

              <span>{passengers}</span>

              <button
                onClick={()=>setPassengers(Math.min(taxi.capacity, passengers+1))}
                className="px-3 py-1 border rounded"
              >
                +
              </button>

            </div>

          </div>

          {/* estimated fare */}
          <div className="text-xl font-semibold text-pink-600 mb-6">
            Estimated Fare: ₹{estimatedFare}
          </div>

          <button className="
          w-full
          py-3
          rounded-full
          text-white
          font-medium
          flex items-center
          justify-center
          gap-2
          bg-gradient-to-r
          from-pink-500
          via-fuchsia-500
          to-purple-600
          hover:scale-105
          transition
          ">
            <CarTaxiFront size={18}/>
            Book Taxi Now
          </button>

        </div>

      </div>
    </section>
  );
}