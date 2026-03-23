import Image from "next/image";

interface BlogHeroProps {
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
}

export default function BlogHero({
  title,
  category,
  date,
  author,
  image,
}: BlogHeroProps) {
  return (
    <header className="h-[90vh] relative pt-32 pb-28 px-6 lg:px-20 bg-gradient-to-br from-pink-700 via-fuchsia-400 to-purple-500 overflow-hidden">

      {/* Subtle glow blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-5 items-center">

        {/* ── LEFT CONTENT ── */}
        <div className="space-y-6">

          {/* Category pill */}
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-white/30">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            {category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>

          {/* Divider */}
          <div className="h-[2px] w-20 bg-white/50 rounded-full" />

          {/* Short description */}
          <p className="text-white/80 text-sm leading-relaxed max-w-md">
            Discover history, darshan timings, aarti schedule, location details,
            and helpful travel tips for devotees.
          </p>

          {/* Author + Date */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/25 border border-white/40 flex items-center justify-center text-white font-bold text-sm">
              {author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{author}</p>
              <p className="text-xs text-white/65">
                {new Date(date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-4 pt-1">
            <button className="bg-white text-fuchsia-600 text-sm font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              Plan Your Visit
            </button>
            <button className="text-white/80 text-sm font-medium hover:text-white transition-colors flex items-center gap-1">
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

        </div>

        {/* ── RIGHT IMAGE ── */}
        <div className="relative">

          {/* Soft glow behind card */}
          <div className="absolute inset-4 bg-white/20 blur-2xl rounded-3xl pointer-events-none" />

          {/* Image card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/30">
            <img
              src={image}
              alt={title}
              className="w-full max-h-[420px] object-cover block"
            />

            {/* Image bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-wider">Temple Darshan</p>
                <p className="text-white/70 text-xs">Open Daily</p>
              </div>
              <button className="flex items-center gap-1.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Live Darshan
              </button>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-4 grid grid-cols-3 divide-x divide-white/20 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 px-2 py-3">
            {[
              { value: "500+", label: "Years Heritage" },
              { value: "10k+", label: "Daily Devotees" },
              { value: "365",  label: "Days Open" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-0.5">
                <span className="text-white font-bold text-lg leading-none">{s.value}</span>
                <span className="text-white/60 text-[10px] uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Wavy SVG bottom border ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>

    </header>
  );
}