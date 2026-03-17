"use client";

import React from "react";
import Image from "next/image";
import {
    Route,
    CheckCircle,
    XCircle,
    MapPin,
    Car,
    Clock,
} from "lucide-react";

const LeftReviewSection = () => {
    return (
        <div className="lg:col-span-2 space-y-8">

            {/* JOURNEY ROUTE CARD */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-3xl p-6 shadow-xl">

                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Route size={20} /> Journey Route
                </h2>

                <div className="flex items-center gap-4">

                    <div>
                        <p className="font-semibold text-lg">Mumbai</p>
                        <span className="text-sm opacity-80">Pickup</span>
                    </div>

                    <div className="flex-1 border-dashed border-t border-white/60 relative">
                        <div className="absolute left-1/2 -top-2 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    </div>

                    <div>
                        <p className="font-semibold text-lg">Pune</p>
                        <span className="text-sm opacity-80">Destination</span>
                    </div>

                </div>

                <p className="mt-4 text-sm opacity-90">
                    14 Feb • 10:00 AM • 150 km • 3h 20m
                </p>

            </div>

            {/* TRAVELLER DETAILS */}
            <div className="bg-white rounded-3xl shadow-lg p-6 border border-pink-100">

                <h2 className="text-lg font-semibold mb-4">
                    Traveller Details
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                    <input
                        placeholder="Full Name"
                        className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
                    />

                    <input
                        placeholder="Mobile Number"
                        className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
                    />

                </div>

                <input
                    placeholder="Email Address"
                    className="border rounded-xl px-4 py-3 mt-4 w-full focus:ring-2 focus:ring-pink-400 outline-none"
                />

            </div>

            {/* CAB DETAILS */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100 flex gap-6 hover:shadow-xl transition">

                <Image
                    src="/cars/sedan.png"
                    alt="cab"
                    width={130}
                    height={80}
                    className="object-contain"
                />

                <div className="flex-1">

                    <h3 className="text-lg font-semibold">
                        Sedan Premium
                    </h3>

                    <div className="flex gap-4 text-sm text-gray-600 mt-2">
                        <span>4 Seats</span>
                        <span>AC</span>
                        <span>Diesel</span>
                    </div>

                    <div className="mt-3 flex gap-2 text-sm text-pink-600 font-medium">
                        Best Seller • Comfortable Ride
                    </div>

                </div>

            </div>

            {/* INCLUSIONS */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100">

                <h2 className="text-lg font-semibold mb-4">
                    Inclusions
                </h2>

                <div className="grid md:grid-cols-2 gap-3 text-sm">

                    <div className="flex gap-2">
                        <CheckCircle className="text-green-500" size={18} />
                        Driver Allowances
                    </div>

                    <div className="flex gap-2">
                        <CheckCircle className="text-green-500" size={18} />
                        Toll Taxes Included
                    </div>

                    <div className="flex gap-2">
                        <CheckCircle className="text-green-500" size={18} />
                        Parking Charges
                    </div>

                    <div className="flex gap-2">
                        <CheckCircle className="text-green-500" size={18} />
                        Fuel Charges
                    </div>

                    <div className="flex gap-2">
                        <CheckCircle className="text-green-500" size={18} />
                        VIP Darshan Assistance
                    </div>

                    <div className="flex gap-2">
                        <CheckCircle className="text-green-500" size={18} />
                        Local Guide in Vrindavan
                    </div>

                </div>

            </div>

            {/* EXCLUSIONS */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100">

                <h2 className="text-lg font-semibold mb-4">
                    Exclusions
                </h2>

                <div className="grid md:grid-cols-2 gap-3 text-sm">

                    <div className="flex gap-2">
                        <XCircle className="text-red-500" size={18} />
                        Personal Expenses
                    </div>

                    <div className="flex gap-2">
                        <XCircle className="text-red-500" size={18} />
                        Extra Sightseeing
                    </div>

                    <div className="flex gap-2">
                        <XCircle className="text-red-500" size={18} />
                        Temple Entry Tickets
                    </div>

                </div>

            </div>

            {/* TRIP ITINERARY */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100">

                <h2 className="text-lg font-semibold mb-6">
                    Trip Itinerary
                </h2>

                <div className="space-y-6">

                    {/* STEP 1 */}
                    <div className="flex gap-4">

                        <div className="w-10 h-10 bg-pink-100 flex items-center justify-center rounded-full">
                            <MapPin className="text-pink-600" />
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                Pickup & Journey Start
                            </h3>

                            <p className="text-sm text-gray-600">
                                Pickup at 10:00 AM from your location in Mumbai.
                                Driver arrives 10 minutes early.
                            </p>
                        </div>

                    </div>

                    {/* STEP 2 */}
                    <div className="flex gap-4">

                        <div className="w-10 h-10 bg-purple-100 flex items-center justify-center rounded-full">
                            <Car className="text-purple-600" />
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                Comfortable Highway Journey
                            </h3>

                            <p className="text-sm text-gray-600">
                                Enjoy a smooth drive with AC comfort and verified driver.
                            </p>
                        </div>

                    </div>

                    {/* STEP 3 */}
                    <div className="flex gap-4">

                        <div className="w-10 h-10 bg-pink-100 flex items-center justify-center rounded-full">
                            <Clock className="text-pink-600" />
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                Arrival at Destination
                            </h3>

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