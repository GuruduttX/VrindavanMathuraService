"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
    Route,
    CheckCircle,
    XCircle,
    MapPin,
    Car,
    Clock,
} from "lucide-react";


interface TaxiFeature {
  id: string;
  description: string;
  _id: string;
}

export interface Taxiinterface {
  _id: string;
  title: string;
  basePrice: number;
  seats: number;
  cabType: "Sedan" | "SUV" | "Hatchback" | string; // Use union types if you have fixed categories
  fuelType: "Petrol" | "Diesel" | "EV" | "CNG" | string;
  inclusions: TaxiFeature[];
  exclusions: TaxiFeature[];
  image: string;
  alt: string;
  createdAt: string; // Dates often arrive as ISO strings on the frontend
  updatedAt: string;
  __v: number;
  status: "published" | "draft" | string;
}

interface LeftReviewSectionProps {
  taxi: Taxiinterface;
}
const LeftReviewSection = ({ taxi }: LeftReviewSectionProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    pickUp: "",
    drop: "",
    phone: "",
    time: "" 
  })
  const [destination, setDestination] = useState("Your destination");
  const [pickUp, setPickUp] = useState("Your location");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setDestination(form.drop);
    setPickUp(form.pickUp);
    console.log(form);
    try {
      const response = await fetch(`/api/simbark`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            email: form.email,
            serviceType: `pickUp:- ${form.pickUp}, Drop:- ${form.drop}, PickUp Time:- ${form.time} "Enquiry from taxi Review page."`
          }),
        },
      );

      const data = await response.json();
      console.log(data)
      if(response.ok) {
        setSuccess(true);
        setTimeout(()=> setSuccess(false), 5000);
        setForm({
          name: "",
          email: "",
          phone: "",
          pickUp: "",
          drop: "",
          time: "",
        })
      }else {
        alert(data.message || "Failed to submit");
      }

    } catch (error) {
      console.log(error)
    }

  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="lg:col-span-2 space-y-8">
      {/* JOURNEY ROUTE CARD */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-3xl p-6 shadow-xl">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Route size={20} /> Journey Route
        </h2>

        <div className="flex items-center gap-4">
          <div>
            <p className="font-semibold text-lg">{pickUp}</p>
            <span className="text-sm opacity-80">Pickup</span>
          </div>

          <div className="flex-1 border-dashed border-t border-white/60 relative">
            <div className="absolute left-1/2 -top-2 w-4 h-4 bg-white rounded-full animate-pulse"></div>
          </div>

          <div>
            <p className="font-semibold text-lg">{destination}</p>
            <span className="text-sm opacity-80">Destination</span>
          </div>
        </div>
      </div>

      {/* TRAVELLER DETAILS */}
      <div className="bg-white rounded-3xl shadow-lg p-6 border border-amber-100">
        <h2 className="text-lg font-semibold mb-4">Traveller Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="Full Name"
              name="name"
              className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 outline-none"
              value={form.name}
              onChange={handleChange}
            />

            <input
              placeholder="Mobile Number"
              name="phone"
              className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 outline-none"
              value={form.phone}
              onChange={handleChange}
            />

            <input
              placeholder="Pick Up location"
              name="pickUp"
              className="border rounded-xl px-4 py-3 mt-4 w-full focus:ring-2 focus:ring-amber-400 outline-none"
              value={form.pickUp}
              onChange={handleChange}
            />

            <input
              placeholder="Drop location"
              name="drop"
              className="border rounded-xl px-4 py-3 mt-4 w-full focus:ring-2 focus:ring-amber-400 outline-none"
              value={form.drop}
              onChange={handleChange}
            />

            <input
              placeholder="Pick Up Time"
              name="time"
              className="border rounded-xl px-4 py-3 mt-4 w-full focus:ring-2 focus:ring-amber-400 outline-none"
              value={form.time}
              onChange={handleChange}
            />

            <input
              placeholder="Email"
              name="email"
              className="border rounded-xl px-4 py-3 mt-4 w-full focus:ring-2 focus:ring-amber-400 outline-none"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          {success && (
            <p className="text-green-600 text-sm font-medium mx-auto">
              Enquiry sent successfully!
            </p>
          )}
          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            Book Taxi
          </button>
        </form>
      </div>

      {/* CAB DETAILS */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-amber-100 flex gap-6 hover:shadow-xl transition">
        <Image
          src={taxi.image}
          alt="cab"
          width={130}
          height={80}
          className="object-contain"
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold">{taxi.title}</h3>

          <div className="flex gap-4 text-sm text-gray-600 mt-2">
            <span>{taxi.seats} seats</span>
            <span>AC</span>
            <span>{taxi.cabType}</span>
          </div>

          <div className="mt-3 flex gap-2 text-sm text-amber-600 font-medium">
            Best Seller • Comfortable Ride
          </div>
        </div>
      </div>

      {/* INCLUSIONS */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-amber-100">
        <h2 className="text-lg font-semibold mb-4">Inclusions</h2>

        <div className="grid md:grid-cols-2 gap-3 text-sm">
          {taxi.inclusions.map((item) => (
            <div key={item._id} className="flex gap-2">
              <CheckCircle className="text-green-500" size={18} />
              {item.description}
            </div>
          ))}
        </div>
      </div>

      {/* EXCLUSIONS */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-amber-100">
        <h2 className="text-lg font-semibold mb-4">Exclusions</h2>

        <div className="grid md:grid-cols-2 gap-3 text-sm">
          {taxi.exclusions.map((item, idx) => (
            <div key={item._id} className="flex gap-2">
              <XCircle className="text-red-500" size={18} />
              {item.description}
            </div>
          ))}
        </div>
      </div>

      {/* TRIP ITINERARY */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-amber-100">
        <h2 className="text-lg font-semibold mb-6">Trip Itinerary</h2>

        <div className="space-y-6">
          {/* STEP 1 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-amber-100 flex items-center justify-center rounded-full">
              <MapPin className="text-amber-600" />
            </div>

            <div>
              <h3 className="font-semibold">Pickup & Journey Start</h3>

              <p className="text-sm text-gray-600">
                Pickup at 10:00 AM from your location in Mumbai. Driver arrives
                10 minutes early.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-orange-100 flex items-center justify-center rounded-full">
              <Car className="text-orange-600" />
            </div>

            <div>
              <h3 className="font-semibold">Comfortable Highway Journey</h3>

              <p className="text-sm text-gray-600">
                Enjoy a smooth drive with AC comfort and verified driver.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-amber-100 flex items-center justify-center rounded-full">
              <Clock className="text-amber-600" />
            </div>

            <div>
              <h3 className="font-semibold">Arrival at Destination</h3>

              <p className="text-sm text-gray-600">
                Reach Pune safely in approximately 3 hours 20 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftReviewSection;