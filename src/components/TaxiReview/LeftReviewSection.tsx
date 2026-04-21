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
  ChevronDown,
  Coffee,
} from "lucide-react";
import Link from "next/link";


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

const itineraryData = [
  {
    id: 1,
    title: "Pickup & Journey Start",
    description:
      "Pickup at the scheduled time from your location. Our verified driver will arrive 10 minutes early to assist with your luggage.",
    icon: MapPin,
    colorTheme: "amber",
  },
  {
    id: 2,
    title: "Comfortable Highway Journey",
    description:
      "Enjoy a smooth, uninterrupted drive. Our cabs are equipped with premium AC and comfortable seating for a relaxing experience.",
    icon: Car,
    colorTheme: "orange",
  },
  {
    id: 3,
    title: "Refreshment Break (Optional)",
    description:
      "A quick 15-minute halt at a verified, hygienic highway food court for snacks and restroom use.",
    icon: Coffee,
    colorTheme: "amber",
  },
  {
    id: 4,
    title: "Arrival at Destination",
    description:
      "Reach your destination safely and on time. The driver will drop you exactly at your specified location.",
    icon: Clock,
    colorTheme: "orange",
  },
];
const LeftReviewSection = ({ taxi }: LeftReviewSectionProps) => {
  console.log(taxi);
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
  const [openStep, setOpenStep] = useState<number | null>(1);

  const toggleStep = (id: number) => {
    setOpenStep(openStep === id ? null : id);
  };

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
        setDestination(form.drop)
        setPickUp(form.pickUp)
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

  const checkFormFilled = () => {
    if(form.name == "" || form.phone == "" || form.email || form.pickUp || form.drop || form.time) {
      return false;
    }else {
      return true
    }
  }
  return (
    <div className="lg:col-span-2 space-y-8">
      <nav>
        <div className="flex items-center text-sm text-gray-400 mb-6">
          <Link
            href="/"
            className="hover:text-amber-500 transition-colors z-20"
          >
            Home
          </Link>
          <span className="mx-1">/</span>
          <Link
            href="/hotels"
            className="hover:text-amber-500 transition-colors z-20"
          >
            Taxi
          </Link>
          <span className="mx-1">/</span>
          <span className="text-amber-600 font-semibold">
            {taxi.title}
          </span>
        </div>
      </nav>
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
        <form onSubmit={handleSubmit} id="taxi-booking-form">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                placeholder="Full Name"
                required
                name="name"
                className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition placeholder-transparent bg-transparent"
                value={form.name}
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1.5 text-xs text-gray-500 transition-all pointer-events-none 
                peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 
                peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-500"
              >
                Full Name *
              </label>
            </div>
            <div className="relative">
              <input
                placeholder="Mobile Number"
                required
                name="phone"
                className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition placeholder-transparent bg-transparent"
                value={form.phone}
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1.5 text-xs text-gray-500 transition-all pointer-events-none 
                peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 
                peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-500"
              >
                Phone number
              </label>
            </div>
            <div className="relative">
              <input
                placeholder="Pick Up location"
                required
                name="pickUp"
                className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition placeholder-transparent bg-transparent"
                value={form.pickUp}
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1.5 text-xs text-gray-500 transition-all pointer-events-none 
                peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 
                peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-500"
              >
                Pickup Location
              </label>
            </div>
            <div className="relative">
              <input
                placeholder="Drop location"
                required
                name="drop"
                className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition placeholder-transparent bg-transparent"
                value={form.drop}
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1.5 text-xs text-gray-500 transition-all pointer-events-none 
                peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 
                peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-500"
              >
                Drop Location
              </label>
            </div>
            <div className="relative">
              <input
                placeholder="Pick Up Time"
                required
                name="time"
                className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition placeholder-transparent bg-transparent"
                value={form.time}
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1.5 text-xs text-gray-500 transition-all pointer-events-none 
                peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 
                peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-500"
              >
                Pickup Time Mentation AM | PM
              </label>
            </div>
            <div className="relative">
              <input
                placeholder="Email"
                required
                name="email"
                className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition placeholder-transparent bg-transparent"
                value={form.email}
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1.5 text-xs text-gray-500 transition-all pointer-events-none 
                peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 
                peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-500"
              >
                Email
              </label>
            </div>
          </div>
          {success && (
            <p className="text-green-600 text-md text-bold font-medium p-5">
              Enquiry sent successfully!
            </p>
          )}
          {/* <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            Book Taxi
          </button> */}
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
      <div className="bg-white  rounded-3xl p-6 md:p-8 shadow-xl border border-amber-100  mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
          Trip Itinerary
        </h2>

        <div className="relative space-y-2">
          {/* Vertical connecting line for the timeline effect */}
          <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-amber-100 -z-10 hidden sm:block"></div>

          {itineraryData.map((step) => {
            const Icon = step.icon;
            const isOpen = openStep === step.id;

            return (
              <div
                key={step.id}
                className={`rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "bg-amber-50/50 shadow-sm ring-1 ring-amber-100/50"
                    : "hover:bg-gray-50"
                }`}
              >
                {/* Clickable Header */}
                <button
                  onClick={() => toggleStep(step.id)}
                  className="w-full text-left flex items-center justify-between p-4 group"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 shrink-0 flex items-center justify-center rounded-full transition-colors duration-300 ${
                        step.colorTheme === "amber"
                          ? "bg-amber-100 text-amber-600 group-hover:bg-amber-200"
                          : "bg-orange-100 text-orange-600 group-hover:bg-orange-200"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <h3
                      className={`font-semibold transition-colors duration-300 ${isOpen ? "text-amber-700" : "text-gray-800"}`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-amber-100/50"
                        : "bg-transparent text-gray-400 group-hover:text-amber-600"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Accordion Content with CSS Grid transition */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* Padding left matches the width of the icon + gap to align text nicely */}
                    <p className="text-sm text-gray-600 pb-5 px-4 sm:pl-[4.5rem] sm:pr-8 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftReviewSection;