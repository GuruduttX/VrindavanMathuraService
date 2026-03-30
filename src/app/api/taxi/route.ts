import { createTaxi, getAllTaxis} from "@/controllers/taxiControllers";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
  try {
    await connectDB();    
    return await getAllTaxis();

  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    
    await connectDB();
    return await createTaxi(req);

  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}