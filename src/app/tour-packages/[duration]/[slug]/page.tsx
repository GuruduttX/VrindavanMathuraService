import TourArchiveCTA from "@/components/TourArchive/TourArchiveCTA";
import DestinationRoute from "@/components/TourPackage/DestinationRoute";
import InclusionExclusion from "@/components/TourPackage/InclusionExclusion";
import ItineraryAccordion from "@/components/TourPackage/ItineraryAccordion";
import KnowBeforeYouGo from "@/components/TourPackage/KnowBeforeYouGo";
import PackageDurationStrip from "@/components/TourPackage/PackageDurationStrip";
import PackageFaqSection from "@/components/TourPackage/PackageFaqSection";
import PackageHero from "@/components/TourPackage/PackageHero";
import PackageHighlights from "@/components/TourPackage/PackageHighlights";
import PackageInclusionsStrip from "@/components/TourPackage/PackageInclusionsStrip";
import PackageTestimonials from "@/components/TourPackage/PackageTestimonials";
import Policies from "@/components/TourPackage/Policies";
import ProductRatings from "@/components/TourPackage/ProductRatings";
import SideForm from "@/components/TourPackage/SideForm";
import LuxuryFooter from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import TrustBuildingSection from "@/utils/TrustBuildingSection";





const getPackageData = async (slug: string, duration: string) => {
  try {
    
   const res = await fetch(
  `http://localhost:3000/api/users/tour-packages/search/?slug=${slug}&duration=${duration}`
  );

  if(!res.ok) {
    const text = await res.text();     
    throw new Error("Failed to fetch package");
  }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("Error fetching package:", error);
  }
};


export default async function page({ params }: { params: Promise<{ slug: string, duration: string }> }) {
  
  const { slug, duration } = await params;
  const PackageData = await getPackageData(slug, duration);



 

  if (!PackageData) return <div>Loading...</div>;

  



  return (
    <>
      <Navbar/>
      <PackageHero PackageData={PackageData} />
      <section className="w-full min-h-screen bg-white  ">
        <div className="max-w-7xl mx-auto  py-12 ">

          {/* GRID */}
          <div className=" grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10  ">

            {/* LEFT CONTENT */}
            <main className="space-y-12">
              <PackageDurationStrip
              duration={PackageData.duration}
              breakdown={PackageData.durationbreakdown}

            />
           <PackageInclusionsStrip
            packageData={{
              transfer_included: PackageData.isTransferIncluded,
              stay_included: PackageData.isStayIncluded,
              breakfast_included: PackageData.isBreakfastIncluded,
              sightseeing_included: PackageData.isSightseeingIncluded,
            }}
          />
          
            <DestinationRoute routeData={PackageData.routes} /> 
            <PackageHighlights PackageData={{ highlights: PackageData.highlights }} />       
            <ItineraryAccordion PackageData={{ itinerary: PackageData.itinerary }} />        
           <InclusionExclusion
              PackageData={{
                inclusions: PackageData.inclusions,
                exclusions: PackageData.exclusions,
              }}
            />
            </main>

             <aside className="hidden lg:block ">
              <div className="sticky top-28">
                <SideForm />
              </div>
            </aside>

            
          </div>
        </div>
      </section>

      

      



  

    <TourArchiveCTA/>
    <KnowBeforeYouGo PackageData={PackageData.knowBeforeYouGo}/>

    <ProductRatings/>
    <PackageTestimonials PackageData={PackageData}/>
    
    <TrustBuildingSection/>

    <PackageFaqSection PackageData={{ faqs: PackageData.faqs }} />
    <Policies
      PackageData={{
        policies: [
          { title: "Refund", description: PackageData.refund },
          { title: "Cancel", description: PackageData.cancel },
          { title: "Payment", description: PackageData.payment },
          { title: "Confirmation", description: PackageData.confirmation },
        ],
      }}
    />
    <LuxuryFooter/>
 
      
    
 </>
  );
}