import { NextResponse } from "next/server";
import { getUserAllPackageService, getUserTourBySlugAndDurationService} from "@/services/users/packageService";
import { connectDB } from "@/lib/mongodb";

export async function getUserAllToursController() {

  try {
    
    const tours = await getUserAllPackageService();

    return NextResponse.json({
      success: true,
      data: tours,
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch users tours" },
      { status: 500 }
    );
  }

}


export async function getTourBySlugAndDuration( slug: string, duration: string) {

  try {
    await connectDB();

    const tour = await getUserTourBySlugAndDurationService(slug, duration);

    if (!tour) {
      return NextResponse.json(
        { message: "User Tour not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(tour, { status: 200 });

  } catch (error) {
    console.error("Error fetching user tour:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }

}



