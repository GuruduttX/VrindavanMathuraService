import HomeHero from '@/components/Home/HomeHero'
import ProductShowCase from '@/components/Home/ProductShowCase'
import Footer from '@/utils/Footer'
import Navbar from '@/utils/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <ProductShowCase/>
      <Footer />
    </>
  )
}

export default page