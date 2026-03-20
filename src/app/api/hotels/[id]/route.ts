import { deletedHotel, getHotelById, updateHotel } from "@/controllers/hotelControllers";
import { connectDB } from "@/lib/mongodb";


export async function GET({params} : {params : {id : string}}){

    await connectDB();

    return getHotelById(params.id);
}

export async function PUT(req : Request , {params} : {params : {id : string}}){
    
    await connectDB();

    return updateHotel(req , params.id);
}

export async function DELETE(req : Request , {params }: {params : {id : string}}){

    await connectDB();

    return deletedHotel(params.id);
}


