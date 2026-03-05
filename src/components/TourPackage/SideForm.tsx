"use client";

import { useState } from "react";
import { FloatingInput } from "@/utils/FloatingInput";
import { FloatingTextarea } from "@/utils/FloatingTextarea";

export default function SideForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    travellers: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.travelDate || !form.travellers) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);
  };

  return (
    <div className="w-full max-w-sm">
      <div className="
        relative
        bg-white/90 backdrop-blur-md
        rounded-3xl
        border border-pink-100
        shadow-xl
        p-8
      ">

        {/* Subtle Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200/30 blur-2xl rounded-full pointer-events-none" />

        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Enquire About This Package
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">

          <FloatingInput
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <FloatingInput
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          {/* Phone */}
          <div className="flex gap-3">
            <div className="
              w-20 rounded-xl
              border border-pink-200
              flex items-center justify-center
              text-sm text-pink-600 font-medium
              bg-pink-50
            ">
              +91
            </div>

            <div className="flex-1">
              <FloatingInput
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Travel Date */}
          <div className="relative">
            <input
              type="date"
              name="travelDate"
              value={form.travelDate}
              onChange={handleChange}
              required
              className="
                peer w-full rounded-xl
                border border-pink-200
                px-4 pt-5 pb-2
                text-sm outline-none
                focus:border-pink-500
                focus:ring-2 focus:ring-pink-100
                transition
              "
            />
            <label
              className="
                absolute left-4 top-2 text-xs
                text-gray-500
                peer-focus:text-pink-600
                transition
              "
            >
              Travel Date *
            </label>
          </div>

          <FloatingInput
            label="Traveller Count"
            name="travellers"
            value={form.travellers}
            onChange={handleChange}
            required
          />

          <FloatingTextarea
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-gradient-to-r from-pink-600 to-rose-500
              hover:from-pink-700 hover:to-rose-600
              text-white font-semibold
              py-3 rounded-xl
              shadow-md hover:shadow-lg
              transition
              disabled:opacity-60
              cursor-pointer
            "
          >
            {loading ? "Sending..." : "Send Enquiry"}
          </button>

        </form>

        {success && (
          <p className="mt-4 text-xs text-pink-700 text-center">
            Enquiry sent successfully ✔ Redirecting to WhatsApp…
          </p>
        )}

      </div>
    </div>
  );
}