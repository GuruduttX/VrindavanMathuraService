import TourArchiveCTA from "@/components/TourArchive/TourArchiveCTA"
import TourFAQSection from "@/components/TourArchive/TourArchiveFAQS"
import TourArchiveLayout from "@/components/TourArchive/TourArchiveLayout"
import TourFilters from "@/components/TourArchive/TourFilters"
import TourGrid from "@/components/TourArchive/TourGrid"
import TourHero from "@/components/TourArchive/TourHero"
import TourTrustStrip from "@/components/TourArchive/TourTrustStrip"
import LuxuryFooter from "@/utils/Footer"
import Navbar from "@/utils/Navbar"

export const tours = [
  {
    id: 1,
    title: "Mathura Vrindavan Divine Darshan",
    image: "https://id-preview--6ab10f08-4578-4d50-b1e0-2997d9…e1.lovable.app/assets/mathura-temple-oQ3oXqUw.jpg",
    category: "Spiritual",
    duration: "2 Days / 1 Night",
    rating: 4.8,
    reviews: 342,
    price: 4999,
    oldPrice: 7499,
    groupType: "Families & Devotees",
    tags: ["Krishna Janmabhoomi", "Banke Bihari Temple", "ISKCON Temple"],
    description:
      "Experience the divine essence of Mathura and Vrindavan with visits to the most sacred temples.",
  },
  {
    id: 2,
    title: "Vrindavan Holi Special Tour",
    image: "https://id-preview--6ab10f08-4578-4d50-b1e0-2997d9…e1.lovable.app/assets/vrindavan-holi-6ZfA0udw.jpg",
    category: "Festival",
    duration: "3 Days / 2 Nights",
    rating: 4.9,
    reviews: 189,
    price: 8999,
    oldPrice: 12999,
    groupType: "Groups & Couples",
    tags: ["Lathmar Holi", "Phoolon ki Holi", "Banke Bihari Holi"],
    description:
      "Celebrate the world-famous Vrindavan Holi with colors, music, and spiritual bliss.",
  },
  {
    id: 3,
    title: "Yamuna Ghat Sunset Experience",
    image: "https://id-preview--6ab10f08-4578-4d50-b1e0-2997d96553e1.lovable.app/assets/yamuna-ghat-0Ege25Tf.jpg",
    category: "Heritage",
    duration: "1 Day",
    rating: 4.7,
    reviews: 521,
    price: 1999,
    oldPrice: 2499,
    groupType: "Solo Travelers & Couples",
    tags: ["Vishram Ghat", "Yamuna Aarti", "Boat Ride"],
    description:
      "A serene evening at the sacred Yamuna Ghats with boat rides and aarti ceremony.",
  },
  {
    id: 4,
    title: "Krishna Janmabhoomi Heritage Walk",
    image: "https://id-preview--6ab10f08-4578-4d50-b1e0-2997d96553e1.lovable.app/assets/janmabhoomi-CdvHG-Ma.jpg",
    category: "Heritage",
    duration: "1 Day",
    rating: 4.6,
    reviews: 278,
    price: 2499,
    oldPrice: 3999,
    groupType: "History Lovers",
    tags: ["Janmabhoomi Temple", "Dwarkadhish Temple", "Mathura Museum"],
    description:
      "Walk through the birthplace of Lord Krishna and explore Mathura’s rich heritage.",
  },
  {
    id: 5,
    title: "Govardhan Parikrama Yatra",
    image: "https://id-preview--6ab10f08-4578-4d50-b1e0-2997d96553e1.lovable.app/assets/govardhan-Do8OJg9M.jpg",
    category: "Adventure",
    duration: "2 Days / 1 Night",
    rating: 4.8,
    reviews: 156,
    price: 3999,
    oldPrice: 5999,
    groupType: "Pilgrims & Adventure Seekers",
    tags: ["21 KM Parikrama", "Govardhan Hill", "Manasi Ganga"],
    description:
      "Complete the sacred 21 km Govardhan Parikrama with guided spiritual experience.",
  },
  {
    id: 6,
    title: "Complete Braj Dham Premium Tour",
    image: "https://id-preview--6ab10f08-4578-4d50-b1e0-2997d9…e1.lovable.app/assets/vrindavan-hero-BgF8FWzB.jpg",
    category: "Premium",
    duration: "5 Days / 4 Nights",
    rating: 5.0,
    reviews: 98,
    price: 15999,
    oldPrice: 19999,
    groupType: "Premium Travelers",
    tags: ["All Major Temples", "Govardhan Parikrama", "Barsana Visit"],
    description:
      "The ultimate Braj Dham experience covering every sacred site with premium accommodation.",
  },
];



export default function page(){
    return  (   <>
                    <Navbar/>
                    <TourHero/>
                    <TourTrustStrip/>
                    <TourArchiveLayout sidebar={<TourFilters />}>
                        <TourGrid tours={tours} />
                    </TourArchiveLayout>

                    <TourArchiveCTA/>
                    
                    <TourFAQSection/>
                    <LuxuryFooter/>
                </>
    )
}