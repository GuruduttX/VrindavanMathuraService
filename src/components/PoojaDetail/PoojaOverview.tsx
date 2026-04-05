interface ImageType {
   image : string;
   alt : string;
}
interface PoojaOverviewProps {
  imageData: ImageType;
  description: string;
}

export default function PoojaOverview({ imageData, description }: PoojaOverviewProps) {

  return (
    
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-50 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* ── Image Side ── */}
        <div className="relative">
          {/* Decorative border frame behind image */}
          <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-amber-200 pointer-events-none" />

          {/* amber block accent */}
          <div className="absolute -bottom-5 -right-5 w-2/3 h-2/3 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 pointer-events-none" />

          <div className="relative h-[440px] w-full rounded-2xl overflow-hidden shadow-xl">
            <img
              src={imageData?.image || ""}
              alt={imageData?.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
          </div>

          {/* Floating stat badge */}
          <div className="absolute -bottom-6 left-8 bg-white rounded-2xl shadow-lg shadow-amber-100 px-5 py-3 border border-amber-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-xl">
              🛕
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider leading-none mb-0.5">
                Temples Covered
              </p>
              <p className="text-gray-900 font-bold text-lg leading-none">
                50+
              </p>
            </div>
          </div>

          {/* Floating devotees badge */}
          <div className="absolute -top-5 right-8 bg-white rounded-2xl shadow-lg shadow-amber-100 px-5 py-3 border border-amber-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-xl">
              🙏
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider leading-none mb-0.5">
                Happy Devotees
              </p>
              <p className="text-gray-900 font-bold text-lg leading-none">
                10,000+
              </p>
            </div>
          </div>
        </div>

        {/* ── Content Side ── */}
        <div className="flex flex-col gap-6">
          {/* Label */}
          <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
            <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">
              Mathura & Vrindavan
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Sacred Pooja Services in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
              Mathura & Vrindavan
            </span>
          </h2>

          {/* amber divider */}
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-8 bg-amber-200 rounded-full" />
            <div className="h-0.5 w-20 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full" />
          </div>

          {/* Backend description */}
          <p className="text-gray-500 leading-relaxed text-[15px]">
            {description}
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mt-1">
            {[
              "✦ Certified Pandits",
              "✦ Doorstep Service",
              "✦ All Samagri Included",
              "✦ Vedic Rituals",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-amber-700 bg-amber-50 border border-amber-100"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full
              bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-sm
              shadow-[0_4px_20px_#FFFBEA]
              hover:shadow-[0_6px_28px_#F86400] hover:scale-[1.03]
              active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Explore Pooja Packages
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">
                →
              </span>
            </button>

            <button
              className="inline-flex items-center gap-2 text-amber-600 text-sm font-semibold
              hover:text-orange-600 hover:gap-3 transition-all duration-200 cursor-pointer group"
            >
              Talk to a Pandit
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}