import { connectDB } from "@/lib/mongodb";
import Taxi from "@/models/taxiModel";
import { taxiSchema } from "@/zodSchema/taxiSchema";
import { ITaxi } from "@/types/taxiTypes";


export const createAdminTaxiService = async (taxiData :  Partial<ITaxi>) => {
  try {

    await connectDB();

   

    console.log("THE DATA OF THE TAXI IS : ");
    console.log(taxiData);

    return await Taxi.create(taxiData);

  } catch (error) {
    console.log(error);
    throw new Error("Error creating taxi");
  }
};


export const getAllAdminTaxisService = async () => {
  try {
    await connectDB();

    return await Taxi.find();
  } catch (error) {
    throw new Error("Error fetching taxis");
  }
};


export const getAdminTaxiByIdService = async (id: string) => {
  try {
    await connectDB();

    return await Taxi.findById(id);
  } catch (error) {
    throw new Error("Error fetching taxi by ID");
  }
};


export const getUserTaxiBySlugService = async (id: string) => {
  try {
    await connectDB();
    return await Taxi.findById(id);
  } catch (error) {
    throw new Error("Error User Fetching taxi by ID")
  }
}


export const updateAdminTaxiService = async (taxiData : Partial<ITaxi>, id: string) => {
  try {
    await connectDB();


    return await Taxi.findByIdAndUpdate(id, taxiData, { new: true });
  } catch (error) {
    throw new Error("Error updating taxi");
  }
};


export const deleteAdminTaxiService = async (id: string) => {
  try {
    await connectDB();

    return await Taxi.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Error deleting taxi");
  }
};


export async function getAdminPoojaBySlugService(slug : string){
     await connectDB();
     const taxis = await Taxi.findOne({slug : slug});
      if (!taxis) {
        throw new Error("Taxi not found");
      }
     return taxis;
}