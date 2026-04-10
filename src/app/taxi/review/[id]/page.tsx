
import LeftReviewSection from "@/components/TaxiReview/LeftReviewSection";
import RightReviewSection from "@/components/TaxiReview/RightReviewSection";
import LuxuryFooter from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import { Taxiinterface } from "@/components/TaxiReview/LeftReviewSection";
import {
    MapPin,
    Clock,
    ShieldCheck,
    Car,
    CheckCircle,
    XCircle,
    Route,
} from "lucide-react";


const fetchTaxi = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/users/taxi/${id}`,
    );
    if (response.status == 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error("Failed to fetch the Taxi : ");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function TaxiReviewPage({ params,}: {params: Promise<{ id: string }>}) {
  const {id} = await params;

  const taxi:Taxiinterface = await fetchTaxi(id);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-30 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <LeftReviewSection taxi = {taxi} />

          <RightReviewSection />
        </div>
      </div>
      <LuxuryFooter />
    </>
  );
}