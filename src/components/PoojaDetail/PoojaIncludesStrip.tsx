export default function PoojaIncludesStrip() {
  const includes = [
    "Experienced Pandit",
    "Pooja Samagri",
    "Temple Arrangement",
    "Guided Rituals",
    "Sacred Mantras",
  ];

  return (
    <section className="bg-pink-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-wrap justify-center gap-6">

          {includes.map((item, index) => (
            <div
              key={index}
              className="bg-white px-6 py-4 rounded-full shadow-sm border border-pink-200 text-gray-700 font-medium hover:bg-pink-100 transition"
            >
              🌸 {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}