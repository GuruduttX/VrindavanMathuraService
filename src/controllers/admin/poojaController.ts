import { deleteAdminPoojaService, getAdminPoojasService , updateAdminPoojaService,getAdminPoojaByIdService, createAdminPoojaService } from "@/services/admin/poojaServices";
import { createPooja } from "@/services/poojaServices";
import { NextResponse } from "next/server";


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

    const pooja = await createAdminPoojaService(body); 

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
    const { id } = params;           

    const updated = await updateAdminPoojaService(body, id);

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