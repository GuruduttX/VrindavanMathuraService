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
import Navbar from "@/utils/Navbar";
import LuxuryFooter from "@/utils/Footer";
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
      <Navbar/>
      <PoojaHero pooja={dummyPooja}/>
      <div className="max-w-7xl mx-auto px-6 gap-12 py-20">

        {/* LEFT MAIN CONTENT */}
        <div className=" space-y-16">
          <PoojaOverview />
          <PoojaBenefits />
          <PoojaIncludesStrip />
          <PoojaProcessTimeline />
          <PoojaGallery />
          <DevoteeTestimonials />
          <PoojaFAQ />
        </div>

        {/* RIGHT SIDEBAR */}
       

      </div>

      <PoojaCTA />
      <LuxuryFooter/>
    </>
  );
}