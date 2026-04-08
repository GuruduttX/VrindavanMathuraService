"use client";

import Link from "next/link";
import { Home, MapPin, Car, Hotel } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/utils/Navbar";
import LuxuryFooter from "@/utils/Footer";

/* ---------------- Animation Variants ---------------- */

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

const floatingCard = {
    animate: {
        y: [0, -15, 0],
        rotate: [0, 2, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

/* ---------------- Component ---------------- */

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-white to-purple-100 px-6">

                {/* Background Animated Blobs */}

                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute w-[400px] h-[400px] bg-pink-300/30 blur-3xl rounded-full top-[-100px] left-[-100px]"
                />

                <motion.div
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 12, repeat: Infinity }}
                    className="absolute w-[400px] h-[400px] bg-purple-300/30 blur-3xl rounded-full bottom-[-100px] right-[-100px]"
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10"
                >

                    {/* ---------------- Left Content ---------------- */}

                    <div className="space-y-6">

                        <motion.h1
                            variants={item}
                            className="text-8xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text"
                        >
                            404
                        </motion.h1>

                        <motion.h2
                            variants={item}
                            className="text-3xl font-bold text-gray-800"
                        >
                            Oops! You lost your way in Vrindavan
                        </motion.h2>

                        <motion.p
                            variants={item}
                            className="text-gray-600 leading-relaxed text-lg"
                        >
                            The page you are looking for doesn't exist. But don’t worry —
                            Vrindavan still has many divine experiences waiting for you.
                        </motion.p>

                        {/* Buttons */}

                        <motion.div
                            variants={item}
                            className="flex flex-wrap gap-4 pt-4"
                        >

                            <Link
                                href="/"
                                className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
                            >
                                <Home size={18} />
                                Go Home
                            </Link>

                            <Link
                                href="/tours"
                                className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow hover:bg-pink-50 transition"
                            >
                                <MapPin size={18} />
                                Explore Tours
                            </Link>

                            <Link
                                href="/taxi"
                                className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow hover:bg-pink-50 transition"
                            >
                                <Car size={18} />
                                Taxi Service
                            </Link>

                            <Link
                                href="/hotels"
                                className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow hover:bg-pink-50 transition"
                            >
                                <Hotel size={18} />
                                Hotels
                            </Link>

                        </motion.div>

                    </div>

                    {/* ---------------- Right Illustration ---------------- */}

                    <div className="relative flex justify-center items-center">

                        {/* Back Card */}

                        <motion.div
                            animate="animate"
                            className="absolute w-64 h-80 rounded-3xl shadow-2xl overflow-hidden rotate-[-8deg]"
                        >
                            <Image
                                src="/images/Home/Mandir-new.jpg"
                                alt="Temple"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Front Card */}

                        <motion.div
                            animate="animate"
                            transition={{ delay: 1 }}
                            className="relative w-64 h-80 rounded-3xl shadow-2xl overflow-hidden rotate-[8deg]"
                        >
                            <Image
                                src="/images/Home/Mandir.jpg"
                                alt="Temple"
                                fill
                                className="object-cover"
                            />

                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-sm font-semibold">
                                Starting from ₹1999
                            </div>
                        </motion.div>

                    </div>

                </motion.div>

            </div>

            <LuxuryFooter />

        </>
    );
}