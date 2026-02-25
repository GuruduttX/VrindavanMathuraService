"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Temple Guides",
  "Travel Tips",
  "Pooja Rituals",
  "Hotels",
  "Festivals",
];

interface Props {
  onSelectCategory?: (category: string) => void;
}

export default function BlogCategories({ onSelectCategory }: Props) {
  const [active, setActive] = useState("All");

  const handleClick = (category: string) => {
    setActive(category);
    if (onSelectCategory) onSelectCategory(category);
  };

  return (
    <section className="py-10 px-6 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Scroll Container */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar">

          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleClick(category)}
              className={`whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 border
              
              ${
                active === category
                  ? "bg-pink-600 text-white border-pink-600 shadow-md shadow-pink-200/50"
                  : "bg-white text-gray-600 border-gray-200 hover:border-pink-400 hover:text-pink-600 hover:shadow-sm"
              }`}
            >
              {category}
            </motion.button>
          ))}

        </div>
      </div>
    </section>
  );
}