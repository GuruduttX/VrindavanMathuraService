import Hotel from "@/models/hotelModel";


export const getUserAllHotelsService = async () => {

  try {

    const hotels = await Hotel.find({status : {$eq : "published"}}).sort({createdAt : -1});

    return hotels;

  } catch (error) {

    throw new Error("failed to fetch All User Hotels: ");

  }
  
}


export const getUserHotelBySlugService = async (slug: string) => {

  try {

    const hotel = await Hotel.findOne({ slug : slug });

    if(hotel.status == "draft"){
      return;
    }

    return hotel;

  } catch (error: any) {

    throw new Error("Failed to fetch User hotel");

  }

};


