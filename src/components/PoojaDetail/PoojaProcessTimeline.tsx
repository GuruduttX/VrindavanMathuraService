"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Choose Your Pooja",
    desc: "Select the pooja or spiritual ritual you wish to perform in Mathura or Vrindavan.",
    icon: "🛕",
    tag: "Step 01",
  },
  {
    title: "Book Your Slot",
    desc: "Pick a convenient date and time for the ceremony through our simple booking process.",
    icon: "📅",
    tag: "Step 02",
  },
  {
    title: "Pandit & Samagri Arranged",
    desc: "We arrange experienced priests and all required pooja samagri for the ritual.",
    icon: "🪔",
    tag: "Step 03",
  },
  {
    title: "Perform Sacred Ritual",
    desc: "Participate in the divine ceremony and receive blessings from Lord Krishna.",
    icon: "🕉️",
    tag: "Step 04",
  },
];

function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function StepRow({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const { ref, inView } = useInView(0.2);
  const isLeft = index % 2 === 0;

  const card = (side: "left" | "right") => (
    <div
      className={`group max-w-[280px] w-full bg-white border border-amber-100 rounded-2xl p-6
        shadow-sm hover:shadow-lg hover:shadow-amber-100 hover:-translate-y-1
        cursor-default relative overflow-hidden
        transition-all duration-600
        ${inView
          ? "opacity-100 translate-x-0"
          : side === "left"
          ? "opacity-0 -translate-x-14"
          : "opacity-0 translate-x-14"
        }`}
      style={{ transitionDelay: "120ms" }}
    >
      {/* Top accent bar */}
      <div
        className={`absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r
          ${side === "left" ? "from-amber-500 to-orange-400" : "from-orange-400 to-amber-500"}`}
      />

      <div className="flex items-start gap-3">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0
            border group-hover:scale-110 transition-transform duration-200
            ${side === "left" ? "bg-amber-50 border-amber-100" : "bg-orange-50 border-orange-100"}`}
        >
          {step.icon}
        </div>
        <div>
          <span
            className={`text-[10px] font-bold uppercase tracking-widest
              ${side === "left" ? "text-amber-400" : "text-orange-400"}`}
          >
            {step.tag}
          </span>
          <h3 className="text-gray-900 font-bold text-base leading-snug mt-0.5">
            {step.title}
          </h3>
        </div>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed mt-3">{step.desc}</p>

      {/* Connector arrow toward spine */}
      {side === "left" ? (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-amber-200" />
        </div>
      ) : (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-orange-200" />
        </div>
      )}
    </div>
  );

  return (
    <div ref={ref} className="flex flex-col items-center w-full">

      {/* Row */}
      <div className="flex items-center w-full gap-0">

        {/* LEFT slot */}
        <div className="flex-1 flex justify-end pr-6">
          {isLeft ? card("left") : <div className="max-w-[280px] w-full" />}
        </div>

        {/* Spine node */}
        <div className="flex flex-col items-center shrink-0 z-10">
          <div
            className={`w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-500
              flex items-center justify-center text-white font-extrabold text-lg
              ring-2 ring-amber-300
              shadow-[0_0_0_6px_rgba(236,72,153,0.15),_0_0_0_12px_rgba(236,72,153,0.07)]
              transition-all duration-500
              ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          >
            {index + 1}
          </div>
        </div>

        {/* RIGHT slot */}
        <div className="flex-1 flex justify-start pl-6">
          {!isLeft ? card("right") : <div className="max-w-[280px] w-full" />}
        </div>

      </div>

      {/* Vertical connector between steps */}
      {!isLast && (
        <div className="flex flex-col items-center my-1">
          <div
            className={`w-px h-10 bg-gradient-to-b from-amber-400 to-amber-200
              transition-all duration-500 origin-top
              ${inView ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
            style={{ transitionDelay: "280ms" }}
          />
          <div
            className={`w-2 h-2 rounded-full bg-amber-300 transition-all duration-300
              ${inView ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
            style={{ transitionDelay: "380ms" }}
          />
          <div
            className={`w-px h-10 bg-gradient-to-b from-amber-200 to-amber-400
              transition-all duration-500 origin-top
              ${inView ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
            style={{ transitionDelay: "430ms" }}
          />
        </div>
      )}

    </div>
  );
}

function FinalNode() {
  const { ref, inView } = useInView(0.3);

  return (
    <div ref={ref} className="flex flex-col items-center mt-2">
      <div
        className={`w-px h-8 bg-gradient-to-b from-amber-400 to-amber-200
          transition-all duration-500 origin-top
          ${inView ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
      />
      <div
        className={`w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100
          border-2 border-amber-300 flex items-center justify-center text-2xl
          shadow-[0_0_0_6px_rgba(236,72,153,0.1)]
          transition-all duration-500
          ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        style={{ transitionDelay: "150ms" }}
      >
        🙏
      </div>
      <p
        className={`text-amber-500 text-xs font-semibold uppercase tracking-widest mt-3
          transition-all duration-400
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        style={{ transitionDelay: "300ms" }}
      >
        Receive Blessings
      </p>
    </div>
  );
}

export default function PoojaProcessTimeline() {
  const { ref: headingRef, inView: headingInView } = useInView(0.2);

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">

      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">

        {/* Section header */}
        <div
          ref={headingRef}
          className={`text-center mb-20 transition-all duration-700
            ${headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
            <span className="text-amber-600 text-xs font-semibold uppercase tracking-widest">Simple Process</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            How the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
              Pooja Process
            </span>{" "}
            Works
          </h2>

          <div className="flex items-center justify-center gap-2 mt-4 mb-5">
            <div className="h-px w-10 bg-amber-200 rounded-full" />
            <div className="h-0.5 w-16 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full" />
            <div className="h-px w-10 bg-amber-200 rounded-full" />
          </div>

          <p className="text-gray-500 max-w-xl mx-auto text-[15px] leading-relaxed">
            Our simple and guided process ensures a smooth and spiritual
            experience for devotees visiting Mathura and Vrindavan.
          </p>
        </div>

        {/* Tree */}
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <StepRow
              key={index}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
          <FinalNode />
        </div>

      </div>
    </section>
  );
}