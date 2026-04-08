import dynamic from "next/dynamic"
import Navbar from "@/utils/Navbar"
import LuxuryFooter from "@/utils/Footer"
import TourHero from "@/components/TourArchive/TourHero"
const TourArchiveLayout = dynamic(() => import("@/components/TourArchive/TourArchiveLayout"))
const TourFilters = dynamic(() => import("@/components/TourArchive/TourFilters"))
const TourGrid = dynamic(() => import("@/components/TourArchive/TourGrid"))
const TourTrustStrip = dynamic(() => import("@/components/TourArchive/TourTrustStrip"))
const ToursReadMore = dynamic(() => import("@/components/TourArchive/TourReadMore"))
const TourFAQSection = dynamic(() => import("@/components/TourArchive/TourArchiveFAQS"))
const TourArchiveCTA = dynamic(() => import("@/components/TourArchive/TourArchiveCTA"))
import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Mathura Vrindavan Tour Packages | 1 Day, 2 Day & Braj Yatra Packages",

  description:
    "Explore Mathura Vrindavan tour packages including 1 day, 2 day and Braj Yatra packages. Visit Banke Bihari Temple, Prem Mandir, ISKCON and other sacred places with guided spiritual tours.",

  keywords: [
    "Mathura Vrindavan tour packages",
    "Vrindavan tour package",
    "Mathura Vrindavan 1 day tour",
    "Braj Yatra tour package",
    "Vrindavan temple tour",
    "Mathura pilgrimage tour",
    "Vrindavan spiritual tour"
  ],

  alternates: {
    canonical: "https://vrindavantoursandpackages.com/tour-packages"
  },

  robots: {
    index: true,
    follow: true
  },

  openGraph: {
    title:
      "Mathura Vrindavan Tour Packages | Braj Yatra & Temple Tours",
    description:
      "Book Mathura Vrindavan tour packages including temple darshan, Braj Yatra tours and spiritual travel experiences.",
    url: "https://vrindavantoursandpackages.com/tour-packages",
    siteName: "Mathura Vrindavan Travel Guide",
    images: [
      {
        url: "https://vrindavantoursandpackages.com/Experience_my_India.webp",
        width: 1200,
        height: 630,
        alt: "Mathura Vrindavan Tour Packages"
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Mathura Vrindavan Tour Packages",
    description:
      "Discover spiritual tour packages for Mathura and Vrindavan temples and Braj Yatra pilgrimage.",
    images: ["https://vrindavantoursandpackages.com/Experience_my_India.webp"]
  }
};

const getTourPackageData = async () => {
  try {

    const res = await fetch(

      `http://localhost:3000/api/users/tour-packages`,

      {

        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }

      }

    );

    if (!res.ok) {
      const text = await res.text();
      throw new Error("Failed to fetch package");
    }

    const data = await res.json();
    console.log("THE DATA COME IS :");
    console.log(data);
    return data.data;

  } catch (error) {
    console.error("Error fetching package:", error);
  }
}



export default async function page() {
  const tours = await getTourPackageData();

  console.log(tours)



  const tourServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mathura Vrindavan Tour Packages",
    "provider": {
      "@type": "TravelAgency",
      "name": "Mathura Vrindavan Travel Guide",
      "url": "https://vrindavantoursandpackages.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Mathura Vrindavan, Uttar Pradesh, India"
    },
    "description":
      "Spiritual tour packages for Mathura and Vrindavan including temple darshan, Braj Yatra tours and guided pilgrimage experiences."
  };

  const tourListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Mathura Vrindavan Tour Packages",
    "itemListElement": tours.map((tour: any, index: number) => (
      [

        {
          "@type": "ListItem",
          "position": index,
          "name": tour.title,
          "url": `https://vrindavantoursandpackages.com/tour-packages/${tour.duration}/${tour.slug}`
        },

      ]

    ))

  };

  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Mathura Vrindavan Travel Guide",
    "url": "https://vrindavantoursandpackages.com",
    "logo": "https://vrindavantoursandpackages.com/Experience_my_India.webp",
    "description":
      "Travel agency providing Mathura Vrindavan tour packages, taxi services, hotel booking and temple darshan arrangements.",
    "areaServed": {
      "@type": "Place",
      "name": "Mathura Vrindavan"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vrindavan",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "India"
    }
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
        "name": "Tour Packages",
        "item": "https://vrindavantoursandpackages.com/tours"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What places are covered in Mathura Vrindavan tour packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Tour packages include visits to Banke Bihari Temple, Prem Mandir, ISKCON Temple, Krishna Janmabhoomi and other sacred Braj temples."
        }
      },
      {
        "@type": "Question",
        "name": "How many days are required for Mathura Vrindavan tour?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Most travelers prefer 1 day or 2 day tour packages to explore Mathura and Vrindavan temples and spiritual attractions."
        }
      }
    ]
  };


  return (
    <div className="overflow-hidden">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            tourServiceSchema,
            tourListSchema,
            breadcrumbSchema,
            travelAgencySchema,
            faqSchema
          ])
        }}
      />

      <Navbar />
      <TourHero />
      <TourTrustStrip />
      
      <TourArchiveLayout sidebar={<TourFilters />}>
        <TourGrid tours={tours} />
      </TourArchiveLayout>
      <ToursReadMore />

      <TourArchiveCTA />

      <TourFAQSection />
      <LuxuryFooter />
    </div>
  )
}