import React from 'react'
import { Taxiinterface } from './LeftReviewSection'

interface RightReviewSectionProps {
  taxi: Taxiinterface
}
const RightReviewSection = ({ taxi }: RightReviewSectionProps) => {


    console.log(taxi, "from right review section")
    return (
        <div className="sticky top-28 h-fit">

            <div className="bg-white rounded-3xl shadow-xl p-6 border border-amber-100">

                <h2 className="text-lg font-semibold mb-4">
                    Fare Summary
                </h2>

                <div className="space-y-3 text-sm">

                    <div className="flex justify-between">
                        <span>Base Fare</span>
                        <span>{`₹${taxi.basePrice}`}</span>
                    </div>


                    <div className="flex justify-between">
                        <span>Taxes</span>
                        <span>Included</span>
                    </div>

                </div>

                <hr className="my-4" />

                <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-amber-600">{taxi.basePrice}</span>
                </div>

                <button className="mt-6 w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-xl font-medium hover:scale-105 transition">
                    Confirm Booking
                </button>

                <p className="text-xs text-center text-gray-500 mt-3">
                    Safe & Secure Payments
                </p>

                <div className="grid grid-cols-3 gap-2 mt-6 text-xs text-center">

                    <div className="bg-amber-50 rounded-lg p-2">
                        🔒 Secure
                    </div>

                    <div className="bg-amber-50 rounded-lg p-2">
                        💸 No Hidden Charges
                    </div>

                    <div className="bg-amber-50 rounded-lg p-2">
                        📞 24/7 Support
                    </div>

                </div>

            </div>

        </div>
    )
}

export default RightReviewSection