"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DeleteConfirmModal from "@/utils/Admin/DeleteConfirmModal";
import toast from "react-hot-toast";
import CMSLoading from "@/components/Admin/CMS/CMSLoading";

type PackageType = {
  id: string;
  title: string;
  category: string;
  price: string;
};

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

export default function PkgTable() {
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

  return (
    <>
      <DeleteConfirmModal
        open={open}
        onConfirm={handleDelete}
        onCancel={() => setOpen(false)}
      />

      <div
        className="w-full overflow-x-auto rounded-2xl border border-pink-900/40
          shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        style={{ background: "#1a0b11" }}
      >
        {/* Categories */}
        <div className="flex gap-2 flex-wrap my-6 mx-5">
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

        {/* Table */}
        <table className="w-full text-left text-sm">
          <thead className="border-b border-pink-900/40">
            <tr className="text-pink-400/50 uppercase text-xs tracking-wider">
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4 text-center">Edit</th>
              <th className="px-6 py-4 text-center">Delete</th>
            </tr>
          </thead>

          <tbody>
            {filteredPackages.map((pkg) => (
              <tr
                key={pkg.id}
                className="border-b border-pink-900/20 hover:bg-pink-950/30 transition"
              >
                <td className="px-6 py-4 font-medium text-pink-100">
                  {pkg.title}
                </td>

                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase
                    bg-pink-950/80 text-pink-300 border border-pink-700/50">
                    {pkg.category}
                  </span>
                </td>

                <td className="px-6 py-4 text-pink-300 font-medium">
                  ₹ {pkg.price}
                </td>

                <td className="px-6 py-4 text-center">
                  <Link
                    href={`/admin-x9AqP7mK2/products/edit/${pkg.id}`}
                    className="inline-block px-4 py-1.5 text-sm rounded-lg
                      bg-pink-600/15 text-pink-300 border border-pink-600/35
                      hover:bg-pink-600/25 hover:border-pink-500/50 hover:text-pink-200
                      transition"
                  >
                    Edit
                  </Link>
                </td>

                <td className="px-6 py-4 text-center">
                  <button
                    disabled={open}
                    onClick={() => {
                      setSelectedId(pkg.id);
                      setOpen(true);
                    }}
                    className="px-4 py-1.5 rounded-lg text-sm
                      bg-red-900/15 text-red-400/80 border border-red-800/30
                      hover:bg-red-900/25 hover:border-red-700/40 hover:text-red-300
                      transition disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}