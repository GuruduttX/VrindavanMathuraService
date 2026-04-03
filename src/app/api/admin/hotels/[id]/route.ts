import { deleteAdminHotelController, getAdminHotelByIdController, updateAdminHotelController } from "@/controllers/admin/hotelControllers";
import { connectDB } from "@/lib/mongodb";


export async function GET(req : Request, { params }: { params: Promise<{ id : string }>}){

    await connectDB();

    const {id} = await params;

    return getAdminHotelByIdController(id);
}

export async function PUT(req : Request , {params} : {params : Promise<{id : string}>}){
    
    await connectDB();
    const {id} = await params;

    return updateAdminHotelController(req , id);
}

export async function DELETE(req : Request , {params }: {params : Promise<{id : string}>}){

    await connectDB();
    const {id} = await params;

    return deleteAdminHotelController(id);
}