import { NextRequest, NextResponse } from "next/server";
import { success } from "zod";
import { getAdminHotelBySlugController } from "@/controllers/admin/hotelControllers";

export async function GET(req : NextRequest){
     const slug = req.nextUrl.searchParams.get('slug');

     if(!slug){
        return NextResponse.json({success : false, message : "Search Qeury is missing"}, {status : 400})
     }

     return  getAdminHotelBySlugController(slug);
}