export default function DevoteeTestimonials() {
  const testimonials = [
    {
      name: "Rohit Sharma",
      location: "Delhi",
      text: "The pooja arrangement in Vrindavan was truly divine. Everything was organized perfectly and the pandit guided us throughout the ritual.",
    },
    {
      name: "Anjali Verma",
      location: "Mumbai",
      text: "A wonderful spiritual experience! The entire process was smooth and the team ensured that every ritual was performed properly.",
    },
    {
      name: "Suresh Gupta",
      location: "Jaipur",
      text: "Performing pooja in Mathura was a dream come true. Highly recommended for anyone seeking blessings and peace.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-pink-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Devotee Testimonials
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what devotees say about their spiritual experience in
            Mathura and Vrindavan.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border border-pink-100"
            >
              <p className="text-gray-600 mb-6 italic">
                "{item.text}"
              </p>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800">
                  {item.name}
                </span>

                <span className="text-sm text-pink-500">
                  {item.location}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}