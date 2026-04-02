"use client";

import LeftReviewSection from "@/components/TaxiReview/LeftReviewSection";
import RightReviewSection from "@/components/TaxiReview/RightReviewSection";
import LuxuryFooter from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import {
    MapPin,
    Clock,
    ShieldCheck,
    Car,
    CheckCircle,
    XCircle,
    Route,
} from "lucide-react";

export default function TaxiReviewPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-30 px-6">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
                    <LeftReviewSection />

                    <RightReviewSection />

                </div>
            </div>
            <LuxuryFooter />
        </>
    );
}