import { getUserPoojasService , getUserPoojaBySlugService } from "@/services/users/poojaServices";
import { NextResponse } from "next/server";


export async function getAllPoojasController(){

    try {

        const Pooja =  await getUserPoojasService();
        return Response.json({success : true, data :Pooja})

    } catch (error) {
      
        console.log("Error Message", error);
        return Response.json({success : false, error : "Server Error"}, {status : 500});

    }
}


export const getUserPoojaBySlugController = async (slug: string) => {

  try {

    const pooja = await getUserPoojaBySlugService(slug);

    return NextResponse.json(pooja, { status: 200 });

  } catch (error: any) {

    return NextResponse.json(

      { message: error.message || "Something went wrong" },
      { status: 500 }

    );
  }
};
