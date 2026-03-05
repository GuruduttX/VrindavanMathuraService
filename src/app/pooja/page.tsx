import FAQSection from "@/components/Blog/FAQSection";
import PoojaArchiveHero from "@/components/Pooja/PoojaArchiveHero";
import PoojaCTASection from "@/components/Pooja/PoojaCTASection";
import PoojaSection from "@/components/Pooja/PoojaSection";
import LuxuryFooter from "@/utils/Footer";
import Navbar from "@/utils/Navbar";

export default function page(){
     const customTourFaqs = [
    {
        question: "Can I fully customize my Mathura & Vrindavan tour?",
        answer:
        "Yes. Every itinerary can be personalized — from temple visits and pooja arrangements to hotel category and taxi type. We design your journey according to your spiritual priorities and comfort preferences.",
    },
    {
        question: "How does the custom tour planning process work?",
        answer:
        "After you submit an enquiry, our travel expert connects with you to understand travel dates, group size, and expectations. We then prepare a tailored itinerary with transparent pricing.",
    },
    {
        question: "Do you arrange VIP darshan and pooja services?",
        answer:
        "Yes, we coordinate advance pooja bookings and VIP darshan (subject to temple availability) for a seamless spiritual experience.",
    },
    {
        question: "Is transportation included in personalized packages?",
        answer:
        "Yes. We provide private AC taxis for local sightseeing and outstation transfers based on your group size and itinerary.",
    },
    {
        question: "What is the ideal duration for a complete spiritual tour?",
        answer:
        "A 2–3 day itinerary covers major temples comfortably. Extended 4–5 day packages can include Govardhan, Barsana, and Gokul.",
    },
    ];
    return (
        <>
         <Navbar/>
         <PoojaArchiveHero/>
         <PoojaSection/>
         <PoojaCTASection/>
         <FAQSection faqs={customTourFaqs}/>
         <LuxuryFooter/>
        </>
    )
}