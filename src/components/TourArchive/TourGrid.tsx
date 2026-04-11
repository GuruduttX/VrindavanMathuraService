"use client";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";
import TourCard from "@/utils/TourCard";
// import TourEnquiryPopup from "@/utils/TourEnquiryPopUp"; // (Unused in your snippet, so left commented if you need it)
import { useState } from "react";
<<<<<<< HEAD
import { useTourFilter } from "@/context/TourFilterContext";
=======
import { useTourFilter } from "../../context/TourFilterContext";
>>>>>>> 4b955d50c2e009fb9c5958ee5209dd0d7a079e18

// 1. Added category to the interface
interface Tour {
  _id: string;
  title: string;
  image: string;
  category: string;
  // Add any other fields you pass to TourCard here (e.g., price, duration)
}

interface Props {
  tours: Tour[];
}

export default function TourGrid({ tours }: Props) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Grab the active category from the Context we created
  const { activeCategory, setActiveCategory } = useTourFilter();

  // 2. The Filtering Logic
  const filteredTours =
    activeCategory === "Explore All"
      ? tours
      : tours.filter((tour) => tour.category === activeCategory);

  return (
    <>
      <div id="tours" className="space-y-12">
        <CommonEnquiryForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          defaultService="Tour Package"
        />

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            {activeCategory === "Explore All"
              ? "Available Tour Packages"
              : `${activeCategory}s`}
          </h2>

          <p className="text-sm text-gray-500">
            Showing {filteredTours.length} packages
          </p>
        </div>

        {/* 3. Grid with Empty State Handling */}
        {filteredTours.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-gray-500 text-lg mb-4">
              No packages currently available for "{activeCategory}".
            </p>
            <button
              onClick={() => setActiveCategory("Explore All")}
              className="text-orange-500 font-medium hover:underline cursor-pointer"
            >
              View all packages
            </button>
          </div>
        ) : (
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {filteredTours.map((tour) => (
              <TourCard key={tour._id} tour={tour} setOpen={setIsFormOpen} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
