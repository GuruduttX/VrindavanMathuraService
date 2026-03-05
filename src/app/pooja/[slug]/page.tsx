// app/pooja/[slug]/page.tsx


import PoojaHero from "@/components/PoojaDetail/PoojaHero";
import PoojaOverview from "@/components/PoojaDetail/PoojaOverview";
import PoojaBenefits from "@/components/PoojaDetail/PoojaBenefits";
import PoojaIncludesStrip from "@/components/PoojaDetail/PoojaIncludesStrip";
import PoojaProcessTimeline from "@/components/PoojaDetail/PoojaProcessTimeline";
import PoojaPricingCard from "@/components/PoojaDetail/PoojaPricingCard";
import PoojaGallery from "@/components/PoojaDetail/PoojaGallery";
import DevoteeTestimonials from "@/components/PoojaDetail/DevoteeTestimonials";
import PoojaFAQ from "@/components/PoojaDetail/PoojaFAQ";
import PoojaCTA from "@/components/PoojaDetail/PoojaCTA";
export default function PoojaPage() {

  const dummyPooja = {
    title: "Maha Mrityunjaya Jaap",
    shortDesc: "Powerful Vedic ritual for health, protection and longevity.",
    price: 5100,
    duration: "2 Hours",
    location: "Vrindavan Temple",
    heroImage : "sfsdf/sdsjjdfjs"
  };

  return (
    <>
      <PoojaHero pooja={dummyPooja}/>
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
            <PoojaPricingCard  />
          </div>
        </div>

      </div>

      <PoojaCTA />
    </>
  );
}