"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export const BlogCategoryGroups = [
  { label: "Hotels", categories: ["Hotels in Vrindavan","Hotels in Mathura","Luxury Hotels","Budget Hotels","Family Hotels","Couple Friendly Hotels","Hotels Near Temple","Ashrams & Dharamshalas","Hotel Reviews","Best Hotels Guide"] },
  { label: "Taxi & Transport", categories: ["Taxi Services","Taxi Fare Guide","Airport Taxi Transfer","Local Sightseeing Taxi","Outstation Taxi","Taxi Travel Tips","Taxi Booking Guide"] },
  { label: "Tour Packages", categories: ["Vrindavan Tour Packages","Mathura Tour Packages","Same Day Tour Packages","Weekend Tour Packages","Family Tour Packages","Pilgrimage Tour Packages","Temple Tour Guide"] },
  { label: "Puja & Spiritual", categories: ["Vrindavan Puja Services","Mathura Puja Services","Temple Puja Booking","Pandit Booking","Special Puja Services","Festival Puja","Online Puja Services"] },
  { label: "Travel & Explore", categories: ["Places to Visit in Vrindavan","Places to Visit in Mathura","Temple Guide","Travel Tips","Local Food & Restaurants","Festivals in Vrindavan","Things to Do"] },
  { label: "Guides & Stories", categories: ["Travel Guide","Pilgrimage Guide","Devotional Stories","Spiritual Knowledge","Customer Experiences","Latest Updates"] },
];

export const Blogcategories = BlogCategoryGroups.flatMap((g) => g.categories);

interface Props {
  activeCategory?: string;
  onCategoryChange?: (cat: string) => void;
}

export default function BlogCategoriesSidebar({ activeCategory, onCategoryChange }: Props) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const activeGroup = BlogCategoryGroups.find((g) =>
    g.categories.includes(activeCategory ?? "")
  )?.label;

  const toggle = (label: string) =>
    setOpenGroup((prev) => (prev === label ? null : label));

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 text-sm px-22">

      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-0.5 h-4 rounded-full bg-orange-500" />
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-700">
          Blog Categories
        </h4>
      </div>

      {/* Active pill */}
      {activeCategory && (
        <div className="mb-3 flex items-center justify-between rounded-lg bg-orange-50 border border-orange-200 px-3 py-1.5 text-xs text-orange-800">
          <span className="truncate">{activeCategory}</span>
          <button
            onClick={() => onCategoryChange?.("")}
            className="ml-2 shrink-0 text-orange-500 hover:text-orange-700"
          >
            ✕
          </button>
        </div>
      )}

      {/* Dropdowns */}
      <div className="flex flex-col gap-1.5">
        {BlogCategoryGroups.map((group) => {
          const isOpen = openGroup === group.label;
          const hasActive = activeGroup === group.label;

          return (
            <div key={group.label}>
              <button
                onClick={() => toggle(group.label)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-left transition-colors
                  ${hasActive
                    ? "border-orange-300 bg-orange-50 text-orange-800"
                    : isOpen
                    ? "border-orange-300 bg-orange-50 text-orange-700"
                    : "border-gray-200 bg-gray-50 text-gray-700 hover:border-orange-300"
                  }`}
              >
                <span className="flex items-center gap-2 font-medium text-xs">
                  {group.label}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium
                    ${hasActive || isOpen ? "bg-orange-200 text-orange-800" : "bg-gray-200 text-gray-600"}`}>
                    {group.categories.length}
                  </span>
                </span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180 text-orange-500" : "text-gray-400"}`}
                  viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </button>

              {isOpen && (
                <div className="mt-1 p-2.5 border border-t-0 border-gray-200 rounded-b-lg flex flex-wrap gap-1.5">
                  {group.categories.map((cat) => {
                    const isActive = activeCategory === cat;
                    return onCategoryChange ? (
                      <button
                        key={cat}
                        onClick={() => onCategoryChange(cat)}
                        className={`px-2.5 py-1 text-[11px] rounded-full border transition-all
                          ${isActive
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-white text-gray-600 border-gray-200 hover:border-orange-400 hover:text-orange-600"
                          }`}
                      >
                        {cat}
                      </button>
                    ) : (
                      <Link
                        key={cat}
                        href={`/blogs?category=${encodeURIComponent(cat)}`}
                        className={`px-2.5 py-1 text-[11px] rounded-full border transition-all
                          ${isActive
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-white text-gray-600 border-gray-200 hover:border-orange-400 hover:text-orange-600"
                          }`}
                      >
                        {cat}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}