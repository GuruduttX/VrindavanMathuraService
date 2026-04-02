"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LayoutGrid, Table } from "lucide-react";
import DeleteConfirmModal from "@/utils/Admin/DeleteConfirmModal";

export default function HotelsPage() {
  const [view, setView] = useState<"card" | "table">("card");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sort, setSort] = useState("latest");
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  /* ---------------- FETCH ---------------- */
  const fetchHotels = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/hotels", {
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setHotels(data.data || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  /* ---------------- DELETE ---------------- */
  const handleDelete = async (id: string) => {
    try {
      setDeletingId(id);

      const res = await fetch(`/api/hotels/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      // Optimistic UI
      setHotels((prev) => prev.filter((h) => h._id !== id));
    } catch (err) {
      console.log(err);
    } finally {
      setDeletingId(null);
    }
  };

  /* ---------------- FILTER ---------------- */
  const filteredHotels = hotels
    .filter((hotel) => {
      const matchesSearch = hotel.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || hotel.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const aDate = new Date(a.createdAt).getTime();
      const bDate = new Date(b.createdAt).getTime();

      return sort === "latest" ? bDate - aDate : aDate - bDate;
    });

  /* ---------------- STATS ---------------- */
  const total = hotels.length;
  const published = hotels.filter((h) => h.status === "published").length;
  const drafts = hotels.filter((h) => h.status === "draft").length;

  return (
    <section className="min-h-screen">
      {/* HEADER */}
     
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-pink-100">
          Hotel Management
        </h1>
        <p className="text-sm text-pink-400/70">
          Manage your hotel listings and availability
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard title="Total Hotels" value={total} />
        <StatCard title="Published" value={published} />
        <StatCard title="Drafts" value={drafts} />
      </div>

      {/* CONTROLS */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          placeholder="Search hotels..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 bg-pink-950/40 border border-pink-900/40 rounded-lg text-pink-200"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 bg-pink-950/40 border border-pink-900/40 rounded-lg text-pink-200"
        >
          <option value="all">All</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-3 py-2 bg-pink-950/40 border border-pink-900/40 rounded-lg text-pink-200"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>

        <div className="flex bg-pink-950/40 rounded-lg border border-pink-900/40">
          <button onClick={() => setView("card")} className="px-3 py-2">
            <LayoutGrid size={16} />
          </button>
          <button onClick={() => setView("table")} className="px-3 py-2">
            <Table size={16} />
          </button>
        </div>

        <Link
          href="/admin-x9AqP7mK2/hotels/create-hotel"
          className="px-4 py-2 bg-pink-600/30 rounded-lg text-pink-200"
        >
          + Add Hotel
        </Link>
      </div>

      {/* CONTENT */}
      {loading ? (
        <p className="text-pink-400">Loading...</p>
      ) : filteredHotels.length === 0 ? (
        <p className="text-pink-400">No hotels found</p>
      ) : view === "card" ? (
        <HotelCards hotels={filteredHotels} onDelete={handleDelete} deletingId={deletingId} />
      ) : (
        <HotelTable hotels={filteredHotels} onDelete={handleDelete} deletingId={deletingId} />
      )}
    </section>
  );
}

/* ---------------- CARD ---------------- */
function HotelCards({ hotels, onDelete, deletingId }: any) {
  return (
    <div
      className="grid gap-6"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
    >
      {hotels.map((hotel: any) => (
        <div key={hotel._id} className="rounded-xl overflow-hidden bg-[#1e0d14] border border-pink-900/40">
          <div className="h-44 overflow-hidden">
            <img src={hotel.image} className="w-full h-full object-cover" />
          </div>

          <div className="p-4">
            <h3 className="text-pink-100 font-semibold">{hotel.title}</h3>
            <p className="text-xs text-pink-400 mt-1">📍 {hotel.location}</p>
            <p className="text-sm text-yellow-400 mt-1">
              ⭐ {hotel.rating} ({hotel.reviews})
            </p>
            <p className="text-pink-300 mt-2 font-semibold">
              ₹ {hotel.price}
            </p>

            <div className="flex gap-2 mt-4">
              <Link
                href={`/admin-x9AqP7mK2/hotels/edit-hotel/${hotel._id}`}
                className="flex-1 text-center py-2 bg-pink-600/20 rounded-lg text-pink-300"
              >
                Edit
              </Link>

              <button
                onClick={() => onDelete(hotel._id)}
                disabled={deletingId === hotel._id}
                className="flex-1 py-2 bg-red-900/20 rounded-lg text-red-400"
              >
                {deletingId === hotel._id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- TABLE ---------------- */
function HotelTable({ hotels, onDelete, deletingId }: any) {
  return (
    <div className="overflow-x-auto border border-pink-900/40 rounded-xl">
      <table className="w-full text-sm text-pink-200">
        <thead className="bg-pink-950/40 text-pink-300 text-xs uppercase">
          <tr>
            <th className="px-4 py-3">Hotel</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Rating</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {hotels.map((hotel: any) => (
            <tr key={hotel._id} className="border-t border-pink-900/30">
              <td className="px-4 py-3">{hotel.title}</td>
              <td className="px-4 py-3">{hotel.location}</td>
              <td className="px-4 py-3">₹ {hotel.price}</td>
              <td className="px-4 py-3">⭐ {hotel.rating}</td>

              <td className="px-4 py-3 flex gap-2 justify-center">
                <Link
                  href={`/admin-x9AqP7mK2/hotels/edit-hotel/${hotel._id}`}
                  className="px-3 py-1 bg-pink-600/20 rounded text-pink-300"
                >
                  Edit
                </Link>

                <button
                  onClick={() => onDelete(hotel._id)}
                  disabled={deletingId === hotel._id}
                  className="px-3 py-1 bg-red-900/20 rounded text-red-400"
                >
                  {deletingId === hotel._id ? "..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------------- STAT ---------------- */
function StatCard({ title, value }: any) {
  return (
    <div className="bg-[#1e0d14] border border-pink-900/40 rounded-xl p-4">
      <p className="text-pink-400 text-sm">{title}</p>
      <h2 className="text-xl text-pink-100 font-bold">{value}</h2>
    </div>
  );
}