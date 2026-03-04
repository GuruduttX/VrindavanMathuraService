// app/pooja/[slug]/page.tsx

import PoojaHero from "@/components/pooja/PoojaHero";
import PoojaOverview from "@/components/pooja/PoojaOverview";
import PoojaBenefits from "@/components/pooja/PoojaBenefits";
import PoojaIncludesStrip from "@/components/pooja/PoojaIncludesStrip";
import PoojaProcessTimeline from "@/components/pooja/PoojaProcessTimeline";
import PoojaPricingCard from "@/components/pooja/PoojaPricingCard";
import PoojaGallery from "@/components/pooja/PoojaGallery";
import DevoteeTestimonials from "@/components/pooja/DevoteeTestimonials";
import PoojaFAQ from "@/components/pooja/PoojaFAQ";
import PoojaCTA from "@/components/pooja/PoojaCTA";

export default function PoojaPage() {

  const dummyPooja = {
    title: "Maha Mrityunjaya Jaap",
    shortDesc: "Powerful Vedic ritual for health, protection and longevity.",
    price: 5100,
    duration: "2 Hours",
    location: "Vrindavan Temple",
  };

  return (
    <>
      <PoojaHero pooja={dummyPooja} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 py-20">

        {/* LEFT MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-16">
          <PoojaOverview />
          <PoojaBenefits />
          <PoojaIncludesStrip />
          <PoojaProcessTimeline />
          <PoojaGallery />
          <DevoteeTestimonials />
          <PoojaFAQ />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <PoojaPricingCard pooja={dummyPooja} />
          </div>
        </div>

      </div>

      <PoojaCTA />
    </>
  );
}