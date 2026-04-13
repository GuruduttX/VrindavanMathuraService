"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Star,
  Trophy,
  MapPin,
  DoorOpen,
  ShieldCheck,
  Wifi,
  Car,
  Utensils,
  Bath,
  Hotel,
} from "lucide-react";
import { clear } from "console";

export default function HotelDetailsSection({ HotelData }: { HotelData: any }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const clearStatus = async () => {
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,) => setForm({ ...form, [e.target.name]: e.target.value });


  const handleSubmit = async (e: React.FormEvent)=> {
    e.preventDefault();
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // 2. Email Validation (Standard RFC regex)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    //  3. Basic Required Check
    if (!form.name.trim()) {
      alert("Name is required.");
      return;
    }

    try {
      const response = await fetch("/api/simbark", {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          serviceType: form.comments,
        }),
      });

      const formsubmitData = await response.json();

      if (!response.ok) {
        throw new Error(formsubmitData.message || "Submission failed");
      }
      setStatus("success");
      setFeedbackMsg("Enquiry has been sent successfully.");
      clearStatus();
      console.log("Success:", formsubmitData);
    } catch (error) {
      setStatus("error");
      setFeedbackMsg("Something went wrong. Try again");
      clearStatus();
      console.log("ERROR: submitting form", error);
    } finally {
      setForm({
        name: "",
        phone: "",
        email: "",
        comments: "",
      });
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.6fr_1fr] gap-16 items-start">
        {/* LEFT SECTION */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* TITLE */}

          <h1 className="text-3xl font-bold text-gray-800">
            {HotelData.title}
          </h1>

          <p className="text-gray-500 mt-2 flex items-center gap-2">
            <Star size={16} className="text-amber-500" />
            {HotelData.rating} · {HotelData.reviews} reviews ·{" "}
            {HotelData.category}
          </p>

          {/* GUEST FAVORITE */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-8 bg-gradient-to-r from-amber-500 via-amber-500 to-orange-600 text-white rounded-2xl p-6 flex justify-between items-center shadow-xl"
          >
            <div>
              <p className="text-sm opacity-80">Guest Favourite</p>
              <p className="font-semibold text-lg">
                One of the most loved hotels in {HotelData.category}
              </p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold flex items-center gap-1 justify-center">
                <Star size={18} fill="white" />
              </p>
              <p className="text-xs opacity-80">{HotelData.reviews} Reviews</p>
            </div>
          </motion.div>

          {/* HOST */}

          <div className="mt-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center font-semibold text-amber-600 text-lg">
              R
            </div>

            <div>
              <p className="font-semibold text-lg">
                Hosted by {HotelData.host}
              </p>
              <p className="text-sm text-gray-500">
                Superhost · 6 years hosting
              </p>
            </div>
          </div>

          {/* FEATURES */}

          <div className="mt-12 space-y-8 border-t pt-10">
            <Feature
              icon={<Trophy />}
              title="Top 10% of Vrindavan Hotels"
              desc="Highly rated for comfort and service"
            />

            <Feature
              icon={<DoorOpen />}
              title="Self Check-in"
              desc="Easy and flexible check-in experience"
            />

            <Feature
              icon={<MapPin />}
              title="Perfect Temple Location"
              desc="Just 5 minutes from Prem Mandir"
            />

            <Feature
              icon={<ShieldCheck />}
              title="Safe & Trusted Stay"
              desc="Verified hotel with premium guest service"
            />
          </div>

          {/* AMENITIES */}

          <div className="mt-14">
            <h3 className="text-xl font-semibold mb-6">
              What this place offers
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <Amenity icon={<Wifi />} title="Free WiFi" />
              <Amenity icon={<Car />} title="Free Parking" />
              <Amenity icon={<Utensils />} title="Pure Veg Restaurant" />
              <Amenity icon={<Bath />} title="Private Bathrooms" />
              <Amenity icon={<MapPin />} title="Temple View Rooms" />
              <Amenity icon={<ShieldCheck />} title="24×7 Security" />
            </div>
          </div>

          {/* DESCRIPTION */}

          <div className="mt-14 text-gray-600 leading-relaxed">
            <h3 className="text-xl font-semibold mb-4">About this stay</h3>

            <div
              className="BlogContent
                    prose prose-slate max-w-none
                    prose-ul:list-disc prose-ul:pl-6
                    prose-ol:list-decimal prose-ol:pl-6
                    prose-li:my-1
                    prose-li:marker:text-slate-500
                    prose-p:leading-7
                    "
              dangerouslySetInnerHTML={{ __html: HotelData.about ?? "" }}
            />

            <p className="mt-4">
              The hotel offers AC rooms, temple view balconies, vegetarian
              dining and guided tours to nearby sacred places.
            </p>
          </div>
        </motion.div>

        {/* RIGHT BOOKING CARD */}

        {/* HOTEL ENQUIRY FORM */}
        <div className="hidden sticky top-30 md:block bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm h-fit">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Enquire About This Hotel
          </h3>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* FULL NAME (Floating Label) */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                placeholder="Full Name *"
                onChange={handleChange}
                required
                className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition placeholder-transparent bg-transparent"
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

            {/* EMAIL (Floating Label) */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                placeholder="Email *"
                onChange={handleChange}
                required
                className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition placeholder-transparent bg-transparent"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-1.5 text-xs text-gray-500 transition-all pointer-events-none 
                peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 
                peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-500"
              >
                Email *
              </label>
            </div>

            {/* PHONE NUMBER (Split Layout with Floating Label) */}
            <div className="flex gap-3">
              {/* Country Code Block */}
              <div className="border border-gray-300 rounded-xl px-4 flex items-center justify-center bg-white text-gray-800 font-medium w-20 shrink-0">
                +91
              </div>

              {/* Phone Input */}
              <div className="relative w-full">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  placeholder="Phone Number *"
                  onChange={handleChange}
                  required
                  className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition placeholder-transparent bg-transparent"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-4 top-1.5 text-xs text-gray-500 transition-all pointer-events-none 
                  peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 
                  peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-500"
                >
                  Phone Number *
                </label>
              </div>
            </div>

            {/* COMMENTS (Floating Label) */}
            <div className="relative">
              <textarea
                id="comments"
                name="comments"
                placeholder="Comments"
                value={form.comments}
                onChange={handleChange}
                rows={4}
                className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition placeholder-transparent bg-transparent resize-none"
              ></textarea>
              <label
                htmlFor="comments"
                className="absolute left-4 top-1.5 text-xs text-gray-500 transition-all pointer-events-none 
                  peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 
                  peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-500"
              >
                Comments
              </label>
            </div>
            {/* success or failure massege*/}
            {status === "success" && (
              <div className="p-2 mb-4 text-sm md:col-span-2 text-green-700 bg-green-50 rounded-xl border border-green-200">
                {feedbackMsg}
              </div>
            )}

            {status === "error" && (
              <div className="p-2 mb-4 text-sm md:col-span-2 text-red-700 bg-red-50 rounded-xl border border-red-200">
                {feedbackMsg}
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-amber-500 via-amber-500 to-orange-600 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm"
            >
              Send Enquiry
            </button>
          </form>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-28"
          >
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100"
          >
            <div className="flex items-end gap-2">
              <p className="text-3xl font-bold text-amber-600">₹1,299</p>

              <span className="text-gray-500 text-sm">/ night</span>
            </div>

            

            <div className="mt-6 border rounded-xl overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="p-4 border-r">
                  <p className="text-xs text-gray-500">CHECK-IN</p>
                  <p className="text-sm font-semibold">10 April</p>
                </div>

                <div className="p-4">
                  <p className="text-xs text-gray-500">CHECK-OUT</p>
                  <p className="text-sm font-semibold">12 April</p>
                </div>
              </div>

              <div className="border-t p-4 flex justify-between">
                <p className="text-xs text-gray-500">GUESTS</p>
                <p className="text-sm font-semibold">2 Adults</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-amber-500 via-amber-500 to-orange-600 shadow-lg"
            >
              Reserve Now
            </motion.button>

            <p className="text-center text-xs text-gray-500 mt-3">
              You won’t be charged yet
            </p>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}



function Feature({ icon, title, desc }: any) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex gap-4 items-start"
    >
      <div className="text-amber-500">{icon}</div>

      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </motion.div>
  );
}



function Amenity({ icon, title }: any) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="flex items-center gap-3 bg-white border border-amber-200 p-4 rounded-xl shadow-sm"
    >
      <div className="text-amber-500">{icon}</div>
      <span className="text-sm font-medium">{title}</span>
    </motion.div>
  );
}