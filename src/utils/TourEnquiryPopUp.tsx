"use client";

import { X, Map, User, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TourEnquiryPopup({ open, onClose }: Props) {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Tour Package",
  });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // PHONE VALIDATION
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    // EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Enter valid email");
      return;
    }

    if (!form.name.trim()) {
      alert("Name is required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/simbark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      alert("Submitted successfully ✅");

      // RESET
      setForm({
        name: "",
        phone: "",
        email: "",
        serviceType: "Tour Package",
      });

      onClose(); // optional UX improvement
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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
        bg-white shadow-2xl border border-orange-200
        transform transition-all duration-500
        ${animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2.5 rounded-full border"
        >
          <X size={20} />
        </button>

        {/* HEADER */}
        <div className="p-6 bg-[linear-gradient(145deg,#7A2E00,#A84010,#E8821A)] text-white rounded-t-3xl">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Map size={20} /> Plan Your Visit
          </h2>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-2 rounded"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border p-2 rounded"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded bg-[#A84010] text-white"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

      </div>
    </div>
  );
}