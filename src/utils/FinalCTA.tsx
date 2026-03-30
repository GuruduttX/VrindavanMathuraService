"use client";

import { motion } from "framer-motion";
import { CarTaxiFront, Hotel, MapPin } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="py-20">

            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* headline */}

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent"
                >
                    Begin Your Divine Journey
                    <span className="block text-gray-800 mt-2">
                        in Vrindavan Today
                    </span>
                </motion.h2>

                <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                    Book your spiritual tour, comfortable taxi rides, and peaceful
                    hotel stays with trusted local services in Vrindavan.
                </p>

                {/* CTA cards */}

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {/* Tour CTA */}

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="
            bg-white
            border border-gray-100
            rounded-3xl
            p-8
            shadow-lg
            hover:shadow-xl
            transition
            "
                    >

                        <MapPin className="mx-auto text-pink-600" />

                        <h3 className="text-xl font-semibold mt-4 text-gray-800">
                            Explore Tours
                        </h3>

                        <p className="text-gray-600 text-sm mt-2">
                            Discover divine temples and spiritual places in Braj.
                        </p>

                        <button className="
              mt-6
              px-6
              py-2
              rounded-full
              text-white
              bg-gradient-to-r
              from-pink-500
              via-fuchsia-500
              to-purple-600
              hover:scale-105
              transition
            ">
                            View Tours
                        </button>

                    </motion.div>


                    {/* Taxi CTA */}

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="
            bg-white
            border border-gray-100
            rounded-3xl
            p-8
            shadow-lg
            hover:shadow-xl
            transition
            "
                    >

                        <CarTaxiFront className="mx-auto text-pink-600" />

                        <h3 className="text-xl font-semibold mt-4 text-gray-800">
                            Book Taxi
                        </h3>

                        <p className="text-gray-600 text-sm mt-2">
                            Comfortable AC taxis with professional drivers.
                        </p>

                        <button className="
              mt-6
              px-6
              py-2
              rounded-full
              text-white
              bg-gradient-to-r
              from-pink-500
              via-fuchsia-500
              to-purple-600
              hover:scale-105
              transition
            ">
                            Book Ride
                        </button>

                    </motion.div>


                    {/* Hotel CTA */}

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="
            bg-white
            border border-gray-100
            rounded-3xl
            p-8
            shadow-lg
            hover:shadow-xl
            transition
            "
                    >

                        <Hotel className="mx-auto text-pink-600" />

                        <h3 className="text-xl font-semibold mt-4 text-gray-800">
                            Find Hotels
                        </h3>

                        <p className="text-gray-600 text-sm mt-2">
                            Peaceful stays near temples and spiritual places.
                        </p>

                        <button className="
              mt-6
              px-6
              py-2
              rounded-full
              text-white
              bg-gradient-to-r
              from-pink-500
              via-fuchsia-500
              to-purple-600
              hover:scale-105
              transition
            ">
                            Browse Hotels
                        </button>

                    </motion.div>

                </div>

                {/* final message */}

                <p className="text-gray-500 text-sm mt-16">
                    Trusted by thousands of travelers visiting Vrindavan every year
                </p>

            </div>

        </section>
    );
}