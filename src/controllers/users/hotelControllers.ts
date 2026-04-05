import {  getUserAllHotelsService, getUserHotelBySlugService } from "@/services/users/hotelServices";
import { NextResponse } from "next/server";

export const getUserAllHotelsController = async () => {

    try {

        const hotels = await getUserAllHotelsService();

        return NextResponse.json({
            success : true,
            data : hotels
        }, {status : 200})
        
    } catch (error) {

        return NextResponse.json({
            success : true,
            message : "All Hotels Are Not Founded There Are Some Errors"
        })

    }

}

export const getUserHotelBySlugController = async (slug: string) => {
    
    try {

        const hotel = await getUserHotelBySlugService(slug);

        if (!hotel) {

            return NextResponse.json({
                success: false, message: "Not Found User Hotel"
            }, { status: 404 })

        }

        return NextResponse.json({

            success: true,
            data: hotel

        })

    } catch (error) {

    }
}




