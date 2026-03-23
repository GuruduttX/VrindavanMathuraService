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


const getPooja = async (slug: string) => {
 const res = await fetch(
  `http://localhost:3000/api/pooja/search?slug=${slug}`
);
  if (!res.ok) throw new Error("Failed");

  return res.json();
};

export default async function PoojaPage({ params }: { params: Promise<{ slug: string }> }) {
  const {slug} = await params;
  const pooja = await getPooja(slug);
  console.log(pooja);

  return (
    <>
      <Navbar />
      <PoojaHero pooja={pooja} />

      <div className="max-w-7xl mx-auto px-6 gap-12 py-20">
        <div className="space-y-16">
          <PoojaOverview  />
          <PoojaBenefits />
          <PoojaIncludesStrip  />
          <PoojaProcessTimeline />
          <PoojaGallery  />
          <DevoteeTestimonials />
          <PoojaFAQ  />
        </div>
      </div>

      <PoojaCTA />
      <LuxuryFooter />
    </>
  );
}