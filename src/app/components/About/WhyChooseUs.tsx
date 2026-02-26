"use client";

import { motion } from "framer-motion";
import { ShieldCheck, IndianRupee, Headphones, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Local Experts",
    description:
      "Deep knowledge of Mathura & Vrindavan with years of ground experience.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description:
      "Transparent pricing with no hidden costs. Best value for your divine journey.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Dedicated support team available anytime to assist you during your trip.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Partners",
    description:
      "We collaborate only with verified hotels, taxi drivers, and temple priests.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-pink-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-700">
            Why Choose <span className="text-rose-500">MathuraVrindavanService</span>?
          </h2>

          {/* Elegant underline */}
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-pink-600 to-rose-400" />
        </div>

        {/* Feature Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-pink-200"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex rounded-xl bg-pink-100 p-4 text-pink-600 transition group-hover:bg-pink-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-pink-700">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}