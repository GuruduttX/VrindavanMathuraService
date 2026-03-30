"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutGrid, Table } from "lucide-react";

/* ------------------ Dummy Data ------------------ */
const DUMMY_TAXI = [
  {
    _id: "1",
    title: "Innova Crysta",
    basePrice: 3200,
    seats: 6,
    cabType: "SUV",
    fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    status: "available",
    createdAt: new Date("2026-03-20"),
  },
  {
    _id: "2",
    title: "Swift Dzire",
    basePrice: 1800,
    seats: 4,
    cabType: "Sedan",
    fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    status: "unavailable",
    createdAt: new Date("2026-03-18"),
  },
  {
    _id: "3",
    title: "Tempo Traveller",
    basePrice: 5500,
    seats: 12,
    cabType: "TempoTraveller",
    fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    status: "available",
    createdAt: new Date("2026-03-15"),
  },
];

export default function TaxiPage() {
  const [view, setView] = useState<"card" | "table">("card");
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [fuelFilter, setFuelFilter] = useState("all");

  /* ------------------ Filtering ------------------ */
  const filteredTaxi = DUMMY_TAXI.filter((taxi) => {
    const matchSearch = taxi.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchType =
      typeFilter === "all" || taxi.cabType === typeFilter;

    const matchFuel =
      fuelFilter === "all" || taxi.fuelType === fuelFilter;

    return matchSearch && matchType && matchFuel;
  });

  /* ------------------ Stats ------------------ */
  const total = DUMMY_TAXI.length;
  const available = DUMMY_TAXI.filter(t => t.status === "available").length;
  const unavailable = DUMMY_TAXI.filter(t => t.status === "unavailable").length;

  return (
    <section className="min-h-screen">

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

      {/* CONTENT */}
      {view === "card" ? (
        <TaxiCards taxis={filteredTaxi} />
      ) : (
        <TaxiTable taxis={filteredTaxi} />
      )}
    </section>
  );
}

/* ------------------ CARD VIEW ------------------ */
function TaxiCards({ taxis }: { taxis: any[] }) {
  return (
    <div className="grid gap-6"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
    >
      {taxis.map((taxi) => (
        <div key={taxi._id}
          className="rounded-xl overflow-hidden bg-[#1e0d14]
          border border-pink-900/40 hover:-translate-y-1 transition">

          <img src={taxi.image}
            className="w-full h-44 object-cover" />

          <div className="p-4">

            <h3 className="text-pink-100 font-semibold">
              {taxi.title}
            </h3>

            <p className="text-xs text-pink-400 mt-1">
              🚗 {taxi.cabType} • ⛽ {taxi.fuelType}
            </p>

            <p className="text-xs text-pink-400">
              👥 {taxi.seats} Seats
            </p>

            <p className="text-pink-300 font-semibold mt-2">
              ₹ {taxi.basePrice} / trip
            </p>

            <div className="flex gap-2 mt-4">
              <Link
                href={`/admin-x9AqP7mK2/taxi/edit/${taxi._id}`}
                className="flex-1 text-center py-2 bg-pink-600/20 rounded text-pink-300"
              >
                Edit
              </Link>

              <button className="flex-1 py-2 bg-red-900/20 rounded text-red-400">
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
function TaxiTable({ taxis }: { taxis: any[] }) {
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
            <tr key={taxi._id}
              className="border-t border-pink-900/30 hover:bg-pink-900/20">

              <td className="px-4 py-3">{taxi.title}</td>
              <td className="px-4 py-3">{taxi.cabType}</td>
              <td className="px-4 py-3">{taxi.fuelType}</td>
              <td className="px-4 py-3">{taxi.seats}</td>
              <td className="px-4 py-3">₹ {taxi.basePrice}</td>

              <td className="px-4 py-3 flex gap-2 justify-center">
                <Link
                  href={`/admin-x9AqP7mK2/taxi/edit/${taxi._id}`}
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
function StatCard({ title, value }: any) {
  return (
    <div className="bg-[#1e0d14] border border-pink-900/40 rounded-xl p-4">
      <p className="text-pink-400 text-sm">{title}</p>
      <h2 className="text-xl text-pink-100 font-bold">{value}</h2>
    </div>
  );
}