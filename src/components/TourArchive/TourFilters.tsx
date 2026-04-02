"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

export default function TourFilters() {
  const [activeDuration, setActiveDuration] = useState<string | null>(null);
  const [activeBudgets, setActiveBudgets] = useState<string[]>([]);
  const [activeTourTypes, setActiveTourTypes] = useState<string[]>([]);

  const toggleBudget = (item: string) => {
    setActiveBudgets((prev) =>
      prev.includes(item) ? prev.filter((b) => b !== item) : [...prev, item]
    );
  };

  const toggleTourType = (item: string) => {
    setActiveTourTypes((prev) =>
      prev.includes(item) ? prev.filter((t) => t !== item) : [...prev, item]
    );
  };

  const resetAll = () => {
    setActiveDuration(null);
    setActiveBudgets([]);
    setActiveTourTypes([]);
  };

  const hasActiveFilters =
    activeDuration || activeBudgets.length > 0 || activeTourTypes.length > 0;

  return (
    <>
      {/* ===== MOBILE ===== */}
      <div className="xl:hidden space-y-4">

        {/* Duration */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Duration
          </p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {["1 Day", "2 Days", "3+ Days"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  setActiveDuration(activeDuration === item ? null : item)
                }
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition duration-200 cursor-pointer flex-shrink-0 ${
                  activeDuration === item
                    ? "bg-[linear-gradient(145deg,#7A2E00,#A84010,#E8821A)] text-white shadow-sm"
                    : "bg-white border border-orange-200 text-gray-600 hover:border-[#A84010] hover:text-[#A84010]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Budget + Type */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Budget & Type
          </p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {["Under ₹5K", "₹5K-₹10K", "₹10K+"].map((label) => (
              <button
                key={label}
                onClick={() => toggleBudget(label)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition duration-200 cursor-pointer flex-shrink-0 ${
                  activeBudgets.includes(label)
                    ? "bg-[linear-gradient(145deg,#7A2E00,#A84010,#E8821A)] text-white shadow-sm"
                    : "bg-white border border-orange-200 text-gray-600 hover:border-[#A84010] hover:text-[#A84010]"
                }`}
              >
                {label}
              </button>
            ))}

            <div className="w-px bg-orange-200 flex-shrink-0 my-0.5" />

            {["Temple", "Festival", "VIP", "Family"].map((type) => (
              <button
                key={type}
                onClick={() => toggleTourType(type)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition duration-200 cursor-pointer flex-shrink-0 ${
                  activeTourTypes.includes(type)
                    ? "bg-[linear-gradient(145deg,#7A2E00,#A84010,#E8821A)] text-white shadow-sm"
                    : "bg-white border border-orange-200 text-gray-600 hover:border-[#A84010] hover:text-[#A84010]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Reset */}
        {hasActiveFilters && (
          <button
            onClick={resetAll}
            className="text-xs text-[#A84010] font-medium hover:text-[#7A2E00] transition cursor-pointer"
          >
            ✕ Clear all filters
          </button>
        )}
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden xl:block space-y-8">

        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 flex items-center justify-center rounded-xl 
          bg-[linear-gradient(145deg,#7A2E00,#A84010,#E8821A)] text-white shadow-md">
            <SlidersHorizontal size={18} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Filter Tours
          </h3>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-orange-200 via-orange-100 to-transparent" />

        {/* Duration */}
        <div>
          <h4 className="font-medium mb-3 text-gray-800">Duration</h4>
          <div className="flex flex-wrap gap-2">
            {["1 Day", "2 Days", "3+ Days"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  setActiveDuration(activeDuration === item ? null : item)
                }
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 cursor-pointer ${
                  activeDuration === item
                    ? "bg-[linear-gradient(145deg,#7A2E00,#A84010,#E8821A)] text-white shadow-md"
                    : "border border-orange-200 text-gray-600 hover:border-[#A84010] hover:text-[#A84010] hover:bg-orange-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div>
          <h4 className="font-medium mb-3 text-gray-800">Budget</h4>
          <div className="space-y-3 text-sm text-gray-600">
            {["Under ₹5,000", "₹5,000 - ₹10,000", "₹10,000+"].map((label) => (
              <label key={label} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="accent-[#A84010] w-4 h-4" />
                <span className="group-hover:text-[#A84010] transition">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Tour Type */}
        <div>
          <h4 className="font-medium mb-3 text-gray-800">Tour Type</h4>
          <div className="space-y-3 text-sm text-gray-600">
            {["Temple", "Festival", "VIP Darshan", "Family"].map((type) => (
              <label key={type} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="accent-[#A84010] w-4 h-4" />
                <span className="group-hover:text-[#A84010] transition">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-orange-200 via-orange-100 to-transparent" />

        {/* Reset Button */}
        <button
          onClick={resetAll}
          className="w-full py-3 rounded-full 
          bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 
          text-[#A84010] text-sm font-medium 
          hover:from-orange-100 hover:to-orange-200 transition duration-200 cursor-pointer"
        >
          Reset All Filters
        </button>
      </div>
    </>
  );
}