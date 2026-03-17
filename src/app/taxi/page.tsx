import BrajExplorer from '@/components/Taxi/BrajExplorer'
import SpiritualJourney from '@/components/Taxi/SpirtualJourney'
import TaxiArchive from '@/components/Taxi/TaxiArchive'
import TaxiHero from '@/components/Taxi/TaxiHero'
import TaxiNewCTA from '@/components/Taxi/TaxiNewCTA'
import FinalCTA from '@/utils/FinalCTA'
import LuxuryFooter from '@/utils/Footer'
import Navbar from '@/utils/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <TaxiHero />
            <TaxiArchive />
            <SpiritualJourney/>
            <TaxiNewCTA/>
            <BrajExplorer/>
            <FinalCTA/>
            <LuxuryFooter/>
        </>
    )
}

export default page