import BlogAuthor from "@/components/Blog/BlogAuthor";
import BlogContent from "@/components/Blog/BlogContent";
import BlogHero from "@/components/Blog/BlogHero";
import BlogShare from "@/components/Blog/BlogShare";
import BlogCTA from "@/components/Blog/BlogCTA";
import FAQSection from "@/components/Blog/FAQSection";
import BlogCategories from "@/components/BlogArchive/BlogCategories";
import BlogStickyCTA from "@/components/Blog/BlogStickyCTA";
import Navbar from "@/utils/Navbar";
import LuxuryFooter from "@/utils/Footer";

const faqs = [
  {
    question: "Do you provide Delhi to Mathura taxi service?",
    answer:
      "Yes, we provide comfortable and verified taxi services from Delhi to Mathura & Vrindavan with flexible pickup options.",
  },
  {
    question: "Can I customize my tour package?",
    answer:
      "Absolutely. You can customize hotels, travel duration, temple visits, and pooja services according to your preference.",
  },
  {
    question: "Do you arrange temple pooja services?",
    answer:
      "Yes, we help arrange sacred pooja services with proper coordination and guidance for a peaceful spiritual experience.",
  },
];
export default function page(){
   return <div className="">
           <Navbar/>

           <BlogHero
            title="Complete Guide to Mathura Vrindavan Temple Tour"
            category="Temple Guides"
            date="February 20, 2026"
            author="MathuraVrindavanService Team"
            image="/images/blog/mathura-temple.jpg"
            />

            <div className="w-full px-4 grid grid-cols-1 lg:grid-cols-13 gap-16">

                {/* Left Sidebar */}
                <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-28 mt-12">
                    <BlogCategories/>
                </div>
                </aside>
                {/* Main Content */}
                <article className="lg:col-span-7">

                     <BlogContent
                        content={
                         <>
                        <p>
                            Mathura and Vrindavan are among the most sacred pilgrimage destinations in India. Known as the birthplace of Lord Krishna, Mathura holds immense spiritual importance, while Vrindavan is celebrated for its divine temples and peaceful ghats along the Yamuna River.
                        </p>

                        <p>
                            Whether you are planning a short temple visit or a complete spiritual retreat, this guide will help you plan your Mathura Vrindavan temple tour efficiently and comfortably.
                        </p>

                        <h2>Best Time to Visit Mathura Vrindavan</h2>

                        <p>
                            The ideal time to explore Mathura and Vrindavan is during the winter months (October to March). The weather is pleasant and perfect for temple visits and sightseeing.
                        </p>

                        <ul>
                            <li>Comfortable weather for darshan and sightseeing</li>
                            <li>Major festivals like Holi & Janmashtami</li>
                            <li>Less humidity compared to summer</li>
                            <li>Better experience during evening aarti at ghats</li>
                        </ul>

                        <h2>Top Temples to Visit in Mathura</h2>

                        <p>
                            Mathura is home to some of the most revered Krishna temples in India. A visit here feels spiritually uplifting and culturally enriching.
                        </p>

                        <h3>1. Shri Krishna Janmabhoomi Temple</h3>
                        <p>
                            This temple marks the exact birthplace of Lord Krishna and is the most important religious site in Mathura. Security is tight, and photography is not allowed inside.
                        </p>

                        <h3>2. Dwarkadhish Temple</h3>
                        <p>
                            Known for its beautiful architecture and vibrant festivals, Dwarkadhish Temple attracts thousands of devotees daily.
                        </p>

                        <h2>Must-Visit Temples in Vrindavan</h2>

                        <p>
                            Vrindavan is filled with temples dedicated to Lord Krishna and Radha. Each temple has its own spiritual charm.
                        </p>

                        <ul>
                            <li>Banke Bihari Temple</li>
                            <li>Prem Mandir</li>
                            <li>ISKCON Temple</li>
                            <li>Radha Raman Temple</li>
                        </ul>

                        <blockquote>
                            “A journey to Vrindavan is not just travel — it is a spiritual awakening.”
                        </blockquote>

                        <h2>How Many Days Are Required?</h2>

                        <p>
                            A well-planned 2 to 3-day itinerary is sufficient to explore the major temples in Mathura and Vrindavan without rushing.
                        </p>

                        <ol>
                            <li>Day 1: Mathura temples + evening Yamuna aarti</li>
                            <li>Day 2: Vrindavan temple tour</li>
                            <li>Day 3: Barsana & Gokul (optional)</li>
                        </ol>

                        <h2>Travel & Transportation</h2>

                        <p>
                            Mathura is well connected by road and rail. Many travelers prefer booking a taxi from Delhi for a comfortable journey. Local auto-rickshaws and e-rickshaws are available for temple visits.
                        </p>

                        <h2>Where to Stay?</h2>

                        <p>
                            From budget guest houses to premium hotels, Mathura and Vrindavan offer a wide range of accommodation options. It is advisable to book in advance during festival seasons.
                        </p>

                        <h2>Pooja & VIP Darshan Services</h2>

                        <p>
                            Many devotees prefer pre-booking pooja services or arranging VIP darshan to avoid long queues during peak seasons. Professional travel services can help coordinate these arrangements smoothly.
                        </p>

                        <h2>Conclusion</h2>

                        <p>
                            A Mathura Vrindavan temple tour is more than a trip — it is a divine experience that brings peace, devotion, and cultural richness. With proper planning, comfortable travel, and trusted services, your spiritual journey becomes truly memorable.
                        </p>

                        <p>
                            If you are planning your visit, explore curated tour packages that include hotel bookings, taxi services, and pooja arrangements for a seamless experience.
                        </p>
                        </>
                        }
                    />
              
                </article>

                {/* Right Sidebar */}
                <aside className="hidden lg:block lg:col-span-3 mt-12">
                <div className="sticky top-28">
                    <BlogStickyCTA/>
                </div>
                </aside>

           </div>

           

            <BlogAuthor
            name="MathuraVrindavanService Team"
            role="Travel & Temple Guide Experts"
            bio="Our team provides authentic travel insights and spiritual guidance for visitors exploring Mathura and Vrindavan."
            image="/images/team.jpg"
            />

            <BlogShare
            url="https://yourdomain.com/blogs/temple-guide"
            title="Complete Guide to Mathura Vrindavan Temple Tour"
            />

           <BlogCTA/>
           <FAQSection faqs={faqs} />

           <LuxuryFooter/>
                           

         </div>
}