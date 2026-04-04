import { NextResponse } from "next/server";
import { getPackages, createPackage, updatePackages, getPackageById , deletePackage, getTourBySlugAndDurationService} from "@/services/packageService";
import { connectDB } from "@/lib/mongodb";


// Get All
export async function getAllToursController() {
  try {
    const tours = await getPackages();

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
export async function createTourController(req: Request) {
  try {
    const body = await req.json();

    const tour = await createPackage(body) ;

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


export async function updateTourController(
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

    const updatedTour = await updatePackages(id, body);

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

export async function deleteTourController(
  req : Request,
  params : {id : string}){
    try {

      const {id} = params;

      const deltedTour = await  deletePackage(id)

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


export async function getTourByIdController(params: { id: string }) {
  try {
    const { id } = params;

    const tour = await getPackageById(id);

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


export async function getTourBySlugAndDuration( slug: string, duration: string) {
  try {
    await connectDB();

    const tour = await getTourBySlugAndDurationService(slug, duration);

    if (!tour) {
      return NextResponse.json(
        { message: "Tour not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(tour, { status: 200 });

  } catch (error) {
    console.error("Error fetching tour:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}



