import {
  Bus,
  Hotel,
  Coffee,
  MapPin
} from "lucide-react";

interface InclusionItem {
  label: string;
  icon: React.ReactNode;
  checked: boolean;
}

interface PackageType {
  transfer_included: boolean;
  stay_included: boolean;
  breakfast_included: boolean;
  sightseeing_included: boolean;
}

export default function PackageInclusionsStrip({
  packageData,
}: {
  packageData: PackageType;
}) {
  const inclusions: InclusionItem[] = [
    {
      label: "Transfer Included",
      icon: <Bus className="w-5 h-5" />,
      checked: packageData.transfer_included,
    },
    {
      label: "Stay Included",
      icon: <Hotel className="w-5 h-5" />,
      checked: packageData.stay_included,
    },
    {
      label: "Breakfast Included",
      icon: <Coffee className="w-5 h-5" />,
      checked: packageData.breakfast_included,
    },
    {
      label: "Sightseeing Included",
      icon: <MapPin className="w-5 h-5" />,
      checked: packageData.sightseeing_included,
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP BORDER */}
        <div className="border-t border-pink-100 pt-6">

          <div className="flex flex-wrap gap-x-10 gap-y-4 items-center">

            {inclusions.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 text-sm ${
                  item.checked
                    ? "text-gray-800"
                    : "text-gray-300"
                }`}
              >
                <span
                  className={`${
                    item.checked
                      ? "text-pink-600"
                      : "text-gray-300"
                  }`}
                >
                  {item.icon}
                </span>
                <span className="font-medium">
                  {item.label}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* BOTTOM BORDER */}
        <div className="border-b border-pink-100 mt-6" />

      </div>
    </section>
  );
}