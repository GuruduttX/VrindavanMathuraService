"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Key,
  Sparkle,
  Hotel,
} from "lucide-react";

export default function GuestReviewSection({HotelData}:any) {
  console.log(HotelData, "Guest review section");

   const highlightLabels: Record<string, string> = {
     comfortStay: "Comfort Stay",
     greatLocation: "Great Location",
     hospitality: "Hospitality",
     amazingView: "Amazing View",
     cleanliness: "Cleanliness",
     greatValue: "Great Value",
   };
  return (
    <section className="py-28 bg-gradient-to-b from-amber-100 via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP RATING */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-6">
            <span className="text-5xl">🏆</span>

            <h2 className="text-7xl font-bold bg-gradient-to-r from-amber-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              {HotelData.rating}
            </h2>

            <span className="text-5xl">🏆</span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-gray-800">
            Guest Favourite
          </h3>

          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            This hotel is in the top 10% of Vrindavan stays based on guest
            ratings, comfort, hospitality and location experience.
          </p>
        </motion.div>

        {/* RATING BREAKDOWN */}

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-6 gap-6">
          <RatingCard
            title="Cleanliness"
            rating={HotelData.ratingSummary.scores.cleanliness}
            icon={<Sparkles />}
          />

          <RatingCard
            title="Accuracy"
            rating={HotelData.ratingSummary.scores.accuracy}
            icon={<CheckCircle2 />}
          />

          <RatingCard
            title="Check-in"
            rating={HotelData.ratingSummary.scores.checkIn}
            icon={<Key />}
          />

          <RatingCard
            title="Communication"
            rating={HotelData.ratingSummary.scores.communication}
            icon={<MessageCircle />}
          />

          <RatingCard
            title="Location"
            rating={HotelData.ratingSummary.scores.location}
            icon={<MapPin />}
          />

          <RatingCard
            title="Value"
            rating={HotelData.ratingSummary.scores.value}
            icon={<Sparkle />}
          />
        </div>

        {/* OVERALL GRAPH */}

        <div className="mt-20 max-w-xl mx-auto">
          <h3 className="text-lg font-semibold mb-6 text-gray-800">
            Overall Rating
          </h3>

          <RatingBar stars={5} width="100%" />
          <RatingBar stars={4} width="70%" />
          <RatingBar stars={3} width="40%" />
          <RatingBar stars={2} width="15%" />
          <RatingBar stars={1} width="5%" />
        </div>

        {/* REVIEW TAGS */}

        <div className="mt-20 flex flex-wrap justify-center gap-4">
          {Object.entries(HotelData.ratingSummary.highlights).map(
            ([key, count]) => {
              // Skip if the count is 0, or if the backend sends an unknown key
              if (!count || !highlightLabels[key]) return null;

              // 3. Render the tag combining the readable label and the count
              return (
                <Tag key={key} label={`${highlightLabels[key]} (${count})`} />
              );
            },
          )}
          {/* <Tag label="Amazing View (18)" />
          <Tag label="Hospitality (15)" />
          <Tag label="Great Location (10)" />
          <Tag label="Cleanliness (5)" />
          <Tag label="Great Value (3)" />
          <Tag label="Comfort Stay (7)" /> */}
        </div>
      </div>
    </section>
  );
}



function RatingCard({ title, rating, icon }: any) {
  return (

    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white border border-amber-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition"
    >

      <div className="flex justify-center mb-3 text-amber-500">
        {icon}
      </div>

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="text-xl font-semibold text-gray-800">
        {rating}
      </p>

    </motion.div>

  );
}



function RatingBar({ stars, width }: any) {
  return (

    <div className="flex items-center gap-4 mb-4">

      <span className="text-sm text-gray-600 w-6">
        {stars}
      </span>

      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width }}
          transition={{ duration: 1 }}
          className="h-full bg-gradient-to-r from-amber-500 via-amber-500 to-orange-600"
        />

      </div>

    </div>

  );
}



function Tag({ label }: any) {
  return (

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="px-5 py-2 bg-white border border-amber-200 rounded-full shadow-sm text-sm text-gray-700 hover:shadow-md cursor-pointer"
    >
      {label}
    </motion.div>

  );
}