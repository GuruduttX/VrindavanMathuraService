import Hotel from "@/models/hotelModel";
import { IHotel } from "@/types/hotelTypes";


export const createHotelService = async (data: Partial<IHotel>) => {

  try {
    const hotel = await Hotel.create(data);
    return hotel;
  } catch (error: any) {
    throw new Error(error.message || "Failed to create hotel");
  }

};

export const getAllHotelsService = async () => {
  try {

    const hotels = await Hotel.find();
    return hotels;

  } catch (error) {

    throw new Error("failed to fetch All Hotels: ");

  }
}


export const getHotelByIdService = async (slug: string) => {

  try {

    const hotel = await Hotel.findOne({ slug : slug });
    return hotel;

  } catch (error: any) {
    throw new Error("Failed to fetch hotel");
  }

};


export const updateHotelService = async (id: string, data: Partial<IHotel>) => {

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });

    return updatedHotel;

  } catch (error: any) {
    throw new Error("Failed to update hotel");
  }

};


export const deleteHotelService = async (id: string) => {

  try {
    const deletedHotel = await Hotel.findByIdAndDelete(id);
    return deletedHotel;
  } catch (error: any) {
    throw new Error("Failed to delete hotel");
  }

};