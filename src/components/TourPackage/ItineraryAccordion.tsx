"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Clock } from "lucide-react";

export default function ItineraryAccordion({ PackageData }: any) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="w-full max-w-4xl p-5 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Itinerary</h2>

      {PackageData.itinerary.map((item: any, index: number) => {
        const isOpen = active === index;

        return (
          <div
            key={index}
            className={`rounded-3xl border transition-all duration-300 ${
              isOpen
                ? "border-orange-300 bg-orange-50"
                : "border-gray-200 bg-white hover:border-orange-300"
            }`}
          >
            {/* Header */}
            <button
              onClick={() => setActive(isOpen ? null : index)}
              className="flex w-full items-start justify-between px-6 py-5 text-left"
            >
              <div className="flex items-start gap-5">

                {/* Vertical Day Indicator */}
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-[#A84010] text-white flex items-center justify-center text-sm font-semibold">
                    {item.day}
                  </div>
                  <div className="w-[2px] flex-1 bg-orange-200 mt-2" />
                </div>

                {/* Title */}
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#A84010] font-semibold">
                    Day {item.day}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>

              <ChevronDown
                className={`h-5 w-5 text-[#A84010] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="px-10 md:px-16 pb-6 text-gray-700 space-y-4">

                {/* Meta */}
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock size={15} />
                    <span>Full Day Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={15} />
                    <span>Guided Temple Visits</span>
                  </div>
                </div>

                {/* Description */}
                <div
                  className="prose prose-slate max-w-none
                    prose-ul:list-disc prose-ul:pl-6
                    prose-ol:list-decimal prose-ol:pl-6
                    prose-li:my-1
                    prose-p:leading-7"
                  dangerouslySetInnerHTML={{
                    __html: item?.description ?? "",
                  }}
                />

                {/* Elegant Accent */}
                <div className="h-[2px] w-20 bg-[#E8821A] rounded-full mt-4" />

              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}