import { connectDB } from "@/lib/mongodb";
import TourPackageModel from "@/models/packageModel";

export async function createPackage(data : any){
     await connectDB();
     const tour  = await TourPackageModel.create(data);
     return tour;
}

export async function getPackages() {
    await connectDB();
    const tours = await TourPackageModel.find();
    return tours;
}

export async function updatePackages(id : string, data : any) {
    await connectDB();
    const updated = await TourPackageModel.findByIdAndUpdate(id,data, {new : true});

    return updated;
}

export async function deletePackage(id: string) {
  await connectDB();

  const deletedTour = await TourPackageModel.findByIdAndDelete(id);

  if (!deletedTour) {
    throw new Error("Tour not found");
  }

  return deletedTour;
}

export async function getPackageById(id : string) {
  await connectDB();
  const tour = await TourPackageModel.findById(id);

  if (!tour) {
    throw new Error("Tour not found");
  }

  return tour;
}

export  async function getTourBySlugAndDurationService(slug : string, duration : string){
   await connectDB();
   const tour = await TourPackageModel.findOne({slug, duration});
   return tour;
}