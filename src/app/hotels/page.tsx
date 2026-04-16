"use client"
import HotelExperienceSection from '@/components/HotelsArchive/HotelExperienceSection'
import HotelsHero from '@/components/HotelsArchive/HotelHero'
import HotelsArchive from '@/components/HotelsArchive/HotelsArchive'
import HotelsCTA from '@/components/HotelsArchive/HotelsCTA'
import LuxuryFooter from '@/utils/Footer'
import Navbar from '@/utils/Navbar'
import FAQSection from '@/components/Blog/FAQSection'
import React from 'react'
import {useState} from "react"
import { IFAQ } from '@/types/hotelTypes'


const hotelFAQs: IFAQ[] = [
  {
    id: "faq-1",
    question: "What is the standard check-in and check-out time?",
    answer:
      "Standard check-in is typically at 2:00 PM, and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability.",
  },
  {
    id: "faq-2",
    question: "Is breakfast included in the room rate?",
    answer:
      "It depends on the rate plan you select. Look for the 'Breakfast Included' tag during the booking process. If not included, breakfast can be purchased at the hotel restaurant.",
  },
  {
    id: "faq-3",
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes, cancellations and modifications depend on the specific policy of the room you booked. 'Fully Refundable' rooms can usually be cancelled up to 24-48 hours before arrival.",
  },
  {
    id: "faq-4",
    question: "Do I need a credit card to make a reservation?",
    answer:
      "Yes, a valid credit card is required to guarantee your reservation. Depending on the policy, you may be charged at the time of booking or upon arrival.",
  },
  {
    id: "faq-5",
    question: "Are pets allowed in the hotel?",
    answer:
      "Pet policies vary by hotel. Some of our properties are pet-friendly for an additional fee. Please check the 'Amenities' section of the specific hotel page.",
  },
  {
    id: "faq-6",
    question: "Is there a shuttle service to the airport?",
    answer:
      "Many of our hotels offer airport shuttle services. We recommend contacting the hotel directly 24 hours in advance to schedule a pickup.",
  },
  {
    id: "faq-7",
    question: "What documents do I need to present at check-in?",
    answer:
      "You will need to present a government-issued photo ID (Passport, Driver’s License, or National ID) and the credit card used for the booking.",
  },
  {
    id: "faq-8",
    question: "Is parking available on-site?",
    answer:
      "Most of our hotels offer on-site parking. Some offer it for free, while others charge a daily valet or self-parking fee. Check the 'Facilities' section for details.",
  },
];


const page = () => {
  const [faqs, setFaqs] = useState<IFAQ[]>([]);

  return (
    <>
      <Navbar />
      <HotelsHero />
      <HotelsArchive />
      <HotelExperienceSection />
      <HotelsCTA />
      <FAQSection faqs={hotelFAQs} />
      <LuxuryFooter />
    </>
  );
}

export default page