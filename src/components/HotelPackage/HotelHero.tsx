"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Wifi, Coffee, Car } from "lucide-react";

const images = [
    "/images/Home/hotel.webp",
    "/images/Home/hotel.webp",
    "/images/Home/hotel.webp",
    "/images/Home/hotel.webp",
    "/images/Home/hotel.webp",
];

export default function HotelHero() {

    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <section className="pt-32 pb-16 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* breadcrumb */}

                <p className="text-sm text-gray-500 mb-6">
                    Home / Hotels /
                    <span className="text-pink-600 ml-1">
                        Radha Palace Hotel
                    </span>
                </p>


                {/* IMAGE GRID */}

                <div className="grid lg:grid-cols-[2fr,1fr] gap-6">

                    {/* MAIN IMAGE */}

                    <div className="relative rounded-3xl overflow-hidden shadow-xl group">

                        <Image
                            src={activeImage}
                            alt="Hotel"
                            width={900}
                            height={600}
                            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                        />

                        {/* rating badge */}

                        <div className="
            absolute
            top-4
            left-4
            bg-white/90
            backdrop-blur
            px-4
            py-2
            rounded-full
            text-sm
            flex
            items-center
            gap-1
            shadow
            ">

                            <Star size={14} className="text-yellow-500" />
                            4.6 Rating

                        </div>

                    </div>


                    {/* THUMBNAILS */}

                    {/* <div className="grid grid-cols-2 gap-4">

                        {images.slice(1).map((img, i) => (

                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setActiveImage(img)}
                                className="
                rounded-2xl
                overflow-hidden
                shadow-lg
                cursor-pointer
                border
                border-white
                hover:border-pink-400
                "
                            >

                                <Image
                                    src={img}
                                    alt="Hotel preview"
                                    width={300}
                                    height={200}
                                    className="w-full h-[200px] object-cover"
                                />

                            </motion.div>

                        ))}

                    </div> */}

                </div>


                {/* HOTEL INFO */}

                <div className="
        mt-8
        bg-white
        rounded-3xl
        shadow-xl
        p-8
        ">

                    <h1 className="text-3xl font-bold">
                        Radha Palace Hotel
                    </h1>

                    <p className="text-gray-600 mt-2 max-w-xl">
                        Peaceful and comfortable stay near Prem Mandir and ISKCON Temple
                        with modern amenities and spiritual atmosphere.
                    </p>


                    {/* rating + reviews */}

                    <div className="flex items-center gap-4 mt-4">

                        <span className="
            flex
            items-center
            gap-1
            bg-pink-50
            text-pink-600
            px-3
            py-1
            rounded-full
            text-sm
            ">

                            <Star size={14} />
                            4.6

                        </span>

                        <span className="text-gray-500 text-sm">
                            214 reviews
                        </span>

                        <span className="
            bg-green-50
            text-green-600
            px-3
            py-1
            rounded-full
            text-xs
            ">
                            Top Rated
                        </span>

                    </div>


                    {/* amenities */}

                    <div className="flex flex-wrap gap-3 mt-6 text-sm">

                        <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                            <Wifi size={14} /> Free WiFi
                        </span>

                        <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                            <Coffee size={14} /> Breakfast
                        </span>

                        <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                            <Car size={14} /> Parking
                        </span>

                        <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                            <MapPin size={14} /> Near Prem Mandir
                        </span>

                    </div>


                    {/* BOOKING BAR */}

                    <div className="
          mt-8
          bg-gradient-to-r
          from-pink-500
          via-fuchsia-500
          to-purple-600
          text-white
          rounded-2xl
          p-6
          flex
          items-center
          justify-between
          ">

                        <div>

                            <p className="text-xs opacity-80">
                                SPECIAL OFFER
                            </p>

                            <p className="text-2xl font-semibold">
                                ₹1,299 <span className="text-sm font-normal">/ night</span>
                            </p>

                            <p className="text-xs opacity-80">
                                Limited time price • Free cancellation
                            </p>

                        </div>

                        <button className="
            bg-white
            text-pink-600
            px-6
            py-3
            rounded-xl
            font-medium
            shadow
            hover:scale-105
            transition
            ">
                            Book Now →
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}