import { connectDB } from "@/lib/mongodb";
import Hotel from "@/models/hotelModel";
import { IHotel } from "@/types/hotelTypes";


export const createAdminHotelService = async (data: Partial<IHotel>) => {

  try {
    const hotel = await Hotel.create(data);
    return hotel;
  } catch (error: any) {
    throw new Error(error.message || "Failed to create hotel");
  }

};

export const getAllAdminHotelsService = async () => {
  try {
     await connectDB();
    const hotels = await Hotel.find();
    console.log("fsdf");
    return hotels;

  } catch (error) {

    throw new Error("failed to fetch All Hotels: ");

  }
}


export const getAdminHotelByIdService = async (id: string) => {

  try {

    const hotel = await Hotel.findById( id );
    return hotel;

  } catch (error: any) {
    throw new Error("Failed to fetch hotel");
  }

};


export const updateAdminHotelService = async (id: string, data: Partial<IHotel>) => {

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(id, data, {returnDocument : "after"}
    );

    return updatedHotel;

  } catch (error: any) {
    console.log(error)
    throw new Error("Failed to update hotel");
  }

};


export const deleteAdminHotelService = async (id: string) => {

  try {
    const deletedHotel = await Hotel.findByIdAndDelete(id);
    return deletedHotel;
  } catch (error: any) {
    throw new Error("Failed to delete hotel");
  }

};