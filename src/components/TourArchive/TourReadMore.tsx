"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ToursReadMore() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white">

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Mathura Vrindavan Tour Packages
        </h2>

        <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
          Discover the divine land of Lord Krishna through curated spiritual
          journeys across Mathura, Vrindavan, Govardhan and Barsana.
        </p>

        {/* Content Card */}
        <div className="mt-10 bg-white border border-pink-100 rounded-3xl shadow-lg p-8 md:p-10 leading-relaxed text-gray-600">

          <p>
            Mathura and Vrindavan are among the most sacred destinations in
            India and attract millions of devotees every year. These holy
            cities are deeply connected with the life and divine pastimes of
            Lord Krishna. Our Mathura Vrindavan tour packages are designed to
            offer a peaceful spiritual journey covering famous temples,
            cultural landmarks, and the vibrant traditions of Braj.
          </p>

          {open && (
            <div className="space-y-4 mt-5">

              <p>
                Visitors can explore iconic temples such as Banke Bihari
                Temple, ISKCON Vrindavan, Prem Mandir, Dwarkadhish Temple,
                Radha Raman Temple and many other sacred places. The region
                also includes spiritually significant locations like Govardhan
                Parikrama, Barsana (the birthplace of Radha Rani), and
                Nandgaon.
              </p>

              <p>
                Our Braj tour packages are carefully planned to provide a
                comfortable experience including guided temple visits, private
                taxi services, hotel stays and assistance for darshan. Whether
                you are traveling with family, planning a spiritual retreat, or
                visiting during festivals such as Holi, Janmashtami or Radha
                Ashtami, our packages ensure a memorable pilgrimage.
              </p>

              <p>
                From one-day Mathura Vrindavan tours to multi-day Braj
                pilgrimage circuits, travelers can experience the devotional
                atmosphere of the region while exploring its ancient temples,
                ghats, and sacred forests. These tours allow devotees to
                connect deeply with the spiritual heritage of Krishna's
                birthplace while enjoying well-organized travel arrangements.
              </p>

              <p>
                If you are planning a spiritual journey to Braj, our Mathura
                Vrindavan tour packages provide the perfect balance of
                devotion, comfort and local expertise to help you experience
                the divine charm of Krishna's land.
              </p>

            </div>
          )}

          {/* Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 mt-6 text-pink-600 font-semibold hover:text-pink-700 transition cursor-pointer"
          >
            {open ? "Read Less" : "Read More"}
            <ChevronDown
              className={`transition-transform ${
                open ? "rotate-180" : ""
              }`}
              size={18}
            />
          </button>

        </div>

      </div>

    </section>
  );
}