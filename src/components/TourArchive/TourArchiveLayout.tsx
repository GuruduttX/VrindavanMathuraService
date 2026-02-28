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
    <section className="bg-gray-50 py-20 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">

          {/* Sidebar (Filters) */}
          <aside className="lg:sticky lg:top-16 self-start ">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
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