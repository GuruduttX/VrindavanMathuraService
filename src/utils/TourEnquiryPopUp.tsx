"use client";

import {
  X,
  Map,
  User,
  Phone,
  Calendar,
  Users,
  MessageSquare,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TourEnquiryPopup({ open, onClose }: Props) {
  const [animate, setAnimate] = useState(false);
  const [loading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    arrival: "",
    departure: "",
    adults: "",
    children: "",
    message: "",
  });

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setAnimate(true));
      document.body.style.overflow = "hidden";
    } else {
      setAnimate(false);
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (!open) return null;

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className={`relative w-full max-w-5xl rounded-3xl
        bg-white shadow-2xl border border-pink-300
        transform transition-all duration-500
        max-h-[90vh] overflow-y-auto no-scrollbar
        ${animate ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        {/* HEADER */}
        <div className="relative p-8 md:p-10 rounded-t-3xl overflow-hidden bg-gradient-to-r from-pink-600 via-pink-500 to-rose-500 text-white">

          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl" />

          <h2 className="relative text-3xl md:text-4xl font-bold flex items-center gap-3">
            <Map size={30} /> Plan Your Braj Tour
          </h2>

          <p className="relative opacity-90 mt-2 max-w-lg">
            Tell us about your travel dates and group details. Our local experts
            will create the perfect Braj spiritual itinerary for you.
          </p>
        </div>

        {/* TOP WHATSAPP CARD */}
        <div className="px-6 md:px-10 pt-6">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              <p className="text-sm text-gray-600">Need instant help?</p>
              <p className="font-semibold text-gray-800">
                Chat with our travel expert on WhatsApp
              </p>
            </div>

            <a
              href="https://wa.me/917302265809"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl font-medium transition text-center"
            >
              WhatsApp Now
            </a>

          </div>
        </div>

        {/* FORM */}
        <form className="p-6 md:p-10 grid md:grid-cols-2 gap-6">

          {/* NAME */}
          <div className="relative">
            <User className="absolute left-4 top-3.5 text-gray-400" size={18} />
            <input
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200
              focus:border-pink-500 focus:ring-2 focus:ring-pink-200
              outline-none transition"
            />
          </div>

          {/* PHONE */}
          <div className="relative">
            <Phone className="absolute left-4 top-3.5 text-gray-400" size={18} />
            <input
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200
              focus:border-pink-500 focus:ring-2 focus:ring-pink-200
              outline-none transition"
            />
          </div>

          {/* ARRIVAL */}
          <div className="relative">
            <Calendar className="absolute left-4 top-3.5 text-gray-400" size={18}/>
            <input
              type="date"
              name="arrival"
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200
              focus:border-pink-500 focus:ring-2 focus:ring-pink-200
              outline-none transition"
            />
          </div>

          {/* DEPARTURE */}
          <div className="relative">
            <Calendar className="absolute left-4 top-3.5 text-gray-400" size={18}/>
            <input
              type="date"
              name="departure"
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200
              focus:border-pink-500 focus:ring-2 focus:ring-pink-200
              outline-none transition"
            />
          </div>

          {/* ADULTS */}
          <div className="relative">
            <Users className="absolute left-4 top-3.5 text-gray-400" size={18}/>
            <input
              name="adults"
              placeholder="Adults"
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200
              focus:border-pink-500 focus:ring-2 focus:ring-pink-200
              outline-none transition"
            />
          </div>

          {/* CHILDREN */}
          <div className="relative">
            <Users className="absolute left-4 top-3.5 text-gray-400" size={18}/>
            <input
              name="children"
              placeholder="Children"
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200
              focus:border-pink-500 focus:ring-2 focus:ring-pink-200
              outline-none transition"
            />
          </div>

          {/* MESSAGE */}
          <div className="md:col-span-2 relative">
            <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18}/>
            <textarea
              name="message"
              placeholder="Tell us about your tour requirements..."
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200
              focus:border-pink-500 focus:ring-2 focus:ring-pink-200
              outline-none transition resize-none h-28"
            />
          </div>

          {/* BUTTONS */}
          <div className="md:col-span-2 flex flex-col md:flex-row gap-4">

            <button
              className="flex-1 py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r from-pink-600 to-rose-500
              hover:from-pink-700 hover:to-rose-600
              shadow-lg transition"
            >
              {loading ? "Sending..." : "Send Tour Enquiry"}
            </button>

            <a
              href="https://wa.me/917302265809"
              target="_blank"
              className="flex-1 text-center py-3 rounded-xl font-semibold text-white
              bg-green-500 hover:bg-green-600 shadow-lg transition"
            >
              WhatsApp
            </a>

          </div>

        </form>

      </div>
    </div>
  );
}