import { Sparkles } from "lucide-react";

interface HighlightItem {
  description: string;
}

interface PackageType {
  highlights: HighlightItem[];
}

export default function PackageHighlights({
  PackageData,
}: {
  PackageData: PackageType;
}) {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP DIVIDER */}
        <div className="border-t border-pink-100 mb-8" />

        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Trip Highlights
        </h2>

        <div className="space-y-5">
          {PackageData.highlights.map((item, index) => (
            <div
              key={index}
              className="relative flex gap-4 items-start rounded-2xl 
              bg-gradient-to-br from-pink-50 to-white 
              border border-pink-100 
              px-6 py-5"
            >
              {/* LEFT ACCENT BAR */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500 rounded-l-2xl" />

              {/* ICON */}
              <div className="mt-1 text-pink-600">
                <Sparkles className="w-5 h-5" />
              </div>

              {/* TEXT */}
              <p className="text-gray-800 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="border-b border-pink-100 mt-10" />

      </div>
    </section>
  );
}