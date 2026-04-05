import { getAllPoojasController } from "@/controllers/users/poojaController";
import { NextResponse } from "next/server";

export async function GET() {

  try {

    return await getAllPoojasController();

  } catch (error) {

    return NextResponse.json({

      success: false,
      message: "Failed to fetch users pooja"

    }, { status: 500 });

  }
  
}



