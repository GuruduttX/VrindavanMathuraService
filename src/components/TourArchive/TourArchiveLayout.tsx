"use client";

import { TourFilterProvider } from "@/context/TourFilterContext";


interface TourArchiveLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function TourArchiveLayout({
  sidebar,
  children,
}: TourArchiveLayoutProps) {
  return (
    <TourFilterProvider>
      <section className="bg-gray-50 py-10 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">
          {/* Top Filters (Passed via the 'sidebar' prop) */}
          <div className="w-full">{sidebar}</div>

          {/* Main Content (Packages Grid) */}
          <div className="w-full">{children}</div>
        </div>
      </section>
    </TourFilterProvider>
  );
}
