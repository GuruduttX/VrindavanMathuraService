import HomeFinalCTA from '@/components/Home/HomeFinalCTA'
import HomeHero from '@/components/Home/HomeHero'
import HotelCTA from '@/components/Home/HotelCTA'
import ProductShowCase from '@/components/Home/ProductShowCase'
import TaxiCTA from '@/components/Home/TaxiCTA'
import TravelCTA from '@/components/Home/TravelCTA'
import SpiritualJourney from '@/components/Taxi/SpirtualJourney'
import Footer from '@/utils/Footer'
import HomeTrustBuildingSection from '@/utils/HomeTrustBuildingSection'
import Navbar from '@/utils/Navbar'
import PopularHotels from '@/utils/PopularHotels'
import PopularTours from '@/utils/PopularTours'
import ServicesSection from '@/utils/ServicesSection'
import TaxiShowcase from '@/utils/TaxiShowCase'

const page = () => {

  return (
    <>
      <Navbar />
      <HomeHero />
      <ProductShowCase/>
      <ServicesSection/>
      <TravelCTA/>
      <SpiritualJourney/>
      <PopularTours/>
      <HomeTrustBuildingSection/>
      <HotelCTA/>
      <PopularHotels/>
      <TaxiCTA/>
      <TaxiShowcase/>
      <HomeFinalCTA/>
      <Footer />
    </>
  )
  
}

export default page