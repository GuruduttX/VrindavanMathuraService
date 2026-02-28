export default function PoojaCTASection() {
  return (
    <section className="relative py-14 bg-gradient-to-r from-pink-600 to-rose-500 overflow-hidden">

      {/* Top Wave */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,64 C240,0 1200,0 1440,64 L1440,0 L0,0 Z"
          fill="white"
          opacity="0.15"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-white mb-6">
              Preserve the Divine Moments
            </h2>

            <p className="text-pink-100 mb-8 text-lg leading-relaxed">
              Explore sacred ceremonies and spiritual events conducted with
              devotion and tradition. Revisit divine blessings anytime.
            </p>

            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-medium hover:bg-pink-100 transition">
              Browse All Poojas
            </button>
          </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-[480px] h-[420px]">

            {/* Gradient Border Frame */}
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-pink-500 to-rose-400">
              <div className="w-full h-full rounded-2xl bg-white"></div>
            </div>

            {/* Image */}
            <img
              src="/images/pooja/pooja-image.webp"
              alt="Pooja Ritual"
              className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-xl object-cover shadow-xl"
            />
          </div>
        </div>


        </div>
      </div>

      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,36 C240,100 1200,100 1440,36 L1440,100 L0,100 Z"
          fill="white"
          opacity="0.15"
        />
      </svg>

    </section>
  );
}