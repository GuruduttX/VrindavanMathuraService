import { deleteAdminPoojaService, getAdminPoojasService , updateAdminPoojaService,getAdminPoojaByIdService, createAdminPoojaService, getAdminPoojaBySlugService } from "@/services/admin/poojaServices";
import { poojaSchema } from "@/zodSchema/poojaSchema";
import { NextResponse } from "next/server";
import { success } from "zod";


export async function getAdminPoojasController(){
    try {
        const Pooja =  await getAdminPoojasService();
        return Response.json({success : true, data :Pooja})

    } catch (error) {
        console.log("Error Message", error);
        return Response.json({success : false, error : "Server Error"}, {status : 500})
    }
}

export async function createAdminPoojaController(req: Request) {
  try {
    const body = await req.json(); 

    const result = poojaSchema.safeParse(body);

    if(!result.success){
       return Response.json({success: false, error : result.error.flatten()}, {status : 400});
    }

    const poojaData = result.data;

    const pooja = await createAdminPoojaService(poojaData); 

    return NextResponse.json({
      success: true,
      data: pooja,
      message: "Pooja created successfully",
    });

  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(
      { success: false, message: "Failed to create pooja" },
      { status: 500 }
    );
  }
}


export async function updateAdminPoojaController(
  req: Request,
  params: { id: string }
) {
  try {
    const body = await req.json();   
    const result = poojaSchema.safeParse(body);

    if(!result.success){
       return Response.json({success: false, error : result.error.flatten()}, {status : 400});
    }

    const poojaData = result.data;

    const { id } = params;  
    
    

    const updated = await updateAdminPoojaService(poojaData, id);

    return NextResponse.json({
      success: true,
      data: updated,
      message: "Pooja updated successfully",
    });

  } catch (error) {
    console.log("Error in updating", error)
    return NextResponse.json(
      { success: false, message: "Update failed" },
      { status: 500 }
    );
  }
}

export async function getAdminPoojaByIdController(params: { id: string }) {
  try {
    const { id } = params;

    const pooja = await getAdminPoojaByIdService(id);

    return NextResponse.json({
      success: true,
      data: pooja,
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Not found" },
      { status: 404 }
    );
  }
}

export async function deleteAdminPoojaController(params: { id: string }) {
  try {
    const { id } = params;

    await deleteAdminPoojaService(id);

    return NextResponse.json({
      success: true,
      message: "Deleted successfully",
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Delete failed" },
      { status: 500 }
    );
  }
}

export async function getAdminPoojaBySlugController(slug : string){
    try {

      const pooja = await getAdminPoojaBySlugService(slug);
      
      if(!pooja){
         return NextResponse.json({exists : false}, {status : 404});
      }

      return NextResponse.json({exists : true, data : pooja}, {status : 200});
      
    } catch (error) {
       console.log("This is the error ", error);
       return NextResponse.json({message : "Something went Wrong!"},{status:500})
    }
}

