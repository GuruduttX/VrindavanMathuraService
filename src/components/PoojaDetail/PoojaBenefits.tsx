export default function PoojaBenefits() {
  const benefits = [
    {
      title: "Spiritual Peace",
      desc: "Performing pooja in the holy land of Mathura and Vrindavan brings inner peace and spiritual harmony.",
      icon: "🕉️",
    },
    {
      title: "Divine Blessings",
      desc: "Seek blessings from Lord Krishna and other deities through sacred rituals performed by experienced priests.",
      icon: "🙏",
    },
    {
      title: "Positive Energy",
      desc: "Poojas help remove negative energies and invite positivity, prosperity, and happiness into life.",
      icon: "✨",
    },
    {
      title: "Family Wellbeing",
      desc: "Special poojas are performed for health, success, prosperity, and overall wellbeing of your family.",
      icon: "🏵️",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Benefits of Performing Pooja
        </h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Performing sacred poojas in Mathura and Vrindavan helps devotees
          connect spiritually and receive divine blessings from Lord Krishna.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}