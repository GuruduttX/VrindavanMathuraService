export default function PoojaOverview() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative h-[400px] w-full">
          <img
            src="/images/vrindavan-pooja.jpg"
            alt="Vrindavan Pooja"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sacred Pooja Services in Mathura & Vrindavan
          </h2>

          <p className="text-gray-600 mb-4">
            Mathura and Vrindavan are among the most sacred places in India,
            known as the divine land of Lord Krishna. Devotees from across
            the world visit these holy cities to perform spiritual rituals
            and poojas to seek blessings, peace, and prosperity.
          </p>

          <p className="text-gray-600 mb-6">
            We help you arrange authentic pooja ceremonies guided by
            experienced priests at renowned temples and sacred ghats.
            Whether you want a personal pooja, family ritual, or special
            religious ceremony, we make the entire process smooth and
            spiritually fulfilling.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Explore Pooja Packages
          </button>
        </div>

      </div>
    </section>
  );
}