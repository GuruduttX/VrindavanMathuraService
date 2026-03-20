import React from 'react'

export const categories = [
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

const Blogcategories = [
  "All Blogs",
  "Krishna Leela & Spirtuality",
  "Temple Guides",
  "Sacred Places & Nature",
  "Travel Guides",
  "Festivals & Events",
  "Pilgrimage & Yatra",
  "Food & Culture",
  "Tour Packages & Services",
  "Stories & Experiences",
];

const Templecategories = [
  "All",
  "Vrindavan",
  "Mathura",
  "Barsana",
  "Gokul",
  "Govardhan",
  "Nandgaon",
  "Baldeo",
  "Rawal",
];

const inputClass = `
  mt-2 w-full px-5 py-3 rounded-xl
  bg-pink-950/30 text-pink-100
  placeholder-pink-400/40
  border border-pink-900/50
  focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-600/50
  transition
`;

const CMSMetaSection = ({
  title, category, slug, onChange, editorType,
}: {
  title: string;
  category: string;
  slug: string;
  onChange: any;
  editorType: "Blog" | "Package" | "Temple";
}) => {
  return (
    <div className="space-y-6">

      {/* Title */}
      <div>
        <label className="text-sm text-pink-300/70">{editorType} Title</label>
        <input
          value={title}
          placeholder="A Way to Grow Your Online Business With Krishna"
          className={inputClass}
          required
          onChange={(e) => onChange("title", e.target.value)}
        />
      </div>

      {/* Category + Slug */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="text-sm text-pink-300/70">Category</label>
          <select
            required
            value={category}
            onChange={(e) => onChange("category", e.target.value)}
            className={`${inputClass} cursor-pointer`}
          >
            {editorType === "Blog" ? (
              <>
                <option value="" className="bg-[#1a0b11]">Select Category</option>
                {Blogcategories.map((cat, idx) => (
                  <option key={idx} value={cat} className="bg-[#1a0b11]">{cat}</option>
                ))}
              </>
            ) : editorType === "Package" ? (
              <>
                <option value="" className="bg-[#1a0b11]">Select Category</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat} className="bg-[#1a0b11]">{cat}</option>
                ))}
              </>
            ) : (
              <>
                <option value="" className="bg-[#1a0b11]">Select Location</option>
                {Templecategories.map((cat, idx) => (
                  <option key={idx} value={cat} className="bg-[#1a0b11]">{cat}</option>
                ))}
              </>
            )}
          </select>
        </div>

        <div>
          <label className="text-sm text-pink-300/70">
            Slug <span className="text-red-400">*</span>
          </label>
          <input
            value={slug}
            onChange={(e) => onChange("slug", e.target.value)}
            placeholder="a-human-approach-to-meet-krishna"
            className={inputClass}
            required
          />
        </div>

      </div>
    </div>
  );
};

export default CMSMetaSection;