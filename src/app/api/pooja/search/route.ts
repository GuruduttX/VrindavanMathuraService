import { getPoojaBySlugController } from "@/controllers/poojaController";
import { NextRequest , NextResponse } from "next/server";


export async function GET(
  req : NextRequest,
  
) {

   const slug = req.nextUrl.searchParams.get('slug');

   if (!slug) {
         return NextResponse.json(
           { success: false, message: "Missing query params" },
           { status: 400 }
         );
       }
  return await getPoojaBySlugController(slug);
}