"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DeleteConfirmModal from "@/utils/Admin/DeleteConfirmModal";
import Link from "next/link";

export default function HotelTable() {
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch("/api/hotels");
        const data = await res.json();

        if (!data.success) throw new Error("Failed to fetch");

        setHotels(data.data || []);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load hotels");
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      const res = await fetch(`/api/hotels/${selectedId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!data.success) throw new Error(data.message);

      toast.success("Hotel deleted");

      setHotels((prev) => prev.filter((h) => h._id !== selectedId));

      setOpen(false);
      setSelectedId(null);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (loading) {
    return <p className="text-pink-400">Loading...</p>;
  }

  if (hotels.length === 0) {
    return <p className="text-pink-400">No hotels found</p>;
  }

  return (
    <>
      <DeleteConfirmModal
        open={open}
        onConfirm={handleDelete}
        onCancel={() => setOpen(false)}
      />

      <div className="p-6 bg-[#12060a] min-h-screen">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-pink-100">
            Hotels Table
          </h1>
          <p className="text-sm text-pink-400/70">
            Manage all hotel records
          </p>
        </div>

        {/* Table Wrapper (Responsive) */}
        <div className="overflow-x-auto rounded-xl border border-pink-900/40">

          <table className="w-full min-w-[900px] text-sm text-left text-pink-200">

            {/* Table Head */}
            <thead className="bg-pink-950/40 text-pink-300 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Rating</th>
                <th className="px-4 py-3">Host</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Created</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {hotels.map((hotel) => (
                <tr
                  key={hotel._id}
                  className="border-t border-pink-900/30 hover:bg-pink-900/20 transition"
                >
                  <td className="px-4 py-3 font-medium">
                    {hotel.title}
                  </td>

                  <td className="px-4 py-3">
                    {hotel.location}
                  </td>

                  <td className="px-4 py-3">
                    ₹ {hotel.price}
                  </td>

                  <td className="px-4 py-3">
                    ⭐ {hotel.rating}
                  </td>

                  <td className="px-4 py-3">
                    {hotel.host}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        hotel.status === "active"
                          ? "bg-green-900/20 text-green-400"
                          : "bg-red-900/20 text-red-400"
                      }`}
                    >
                      {hotel.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-xs text-pink-400">
                    {new Date(hotel.createdAt).toDateString()}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3 flex gap-2 justify-center">
                    <Link
                      href={`/admin/hotels/edit/${hotel._id}`}
                      className="px-3 py-1 rounded-md text-xs
                        bg-pink-600/20 text-pink-300 border border-pink-600/40
                        hover:bg-pink-600/30"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => {
                        setSelectedId(hotel._id);
                        setOpen(true);
                      }}
                      className="px-3 py-1 rounded-md text-xs
                        bg-red-900/20 text-red-400 border border-red-800/40
                        hover:bg-red-900/30"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}