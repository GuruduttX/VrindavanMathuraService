"use client";

export default function TourFilters() {
  return (
    <div className="space-y-10">

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900">
        Filter Tours
      </h3>

      {/* Duration */}
      <div>
        <h4 className="font-medium mb-4">Duration</h4>
        <div className="flex flex-wrap gap-3">
          {["1 Day", "2 Days", "3+ Days"].map((item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-full border border-gray-200 text-sm hover:border-pink-500 hover:text-pink-600 transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-medium mb-4">Budget</h4>
        <div className="space-y-3 text-sm text-gray-600">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-pink-500" />
            Under ₹5,000
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-pink-500" />
            ₹5,000 - ₹10,000
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-pink-500" />
            ₹10,000+
          </label>
        </div>
      </div>

      {/* Tour Type */}
      <div>
        <h4 className="font-medium mb-4">Tour Type</h4>
        <div className="space-y-3 text-sm text-gray-600">
          {["Temple", "Festival", "VIP Darshan", "Family"].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="accent-pink-500" />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <button className="w-full mt-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium transition">
        Reset Filters
      </button>
    </div>
  );
}