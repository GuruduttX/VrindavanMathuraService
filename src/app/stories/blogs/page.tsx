import BlogHero from '@/components/BlogArchive/BlogHero'
import BlogSearch from '@/components/BlogArchive/BlogSearch'
import BlogCategories from '@/components/BlogArchive/BlogCategories'
import BlogCTA from '@/components/Blog/BlogCTA'
import Navbar from '@/utils/Navbar'
import LuxuryFooter from '@/utils/Footer'
import BlogArchive from '@/components/Blog/BlogArchive'

export default function Page(){
    return (
        <div>
            <Navbar/>
            <BlogHero/>
            {/* <BlogSearch/> */}
            <BlogCategories/>
            <BlogArchive/>
            <BlogCTA/>
            <LuxuryFooter/>
        </div>
    )
}