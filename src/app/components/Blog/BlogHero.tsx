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
    <header className="relative">

      {/* Featured Image */}
      <div className="relative h-[60vh] w-full">
        <img
          src={"\images\blog (2).webp"}
          alt={title}
          
          
          className="object-cover w-full h-full"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative -mt-40 px-6 lg:px-20">
        <div className="mx-auto max-w-4xl bg-white rounded-3xl shadow-xl p-8 md:p-12">

          {/* Category Badge */}
          <span className="inline-block bg-pink-600 text-white text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full">
            {category}
          </span>

          {/* Title */}
          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            {title}
          </h1>

          {/* Pink Accent Underline */}
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full"></div>

          {/* Meta Info */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>{date}</span>
            <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
            <span>By {author}</span>
          </div>

        </div>
      </div>
    </header>
  );
}