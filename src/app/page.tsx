import dynamic from "next/dynamic";
import { Metadata } from "next";
const HomeHero = dynamic(() => import("@/components/Home/HomeHero"));
const ProductShowCase = dynamic(() => import("@/components/Home/ProductShowCase"));
const TaxiCTA = dynamic(() => import("@/components/Home/TaxiCTA"));
const TravelCTA = dynamic(() => import("@/components/Home/TravelCTA"));
const HotelCTA = dynamic(() => import("@/components/Home/HotelCTA"));
const HomeFinalCTA = dynamic(() => import("@/components/Home/HomeFinalCTA"));
const SpiritualJourney = dynamic(() => import("@/components/Taxi/SpirtualJourney"));
const Navbar = dynamic(() => import("@/utils/Navbar"));
const Footer = dynamic(() => import("@/utils/Footer"));
const HomeTrustBuildingSection = dynamic(() => import("@/utils/HomeTrustBuildingSection"));
const PopularHotels = dynamic(() => import("@/utils/PopularHotels"));
const PopularTours = dynamic(() => import("@/utils/PopularTours"));
const ServicesSection = dynamic(() => import("@/utils/ServicesSection"));
const TaxiShowcase = dynamic(() => import("@/utils/TaxiShowCase"));
const FAQPage = dynamic(()=>import("@/components/Home/FAQPage")) 


export const metadata: Metadata = {
  title:
    "Mathura Vrindavan Tour Packages | Hotels, Taxi & Temple Puja Services",

  description:
    "Book Mathura Vrindavan tour packages, hotels, taxi services and temple puja with trusted local guides. Plan your spiritual Braj journey with comfortable travel and darshan assistance.",

  keywords: [
    "Mathura Vrindavan tour package",
    "Vrindavan hotel booking",
    "Mathura taxi service",
    "Vrindavan temple puja",
    "Braj spiritual tour",
    "Krishna temple tour",
    "Mathura Vrindavan travel guide"
  ],

  alternates: {
    canonical: "https://vrindavantoursandpackages.com/"
  },

  robots: {
    index: true,
    follow: true
  },

  openGraph: {
    title:
      "Mathura Vrindavan Tour Packages | Hotels, Taxi & Temple Puja Services",
    description:
      "Plan your Mathura Vrindavan trip with tour packages, hotel booking, taxi services and temple puja assistance.",
    url: "https://vrindavantoursandpackages.com/",
    siteName: "Mathura Vrindavan Travel Guide",
    images: [
      {
        url: "https://vrindavantoursandpackages.com/Experience_my_India.webp",
        width: 1200,
        height: 630,
        alt: "Mathura Vrindavan Travel Services"
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Mathura Vrindavan Tour Packages",
    description:
      "Book tour packages, hotels, taxi services and temple puja in Mathura Vrindavan.",
    images: ["https://vrindavantoursandpackages.com/Experience_my_India.webp"]
  }
};

const page = () => {

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mathura Vrindavan Travel Guide",
    "url": "https://vrindavantoursandpackages.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vrindavantoursandpackages.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const touristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Vrindavan Temples and Spiritual Attractions",
    "description": "Vrindavan is a sacred town associated with Lord Krishna, famous for temples like Prem Mandir, Banke Bihari Temple and ISKCON Temple attracting millions of pilgrims every year.",
    "url": "https://vrindavantoursandpackages.com/",
    "touristType": [
      "Pilgrimage Tourists",
      "Spiritual Travelers",
      "Temple Visitors"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.5806",
      "longitude": "77.7006"
    },
    "isAccessibleForFree": true,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vrindavan",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "India"
    }
  };

  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Mathura Vrindavan Travel Guide",
    "url": "https://vrindavantoursandpackages.com/",
    "logo": "https://vrindavantoursandpackages.com/Experience_my_India.webp",
    "description": "Trusted travel agency providing Mathura Vrindavan tour packages, hotel booking, taxi services and temple darshan assistance.",
    "areaServed": {
      "@type": "Place",
      "name": "Mathura Vrindavan, Uttar Pradesh, India"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vrindavan",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "India"
    },
    
  };

  const touristDestinationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Mathura Vrindavan",
    "description": "Mathura and Vrindavan are sacred pilgrimage destinations in Uttar Pradesh known for Krishna temples, spiritual tours, cultural festivals and religious tourism.",
    "url": "https://vrindavantoursandpackages.com/",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.4924",
      "longitude": "77.6737"
    },
    "touristType": [
      "Religious Tourism",
      "Spiritual Tourism",
      "Cultural Tourism"
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mathura Vrindavan Travel Guide",
    "url": "https://vrindavantoursandpackages.com/",
    "logo": "https://vrindavantoursandpackages.com/Experience_my_India.webp",
    "description": "Travel platform offering Mathura Vrindavan tour packages, hotel booking, taxi services and temple puja arrangements for spiritual travelers visiting Braj region.",
    "foundingLocation": {
      "@type": "Place",
      "name": "Vrindavan, Uttar Pradesh, India"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vrindavan",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "India"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Mathura Vrindavan, Uttar Pradesh, India"
    },
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Travel and Spiritual Tour Services",
    "provider": {
      "@type": "TravelAgency",
      "name": "Mathura Vrindavan Travel Guide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Travel Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mathura Vrindavan Tour Packages"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hotel Booking in Vrindavan"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Taxi Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Temple Puja and Darshan Arrangements"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services are available in Mathura Vrindavan travel packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Travel packages include temple darshan, hotel booking, taxi services and guided tours in Mathura and Vrindavan."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide taxi services for Mathura Vrindavan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, taxi services are available for local sightseeing, temple visits and pickup from Delhi, Agra and nearby cities."
        }
      }
    ]
  };

  return (
    <div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            websiteSchema,
            organizationSchema,
            travelAgencySchema,
            servicesSchema,
            touristDestinationSchema,
            touristAttractionSchema,
            faqSchema
          ])
        }}
      />

      <Navbar />
      <HomeHero />
      <ProductShowCase />
      <ServicesSection />
      <TravelCTA />
      <SpiritualJourney />
      <PopularTours />
      <HomeTrustBuildingSection />
      <PopularHotels />
      <HotelCTA />
      <TaxiCTA />
      {/* <TaxiShowcase /> */}
      <FAQPage/>
      <HomeFinalCTA />
      <Footer />
    </div>
  )

}

export default page