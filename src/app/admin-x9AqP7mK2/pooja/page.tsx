"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LayoutGrid, Table } from "lucide-react";
import toast from "react-hot-toast";
import DeleteConfirmModal from "@/utils/Admin/DeleteConfirmModal";

export default function PoojaPage() {
  const [view, setView] = useState<"card" | "table">("card");
  const [poojas, setPoojas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sort, setSort] = useState("latest");

  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  /* FETCH */
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/admin/pooja");
        const data = await res.json();
        if (!data.success) throw new Error("Failed");
        console.log("data", data.data);
        setPoojas(data.data || []);
      } catch {
        toast.error("Failed to load pooja");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  /* DELETE */
  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      const res = await fetch(`/api/admin/pooja/${selectedId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (!data.success) throw new Error();

      setPoojas((prev) => prev.filter((p) => p._id !== selectedId));
      toast.success("Deleted");
      setOpen(false);
    } catch {
      toast.error("Delete failed");
    }
  };

  /* FILTER */
  const filtered = poojas
    .filter((p) => {
      const matchesSearch = p.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || p.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) =>
      sort === "latest"
        ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

  /* STATS */
  const total = poojas.length;
  const published = poojas.filter(p => p.status === "published").length;
  const drafts = poojas.filter(p => p.status === "draft").length;

  if (loading) return <p className="text-pink-400">Loading...</p>;

  return (
    <section className="min-h-screen">

      <DeleteConfirmModal
        open={open}
        onConfirm={handleDelete}
        onCancel={() => setOpen(false)}
      />

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl text-pink-100 font-semibold">
          Pooja Management
        </h1>
        <p className="text-sm text-pink-400/70">
          Manage all pooja listings
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Total" value={total} />
        <StatCard title="Published" value={published} />
        <StatCard title="Drafts" value={drafts} />
      </div>

      {/* CONTROLS */}
      <div className="flex flex-wrap gap-3 mb-6">

        <input
          placeholder="Search pooja..."
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

        <div className="flex bg-pink-950/40 border border-pink-900/40 rounded-lg">
          <button onClick={() => setView("card")} className="px-3 py-2">
            <LayoutGrid size={16} />
          </button>
          <button onClick={() => setView("table")} className="px-3 py-2">
            <Table size={16} />
          </button>
        </div>

        <Link
          href="/admin-x9AqP7mK2/pooja/create-pooja"
          className="px-4 py-2 bg-pink-600/30 rounded-lg text-pink-200"
        >
          + Create Pooja
        </Link>
      </div>

      {/* CONTENT */}
      {filtered.length === 0 ? (
        <p className="text-pink-400">No results</p>
      ) : view === "card" ? (
        <PoojaCards poojas={filtered} setOpen={setOpen} setSelectedId={setSelectedId} />
      ) : (
        <PoojaTable poojas={filtered} setOpen={setOpen} setSelectedId={setSelectedId} />
      )}
    </section>
  );
}

function PoojaCards({ poojas, setOpen, setSelectedId }: any) {
  return (
    <div className="grid gap-6"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
    >
      {poojas.map((p: any) => (
        <div key={p._id}
          className="relative rounded-xl overflow-hidden bg-[#1e0d14] border border-pink-900/40"
        >
          {/* STATUS BADGE */}
          <span className={`absolute top-3 right-3 px-2 py-1 text-xs rounded-full
            ${p.status === "published"
              ? "bg-green-900/40 text-green-400"
              : "bg-yellow-900/40 text-yellow-400"}
          `}>
            {p.status}
          </span>

          <div className="h-44">
            <img
              src={p.images?.[0]}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4">
            <h3 className="text-pink-100 font-semibold">{p.title}</h3>

            <p className="text-sm text-pink-400/60">
              {p.temple} • {p.location}
            </p>

            <div className="mt-3 text-sm text-pink-300">
              ₹ {p.discountPrice || p.price}
            </div>

            <div className="flex gap-2 mt-4">
              <Link
                href={`/admin-x9AqP7mK2/pooja/edit-pooja/${p._id}`}
                className="flex-1 text-center py-2 bg-pink-600/20 rounded-lg"
              >
                Edit
              </Link>

              <button
                onClick={() => {
                  setSelectedId(p._id);
                  setOpen(true);
                }}
                className="flex-1 py-2 bg-red-900/20 rounded-lg text-red-400"
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

function PoojaTable({ poojas, setOpen, setSelectedId }: any) {
  return (
    <div className="overflow-x-auto border border-pink-900/40 rounded-xl">
      <table className="w-full text-sm text-pink-200">

        <thead className="bg-pink-950/40 text-pink-300 text-xs uppercase">
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Temple</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {poojas.map((p: any) => (
            <tr key={p._id} className="border-t border-pink-900/30">
              <td className="px-4 py-3">{p.title}</td>
              <td className="px-4 py-3">{p.temple}</td>
              <td className="px-4 py-3">₹ {p.price}</td>

              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded text-xs
                  ${p.status === "published"
                    ? "bg-green-900/40 text-green-400"
                    : "bg-yellow-900/40 text-yellow-400"}
                `}>
                  {p.status}
                </span>
              </td>

              <td className="px-4 py-3 flex gap-2 justify-center">
                <Link
                  href={`/admin-x9AqP7mK2/pooja/edit/${p._id}`}
                  className="px-3 py-1 bg-pink-600/20 rounded"
                >
                  Edit
                </Link>

                <button
                  onClick={() => {
                    setSelectedId(p._id);
                    setOpen(true);
                  }}
                  className="px-3 py-1 bg-red-900/20 rounded text-red-400"
                >
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
function StatCard({ title, value }: any) {
  return (
    <div className="bg-[#1e0d14] border border-pink-900/40 rounded-xl p-4">
      <p className="text-pink-400 text-sm">{title}</p>
      <h2 className="text-xl text-pink-100 font-bold">{value}</h2>
    </div>
  );
}