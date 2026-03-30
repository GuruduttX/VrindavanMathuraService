import { connectDB } from "@/lib/mongodb";
import Taxi from "@/models/taxiModel";


export const createTaxiService = async (req: Request) => {
  try {

    await connectDB();

    const taxiData = await req.json();

    console.log("THE DATA OF THE TAXI IS : ");
    console.log(taxiData);

    return await Taxi.create(taxiData);

  } catch (error) {
    console.log(error);
    throw new Error("Error creating taxi");
  }
};


export const getAllTaxisService = async () => {
  try {
    await connectDB();

    return await Taxi.find();
  } catch (error) {
    throw new Error("Error fetching taxis");
  }
};


export const getTaxiByIdService = async (id: string) => {
  try {
    await connectDB();

    return await Taxi.findById(id);
  } catch (error) {
    throw new Error("Error fetching taxi by ID");
  }
};


export const updateTaxiService = async (req: Request, id: string) => {
  try {
    await connectDB();

    const data = await req.json();

    return await Taxi.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error("Error updating taxi");
  }
};


export const deleteTaxiService = async (id: string) => {
  try {
    await connectDB();

    return await Taxi.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Error deleting taxi");
  }
};