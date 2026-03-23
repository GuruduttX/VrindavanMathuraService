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
  `http://localhost:3000/api/tour-packages/search/?slug=${slug}&duration=${duration}`
  );

  if(!res.ok) {
    const text = await res.text();     
    console.log("ERROR RESPONSE:", text);
    throw new Error("Failed to fetch package");
  }

    const data = await res.json();
    console.log("Data", data);
    return data;

  } catch (error) {
    console.error("Error fetching package:", error);
  }
};


export default async function page({ params }: { params: Promise<{ slug: string, duration: string }> }) {
  
  const { slug, duration } = await params;
  const PackageData = await getPackageData(slug, duration);

  console.log("Data A rha proper", PackageData);


  const dummyPackage = {
    title: "3 Days Mathura Vrindavan Divine Tour",
    duration: "3 Days / 2 Nights",
    price: "8,999",
    rating: "4.9",
    reviews: "186",

    heroimage: {
      image: "/images/packages/main.webp",
      alt: "Mathura Vrindavan Temple Tour",
    },

    childImage: [
      { image: "/images/packages/child1.webp", alt: "Temple View" },
      { image: "/images/packages/child2.webp", alt: "Prem Mandir" },
      { image: "/images/packages/child3.webp", alt: "Govardhan" },
      { image: "/images/packages/child4.webp", alt: "Yamuna Aarti" },
    ],
  };

  const dummyDuration = "7 Days / 6 Nights";

  const dummyBreakdown = [
    { id: "mathura", days: 2, place: "Mathura" },
    { id: "vrindavan", days: 3, place: "Vrindavan" },
    { id: "gokul", days: 2, place: "Gokul" },
  ];

   const dumyPackage = {
    transfer_included: true,
    stay_included: true,
    breakfast_included: false,
    sightseeing_included: true,
  };

   const dummyRoute = {
    source: "Delhi",
    destination: "Vrindavan",
    segments: [
      { id: "1", from: "Delhi", to: "Mathura" },
      { id: "2", from: "Mathura", to: "Gokul" },
      { id: "3", from: "Gokul", to: "Vrindavan" },
    ],
  };

    const dummyHighlights = {
    highlights: [
      {
        description:
          "Experience divine darshan at Banke Bihari Temple with guided support.",
      },
      {
        description:
          "Comfortable 3-star hotel stay near major temples in Vrindavan.",
      },
      {
        description:
          "Private AC vehicle for seamless travel across Mathura & Govardhan.",
      },
      {
        description:
          "Attend mesmerizing Yamuna Aarti in the evening.",
      },
    ],
  };

  const dummyItenary = {
    itinerary: [
      {
        day: 1,
        title: "Arrival & Banke Bihari Darshan",
        description: `
          <p>Arrival in Mathura and transfer to hotel.</p>
          <ul>
            <li>Visit Banke Bihari Temple</li>
            <li>Explore Prem Mandir</li>
            <li>Evening Yamuna Aarti</li>
          </ul>
        `,
      },
      {
        day: 2,
        title: "Govardhan & Gokul Visit",
        description: `
          <p>Full day excursion covering sacred places.</p>
          <ul>
            <li>Govardhan Parikrama</li>
            <li>Radha Kund</li>
            <li>Gokul Temple Tour</li>
          </ul>
        `,
      },
      {
        day: 3,
        title: "Vrindavan Exploration & Departure",
        description: `
          <p>Morning temple visits and return transfer.</p>
          <ul>
            <li>ISKCON Temple</li>
            <li>Nidhivan</li>
            <li>Shopping & Departure</li>
          </ul>
        `,
      },
    ],
  };

   const dummyIncExc = {
    inclusions: [
      { description: "2 Nights stay in premium hotel" },
      { description: "Daily breakfast" },
      { description: "Private AC vehicle for sightseeing" },
      { description: "Temple visit coordination" },
    ],
    exclusions: [
      { description: "Personal expenses" },
      { description: "Lunch & Dinner" },
      { description: "VIP darshan charges (if applicable)" },
      { description: "Travel insurance" },
    ],
  };

     const knowBefore = {
    documents: [
      { description: "Carry valid government ID for hotel check-in.Carry valid government ID for hotel check-in.Carry valid government ID for hotel check-in.Carry valid government ID for hotel check-in.Carry valid government ID for hotel check-in.Carry valid government ID for hotel check-in." },
      { description: "Temple timings may vary during festivals." },
      { description: "Comfortable walking footwear is recommended." },
      { description: "VIP darshan subject to temple authority approval." },
      { description: "Early morning visits recommended for less crowd." },
      { description: "Photography may be restricted in certain temples." },
    ],
  };

  const testimonials = {
    testimonials: [
      {
        id: 1,
        name: "Rohit Sharma",
        location: "Delhi",
        date: "March 2024",
        rating: 5,
        description:
          "Very well organized tour. Darshan timings were perfectly managed.",
      },
      {
        id: 2,
        name: "Anita Verma",
        location: "Mumbai",
        date: "February 2024",
        rating: 5,
        description:
          "Hotel was clean, driver was polite, overall smooth experience.",
      },

       {
        id: 2,
        name: "Anita Verma",
        location: "Mumbai",
        date: "February 2024",
        rating: 5,
        description:
          "Hotel was clean, driver was polite, overall smooth experience.",
      },
       {
        id: 2,
        name: "Anita Verma",
        location: "Mumbai",
        date: "February 2024",
        rating: 5,
        description:
          "Hotel was clean, driver was polite, overall smooth experience.",
      },
       {
        id: 2,
        name: "Anita Verma",
        location: "Mumbai",
        date: "February 2024",
        rating: 5,
        description:
          "Hotel was clean, driver was polite, overall smooth experience.",
      },
       {
        id: 2,
        name: "Anita Verma",
        location: "Mumbai",
        date: "February 2024",
        rating: 5,
        description:
          "Hotel was clean, driver was polite, overall smooth experience.",
      },
       {
        id: 2,
        name: "Anita Verma",
        location: "Mumbai",
        date: "February 2024",
        rating: 5,
        description:
          "Hotel was clean, driver was polite, overall smooth experience.",
      },
       {
        id: 2,
        name: "Anita Verma",
        location: "Mumbai",
        date: "February 2024",
        rating: 5,
        description:
          "Hotel was clean, driver was polite, overall smooth experience.",
      },
    ],
  };

  const dummyFaqs= {
    faqs: [
      {
        question: "What is included in this tour package?",
        answer:
          "This package includes temple darshan, AC cab, pickup & drop, and local assistance.",
      },
      {
        question: "Is this suitable for senior citizens?",
        answer:
          "Yes. It follows a slow pace with rest breaks and minimal walking.",
      },
      {
        question: "Can it be customized?",
        answer:
          "Yes, you can adjust pickup location, duration, and add nearby temples.",
      },
    ],
  };

  const policy = {
  policies: [
    {
      title: "Refund Policy",
      description:
        "100% refund if cancelled 48 hours before trip starting time.",
    },
    {
      title: "Cancel Policy",
      description:
        "To cancel your trip, simply contact our official booking number or email us.",
    },
    {
      title: "Confirmation  Policy",
      description:
        "An advance payment is required to confirm your booking.",
    },
    {
      title: "Payment Ploicy",
      description:
        "50% to be paid in advance and remaining at the start of the tour.",
    },
  ],
  };

  if (!PackageData) return <div>Loading...</div>;

  



  return (
    <>
      <Navbar/>
      <PackageHero PackageData={dummyPackage} />
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
            <ItineraryAccordion PackageData={{ itinerary: PackageData.itinerary }} />            <InclusionExclusion PackageData={dummyIncExc}/>
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
    <KnowBeforeYouGo PackageData={knowBefore}/>

    <ProductRatings/>
    <PackageTestimonials PackageData={testimonials}/>
    
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