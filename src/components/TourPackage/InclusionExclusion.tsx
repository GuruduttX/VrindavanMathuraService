import { Check, X } from "lucide-react";

interface ItemType {
  description: string;
}

interface PackageType {
  inclusions: ItemType[];
  exclusions: ItemType[];
}

export default function InclusionExclusion({
  PackageData,
}: {
  PackageData: PackageType;
}) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-amber-900 mb-12">
          What's Included & Excluded
        </h2>

        {/* MAIN CONTAINER */}
        <div className="rounded-3xl border border-orange-100 bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* INCLUSIONS */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-orange-100">
              <h3 className="text-lg font-semibold text-orange-500 mb-6">
                Included in Your Package
              </h3>

              <ul className="space-y-4">
                {PackageData.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100">
                      <Check className="w-3.5 h-3.5 text-orange-500" />
                    </span>
                    <p className="text-amber-800 leading-relaxed text-[15px]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXCLUSIONS */}
            <div className="p-8">
              <h3 className="text-lg font-semibold text-amber-700 mb-6">
                Not Included
              </h3>

              <ul className="space-y-4">
                {PackageData.exclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50">
                      <X className="w-3.5 h-3.5 text-orange-300" />
                    </span>
                    <p className="text-amber-700 leading-relaxed text-[15px]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}