"use client";
import { useState } from "react";

export default function PoojaFAQ() {
  const faqs = [
    {
      question: "How can I book a pooja in Mathura or Vrindavan?",
      answer:
        "You can easily book a pooja through our website by selecting your preferred pooja package and date. Our team will arrange everything for you.",
    },
    {
      question: "Is pooja samagri included in the package?",
      answer:
        "Yes, all essential pooja samagri required for the ritual is included in the package and arranged by our team.",
    },
    {
      question: "Can I request a specific temple for the pooja?",
      answer:
        "Yes, if you have a preferred temple in Mathura or Vrindavan, we will try our best to arrange the pooja there.",
    },
    {
      question: "Do you provide experienced pandits?",
      answer:
        "Yes, all poojas are conducted by experienced and knowledgeable pandits who guide devotees throughout the ritual.",
    },
    {
      question: "Can pooja be performed for family members?",
      answer:
        "Yes, poojas can be performed for individuals, couples, or entire families seeking blessings and spiritual peace.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600">
            Find answers to common questions about booking and performing pooja
            in Mathura and Vrindavan.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-pink-100 rounded-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left font-medium"
              >
                <span>{faq.question}</span>

                <span className="text-pink-500 text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}