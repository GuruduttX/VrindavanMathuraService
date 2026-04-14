import { createAdminHotelService, deleteAdminHotelService, getAllAdminHotelsService, getAdminHotelByIdService, updateAdminHotelService } from "@/services/admin/hotelServices";
import { hotelSchema } from "@/zodSchema/hotelSchema";
import { NextResponse } from "next/server";

export const createAdminHotelController = async (req: Request) => {

    try {

        const body = await req.json()

        const result = hotelSchema.safeParse(body);

        if(!result.success){
            
            return Response.json({
                success : false,
                errors : result.error.flatten()
            }, {status : 400})
        }

        const hotelData = result.data;

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

export const getAdminHotelsController = async () => {

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

export const getAdminHotelByIdController = async (id: string) => {
    
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



export const updateAdminHotelController = async (req: Request, id: string) => {

    try {

        const body = await req.json();
        const result = hotelSchema.safeParse(body);

        if(!result.success){
            return Response.json({
                success : false,
                errors : result.error.flatten()
            }, {status : 400})
        }

        const hotelData = result.data;

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


export const deleteAdminHotelController = async (id: string) => {
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