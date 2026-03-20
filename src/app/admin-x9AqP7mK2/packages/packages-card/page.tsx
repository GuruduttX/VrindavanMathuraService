"use client";

import { useEffect, useState } from "react";
import DeleteConfirmModal from "@/utils/Admin/DeleteConfirmModal";
import toast from "react-hot-toast";
import Link from "next/link";

const CATEGORIES = [
  "Explore All",
  "1 Day Tour Package",
  "2 Day Tour Package",
  "3 Day Tour Package",
  "4 Day Tour Package",
  "5 Day Tour Package",
  "6 Day Tour Package",
  "7 Day Tour Package",
  "8 Day Tour Package",
  "9 Day Tour Package",
  "10 Day Tour Package",
];

export default function ProductCards() {
  const [packages, setPackage] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Explore All");

  useEffect(() => {
    const getPackages = async () => {
      try {
        const res = await fetch("/api/tour-packages");
        const data = await res.json();
        if (!data.success) throw new Error("Failed to fetch packages");
        setPackage(data.data || []);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load packages");
      } finally {
        setLoading(false);
      }
    };
    getPackages();
  }, []);

  const filteredPackages =
    activeCategory === "Explore All"
      ? packages
      : packages.filter((pkg: any) => pkg.category === activeCategory);

  const handleDelete = async () => {
    if (!selectedId) return;
    try {
      const res = await fetch(`/api/tour-packages/${selectedId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      toast.success("Package Deleted Successfully");
      setPackage((prev) => prev.filter((p) => p._id !== selectedId));
      setSelectedId(null);
      setOpen(false);
    } catch (error: any) {
      toast.error(error.message || "Delete failed");
    }
  };

  if (packages.length === 0) {
    return <p className="text-pink-400 text-sm">No packages found.</p>;
  }

  return (
    <>
      <DeleteConfirmModal
        open={open}
        onConfirm={handleDelete}
        onCancel={() => setOpen(false)}
      />

      <section className="min-h-screen p-6 md:p-10 bg-[#12060a]">

        {/* Subtle background glow */}
        <div className="fixed inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 35% at 15% 15%, rgba(236,72,153,0.09) 0%, transparent 60%), radial-gradient(ellipse 45% 30% at 85% 75%, rgba(244,114,182,0.06) 0%, transparent 55%)",
          }}
        />

        {/* Header */}
        <div className="relative mb-6">
          <h1 className="text-2xl font-semibold text-pink-100 tracking-tight">
            Tour Packages
          </h1>
          <p className="text-sm text-pink-400/70 mt-1">
            Manage and organise your travel offerings
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-pink-900/50 mb-6 relative" />

        {/* Categories */}
        <div className="relative flex gap-2 flex-wrap mb-8">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 cursor-pointer tracking-wide
                ${
                  activeCategory === cat
                    ? "bg-pink-600/30 text-pink-200 border-pink-500/60 shadow-[0_0_12px_rgba(236,72,153,0.2)]"
                    : "bg-pink-950/40 text-pink-400/70 border-pink-900/50 hover:bg-pink-900/40 hover:text-pink-300 hover:border-pink-700/50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div
          className="relative grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
        >
          {filteredPackages.map((packag: any) => (
            <article
              key={packag._id}
              className="group rounded-xl overflow-hidden flex flex-col cursor-pointer
                bg-[#1e0d14] border border-pink-900/40
                shadow-[0_4px_24px_rgba(0,0,0,0.5)]
                hover:-translate-y-1 hover:border-pink-600/50
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(236,72,153,0.07)]
                transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={packag.heroimage?.image}
                  alt={packag.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 brightness-90"
                />
                {/* gradient fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e0d14] via-transparent to-transparent opacity-70" />
                {/* Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase rounded-full
                  bg-pink-950/80 text-pink-300 border border-pink-700/50 backdrop-blur-sm">
                  {packag.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-[15px] font-semibold text-pink-100 mb-2 leading-snug">
                  {packag.title}
                </h3>
                <p className="text-sm text-pink-400/60 line-clamp-3 leading-relaxed flex-1">
                  {packag.itinerary?.[0]?.description}
                </p>

                {/* Actions */}
                <div className="flex gap-3 mt-5">
                  <Link
                    href={`/admin-x9AqP7mK2/products/edit/${packag._id}`}
                    className="flex-1 text-center px-4 py-2 rounded-lg text-sm font-medium
                      bg-pink-600/15 text-pink-300 border border-pink-600/35
                      hover:bg-pink-600/25 hover:border-pink-500/50 hover:text-pink-200
                      transition-all duration-200"
                  >
                    Edit
                  </Link>
                  <button
                    disabled={open}
                    onClick={() => {
                      setSelectedId(packag._id);
                      setOpen(true);
                    }}
                    className="flex-1 px-4 py-2 rounded-lg text-sm font-medium
                      bg-red-900/15 text-red-400/80 border border-red-800/30
                      hover:bg-red-900/25 hover:border-red-700/40 hover:text-red-300
                      transition-all duration-200
                      disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="px-5 py-3.5 border-t border-pink-900/40 bg-pink-950/30 flex justify-between items-center">
                <span className="text-sm font-semibold text-pink-300">
                  ₹ {packag.price}
                </span>
                <span className="text-xs text-pink-500/50">
                  {new Date(packag.created_at).toDateString()}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}