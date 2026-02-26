import AboutHero from "../components/About/AboutHero";
import AboutIntro from "../components/About/AboutIntro";
import CTASection from "../components/About/CTASection";
import OurMissionVision from "../components/About/OurMissionVision";
import OurServices from "../components/About/OurServices";
import StatsSection from "../components/About/StatsSection";
import TestimonialsPreview from "../components/About/TestimonialsPreview";
import WhyChooseUs from "../components/About/WhyChooseUs";

export default function Page(){
    return (
        <div className="" >
         <AboutHero/>
         <AboutIntro/>
      
          <OurServices/>
          <WhyChooseUs/>
          <OurMissionVision/>
          <StatsSection/>
          <TestimonialsPreview/>
          <CTASection/>
        </div>
    )
}