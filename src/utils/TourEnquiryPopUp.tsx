"use client";

import { X, Map, User, Phone, Mail } from "lucide-react";
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
    email: "",
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
        className={`relative w-full max-w-lg rounded-3xl
        bg-white shadow-2xl border border-pink-300
        transform transition-all duration-500
        ${animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-50 cursor-pointer
          bg-white/90 backdrop-blur-md 
          p-2.5 rounded-full shadow-lg 
          hover:bg-white transition 
          border border-gray-200"
        >
          <X size={20} className="text-gray-700" />
        </button>

        {/* HEADER */}
        <div className="relative p-6 rounded-t-3xl bg-gradient-to-r from-pink-600 to-rose-500 text-white">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <Map size={22} /> Plan Your Vrindavan Visit
          </h2>

          <p className="text-sm opacity-90 mt-1">
            Get quick help from our local experts for routes, parking & darshan.
          </p>
        </div>

        {/* WHATSAPP CARD */}
        <div className="p-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            <div>
              <p className="text-xs text-gray-600">Need instant help?</p>
              <p className="text-sm font-medium text-gray-800">
                Chat with our expert on WhatsApp
              </p>
            </div>

            <a
              href="https://wa.me/917302265809"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center"
            >
              Connect on WhatsApp
            </a>

          </div>
        </div>

        {/* FORM */}
        <form className="px-4 pb-5 space-y-3">

          {/* NAME */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={16} />
            <input
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200
              focus:border-pink-500 focus:ring-2 focus:ring-pink-200
              outline-none text-sm"
            />
          </div>

          {/* PHONE */}
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-gray-400" size={16} />
            <input
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200
              focus:border-pink-500 focus:ring-2 focus:ring-pink-200
              outline-none text-sm"
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={16} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200
              focus:border-pink-500 focus:ring-2 focus:ring-pink-200
              outline-none text-sm"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">

            <button
              type="submit"
              className="w-full sm:flex-1 py-2.5 rounded-xl font-semibold text-white
              bg-gradient-to-r from-pink-600 to-rose-500
              hover:from-pink-700 hover:to-rose-600 transition text-sm"
            >
              {loading ? "Sending..." : "Get Call Back"}
            </button>

            <a
              href="https://wa.me/917302265809"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 text-center py-2.5 rounded-xl font-semibold text-white
              bg-green-500 hover:bg-green-600 transition text-sm"
            >
               Instant Help
            </a>

          </div>

        </form>
      </div>
    </div>
  );
}