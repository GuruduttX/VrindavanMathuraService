import HotelExperienceSection from '@/components/HotelsArchive/HotelExperienceSection'
import HotelsHero from '@/components/HotelsArchive/HotelHero'
import HotelsArchive from '@/components/HotelsArchive/HotelsArchive'
import HotelsCTA from '@/components/HotelsArchive/HotelsCTA'
import LuxuryFooter from '@/utils/Footer'
import Navbar from '@/utils/Navbar'
import React from 'react'


const page = () => {
  return (
    <>
      <Navbar />
      <HotelsHero />
      <HotelsArchive/>
      <HotelExperienceSection/>
      <HotelsCTA/>
      <LuxuryFooter/>
    </>
  )
}

export default page