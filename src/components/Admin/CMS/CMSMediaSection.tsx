import React from "react";
import toast from "react-hot-toast";

type EditorType = "Blog" | "Package" | "Temple" | "Pooja";

interface CMSMediaSectionProps {
  image: string;
  alt: string;
  editorType: EditorType;
  onChange: (field: "image" | "alt", value: string) => void;
}

const CMSMediaSection = ({
  image,
  alt,
  onChange,
  editorType,
}: CMSMediaSectionProps) => {

  const bucketName =
    editorType === "Blog"
      ? "BlogImages"
      : editorType === "Package"
      ? "ProductImages"
      : "TempleImages";

  return (
    <div className="space-y-6">

      {/* IMAGE UPLOAD */}
      <div>
        <label className="text-sm text-pink-300/70">
          {editorType} Image
        </label>

        <label
          htmlFor="image-upload"
          className="mt-3 block rounded-xl border-2 border-dashed border-pink-900/50
            p-6 text-center cursor-pointer
            hover:border-pink-600/50 hover:bg-pink-950/20
            transition"
        >
          {image ? (
            <img
              src={image}
              alt={alt}
              className="mx-auto max-h-40 rounded-lg object-contain"
            />
          ) : (
            <>
              <p className="text-pink-400/60 text-sm">
                Drag & drop image or{" "}
                <span className="text-pink-400">Browse</span>
              </p>
              <p className="text-xs text-pink-500/40 mt-1">
                Only .webp up to 2MB
              </p>
            </>
          )}

          <input
            id="image-upload"
            type="file"
            className="hidden"
          />
        </label>
      </div>

      {/* ALT TEXT */}
      <div>
        <label className="text-sm text-pink-300/70">
          Alt Tag For Image
        </label>
        <input
          value={alt}
          required
          onChange={(e) => onChange("alt", e.target.value)}
          placeholder="Describe the image for SEO"
          className="mt-2 w-full px-5 py-3 rounded-xl
            bg-pink-950/30 text-pink-100
            placeholder-pink-400/40
            border border-pink-900/50
            focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-600/50
            transition"
        />
      </div>

    </div>
  );
};

export default CMSMediaSection;