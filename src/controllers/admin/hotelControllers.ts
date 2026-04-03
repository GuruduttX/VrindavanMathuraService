import { createAdminHotelService, deleteAdminHotelService, getAllAdminHotelsService, getAdminHotelByIdService, updateAdminHotelService } from "@/services/admin/hotelServices";
import { NextResponse } from "next/server";

export const createHotel = async (req: Request) => {

    try {

        const hotelData = await req.json();

        const hotel = await createAdminHotelService(hotelData);

        return NextResponse.json({
            success: true,
            data: hotel
        }, { status: 201 })

    } catch (error: any) {
         console.log(error);

        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 })

    }
    
}

export const getAllHotels = async () => {

    try {

        const hotels = await getAllAdminHotelsService();

        return NextResponse.json({
            success : true,
            data : hotels
        }, {status : 200})
        
    } catch (error) {

        return NextResponse.json({
            success : false,
            message : "All Hotels Are Not Founded There Are Some Errors"
        })

    }

}

export const getHotelById = async (id: string) => {
    
    try {

        const hotel = await getAdminHotelByIdService(id);

        if (!hotel) {

            return NextResponse.json({
                success: false, message: "Not Found"
            }, { status: 404 })

        }

        return NextResponse.json({

            success: true,
            data: hotel

        })

    } catch (error) {
          console.log(error);
          return NextResponse.json({
            success : false,
            message : "All Hotels Are Not Founded There Are Some Errors"
        })
    }
}



export const updateHotel = async (req: Request, id: string) => {

    try {

        const hotelData = await req.json();
        const hotel = await updateAdminHotelService(id, hotelData);

        return NextResponse.json({
            success: true,
            data: hotel
        })

    } catch (error: any) {
        console.log("Controller", error);

        return NextResponse.json({
            success: false,
            error: error.message

        }, { status: 500 })

    }
}


export const deletedHotel = async (id: string) => {
    try {

        await deleteAdminHotelService(id);

        return NextResponse.json({
            success: true,
            message: "Data Deleted Succesfully"
        })

    } catch (error: any) {

        return NextResponse.json({
            success: false,
            error: error.message
        })

    }
}