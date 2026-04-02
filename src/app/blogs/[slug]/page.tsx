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
import { notFound } from "next/navigation";


const getBlogs = async (slug: string) => {

    try {
        const response = await fetch(`http://localhost:3000/api/blog/${slug}`, { cache: "no-store" });

        if(response.status == 404) {
            return null;
        }

        if(!response.ok) {
            throw new Error("Failed to fetch the blog : ");
        }

        const { data } = await response.json();

        return data
    } catch (error) {

        console.log(error)
        
    }

}


export default async function page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    const Blog = await getBlogs(slug);

    if (!Blog) {
        notFound();
    }

    if(Blog.status == "draft"){
        notFound();
    }


    return <div className="">
        <Navbar />

        <BlogHero
            title={Blog.title}
            category={Blog.category}
            date={Blog.createdAt}
            author={Blog.author}
            image={Blog.image}
        />

        <div className="w-full px-4 grid grid-cols-1 lg:grid-cols-13 gap-16">

            
            
            <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-28 mt-12">
                    <BlogCategories />
                </div>
            </aside>
            

            <article className="lg:col-span-7">

                <BlogContent
                    content={Blog.content}
                />

            </article>

            
            <aside className="hidden lg:block lg:col-span-3 mt-12">
                <div className="sticky top-28">
                    <BlogStickyCTA />
                </div>
            </aside>

        </div>



        <BlogAuthor
            name="MathuraVrindavanService Team"
            role="Travel & Temple Guide Experts"
            bio={Blog.subcontent}
            image={Blog.image}
        />

        <BlogShare
            url={`https://vrindavanmathuraguide.com/blogs/temple-guide`}
            title={Blog.title}
        />

        <BlogCTA />
        {/* <FAQSection faqs={Blog.faqs} /> */}

        <LuxuryFooter />


    </div>
}