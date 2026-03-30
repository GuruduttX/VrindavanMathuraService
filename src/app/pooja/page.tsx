import FAQSection from "@/components/Blog/FAQSection";
import PoojaArchiveHero from "@/components/Pooja/PoojaArchiveHero";
import PoojaCTASection from "@/components/Pooja/PoojaCTASection";
import PoojaSection from "@/components/Pooja/PoojaSection";
import LuxuryFooter from "@/utils/Footer";
import Navbar from "@/utils/Navbar";

const getPoojaData = async () => {
    try {

        const res = await fetch(
            `http://localhost:3000/api/pooja`
        );

        if (!res.ok) {
            const text = await res.text();
            console.log("ERROR RESPONSE:", text);
            throw new Error("Failed to fetch taxi data");
        }

        const data = await res.json();
        console.log("Data", data);
        return data.data;

    } catch (error) {
        console.error("Error fetching taxi data:", error);
    }
}

export default async function page() {

    const poojaData = await  getPoojaData();

    return (
        <>
            <Navbar />
            <PoojaArchiveHero />
            <PoojaSection poojaData={poojaData}/>
            <PoojaCTASection />
            <FAQSection />
            <LuxuryFooter />
        </>
    )
}