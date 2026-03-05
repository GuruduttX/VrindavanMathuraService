"use client";

import {
  RotateCcw,
  Ban,
  BadgeCheck,
  CreditCard,
} from "lucide-react";

const iconMap : any= {
  "Refund Policy": <RotateCcw className="w-5 h-5 text-pink-600" />,
  "Cancel Policy": <Ban className="w-5 h-5 text-pink-600" />,
  "Confirmation  Policy": <BadgeCheck className="w-5 h-5 text-pink-600" />,
  "Payment Ploicy": <CreditCard className="w-5 h-5 text-pink-600" />,
};

export default function Policies({ PackageData }: any) {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <div className="mb-14">
        <h2 className="text-3xl font-semibold text-gray-900">
          Policies & Important Information
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
          Please review the following policies carefully before confirming
          your Mathura–Vrindavan yatra.
        </p>
      </div>

      <div className="space-y-10">

        {PackageData.policies.map((item: any, index: number) => (
          <div
            key={index}
            className="relative pl-8"
          >
            {/* Left Accent Line */}
            <span className="absolute left-0 top-1 w-1 h-full bg-pink-200 rounded-full" />

            <div className="flex items-center gap-3 mb-3">
              {iconMap[item.title]}

              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}