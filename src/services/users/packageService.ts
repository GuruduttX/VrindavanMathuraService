import { connectDB } from "@/lib/mongodb";
import TourPackageModel from "@/models/packageModel";

export async function getUserAllPackageService() {
    await connectDB();
    const tours = await TourPackageModel.find({status : {$eq : "published"}});
    return tours;
}

export  async function getUserTourBySlugAndDurationService(slug : string, duration : string){
   await connectDB();
   const tour = await TourPackageModel.findOne({slug, duration});

   if(tour?.status == "draft"){
    return;
   }

   return tour;
}