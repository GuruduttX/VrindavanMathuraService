"use client";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";
import TourCard from "@/utils/TourCard";
import TourEnquiryPopup from "@/utils/TourEnquiryPopUp";
import { useState } from "react";


interface Tour {
  _id: string;
  title: string;
  image: string;
}

interface Props {
  tours: Tour[];
}


export default function TourGrid({ tours }: Props) {

  const [open, setOpen] = useState(false);
    
  return (
    <>
    <TourEnquiryPopup open={open} onClose={()=>setOpen(false)}/>
    <div id="tours" className="space-y-12">

      {/* Optional header row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Available Tour Packages
        </h2>

        <p className="text-sm text-gray-500">
          Showing {tours.length} packages
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour._id} tour={tour} setOpen={setOpen} />
        ))}
      </div>
    </div>
    </>
   
  );
}