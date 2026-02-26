import BlogAuthor from "@/app/components/Blog/BlogAuthor";
import BlogContent from "@/app/components/Blog/BlogContent";
import BlogHero from "@/app/components/Blog/BlogHero";
import BlogShare from "@/app/components/Blog/BlogShare";
import BlogCTA from "@/app/components/Blog/BlogCTA";
import FAQSection from "@/app/components/Blog/FAQSection";

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

           <BlogHero
            title="Complete Guide to Mathura Vrindavan Temple Tour"
            category="Temple Guides"
            date="February 20, 2026"
            author="MathuraVrindavanService Team"
            image="/images/blog/mathura-temple.jpg"
            />
            <BlogContent
                content={
                    <>
                    <p>
                        Mathura and Vrindavan are among the most sacred destinations in India...
                    </p>

                    <h2>Best Time to Visit Mathura</h2>

                    <p>
                        The ideal time to explore temples and ghats is during winter months.
                    </p>

                    <ul>
                        <li>Comfortable weather</li>
                        <li>Major festivals like Holi & Janmashtami</li>
                        <li>Less humidity</li>
                    </ul>

                    <blockquote>
                        "A journey to Vrindavan is not just travel — it is a spiritual awakening."
                    </blockquote>

                    <p>
                        For complete travel assistance, check our <a href="/tour-packages">tour packages</a>.
                    </p>
                    </>
                }
            />

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

            
                           

         </div>
}