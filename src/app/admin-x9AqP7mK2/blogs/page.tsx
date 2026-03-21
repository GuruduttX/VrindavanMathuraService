"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutGrid, Table } from "lucide-react";

/* ------------------ Dummy Data ------------------ */
const DUMMY_BLOGS = [
  {
    _id: "1",
    title: "Top 10 Places to Visit in Vrindavan",
    description: "Explore the spiritual beauty...",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
    status: "published",
    createdAt: new Date("2026-03-20"),
  },
  {
    _id: "2",
    title: "Best Time to Visit Mathura",
    description: "Know the best season...",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97",
    status: "draft",
    createdAt: new Date("2026-03-18"),
  },
  {
    _id: "3",
    title: "Complete Guide for First-Time Visitors",
    description: "Everything you need...",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    status: "published",
    createdAt: new Date("2026-03-15"),
  },
];

export default function BlogsPage() {
  const [view, setView] = useState<"card" | "table">("card");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sort, setSort] = useState("latest");

  /* ------------------ Filtering Logic ------------------ */
  const filteredBlogs = DUMMY_BLOGS.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || blog.status === statusFilter;

    return matchesSearch && matchesStatus;
  }).sort((a, b) => {
    return sort === "latest"
      ? b.createdAt.getTime() - a.createdAt.getTime()
      : a.createdAt.getTime() - b.createdAt.getTime();
  });

  /* ------------------ Stats ------------------ */
  const total = DUMMY_BLOGS.length;
  const published = DUMMY_BLOGS.filter(b => b.status === "published").length;
  const drafts = DUMMY_BLOGS.filter(b => b.status === "draft").length;

  return (
    <section className="min-h-screen">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-pink-100">
          Blog Management
        </h1>
        <p className="text-sm text-pink-400/70">
          Advanced CMS dashboard
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard title="Total" value={total} />
        <StatCard title="Published" value={published} />
        <StatCard title="Drafts" value={drafts} />
      </div>

      {/* CONTROLS */}
      <div className="flex flex-wrap gap-3 mb-6">

        {/* Search */}
        <input
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 bg-pink-950/40 border border-pink-900/40 rounded-lg text-pink-200"
        />

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 bg-pink-950/40 border border-pink-900/40 rounded-lg text-pink-200"
        >
          <option value="all">All</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-3 py-2 bg-pink-950/40 border border-pink-900/40 rounded-lg text-pink-200"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
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

        {/* Create */}
        <Link
          href="/admin-x9AqP7mK2/blogs/create"
          className="px-4 py-2 bg-pink-600/30 rounded-lg text-pink-200"
        >
          + Create Blog
        </Link>
      </div>

      {/* CONTENT */}
      {filteredBlogs.length === 0 ? (
        <p className="text-pink-400">No results found</p>
      ) : view === "card" ? (
        <BlogCards blogs={filteredBlogs} />
      ) : (
        <BlogTable blogs={filteredBlogs} />
      )}
    </section>
  );
}

/* ------------------ CARD VIEW ------------------ */
function BlogCards({ blogs }: { blogs: any[] }) {
  return (
    <div
      className="grid gap-6"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
    >
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="group relative rounded-xl overflow-hidden bg-[#1e0d14]
          border border-pink-900/40 hover:-translate-y-1 transition"
        >
          {/* Status Badge */}
          <span
            className={`absolute top-3 right-3 px-2 py-1 text-md rounded-full z-10
            ${
              blog.status === "published"
                ? "bg-green-900/40 text-green-400"
                : "bg-yellow-900/40 text-yellow-400"
            }`}
          >
            {blog.status}
          </span>

          {/* Image */}
          <div className="h-44 overflow-hidden">
            <img
              src={blog.image}
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-pink-100 font-semibold mb-2">
              {blog.title}
            </h3>

            <p className="text-sm text-pink-400/60 line-clamp-3">
              {blog.description}
            </p>

            <div className="flex justify-between mt-4 text-xs text-pink-400">
              <span>{blog.category}</span>
              <span>{new Date(blog.createdAt).toDateString()}</span>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <Link
                href={`/admin-x9AqP7mK2/blogs/edit/${blog._id}`}
                className="flex-1 text-center py-2 rounded-lg text-sm
                bg-pink-600/20 text-pink-300"
              >
                Edit
              </Link>

              <button className="flex-1 py-2 rounded-lg text-sm
                bg-red-900/20 text-red-400">
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
function BlogTable({ blogs }: { blogs: any[] }) {
  return (
    <div className="overflow-x-auto border border-pink-900/40 rounded-xl">
      <table className="w-full text-sm text-pink-200">

        <thead className="bg-pink-950/40 text-pink-300 text-xs uppercase">
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Created</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog) => (
            <tr
              key={blog._id}
              className="border-t border-pink-900/30 hover:bg-pink-900/20"
            >
              <td className="px-4 py-3">{blog.title}</td>
              <td className="px-4 py-3">{blog.category}</td>

              <td className="px-4 py-3 text-center">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    blog.status === "published"
                      ? "bg-green-900/40 text-green-400"
                      : "bg-yellow-900/40 text-yellow-400"
                  }`}
                >
                  {blog.status}
                </span>
              </td>

              <td className="px-4 py-3 text-center">
                {new Date(blog.createdAt).toDateString()}
              </td>

              <td className="px-4 py-3 flex gap-2 justify-center">
                <Link
                  href={`/admin-x9AqP7mK2/blogs/edit/${blog._id}`}
                  className="px-3 py-1 rounded text-xs bg-pink-600/20 text-pink-300"
                >
                  Edit
                </Link>

                <button className="px-3 py-1 rounded text-xs bg-red-900/20 text-red-400">
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

/* ------------------ EMPTY STATE ------------------ */
function EmptyState() {
  return (
    <div className="text-center py-20">
      <p className="text-pink-400 mb-4">No blogs yet</p>

      <Link
        href="/admin-x9AqP7mK2/blogs/create"
        className="px-4 py-2 bg-pink-600/30 rounded-lg text-pink-200"
      >
        Create your first blog
      </Link>
    </div>
  );
}

/* ------------------ Stat Card ------------------ */
function StatCard({ title, value }: any) {
  return (
    <div className="bg-[#1e0d14] border border-pink-900/40 rounded-xl p-4">
      <p className="text-pink-400 text-sm">{title}</p>
      <h2 className="text-xl text-pink-100 font-bold">{value}</h2>
    </div>
  );
}