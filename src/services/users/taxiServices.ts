import { connectDB } from "@/lib/mongodb";
import Taxi from "@/models/taxiModel";

export const getUserAllTaxiService = async () => {

  try {

    await connectDB();

    const taxis = await Taxi.find({status : {$eq : "published"}}).sort({createAt : -1});

    return taxis;

  } catch (error) {

    throw new Error("Error fetching User taxis");

  }

};
