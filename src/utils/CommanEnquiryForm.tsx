"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
}

type FormType = {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
};

export default function CommonEnquiryForm({
  open,
  onClose,
  defaultService = "",
}: Props) {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState<FormType>({
    name: "",
    phone: "",
    email: "",
    serviceType: defaultService,
  });

  const services = [
    "Tour Package",
    "Taxi Booking",
    "Hotel Booking",
    "Pooja",
    "General Enquiry",
  ];

  useEffect(() => {
    if (open) {
      setTimeout(() => setAnimate(true), 10);
      setForm({
        name: "",
        phone: "",
        email: "",
        serviceType: defaultService,
      });
    } else {
      setAnimate(false);
      setSuccess(false);
    }
  }, [open, defaultService]);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.name.trim()) return alert("Name is required");

    if (!/^[0-9]{10}$/.test(form.phone)) {
      return alert("Enter valid 10-digit phone");
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)
    ) {
      return alert("Enter valid email");
    }

    if (!form.serviceType) {
      return alert("Select service type");
    }

    try {
      setLoading(true);

      const res = await fetch("/api/simbark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          phone: "",
          email: "",
          serviceType: defaultService,
        });
      } else {
        alert(data.message || "Failed to submit");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed  inset-0 z-[9999] flex items-start justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className={`relative bg-white w-full max-w-lg mx-4 rounded-3xl shadow-xl
        overflow-hidden z-10
        transform transition-all duration-500 ease-out
        ${animate ? "translate-y-20 opacity-100" : "-translate-y-40 opacity-0"}`}
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4  cursor-pointer right-4 z-[50] bg-white rounded-full p-2 shadow hover:bg-gray-100"
        >
          <X />
        </button>

        {/* HEADER */}
        <div className="p-8 border-b bg-gradient-to-r from-orange-500 to-amber-500 text-white">
          <h2 className="text-2xl md:text-3xl font-bold">
            Service Enquiry
          </h2>
          <p className="text-white/80 mt-2 text-sm">
            Fill out the form and we’ll contact you shortly.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-4">

          {/* NAME */}
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              Full Name *
            </label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              Phone Number *
            </label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              Email Address *
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* SERVICE SELECT */}
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              Select Service *
            </label>
            <select
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
            >
              <option value="">Select Service</option>
              {services.map((s, i) => (
                <option key={i} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:flex-1 bg-gradient-to-r from-orange-500 to-amber-600 
              text-white py-3 rounded-xl font-semibold 
              disabled:opacity-50 transition cursor-pointer"
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>

            <a
              href="https://wa.me/7302265809"
              target="_blank"
              className="w-full sm:flex-1 text-center 
              bg-green-500 hover:bg-green-600 text-white 
              py-3 rounded-xl font-semibold transition"
            >
              WhatsApp
            </a>

          </div>

          {/* SUCCESS */}
          {success && (
            <p className="text-green-600 text-sm font-medium">
              Enquiry sent successfully!
            </p>
          )}

        </form>
      </div>
    </div>
  );
}