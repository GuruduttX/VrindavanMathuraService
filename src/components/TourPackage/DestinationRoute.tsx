"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Segment = {
  id: string;
  from: string;
  to: string;
};

type RouteType = {
  source: string;
  destination: string;
  segments: Segment[];
};

export default function DestinationRoute({
  routeData,
}: {
  routeData: RouteType;
}) {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full max-w-3xl px-5">

      {/* ROUTE CARD */}
      <div className="rounded-3xl border border-pink-100 bg-white shadow-sm overflow-hidden">

        {/* HEADER */}
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-pink-50 transition"
        >
          <div>
            <p className="text-sm text-gray-500">Travel Route</p>
            <p className="text-lg font-semibold text-pink-600">
              {routeData.source} → {routeData.destination}
            </p>
          </div>

          <ChevronDown
            className={`w-5 h-5 text-pink-500 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* TIMELINE CONTENT */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            open ? "max-h-[600px] px-6 pb-6" : "max-h-0"
          }`}
        >
          <div className="relative mt-4">

            {/* Vertical Line */}
            <div className="absolute left-3 top-2 bottom-2 w-[2px] bg-pink-200" />

            <div className="space-y-6 pl-10">

              {/* Source */}
              <div className="relative">
                <div className="absolute -left-[22px] top-1 w-4 h-4 rounded-full bg-pink-500" />
                <p className="font-semibold text-gray-900">
                  Departure: {routeData.source}
                </p>
              </div>

              {/* Segments */}
              {routeData.segments.map((segment) => (
                <div key={segment.id} className="relative">
                  <div className="absolute -left-[22px] top-1 w-4 h-4 rounded-full bg-pink-300" />
                  <p className="text-gray-700 font-medium">
                    {segment.from} → {segment.to}
                  </p>
                </div>
              ))}

              {/* Final */}
              <div className="relative">
                <div className="absolute -left-[22px] top-1 w-4 h-4 rounded-full bg-pink-600" />
                <p className="font-semibold text-pink-600">
                  Arrival: {routeData.destination}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}