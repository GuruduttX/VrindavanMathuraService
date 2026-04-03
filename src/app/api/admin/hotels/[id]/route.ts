import { deletedHotel, getHotelById, updateHotel } from "@/controllers/hotelControllers";
import { connectDB } from "@/lib/mongodb";


export async function GET(req : Request, { params }: { params: Promise<{ id : string }>}){

    await connectDB();

    const {id} = await params;

    return getHotelById(id);
}

export async function PUT(req : Request , {params} : {params : Promise<{id : string}>}){
    
    await connectDB();
    const {id} = await params;

    return updateHotel(req , id);
}

export async function DELETE(req : Request , {params }: {params : Promise<{id : string}>}){

    await connectDB();
    const {id} = await params;

    return deletedHotel(id);
}


