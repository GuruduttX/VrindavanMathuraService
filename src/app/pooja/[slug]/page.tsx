import PoojaHero from "@/components/PoojaDetail/PoojaHero";
import PoojaOverview from "@/components/PoojaDetail/PoojaOverview";
import PoojaBenefits from "@/components/PoojaDetail/PoojaBenefits";
import PoojaIncludesStrip from "@/components/PoojaDetail/PoojaIncludesStrip";
import PoojaProcessTimeline from "@/components/PoojaDetail/PoojaProcessTimeline";
import PoojaGallery from "@/components/PoojaDetail/PoojaGallery";
import DevoteeTestimonials from "@/components/PoojaDetail/DevoteeTestimonials";
import PoojaFAQ from "@/components/PoojaDetail/PoojaFAQ";
import PoojaCTA from "@/components/PoojaDetail/PoojaCTA";
import Navbar from "@/utils/Navbar";
import LuxuryFooter from "@/utils/Footer";
import PoojaContent from "@/components/PoojaDetail/PoojaContent";


const getPooja = async (slug: string) => {
 const res = await fetch(
  `${process.env.NEXT_PUBLIC_URL}/api/users/pooja/${slug}`
);
  if (!res.ok) throw new Error("Failed");

  const data = await res.json();

  console.log("THE DATA COME FORM THE DATA BASE IS : ");
  console.log(data);

  return data;

};

export default async function PoojaPage({ params }: { params: Promise<{ slug: string }> }) {
  const {slug} = await params;
  const pooja = await getPooja(slug);
  console.log("THE DATA OF THE POOJA IS : ");
  console.log(pooja);

  return (
    <>
      <Navbar />
      <PoojaHero pooja={pooja} />

      <div className="max-w-7xl mx-auto px-6 gap-12 py-20">
        <div className="space-y-16">
          <PoojaOverview description={pooja.description} imageData={pooja.heroImage} />
          <PoojaBenefits  />
          <PoojaIncludesStrip  />
          <PoojaContent html={pooja.aboutContent}/>
          <PoojaProcessTimeline  />
          <PoojaGallery  />
          <DevoteeTestimonials />
          <PoojaFAQ faqs={pooja.faqs}  />
        </div>
      </div>

      <PoojaCTA />
      <LuxuryFooter />
    </>
  );
}