"use client";

import { useEffect, useState } from "react";
import DeleteConfirmModal from "@/utils/Admin/DeleteConfirmModal";
import toast from "react-hot-toast";
import Link from "next/link";

export default function HotelCards() {
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const getHotels = async () => {
      try {
        const res = await fetch("/api/hotels");
        const data = await res.json();

        if (!data.success) throw new Error("Failed to fetch hotels");

        setHotels(data.data || []);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load hotels");
      } finally {
        setLoading(false);
      }
    };

    getHotels();
  }, []);

  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      const res = await fetch(`/api/hotels/${selectedId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!data.success) throw new Error(data.message);

      toast.success("Hotel Deleted Successfully");

      setHotels((prev) => prev.filter((h) => h._id !== selectedId));

      setSelectedId(null);
      setOpen(false);
    } catch (error: any) {
      toast.error(error.message || "Delete failed");
    }
  };

  if (loading) {
    return <p className="text-pink-400 text-sm">Loading hotels...</p>;
  }

  if (hotels.length === 0) {
    return <p className="text-pink-400 text-sm">No hotels found.</p>;
  }

  return (
    <>
      <DeleteConfirmModal
        open={open}
        onConfirm={handleDelete}
        onCancel={() => setOpen(false)}
      />

      <section className="min-h-screen p-6 md:p-10 bg-[#12060a]">

        {/* Background Glow */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 35% at 15% 15%, rgba(236,72,153,0.09) 0%, transparent 60%), radial-gradient(ellipse 45% 30% at 85% 75%, rgba(244,114,182,0.06) 0%, transparent 55%)",
          }}
        />

        {/* Header */}
        <div className="relative mb-6">
          <h1 className="text-2xl font-semibold text-pink-100">
            Hotels
          </h1>
          <p className="text-sm text-pink-400/70 mt-1">
            Manage your hotel listings
          </p>
        </div>

        <div className="w-full h-px bg-pink-900/50 mb-6" />

        {/* Cards */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
        >
          {hotels.map((hotel: any) => (
            <article
              key={hotel._id}
              className="group rounded-xl overflow-hidden flex flex-col
                bg-[#1e0d14] border border-pink-900/40
                hover:-translate-y-1 hover:border-pink-600/50
                transition-all duration-300"
            >
              {/* Image (optional fallback) */}
              <div className="h-44 bg-pink-900/20 flex items-center justify-center text-pink-400 text-sm">
                No Image
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-[15px] font-semibold text-pink-100 mb-2">
                  {hotel.title}
                </h3>

                <p className="text-sm text-pink-400/60 line-clamp-3 flex-1">
                  {hotel.subcontent}
                </p>

                {/* Rating + Location */}
                <div className="flex justify-between mt-3 text-xs text-pink-400">
                  <span>⭐ {hotel.rating}</span>
                  <span>{hotel.location}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-5">
                  <Link
                    href={`/admin/hotels/edit/${hotel._id}`}
                    className="flex-1 text-center px-4 py-2 rounded-lg text-sm
                      bg-pink-600/15 text-pink-300 border border-pink-600/35"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => {
                      setSelectedId(hotel._id);
                      setOpen(true);
                    }}
                    className="flex-1 px-4 py-2 rounded-lg text-sm
                      bg-red-900/15 text-red-400 border border-red-800/30"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-pink-900/40 bg-pink-950/30 flex justify-between items-center">
                <span className="text-sm font-semibold text-pink-300">
                  ₹ {hotel.price}
                </span>

                <span className="text-xs text-pink-500">
                  {new Date(hotel.createdAt).toDateString()}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}