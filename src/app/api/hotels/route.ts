import { createHotel, getAllHotels, getHotelById } from "@/controllers/hotelControllers";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET() {

    try {

        await connectDB();

        return getAllHotels();

    } catch (error) {

        NextResponse.json({ success: false })

    }

}

export async function POST(req: Request) {

    await connectDB();

    return createHotel(req);

}