"use client";

import { X, MessageSquare } from "lucide-react"; // Swapped to a generic icon
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  open: boolean;
  onClose: () => void;
  defaultService?: string; // Optional: Pre-fill the dropdown based on where they clicked
}

export default function CommonEnquiryForm({
  open,
  onClose,
  defaultService = "",
}: Props) {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
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
      requestAnimationFrame(() => setAnimate(true));
      // Reset form when opened, preserving the defaultService if provided
      setForm((prev) => ({ ...prev, serviceType: defaultService }));
    } else {
      setAnimate(false);
    }
  }, [open, defaultService]);

  if (!open) return null;

  // Added proper TypeScript typing for the event
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

   const handleSubmit = async (e: React.FormEvent) => {
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
     setLoading(true);
     try {
       const response = await fetch("api/simbark", {
         method: "POST",
         body: JSON.stringify(form),
       });

       const formsubmitData = await response.json();

       if (!response.ok) {
         throw new Error(formsubmitData.message || "Submission failed");
       }

       console.log("Success:", formsubmitData);
     } catch (error) {
       console.log("ERROR: submitting form", error);
     } finally {
       setLoading(false);
       setForm({
         name: "",
         phone: "",
         email: "",
         serviceType: defaultService,
       });
     }
   };; 
  

  return (
    <div className="fixed inset-0 m-auto z-[999] flex items-start justify-center gap-4 max-w-[450px] text-black text-left">
      {/* <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      /> */}

      <div
        className={`relative bg-white w-full max-w-4xl mx-4 rounded-3xl shadow-xl
        transform transition duration-500 mt-20
        ${animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-99 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Generic Header */}
        <div className="p-8 border-b bg-amber-600 text-white rounded-t-3xl relative flex ">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <MessageSquare size={28} /> Service Enquiry
            </h2>
            <p className="text-amber-100 mt-2 text-sm">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
        </div>

        <form className="p-8 grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-500">
              Your Full Name*
            </label>
            <input
              name="name"
              placeholder="Full Name"
              className="input border border-gray-500/40 p-2 rounded-lg focus:outline-none focus:ring focus:ring-amber-500 focus:border-amber-500"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm text-gray-500">
              Phone Number*
            </label>
            <input
              name="phone"
              placeholder="Your Phone Number"
              className="input border border-gray-500/40 p-2 rounded-lg focus:outline-none focus:ring focus:ring-amber-500 focus:border-amber-500"
              required
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-500">
              Email Address*
            </label>
            <input
              name="email"
              placeholder="Enter your Email"
              className="input border border-gray-500/40 p-2 rounded-lg focus:outline-none focus:ring focus:ring-amber-500 focus:border-amber-500"
              required
              id="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">

          {/* New Service Type Dropdown */}
          <select
            name="serviceType"
            className="input bg-white border border-gray-500/40 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            required
            value={form.serviceType}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Service Type
            </option>
            {services.map((service, idx) => (
              <option key={idx} value={service}>
                {service}
              </option>
            ))}
          </select>
          </div>

          <div className="flex gap-1 flex-col ">
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 transition text-white py-3 font-semibold rounded-xl md:col-span-2 mt-2 flex-1"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
            <a
              href="https://wa.me/7302265809?text=Hi!%20I%20have%20an%20enquiry%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 transition text-white py-3 font-semibold rounded-xl md:col-span-2 mt-2 flex-1 text-center"
            >
              Chat with us
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
