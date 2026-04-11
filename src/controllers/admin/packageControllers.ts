import { NextResponse } from "next/server";
import { getAdminPackagesService, createAdminPackageService, updateAdminPackagesService, getAdminPackageByIdService , deleteAdminPackageService} from "@/services/admin/packageService";


// Get All
export async function getAdminToursController() {
  try {
    const tours = await getAdminPackagesService();

    return NextResponse.json({
      success: true,
      data: tours,
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch tours" },
      { status: 500 }
    );
  }
}


// Create
export async function createAdminTourController(req: Request) {
  try {
    const body = await req.json();

    const tour = await createAdminPackageService(body) ;

    return NextResponse.json({
      success: true,
      data: tour,
    });

  } catch (error) {
    console.log("Error In Package", error);
    return NextResponse.json(
        
      { success: false, message: "Failed to create tour" },
      { status: 500 }
    );
  }
}


export async function updateAdminTourController(
  req: Request,
  params: { id: string }
) {
  try {
    const body = await req.json(); 
    const { id } = params; 
    
    if(!id){
       console.log("Id not commint");
       return;
    }

    const updatedTour = await updateAdminPackagesService(id, body);

    return NextResponse.json({
      success: true,
      data: updatedTour,
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Update failed" },
      { status: 500 }
    );
  }
}

export async function deleteAdminTourController(
  req : Request,
  params : {id : string}){
    try {

      const {id} = params;

      const deltedTour = await  deleteAdminPackageService(id)

      return NextResponse.json({
         success : true,
         data : deltedTour
      });
      
    } catch (error) {
       console.log("error", error);
       return NextResponse.json({
         
         success : false , message : "Failed To Delete"
       }, {status : 500})
    }
}


export async function getAdminTourByIdController(params: { id: string }) {
  try {
    const { id } = params;

    const tour = await getAdminPackageByIdService(id);

    if (!tour) {
      return NextResponse.json(
        { success: false, message: "Tour not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: tour,
    });

  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch tour" },
      { status: 500 }
    );
  }
}