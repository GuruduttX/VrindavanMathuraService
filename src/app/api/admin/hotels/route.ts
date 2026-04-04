import { createAdminHotelController, getAdminHotelsController } from "@/controllers/admin/hotelControllers";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET() {

    try {

        console.log("route")
        return getAdminHotelsController();

    } catch (error) {

        NextResponse.json({ success: false })

    }

}

export async function POST(req: Request) {

    await connectDB();

    return createAdminHotelController(req);

}