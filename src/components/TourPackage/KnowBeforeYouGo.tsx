"use client";

import { Info } from "lucide-react";

interface ItemType {
  description: string;
}

interface PackageType {
  documents: ItemType[];
}

export default function KnowBeforeYouGo({
  PackageData,
}: {
  PackageData: PackageType;
}) {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
            <Info className="w-6 h-6 text-pink-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Know Before You Go
          </h2>
        </div>

        {/* CONTENT PANEL */}
        <div className="rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 to-white p-6 flex flex-col gap-2.5">
          {PackageData?.documents?.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white border border-pink-100 rounded-2xl px-5 py-4"
            >
              <div className="flex-shrink-0 mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-pink-100 text-pink-700 text-xs font-medium">
                {index + 1}
              </div>
              <p className="text-gray-700 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}