export default function PoojaProcessTimeline() {
  const steps = [
    {
      title: "Choose Your Pooja",
      desc: "Select the pooja or spiritual ritual you wish to perform in Mathura or Vrindavan.",
    },
    {
      title: "Book Your Slot",
      desc: "Pick a convenient date and time for the ceremony through our simple booking process.",
    },
    {
      title: "Pandit & Samagri Arranged",
      desc: "We arrange experienced priests and all required pooja samagri for the ritual.",
    },
    {
      title: "Perform Sacred Ritual",
      desc: "Participate in the divine ceremony and receive blessings from Lord Krishna.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How the Pooja Process Works
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our simple and guided process ensures a smooth and spiritual
            experience for devotees visiting Mathura and Vrindavan.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-pink-300">

          {steps.map((step, index) => (
            <div key={index} className="mb-12 ml-8 relative">

              {/* Circle */}
              <span className="absolute -left-[17px] flex items-center justify-center w-8 h-8 bg-pink-500 text-white rounded-full font-semibold">
                {index + 1}
              </span>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}