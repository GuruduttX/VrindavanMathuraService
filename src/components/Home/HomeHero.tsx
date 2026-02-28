"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, Car, Hotel, Search } from "lucide-react";

export default function HomeHero() {
    const [service, setService] = useState("tour");

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-100">

            
            {/* background decorative blur */}
            <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-pink-400/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-fuchsia-400/30 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center mt-15">

                {/* LEFT CONTENT */}
                <div className="z-10">

                    {/* badge */}
                    <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur px-4 py-2 rounded-full shadow text-pink-600 font-medium mb-6 cursor-pointer hover:shadow-xl hover:shadow-pink-200 transition">
                        🪷 Explore Divine Vrindavan
                    </div>

                    {/* heading */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
                        Discover{" "}
                        <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 text-transparent bg-clip-text">
                            Vrindavan Tour Packages
                        </span>
                        <br />
                        Taxi & Hotel Booking
                    </h1>

                    <p className="mt-4 text-gray-600 text-lg">
                        Book spiritual tours, comfortable taxis, and premium hotels in
                        Vrindavan with trusted local service.
                    </p>

                    {/* SERVICE SELECTOR */}
                    <div className="flex gap-3 mt-8">

                        <button
                            onClick={() => setService("tour")}
                            className={`px-5 py-3 rounded-3xl flex items-center gap-2 font-medium transition cursor-pointer ${service === "tour"
                                    ? "bg-pink-600 text-white shadow-lg"
                                    : "bg-white hover:bg-pink-50"
                                }`}
                        >
                            <MapPin size={18} />
                            Tour Packages
                        </button>

                        <button
                            onClick={() => setService("taxi")}
                            className={`px-5 py-3 rounded-3xl flex items-center gap-2 font-medium transition cursor-pointer ${service === "taxi"
                                    ? "bg-pink-600 text-white shadow-lg"
                                    : "bg-white hover:bg-pink-50"
                                }`}
                        >
                            <Car size={18} />
                            Taxi Service
                        </button>

                        <button
                            onClick={() => setService("hotel")}
                            className={`px-5 py-3 rounded-3xl flex items-center gap-2 font-medium transition cursor-pointer ${service === "hotel"
                                    ? "bg-pink-600 text-white shadow-lg"
                                    : "bg-white hover:bg-pink-50"
                                }`}
                        >
                            <Hotel size={18} />
                            Hotels
                        </button>

                    </div>

                    {/* SEARCH BOX */}
                    <div className="mt-6 bg-white/70 backdrop-blur-lg shadow-xl rounded-4xl p-3 flex items-center">

                        <input
                            type="text"
                            placeholder={
                                service === "tour"
                                    ? "Search Vrindavan Tour Packages..."
                                    : service === "taxi"
                                        ? "Enter Pickup Location..."
                                        : "Search Hotels in Vrindavan..."
                            }
                            className="flex-1 px-4 py-3 outline-none bg-transparent"
                        />

                        <button className="bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white px-6 py-3 rounded-3xl flex items-center gap-2 hover:scale-105 transition cursor-pointer">
                            <Search size={18} />
                            Search
                        </button>

                    </div>

                    {/* trust indicators */}
                    <div className="flex gap-20 mt-10 text-sm text-gray-600">

                        <div>
                            <div className="font-extrabold text-pink-600 text-xl cursor-pointer">5000+</div>
                            Travelers
                        </div>

                        <div>
                            <div className="font-extrabold text-pink-600 text-xl cursor-pointer">200+</div>
                            Hotels
                        </div>

                        <div>
                            <div className="font-extrabold text-pink-600 text-xl cursor-pointer">24/7</div>
                            Taxi Service
                        </div>

                    </div>

                </div>

                {/* RIGHT IMAGE LAYOUT */}
                <div className="relative h-[500px] hidden lg:block">

                    {/* main image */}
                    <div className="absolute top-0 left-25 w-65 h-90 rounded-3xl overflow-hidden shadow-2xl rotate-[-6deg]">
                        <Image
                            src="/images/Home/prem-mandir.jpg"
                            fill
                            className="object-cover"
                            alt="Vrindavan temple"
                        />
                    </div>

                    {/* image */}
                    <div className="absolute bottom-0 left-0 w-65 h-80 rounded-3xl overflow-hidden shadow-xl rotate-6">
                        <Image
                            src="/images/Home/Mandir.jpg"
                            fill
                            className="object-cover"
                            alt="Prem Mandir"
                        />
                    </div>

                    {/* image */}
                    <div className="absolute top-35 right-1 w-65 h-80 rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/Home/Mandir-new.jpg"
                            fill
                            className="object-cover"
                            alt="Hotel"
                        />
                    </div>

                    {/* floating card */}
                    <div className="absolute bottom-2 right-0 bg-white p-4 rounded-2xl shadow-xl">
                        <div className="text-sm text-gray-500">
                            Starting from
                        </div>
                        <div className="text-xl font-bold text-pink-600">
                            ₹1,999
                        </div>
                    </div>

                </div>

                

            </div>
            
            
        </section>
    );
}