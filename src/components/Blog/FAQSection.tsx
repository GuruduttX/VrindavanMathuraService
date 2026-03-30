"use client";

import { useState } from "react";

 const faqs = [
    {
        question: "Can I fully customize my Mathura & Vrindavan tour?",
        answer:
        "Yes. Every itinerary can be personalized — from temple visits and pooja arrangements to hotel category and taxi type. We design your journey according to your spiritual priorities and comfort preferences.",
    },
    {
        question: "How does the custom tour planning process work?",
        answer:
        "After you submit an enquiry, our travel expert connects with you to understand travel dates, group size, and expectations. We then prepare a tailored itinerary with transparent pricing.",
    },
    {
        question: "Do you arrange VIP darshan and pooja services?",
        answer:
        "Yes, we coordinate advance pooja bookings and VIP darshan (subject to temple availability) for a seamless spiritual experience.",
    },
    {
        question: "Is transportation included in personalized packages?",
        answer:
        "Yes. We provide private AC taxis for local sightseeing and outstation transfers based on your group size and itinerary.",
    },
    {
        question: "What is the ideal duration for a complete spiritual tour?",
        answer:
        "A 2–3 day itinerary covers major temples comfortably. Extended 4–5 day packages can include Govardhan, Barsana, and Gokul.",
    },
    ];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 to-rose-400"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-xl transition-all duration-300 ${
                  isActive
                    ? "border-pink-500 shadow-md shadow-pink-100"
                    : "border-gray-200"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>

                  {/* Plus Icon */}
                  <span
                    className={`text-pink-600 text-xl font-bold transition-transform duration-300 ${
                      isActive ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}