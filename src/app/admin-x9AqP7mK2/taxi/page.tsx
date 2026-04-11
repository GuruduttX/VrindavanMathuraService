"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LayoutGrid, Table } from "lucide-react";
import toast from "react-hot-toast";
import DeleteConfirmModal from "@/utils/Admin/DeleteConfirmModal";

/* ------------------ Types ------------------ */
interface Taxi {
  _id: string;
  title: string;
  basePrice: number;
  seats: number;
  cabType: string;
  fuelType: string;
  image: string;
  status: "available" | "unavailable";
  createdAt: string;
}

/* ------------------ Main Page ------------------ */
export default function TaxiPage() {
  const [view, setView] = useState<"card" | "table">("card");
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [fuelFilter, setFuelFilter] = useState("all");
  const [taxis, setTaxis] = useState<Taxi[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);



  const getTaxis = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/taxi`);

      if (!res.ok) {
        throw new Error("Failed to fetch taxis");
      }

      const response = await res.json();

      setTaxis(response?.data || []);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

 const handleDelete = async () => {
   if (!selectedId) return;

   try {
     const res = await fetch(
       `${process.env.NEXT_PUBLIC_URL}/api/admin/taxi/${selectedId}`,
       {
         method: "DELETE",
       },
     );

     const data = await res.json();
     if (!data.success) throw new Error(data.message);

     setTaxis((prev) => prev.filter((p) => p._id !== selectedId));
     toast.success("Deleted successfully");
     setOpen(false);
   } catch (err: any) {
     toast.error(err.message);
   }
 };

  useEffect(() => {
    getTaxis();
  }, []);

  /* ------------------ Filtering ------------------ */
  const filteredTaxi = taxis.filter((taxi) => {
    const matchSearch = taxi.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchType =
      typeFilter === "all" || taxi.cabType === typeFilter;

    const matchFuel =
      fuelFilter === "all" || taxi.fuelType === fuelFilter;

    return matchSearch && matchType && matchFuel;
  });

  /* ------------------ Stats ------------------ */
  const total = taxis.length;
  const available = taxis.filter((t) => t.status === "available").length;
  const unavailable = taxis.filter(
    (t) => t.status === "unavailable"
  ).length;

  return (
    <section className="min-h-screen">
      <DeleteConfirmModal
        open={open}
        onConfirm={handleDelete}
        onCancel={() => setOpen(false)}
      />

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-pink-100">
          Taxi Management
        </h1>
        <p className="text-sm text-pink-400/70">
          Manage your taxi fleet and services
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard title="Total Vehicles" value={total} />
        <StatCard title="Available" value={available} />
        <StatCard title="Unavailable" value={unavailable} />
      </div>

      {/* CONTROLS */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          placeholder="Search taxi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 bg-pink-950/40 border border-pink-900/40 rounded-lg text-pink-200"
        />

        {/* Cab Type */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-3 py-2 bg-pink-950/40 border border-pink-900/40 rounded-lg text-pink-200"
        >
          <option value="all">All Types</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Hatchback">Hatchback</option>
          <option value="TempoTraveller">Tempo Traveller</option>
        </select>

        {/* Fuel */}
        <select
          value={fuelFilter}
          onChange={(e) => setFuelFilter(e.target.value)}
          className="px-3 py-2 bg-pink-950/40 border border-pink-900/40 rounded-lg text-pink-200"
        >
          <option value="all">All Fuel</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>

        {/* View Toggle */}
        <div className="flex bg-pink-950/40 rounded-lg border border-pink-900/40">
          <button onClick={() => setView("card")} className="px-3 py-2">
            <LayoutGrid size={16} />
          </button>
          <button onClick={() => setView("table")} className="px-3 py-2">
            <Table size={16} />
          </button>
        </div>

        <Link
          href="/admin-x9AqP7mK2/taxi/create-taxi"
          className="px-4 py-2 bg-pink-600/30 rounded-lg text-pink-200"
        >
          + Add Taxi
        </Link>
      </div>

      {/* STATES */}
      {loading && <p className="text-pink-300">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {/* CONTENT */}
      {!loading &&
        !error &&
        (view === "card" ? (
          <TaxiCards
            taxis={filteredTaxi}
            setOpen={setOpen}
            setSelectedId={setSelectedId}
          />
        ) : (
          <TaxiTable
            taxis={filteredTaxi}
            setOpen={setOpen}
            setSelectedId={setSelectedId}
          />
        ))}
    </section>
  );
}

/* ------------------ CARD VIEW ------------------ */
function TaxiCards({
  taxis,
  setSelectedId,
  setOpen,
}: {
  taxis: Taxi[];
  setOpen: (open:boolean)=> void,
  setSelectedId: (id: string)=> void
}) {
  return (
    <div
      className="grid gap-6"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
    >
      {taxis.map((taxi) => (
        <div
          key={taxi._id}
          className="rounded-xl overflow-hidden bg-[#1e0d14]
          border border-pink-900/40 hover:-translate-y-1 transition"
        >
          <img
            src={taxi.image}
            alt={taxi.title}
            className="w-full h-44 object-cover"
          />

          <div className="p-4">
            <h3 className="text-pink-100 font-semibold">{taxi.title}</h3>

            <p className="text-xs text-pink-400 mt-1">
              🚗 {taxi.cabType} • ⛽ {taxi.fuelType}
            </p>

            <p className="text-xs text-pink-400">👥 {taxi.seats} Seats</p>

            <p className="text-pink-300 font-semibold mt-2">
              ₹ {taxi.basePrice} / trip
            </p>

            <div className="flex gap-2 mt-4">
              <Link
                href={`/admin-x9AqP7mK2/taxi/edit-taxi/${taxi._id}`}
                className="flex-1 text-center py-2 bg-pink-600/20 rounded text-pink-300"
              >
                Edit
              </Link>

              <button
                onClick={() => {
                  setSelectedId(taxi._id);
                  setOpen(true);
                }}
                className="flex-1 py-2 bg-red-900/20 rounded text-red-400"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------ TABLE VIEW ------------------ */
function TaxiTable({
  taxis,
  setSelectedId,
  setOpen,
}: {
  taxis: Taxi[];
  setOpen: (open: boolean) => void;
  setSelectedId: (id: string) => void;
}) {
  return (
    <div className="overflow-x-auto border border-pink-900/40 rounded-xl">
      <table className="w-full text-sm text-pink-200">
        <thead className="bg-pink-950/40 text-pink-300 text-xs uppercase">
          <tr>
            <th className="px-4 py-3">Taxi</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Fuel</th>
            <th className="px-4 py-3">Seats</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {taxis.map((taxi) => (
            <tr
              key={taxi._id}
              className="border-t border-pink-900/30 hover:bg-pink-900/20"
            >
              <td className="px-4 py-3">{taxi.title}</td>
              <td className="px-4 py-3">{taxi.cabType}</td>
              <td className="px-4 py-3">{taxi.fuelType}</td>
              <td className="px-4 py-3">{taxi.seats}</td>
              <td className="px-4 py-3">₹ {taxi.basePrice}</td>

              <td className="px-4 py-3 flex gap-2 justify-center">
                <Link
                  href={`/admin-x9AqP7mK2/taxi/edit-taxi/${taxi._id}`}
                  className="px-3 py-1 bg-pink-600/20 rounded text-pink-300"
                >
                  Edit
                </Link>

                <button className="px-3 py-1 bg-red-900/20 rounded text-red-400">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------ STAT CARD ------------------ */
function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-[#1e0d14] border border-pink-900/40 rounded-xl p-4">
      <p className="text-pink-400 text-sm">{title}</p>
      <h2 className="text-xl text-pink-100 font-bold">{value}</h2>
    </div>
  );
}