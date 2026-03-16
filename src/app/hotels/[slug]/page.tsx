import HotelCTA from '@/components/Home/HotelCTA'
import GuestReviewSection from '@/components/HotelPackage/GuestReviewSection'
import HotelHero from '@/components/HotelPackage/HotelHero'
import HotelDetailsSection from '@/components/HotelPackage/HotelsDetailSection'
import LuxuryFooter from '@/utils/Footer'
import Navbar from '@/utils/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <HotelHero />
            <HotelDetailsSection/>
            <GuestReviewSection/>
            <HotelCTA/>
            <LuxuryFooter />
        </>
    )
}

export default page