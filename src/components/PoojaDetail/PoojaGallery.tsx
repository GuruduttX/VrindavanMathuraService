export default function PoojaGallery() {
  const images = [
    "/images/pooja1.jpg",
    "/images/pooja2.jpg",
    "/images/pooja3.jpg",
    "/images/pooja4.jpg",
    "/images/pooja5.jpg",
    "/images/pooja6.jpg",
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pooja Gallery
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Glimpses of sacred pooja ceremonies and spiritual moments
            from Mathura and Vrindavan temples.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md group"
            >
              <img
                src={img}
                alt="Pooja ceremony"
                className="w-full h-[250px] object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}