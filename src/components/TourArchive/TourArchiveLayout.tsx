"use client";

interface TourArchiveLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function TourArchiveLayout({
  sidebar,
  children,
}: TourArchiveLayoutProps) {
  return (
    <section className="bg-gray-50 py-10 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-8 xl:gap-16">

          {/* Sidebar (Filters) */}
          <aside className="xl:sticky xl:top-16 self-start">
            <div className="xl:bg-white xl:rounded-3xl xl:shadow-lg xl:border xl:border-gray-100 xl:p-6">
              {sidebar}
            </div>
          </aside>

          {/* Main Content */}
          <div className="space-y-12">
            {children}
          </div>

        </div>

      </div>
    </section>
  );
}