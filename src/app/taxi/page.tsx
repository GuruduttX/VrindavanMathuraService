import dynamic from "next/dynamic"

import Navbar from "@/utils/Navbar"
import LuxuryFooter from "@/utils/Footer"
import TaxiHero from "@/components/Taxi/TaxiHero"
const BrajExplorer = dynamic(() => import("@/components/Taxi/BrajExplorer"))
const TaxiArchive = dynamic(() => import("@/components/Taxi/TaxiArchive"))
const TaxiFAQ = dynamic(() => import("@/components/Taxi/TaxiFAQ"))
const TaxiNewCTA = dynamic(() => import("@/components/Taxi/TaxiNewCTA"))
const TaxiReadMore = dynamic(() => import("@/components/Taxi/TaxiReadMore"))
const FinalCTA = dynamic(() => import("@/utils/FinalCTA"))
import { Metadata } from 'next'


export const metadata: Metadata = {
    title:
        "Mathura Vrindavan Taxi Service | Local Cab, Delhi to Vrindavan Taxi Booking",

    description:
        "Book reliable Mathura Vrindavan taxi service for temple darshan, local sightseeing and Delhi to Vrindavan travel. Affordable cab booking with experienced drivers for Braj tours.",

    keywords: [
        "Mathura Vrindavan taxi service",
        "Vrindavan cab booking",
        "Delhi to Vrindavan taxi",
        "Vrindavan local taxi service",
        "Mathura cab service",
        "Braj taxi service",
        "Vrindavan temple taxi",
        "Mathura Vrindavan car rental"
    ],

    alternates: {
        canonical: "https://vrindavantoursandpackages.com/taxi"
    },

    robots: {
        index: true,
        follow: true
    },

    openGraph: {
        title:
            "Mathura Vrindavan Taxi Service | Cab Booking for Temple Darshan & Travel",
        description:
            "Affordable taxi service in Mathura and Vrindavan for temple visits, sightseeing and Delhi pickup. Book trusted cab services for your Braj spiritual journey.",
        url: "https://vrindavantoursandpackages.com/taxi",
        siteName: "Mathura Vrindavan Travel Guide",
        images: [
            {
                url: "https://vrindavantoursandpackages.com/Experience_my_India.webp",
                width: 1200,
                height: 630,
                alt: "Mathura Vrindavan Taxi Service"
            }
        ],
        type: "website"
    },

    twitter: {
        card: "summary_large_image",
        title: "Mathura Vrindavan Taxi Service",
        description:
            "Book taxi services in Mathura and Vrindavan for temple visits, local sightseeing and Delhi pickup.",
        images: ["https://vrindavantoursandpackages.com/Experience_my_India.webp"]
    }
};

const getTaxiData = async () => {
    try {

        const res = await fetch(
            `http://localhost:3000/api/taxi`
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

const page = async () => {

    const taxis = await getTaxiData();

    console.log("THE DATA COME FROM THE DATA BASE IS FOR THE TAXI : ");
    console.log(taxis);

    const taxiServiceSchema = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": "Mathura Vrindavan Taxi Service",
        "provider": {
            "@type": "TravelAgency",
            "name": "Mathura Vrindavan Travel Guide"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Vrindavan"
            },
            {
                "@type": "City",
                "name": "Mathura"
            },
            {
                "@type": "City",
                "name": "Delhi"
            }
        ],
        "serviceType": "Taxi and Cab Booking",
        "description": "Reliable taxi service for Mathura Vrindavan temple visits, local sightseeing and intercity travel including Delhi to Vrindavan taxi booking.",
        "url": "https://vrindavantoursandpackages.com/taxi"
    };


    const taxiListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Mathura Vrindavan Taxi Options",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Sedan Taxi Service",
                "url": "https://vrindavantoursandpackages.com/taxi/sedan"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "SUV Taxi Service",
                "url": "https://vrindavantoursandpackages.com/taxi/suv"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Tempo Traveller Taxi",
                "url": "https://vrindavantoursandpackages.com/taxi/tempo-traveller"
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://vrindavantoursandpackages.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Taxi Services",
                "item": "https://vrindavantoursandpackages.com/taxi"
            }
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Mathura Vrindavan Taxi Service",
        "image": "https://vrindavantoursandpackages.com/taxi-service.webp",
        "url": "https://vrindavantoursandpackages.com/taxi",
        "telephone": "+91-XXXXXXXXXX",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vrindavan",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "India"
        },
        "areaServed": {
            "@type": "Place",
            "name": "Mathura Vrindavan"
        },
        "priceRange": "₹ 1500"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do you provide taxi service from Delhi to Vrindavan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide taxi services from Delhi to Vrindavan with comfortable cars and experienced drivers."
                }
            },
            {
                "@type": "Question",
                "name": "Can I book taxi for Mathura Vrindavan temple sightseeing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, taxis are available for temple visits including Banke Bihari Temple, Prem Mandir, ISKCON Temple and other Braj attractions."
                }
            }
        ]
    };





    return (
        <>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        taxiServiceSchema,
                        taxiListSchema,
                        breadcrumbSchema,
                        localBusinessSchema,
                        faqSchema
                    ])
                }}
            />
            <Navbar />
            <TaxiHero />
            <TaxiArchive taxis={taxis}/>
            <TaxiReadMore />
            <TaxiNewCTA />
            <BrajExplorer />
            <TaxiFAQ />
            <FinalCTA />
            <LuxuryFooter />
        </>
    )
}

export default page