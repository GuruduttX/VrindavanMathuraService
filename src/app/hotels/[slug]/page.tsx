import HotelCTA from '@/components/Home/HotelCTA'
import GuestReviewSection from '@/components/HotelPackage/GuestReviewSection'
import HotelFAQ from '@/components/HotelPackage/HotelFAQ'
import HotelHero from '@/components/HotelPackage/HotelHero'
import HotelDetailsSection from '@/components/HotelPackage/HotelsDetailSection'
import InclusionsExclusions from '@/components/HotelPackage/InclusionExclusion'
import LuxuryFooter from '@/utils/Footer'
import Navbar from '@/utils/Navbar'
import { notFound } from 'next/navigation'


const getHotelData = async (slug: string) => {

    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/hotels/${slug}`, { cache: "no-store" });

        if(response.status == 404) {
            return null;
        }

        if(!response.ok) {
            throw new Error("Failed to fetch the blog : ");
        }

        const { data } = await response.json();
        return data
        
    } catch (error) {

        console.log(error)
        
    }

}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {

     const { slug } = await params;
    
    const HotelData = await getHotelData(slug);
    if(!HotelData){
        notFound();
    }

    if(HotelData.status == "draft"){
            notFound();
    }

    return (
      <>
        <Navbar />
        <HotelHero HotelData={HotelData} />
        <HotelDetailsSection HotelData={HotelData} />
        <GuestReviewSection HotelData={HotelData} />
        <InclusionsExclusions quickInclusions={HotelData.quickInclusions} inclusions={HotelData.inclusions} exclusions={HotelData.exclusions}/>
        <HotelCTA />
        <HotelFAQ faqs={HotelData.faqs} />
        <LuxuryFooter />
      </>
    );
}

export default page