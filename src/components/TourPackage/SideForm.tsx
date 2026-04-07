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

    // Required fields
    if (!form.name || !form.phone || !form.travelDate || !form.travellers) {
      alert("Please fill all required fields");
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    // Email validation (optional)
    if (form.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        alert("Enter valid email address");
        return;
      }
    }

    setLoading(true);

    try {
      const res = await fetch("/api/simbark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          serviceType: `${form.message}\n
          Service Type:- Tour Package , Travel Date:- ${form.travelDate} , Travellers Count:- ${form.travellers}`,
        }),
      });

      const data = await res.json();
      console.log(data)
      if (!res.ok) throw new Error(data.message);

      // Success
      setSuccess(true);

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        travelDate: "",
        travellers: "",
        message: "",
      });
    } catch (err) {
      setSuccess(false)
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <div
        className="
        relative
        bg-white/90 backdrop-blur-md
        rounded-3xl
        border border-orange-100
        shadow-xl
        p-8
      "
      >
        {/* Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-200/30 blur-2xl rounded-full pointer-events-none" />

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
            <div
              className="
              w-20 rounded-xl
              border border-orange-200
              flex items-center justify-center
              text-sm text-[#A84010] font-medium
              bg-orange-50
            "
            >
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
                border border-orange-200
                px-4 pt-5 pb-2
                text-sm outline-none
                focus:border-[#A84010]
                focus:ring-2 focus:ring-orange-100
                transition
              "
            />
            <label
              className="
                absolute left-4 top-2 text-xs
                text-gray-500
                peer-focus:text-[#A84010]
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

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-[linear-gradient(145deg,#7A2E00,#A84010,#E8821A)]
              hover:opacity-90
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

        {/* Success */}
        {success && (
          <p className="mt-4 text-xs text-[#A84010] text-center">
            Enquiry sent successfully ✔
          </p>
        )}
      </div>
    </div>
  );
}