import Taxi from "@/models/taxiModel"
import Blog from "@/models/blogModel"
import Hotel from "@/models/hotelModel"
import PoojaModel from "@/models/poojaModel"
import TourPackageModel from "@/models/packageModel"
import { connectDB } from "@/lib/mongodb"


export const getAllAdminDashboardDataServices = async ()=> {
        connectDB();

       const [taxiCount, hotelCount, blogsCount, poojaCount, packageCount] =
         await Promise.all([
           Taxi.countDocuments({ status: "published" }),
           Hotel.countDocuments({ status: "published" }),
           Blog.countDocuments({ status: "published" }),
           PoojaModel.countDocuments({ status: "published" }),
           TourPackageModel.countDocuments({ status: "published" }),
         ]);

       return {
         taxiCount,
         hotelCount,
         blogsCount,
         poojaCount,
         packageCount,
       };
        
}